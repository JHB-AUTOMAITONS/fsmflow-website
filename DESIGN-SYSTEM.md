# FSMFlow.in — design system & build conventions

Source of truth for structure, URLs and SEO: `FSM.docx` (23 approved pages). Do **not** add, remove
or rename public pages. Login, a Field Service Management page, Guides, Free Templates and a public
Settings page are explicitly excluded.

## Stack
React 19 · TypeScript 6 (strict, `erasableSyntaxOnly`, `verbatimModuleSyntax` → use `import type`, no enums) ·
Vite 8 · Tailwind CSS v4 (tokens live in `src/styles/index.css` under `@theme`; there is no tailwind.config) ·
react-router 8 (declarative) · lucide-react. Motion is CSS-driven (no animation library). Path alias: `@/` → `src/`.

Static prerender: `npm run build` renders every route to `dist/<route>/index.html` (see `scripts/prerender.mjs`).
Every page MUST render exactly one `<Seo …/>` and exactly one `<h1>`. Page components are default exports and are
lazy-loaded by `src/routes.tsx`.

## Look & feel (light theme only — never add dark surfaces or `dark:` variants)
- Paper: white / `bg-mist` (#f6f8fd) / `bg-wash-gradient`. Ink (navy): `text-ink-900` headings, `text-ink-600` body, `text-ink-500` muted.
- Accent: `brand` (electric blue) + `iris` (indigo) for primary; `aqua` = cooling/info; `heat` = heating/warning; `mint` = success; `coral` = alert (sparingly).
- Fonts: `font-display` (Bricolage Grotesque, headings), `font-sans` (Figtree, body), `font-mono` (JetBrains Mono, IDs/labels).
- Type scale utilities: `text-hero`, `text-h1`, `text-h2`, `text-h3`, `text-lead` (see CSS). Use `font-semibold` on headings.
- Shadows: `shadow-card`, `shadow-lift`, `shadow-float`, `shadow-pop`, `shadow-cta`. Never harsh grey shadows.
- Surfaces use the **double bezel** (`<Bezel>` / `<ProductWindow>`): tinted outer shell + white inner core with concentric radii.
- Radii: cards `rounded-[28px]`, pills `rounded-full`, small tiles `rounded-2xl`.
- Motion: `ease-premium` (cubic-bezier .32,.72,0,1), transform/opacity only. Endless ambient animations are paused automatically when their section is off-screen (`AmbientMotion`); don't animate `stroke-dashoffset` on large SVGs (main-thread repaint) — `FlowBackdrop` is static except in the CTA band. Below-the-fold content uses `<Reveal>`;
  above-the-fold uses `.hero-in` (+ `style={{'--d':'120ms'}}`). Bars/meters use `.grow-y` / `.grow-x` inside a `<Reveal>`.
  Everything must be fine under `prefers-reduced-motion` (handled globally).
- Section rhythm: `<Section>` (py-20/28). Alternate `tone="white" | "mist" | "wash"`. Page content width: `<Container>`.
- Decoration: `bg-dots`, `bg-blueprint`, `<FlowBackdrop variant="band|cta|hero|footer">` (the "airflow line" brand motif). Use sparingly.
- No stock photos. Visuals are HTML/SVG product mockups built from `components/product/*` and `components/illustrations/*`.
- Mockup data comes from `src/data/sample.ts` (fictional). Never invent customer logos, testimonials, awards or statistics.
  Do not claim integrations/capabilities that FSM.docx doesn't list (no GST/WhatsApp/UPI-gateway/offline-mode claims).

## Component cheat-sheet
| Need | Use |
| --- | --- |
| Page band | `<Section tone spacing aria-labelledby>` + `<Container>` |
| Heading block | `<SectionHeading eyebrow title lead align as id />` (use `as="h1"` for page H1 only) |
| Buttons | `<ButtonLink href variant="primary|secondary|soft|ghost|onBrand|onBrandOutline" size="md|lg" arrow>`, `<TextLink href>` |
| Cards | `<Bezel interactive radius coreClassName>` |
| Product window | `<ProductWindow title subtitle icon actions label>`; children use container queries (`@md:` `@lg:`) |
| Chips | `<Eyebrow tone>` (section label), `<StatusPill status>`, `<Tag tone>` |
| Icon tile | `<IconTile icon tone size>` |
| Lists | `<CheckList items tone>` |
| FAQ | `<FaqList items={faqs}>` + `faqSchema(faqs)` in Seo `jsonLd` |
| CTA | `<CtaBand title text primary secondary note>` (always end marketing pages with one) |
| Breadcrumb | `<Breadcrumbs items>` + `breadcrumbSchema` |
| Reveal | `<Reveal delay variant="up|scale|left|right">`, `<Counter to format>` |
| Charts | `Sparkline`, `Bars`, `Donut`, `Meter` (`components/product/Charts`) |
| Map / job / customer / phone | `CityMap`, `JobCardPanel`, `JobStepper`, `CustomerProfilePanel`, `PhoneFrame` + `Tech*Screen` |

## SEO rules (from FSM.docx §4, §7, §8)
- One primary keyword → one page. H1 = exact primary keyword (`SOLUTIONS[i].h1` / `FEATURES[i].h1`). URL slug already matches.
- `<Seo title description path jsonLd />`: title includes primary keyword near the start (≤ 60 chars, ends ` | FSMFlow`),
  meta description 120–160 chars containing the keyword naturally.
- Opening paragraph contains the primary keyword naturally. One H2 uses it or a close variation.
- Secondary keywords appear naturally in supporting copy/H2/H3 — never stuffed. Don't repeat the keyword mechanically.
- Informative visuals get `label`/`aria-label` (acts as ALT text); decorative ones are `aria-hidden`.
- Internal links: link related features/solutions with descriptive anchor text (primary keyword or natural variation).
- Heading hierarchy: one h1 → h2 sections → h3 inside. No skipped levels.
- Legal pages: no commercial keywords.
- JSON-LD helpers in `src/lib/schema.ts`.

## Copy
Professional, simple English for Indian business owners. Concrete over clever. Sentence case. Active voice.
Use ₹ and Indian digit grouping (`inr()` / `inrCompact()` in `lib/format`). AMC = annual maintenance contract (spell out on first use per page).
