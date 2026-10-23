import {
  BellRing,
  Boxes,
  CalendarClock,
  ChartColumn,
  ClipboardCheck,
  ClipboardList,
  FolderSearch,
  Layers,
  Navigation,
  Route,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import type { Faq } from '@/lib/schema'
import type { SolutionStage } from './solutionPages'

/**
 * Unique content for each country landing page (metadata, keywords and URLs are in `countries.ts`).
 *
 * Copy rules: only describe what FSMFlow's feature pages already document. No local offices,
 * customers, testimonials, statistics, certifications, integrations or country-specific
 * compliance claims. The market angles below are working hypotheses, not verified research.
 */
export interface CountryChallenge {
  icon: LucideIcon
  title: string
  text: string
}

export interface CountryHelpItem {
  /** Feature slug (features.ts) the item links to. */
  feature: string
  /** Descriptive anchor text for the link. */
  linkLabel: string
  title: string
  text: string
}

export interface CountryIndustry {
  /** Solution slug (solutions.ts). */
  solution: string
  text: string
}

export interface CountryBenefit {
  title: string
  text: string
}

export interface CountryRelatedPost {
  slug: string
  label: string
}

export interface CountryContent {
  slug: string
  eyebrow: string
  lead: string
  heroPoints: string[]
  challenges: { title: string; lead: string; items: CountryChallenge[] }
  help: { title: string; lead: string; items: CountryHelpItem[] }
  industries: { title: string; lead: string; items: CountryIndustry[]; other: string }
  benefits: { title: string; lead: string; items: CountryBenefit[] }
  workflow: { title: string; lead: string; stages: SolutionStage[] }
  faqs: Faq[]
  /** Blog posts that exist and genuinely support this page's intent. */
  posts: CountryRelatedPost[]
  cta: { title: string; text: string; note: string }
}

const PM_POST = { slug: 'preventive-maintenance-guide-sri-lanka', label: 'Preventive maintenance: a practical guide for service businesses' }
const DISPATCH_POST = { slug: 'field-service-dispatch-software-malaysia', label: 'How field service dispatch software improves service efficiency' }
const WHAT_IS_POST = { slug: 'what-is-field-service-management', label: 'What is field service management? A beginner’s guide' }

/* -------------------------------------------------------------------------- */
/* Malaysia — scheduling, work orders, maintenance contracts                   */
/* -------------------------------------------------------------------------- */

const malaysia: CountryContent = {
  slug: 'field-service-management-software-malaysia',
  eyebrow: 'For service teams in Malaysia',
  lead: 'FSMFlow is field service management software in Malaysia that helps service businesses schedule technicians, track work orders and keep maintenance contracts on time, so jobs and renewals stop living in chat threads and spreadsheets.',
  heroPoints: ['Technician scheduling', 'Work order tracking', 'Maintenance contract reminders'],
  challenges: {
    title: 'Where service operations in Malaysia get stuck',
    lead: 'Teams that serve homes, shop lots, offices and industrial sites across a city usually feel the same few strains once the job count grows.',
    items: [
      { icon: CalendarClock, title: 'Schedules kept in one person’s head', text: 'When one coordinator holds the technician plan, a sick day or a late job can unsettle the whole week.' },
      { icon: ClipboardList, title: 'Work orders spread across messages', text: 'Job details sent as chat messages are hard to search later, and easy to lose when a request is changed.' },
      { icon: ShieldCheck, title: 'Maintenance contracts that quietly lapse', text: 'Recurring service visits and renewals need dates somebody actually watches.' },
      { icon: FolderSearch, title: 'Customer history that is hard to find', text: 'Without a single record, each visit starts with questions the customer has already answered.' },
    ],
  },
  help: {
    title: 'How FSMFlow supports a Malaysian service operation',
    lead: 'The same connected workflow covers the request, the technician, the visit and the follow-up.',
    items: [
      { feature: 'employee-management-software', linkLabel: 'technician scheduling software', title: 'Schedule by skill and availability', text: 'Keep technician profiles and skills in one place and plan jobs against who is free, with workload visible across the team.' },
      { feature: 'work-order-management-software', linkLabel: 'work order management software', title: 'One record for every work order', text: 'Create, assign and follow jobs from request to completion, with checklists, parts, photos and a service report.' },
      { feature: 'warranty-management-software', linkLabel: 'AMC and warranty tracking', title: 'Maintenance contracts with reminders', text: 'Track coverage, schedule the visits a contract promises and get renewal reminders before it lapses.' },
      { feature: 'field-service-app', linkLabel: 'field service app for technicians', title: 'Jobs on the technician’s phone', text: 'Technicians see their jobs, customer details and checklists and sign off on site, keeping the office updated.' },
      { feature: 'reporting-software', linkLabel: 'service reporting dashboards', title: 'Reports from the same job data', text: 'Review jobs, technician productivity and contract renewals without building a spreadsheet by hand.' },
    ],
  },
  industries: {
    title: 'Industries FSMFlow supports for Malaysian teams',
    lead: 'Any business that sends people to customer sites can use the same workflow. These are the trades FSMFlow has dedicated pages for.',
    items: [
      { solution: 'hvac-field-service-software', text: 'Air-conditioning installation, repair and servicing, with AMC contracts and spare parts tied to each job.' },
      { solution: 'cctv-software', text: 'Site surveys, camera installations and recurring service visits for CCTV and security installers.' },
      { solution: 'solar-software', text: 'Leads, installations and after-sales service for solar installation companies.' },
      { solution: 'construction-management-software', text: 'Site crews, equipment maintenance and client follow-ups for contractors.' },
    ],
    other: 'Other maintenance and facility service teams can start from the general service business management software page.',
  },
  benefits: {
    title: 'What a more organised service operation gives you',
    lead: 'These are practical effects of having one system, not guaranteed results.',
    items: [
      { title: 'Clearer job allocation', text: 'Each work order has an owner, a date and a status that anyone in the office can check.' },
      { title: 'Less back-and-forth coordination', text: 'Technicians read job details from the app instead of asking the office to repeat them.' },
      { title: 'Contracts you can plan around', text: 'Upcoming maintenance visits and renewals show up before they are due.' },
      { title: 'Service history in one place', text: 'Past visits, parts and notes are stored against the customer and their equipment.' },
    ],
  },
  workflow: {
    title: 'From service request to completed work order',
    lead: 'A typical flow for a team managing recurring contracts and one-off jobs. The visual shows sample data.',
    stages: [
      { label: 'Request logged', detail: 'Capture the customer, site and issue in the customer record.', icon: ClipboardList },
      { label: 'Work order created', detail: 'Set the job type, priority and checklist.', icon: ClipboardCheck },
      { label: 'Technician scheduled', detail: 'Assign against skills and availability.', icon: CalendarClock },
      { label: 'Visit completed', detail: 'Technician updates status, parts and photos from the phone.', icon: Smartphone },
      { label: 'Contract follow-up', detail: 'Next visit and renewal date stay on the schedule.', icon: ShieldCheck },
    ],
  },
  faqs: [
    { q: 'Can FSMFlow schedule technicians for a service team in Malaysia?', a: 'Yes. You keep technician profiles and skills in FSMFlow, assign work orders against availability and see each person’s workload. Technicians then receive their jobs in the field service app.' },
    { q: 'Can I track maintenance contracts and renewals?', a: 'Yes. Warranty and AMC (annual maintenance contract) details are stored against each customer asset, with scheduled visits and renewal reminders so you can see what is covered and what is coming up.' },
    { q: 'Which Malaysian businesses is FSMFlow suited to?', a: 'Teams that visit customer sites, such as air-conditioning, CCTV, solar, construction and general maintenance companies. If your work follows request, job, visit and follow-up, the workflow applies.' },
    { q: 'Does FSMFlow cover Malaysian tax invoicing or local payment methods?', a: 'This page does not claim any country-specific tax, invoicing or payment features. If you need them, raise it in a demo and the team will tell you what is and is not supported.' },
    { q: 'How do I see FSMFlow working for my team?', a: 'Book a demo and bring a typical week of jobs and contracts. The walkthrough is built around how your own team works.' },
  ],
  posts: [DISPATCH_POST, PM_POST],
  cta: {
    title: 'See FSMFlow with your own jobs and contracts',
    text: 'Book a demo and we will walk through scheduling, work orders and maintenance contracts using the way your Malaysian team works today.',
    note: 'Tell us your trade and team size so the walkthrough fits.',
  },
}

/* -------------------------------------------------------------------------- */
/* Sri Lanka — HVAC / CCTV service, maintenance visits, customer records       */
/* -------------------------------------------------------------------------- */

const sriLanka: CountryContent = {
  slug: 'field-service-management-software-sri-lanka',
  eyebrow: 'For HVAC and CCTV service teams in Sri Lanka',
  lead: 'FSMFlow is field service management software in Sri Lanka that helps HVAC, CCTV and other service businesses plan maintenance visits, run service jobs and keep a clear service record for every customer.',
  heroPoints: ['HVAC and CCTV service jobs', 'Planned maintenance visits', 'Customer service records'],
  challenges: {
    title: 'Common service problems for Sri Lankan HVAC and CCTV teams',
    lead: 'Servicing installed equipment is repeat work, so the gaps appear in follow-up and record keeping more than in the first installation.',
    items: [
      { icon: Wrench, title: 'Maintenance visits that depend on memory', text: 'A planned servicing round is easy to skip when the diary is a notebook or a phone gallery.' },
      { icon: FolderSearch, title: 'Customer and equipment details scattered', text: 'Which unit, which site, which fault last time: the answer often sits in several places.' },
      { icon: ClipboardList, title: 'Breakdown calls competing with planned work', text: 'Urgent jobs push scheduled visits aside unless both appear on the same plan.' },
      { icon: ShieldCheck, title: 'Warranty and AMC dates nobody tracks', text: 'Whether a unit is still covered should be a lookup, not an argument.' },
    ],
  },
  help: {
    title: 'How FSMFlow supports maintenance-led service work',
    lead: 'Built around equipment that is installed once and serviced for years.',
    items: [
      { feature: 'asset-management-software', linkLabel: 'asset management software', title: 'A record for every customer and unit', text: 'Store customers, sites and installed equipment with their service history, warranty and AMC status.' },
      { feature: 'warranty-management-software', linkLabel: 'AMC management software', title: 'Plan maintenance visits ahead', text: 'Schedule the visits a contract covers and get reminders before a renewal date passes.' },
      { feature: 'work-order-management-software', linkLabel: 'job management software', title: 'Service jobs with checklists', text: 'Every visit becomes a job with a checklist, parts used, photos and a service report.' },
      { feature: 'inventory-management-software', linkLabel: 'spare parts inventory software', title: 'Spare parts linked to jobs', text: 'Track warehouse and van stock and link parts to the job they were used on.' },
      { feature: 'field-service-app', linkLabel: 'technician app', title: 'Technicians work from the phone', text: 'Jobs, customer details and sign-off are on the phone, and the office sees status updates.' },
    ],
  },
  industries: {
    title: 'Trades FSMFlow supports in Sri Lanka',
    lead: 'The HVAC and CCTV pages are the closest match for maintenance-led businesses.',
    items: [
      { solution: 'hvac-field-service-software', text: 'AC installation, repair and servicing, with AMC visits and spare parts connected to each job.' },
      { solution: 'cctv-software', text: 'Camera installation jobs, service visits and AMC renewals for CCTV installers.' },
      { solution: 'solar-software', text: 'Installation projects and after-sales servicing for solar companies.' },
      { solution: 'construction-management-software', text: 'Equipment maintenance and site work for contractors.' },
    ],
    other: 'Other service businesses can use the service business management software page as a starting point.',
  },
  benefits: {
    title: 'What better service records and planning give you',
    lead: 'Practical effects of keeping the work in one place, with no promised outcomes.',
    items: [
      { title: 'Follow-up that does not rely on memory', text: 'Upcoming maintenance visits and renewals are listed, so they can be assigned early.' },
      { title: 'Visits that start with the full picture', text: 'Technicians see past work on the unit before they arrive.' },
      { title: 'Planned and urgent work in one view', text: 'Breakdown jobs and scheduled visits sit on the same schedule, so clashes are visible.' },
      { title: 'Easier answers on warranty', text: 'Coverage and service history are recorded against the equipment.' },
    ],
  },
  workflow: {
    title: 'A maintenance visit, start to finish',
    lead: 'How a planned service visit moves through FSMFlow. The visual shows sample data.',
    stages: [
      { label: 'Equipment on record', detail: 'Customer, site and unit details with warranty or AMC status.', icon: Boxes },
      { label: 'Visit scheduled', detail: 'The contract’s visit appears on the calendar.', icon: CalendarClock },
      { label: 'Technician assigned', detail: 'The job goes to the right person with a checklist.', icon: Users },
      { label: 'Service recorded', detail: 'Findings, parts and photos are added on site.', icon: ClipboardCheck },
      { label: 'Next visit planned', detail: 'Follow-up and renewal dates stay visible.', icon: BellRing },
    ],
  },
  faqs: [
    { q: 'Is FSMFlow suitable for HVAC and CCTV service companies in Sri Lanka?', a: 'Yes, those are two of the trades FSMFlow has dedicated pages for. Both involve installed equipment, recurring service visits and AMC (annual maintenance contract) renewals, which the platform is built to track.' },
    { q: 'How does FSMFlow help with planned maintenance?', a: 'Contract visits are scheduled in advance, assigned to technicians as jobs with checklists, and recorded in the service history. Reminders flag upcoming renewals.' },
    { q: 'Can I keep a service history for each customer?', a: 'Yes. Customers, sites and installed units are stored with their visits, parts, warranty and AMC details, so each new visit begins with the history in front of you.' },
    { q: 'Do I need a computer for every technician?', a: 'No. Technicians use the field service app on a phone to see jobs, complete checklists and get sign-off.' },
    { q: 'Does FSMFlow handle Sri Lankan taxes or local payment options?', a: 'No country-specific tax or payment features are claimed on this page. Ask about them in a demo and the team will confirm what applies.' },
  ],
  posts: [PM_POST, WHAT_IS_POST],
  cta: {
    title: 'See how FSMFlow handles your maintenance visits',
    text: 'Book a demo and bring the equipment you service. We will show how visits, service records and renewals fit together.',
    note: 'Mention whether you mainly service HVAC, CCTV or something else.',
  },
}

/* -------------------------------------------------------------------------- */
/* Singapore — dispatch efficiency, operations visibility, preventive maint.    */
/* -------------------------------------------------------------------------- */

const singapore: CountryContent = {
  slug: 'field-service-management-software-singapore',
  eyebrow: 'For service operations teams in Singapore',
  lead: 'FSMFlow is field service management software in Singapore that helps service businesses dispatch technicians with fewer clashes, see where every job stands and keep preventive maintenance on a schedule.',
  heroPoints: ['Technician dispatch', 'Live job status', 'Preventive maintenance'],
  challenges: {
    title: 'What slows down dispatch and visibility',
    lead: 'In a dense service area, several short jobs a day make small coordination errors expensive.',
    items: [
      { icon: Route, title: 'Dispatch decisions made on partial information', text: 'Assigning a job without seeing skills, workload and the day’s plan leads to clashes and reshuffles.' },
      { icon: ClipboardList, title: 'No quick answer to “where is this job?”', text: 'Customers and managers ask for status, and the answer means calling a technician.' },
      { icon: CalendarClock, title: 'Preventive visits competing with urgent calls', text: 'Planned maintenance is first to slip when reactive jobs arrive.' },
      { icon: ChartColumn, title: 'Management reports built by hand', text: 'Collating job counts and completion data in spreadsheets takes time and goes stale.' },
    ],
  },
  help: {
    title: 'How FSMFlow supports efficient dispatch',
    lead: 'The emphasis is on seeing the whole operation and acting on it quickly.',
    items: [
      { feature: 'employee-management-software', linkLabel: 'technician scheduling software', title: 'Dispatch against skills and availability', text: 'Assign jobs with each technician’s profile, skills and workload in view.' },
      { feature: 'field-service-app', linkLabel: 'field service app', title: 'Status updates from the field', text: 'Each status change from the technician reaches the job screen so dispatchers can reschedule with real information.' },
      { feature: 'work-order-management-software', linkLabel: 'work order management software', title: 'Every job tracked to completion', text: 'Work orders carry priority, checklists, parts, photos and a service report.' },
      { feature: 'warranty-management-software', linkLabel: 'scheduled maintenance tracking', title: 'Preventive maintenance on the calendar', text: 'Contracted visits appear weeks ahead and are assigned like any other job.' },
      { feature: 'reporting-software', linkLabel: 'reporting software', title: 'Operational visibility', text: 'Dashboards show jobs, technician productivity and renewals from the same data.' },
    ],
  },
  industries: {
    title: 'Service sectors that can use FSMFlow in Singapore',
    lead: 'Dedicated pages cover these trades; the dispatch workflow is common to all of them.',
    items: [
      { solution: 'hvac-field-service-software', text: 'AC servicing and installation with technician dispatch and maintenance contracts.' },
      { solution: 'cctv-software', text: 'Installation and recurring service visits for security systems.' },
      { solution: 'solar-software', text: 'Installation projects and after-sales visits for solar providers.' },
      { solution: 'construction-management-software', text: 'Crews, equipment maintenance and client updates for contractors.' },
    ],
    other: 'Facilities and general maintenance teams can start with the service business management software page.',
  },
  benefits: {
    title: 'What visibility changes day to day',
    lead: 'Illustrative effects of one shared view of jobs, not guaranteed outcomes.',
    items: [
      { title: 'Dispatch with context', text: 'Skills, workload and open jobs sit beside each other when you assign.' },
      { title: 'Faster answers on job status', text: 'The office reads status from the system rather than phoning the field.' },
      { title: 'Preventive work protected', text: 'Planned visits are on the schedule alongside reactive calls.' },
      { title: 'Reporting without spreadsheets', text: 'Management views come from live job data.' },
    ],
  },
  workflow: {
    title: 'Dispatch to completion, with status along the way',
    lead: 'One job as the dispatcher sees it. The visual shows sample data.',
    stages: [
      { label: 'Job created', detail: 'Priority, site and job type are recorded.', icon: ClipboardList },
      { label: 'Technician dispatched', detail: 'Assigned by skills, availability and workload.', icon: Navigation },
      { label: 'Status updates', detail: 'Technician moves the job through its stages on the phone.', icon: Smartphone },
      { label: 'Work completed', detail: 'Checklist, parts, photos and sign-off are attached.', icon: ClipboardCheck },
      { label: 'Reviewed in reports', detail: 'Completion and workload feed the dashboards.', icon: ChartColumn },
    ],
  },
  faqs: [
    { q: 'How does FSMFlow help dispatch technicians in Singapore?', a: 'Jobs are assigned from a view that shows technician skills and workload, then sent to the technician’s phone. Status changes made in the field reach the office as they happen, so dispatchers can adjust the plan.' },
    { q: 'Can FSMFlow manage preventive maintenance schedules?', a: 'Yes. Contracted or planned visits are scheduled in advance, assigned to technicians as jobs and recorded with a checklist and service report.' },
    { q: 'What reports are available for service managers?', a: 'Reporting dashboards cover jobs, revenue, technician productivity, AMC renewals and pending payments, built from the same data your team records on jobs.' },
    { q: 'Does FSMFlow integrate with Singapore-specific systems?', a: 'This page does not claim any local integrations, tax or compliance features. If your operation depends on one, ask during a demo for a straight answer.' },
    { q: 'Is FSMFlow only for big teams?', a: 'No. It is useful once jobs and technicians outgrow what one person can track; a small team can start with one service line and expand.' },
  ],
  posts: [DISPATCH_POST, PM_POST],
  cta: {
    title: 'See your dispatch board in FSMFlow',
    text: 'Book a demo and we will walk through dispatch, job status and preventive maintenance using a typical day for your team.',
    note: 'Share your team size and trade for a walkthrough that fits.',
  },
}

/* -------------------------------------------------------------------------- */
/* South Africa — distributed field teams, job tracking, equipment maintenance  */
/* -------------------------------------------------------------------------- */

const southAfrica: CountryContent = {
  slug: 'field-service-management-software-south-africa',
  eyebrow: 'For distributed field teams in South Africa',
  lead: 'FSMFlow is field service management software in South Africa that helps businesses coordinate field teams working across many sites, track every job and keep equipment maintenance on schedule from one platform.',
  heroPoints: ['Teams across multiple sites', 'Job tracking', 'Equipment maintenance'],
  challenges: {
    title: 'The cost of coordinating teams across many sites',
    lead: 'When technicians cover wide areas and several customer sites, a central view matters more.',
    items: [
      { icon: Layers, title: 'Different teams, different methods', text: 'Each team or branch keeps its own notes, so the head office cannot see one picture.' },
      { icon: ClipboardList, title: 'Job progress known only after the fact', text: 'Without status updates, managers learn a job is late only when the customer calls.' },
      { icon: Boxes, title: 'Equipment history spread across sites', text: 'Repeat faults are hard to spot when records live in separate files.' },
      { icon: Wrench, title: 'Maintenance rounds that drift', text: 'Planned equipment servicing slips when nobody owns the schedule.' },
    ],
  },
  help: {
    title: 'How FSMFlow supports distributed teams',
    lead: 'A shared record that the office and the field both work from.',
    items: [
      { feature: 'work-order-management-software', linkLabel: 'work order management software', title: 'Track jobs across every site', text: 'Create, assign and follow work orders to completion, with priority, checklists and service reports.' },
      { feature: 'field-service-app', linkLabel: 'field service mobile app', title: 'Field updates reach the office', text: 'Technicians open jobs, tick checklists, add photos and get sign-off on the phone, and the office sees status changes.' },
      { feature: 'asset-management-software', linkLabel: 'equipment management software', title: 'Equipment records per customer site', text: 'Keep installed units, service history and warranty status against each site.' },
      { feature: 'warranty-management-software', linkLabel: 'AMC and maintenance scheduling', title: 'Scheduled equipment maintenance', text: 'Plan recurring visits and see renewals before they lapse.' },
      { feature: 'inventory-management-software', linkLabel: 'parts and stock tracking', title: 'Parts linked to the job', text: 'Track warehouse and van stock, with alerts before items run out.' },
    ],
  },
  industries: {
    title: 'Where FSMFlow fits for South African field businesses',
    lead: 'Teams with equipment to install and maintain at customer sites are the closest match.',
    items: [
      { solution: 'hvac-field-service-software', text: 'Installation, repair and servicing for air-conditioning teams with spare parts on the van.' },
      { solution: 'cctv-software', text: 'Security installation and maintenance visits across customer sites.' },
      { solution: 'solar-software', text: 'Solar installation projects and after-sales service.' },
      { solution: 'construction-management-software', text: 'Site crews, materials and equipment maintenance for contractors.' },
    ],
    other: 'Other multi-site service providers can start from the service business management software page.',
  },
  benefits: {
    title: 'What a shared view gives distributed teams',
    lead: 'Practical effects, not guaranteed results.',
    items: [
      { title: 'One picture for the head office', text: 'Jobs from every team are in the same system with the same statuses.' },
      { title: 'Earlier warning on delays', text: 'Status updates from the field show jobs that are stalled.' },
      { title: 'Equipment history that travels', text: 'Any technician can see what was done on a unit before.' },
      { title: 'Maintenance with an owner', text: 'Planned servicing appears on the schedule with a named technician.' },
    ],
  },
  workflow: {
    title: 'Tracking a job across the office and the field',
    lead: 'How a job moves between the office and a team on site. The visual shows sample data.',
    stages: [
      { label: 'Job logged', detail: 'Customer, site and equipment are attached.', icon: ClipboardList },
      { label: 'Team assigned', detail: 'The work order goes to a technician.', icon: Users },
      { label: 'On-site update', detail: 'Status, photos and notes come from the phone.', icon: Smartphone },
      { label: 'Work signed off', detail: 'Checklist, parts and customer sign-off complete the job.', icon: ClipboardCheck },
      { label: 'Maintenance scheduled', detail: 'Next service for the equipment is planned.', icon: CalendarClock },
    ],
  },
  faqs: [
    { q: 'Can FSMFlow help manage field teams spread across several sites?', a: 'Yes. Work orders from every team live in one system, with statuses the office can see. Technicians update jobs from the field service app.' },
    { q: 'How does FSMFlow track equipment maintenance?', a: 'Installed equipment is stored per customer and site with its service history, warranty and AMC (annual maintenance contract) status. Recurring visits are scheduled and renewals are flagged.' },
    { q: 'Can I see which jobs are late or stalled?', a: 'Work orders carry a status and priority, and status changes from the field reach the office, so you can see which jobs have not moved. Reports summarise jobs and technician workload.' },
    { q: 'Does FSMFlow work offline?', a: 'Offline use is not claimed on this page. If your teams work in areas with poor connectivity, ask about it in a demo before deciding.' },
    { q: 'Does FSMFlow include South African tax or compliance features?', a: 'No country-specific compliance features are claimed here. Raise any local requirement during a demo for a clear answer.' },
  ],
  posts: [PM_POST, WHAT_IS_POST],
  cta: {
    title: 'See how FSMFlow connects your teams and sites',
    text: 'Book a demo and we will walk through job tracking and equipment maintenance for a team spread across locations.',
    note: 'Tell us how many teams and sites you coordinate.',
  },
}

/* -------------------------------------------------------------------------- */
/* Nigeria — organising manual coordination, assignments, follow-ups           */
/* -------------------------------------------------------------------------- */

const nigeria: CountryContent = {
  slug: 'field-service-management-software-nigeria',
  eyebrow: 'For service businesses moving off manual coordination',
  lead: 'FSMFlow is field service management software in Nigeria that helps service businesses replace manual coordination with an organised system for technician assignments, job records and service follow-ups.',
  heroPoints: ['Technician assignments', 'Service follow-ups', 'One record per job'],
  challenges: {
    title: 'Signs that manual coordination is holding the team back',
    lead: 'Many service teams start with phone calls, messaging groups and notebooks. That works until volume grows.',
    items: [
      { icon: ClipboardList, title: 'Assignments given by call or message', text: 'Who was sent where, and when, is hard to confirm later.' },
      { icon: BellRing, title: 'Follow-ups forgotten', text: 'Quotes, repeat visits and maintenance calls get missed when nobody has a list.' },
      { icon: FolderSearch, title: 'Job details that are never written down', text: 'Parts used and work done stay with the technician and are lost.' },
      { icon: Users, title: 'Owner as the coordination bottleneck', text: 'Every job needs a call to the owner or a supervisor before it can move.' },
    ],
  },
  help: {
    title: 'How FSMFlow replaces manual coordination',
    lead: 'Start with the basics, jobs and technicians, then add more modules as the team is ready.',
    items: [
      { feature: 'work-order-management-software', linkLabel: 'work order management software', title: 'Write every job down once', text: 'Each job gets a work order with an assignee, status, checklist, parts and a service report.' },
      { feature: 'employee-management-software', linkLabel: 'technician management software', title: 'Clear technician assignments', text: 'Assign jobs against technician skills and availability and see who is busy.' },
      { feature: 'sales-crm-software', linkLabel: 'sales CRM software', title: 'Follow-ups with reminders', text: 'Set the next step on each lead and quotation, and see what is due today.' },
      { feature: 'field-service-app', linkLabel: 'field service app', title: 'Updates from the technician’s phone', text: 'Technicians open jobs, complete checklists and get sign-off, and the office sees progress.' },
      { feature: 'asset-management-software', linkLabel: 'customer and equipment records', title: 'Customer and service history', text: 'Keep customers, sites and equipment with every past visit.' },
    ],
  },
  industries: {
    title: 'Businesses FSMFlow can organise in Nigeria',
    lead: 'Any team running jobs by phone and message can use the same workflow; these trades have dedicated pages.',
    items: [
      { solution: 'hvac-field-service-software', text: 'AC installation and servicing with jobs, parts and maintenance contracts in one place.' },
      { solution: 'cctv-software', text: 'CCTV surveys, installations and service visits.' },
      { solution: 'solar-software', text: 'Solar installation projects and after-sales service.' },
      { solution: 'construction-management-software', text: 'Site work, crews and client follow-ups for contractors.' },
    ],
    other: 'Generators, appliance repair and other maintenance teams can start from the service business management software page.',
  },
  benefits: {
    title: 'What organised coordination changes',
    lead: 'Effects of having one written record, with no guaranteed results.',
    items: [
      { title: 'Assignments you can check', text: 'Each job shows who it is with and where it stands.' },
      { title: 'Follow-ups that surface themselves', text: 'Reminders list quotes and visits that are due.' },
      { title: 'Less reliance on one person', text: 'Job details are in the system, not only in someone’s head or chat.' },
      { title: 'A growing service history', text: 'Each visit adds to the customer’s record.' },
    ],
  },
  workflow: {
    title: 'From a phone call to a tracked job',
    lead: 'A first workflow for a team leaving manual coordination behind. The visual shows sample data.',
    stages: [
      { label: 'Request recorded', detail: 'The call or message becomes a customer and job entry.', icon: ClipboardList },
      { label: 'Technician assigned', detail: 'One named person owns the work order.', icon: Users },
      { label: 'Work done on site', detail: 'Technician updates status and notes from the phone.', icon: Smartphone },
      { label: 'Job closed', detail: 'Checklist, parts and sign-off finish the record.', icon: ClipboardCheck },
      { label: 'Follow-up set', detail: 'Next visit or quotation reminder is scheduled.', icon: BellRing },
    ],
  },
  faqs: [
    { q: 'We run jobs on WhatsApp and phone calls. Where do we start?', a: 'Start with work orders and technician assignment: record each job once, assign it, and have technicians update it. Add quotations, parts and contracts later when the basics are working.' },
    { q: 'How does FSMFlow help with service follow-ups?', a: 'Reminders show what is due today and what is overdue, for leads and quotations, and scheduled maintenance visits appear on the calendar.' },
    { q: 'Do technicians need special devices?', a: 'Technicians use the field service app on a phone. No special hardware is described on this page.' },
    { q: 'Does FSMFlow support Nigerian payment methods, taxes or local integrations?', a: 'No local payment, tax or integration features are claimed here. Ask during a demo what applies to your business.' },
    { q: 'How do we try it?', a: 'Book a demo. Describe how you handle jobs today and the walkthrough will start from there.' },
  ],
  posts: [WHAT_IS_POST, DISPATCH_POST],
  cta: {
    title: 'Move your service coordination into one system',
    text: 'Book a demo and we will show how assignments, job records and follow-ups work for a team like yours.',
    note: 'Tell us how you track jobs today.',
  },
}

export const COUNTRY_PAGES: Record<string, CountryContent> = Object.fromEntries(
  [malaysia, sriLanka, singapore, southAfrica, nigeria].map((c) => [c.slug, c]),
)
