import { AirVent, BarChart3, Briefcase, Cctv, ClipboardList, HardHat, Package, ReceiptText, Route, SunMedium, Users, type LucideIcon } from 'lucide-react'
import { CCTV_ARTICLE, CONSTRUCTION_ARTICLE, HVAC_ARTICLE, SERVICE_BUSINESS_ARTICLE, SOLAR_ARTICLE } from './blogArticles'

/**
 * Blog content model.
 *
 * To publish a real article: set `status: 'published'`, add `publishedAt`
 * (ISO date), `author`, a `body` and an `image`. The article then automatically
 * gets a /blog/<slug> page, a sitemap entry and a link from the /blog listing.
 * `npm run audit:images` fails the build if a published post has no `image`
 * or the file it points to is missing from `public/`.
 *
 * While `status` is 'upcoming' the post is shown on /blog as a placeholder
 * card and NO public URL is created (the approved site structure in FSM.docx
 * contains /blog only — no article pages yet). Give upcoming posts an `image`
 * too once one is available, since the placeholder card already renders it.
 *
 * `image` must depict the post's actual subject (see BlogImage.tsx) — never
 * reuse one post's photo for an unrelated topic. If a post's topic changes
 * materially during an edit, re-check (and if needed replace) its `image`
 * rather than leaving the old one in place. Until a suitable photo exists,
 * leave `image` unset: BlogCard/FeaturedBlogCard/BlogArticle fall back to the
 * decorative PostArt cover rather than showing a broken or misleading image.
 */
