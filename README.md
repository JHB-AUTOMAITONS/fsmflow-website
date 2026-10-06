# FSMFlow.in — marketing website

Premium, light-themed marketing site for **FSMFlow**, a field service management platform for Indian service
businesses (HVAC / AC first, plus CCTV, solar, construction and general service teams).

Built with **React 19 · TypeScript · Vite · Tailwind CSS v4 · react-router · lucide-react**, statically
**prerendered** so every page ships real HTML (title, meta, H1, structured data) to search engines and
hydrates into a fast single-page app.

The site structure, URLs, navigation and SEO rules come from `FSM.docx` (extracted copy:
[`docs/FSM-extracted.txt`](docs/FSM-extracted.txt)). **23 approved pages — no more, no fewer.**

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server with hot reload (client-rendered) at http://localhost:5173 |
| `npm run build` | Typecheck → client build → server build → **prerender all 23 pages** + `404.html` + `sitemap.xml` into `dist/` |
| `npm run preview` | Serve `dist/` like a static host (clean URLs, real 404 status) at http://localhost:4173 |
| `npm run audit:seo` | Audit the built site: one H1 = approved keyword, title/meta lengths, canonical, JSON-LD, heading order, alt text, **broken internal links**, excluded pages |
| `python scripts/qa-browser.py http://localhost:4173` | Browser QA over every route at 1440 / 820 / 390 px: console + hydration errors, overflow, tap targets, accessible names (`--shots` saves screenshots) |
| `python scripts/qa-axe.py http://localhost:4173 [--mobile]` | axe-core accessibility scan (WCAG 2.1 A/AA + best practices) over every route |
| `npm run lint` | oxlint |

## Page map (source of truth: `src/data/`)

```
/                                              Home (primary: field service management software)
/solutions/hvac-field-service-software         HVAC — bespoke flagship page
/solutions/cctv-software                       ┐
/solutions/solar-software                      │ data-driven template
/solutions/construction-management-software   │ (src/pages/SolutionPage.tsx)
/solutions/service-business-management-software┘
/features/sales-crm-software                   ┐
/features/asset-management-software            │
/features/quotation-software                   │
/features/work-order-management-software       │ data-driven template
/features/warranty-management-software         │ (src/pages/FeaturePage.tsx)
/features/inventory-management-software        │
/features/field-service-app                    │
/features/employee-management-software         │
/features/reporting-software                   ┘
/pricing  /blog  /demo  /about  /contact
/privacy-policy  /terms-and-conditions  /refund-policy
```

Header: `Home | Solutions ▼ | Features ▼ | Pricing | Blog | Book a Demo` — **no Login link**. There are intentionally
no `/solutions` or `/features` index pages (they are dropdowns only), and no Guides, Free Templates, public
Settings or standalone "Field Service Management" page, as the document specifies.

## Project structure

```
src/
  components/
    ui/            Button, Bezel, Section, Container, Eyebrow, SectionHeading, Faq, CtaBand, Reveal, Counter …
    nav/           Header, MegaMenus, MobileMenu, Footer
    brand/         Logo, FlowBackdrop (the "airflow line" motif)
    illustrations/ HVAC illustrations (split AC, condenser, service van, thermostat dial)
    product/       Product-UI kit: ProductWindow, CityMap, JobPanels, ServiceDashboard, PhoneFrame, feature-visuals/, solution-visuals/
    seo/ layout/ forms/ sections/   (shared page pieces, form fields, per-page section components)
  sections/        Page sections (home/, hvac/ …)
  pages/           One file per route (lazy-loaded)
  layouts/         MainLayout (skip link, header, <main>, footer)
  data/            site, nav, features, solutions, blog, pricing, legal, routes, sample (mockup data)
  hooks/ lib/      useOnView, useAlongPath, useCycle · cn, seo, schema, forms, format
  styles/index.css Design tokens (@theme), motion primitives, utilities
scripts/           prerender, serve, audit-seo, qa-browser
public/            favicon, OG image, robots.txt, sitemap source, .htaccess, manifest
```

Design system, component cheat-sheet and the SEO/copy rules used to build the site: [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md).

## Things to confirm before launch

These are deliberately placeholders — nothing was invented:

- **Pricing** — `src/data/pricing.ts`: every plan has `price: null` (renders a clear placeholder). Set a number to show a real price.
  Plan names, inclusions and the comparison table are placeholders too.
