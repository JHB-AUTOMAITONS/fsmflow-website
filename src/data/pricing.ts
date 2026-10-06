import { inr } from '@/lib/format'
import type { Faq } from '@/lib/schema'

/**
 * Pricing content.
 *
 * CONFIRM before launch:
 *  - Plan names, who-it's-for lines and the comparison table below are PLACEHOLDERS
 *    that describe a sensible Starter / Growth / Enterprise split. Replace them with
 *    the real packaging.
 *  - Prices are intentionally NOT set. Each plan has `price: number | null`.
 *      null   -> the page shows a neat "₹ — / technician / month" placeholder
 *                with a "Price to be confirmed" note.
 *      number -> the page shows it with inr() (e.g. 499 -> ₹499).
 *    Enterprise uses `pricingMode: 'custom'` and always reads "Custom pricing".
 *  - `priceUnit` is the unit shown after the price ("technician / month").
 */

export type PlanId = 'starter' | 'growth' | 'enterprise'

export interface Plan {
  id: PlanId
  name: string
  /** One-line summary under the plan name. */
  tagline: string
  /** Who the plan is for. */
  forWho: string
  /** Monthly price in rupees, or null while it is still to be confirmed. */
  price: number | null
  /** 'custom' plans never show a number. */
  pricingMode: 'per-unit' | 'custom'
  priceUnit: string
  highlight?: boolean
  badge?: string
  /** A few headline inclusions for the plan card. */
  includes: string[]
  cta: { label: string; href: string }
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Get jobs, technicians and invoices out of WhatsApp and Excel.',
    forWho: 'Owner-run AC and service shops with a small field team.',
    price: null,
    pricingMode: 'per-unit',
    priceUnit: 'technician / month',
    includes: [
      'Work orders and job tracking',
      'Technician scheduling and the technician app',
      'Customer and equipment records',
      'Quotations, invoices and payment tracking',
    ],
    cta: { label: 'Book a Demo', href: '/demo' },
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'The full job-to-AMC flow for a team that is scaling up.',
    forWho: 'Service companies with a growing team, AMC customers and spare parts to manage.',
    price: null,
    pricingMode: 'per-unit',
    priceUnit: 'technician / month',
    highlight: true,
    badge: 'For growing teams',
    includes: [
      'Everything in Starter',
      'AMC contracts, warranty tracking and renewal reminders',
      'Inventory with warehouse and van stock',
      'Sales CRM and lead pipeline',
      'Reports on jobs, revenue, technicians and AMC',
    ],
    cta: { label: 'Book a Demo', href: '/demo' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Set up around your branches, roles and ways of working.',
    forWho: 'Larger companies with several branches or a bigger field workforce.',
    price: null,
    pricingMode: 'custom',
    priceUnit: 'your team size and branches',
    includes: [
      'Everything in Growth',
      'Multiple branches and service centres',
      'Custom roles and permissions',
      'Priority support and a dedicated contact',
    ],
    cta: { label: 'Talk to us', href: '/contact' },
  },
]

/** One-line price text used in the comparison table header and the mobile tabs. */
export function priceSummary(plan: Plan): string {
  if (plan.pricingMode === 'custom') return 'Custom pricing'
  if (plan.price === null) return 'Price to be confirmed'
  return `${inr(plan.price)} / ${plan.priceUnit}`
}

/** A table cell: true = included, false = not included, string = short note. */
export type Cell = boolean | string

export interface CompareRow {
  label: string
  /** values are in plan order: Starter, Growth, Enterprise. */
  values: [Cell, Cell, Cell]
}

export interface CompareGroup {
  id: string
  title: string
  rows: CompareRow[]
}

/** CONFIRM: placeholder packaging. See the note at the top of this file. */
export const COMPARISON: CompareGroup[] = [
  {
    id: 'core',
    title: 'Core job management',
    rows: [
      { label: 'Work orders and job tracking', values: [true, true, true] },
      { label: 'Technician scheduling and assignment', values: [true, true, true] },
      { label: 'Service checklists and job reports', values: [true, true, true] },
      { label: 'Quotations, invoices and payment tracking', values: [true, true, true] },
      { label: 'Sales CRM and lead pipeline', values: [false, true, true] },
    ],
  },
  {
    id: 'field',
    title: 'Field operations',
    rows: [
      { label: 'Technician mobile app', values: [true, true, true] },
      { label: 'Photos and customer sign-off on the job', values: [true, true, true] },
      { label: 'Live technician status and map view', values: ['Job status', true, true] },
      { label: 'Technician skills and workload view', values: [false, true, true] },
    ],
  },
  {
    id: 'customers',
    title: 'Customers & contracts',
    rows: [
      { label: 'Customer, site and equipment records', values: [true, true, true] },
      { label: 'Warranty tracking', values: [false, true, true] },
      { label: 'AMC contracts and renewal reminders', values: [false, true, true] },
      { label: 'Multiple branches', values: [false, false, true] },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    rows: [
      { label: 'Spare parts catalogue and stock levels', values: ['Single store', 'Warehouse and van', 'Multi-location'] },
      { label: 'Parts linked to jobs', values: [true, true, true] },
      { label: 'Low-stock alerts', values: [false, true, true] },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    rows: [
      { label: 'Jobs, revenue and payments dashboard', values: [true, true, true] },
      { label: 'Technician and AMC reports', values: [false, true, true] },
      { label: 'Custom reports', values: [false, false, 'On request'] },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    rows: [
      { label: 'Email support', values: [true, true, true] },
      { label: 'Guided onboarding', values: ['Standard', 'Standard', 'Tailored'] },
      { label: 'Priority support', values: [false, false, true] },
      { label: 'Dedicated contact', values: [false, false, true] },
    ],
  },
]

/** Pricing FAQ. No commercial promises: anything we cannot know is phrased as "confirm in your demo". */
export const PRICING_FAQS: Faq[] = [
  {
    q: 'Do you charge per technician or per user?',
    a: 'Plans are priced around your field team, and the unit shown on each plan is per technician per month. Whether office staff such as dispatchers or accountants count towards your total depends on the plan, so please confirm it in your demo.',
  },
  {
    q: 'Can I try FSMFlow before I decide?',
    a: 'The best first step is a demo. We show FSMFlow using examples from your trade, and you can ask about evaluation options for your team at the same time. We do not list a trial period here until it is confirmed.',
  },
  {
    q: 'What does onboarding involve?',
    a: 'Getting started usually means adding your technicians, customers, equipment and spare parts, then setting up job types and checklists. How much help is included depends on the plan, so ask about it in your demo.',
  },
  {
    q: 'Are there any one-time setup charges?',
    a: 'This is confirmed for your plan and team size when we prepare your quote. Ask in your demo so you know the full cost before you decide.',
  },
  {
    q: 'Can I change plans as my team grows?',
    a: 'Many teams start small and add features later. Ask us in your demo how moving between plans works and when a change takes effect.',
  },
  {
    q: 'How do I cancel?',
    a: 'Our Refund / Cancellation Policy explains how to cancel and how it affects your billing cycle. If you have questions about your own plan, ask in your demo or contact us.',
  },
]
