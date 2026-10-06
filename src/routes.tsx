import { lazy } from 'react'
import { matchIn, ROUTE_DEFS, type PageFile, type PageModule, type PageRoute } from './routes.shared'

export type { PageRoute } from './routes.shared'

/** Every page is its own chunk (client). The matching chunk is preloaded before hydration — see main.tsx. */
const loaders: Record<PageFile, () => Promise<PageModule>> = {
  'src/pages/HomePage.tsx': () => import('@/pages/HomePage'),
  'src/pages/HvacSolutionPage.tsx': () => import('@/pages/HvacSolutionPage'),
  'src/pages/SolutionPage.tsx': () => import('@/pages/SolutionPage'),
  'src/pages/FeaturePage.tsx': () => import('@/pages/FeaturePage'),
  'src/pages/PricingPage.tsx': () => import('@/pages/PricingPage'),
  'src/pages/BlogPage.tsx': () => import('@/pages/BlogPage'),
  'src/pages/BlogPostPage.tsx': () => import('@/pages/BlogPostPage'),
  'src/pages/DemoPage.tsx': () => import('@/pages/DemoPage'),
  'src/pages/AboutPage.tsx': () => import('@/pages/AboutPage'),
  'src/pages/ContactPage.tsx': () => import('@/pages/ContactPage'),
  'src/pages/legal/PrivacyPolicyPage.tsx': () => import('@/pages/legal/PrivacyPolicyPage'),
  'src/pages/legal/TermsPage.tsx': () => import('@/pages/legal/TermsPage'),
  'src/pages/legal/RefundPolicyPage.tsx': () => import('@/pages/legal/RefundPolicyPage'),
  'src/pages/NotFoundPage.tsx': () => import('@/pages/NotFoundPage'),
}

export const PAGES: PageRoute[] = ROUTE_DEFS.map(({ path, file }) => ({
  path,
  file,
  load: loaders[file],
  Component: lazy(loaders[file]),
}))

export function matchPage(pathname: string): PageRoute | undefined {
  return matchIn(PAGES, pathname)
}
