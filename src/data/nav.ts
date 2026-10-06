import { FEATURES, getFeature } from './features'
import { SOLUTIONS } from './solutions'

/**
 * Header + footer structure, exactly as approved in FSM.docx (sections 2 and 5):
 *   Header: Home | Solutions ▼ | Features ▼ | Pricing | Blog | [Book a Demo]
 *   There is NO Login link in the public header.
 */
export type NavItem =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'menu'; label: string; menu: 'solutions' | 'features' }

export const PRIMARY_NAV: NavItem[] = [
  { kind: 'link', label: 'Home', href: '/' },
  { kind: 'menu', label: 'Solutions', menu: 'solutions' },
  { kind: 'menu', label: 'Features', menu: 'features' },
  { kind: 'link', label: 'Pricing', href: '/pricing' },
  { kind: 'link', label: 'Blog', href: '/blog' },
]

export const HEADER_CTA = { label: 'Book a Demo', href: '/demo' } as const

export interface FooterLink {
  label: string
  href: string
}
export interface FooterColumn {
  title: string
  links: FooterLink[]
}

const footerFeature = (slug: string): FooterLink => {
  const f = getFeature(slug)
  if (!f) throw new Error(`Unknown feature slug in footer: ${slug}`)
  return { label: f.footerLabel ?? f.navLabel, href: f.path }
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Solutions',
    links: SOLUTIONS.map((s) => ({ label: s.navLabel, href: s.path })),
  },
  {
    title: 'Features',
    // Approved footer order: Sales & CRM • Job Management • AMC & Warranty • Inventory • Technician App • Reports
    links: [
      footerFeature('sales-crm-software'),
      footerFeature('work-order-management-software'),
      footerFeature('warranty-management-software'),
      footerFeature('inventory-management-software'),
      footerFeature('field-service-app'),
      footerFeature('reporting-software'),
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Book a Demo', href: '/demo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      { label: 'Refund / Cancellation Policy', href: '/refund-policy' },
    ],
  },
]

export const ALL_FEATURES = FEATURES
export const ALL_SOLUTIONS = SOLUTIONS
