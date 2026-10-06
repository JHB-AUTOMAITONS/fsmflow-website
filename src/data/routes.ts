import { PUBLISHED_POSTS } from './blog'
import { FEATURES } from './features'
import { SOLUTIONS } from './solutions'

/**
 * Every public URL. The prerender script, sitemap and link audit all read
 * this list, so it must match FSM.docx exactly:
 *   1 home + 5 solutions + 9 features + pricing, blog, demo + 5 company/legal = 23 pages.
 * Blog article URLs are added automatically once a post is marked published.
 */
export interface RouteEntry {
  path: string
  priority: number
  changefreq: 'weekly' | 'monthly' | 'yearly'
}

export const STATIC_ROUTES: RouteEntry[] = [
  { path: '/', priority: 1, changefreq: 'weekly' },
  ...SOLUTIONS.map((s, i) => ({ path: s.path, priority: i === 0 ? 0.95 : 0.8, changefreq: 'monthly' as const })),
  ...FEATURES.map((f) => ({ path: f.path, priority: 0.8, changefreq: 'monthly' as const })),
  { path: '/pricing', priority: 0.9, changefreq: 'monthly' },
  { path: '/blog', priority: 0.7, changefreq: 'weekly' },
  { path: '/demo', priority: 0.9, changefreq: 'yearly' },
  { path: '/about', priority: 0.5, changefreq: 'yearly' },
  { path: '/contact', priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy-policy', priority: 0.2, changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.2, changefreq: 'yearly' },
  { path: '/refund-policy', priority: 0.2, changefreq: 'yearly' },
]

export function getAllRoutes(): RouteEntry[] {
  return [
    ...STATIC_ROUTES,
    ...PUBLISHED_POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, changefreq: 'monthly' as const })),
  ]
}
