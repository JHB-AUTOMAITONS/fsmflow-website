import {
  Activity,
  AirVent,
  BadgeCheck,
  BellRing,
  Building2,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  Camera,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardPlus,
  FilePenLine,
  FileSignature,
  Gauge,
  History,
  IdCard,
  IndianRupee,
  LayoutDashboard,
  Link2,
  ListChecks,
  ListTodo,
  Navigation,
  Package,
  PackageCheck,
  PenLine,
  ChartPie,
  RefreshCcw,
  Search,
  Send,
  ShieldCheck,
  Snowflake,
  Sun,
  Tags,
  Timer,
  TrendingUp,
  Truck,
  UserCheck,
  UserPlus,
  Users,
  Warehouse,
  Wrench,
  Columns3,
  ArrowRightLeft,
  RadioTower,
  type LucideIcon,
} from 'lucide-react'
import type { Faq } from '@/lib/schema'

/**
 * Page content for the nine feature pages (src/pages/FeaturePage.tsx).
 * Slugs, H1s, SEO titles and descriptions live in features.ts and are not repeated here.
 *
 * Copy rules: simple professional English, sentence case, no invented customers, stats or
 * integrations. AMC is spelled out (annual maintenance contract) on first use per page.
 */

export type ChipTone = 'ink' | 'brand' | 'iris' | 'aqua' | 'mint' | 'heat' | 'coral'

/** How the capabilities section is laid out. Each page picks the one that suits its content. */
export type CapabilityLayout = 'split' | 'bento' | 'steps' | 'rail' | 'timeline'

/** Small UI snippets used inside capability rows / bento cells (see MiniVisuals.tsx). */
export type MiniKey =
  | 'crm-sources'
  | 'crm-followups'
  | 'crm-convert'
  | 'asset-card'
  | 'asset-history'
  | 'asset-cover'
  | 'inv-van'
  | 'inv-low'
  | 'inv-used'
  | 'rpt-today'
  | 'rpt-techs'
  | 'rpt-aging'
  | 'rpt-types'
  | 'rpt-renewals'
  | 'app-jobs'
  | 'app-checklist'
  | 'app-photos'
  | 'app-sign'
  | 'wo-sla'
  | 'emp-skills'

export interface Capability {
  icon: LucideIcon
  /** Rendered as an h3. */
  title: string
  text: string
  /** Small status chip echoing the product UI. */
  chip?: { label: string; tone: ChipTone }
  /** Mini mockup (split and bento layouts). */
  mini?: MiniKey
  /** Bento width on large screens, out of 6 columns. */
  span?: 2 | 3 | 4
}

export interface Benefit {
  title: string
  text: string
  chip: { icon: LucideIcon; label: string; value: string; tone: ChipTone }
}

export interface HvacScenario {
  icon: LucideIcon
  title: string
  text: string
}

export interface RelatedFeature {
  slug: string
  /** One line describing how the two features work together. */
  line: string
  /** Anchor text: the related feature's primary keyword or a natural variation. */
  anchor: string
}

export interface RelatedSolution {
  slug: string
  anchor: string
}

export interface FeaturePageContent {
  slug: string
  /** Short module label shown above the H1. */
  eyebrow: string
  /** Opening paragraph; contains the primary keyword. */
  lead: string
  bullets: [string, string, string]
  capabilities: {
    layout: CapabilityLayout
    tone: 'white' | 'mist'
    /** H2 (contains the primary keyword or a close variation). */
    title: string
    lead: string
    /** Mini visual shown beside the heading (rail layout). */
    aside?: MiniKey
    /** Closing line under a timeline (the cycle repeating). */
    closing?: string
    items: Capability[]
  }
  benefits: {
    layout: 'rows' | 'cards'
    title: string
    lead?: string
    items: Benefit[]
  }
  hvac: {
    title: string
    /** Text before and after the "HVAC field service software" link. */
    intro: [string, string]
    scenarios: HvacScenario[]
  }
  related: RelatedFeature[]
  solutions: { intro: string; links: RelatedSolution[] }
  faqs: Faq[]
  cta: { title: string; text: string }
}

