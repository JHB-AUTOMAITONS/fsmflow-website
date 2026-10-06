import type { ComponentType } from 'react'
import AboutPage from '@/pages/AboutPage'
import BlogPage from '@/pages/BlogPage'
import BlogPostPage from '@/pages/BlogPostPage'
import ContactPage from '@/pages/ContactPage'
import DemoPage from '@/pages/DemoPage'
import FeaturePage from '@/pages/FeaturePage'
import HomePage from '@/pages/HomePage'
import HvacSolutionPage from '@/pages/HvacSolutionPage'
import PrivacyPolicyPage from '@/pages/legal/PrivacyPolicyPage'
import RefundPolicyPage from '@/pages/legal/RefundPolicyPage'
import TermsPage from '@/pages/legal/TermsPage'
import NotFoundPage from '@/pages/NotFoundPage'
import PricingPage from '@/pages/PricingPage'
import SolutionPage from '@/pages/SolutionPage'
import { matchIn, ROUTE_DEFS, type PageFile, type PageRoute } from './routes.shared'

export type { PageRoute } from './routes.shared'

/**
 * Server-only route table (swapped in for "@/routes" by the SSR build — see vite.config.ts).
 * Pages are imported eagerly so nothing suspends during prerender and the full page HTML is
 * emitted in place inside <main>, instead of a Suspense fallback plus a streamed block.
 */
const components: Record<PageFile, ComponentType> = {
  'src/pages/HomePage.tsx': HomePage,
  'src/pages/HvacSolutionPage.tsx': HvacSolutionPage,
  'src/pages/SolutionPage.tsx': SolutionPage,
  'src/pages/FeaturePage.tsx': FeaturePage,
  'src/pages/PricingPage.tsx': PricingPage,
  'src/pages/BlogPage.tsx': BlogPage,
  'src/pages/BlogPostPage.tsx': BlogPostPage,
  'src/pages/DemoPage.tsx': DemoPage,
  'src/pages/AboutPage.tsx': AboutPage,
  'src/pages/ContactPage.tsx': ContactPage,
  'src/pages/legal/PrivacyPolicyPage.tsx': PrivacyPolicyPage,
  'src/pages/legal/TermsPage.tsx': TermsPage,
  'src/pages/legal/RefundPolicyPage.tsx': RefundPolicyPage,
  'src/pages/NotFoundPage.tsx': NotFoundPage,
}

export const PAGES: PageRoute[] = ROUTE_DEFS.map(({ path, file }) => ({
  path,
  file,
  load: () => Promise.resolve({ default: components[file] }),
  Component: components[file],
}))

export function matchPage(pathname: string): PageRoute | undefined {
  return matchIn(PAGES, pathname)
}
