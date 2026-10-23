/**
 * Country landing pages. One primary keyword = one page; the URL slug, H1 and title all lead with
 * "field service management software <country>". Page content lives in `countryPages.ts`.
 *
 * Paths follow the site convention (no trailing slash; the canonical has none either).
 */
export interface CountryMeta {
  slug: string
  path: string
  /** Short name for menus, breadcrumbs and anchor text. */
  name: string
  /** Adjective used in prose, e.g. "Malaysian". */
  demonym: string
  h1: string
  primaryKeyword: string
  seoTitle: string
  seoDescription: string
  /** One line for menus and cards. */
  tagline: string
}

const make = (
  name: string,
  demonym: string,
  slugPart: string,
  seoTitle: string,
  seoDescription: string,
  tagline: string,
): CountryMeta => ({
  slug: `field-service-management-software-${slugPart}`,
  path: `/field-service-management-software-${slugPart}`,
  name,
  demonym,
  h1: `Field Service Management Software in ${name}`,
  primaryKeyword: `field service management software ${name.toLowerCase()}`,
  seoTitle,
  seoDescription,
  tagline,
})

export const COUNTRIES: CountryMeta[] = [
  make(
    'Malaysia',
    'Malaysian',
    'malaysia',
    'Field Service Management Software Malaysia | FSMFlow',
    'Field service management software in Malaysia: schedule technicians, track work orders and manage maintenance contracts for service teams in one platform.',
    'Technician scheduling, work orders and maintenance contracts',
  ),
  make(
    'Sri Lanka',
    'Sri Lankan',
    'sri-lanka',
    'Field Service Management Software Sri Lanka | FSMFlow',
    'Field service management software in Sri Lanka: run HVAC and CCTV service jobs, plan maintenance visits and keep customer service records in one place.',
    'HVAC and CCTV service, maintenance visits and customer records',
  ),
  make(
    'Singapore',
    'Singapore',
    'singapore',
    'Field Service Management Software Singapore | FSMFlow',
    'Field service management software in Singapore: dispatch technicians, see job status and plan preventive maintenance from one service operations view.',
    'Dispatch, service visibility and preventive maintenance',
  ),
  make(
    'South Africa',
    'South African',
    'south-africa',
    'Field Service Management Software South Africa | FSMFlow',
    'Field service management software in South Africa: coordinate distributed field teams, track jobs across sites and keep equipment maintenance on schedule.',
    'Distributed field teams, job tracking and equipment maintenance',
  ),
  make(
    'Nigeria',
    'Nigerian',
    'nigeria',
    'Field Service Management Software Nigeria | FSMFlow',
    'Field service management software in Nigeria: move technician assignments and service follow-ups off chats and notebooks into one organised system.',
    'Organised technician assignments and service follow-ups',
  ),
]

export function getCountryByPath(path: string): CountryMeta | undefined {
  const clean = path.replace(/\/+$/, '') || '/'
  return COUNTRIES.find((c) => c.path === clean)
}