export const FEATURE_PAGES: Record<string, FeaturePageContent> = {
  /* ------------------------------------------------------------------ */
  'sales-crm-software': {
    slug: 'sales-crm-software',
    eyebrow: 'Sales & CRM',
    lead: 'FSMFlow’s sales CRM software captures every enquiry, reminds your team to follow up and moves each lead through a clear pipeline — new installations, repair calls and AMC (annual maintenance contract) renewals alike. When a deal is won, it becomes a quotation and a job without anyone retyping the details.',
    bullets: [
      'Every enquiry logged with its source, owner and next step',
      'Follow-up reminders so no quotation goes quiet',
      'Won deals convert into a quotation and a job in one step',
    ],
    capabilities: {
      layout: 'bento',
      tone: 'mist',
      title: 'Sales CRM software that follows every lead to a booked job',
      lead: 'In a service business, an enquiry is only the first of many steps before a technician turns up. Here is how FSMFlow keeps each step moving.',
      items: [
        {
          icon: UserPlus,
          title: 'Lead management software for every enquiry',
          text: 'Log calls, website enquiries, referrals and walk-ins in seconds. Each lead keeps its contact details, site address, requirement and source, so nothing lives in a notebook or on someone’s phone.',
          mini: 'crm-sources',
          span: 4,
        },
        {
          icon: Columns3,
          title: 'A sales pipeline you can read at a glance',
          text: 'Sales pipeline software should be readable in seconds. Move deals through stages such as new enquiry, site visit, quotation sent, negotiation and won, and see how many deals each stage holds and what they are worth.',
          chip: { label: '5 stages', tone: 'brand' },
          span: 2,
        },
        {
          icon: BellRing,
          title: 'Follow-ups that do not slip',
          text: 'Set the next step on every lead. Reminders show what is due today and what is overdue, so quotations are chased while the customer is still deciding.',
          mini: 'crm-followups',
          span: 2,
        },
        {
          icon: ArrowRightLeft,
          title: 'From won deal to quotation and job',
          text: 'Create a quotation straight from the lead, with the requirement already filled in. When the customer agrees, convert the deal into a job — customer, site and scope carry over.',
          mini: 'crm-convert',
          span: 4,
        },
        {
          icon: History,
          title: 'Sales management software with full history',
          text: 'See past jobs, AMC status and earlier quotations on the lead itself, so your team talks to repeat customers with context.',
          chip: { label: 'Repeat customers', tone: 'mint' },
          span: 3,
        },
        {
          icon: Users,
          title: 'Clear ownership across the sales team',
          text: 'Assign leads to team members, see who is handling what, and review each person’s open deals and their value in one view.',
          chip: { label: 'Owner on every lead', tone: 'iris' },
          span: 3,
        },
      ],
    },
    benefits: {
      layout: 'rows',
      title: 'Fewer lost enquiries, faster quotations',
      lead: 'What changes when your sales follow-up lives in the same system as your jobs.',
      items: [
        {
          title: 'Every enquiry gets a next step',
          text: 'Leads stop sitting in inboxes and notebooks. Each one has an owner and a follow-up date, so “who called them back?” always has an answer.',
          chip: { icon: CalendarClock, label: 'Follow-up due', value: 'Today · 4:00 pm', tone: 'heat' },
        },
        {
          title: 'Quotations go out while the customer is still interested',
          text: 'With the requirement already on the lead, your team builds and sends the quotation straight away instead of rewriting details from a call.',
          chip: { icon: Send, label: 'Quotation sent', value: 'QT-0482 · ₹7,000', tone: 'brand' },
        },
        {
          title: 'Sales and operations share one record',
          text: 'The deal, the quotation and the job sit on the same customer record, so the technician sees what was promised and the office sees what was done.',
          chip: { icon: ArrowRightLeft, label: 'Converted', value: 'Lead → JOB-1034', tone: 'mint' },
        },
        {
          title: 'You can see the work that is coming',
          text: 'Pipeline value by stage shows how much work is likely to land, so you can plan technicians and spare parts ahead of time.',
          chip: { icon: TrendingUp, label: 'Open pipeline', value: '₹16.9L', tone: 'iris' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use the sales pipeline',
      intro: ['Sales CRM software is one module of our ', ', built around how AC businesses actually win work.'],
      scenarios: [
        {
          icon: AirVent,
          title: 'Installation enquiries',
          text: 'Log a “3 × 1.5 ton split AC” enquiry, book the site visit, send the quotation with parts and labour, and convert it to an installation job once the customer agrees.',
        },
        {
          icon: Wrench,
          title: 'Repair calls from repeat customers',
          text: 'A breakdown call from an existing customer opens with their units, warranty and last visit on screen, so you can quote the repair or offer a contract on the spot.',
        },
        {
          icon: CalendarClock,
          title: 'AMC renewals as deals',
          text: 'Treat each renewal as a lead with a value and a follow-up date. A clinic’s yearly contract should not depend on someone remembering to call.',
        },
        {
          icon: Sun,
          title: 'Getting ready for summer',
          text: 'Before the hot season, list the customers who have no contract yet and follow up with each one while demand for servicing is rising.',
        },
      ],
    },
    related: [
      { slug: 'quotation-software', line: 'Turn a won deal into an estimate with parts, labour and a clear approval trail.', anchor: 'Explore quotation software' },
      { slug: 'work-order-management-software', line: 'Convert the deal into a job, assign a technician and track it to completion.', anchor: 'See work order management software' },
      { slug: 'asset-management-software', line: 'Reach the customer’s units, warranty and service history from the lead.', anchor: 'Learn about asset management software' },
    ],
    solutions: {
      intro: 'The same pipeline works for other field service trades:',
      links: [
        { slug: 'solar-software', anchor: 'solar CRM software' },
        { slug: 'service-business-management-software', anchor: 'service business management software' },
      ],
    },
    faqs: [
      {
        q: 'What is sales CRM software for a service business?',
        a: 'It is a system for recording enquiries, tracking follow-ups and managing a sales pipeline from the first call to a won deal. In FSMFlow it sits next to jobs, quotations and customer records, so a won deal turns into work without re-entering any data.',
      },
      {
        q: 'Can I track leads from phone calls and walk-ins, not just online enquiries?',
        a: 'Yes. Your team adds a lead in a few seconds and records where it came from, such as a phone call, website, referral or walk-in, so every source is tracked in the same pipeline.',
      },
      {
        q: 'What happens when a lead says yes?',
        a: 'You convert the deal into a quotation or a job. The customer, site address and requirement carry over, so your team does not retype them and the technician sees what was agreed.',
      },
      {
        q: 'Do I need a separate CRM software alongside FSMFlow?',
        a: 'For most service businesses, no. Lead management, follow-ups and the sales pipeline are built in, and they connect directly to quotations, jobs and customer history.',
      },
    ],
    cta: {
      title: 'Turn more enquiries into booked jobs',
      text: 'See the pipeline, the follow-up reminders and one-step job conversion in a short demo built around your service business.',
    },
  },

  /* ------------------------------------------------------------------ */
  'asset-management-software': {
    slug: 'asset-management-software',
    eyebrow: 'Assets & customers',
    lead: 'Asset management software that keeps a record of every customer, site and installed unit — model, serial number, warranty, AMC (annual maintenance contract) status and complete service history — so a technician never arrives without the full picture.',
    bullets: [
      'Every unit linked to its customer and site',
      'Warranty, AMC and service history on one screen',
      'Next service date visible before each visit',
    ],
    capabilities: {
      layout: 'split',
      tone: 'white',
      title: 'Asset management software that remembers every unit you service',
      lead: 'Equipment records are the memory of a service business. FSMFlow keeps them tidy and attached to the work.',
      items: [
        {
          icon: AirVent,
          title: 'One record for every installed unit',
          text: 'Add each AC, CCTV system or solar plant with its model, serial number, install date and location. As asset tracking software, it keeps every unit tied to its customer, so nobody has to ask “which unit was that?”',
          mini: 'asset-card',
        },
        {
          icon: History,
          title: 'Service history that travels with the unit',
          text: 'Every visit, repair and replaced part is logged against the asset. Before a visit, your technician can see what was done last time and what was recommended.',
          mini: 'asset-history',
        },
        {
          icon: ShieldCheck,
          title: 'Warranty and AMC status at a glance',
          text: 'Each asset shows whether it is in warranty, under AMC or out of cover, along with the next service date. Your team quotes correctly and customers are not charged for covered work.',
          mini: 'asset-cover',
        },
        {
          icon: Building2,
          title: 'Customer management software with every site',
          text: 'A customer can have several sites and many units. See contacts, addresses and equipment together from a single customer profile.',
        },
        {
          icon: Search,
          title: 'Find any unit in seconds',
          text: 'Search by customer, area, model or serial number, then filter by warranty, AMC or next service date to plan the week.',
        },
        {
          icon: RefreshCcw,
          title: 'Equipment management for repair-or-replace calls',
          text: 'Spot units that keep coming back with the same fault. The history makes it easier to advise a customer on repair versus replacement.',
        },
      ],
    },
    benefits: {
      layout: 'cards',
      title: 'Start every visit with the full picture',
      items: [
        {
          title: 'Technicians arrive prepared',
          text: 'Model, last service, open issues and earlier parts are on the job, so more first visits fix the problem.',
          chip: { icon: History, label: 'Last visit', value: '04 Oct · Filters cleaned', tone: 'aqua' },
        },
        {
          title: 'Fewer arguments about what is covered',
          text: 'When warranty and AMC status sit on the unit, it is clear what is covered and what is chargeable before work starts.',
          chip: { icon: ShieldCheck, label: 'Coverage', value: 'In warranty · till Mar 2027', tone: 'mint' },
        },
        {
          title: 'Repeat customers feel looked after',
          text: 'You remember their units, their last visit and what they asked for, even when the person who visited has moved on.',
          chip: { icon: BadgeCheck, label: 'Customer since', value: 'Mar 2023 · 12 visits', tone: 'brand' },
        },
        {
          title: 'Service is planned, not remembered',
          text: 'Next-service dates on every unit show what is coming up, so preventive visits get scheduled before the customer has to ask.',
          chip: { icon: CalendarClock, label: 'Next service', value: '04 Jan 2027', tone: 'heat' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use asset records',
      intro: ['Asset records are the base of our ', ', where one customer often has a mix of split, cassette and ducted units.'],
      scenarios: [
        {
          icon: AirVent,
          title: 'Split, cassette and VRF units',
          text: 'Record each indoor and outdoor unit by type, tonnage and room, so a six-unit clinic visit starts with a list instead of guesswork.',
        },
        {
          icon: Wrench,
          title: 'Gas top-ups and repairs',
          text: 'Log the refrigerant, quantity and parts used against the unit. Next time, your technician sees the history of leaks and capacitor changes.',
        },
        {
          icon: CalendarClock,
          title: 'AMC site lists',
          text: 'For contract customers, the units under cover and their visit dates are right there, so the technician services every unit on the list.',
        },
      ],
    },
    related: [
      { slug: 'warranty-management-software', line: 'Track warranty periods, AMC contracts and renewals on every unit.', anchor: 'Explore warranty management software' },
      { slug: 'work-order-management-software', line: 'Every job is recorded against the unit it was done on.', anchor: 'See work order management software' },
      { slug: 'field-service-app', line: 'Technicians open the unit’s history from their phone on site.', anchor: 'See the field service app' },
    ],
    solutions: {
      intro: 'Asset records are just as useful for other equipment:',
      links: [
        { slug: 'cctv-software', anchor: 'CCTV software' },
        { slug: 'solar-software', anchor: 'solar field service software' },
      ],
    },
    faqs: [
      {
        q: 'What can I track as an asset?',
        a: 'Any equipment you install or service: AC units, VRF systems, CCTV cameras and recorders, solar inverters and panels. Each asset has its own model, serial number, location, install date, warranty and service history.',
      },
      {
        q: 'Can one customer have several sites and many units?',
        a: 'Yes. A customer can have multiple sites, and each site can hold many units. All of them are visible from the customer profile.',
      },
      {
        q: 'How does an asset’s service history get updated?',
        a: 'When a technician completes a job, the visit, checklist, parts used and notes are saved against the unit that was serviced, so the history builds up without extra data entry.',
      },
      {
        q: 'Is asset tracking the same as inventory?',
        a: 'No. Assets are the equipment installed at customer sites. Inventory is the spare parts and stock you hold. FSMFlow keeps them separate but connected, so parts used on a job are deducted from stock and recorded against the unit.',
      },
    ],
    cta: {
      title: 'Know every unit you service',
      text: 'See how asset records, warranty status and service history come together in a short demo with your own equipment in mind.',
    },
  },

  /* ------------------------------------------------------------------ */
  'quotation-software': {
    slug: 'quotation-software',
    eyebrow: 'Quotations & invoicing',
    lead: 'Quotation software built for service work. Create an estimate with parts and labour in minutes, send it for approval, convert the approved quotation into a job and an invoice, and see which payments are still pending.',
    bullets: [
      'Estimates with parts, labour and discounts',
      'Approved quotation becomes a job and an invoice',
      'Payment status visible against every invoice',
    ],
    capabilities: {
      layout: 'steps',
      tone: 'mist',
      title: 'Quotation software that takes you from estimate to payment',
      lead: 'Five steps, one record. Nothing is retyped between the estimate and the money.',
      items: [
        {
          icon: FilePenLine,
          title: 'Build the estimate',
          text: 'Estimate software that is quick to use: add parts from your price list and labour as line items, apply a discount and set a validity date. Totals update as you edit.',
          chip: { label: 'Draft', tone: 'ink' },
        },
        {
          icon: Send,
          title: 'Send it to the customer',
          text: 'Share the quotation and track where it stands, whether draft, sent or approved, instead of chasing it through messages.',
          chip: { label: 'Sent', tone: 'brand' },
        },
        {
          icon: BadgeCheck,
          title: 'Record the approval',
          text: 'Mark the quotation approved when the customer agrees. The approval date stays on the record, so there is no doubt about what was accepted.',
          chip: { label: 'Approved', tone: 'mint' },
        },
        {
          icon: ArrowRightLeft,
          title: 'One quotation, then the job and the invoice',
          text: 'Quotation and invoice software often means typing the same list twice. Here, an approved quotation creates the job and the invoice from the same line items.',
          chip: { label: 'Invoiced', tone: 'iris' },
        },
        {
          icon: IndianRupee,
          title: 'Track what is paid and what is pending',
          text: 'Payment management software that keeps it simple: record advances and part-payments against each invoice, and see the balance and due date at a glance.',
          chip: { label: 'Paid', tone: 'mint' },
        },
      ],
    },
    benefits: {
      layout: 'rows',
      title: 'Faster quotations, fewer unpaid invoices',
      items: [
        {
          title: 'Quotations leave the same day',
          text: 'Pick the parts, add labour and send. Your team stops rebuilding the same repair estimate from scratch.',
          chip: { icon: Send, label: 'Quotation', value: 'QT-0482 · ₹7,000', tone: 'brand' },
        },
        {
          title: 'Prices stay consistent',
          text: 'Parts come from your price list, so two technicians quote the same repair the same way.',
          chip: { icon: Tags, label: 'Price list', value: 'Capacitor 35 µF · ₹420', tone: 'aqua' },
        },
        {
          title: 'What was agreed is what gets billed',
          text: 'Because the invoice comes from the approved quotation, the scope and the amount match what the customer accepted.',
          chip: { icon: ArrowRightLeft, label: 'Converted', value: 'QT-0482 → job + invoice', tone: 'iris' },
        },
        {
          title: 'You know who owes you money',
          text: 'Pending payments sit in one list by customer and due date, which makes collection follow-ups a routine task instead of a hunt.',
          chip: { icon: CircleDollarSign, label: 'Pending', value: '₹1.82L · 4 invoices', tone: 'coral' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use quotations',
      intro: ['Quotations are where a repair call or enquiry becomes revenue in ', ', so they need to be quick and exact.'],
      scenarios: [
        {
          icon: AirVent,
          title: 'Installation estimates',
          text: 'Quote 2 × 1.5 ton split ACs with the unit, copper piping, stand, wiring and installation labour as separate lines, so the customer sees what they pay for.',
        },
        {
          icon: Wrench,
          title: 'Repair quotes with parts',
          text: 'Quote an inverter PCB or compressor replacement before work starts, and have the approval on record before the part is fitted.',
        },
        {
          icon: CalendarClock,
          title: 'Yearly maintenance contracts',
          text: 'Send a yearly AMC (annual maintenance contract) quotation priced by unit count and visit frequency, then set it up as a contract once the customer approves.',
        },
      ],
    },
    related: [
      { slug: 'sales-crm-software', line: 'Create a quotation straight from a lead and follow it up in the pipeline.', anchor: 'Explore sales CRM software' },
      { slug: 'work-order-management-software', line: 'An approved quotation becomes a job with the same scope and parts.', anchor: 'See work order management software' },
      { slug: 'reporting-software', line: 'Track revenue, pending payments and quotation activity on one dashboard.', anchor: 'See reporting software' },
    ],
    solutions: {
      intro: 'Quotations also suit other trades:',
      links: [
        { slug: 'construction-management-software', anchor: 'construction management software' },
        { slug: 'cctv-software', anchor: 'CCTV installation software' },
      ],
    },
    faqs: [
      {
        q: 'Can I create a quotation with both parts and labour?',
        a: 'Yes. Add parts from your price list and labour as separate line items, apply a discount if needed, and the total updates as you edit.',
      },
      {
        q: 'What happens after the customer approves a quotation?',
        a: 'You convert it into a job and an invoice. The line items carry over, the technician sees the agreed scope, and payments are tracked against the invoice.',
      },
      {
        q: 'Does this work as invoicing software too?',
        a: 'Yes. Each approved quotation can become an invoice, and you can record advances and part-payments against it, so you always see what has been paid and what is pending.',
      },
      {
        q: 'Can I send a quotation before the person is a customer?',
        a: 'Yes. A quotation can be created directly from a lead in the sales pipeline and linked to the customer record once the deal is won.',
      },
    ],
    cta: {
      title: 'Send quotations that get approved and paid',
      text: 'See the quotation builder, the approval trail and the payment tracker in a short demo using your own parts and labour.',
    },
  },

  /* ------------------------------------------------------------------ */
  'work-order-management-software': {
    slug: 'work-order-management-software',
    eyebrow: 'Work orders & jobs',
    lead: 'Work order management software to create, assign and track every service job from request to completion — with checklists, parts, photos and a service report attached to the job.',
    bullets: [
      'Create a job in seconds and assign the right technician',
      'Live status from assigned to completed',
      'Checklist, parts, photos and sign-off on every job',
    ],
    capabilities: {
      layout: 'rail',
      tone: 'white',
      title: 'Work order management software for every job',
      lead: 'Whether it is a gas top-up or a VRF breakdown, each job follows the same clear path from the first call to the final report.',
      aside: 'wo-sla',
      items: [
        {
          icon: ClipboardPlus,
          title: 'Create a job in seconds',
          text: 'Pick the customer and unit, choose the job type — maintenance, repair, installation or AMC (annual maintenance contract) visit — and add the problem, priority and preferred time.',
          chip: { label: 'Job types', tone: 'brand' },
        },
        {
          icon: CalendarCheck,
          title: 'Assign the right technician',
          text: 'See who is free and who has the right skills, then assign the job. It appears on the technician’s phone straight away.',
          chip: { label: 'Assigned', tone: 'iris' },
        },
        {
          icon: Activity,
          title: 'Track status as work happens',
          text: 'Job management software is only useful if the status is true. Jobs move through assigned, en route, in progress and completed as the technician updates them.',
          chip: { label: 'In progress', tone: 'heat' },
        },
        {
          icon: ListChecks,
          title: 'Checklists that make quality repeatable',
          text: 'Attach a service checklist to each job type: filters, gas pressure, compressor, drain line. Technicians tick every step, so each visit follows the same standard.',
          chip: { label: '3 / 5 steps', tone: 'mint' },
        },
        {
          icon: Camera,
          title: 'Parts, photos and notes on the job',
          text: 'Record the parts used, attach before-and-after photos and add notes. The office has proof of work and the customer gets a clear service report.',
          chip: { label: '2 photos', tone: 'aqua' },
        },
        {
          icon: Timer,
          title: 'Priorities and deadlines',
          text: 'Mark urgent breakdowns as high priority and give jobs a time window, so late or at-risk work is easy to spot.',
          chip: { label: 'SLA · 2h 10m left', tone: 'coral' },
        },
      ],
    },
    benefits: {
      layout: 'cards',
      title: 'Fewer missed jobs, clearer proof of work',
      items: [
        {
          title: 'The office stops chasing technicians for updates',
          text: 'Status changes as the technician travels, arrives and starts work, so “where is he?” can be answered from the screen.',
          chip: { icon: Navigation, label: 'Status', value: 'En route · ETA 12 min', tone: 'aqua' },
        },
        {
          title: 'Every job follows the same standard',
          text: 'Checklists turn good practice into routine. A new technician follows the same steps as your most experienced one.',
          chip: { icon: ListChecks, label: 'Checklist', value: '5 / 5 complete', tone: 'mint' },
        },
        {
          title: 'Customers get a proper service report',
          text: 'Checklist, parts used and photos are saved on the job, so the report is ready when the work is done.',
          chip: { icon: ClipboardCheck, label: 'Service report', value: 'Auto-generated', tone: 'brand' },
        },
        {
          title: 'Urgent work gets handled first',
          text: 'High-priority jobs and time windows stand out on the list, so a failed chiller is never buried under routine visits.',
          chip: { icon: Timer, label: 'High priority', value: 'SLA · 2h 10m left', tone: 'coral' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use work orders',
      intro: ['Every kind of AC work fits the same job flow in ', ', with its own checklist and parts.'],
      scenarios: [
        {
          icon: CalendarClock,
          title: 'Maintenance and AMC visits',
          text: 'Each visit is a job with its own checklist for filters, gas pressure, compressor and drain line, and a report the customer can keep.',
        },
        {
          icon: Snowflake,
          title: 'Breakdown calls',
          text: 'Mark a failed VRF outdoor unit as high priority, assign the nearest qualified technician and watch the status until it is fixed.',
        },
        {
          icon: Wrench,
          title: 'Installations',
          text: 'Track an installation from site ready to commissioning, with photos of piping and electrical work attached to the job.',
        },
        {
          icon: Package,
          title: 'Parts used on site',
          text: 'Record the capacitor, gas or PCB used on the job, so the invoice and the stock both stay correct.',
        },
      ],
    },
    related: [
      { slug: 'field-service-app', line: 'Technicians open, update and complete jobs from their phones.', anchor: 'See the field service app' },
      { slug: 'employee-management-software', line: 'Schedule jobs against each technician’s skills and availability.', anchor: 'Explore technician scheduling software' },
      { slug: 'inventory-management-software', line: 'Parts recorded on a job are deducted from van or warehouse stock.', anchor: 'See inventory management software' },
    ],
    solutions: {
      intro: 'Work orders are used across trades:',
      links: [
        { slug: 'service-business-management-software', anchor: 'service business management software' },
        { slug: 'cctv-software', anchor: 'CCTV installation software' },
      ],
    },
    faqs: [
      {
        q: 'What is a work order in field service?',
        a: 'A work order is the record of a job: who the customer is, what needs doing, where, when, who is assigned and what happened. In FSMFlow it also holds the checklist, parts, photos and service report.',
      },
      {
        q: 'Is work order management the same as job management software?',
        a: 'They describe the same idea. Some teams say job, others say work order or ticket. FSMFlow tracks service jobs of every type, from a gas top-up to a full installation, in one flow.',
      },
      {
        q: 'Can I see job status without calling the technician?',
        a: 'Yes. Technicians update the status from the field service app as they travel, arrive and start work, so the office sees progress on the job screen without a phone call.',
      },
      {
        q: 'Can one job cover several units?',
        a: 'Yes. A job can cover several units at the same site, for example a quarterly service visit covering six AC units, with a checklist and report for the whole visit.',
      },
    ],
    cta: {
      title: 'Run every job from request to report',
      text: 'See work orders, live status and checklists in a short demo, using the kinds of jobs your team does every day.',
    },
  },

  /* ------------------------------------------------------------------ */
  'warranty-management-software': {
    slug: 'warranty-management-software',
    eyebrow: 'Warranty & contracts',
    lead: 'Warranty management software that tracks coverage for every unit, schedules AMC (annual maintenance contract) visits and flags renewals before they lapse — so no service obligation and no renewal is missed.',
    bullets: [
      'Warranty and AMC status on every unit',
      'Scheduled visits laid out across the year',
      'Renewal alerts before a contract expires',
    ],
    capabilities: {
      layout: 'timeline',
      tone: 'mist',
      title: 'Warranty management software that keeps every visit on schedule',
      lead: 'The life of a service contract, from installation to renewal, as one connected timeline.',
      closing: 'A renewed contract starts the cycle again',
      items: [
        {
          icon: PackageCheck,
          title: 'Warranty starts at installation',
          text: 'Record the warranty period when a unit is installed or sold. The coverage dates sit on the asset and show on every job.',
          chip: { label: 'Warranty till Mar 2027', tone: 'mint' },
        },
        {
          icon: FileSignature,
          title: 'Set up the contract',
          text: 'Create an AMC record with the units covered, visits per year, start and end dates and contract value. AMC management software starts with a contract that is easy to read.',
          chip: { label: 'AMC-0188 · 4 visits', tone: 'brand' },
        },
        {
          icon: CalendarRange,
          title: 'Visits are scheduled',
          text: 'Lay out the year’s service visits from the contract. Each one appears on the schedule and is assigned like any other job.',
          chip: { label: '4 visits scheduled', tone: 'aqua' },
        },
        {
          icon: BellRing,
          title: 'Your team is reminded before each visit',
          text: 'Upcoming visits are flagged ahead of time, so a quarterly service does not quietly turn into a yearly one.',
          chip: { label: 'Due in 3 days', tone: 'heat' },
        },
        {
          icon: ClipboardCheck,
          title: 'Service is logged against the contract',
          text: 'Each completed visit is recorded with its checklist and report, so the contract shows visits used and visits remaining.',
          chip: { label: '3 of 4 used', tone: 'iris' },
        },
        {
          icon: RefreshCcw,
          title: 'Renewal alert, then renew',
          text: 'Contracts and warranties nearing their end are flagged in advance, so you can quote the renewal before cover lapses.',
          chip: { label: 'Renews in 12 days', tone: 'coral' },
        },
      ],
    },
    benefits: {
      layout: 'rows',
      title: 'No missed visits, no lapsed contracts',
      items: [
        {
          title: 'Recurring revenue stops leaking',
          text: 'Renewals are some of the most predictable revenue in an HVAC business. An alert ahead of the end date gives you time to quote and follow up.',
          chip: { icon: BellRing, label: 'Renewal due', value: 'Sharma Residency · 12 days', tone: 'heat' },
        },
        {
          title: 'Customers get the service they paid for',
          text: 'Every contracted visit is on the schedule with a technician against it, so a quarterly contract does not slip into a once-a-year visit.',
          chip: { icon: CalendarCheck, label: 'Visits used', value: '4 of 4', tone: 'mint' },
        },
        {
          title: 'Warranty questions have a clear answer',
          text: 'When a unit fails, the technician and the office both see whether it is under warranty, under contract or neither, and quote accordingly.',
          chip: { icon: ShieldCheck, label: 'Coverage', value: 'Under AMC · warranty ended', tone: 'brand' },
        },
        {
          title: 'You can plan around the calendar',
          text: 'Scheduled visits show up weeks ahead, so you can balance technician workload and bring the right spare parts.',
          chip: { icon: CalendarClock, label: 'Next visit', value: '09 Oct · Suresh Pillai', tone: 'aqua' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use warranty and AMC tracking',
      intro: ['Contracts and warranties drive repeat work in ', ', so they are tracked like jobs rather than remembered.'],
      scenarios: [
        {
          icon: Building2,
          title: 'Quarterly contracts for clinics and offices',
          text: 'A six-unit clinic on a quarterly AMC gets four visits a year, each on the calendar with a technician and a checklist.',
        },
        {
          icon: ShieldCheck,
          title: 'Compressor and parts warranty',
          text: 'Track the manufacturer’s warranty on installed units, so a compressor failure in year two is handled and claimed correctly.',
        },
        {
          icon: Sun,
          title: 'Renewals before summer',
          text: 'Review contracts ending before the hot season and renew them while customers are thinking about cooling.',
        },
        {
          icon: Wrench,
          title: 'Preventive visits',
          text: 'Scheduled maintenance catches weak capacitors and slow gas leaks early, before they turn into peak-season breakdowns.',
        },
      ],
    },
    related: [
      { slug: 'asset-management-software', line: 'Coverage dates live on the unit, next to its service history.', anchor: 'Explore asset management software' },
      { slug: 'work-order-management-software', line: 'Each scheduled visit becomes a job with a checklist and report.', anchor: 'See work order management software' },
      { slug: 'quotation-software', line: 'Quote the renewal and convert it to a contract once approved.', anchor: 'Explore quotation software' },
    ],
    solutions: {
      intro: 'Service contracts matter in other trades too:',
      links: [
        { slug: 'cctv-software', anchor: 'CCTV software' },
        { slug: 'solar-software', anchor: 'solar field service software' },
      ],
    },
    faqs: [
      {
        q: 'What is warranty management software?',
        a: 'It records warranty and service-contract coverage for each product you sell or service, and tells you what is covered, when it ends and what is due next. In FSMFlow this connects to the unit, the customer and the job.',
      },
      {
        q: 'Can I manage AMC contracts too?',
        a: 'Yes. AMC management is built in: contract dates, units covered, visits per year, visits completed and the renewal due date are all on one record.',
      },
      {
        q: 'How will I know when an AMC or warranty is about to expire?',
        a: 'FSMFlow flags contracts and warranties that are nearing their end date, so your team can quote a renewal before cover lapses.',
      },
      {
        q: 'Do scheduled AMC visits become jobs?',
        a: 'Yes. Each scheduled visit appears on the calendar and is assigned to a technician like any other job, with a checklist and a service report.',
      },
    ],
    cta: {
      title: 'Never miss a visit or a renewal again',
      text: 'See warranty coverage, AMC schedules and renewal alerts in a short demo built around the contracts you run today.',
    },
  },

  /* ------------------------------------------------------------------ */
  'inventory-management-software': {
    slug: 'inventory-management-software',
    eyebrow: 'Inventory & parts',
    lead: 'Inventory management software for service teams that carry spare parts: see warehouse and van stock in one place, link parts to the jobs that use them, and get alerts before you run out of the part a technician needs.',
    bullets: [
      'Warehouse and technician van stock side by side',
      'Parts deducted when they are used on a job',
      'Low-stock alerts against minimum levels you set',
    ],
    capabilities: {
      layout: 'bento',
      tone: 'mist',
      title: 'Inventory management software for warehouse and van stock',
      lead: 'Spare parts inventory software that matches how technicians work: parts live in a store and in vans, and they get used on jobs.',
      items: [
        {
          icon: Warehouse,
          title: 'Warehouse and van stock in one view',
          text: 'Stock management software that shows what is in the main store and what each technician carries. Move parts from store to van and see both counts change.',
          mini: 'inv-van',
          span: 4,
        },
        {
          icon: BellRing,
          title: 'Minimum levels and low-stock alerts',
          text: 'Set a minimum for each part. When stock falls below it, the part is flagged so you reorder before a job is delayed.',
          mini: 'inv-low',
          span: 2,
        },
        {
          icon: Tags,
          title: 'A parts catalogue with SKUs and prices',
          text: 'Parts inventory software with SKU, unit and price for every item, so quotations and invoices use the same figures.',
          chip: { label: 'SKU · unit · price', tone: 'brand' },
          span: 2,
        },
        {
          icon: Link2,
          title: 'Parts linked to the jobs that use them',
          text: 'Technicians record parts used from their phone. Stock goes down, the job cost is right and the invoice shows what was fitted.',
          mini: 'inv-used',
          span: 4,
        },
        {
          icon: History,
          title: 'A stock history you can trust',
          text: 'Every addition, transfer and use is recorded, so a mismatch can be traced back to a job or a handover.',
          chip: { label: 'Every movement logged', tone: 'aqua' },
          span: 3,
        },
        {
          icon: TrendingUp,
          title: 'Parts management based on real usage',
          text: 'See which parts are used most and which sit idle, so you stock for the work you actually do.',
          chip: { label: 'Usage by part', tone: 'iris' },
          span: 3,
        },
      ],
    },
    benefits: {
      layout: 'cards',
      title: 'Fewer return trips, fewer stock-outs',
      items: [
        {
          title: 'Technicians leave with the right parts',
          text: 'Van stock is visible, so the office knows what each technician can fix without going back to the store.',
          chip: { icon: Truck, label: 'Van 2 · Ravi Kumar', value: '3 parts ready', tone: 'aqua' },
        },
        {
          title: 'No more last-minute purchases',
          text: 'Low-stock alerts arrive before the shelf is empty, so reordering is planned rather than urgent.',
          chip: { icon: BellRing, label: 'Low stock', value: 'Capacitor 35 µF · 2 left', tone: 'coral' },
        },
        {
          title: 'Job costs match what was used',
          text: 'Parts recorded on the job flow into the invoice and out of stock, so billing and inventory agree.',
          chip: { icon: Package, label: 'Parts on job', value: '₹690 · JOB-1024', tone: 'brand' },
        },
        {
          title: 'You can see where stock goes',
          text: 'Transfers between the warehouse and each van are recorded, so missing stock has a trail to follow.',
          chip: { icon: Warehouse, label: 'Transfer', value: 'Warehouse → Van 2 · 5 pcs', tone: 'iris' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use parts inventory',
      intro: ['Parts make or break a visit in ', ', so stock is tracked where the work happens.'],
      scenarios: [
        {
          icon: Package,
          title: 'Capacitors, gas and PCBs',
          text: 'Fast-moving parts such as running capacitors, R32 gas and drain pumps get minimum levels, so vans do not leave without them.',
        },
        {
          icon: Truck,
          title: 'Van stock per technician',
          text: 'Each technician’s van carries parts for the day’s jobs. When a PCB is fitted, it comes off that van’s stock.',
        },
        {
          icon: AirVent,
          title: 'Installation material',
          text: 'Track copper coils, insulation and brackets for installation jobs, so a crew does not stop mid-install for a missing coil.',
        },
        {
          icon: Sun,
          title: 'Stocking up for summer',
          text: 'Use the past season’s part usage to stock the right quantities before the hot months, when breakdown calls spike.',
        },
      ],
    },
    related: [
      { slug: 'work-order-management-software', line: 'Parts are recorded on each job and deducted from stock.', anchor: 'See work order management software' },
      { slug: 'field-service-app', line: 'Technicians log parts used from their phone, on site.', anchor: 'See the field service app' },
      { slug: 'reporting-software', line: 'Review revenue, jobs and part usage alongside each other.', anchor: 'Explore reporting software' },
    ],
    solutions: {
      intro: 'Stock control matters in other trades too:',
      links: [
        { slug: 'cctv-software', anchor: 'CCTV installation software' },
        { slug: 'solar-software', anchor: 'solar software' },
      ],
    },
    faqs: [
      {
        q: 'What is inventory management software for a service business?',
        a: 'It tracks the spare parts and materials you hold, where they are and when they run low. For a field service team, that includes stock in the warehouse and in technicians’ vans, and the parts used on each job.',
      },
      {
        q: 'Can I track stock in technician vans?',
        a: 'Yes. Warehouse and van stock are tracked separately and shown together, so you can see what each technician is carrying and move parts between locations.',
      },
      {
        q: 'Are parts deducted when a technician uses them?',
        a: 'When the technician records a part on the job, it is deducted from the stock location they selected, such as their van, and it appears on the job cost.',
      },
      {
        q: 'Can I set a minimum stock level?',
        a: 'Yes. Set a minimum for each part, and FSMFlow flags the part when stock falls below it, so you can reorder in time.',
      },
    ],
    cta: {
      title: 'Keep the right parts in the right van',
      text: 'See warehouse and van stock, low-stock alerts and parts-on-job tracking in a short demo using your own spare parts list.',
    },
  },

  /* ------------------------------------------------------------------ */
  'field-service-app': {
    slug: 'field-service-app',
    eyebrow: 'Technician mobile app',
    lead: 'A field service app puts the day’s jobs, customer details, warranty and AMC (annual maintenance contract) status, checklist, parts and sign-off on the technician’s phone. The office sees every update as it happens, so nobody has to call to ask where a job stands.',
    bullets: [
      'Today’s jobs, directions and customer details on the phone',
      'Checklist, parts and photos captured on site',
      'Customer sign-off and an auto-generated service report',
    ],
    capabilities: {
      layout: 'split',
      tone: 'white',
      title: 'A field service app built around the technician’s day',
      lead: 'Short steps and clear screens, so technicians spend their time on the unit instead of the phone.',
      items: [
        {
          icon: ListTodo,
          title: 'Today’s jobs, in order',
          text: 'The field service technician app opens on the day’s list: job type, customer, area and time, with the next job at the top and directions one tap away.',
          mini: 'app-jobs',
        },
        {
          icon: ListChecks,
          title: 'Checklists on the phone',
          text: 'Technicians work through the service checklist for the job type and tick each step. Nothing depends on memory or paper.',
          mini: 'app-checklist',
        },
        {
          icon: Camera,
          title: 'Photos and parts as the work happens',
          text: 'Attach before-and-after photos and record the parts used. The office sees proof of work, and stock updates when the job is done.',
          mini: 'app-photos',
        },
        {
          icon: PenLine,
          title: 'Customer sign-off and service report',
          text: 'The customer signs on the phone, and a service report is generated from the checklist, parts and photos on the job.',
          mini: 'app-sign',
        },
        {
          icon: AirVent,
          title: 'Customer and unit details before arrival',
          text: 'A service technician app that shows the address, contact, units, warranty and last visit, so the technician arrives informed.',
        },
        {
          icon: RadioTower,
          title: 'Live status for the office',
          text: 'Start travel, arrive, start work and complete. Each tap updates the job in the office, with no phone call needed.',
        },
      ],
    },
    benefits: {
      layout: 'rows',
      title: 'Less phone tag, better records',
      items: [
        {
          title: 'The office sees progress without calling',
          text: 'Each status change reaches the job screen as it happens, so dispatchers can reschedule with real information.',
          chip: { icon: RadioTower, label: 'Status', value: 'En route · ETA 12 min', tone: 'aqua' },
        },
        {
          title: 'Proof of work is captured on site',
          text: 'Photos and checklists are attached to the job at the time, not reconstructed from memory at the end of the day.',
          chip: { icon: Camera, label: 'Photos', value: '2 attached', tone: 'brand' },
        },
        {
          title: 'Technicians arrive with context',
          text: 'Customer, unit and history are on the phone, so the first conversation at the door is about the problem, not the paperwork.',
          chip: { icon: BadgeCheck, label: 'Customer', value: 'AMC active · last visit 04 Oct', tone: 'mint' },
        },
        {
          title: 'Paperwork finishes at the customer’s door',
          text: 'Sign-off and the service report are completed on the spot, so billing can start the same day.',
          chip: { icon: ClipboardCheck, label: 'Service report', value: 'Auto-generated', tone: 'iris' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC technicians use the app',
      intro: ['The technician app is the field side of our ', ', built for the way AC jobs run.'],
      scenarios: [
        {
          icon: AirVent,
          title: 'Installation day',
          text: 'Open the job, follow the checklist for piping, vacuuming, gas charge and testing, take photos of each stage and get the customer’s sign-off.',
        },
        {
          icon: Snowflake,
          title: 'Breakdown calls',
          text: 'See the customer’s units, warranty and previous repairs before arriving, then record the fault, parts used and the fix.',
        },
        {
          icon: CalendarClock,
          title: 'AMC visits',
          text: 'Work through a unit-by-unit checklist for a six-unit clinic and record the gas and parts used on each unit.',
        },
        {
          icon: Package,
          title: 'Parts from the van',
          text: 'Log the capacitor or gas used on the job, and the van’s stock updates when the job is completed.',
        },
      ],
    },
    related: [
      { slug: 'work-order-management-software', line: 'Jobs created in the office show up on the technician’s phone.', anchor: 'See work order management software' },
      { slug: 'employee-management-software', line: 'Schedule technicians by skill and availability, then dispatch to the app.', anchor: 'Explore technician scheduling software' },
      { slug: 'inventory-management-software', line: 'Parts recorded in the app are deducted from van stock.', anchor: 'See inventory management software' },
    ],
    solutions: {
      intro: 'Field teams in other trades use the same app:',
      links: [
        { slug: 'cctv-software', anchor: 'CCTV installation software' },
        { slug: 'solar-software', anchor: 'solar field service software' },
      ],
    },
    faqs: [
      {
        q: 'What does a field service app do?',
        a: 'A field service mobile app gives technicians their jobs, customer and site details, directions, checklist, parts, photos and sign-off on a phone, and sends each update back to the office as it happens.',
      },
      {
        q: 'What can a technician do in the app?',
        a: 'See the day’s jobs, call the customer, get directions, update status as they travel, arrive and start work, tick the checklist, record parts and photos, take the customer’s signature and complete the job.',
      },
      {
        q: 'Which phones does the technician app run on?',
        a: 'It runs on smartphones, so technicians use the phone they already carry. We confirm supported devices and set-up for your team during the demo.',
      },
      {
        q: 'Is the app separate from the office software?',
        a: 'No. It is part of the same FSMFlow account. Jobs created in the office appear on the technician’s phone, and updates from the field flow back to the job.',
      },
    ],
    cta: {
      title: 'Give your technicians a better day on the road',
      text: 'See the technician app on a phone, from today’s job list to the signed service report, in a short demo.',
    },
  },

  /* ------------------------------------------------------------------ */
  'employee-management-software': {
    slug: 'employee-management-software',
    eyebrow: 'Team & scheduling',
    lead: 'Employee management software for field teams: keep technician profiles and skills in one place, schedule jobs against availability, and see workload and performance across every job and site.',
    bullets: [
      'Technician profiles with skills and service areas',
      'A weekly schedule that shows who is free',
      'Workload and job counts for every person',
    ],
    capabilities: {
      layout: 'rail',
      tone: 'white',
      title: 'Employee management software for your field team',
      lead: 'Your technicians are your product. Keep their skills, schedules and workload in one place.',
      aside: 'emp-skills',
      items: [
        {
          icon: IdCard,
          title: 'A profile for every technician',
          text: 'Name, role, phone, service area and skills in one record, from AC technicians to VRF engineers.',
          chip: { label: 'Senior AC technician', tone: 'brand' },
        },
        {
          icon: BadgeCheck,
          title: 'Skills that match the job',
          text: 'Tag skills such as split AC, VRF, chiller or installation, so the right person is picked for the right job.',
          chip: { label: 'VRF · Chiller', tone: 'iris' },
        },
        {
          icon: CalendarDays,
          title: 'Schedule by day and week',
          text: 'Technician scheduling software that shows each person’s jobs on a weekly grid. Spot gaps and double bookings before the day starts.',
          chip: { label: 'Week view', tone: 'aqua' },
        },
        {
          icon: UserCheck,
          title: 'Availability, leave and days off',
          text: 'Mark leave and days off so scheduling reflects who is actually available, not who was available last week.',
          chip: { label: 'On leave Thu', tone: 'ink' },
        },
        {
          icon: Gauge,
          title: 'Workload at a glance',
          text: 'See jobs per technician per day and balance the load before one person is overloaded while another is idle.',
          chip: { label: '82% booked', tone: 'heat' },
        },
        {
          icon: TrendingUp,
          title: 'Performance by technician',
          text: 'Workforce management software that shows jobs completed per person over any period, so reviews are based on records, not impressions.',
          chip: { label: 'Jobs completed', tone: 'mint' },
        },
      ],
    },
    benefits: {
      layout: 'cards',
      title: 'A fairer, fuller, better-planned schedule',
      items: [
        {
          title: 'No technician is overloaded while another sits idle',
          text: 'Workload shows next to every name, so you can rebalance before the day starts rather than after complaints.',
          chip: { icon: Gauge, label: 'Workload', value: 'Arun 94% · Karthik 46%', tone: 'heat' },
        },
        {
          title: 'The right skill reaches the right job',
          text: 'Skills are on the profile, so a VRF fault goes to the VRF engineer and an installation goes to the installation lead.',
          chip: { icon: BadgeCheck, label: 'Skill match', value: 'VRF → Karthik Raman', tone: 'iris' },
        },
        {
          title: 'Dispatch decisions take seconds',
          text: 'Team management software that answers “who is free now?” on one screen, without calling around.',
          chip: { icon: UserCheck, label: 'Available now', value: '2 technicians', tone: 'mint' },
        },
        {
          title: 'Reviews rely on records',
          text: 'Jobs completed and workload per person give you facts for appraisals and incentive conversations.',
          chip: { icon: TrendingUp, label: 'Jobs this week', value: '112 completed', tone: 'brand' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use technician scheduling',
      intro: ['Skills and areas matter in AC work, and scheduling in ', ' reflects both.'],
      scenarios: [
        {
          icon: AirVent,
          title: 'Skills are not interchangeable',
          text: 'A split AC technician, a VRF engineer and a chiller specialist do different work. Matching the job to the skill prevents repeat visits.',
        },
        {
          icon: Users,
          title: 'Installation crews',
          text: 'Pair an installation lead with a helper for the day’s installs, and see both on the same schedule.',
        },
        {
          icon: Sun,
          title: 'Peak season',
          text: 'In summer, check which technician has room for one more breakdown call before you promise a customer an arrival time.',
        },
        {
          icon: CalendarClock,
          title: 'Contract rounds by area',
          text: 'Group AMC (annual maintenance contract) visits by area, such as Adyar or OMR, so a technician covers a cluster instead of crossing the city.',
        },
      ],
    },
    related: [
      { slug: 'work-order-management-software', line: 'Assign the right technician to each job and track it to completion.', anchor: 'See work order management software' },
      { slug: 'field-service-app', line: 'Scheduled jobs reach each technician’s phone.', anchor: 'See the field service app' },
      { slug: 'reporting-software', line: 'Compare technician productivity and workload in reports.', anchor: 'Explore reporting software' },
    ],
    solutions: {
      intro: 'Team scheduling also helps other businesses:',
      links: [
        { slug: 'service-business-management-software', anchor: 'service scheduling software' },
        { slug: 'construction-management-software', anchor: 'contractor management software' },
      ],
    },
    faqs: [
      {
        q: 'What is employee management software for field teams?',
        a: 'It keeps technician profiles, skills, schedules, workload and performance in one place. In FSMFlow it is connected to jobs, so scheduling and workload reflect the real work.',
      },
      {
        q: 'Is it the same as technician scheduling software?',
        a: 'Scheduling is a core part of it. You can also keep skills and profiles, see availability and leave, and review workload and jobs completed per technician.',
      },
      {
        q: 'Can I see which technicians are available right now?',
        a: 'Yes. The schedule and the live team view show who is on a job, who is travelling and who is free, so you can dispatch quickly.',
      },
      {
        q: 'Does it handle payroll or attendance?',
        a: 'FSMFlow focuses on field operations: profiles, skills, schedules, workload and performance. For payroll, keep using the system you already have.',
      },
    ],
    cta: {
      title: 'Put the right technician on every job',
      text: 'See the schedule grid, skills and workload views in a short demo using a team like yours.',
    },
  },

  /* ------------------------------------------------------------------ */
  'reporting-software': {
    slug: 'reporting-software',
    eyebrow: 'Reports & dashboards',
    lead: 'Reporting software that turns daily field work into clear dashboards: jobs, revenue, technician productivity, AMC (annual maintenance contract) renewals and pending payments, all built from the work your team already records.',
    bullets: [
      'Jobs, revenue and payments on one dashboard',
      'Technician productivity and workload compared',
      'AMC renewals and pending payments you can act on',
    ],
    capabilities: {
      layout: 'bento',
      tone: 'white',
      title: 'Reporting software that shows how the business is really doing',
      lead: 'Every job, quotation and payment already lives in FSMFlow, so the reports build themselves from the work.',
      items: [
        {
          icon: LayoutDashboard,
          title: 'Today’s jobs and technicians at a glance',
          text: 'Field service reporting software that opens on the daily picture: jobs done, jobs open, who is on site and what needs attention first.',
          mini: 'rpt-today',
          span: 4,
        },
        {
          icon: TrendingUp,
          title: 'Revenue trends you can trust',
          text: 'Service reporting software with revenue by day, week or month, so you see momentum and not just totals.',
          chip: { label: 'Day · week · month', tone: 'brand' },
          span: 2,
        },
        {
          icon: Users,
          title: 'Technician productivity',
          text: 'Compare jobs completed per technician, so you know who is carrying the load.',
          mini: 'rpt-techs',
          span: 2,
        },
        {
          icon: IndianRupee,
          title: 'Pending payments, by age',
          text: 'Business reporting software that groups unpaid invoices by how long they have been pending, so collections start with the oldest first.',
          mini: 'rpt-aging',
          span: 4,
        },
        {
          icon: CalendarClock,
          title: 'AMC renewals before they lapse',
          text: 'See which contracts are due for renewal in the next 30 days, with the customer, units and value.',
          mini: 'rpt-renewals',
          span: 3,
        },
        {
          icon: ChartPie,
          title: 'Jobs by type, to plan the team',
          text: 'Compare maintenance, repair and installation work to decide where to add technicians and stock.',
          mini: 'rpt-types',
          span: 3,
        },
      ],
    },
    benefits: {
      layout: 'rows',
      title: 'Decisions based on today’s numbers',
      items: [
        {
          title: 'You see problems while they can still be fixed',
          text: 'Overdue and at-risk jobs are visible on the dashboard, not discovered when a customer complains.',
          chip: { icon: Timer, label: 'Overdue', value: '2 jobs', tone: 'coral' },
        },
        {
          title: 'Collections get chased on time',
          text: 'Pending payments are listed by age and customer, so follow-up calls start with the oldest and largest.',
          chip: { icon: CircleDollarSign, label: 'Pending', value: '₹1.82L · 4 invoices', tone: 'heat' },
        },
        {
          title: 'Renewals stop being a surprise',
          text: 'A list of AMC renewals due in the coming weeks turns recurring revenue into a task list.',
          chip: { icon: RefreshCcw, label: 'Renewals due', value: '7 in 30 days', tone: 'brand' },
        },
        {
          title: 'You know who is productive and who is stretched',
          text: 'Jobs per technician sit next to workload, so recognition and rebalancing are both based on facts.',
          chip: { icon: Users, label: 'Most jobs today', value: 'Arun Selvam · 5', tone: 'iris' },
        },
      ],
    },
    hvac: {
      title: 'How HVAC teams use reports',
      intro: ['Seasonal demand makes numbers matter in ', ', and reports show it as it builds.'],
      scenarios: [
        {
          icon: Sun,
          title: 'Seasonal demand',
          text: 'Compare jobs by type through the summer, to plan technicians for repair spikes and installation peaks.',
        },
        {
          icon: CalendarClock,
          title: 'The health of your AMC book',
          text: 'Track renewals due, visits completed and contract revenue, so you know how much predictable income you have.',
        },
        {
          icon: Users,
          title: 'Technician comparison',
          text: 'See jobs completed per technician, keeping installation days and quick service calls in context.',
        },
        {
          icon: IndianRupee,
          title: 'Repair versus installation revenue',
          text: 'Understand which service line brings in the most, then decide where to invest time and stock.',
        },
      ],
    },
    related: [
      { slug: 'work-order-management-software', line: 'Reports are built from the jobs your team completes.', anchor: 'See work order management software' },
      { slug: 'employee-management-software', line: 'Pair productivity reports with schedules and workload.', anchor: 'Explore employee management software' },
      { slug: 'quotation-software', line: 'Quotations, invoices and payments feed the revenue reports.', anchor: 'Explore quotation software' },
    ],
    solutions: {
      intro: 'Reports work across service businesses:',
      links: [
        { slug: 'service-business-management-software', anchor: 'service business management software' },
        { slug: 'construction-management-software', anchor: 'construction management software' },
      ],
    },
    faqs: [
      {
        q: 'What is field service reporting software?',
        a: 'It turns the daily records of a field team, such as jobs, quotations, payments and contracts, into dashboards that show how the business is doing and where to act.',
      },
      {
        q: 'What reports does FSMFlow include?',
        a: 'Dashboards for jobs, revenue, technician productivity, jobs by type, AMC renewals due and pending payments.',
      },
      {
        q: 'Do I need to build reports by hand?',
        a: 'No. Reports use the jobs, quotations, invoices and AMC records your team already enters, so there is nothing to compile.',
      },
      {
        q: 'Can I look at a specific period?',
        a: 'Yes. You can switch the view between periods such as today, this week and this month to compare performance.',
      },
    ],
    cta: {
      title: 'See your whole service business on one screen',
      text: 'Walk through the dashboards, renewals and payment views in a short demo with sample data from a business like yours.',
    },
  },
}