export const BLOG_CATEGORIES = [
  'HVAC',
  'CCTV',
  'Solar',
  'Construction',
  'Field Service',
  'Business Automation',
  'Technician Management',
  'Service Management',
  'Industry Insights',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  readMinutes: number
  status: 'published' | 'upcoming'
  icon: LucideIcon
  accent: 'brand' | 'aqua' | 'iris' | 'mint' | 'heat'
  /**
   * The real featured photo. `src` is a root-relative path to a file under
   * `public/` (e.g. "/blog-images/hvac-technician-amc.jpg"). `alt` must describe
   * what the photo actually shows, in context — not the post title restated.
   * `position` is a CSS object-position value for when the aspect ratio crops
   * the photo (defaults to "center"); use it to keep the real subject in frame.
   */
  image?: { src: string; alt: string; position?: string }
  publishedAt?: string
  updatedAt?: string
  author?: string
  body?: BlogBlock[]
  /** Full <title> override (include the brand suffix yourself). Defaults to "<title> | FSMFlow", shortened to 60 chars. */
  seoTitle?: string
  /** Meta description override. Defaults to the excerpt. */
  seoDescription?: string
  /** Exact-match primary keyword this post targets (documentation + audit; not rendered). */
  primaryKeyword?: string
  /** The solution page this post supports (internal-link target, documentation + audit). */
  supports?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hvac-technician-management-amc-renewals',
    title: 'HVAC Technician Management: Jobs, Service Visits and AMC Renewals',
    seoTitle: 'HVAC Technician Management for AC Service Teams | FSMFlow',
    seoDescription:
      'HVAC technician management made practical: organise service jobs, dispatch, spare parts and AMC renewals so an AC service team stops depending on memory.',
    excerpt:
      'A practical guide to dispatching technicians, running service jobs, carrying the right spare parts and never missing an AMC renewal.',
    category: 'HVAC',
    readMinutes: 8,
    status: 'published',
    icon: AirVent,
    accent: 'aqua',
    publishedAt: '2026-10-12',
    author: 'FSMFlow Team',
    primaryKeyword: 'HVAC technician management',
    supports: '/solutions/hvac-field-service-software',
    body: HVAC_ARTICLE,
  },
  {
    slug: 'cctv-amc-format-installation-service-renewals',
    title: 'CCTV AMC Format and Management: Installation Jobs, Service and Renewals',
    seoTitle: 'CCTV AMC Format & Management for Installers | FSMFlow',
    seoDescription:
      'A practical CCTV AMC format plus a workflow for managing installation jobs, maintenance visits and AMC renewals in a CCTV installation business.',
    excerpt:
      'What a CCTV AMC contract should cover, and how to run surveys, installations, service visits and renewals so nothing lapses.',
    category: 'CCTV',
    readMinutes: 8,
    status: 'published',
    icon: Cctv,
    accent: 'iris',
    publishedAt: '2026-10-12',
    author: 'FSMFlow Team',
    primaryKeyword: 'CCTV AMC format',
    supports: '/solutions/cctv-software',
    body: CCTV_ARTICLE,
  },
  {
    slug: 'solar-installation-project-management',
    title: 'Solar Installation Project Management: Leads, Site Surveys and Projects',
    seoTitle: 'Solar Installation Project Management Guide | FSMFlow',
    seoDescription:
      'Solar installation project management for Indian EPC and rooftop teams: follow up leads, record site surveys, run installations and plan after-sales service.',
    excerpt:
      'From first enquiry to after-sales service: how to follow up leads, record site surveys and run solar installation projects without losing track.',
    category: 'Solar',
    readMinutes: 6,
    status: 'published',
    icon: SunMedium,
    accent: 'heat',
    publishedAt: '2026-10-12',
    author: 'FSMFlow Team',
    primaryKeyword: 'solar installation project management',
    supports: '/solutions/solar-software',
    body: SOLAR_ARTICLE,
  },
  {
    slug: 'construction-site-management-field-teams-updates',
    title: 'Construction Site Management: Jobs, Field Teams and Project Updates',
    seoTitle: 'Construction Site Management for Contractors | FSMFlow',
    seoDescription:
      'Construction site management for contractors: define site jobs, plan field teams, control materials and send clear project updates to clients.',
    excerpt:
      'Practical ways for contractors to define site jobs, coordinate field teams, plan materials and keep clients updated.',
    category: 'Construction',
    readMinutes: 6,
    status: 'published',
    icon: HardHat,
    accent: 'mint',
    publishedAt: '2026-10-12',
    author: 'FSMFlow Team',
    primaryKeyword: 'construction site management',
    supports: '/solutions/construction-management-software',
    body: CONSTRUCTION_ARTICLE,
  },
  {
    slug: 'best-field-service-management-software-small-business',
    title: 'Best Field Service Management Software for Small Business: How to Choose',
    seoTitle: 'Best Field Service Management Software for Small Business',
    seoDescription:
      'Looking for the best field service management software for small business? Use this practical checklist to compare tools, test them and roll one out.',
    excerpt:
      'A buyer’s checklist for small Indian service businesses: what field service software does, what to test, and what not to over-buy.',
    category: 'Field Service',
    readMinutes: 6,
    status: 'published',
    icon: Briefcase,
    accent: 'brand',
    publishedAt: '2026-10-12',
    author: 'FSMFlow Team',
    primaryKeyword: 'best field service management software for small business',
    supports: '/solutions/service-business-management-software',
    body: SERVICE_BUSINESS_ARTICLE,
  },
  {
    slug: 'run-amc-renewals-without-spreadsheets',
    title: 'How HVAC companies can run AMC renewals without chasing spreadsheets',
    excerpt:
      'A practical look at tracking contract dates, scheduled visits and renewal reminders so repeat revenue stops depending on someone’s memory.',
    category: 'HVAC',
    readMinutes: 7,
    status: 'upcoming',
    icon: ClipboardList,
    accent: 'aqua',
  },
  {
    slug: 'map-your-field-service-workflow',
    title: 'From enquiry to payment: mapping your field service workflow',
    excerpt:
      'Draw the path a job takes today, find where it stalls, and decide which steps are worth automating first.',
    category: 'Field Service',
    readMinutes: 6,
    status: 'upcoming',
    icon: Route,
    accent: 'brand',
  },
  {
    slug: 'weekly-reports-for-service-owners',
    title: 'Five reports every service business owner should check weekly',
    excerpt:
      'Jobs completed, repeat visits, pending payments, technician utilisation and renewals due — and what to do when a number moves.',
    category: 'Business Automation',
    readMinutes: 5,
    status: 'upcoming',
    icon: BarChart3,
    accent: 'iris',
  },
  {
    slug: 'technician-scheduling-for-growing-teams',
    title: 'Technician scheduling for teams of 10 to 50',
    excerpt:
      'How to balance skills, travel time and emergency calls without turning the dispatcher into a bottleneck.',
    category: 'Technician Management',
    readMinutes: 8,
    status: 'upcoming',
    icon: Users,
    accent: 'mint',
  },
  {
    slug: 'why-quotation-speed-wins-service-jobs',
    title: 'Why quotation speed decides who wins the service job',
    excerpt:
      'Customers rarely pick the cheapest quote — they pick the first clear one. A simple routine for same-day estimates.',
    category: 'Service Management',
    readMinutes: 5,
    status: 'upcoming',
    icon: ReceiptText,
    accent: 'heat',
  },
  {
    slug: 'spare-parts-on-the-van',
    title: 'Spare parts on the van: how to stop losing jobs to missing stock',
    excerpt:
      'Set minimum levels, track what each technician carries, and link parts to jobs so reordering becomes routine.',
    category: 'Industry Insights',
    readMinutes: 6,
    status: 'upcoming',
    icon: Package,
    accent: 'brand',
  },
]

export const PUBLISHED_POSTS = BLOG_POSTS.filter((p) => p.status === 'published')

export function getPublishedPost(slug: string | undefined): BlogPost | undefined {
  return PUBLISHED_POSTS.find((p) => p.slug === slug)
}
