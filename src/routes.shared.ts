import type { ComponentType } from 'react'
import { matchRoutes } from 'react-router'

/**
 * Route definitions shared by the client (lazy) and server (eager) route tables.
 * `file` is the source path used to look the chunk up in Vite's build manifest.
 *
 * Static solution/feature slugs are served by the data-driven :slug pages; unknown slugs fall
 * through to the shared 404 view inside those pages. HVAC has its own bespoke page
 * (a static segment outranks :slug).
 */
export const ROUTE_DEFS = [
  { path: '/', file: 'src/pages/HomePage.tsx' },
  { path: '/solutions/hvac-field-service-software', file: 'src/pages/HvacSolutionPage.tsx' },
  { path: '/solutions/:slug', file: 'src/pages/SolutionPage.tsx' },
  { path: '/features/:slug', file: 'src/pages/FeaturePage.tsx' },
  { path: '/pricing', file: 'src/pages/PricingPage.tsx' },
  { path: '/blog', file: 'src/pages/BlogPage.tsx' },
  { path: '/blog/:slug', file: 'src/pages/BlogPostPage.tsx' },
  { path: '/demo', file: 'src/pages/DemoPage.tsx' },
  { path: '/about', file: 'src/pages/AboutPage.tsx' },
  { path: '/contact', file: 'src/pages/ContactPage.tsx' },
  { path: '/privacy-policy', file: 'src/pages/legal/PrivacyPolicyPage.tsx' },
  { path: '/terms-and-conditions', file: 'src/pages/legal/TermsPage.tsx' },
  { path: '/refund-policy', file: 'src/pages/legal/RefundPolicyPage.tsx' },
  { path: '*', file: 'src/pages/NotFoundPage.tsx' },
] as const

export type PageFile = (typeof ROUTE_DEFS)[number]['file']

export type PageModule = { default: ComponentType }

export interface PageRoute {
  /** react-router path pattern. */
  path: string
  file: PageFile
  load: () => Promise<PageModule>
  Component: ComponentType
}

/** Finds the page route for a URL path (same ranking react-router uses to render). */
export function matchIn(pages: PageRoute[], pathname: string): PageRoute | undefined {
  const matches = matchRoutes(
    pages.map((p) => ({ path: p.path, page: p })),
    pathname,
  )
  return (matches?.[0]?.route as unknown as { page: PageRoute } | undefined)?.page
}
