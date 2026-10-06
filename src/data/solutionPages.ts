import {
  Boxes,
  CalendarClock,
  Cctv,
  ChartColumn,
  Flag,
  HardHat,
  Handshake,
  IndianRupee,
  Layers,
  Package,
  PhoneCall,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { Faq } from '@/lib/schema'

/**
 * Page content for the four industry solution pages (CCTV, solar, construction,
 * service business). Titles, H1s, keywords and SEO meta come from `solutions.ts`;
 * this file holds everything else. HVAC has its own bespoke page.
 *
 * Copy rules: no invented customers, statistics or integrations. Mention only
 * what the nine FSMFlow modules actually do.
 */

export type SolutionAccent = 'iris' | 'heat' | 'brand' | 'aqua'
export type ChallengeLayout = 'split' | 'bento' | 'ledger' | 'duo'
export type StageVariant = 'line' | 'ribbon' | 'stairs'
export type ModuleLayout = 'bento' | 'list'
export type ChipTone = 'ink' | 'brand' | 'iris' | 'aqua' | 'mint' | 'heat' | 'coral'

export interface SectionIntro {
  eyebrow: string
  title: string
  lead: string
}

export interface SolutionChallenge {
  icon: LucideIcon
  /** The problem, in the customer's words. */
  problem: string
  /** How FSMFlow answers it. */
  answer: string
  /** Feature slug (see features.ts) the answer links to. */
  feature: string
  /** Descriptive anchor text for the link. */
  linkLabel: string
}

export interface SolutionStage {
  label: string
  detail: string
  icon: LucideIcon
}

export interface SolutionModule {
  feature: string
  /** Industry-specific headline for the module. */
  title: string
  blurb: string
  chips: string[]
  /** Optional mini "screen" shown on the featured card. */
  preview?: { label: string; value: string; tone: ChipTone }[]
}

export interface SolutionPageContent {
  slug: string
  accent: SolutionAccent
  /** Eyebrow above the H1, e.g. "For CCTV installers". */
  eyebrow: string
  /** Part of the H1 shown with the accent gradient. Must be a substring of the H1. */
  h1Accent: string
  /** Opening paragraph. Contains the primary keyword naturally. */
  lead: string
  heroPoints: { icon: LucideIcon; label: string }[]
  secondaryCta: { label: string; href: string }
  challenges: SectionIntro & { layout: ChallengeLayout; items: SolutionChallenge[] }
  workflow: SectionIntro & { variant: StageVariant; nodes: 'number' | 'icon'; stages: SolutionStage[]; loopLabel?: string }
  modules: SectionIntro & { layout: ModuleLayout; columns?: 1 | 2; items: SolutionModule[] }
  /** One sentence shown in the HVAC cross-link band. */
  hvacNote: string
  faqs: Faq[]
  /** Short line under the FAQ heading. */
  faqLead: string
  cta: { title: string; text: string; note: string }
}

/* -------------------------------------------------------------------------- */
/* CCTV                                                                        */
/* -------------------------------------------------------------------------- */

const cctv: SolutionPageContent = {
  slug: 'cctv-software',
  accent: 'iris',
  eyebrow: 'For CCTV installers and security integrators',
  h1Accent: 'CCTV',
  lead: 'FSMFlow is CCTV software built around how installers really work: survey the site, quote the camera count, run the installation, hand over, and keep every customer on an AMC (annual maintenance contract). One CCTV management system replaces notebooks, chat threads and spreadsheets.',
  heroPoints: [
    { icon: ScanLine, label: 'Site surveys' },
    { icon: Cctv, label: 'Camera records' },
    { icon: CalendarClock, label: 'AMC reminders' },
  ],
  secondaryCta: { label: 'Asset management software', href: '/features/asset-management-software' },
  challenges: {
    layout: 'split',
    eyebrow: 'Challenges we solve',
    title: 'How CCTV software removes the chaos from installation work',
    lead: 'Installers lose time and money in the gaps between the survey, the quotation, the crew and the AMC. This is where FSMFlow steps in.',
    items: [
      {
        icon: ScanLine,
        problem: 'Survey notes live in phone galleries and notebooks',
        answer: 'Record the survey on a job card: camera count, positions, cable runs and notes. The crew installs from the same record the quotation was built on.',
        feature: 'work-order-management-software',
        linkLabel: 'Work order management software',
      },
      {
        icon: ReceiptText,
        problem: 'Quotes take a day, and the camera count changes on site',
        answer: 'Build a quotation for cameras, NVR, storage, cabling and labour in minutes, get it approved, then turn it into an installation job and an invoice.',
        feature: 'quotation-software',
        linkLabel: 'Quotation software',
      },
      {
        icon: Boxes,
        problem: 'Nobody remembers which camera, NVR or cable went where',
        answer: 'Keep every installed camera and recorder on the customer’s site record with serial number, installation date and warranty end, so every visit starts with the full picture.',
        feature: 'asset-management-software',
        linkLabel: 'Asset management software',
      },
      {
        icon: ShieldCheck,
        problem: 'AMC renewals slip and warranty disputes start',
        answer: 'See warranty and AMC status for each site, schedule service visits, and get reminders before a contract lapses.',
        feature: 'warranty-management-software',
        linkLabel: 'Warranty management software',
      },
      {
        icon: Smartphone,
        problem: 'Crews work from phone calls and half-remembered instructions',
        answer: 'Technicians get the job, site details and checklist on their phone, upload photos as they work, and the customer signs off at handover.',
        feature: 'field-service-app',
        linkLabel: 'Field service app',
      },
      {
        icon: Package,
        problem: 'Cameras, hard disks and cable run out mid-job',
        answer: 'Track stock of cameras, hard disks, cable and connectors, link parts to each job, and get low-stock alerts before a crew is stuck.',
        feature: 'inventory-management-software',
        linkLabel: 'Inventory management software',
      },
    ],
  },
  workflow: {
    variant: 'ribbon',
    nodes: 'number',
    eyebrow: 'Installation workflow',
    title: 'A CCTV installation workflow from first enquiry to AMC visits',
    lead: 'Each stage hands over to the next, so nothing is retyped and nothing is forgotten.',
    stages: [
      { label: 'Enquiry', detail: 'Log the lead and book a site survey.', icon: PhoneCall },
      { label: 'Site survey', detail: 'Count cameras and note positions and cable runs.', icon: ScanLine },
      { label: 'Quotation', detail: 'Price cameras, NVR, cabling and labour.', icon: ReceiptText },
      { label: 'Installation', detail: 'The crew mounts, cables and configures.', icon: Cctv },
      { label: 'Handover', detail: 'Test, add photos and take customer sign-off.', icon: Flag },
      { label: 'AMC', detail: 'Start the contract and its visit schedule.', icon: ShieldCheck },
      { label: 'Service visits', detail: 'Scheduled visits and repairs, with history.', icon: CalendarClock },
    ],
  },
  modules: {
    layout: 'bento',
    eyebrow: 'Modules for CCTV businesses',
    title: 'The FSMFlow modules CCTV teams use most',
    lead: 'Five connected modules make FSMFlow complete CCTV installation software, from the first survey to the last AMC visit.',
    items: [
      {
        feature: 'asset-management-software',
        title: 'Every camera, NVR and DVR on record',
        blurb: 'Customer sites, installed devices, serial numbers, installation dates and service history in one place, so “what is installed there?” takes seconds to answer.',
        chips: ['Serial number', 'Install date', 'Warranty end', 'Service history'],
        preview: [
          { label: 'CAM-01 · Entrance', value: 'Warranty to Oct 2028', tone: 'mint' },
          { label: 'CAM-02 · Reception', value: 'AMC quarterly', tone: 'brand' },
          { label: 'NVR · 16-channel', value: 'Active', tone: 'mint' },
        ],
      },
      {
        feature: 'work-order-management-software',
        title: 'Survey and installation job cards',
        blurb: 'Checklists for mounting, cabling, NVR setup and testing, with photos and notes on every job.',
        chips: ['Survey notes', 'Cabling checklist', 'Photos'],
      },
      {
        feature: 'warranty-management-software',
        title: 'AMC and warranty tracking',
        blurb: 'Coverage dates, visit schedules and renewal reminders for every site.',
        chips: ['Quarterly visits', 'Renewal alerts'],
      },
      {
        feature: 'quotation-software',
        title: 'Quotes that match the survey',
        blurb: 'Camera count, NVR, storage and labour on one estimate, with approval and invoice in the same flow.',
        chips: ['Camera count', 'NVR and storage', 'Approval'],
      },
      {
        feature: 'field-service-app',
        title: 'Installers get the job on their phone',
        blurb: 'Site details, checklist, photos and customer sign-off, with live updates for the office.',
        chips: ['Checklist', 'Photos', 'Signature'],
      },
    ],
  },
  hvacNote: 'AMC visits, spare parts and technician schedules work the same way for AC service teams.',
  faqs: [
    {
      q: 'Is FSMFlow a CCTV viewing or video management system?',
      a: 'No. FSMFlow manages your CCTV business: enquiries, site surveys, quotations, installation jobs, customer sites, camera records, AMC and invoices. It does not stream or record camera video.',
    },
    {
      q: 'Can I track every installed camera and NVR for a customer?',
      a: 'Yes. Record each camera, NVR or DVR against the customer’s site with its serial number, installation date and warranty end, so every service visit starts with the full picture.',
    },
    {
      q: 'How does FSMFlow help with AMC renewals?',
      a: 'Each site keeps its AMC contract and visit schedule. FSMFlow reminds your team before visits and renewals are due, so customers are contacted before cover lapses.',
    },
    {
      q: 'Can my installers use FSMFlow on site?',
      a: 'Yes. Technicians get their jobs on a mobile app with customer details, checklists, photos and sign-off, and the office sees progress as it happens.',
    },
  ],
  faqLead: 'Straight answers about running a CCTV installation and AMC business on FSMFlow.',
  cta: {
    title: 'See FSMFlow run a CCTV job from survey to AMC',
    text: 'Book a demo and we will walk through a survey, a quotation, an installation job and an AMC schedule, shaped around how your team works.',
    note: 'A short walkthrough made for CCTV installers.',
  },
}

/* -------------------------------------------------------------------------- */
/* Solar                                                                       */
/* -------------------------------------------------------------------------- */

const solar: SolutionPageContent = {
  slug: 'solar-software',
  accent: 'heat',
  eyebrow: 'For solar EPC and installation teams',
  h1Accent: 'Solar',
  lead: 'FSMFlow is solar software for installers and EPC teams. Capture the lead, plan the site survey, send the quotation, run the installation project, then look after the plant through AMC (annual maintenance contract) and service visits, all in one place.',
  heroPoints: [
    { icon: Handshake, label: 'Lead pipeline' },
    { icon: Layers, label: 'Project stages' },
    { icon: CalendarClock, label: 'AMC and service visits' },
  ],
  secondaryCta: { label: 'Quotation software', href: '/features/quotation-software' },
  challenges: {
    layout: 'bento',
    eyebrow: 'Challenges we solve',
    title: 'One solar software platform from first lead to after-sales service',
    lead: 'Solar projects pass through many hands over many weeks. These are the gaps that cost installers time, and how FSMFlow closes them.',
    items: [
      {
        icon: Handshake,
        problem: 'Leads from ads, referrals and dealers get lost',
        answer: 'Solar CRM software that logs every lead, sets follow-ups and moves each one through a pipeline until the quotation is won.',
        feature: 'sales-crm-software',
        linkLabel: 'Sales CRM software',
      },
      {
        icon: ReceiptText,
        problem: 'Quotes take days and need rework whenever the system size changes',
        answer: 'Create a quotation for the system size, send it for approval, and convert the won quote into a project and an invoice.',
        feature: 'quotation-software',
        linkLabel: 'Quotation software',
      },
      {
        icon: Layers,
        problem: 'Projects stall between survey, installation and commissioning',
        answer: 'Solar project management software that treats every site as a project with stages, tasks, owners and photos, so you can see what is blocked and why.',
        feature: 'work-order-management-software',
        linkLabel: 'Work order management software',
      },
      {
        icon: Package,
        problem: 'Panels, inverters and cables run short when the crew arrives',
        answer: 'Track stock of panels, inverters, structures and cable, and link material to each project before the crew leaves.',
        feature: 'inventory-management-software',
        linkLabel: 'Inventory management software',
      },
      {
        icon: ShieldCheck,
        problem: 'Plants get no attention after handover',
        answer: 'Record panel and inverter warranty and AMC for every plant, schedule operations and maintenance (O&M) visits such as cleaning and inspection, and get renewal reminders.',
        feature: 'warranty-management-software',
        linkLabel: 'Warranty management software',
      },
      {
        icon: Smartphone,
        problem: 'Installation crews work from calls and paper checklists',
        answer: 'Solar field service software in the crew’s pocket: site details, checklists and photos on a phone, and live progress for the office.',
        feature: 'field-service-app',
        linkLabel: 'Field service app',
      },
    ],
  },
  workflow: {
    variant: 'stairs',
    nodes: 'number',
    eyebrow: 'Project workflow',
    title: 'The solar project workflow, from lead to after-sales service',
    lead: 'Follow every site through the same stages, whether it is a home rooftop or a factory roof.',
    stages: [
      { label: 'Lead', detail: 'Capture it and follow up in the CRM.', icon: Handshake },
      { label: 'Site survey', detail: 'Roof, load and shading notes.', icon: ScanLine },
      { label: 'Design and quotation', detail: 'System size, cost and approval.', icon: ReceiptText },
      { label: 'Order confirmed', detail: 'The won quote becomes a project.', icon: Flag },
      { label: 'Installation', detail: 'Structure, panels, inverter and wiring.', icon: HardHat },
      { label: 'Commissioning', detail: 'Testing, handover and sign-off.', icon: ShieldCheck },
      { label: 'After-sales service', detail: 'AMC, cleaning and repairs.', icon: CalendarClock },
    ],
  },
  modules: {
    layout: 'list',
    columns: 1,
    eyebrow: 'Modules for solar businesses',
    title: 'Six FSMFlow modules that fit a solar business',
    lead: 'Each module links to the next, so FSMFlow works as solar EPC software: a won lead flows into a project, a service plan and a payment record.',
    items: [
      {
        feature: 'sales-crm-software',
        title: 'Solar CRM for every lead and follow-up',
        blurb: 'Track enquiries from every source, schedule follow-ups and see your pipeline by stage.',
        chips: ['New lead', 'Survey booked', 'Quote sent', 'Won'],
      },
      {
        feature: 'quotation-software',
        title: 'Quotations by system size',
        blurb: 'Estimate panels, inverter and installation cost, send it for approval and convert the won quote into a project and an invoice.',
        chips: ['System size (kW)', 'Approval', 'Invoice', 'Payments'],
      },
      {
        feature: 'work-order-management-software',
        title: 'Project tasks and stages',
        blurb: 'Break each installation into stages and tasks with owners, checklists and photos.',
        chips: ['Stages', 'Checklists', 'Photos'],
      },
      {
        feature: 'inventory-management-software',
        title: 'Panels, inverters and cables in stock',
        blurb: 'Warehouse and van stock linked to projects, with low-stock alerts.',
        chips: ['Warehouse stock', 'Project use', 'Low-stock alerts'],
      },
      {
        feature: 'warranty-management-software',
        title: 'Warranty and O&M schedules',
        blurb: 'Panel and inverter warranty, AMC contracts and scheduled service visits for every plant.',
        chips: ['Panel warranty', 'AMC visits', 'Renewals'],
      },
      {
        feature: 'reporting-software',
        title: 'Projects, revenue and dues at a glance',
        blurb: 'See projects by stage, revenue and pending payments without building spreadsheets.',
        chips: ['Projects by stage', 'Revenue', 'Pending payments'],
      },
    ],
  },
  hvacNote: 'Service visits, AMC schedules and spare parts work the same way for AC service teams.',
  faqs: [
    {
      q: 'Can FSMFlow manage a solar project from lead to commissioning?',
      a: 'Yes. The lead, site survey, quotation, installation project, commissioning and after-sales service are tracked on one record, so the whole team sees the same status.',
    },
    {
      q: 'Does FSMFlow design the solar system or calculate generation?',
      a: 'No. FSMFlow runs the business side: leads, quotations, projects, crews, materials, AMC and payments. Keep using your design tool and record the system size and details on the quotation and project.',
    },
    {
      q: 'Can I track AMC and cleaning visits after installation?',
      a: 'Yes. Each plant can hold its warranty and AMC details with a visit schedule, and FSMFlow reminds your team before visits and renewals are due.',
    },
    {
      q: 'Is FSMFlow suitable for both rooftop and EPC projects?',
      a: 'Yes. Rooftop installers and EPC teams that run several projects at once can treat each site as its own project with stages, tasks, materials and payments.',
    },
  ],
  faqLead: 'Straight answers about running a solar installation and EPC business on FSMFlow.',
  cta: {
    title: 'Run every solar project from first lead to service visit',
    text: 'Book a demo and see a lead become a quotation, a project and an AMC schedule in FSMFlow, shaped around how your team works.',
    note: 'A short walkthrough made for solar installers and EPC teams.',
  },
}

/* -------------------------------------------------------------------------- */
/* Construction                                                                */
/* -------------------------------------------------------------------------- */

const construction: SolutionPageContent = {
  slug: 'construction-management-software',
  accent: 'brand',
  eyebrow: 'For contractors and construction firms',
  h1Accent: 'Construction',
  lead: 'FSMFlow is construction management software for contractors who run several sites at once. Track enquiries and quotations, plan milestones, send crews and materials to site, and follow every payment, without chasing updates over phone calls.',
  heroPoints: [
    { icon: Flag, label: 'Milestone tracking' },
    { icon: HardHat, label: 'Crews and materials' },
    { icon: IndianRupee, label: 'Payment follow-up' },
  ],
  secondaryCta: { label: 'Work order management software', href: '/features/work-order-management-software' },
  challenges: {
    layout: 'ledger',
    eyebrow: 'Challenges we solve',
    title: 'Construction management software that follows the work from quote to handover',
    lead: 'Sites, crews, materials and payments all move at once. These are the points where projects slip, and how FSMFlow keeps them in view.',
    items: [
      {
        icon: Handshake,
        problem: 'Enquiries and client follow-ups slip between site visits',
        answer: 'Construction CRM software that logs every enquiry, sets follow-ups and shows which quotations are still waiting on a client.',
        feature: 'sales-crm-software',
        linkLabel: 'Sales CRM software',
      },
      {
        icon: ReceiptText,
        problem: 'Estimates change and approvals stay verbal',
        answer: 'Prepare the estimate, get the client’s approval, bill by milestone and track what has been paid and what is still due.',
        feature: 'quotation-software',
        linkLabel: 'Quotation software',
      },
      {
        icon: Flag,
        problem: 'No one is sure which milestone is on track',
        answer: 'Break each project into work orders with owners, due dates and photo proof, so progress is visible for every site.',
        feature: 'work-order-management-software',
        linkLabel: 'Work order management software',
      },
      {
        icon: Users,
        problem: 'Crews and subcontractors are hard to schedule',
        answer: 'Contractor management software for crew profiles, skills, daily tasks and workload, so every site starts the day staffed.',
        feature: 'employee-management-software',
        linkLabel: 'Employee management software',
      },
      {
        icon: Package,
        problem: 'Materials run out or get over-ordered',
        answer: 'Track store and site stock, link materials to each project, and get alerts before cement, steel or fittings run low.',
        feature: 'inventory-management-software',
        linkLabel: 'Inventory management software',
      },
      {
        icon: ChartColumn,
        problem: 'Owners cannot see every site and every due payment at once',
        answer: 'Reports on projects, revenue and pending payments give you the whole portfolio in one view.',
        feature: 'reporting-software',
        linkLabel: 'Reporting software',
      },
    ],
  },
  workflow: {
    variant: 'line',
    nodes: 'number',
    eyebrow: 'Project workflow',
    title: 'A construction project workflow from enquiry to handover',
    lead: 'Every project follows the same traceable path, from the first site visit to the final follow-up.',
    stages: [
      { label: 'Enquiry', detail: 'Log the client and the scope.', icon: PhoneCall },
      { label: 'Site visit', detail: 'Measure, note and photograph.', icon: ScanLine },
      { label: 'Quotation', detail: 'Estimate, approve and set milestones.', icon: ReceiptText },
      { label: 'Kickoff', detail: 'Create the project and assign crews.', icon: Flag },
      { label: 'Site execution', detail: 'Daily tasks, materials and progress.', icon: HardHat },
      { label: 'Milestone billing', detail: 'Invoice as each stage completes.', icon: IndianRupee },
      { label: 'Handover', detail: 'Sign-off, then follow-up visits.', icon: ShieldCheck },
    ],
  },
  modules: {
    layout: 'bento',
    eyebrow: 'Modules for contractors',
    title: 'The FSMFlow modules contractors rely on',
    lead: 'Six modules give you construction project management software for the business side of every project, from the first estimate to the last payment.',
    items: [
      {
        feature: 'work-order-management-software',
        title: 'Projects, milestones and site tasks',
        blurb: 'Create work orders for each stage, assign owners and track progress with checklists and photos.',
        chips: ['Milestones', 'Site tasks', 'Photos'],
        preview: [
          { label: 'Excavation and foundation', value: 'Done', tone: 'mint' },
          { label: 'Structure and slabs', value: '40%', tone: 'brand' },
          { label: 'Brickwork and plaster', value: 'Upcoming', tone: 'ink' },
        ],
      },
      {
        feature: 'quotation-software',
        title: 'Estimates and milestone billing',
        blurb: 'Quote the job, get approval and raise invoices as milestones complete, with payments tracked against each one.',
        chips: ['Estimate', 'Approval', 'Milestone invoice', 'Payments'],
        preview: [
          { label: 'Advance 10%', value: 'Paid', tone: 'mint' },
          { label: 'Structure 30%', value: 'Invoice due', tone: 'heat' },
          { label: 'Handover 15%', value: 'Upcoming', tone: 'ink' },
        ],
      },
      {
        feature: 'employee-management-software',
        title: 'Crews and contractors',
        blurb: 'Profiles, skills, today’s assignments and workload for staff and crews.',
        chips: ['Profiles', 'Skills', 'Daily tasks'],
      },
      {
        feature: 'inventory-management-software',
        title: 'Materials across store and sites',
        blurb: 'Stock levels and usage by project, with low-stock alerts.',
        chips: ['Store stock', 'Low-stock alerts'],
      },
      {
        feature: 'field-service-app',
        title: 'Supervisors update the site from a phone',
        blurb: 'Tasks, checklists, photos and sign-off, with live updates for the office.',
        chips: ['Checklists', 'Photos', 'Sign-off'],
      },
      {
        feature: 'reporting-software',
        title: 'Every project and due payment in one view',
        blurb: 'Projects, revenue and pending payments without spreadsheets.',
        chips: ['Projects', 'Revenue', 'Dues'],
      },
    ],
  },
  hvacNote: 'Technician schedules, spare parts and annual maintenance contract (AMC) visits work the same way for AC service teams.',
  faqs: [
    {
      q: 'Is FSMFlow suitable for small contractors and construction firms?',
      a: 'Yes. FSMFlow suits contractors, renovation and interior firms and builders who manage several sites with their own crews and subcontractors, and want enquiries, quotations, work and payments in one place.',
    },
    {
      q: 'Can I track milestone payments for each project?',
      a: 'Yes. Create the quotation for a project, bill by milestone, and track which payments are received and which are still due.',
    },
    {
      q: 'Does FSMFlow replace drawing or estimating tools?',
      a: 'No. FSMFlow is construction software for the business side: leads, quotations, work, crews, materials and payments. Keep using your drawing and estimating tools and record the results in FSMFlow.',
    },
    {
      q: 'How do site supervisors update progress?',
      a: 'Supervisors and crew leads use the mobile app to see their tasks, complete checklists, add photos and take sign-off, and the office sees updates as they happen.',
    },
  ],
  faqLead: 'Straight answers about running contracting and site projects on FSMFlow.',
  cta: {
    title: 'Keep every site, crew and payment in one view',
    text: 'Book a demo and see how FSMFlow follows a project from the first enquiry to the final milestone payment.',
    note: 'A short walkthrough made for contractors and builders.',
  },
}

/* -------------------------------------------------------------------------- */
/* Service business                                                            */
/* -------------------------------------------------------------------------- */

const service: SolutionPageContent = {
  slug: 'service-business-management-software',
  accent: 'aqua',
  eyebrow: 'For any field service team',
  h1Accent: 'Service Business',
  lead: 'FSMFlow is service business management software for teams that send people to customer locations: electricians, plumbers, appliance repair, pest control and more. Take the request, send a quotation, schedule the right technician, complete the job and collect payment from one system.',
  heroPoints: [
    { icon: CalendarClock, label: 'Smart scheduling' },
    { icon: ReceiptText, label: 'Quotes and payments' },
    { icon: Smartphone, label: 'Technician app' },
  ],
  secondaryCta: { label: 'Technician scheduling software', href: '/features/employee-management-software' },
  challenges: {
    layout: 'duo',
    eyebrow: 'Challenges we solve',
    title: 'How service business management software fixes everyday scheduling headaches',
    lead: 'Most service teams run on calls, whiteboards and spreadsheets. Service management software like FSMFlow replaces them with one connected flow.',
    items: [
      {
        icon: PhoneCall,
        problem: 'Requests arrive by call and message, and some get lost',
        answer: 'Create a job from every request with the customer, address, issue and priority, so nothing depends on memory.',
        feature: 'work-order-management-software',
        linkLabel: 'Job management software',
      },
      {
        icon: CalendarClock,
        problem: 'Scheduling by phone causes double bookings and idle gaps',
        answer: 'Service scheduling software that shows every technician’s day, lets you assign by skill and area, and makes reassigning easy.',
        feature: 'employee-management-software',
        linkLabel: 'Technician scheduling software',
      },
      {
        icon: ReceiptText,
        problem: 'Customers wait too long for a quotation',
        answer: 'Create a quotation in minutes, get approval, and convert it into a job and an invoice.',
        feature: 'quotation-software',
        linkLabel: 'Quotation software',
      },
      {
        icon: Smartphone,
        problem: 'Technicians arrive without the job details',
        answer: 'The address, issue, customer history, checklist and sign-off are on the technician’s phone before they leave.',
        feature: 'field-service-app',
        linkLabel: 'Field service app',
      },
      {
        icon: Boxes,
        problem: 'Repeat customers and past jobs are hard to trace',
        answer: 'Keep customer details, locations, equipment and service history in one record that the whole team can open.',
        feature: 'asset-management-software',
        linkLabel: 'Customer management software',
      },
      {
        icon: ChartColumn,
        problem: 'Pending payments and daily performance are unclear',
        answer: 'Reports show jobs, revenue, technician productivity and pending payments at a glance.',
        feature: 'reporting-software',
        linkLabel: 'Reporting software',
      },
    ],
  },
  workflow: {
    variant: 'line',
    nodes: 'icon',
    eyebrow: 'Service workflow',
    title: 'A service scheduling workflow, from first call to final payment',
    lead: 'The same flow works for electricians, plumbers, repair teams and pest control.',
    loopLabel: 'Repeat customers and reminders start the loop again',
    stages: [
      { label: 'Request', detail: 'Log the call with customer and issue.', icon: PhoneCall },
      { label: 'Quotation', detail: 'Send an estimate for approval.', icon: ReceiptText },
      { label: 'Schedule', detail: 'Pick a slot and a technician.', icon: CalendarClock },
      { label: 'Dispatch', detail: 'The job reaches the technician’s phone.', icon: Smartphone },
      { label: 'Service', detail: 'Checklist, parts and photos.', icon: Package },
      { label: 'Invoice', detail: 'Bill from the completed job.', icon: ReceiptText },
      { label: 'Payment', detail: 'Track what is paid and what is due.', icon: IndianRupee },
      { label: 'Follow-up', detail: 'Next service reminder and review.', icon: Flag },
    ],
  },
  modules: {
    layout: 'list',
    columns: 2,
    eyebrow: 'Modules for service teams',
    title: 'The FSMFlow modules a service team runs on',
    lead: 'Pick the field service software modules you need today and add the rest as the business grows. They all share one customer and job record.',
    items: [
      {
        feature: 'work-order-management-software',
        title: 'Jobs for every trade',
        blurb: 'Create, assign and track jobs with checklists, parts and service reports.',
        chips: ['Job cards', 'Checklists', 'Service report'],
      },
      {
        feature: 'employee-management-software',
        title: 'Technician schedules and workload',
        blurb: 'Profiles, skills and daily workload, so the right person gets the right job.',
        chips: ['Skills', 'Schedule', 'Workload'],
      },
      {
        feature: 'quotation-software',
        title: 'Quotations, invoices and payments',
        blurb: 'Estimates that turn into jobs and invoices, with payments tracked.',
        chips: ['Estimate', 'Invoice', 'Payments'],
      },
      {
        feature: 'field-service-app',
        title: 'The technician’s phone app',
        blurb: 'Job details, customer history, checklists, photos and sign-off on site.',
        chips: ['Job details', 'Photos', 'Sign-off'],
      },
      {
        feature: 'asset-management-software',
        title: 'Customer records and service history',
        blurb: 'Customers, sites, equipment, warranty and past visits in one place.',
        chips: ['Customers', 'Equipment', 'History'],
      },
      {
        feature: 'reporting-software',
        title: 'Reports on jobs, revenue and dues',
        blurb: 'Daily and monthly numbers without building spreadsheets.',
        chips: ['Jobs', 'Revenue', 'Pending payments'],
      },
    ],
  },
  hvacNote: 'If you also run AC installation or annual maintenance contract (AMC) work, the same platform handles it.',
  faqs: [
    {
      q: 'Which businesses can use FSMFlow?',
      a: 'Any team that sends people to customer locations: electricians, plumbers, appliance and electronics repair, pest control, and more. Job types, checklists and quotations adapt to your trade.',
    },
    {
      q: 'How does service scheduling work in FSMFlow?',
      a: 'Create a job, choose a technician by skill, area and workload, and set the time. Everyone sees the schedule, the technician gets the job on a phone, and you can reassign when plans change.',
    },
    {
      q: 'Can I send quotations and track payments?',
      a: 'Yes. Create a quotation, get approval, convert it into a job and an invoice, and track which payments are received and which are pending.',
    },
    {
      q: 'Do I need a different product for each trade?',
      a: 'No. FSMFlow is one field service management software platform. HVAC, CCTV, solar, construction and other service businesses use the same modules with workflows that suit their trade.',
    },
  ],
  faqLead: 'Straight answers about running a field service team on FSMFlow.',
  cta: {
    title: 'Schedule, quote and collect from one system',
    text: 'Book a demo and see a request become a scheduled job, a quotation, an invoice and a payment record in FSMFlow.',
    note: 'A short walkthrough made for field service teams.',
  },
}

export const SOLUTION_PAGES: Record<string, SolutionPageContent> = {
  [cctv.slug]: cctv,
  [solar.slug]: solar,
  [construction.slug]: construction,
  [service.slug]: service,
}
