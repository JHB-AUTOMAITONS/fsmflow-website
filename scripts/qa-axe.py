"""
Accessibility scan with axe-core (WCAG 2.1 A/AA + best practices) over every prerendered route.

  npm run build && node scripts/serve.mjs 4173      # in another terminal
  python scripts/qa-axe.py http://localhost:4173 [--mobile]
Exit code 1 if any violation is found.
"""
import json, pathlib, sys
from playwright.sync_api import sync_playwright

base = sys.argv[1].rstrip("/") if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else "http://localhost:4173"
mobile = "--mobile" in sys.argv
root = pathlib.Path(__file__).resolve().parent.parent
routes = json.loads((root / "dist" / ".routes.json").read_text(encoding="utf8"))
axe_src = (root / "node_modules" / "axe-core" / "axe.min.js").read_text(encoding="utf8")
vp = {"width": 390, "height": 844} if mobile else {"width": 1440, "height": 900}
total = 0
with sync_playwright() as p:
    b = p.chromium.launch()
    for route in routes:
        ctx = b.new_context(viewport=vp, is_mobile=mobile, has_touch=mobile)
        page = ctx.new_page()
        page.goto(base + route, wait_until="networkidle")
        page.wait_for_timeout(600)
        # reveal everything so hidden-until-scrolled content is evaluated in its final state
        h = page.evaluate("document.documentElement.scrollHeight")
        for y in range(0, h, 500):
            page.evaluate(f"window.scrollTo(0,{y})"); page.wait_for_timeout(40)
        page.wait_for_timeout(1200)
        page.evaluate("window.scrollTo(0,0)")
        page.add_script_tag(content=axe_src)
        res = page.evaluate("""() => axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] } })""")
        v = res["violations"]
        total += len(v)
        print(("FAIL " if v else "ok   ") + route)
        for item in v:
            print(f"   [{item['impact']}] {item['id']}: {item['help']} ({len(item['nodes'])} nodes)")
            for n in item["nodes"][:2]:
                print("       ", n["html"][:110].replace("\n", " "), "|", (n.get("failureSummary") or "").split("\n")[-1][:110])
        ctx.close()
    b.close()
print(f"\n{'FAILED' if total else 'PASSED'}: {total} violation types across {len(routes)} pages")
sys.exit(1 if total else 0)
