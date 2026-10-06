import { AirVent, Briefcase, Cctv, HardHat, SunMedium, type LucideIcon } from 'lucide-react'

/**
 * Approved solution pages (source of truth: FSM.docx, section 3).
 * One primary keyword = one page. The primary keyword is the URL slug and the H1.
 */
export interface SolutionMeta {
  slug: string
  path: string
  /** Short label for menus and footer, e.g. "HVAC". */
  navLabel: string
  /** Exact-match primary keyword, used as the page H1. */
  h1: string
  primaryKeyword: string
  secondaryKeywords: string[]
  icon: LucideIcon
  /** One line used in the mega-menu and cards. */
  tagline: string
  seoTitle: string
  seoDescription: string
}

export const SOLUTIONS: SolutionMeta[] = [
  {
    slug: 'hvac-field-service-software',
    path: '/solutions/hvac-field-service-software',
    navLabel: 'HVAC',
    h1: 'HVAC Field Service Software',
    primaryKeyword: 'HVAC field service software',
    secondaryKeywords: ['HVAC software', 'HVAC service management software', 'HVAC service software', 'AC service management software'],
    icon: AirVent,
    tagline: 'AC installation, repair, AMC and preventive maintenance',
    seoTitle: 'HVAC Field Service Software for AC Service Teams | FSMFlow',
    seoDescription:
      'HVAC field service software that runs AC installation, repair, AMC and preventive maintenance — jobs, technicians, spare parts and invoices in one platform.',
  },
  {
    slug: 'cctv-software',
    path: '/solutions/cctv-software',
    navLabel: 'CCTV',
    h1: 'CCTV Software',
    primaryKeyword: 'CCTV software',
    secondaryKeywords: ['camera CCTV software', 'security CCTV software', 'CCTV management system', 'CCTV installation software'],
    icon: Cctv,
    tagline: 'Site surveys, installations and service contracts',
    seoTitle: 'CCTV Software for Installation & Service Teams | FSMFlow',
    seoDescription:
      'CCTV software for installers and security integrators: site surveys, quotations, camera installation jobs, AMC renewals and service visits in one system.',
  },
  {
    slug: 'solar-software',
    path: '/solutions/solar-software',
    navLabel: 'Solar',
    h1: 'Solar Software',
    primaryKeyword: 'solar software',
    secondaryKeywords: ['solar CRM software', 'solar project management software', 'solar EPC software', 'solar field service software'],
    icon: SunMedium,
    tagline: 'Leads, installation projects and after-sales service',
    seoTitle: 'Solar Software for EPC & Installation Teams | FSMFlow',
    seoDescription:
      'Solar software to manage leads, site surveys, quotations, installation projects and after-sales service for rooftop and EPC solar businesses.',
  },
  {
    slug: 'construction-management-software',
    path: '/solutions/construction-management-software',
    navLabel: 'Construction',
    h1: 'Construction Management Software',
    primaryKeyword: 'construction management software',
    secondaryKeywords: ['contractor management software', 'construction project management software', 'construction software', 'construction CRM software'],
    icon: HardHat,
    tagline: 'Projects, site crews, materials and client follow-ups',
    seoTitle: 'Construction Management Software for Contractors | FSMFlow',
    seoDescription:
      'Construction management software for contractors: track enquiries, quotations, site work, crews, materials and payments across every project.',
  },
  {
    slug: 'service-business-management-software',
    path: '/solutions/service-business-management-software',
    navLabel: 'Service Businesses',
    h1: 'Service Business Management Software',
    primaryKeyword: 'service business management software',
    secondaryKeywords: ['field service management software', 'field service software', 'service management software', 'service scheduling software'],
    icon: Briefcase,
    tagline: 'Any team that sends people to customer locations',
    seoTitle: 'Service Business Management Software | FSMFlow',
    seoDescription:
      'Service business management software to schedule technicians, manage customers and jobs, send quotations and track payments for any field service team.',
  },
]

export const HVAC_SOLUTION = SOLUTIONS[0]

export function getSolution(slug: string | undefined): SolutionMeta | undefined {
  return SOLUTIONS.find((s) => s.slug === slug)
}
