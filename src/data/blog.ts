import { BarChart3, ClipboardList, Package, ReceiptText, Route, Users, type LucideIcon } from 'lucide-react'

/**
 * Blog content model.
 *
 * To publish a real article: set `status: 'published'`, add `publishedAt`
 * (ISO date), `author` and a `body`. The article then automatically gets
 * a /blog/<slug> page, a sitemap entry and a link from the /blog listing.
 *
 * While `status` is 'upcoming' the post is shown on /blog as a placeholder
 * card and NO public URL is created (the approved site structure in FSM.docx
 * contains /blog only — no article pages yet).
 */
export const BLOG_CATEGORIES = [
  'HVAC',
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
  publishedAt?: string
  updatedAt?: string
  author?: string
  body?: BlogBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
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
