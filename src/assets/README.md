# assets

There are intentionally no raster images here. Every visual on the site is inline SVG/CSS so it stays sharp, themeable and tiny:

- Brand mark and HVAC illustrations → `src/components/brand/`, `src/components/illustrations/Hvac.tsx`
- Product mockups (dashboards, job cards, phones, maps) → `src/components/product/`
- Social share image → `public/og-image.png` (1200x630)

To replace a placeholder composition with real artwork (e.g. a photo or exported illustration), drop the file in this folder, import it
(`import hero from '@/assets/hero.webp'`) and swap it in for the component. Give informative images descriptive `alt` text.
