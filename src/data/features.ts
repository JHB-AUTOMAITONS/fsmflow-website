import {
  Boxes,
  ChartColumn,
  ClipboardCheck,
  Handshake,
  Package,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react'

/**
 * Approved feature pages (source of truth: FSM.docx, section 3).
 * Settings is intentionally NOT a public feature page.
 */
export interface FeatureMeta {
  slug: string
  path: string
  /** Label used in the Features mega-menu. */
  navLabel: string
  /** Label used in the footer (follows the approved footer wording). */
  footerLabel?: string
  /** Exact-match primary keyword, used as the page H1. */
  h1: string
  primaryKeyword: string
  secondaryKeywords: string[]
  icon: LucideIcon
  /** One line used in the mega-menu and feature cards. */
  tagline: string
  seoTitle: string
  seoDescription: string
}

export const FEATURES: FeatureMeta[] = [
  {
    slug: 'sales-crm-software',
    path: '/features/sales-crm-software',
    navLabel: 'Sales CRM',
    footerLabel: 'Sales & CRM',
    h1: 'Sales CRM Software',
    primaryKeyword: 'sales CRM software',
    secondaryKeywords: ['CRM software', 'sales management software', 'lead management software', 'sales pipeline software'],
    icon: Handshake,
    tagline: 'Leads, follow-ups and a pipeline that ends in a booked job',
    seoTitle: 'Sales CRM Software for Service Businesses | FSMFlow',
    seoDescription:
      'Sales CRM software that tracks leads, follow-ups and your sales pipeline, then turns won deals into quotations and jobs — built for field service teams.',
  },
  {
    slug: 'asset-management-software',
    path: '/features/asset-management-software',
    navLabel: 'Asset Management',
    h1: 'Asset Management Software',
    primaryKeyword: 'asset management software',
    secondaryKeywords: ['asset tracking software', 'equipment management software', 'customer management software'],
    icon: Boxes,
    tagline: 'Every customer, site and installed unit in one record',
    seoTitle: 'Asset Management Software for Service Teams | FSMFlow',
    seoDescription:
      'Asset management software to track customer equipment, service history, warranty and AMC status, so every visit starts with the full picture.',
  },
  {
    slug: 'quotation-software',
    path: '/features/quotation-software',
    navLabel: 'Quotation & Invoicing',
    h1: 'Quotation Software',
    primaryKeyword: 'quotation software',
    secondaryKeywords: ['estimate software', 'quotation and invoice software', 'payment management software', 'invoicing software'],
    icon: ReceiptText,
    tagline: 'Estimates, approvals, invoices and payment follow-up',
    seoTitle: 'Quotation Software with Invoicing & Payments | FSMFlow',
    seoDescription:
      'Quotation software to create professional estimates in minutes, get approvals, convert them into jobs and invoices, and keep track of payments.',
  },
  {
    slug: 'work-order-management-software',
    path: '/features/work-order-management-software',
    navLabel: 'Work Orders',
    footerLabel: 'Job Management',
    h1: 'Work Order Management Software',
    primaryKeyword: 'work order management software',
    secondaryKeywords: ['job management software'],
    icon: ClipboardCheck,
    tagline: 'Create, assign and track every job to completion',
    seoTitle: 'Work Order Management Software | FSMFlow',
    seoDescription:
      'Work order management software to create, assign and track service jobs from request to completion — with checklists, parts, photos and service reports.',
  },
  {
    slug: 'warranty-management-software',
    path: '/features/warranty-management-software',
    navLabel: 'Warranty & AMC',
    footerLabel: 'AMC & Warranty',
    h1: 'Warranty Management Software',
    primaryKeyword: 'warranty management software',
    secondaryKeywords: ['AMC management software'],
    icon: ShieldCheck,
    tagline: 'Warranty status, AMC contracts and service reminders',
    seoTitle: 'Warranty Management Software & AMC Tracking | FSMFlow',
    seoDescription:
      'Warranty management software that tracks coverage, AMC contracts, scheduled visits and renewals, so no service obligation or renewal is missed.',
  },
  {
    slug: 'inventory-management-software',
    path: '/features/inventory-management-software',
    navLabel: 'Inventory',
    h1: 'Inventory Management Software',
    primaryKeyword: 'inventory management software',
    secondaryKeywords: ['stock management software', 'spare parts inventory software', 'parts management software', 'parts inventory software'],
    icon: Package,
    tagline: 'Spare parts, van stock and low-stock alerts',
    seoTitle: 'Inventory Management Software for Spare Parts | FSMFlow',
    seoDescription:
      'Inventory management software for spare parts and stock: track warehouse and van stock, link parts to jobs and get alerts before you run out.',
  },
  {
    slug: 'field-service-app',
    path: '/features/field-service-app',
    navLabel: 'Field Service App',
    footerLabel: 'Technician App',
    h1: 'Field Service App',
    primaryKeyword: 'field service app',
    secondaryKeywords: ['technician app', 'field service mobile app', 'field service technician app', 'service technician app'],
    icon: Smartphone,
    tagline: 'Jobs, checklists, photos and sign-off on the technician’s phone',
    seoTitle: 'Field Service App for Technicians | FSMFlow',
    seoDescription:
      'A field service app that gives technicians their jobs, customer details, checklists, parts and sign-off on a phone — and keeps the office updated live.',
  },
  {
    slug: 'employee-management-software',
    path: '/features/employee-management-software',
    navLabel: 'Employee Management',
    h1: 'Employee Management Software',
    primaryKeyword: 'employee management software',
    secondaryKeywords: ['workforce management software', 'team management software', 'technician scheduling software'],
    icon: Users,
    tagline: 'Technician profiles, scheduling and workload',
    seoTitle: 'Employee Management Software for Field Teams | FSMFlow',
    seoDescription:
      'Employee management software for field teams: technician profiles, skills, scheduling, workload and performance across every job and site.',
  },
  {
    slug: 'reporting-software',
    path: '/features/reporting-software',
    navLabel: 'Reporting',
    footerLabel: 'Reports',
    h1: 'Reporting Software',
    primaryKeyword: 'reporting software',
    secondaryKeywords: ['field service reporting software', 'business reporting software', 'service reporting software'],
    icon: ChartColumn,
    tagline: 'Jobs, revenue, technicians and AMC performance at a glance',
    seoTitle: 'Reporting Software for Field Service Businesses | FSMFlow',
    seoDescription:
      'Reporting software that turns daily field work into clear dashboards: jobs, revenue, technician productivity, AMC renewals and pending payments.',
  },
]

export function getFeature(slug: string | undefined): FeatureMeta | undefined {
  return FEATURES.find((f) => f.slug === slug)
}

export function getFeatureByPath(path: string): FeatureMeta | undefined {
  return FEATURES.find((f) => f.path === path)
}
