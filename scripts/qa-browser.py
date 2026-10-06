"""
Browser QA for the prerendered site (Python Playwright).

  npm run build
  node scripts/serve.mjs 4173        # in another terminal
  python scripts/qa-browser.py http://localhost:4173 [--shots]

For every route in dist/.routes.json and at 1440 / 820 / 390 px wide it checks:
  - console errors / warnings, page errors, failed requests (incl. React hydration mismatches)
  - horizontal overflow
  - exactly one <h1>, document title present
  - images without alt, buttons/links without an accessible name
  - interactive elements smaller than 40px on the phone viewport (tap targets)
Exit code 1 if any hard failure is found. --shots writes screenshots to ./qa-report/.
Options: --only=/,/pricing   --widths=1440,390
"""
import json
import pathlib
import sys

from playwright.sync_api import sync_playwright

base = sys.argv[1].rstrip("/") if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else "http://localhost:4173"
shots = "--shots" in sys.argv
root = pathlib.Path(__file__).resolve().parent.parent
routes = json.loads((root / "dist" / ".routes.json").read_text(encoding="utf8"))
only = next((a.split("=", 1)[1] for a in sys.argv if a.startswith("--only=")), None)
if only:
    routes = [r for r in routes if r in only.split(",")]
viewports_arg = next((a.split("=", 1)[1] for a in sys.argv if a.startswith("--widths=")), None)
viewports = [("desktop", 1440, 900), ("tablet", 820, 1100), ("mobile", 390, 844)]
if viewports_arg:
    viewports = [v for v in viewports if str(v[1]) in viewports_arg.split(",")]
out_dir = root / "qa-report"
if shots:
    out_dir.mkdir(exist_ok=True)

CHECK_JS = """
() => {
  const vw = document.documentElement.clientWidth;
  const res = { overflow: document.documentElement.scrollWidth > vw + 1, h1: document.querySelectorAll('h1').length, noAlt: [], noName: [], small: [] };
  document.querySelectorAll('img').forEach((i) => { if (!i.hasAttribute('alt')) res.noAlt.push(i.src.slice(-40)); });
  const visible = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none'; };
  document.querySelectorAll('a[href], button, input:not([type=hidden]), select, textarea, [role=tab]').forEach((el) => {
    if (!visible(el)) return;
    if (el.closest('[inert],[aria-hidden=true]')) return;
    const name = (el.getAttribute('aria-label') || el.textContent || el.getAttribute('title') || '').trim() ||
      (el.id && document.querySelector('label[for="' + el.id + '"]')?.textContent?.trim()) || el.getAttribute('placeholder') || '';
    if (!name && !el.closest('label')) res.noName.push(el.outerHTML.slice(0, 90));
    const r = el.getBoundingClientRect();
    const inline = el.tagName === 'A' && getComputedStyle(el).display === 'inline';
    if (!inline && (r.height < 36 || r.width < 36) && !el.closest('footer')) res.small.push((el.textContent || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 30) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height));
  });
  return res;
}
"""

failures = 0
with sync_playwright() as p:
    browser = p.chromium.launch()
    for route in routes:
        for name, w, h in viewports:
            ctx = browser.new_context(viewport={"width": w, "height": h}, has_touch=(name == "mobile"), is_mobile=(name == "mobile"))
            page = ctx.new_page()
            problems = []
            page.on("console", lambda m, problems=problems: problems.append(f"console.{m.type}: {m.text[:160]}") if m.type in ("error", "warning") else None)
            page.on("pageerror", lambda e, problems=problems: problems.append(f"pageerror: {str(e)[:160]}"))
            page.on("requestfailed", lambda r, problems=problems: problems.append(f"requestfailed: {r.url[-60:]}"))
            page.on("response", lambda r, problems=problems: problems.append(f"http {r.status}: {r.url[-60:]}") if r.status >= 400 else None)
            page.goto(base + route, wait_until="networkidle")
            page.wait_for_timeout(500)
            total = page.evaluate("document.documentElement.scrollHeight")
            for y in range(0, total, max(400, h - 150)):  # scroll through to trigger lazy reveals/animations
                page.evaluate(f"window.scrollTo(0,{y})")
                page.wait_for_timeout(50)
            page.evaluate("window.scrollTo(0,0)")
            page.wait_for_timeout(300)
            res = page.evaluate(CHECK_JS)
            title = page.title()
            hard = list(problems)
            if res["overflow"]:
                hard.append("horizontal overflow")
            if res["h1"] != 1:
                hard.append(f"{res['h1']} <h1> elements")
            if not title:
                hard.append("empty <title>")
            if res["noAlt"]:
                hard.append(f"images without alt: {res['noAlt']}")
            if res["noName"]:
                hard.append(f"controls without accessible name: {res['noName'][:3]}")
            soft = res["small"][:4] if name == "mobile" else []
            status = "FAIL" if hard else ("warn" if soft else "ok  ")
            print(f"{status} {name:7} {route}")
            for x in hard:
                print(f"       ✗ {x}")
            for x in soft:
                print(f"       ~ small tap target: {x}")
            if hard:
                failures += 1
            if shots:
                slug = (route.strip("/").replace("/", "_") or "home") + f"_{name}.png"
                page.screenshot(path=str(out_dir / slug), full_page=True)
            ctx.close()
    browser.close()

print(f"\n{'FAILED' if failures else 'PASSED'}: {failures} page/viewport combinations with hard failures")
sys.exit(1 if failures else 0)