- **Contact details** — `src/data/site.ts` → `SITE.contact`: email is assumed (`hello@fsmflow.in`); phone, address and hours are empty and hidden until set.
- **Legal entity & policies** — `SITE.legalEntity` and the `CONFIRM:` constants at the top of `src/data/legal.ts` (refund window, notice period…). The policy text is a sensible starting draft; have it reviewed before publishing.
- **Forms** — set `VITE_LEAD_ENDPOINT` (an HTTPS URL that accepts a JSON POST) at build time to deliver demo/contact submissions.
  Without it, production falls back to opening a pre-filled email to `SITE.contact.email`.
- **Blog** — posts in `src/data/blog.ts` are `status: 'upcoming'` placeholders (shown on `/blog`, no article URLs yet). Set a post to
  `'published'` and add `publishedAt`, `author` and `body` to give it a `/blog/<slug>` page, sitemap entry and link automatically.
- **Social image** — `public/og-image.png` (1200×630) is generated artwork; replace if you prefer your own.
- Product visuals use **fictional sample data** (labelled "sample data" on the pages). No customer logos, testimonials or statistics are shown.

## Deploying

`npm run build` produces a fully static `dist/` — upload it to any static host.

- **Netlify (configured)**: `netlify.toml` holds the build command (`npm run build`), publish folder (`dist`), Node 22, caching and security
  headers and the www → apex redirect. `scripts/prerender.mjs` also writes `dist/_redirects` so every clean URL is served with a forced 200
  (no `/pricing` → `/pricing/` redirect). Steps: Netlify → *Add new site → Import an existing project → GitHub →* pick this repo → *Deploy*
  (settings are read from the file). Then *Domain management → Add a domain* → `fsmflow.in` (and `www.fsmflow.in`), follow the DNS
  instructions, and HTTPS is issued automatically. Optional env var: `VITE_LEAD_ENDPOINT`.
- **Cloudflare Pages / Vercel / S3+CDN**: publish `dist/`. Unknown URLs automatically use `404.html`.
- **Apache / cPanel**: upload the contents of `dist/` (including the hidden `.htaccess`). It serves clean URLs
  (`/solutions/cctv-software` → `…/index.html`) without redirects and uses `404.html`.
- **nginx**: `location / { try_files $uri $uri/index.html =404; } error_page 404 /404.html;`
- Canonical URLs are `https://fsmflow.in/<path>` with no trailing slash. Submit `https://fsmflow.in/sitemap.xml` in Google Search Console.

## SEO implementation notes

- Every page is prerendered with its own `<title>`, meta description, canonical, Open Graph / Twitter tags and JSON-LD
  (`Organization`, `WebSite`, `SoftwareApplication`, `WebPage`, `BreadcrumbList`, `FAQPage`, `Article` where relevant).
- Primary keyword = URL slug = H1 (exact match) for every solution and feature page; secondary keywords appear naturally in supporting copy.
- Mega-menu links are in the HTML (crawlable); legal pages carry no commercial keywords.
- `npm run audit:seo` enforces these rules after every build.

## Performance notes (measured, not guessed)

Profiling the production build at 4× CPU throttle showed JavaScript was ~5 % of main-thread time and **native style/layout/paint was ~90 %**,
driven mostly by always-running animations. What was done about it:

- `AmbientMotion` pauses endless CSS animations (pulses, flowing dashes, spinning fan) in sections that are scrolled out of view,
  using the Web Animations API (no attributes/classes touched, so no hydration mismatches).
- SVG dash animations step at ~10 fps; decorative `FlowBackdrop` lines are static (animated only in the CTA band).
- Result: native rendering work on the homepage fell from ≈ 6.5 s to ≈ 3.9 s at 4× throttle, and the HVAC page is at its no-animation floor.
- The prerender uses an eager route table (alias in `vite.config.ts`) and `renderToString`, so each page's full HTML is in place in
  `<main>` — no Suspense fallback or hidden streamed block. The browser build keeps per-route code splitting and preloads the matching chunk before hydrating.
- Fonts are self-hosted variable subsets; images are inline SVG/CSS (no raster assets besides the OG image and icons).
- Serve `dist/` with gzip/brotli (any CDN does) — the HTML pages are large because they contain real, prerendered content.

## Accessibility & performance

Skip link, landmarks, roving-tabindex workflow tabs, keyboard-operable mega-menu (Enter / Esc / Tab), `inert` on collapsed content,
`prefers-reduced-motion` respected globally, visible focus rings, AA text contrast, mockups exposed with descriptive labels.
Pages are code-split per route and the matching chunk is `modulepreload`-ed. Hydration is verified clean with the *development* React build on all 23 pages
(which reports attribute mismatches that production hides).
