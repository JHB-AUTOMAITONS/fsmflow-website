import {
  BadgeIndianRupee,
  CalendarRange,
  ClipboardCheck,
  ClipboardList,
  FileText,
  Package,
  PhoneIncoming,
  Receipt,
  Route,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { Bezel } from '@/components/ui/Bezel'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Stage {
  icon: LucideIcon
  title: string
  text: string
  carries: string
}

/**
 * One job followed end to end: Greenleaf Offices, 2 × 1.5 ton split AC installation
 * (the same JOB-1031 used in the product mockups). Every statement here is already
 * documented on the FSMFlow feature pages.
 */
const STAGES: Stage[] = [
  {
    icon: PhoneIncoming,
    title: 'Customer enquiry',
    text: 'Greenleaf Offices calls about two 1.5 ton split ACs. The enquiry is logged with the contact, site and requirement instead of a note on someone’s phone.',
    carries: 'Contact, site, requirement',
  },
  {
    icon: Target,
    title: 'Lead management',
    text: 'The lead gets a source, a stage and a next follow-up date. Overdue follow-ups show up in the pipeline, so the quotation is chased while the customer is still deciding.',
    carries: 'Source, stage, follow-up',
  },
  {
    icon: FileText,
    title: 'Quotation',
    text: 'The quotation is raised straight from the lead using your price list, with units, piping and labour as separate lines. Revisions and approval are tracked on the same record.',
    carries: 'Line items, approval',
  },
  {
    icon: ClipboardList,
    title: 'Work order',
    text: 'Once the customer approves, the quotation becomes a job. The site, scope and amount carry over, and the job gets a priority, a time window and the installation checklist.',
    carries: 'Scope, priority, checklist',
  },
  {
    icon: CalendarRange,
    title: 'Technician scheduling',
    text: 'The office sees who is free, who has the right skills and how loaded each person is, then picks the installation lead for the day.',
    carries: 'Skills, availability, workload',
  },
  {
    icon: Route,
    title: 'Dispatch',
    text: 'The job appears on the technician’s phone. As the status moves from assigned to en route to in progress, the job screen in the office changes with it.',
    carries: 'Job details, live status',
  },
  {
    icon: ClipboardCheck,
    title: 'Field service',
    text: 'The technician works through the checklist, adds before-and-after photos and notes, and takes the customer’s sign-off on the phone. The service report builds itself from that record.',
    carries: 'Checklist, photos, sign-off',
  },
  {
    icon: Package,
    title: 'Parts usage',
    text: 'Copper pipe, brackets and other parts used are recorded on the job and deducted from van or warehouse stock. The new units are recorded as assets with model, serial number and install date.',
    carries: 'Parts, stock, asset record',
  },
  {
    icon: Receipt,
    title: 'Invoice',
    text: 'The invoice comes from the approved quotation, so the scope and amount match what the customer agreed to. No re-typing between the job and the bill.',
    carries: 'Approved scope and amount',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Payment',
    text: 'Advances and part-payments are recorded against the invoice, and pending payments are listed by customer and due date. The installed units then move into warranty and AMC tracking.',
    carries: 'Balance, due date, AMC',
  },
]

const AUDIENCES = [
  {
    title: 'The office team',
    points: ['One record from enquiry to payment', 'Job status without phone calls', 'Pending payments by customer'],
  },
  {
    title: 'Field technicians',
    points: ['Assigned jobs with customer and location', 'Checklist, photos and parts on the phone', 'Sign-off and report finished on site'],
  },
  {
    title: 'Customers',
    points: ['A clear quotation they approve', 'A service report with checklist, parts and photos', 'An invoice that matches what they agreed'],
  },
]

/**
 * The educational "how it connects" section. The direct definition stays in the
 * FAQ ("What is field service management software?"); this section only explains
 * how the handoffs between steps work, so the two never repeat each other.
 */
export function OperationsLifecycle() {
  return (
    <section id="how-it-works" aria-labelledby="lifecycle-heading" className="relative bg-white py-20 md:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="lifecycle-heading"
            eyebrow="How it works"
            title="How Field Service Management Software Transforms Service Operations"
            lead="Service work rarely fails at one big step. It slips at the handoffs: between the enquiry and the quote, the quote and the job, the job and the invoice. FSM software like FSMFlow passes each step’s details to the next, so nobody retypes or chases anything. Here is one job, followed from the first call to the last payment and the next AMC visit."
          />
        </Reveal>

        <ol className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} as="li" delay={(i % 2) * 80}>
              <Bezel interactive className="h-full" coreClassName="flex h-full gap-4 p-5 md:p-6">
                <div className="flex flex-col items-center gap-2">
                  <IconTile icon={s.icon} tone={i % 3 === 0 ? 'brand' : i % 3 === 1 ? 'aqua' : 'mint'} />
                  <span className="font-mono text-[11px] font-semibold text-ink-400" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink-900">{s.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-600">{s.text}</p>
                  <p className="mt-3 text-[0.8125rem] font-medium text-brand-700">
                    <span className="text-ink-500">Carried forward: </span>
                    {s.carries}
                  </p>
                </div>
              </Bezel>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 md:mt-20">
          <h3 className="text-h3 font-semibold text-ink-900">One record, three views of the same job</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="rounded-3xl bg-mist p-6 ring-1 ring-ink-900/[0.05]">
                <h4 className="text-[1.0625rem] font-semibold text-ink-900">{a.title}</h4>
                <ul className="mt-3 space-y-2 text-[0.9375rem] leading-relaxed text-ink-600">
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[0.8125rem] text-ink-500">Sample job and customer shown for illustration.</p>
        </Reveal>
      </Container>
    </section>
  )
}
