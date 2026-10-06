"""Usage: python shot.py <url> <out.png> [width] [height] [fullpage 0/1] [scrollY] [clip_selector]"""
import sys
from playwright.sync_api import sync_playwright

url = sys.argv[1]
out = sys.argv[2]
w = int(sys.argv[3]) if len(sys.argv) > 3 else 1440
h = int(sys.argv[4]) if len(sys.argv) > 4 else 900
full = (sys.argv[5] == "1") if len(sys.argv) > 5 else False
scroll = int(sys.argv[6]) if len(sys.argv) > 6 else 0
sel = sys.argv[7] if len(sys.argv) > 7 else None

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": w, "height": h}, device_scale_factor=1)
    page = ctx.new_page()
    logs = []
    page.on("console", lambda m: logs.append((m.type, m.text)) if m.type in ("error", "warning") else None)
    page.on("pageerror", lambda e: logs.append(("pageerror", str(e))))
    page.goto(url, wait_until="networkidle")
    page.wait_for_timeout(1800)
    if scroll:
        page.evaluate(f"window.scrollTo(0,{scroll})")
        page.wait_for_timeout(1200)
    if full:
        # trigger all reveals by scrolling through
        total = page.evaluate("document.documentElement.scrollHeight")
        y = 0
        while y < total:
            page.evaluate(f"window.scrollTo(0,{y})")
            page.wait_for_timeout(120)
            y += h // 2
            total = page.evaluate("document.documentElement.scrollHeight")
        page.evaluate("window.scrollTo(0,0)")
        page.wait_for_timeout(600)
    if sel:
        page.locator(sel).first.screenshot(path=out)
    else:
        page.screenshot(path=out, full_page=full)
    for l in logs:
        print("LOG", l)
    b.close()
print("saved", out)
