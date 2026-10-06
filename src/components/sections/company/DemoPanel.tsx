import {
  CalendarClock,
  ClipboardList,
  Handshake,
  Package,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { useRef } from 'react'
import { PhoneFrame } from '@/components/product/PhoneFrame'
import { TechJobsScreen } from '@/components/product/TechScreens'
import { Bezel } from '@/components/ui/Bezel'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useCycle } from '@/hooks/useCycle'
import { cn } from '@/lib/cn'
import { INDUSTRIES } from './demoData'

interface Step {
  icon: LucideIcon
  title: string
  text: string
}

const WALKTHROUGHS: Record<string, Step[]> = {
  hvac: [
    { icon: ClipboardList, title: 'A job comes in', text: 'Log a service call or AMC visit with the customer, the unit and the issue.' },
    { icon: UserCheck, title: 'Technician assigned', text: 'See who is free, assign the job and follow its status live.' },
    { icon: Package, title: 'Parts from stock', text: 'Pick spare parts from van or warehouse stock and attach them to the job.' },
    { icon: ReceiptText, title: 'Invoice raised', text: 'Turn the finished job into an invoice and track the payment.' },
    { icon: CalendarClock, title: 'AMC renewal', text: 'Track contract visits and renewal dates so repeat work is not missed.' },
  ],
  cctv: [
    { icon: ClipboardList, title: 'Site survey', text: 'Record camera points, cable runs and what the customer needs.' },
    { icon: ReceiptText, title: 'Quotation', text: 'Build a quotation from the survey and follow it up.' },
    { icon: Wrench, title: 'Installation job', text: 'Assign the install team and track the job on site.' },
    { icon: Package, title: 'Equipment used', text: 'Log cameras, recorders and cables used on each site.' },
    { icon: ShieldCheck, title: 'AMC renewal', text: 'Keep service contracts and renewal dates in one place.' },
  ],
  solar: [
    { icon: Handshake, title: 'Lead and enquiry', text: 'Capture the lead and follow up until the deal is won.' },
    { icon: ClipboardList, title: 'Site survey', text: 'Record roof details and what the customer wants.' },
    { icon: ReceiptText, title: 'Quotation', text: 'Send a clear quotation and track its approval.' },
    { icon: Wrench, title: 'Installation project', text: 'Assign the crew and track progress and materials.' },
    { icon: ShieldCheck, title: 'After-sales service', text: 'Keep warranty and service visits in one customer record.' },
  ],
  construction: [
    { icon: Handshake, title: 'Enquiry to quotation', text: 'Track enquiries and send quotations to clients.' },
    { icon: ClipboardList, title: 'Site tasks', text: 'Create work and assign it to site crews.' },
    { icon: UserCheck, title: 'Crew and workload', text: 'See who is on which site and how busy each person is.' },
    { icon: Package, title: 'Materials', text: 'Track materials issued to each site.' },
    { icon: ReceiptText, title: 'Billing and payments', text: 'Raise invoices and follow up pending payments.' },
  ],
  other: [
    { icon: ClipboardList, title: 'Customer request', text: 'Log a booking or service request with the customer details.' },
    { icon: CalendarClock, title: 'Scheduling', text: 'Assign the right technician and time slot.' },
    { icon: Smartphone, title: 'Job update', text: 'Technicians update status, notes and photos from the phone.' },
    { icon: ReceiptText, title: 'Invoice and payment', text: 'Raise the invoice and follow up on payment.' },
    { icon: ShieldCheck, title: 'Repeat visits and AMC', text: 'Track service contracts and renewals.' },
  ],
}

const INDEXES = [0, 1, 2, 3, 4] as const

/** Window-style card (title bar + body) that stays readable by assistive tech, unlike the decorative ProductWindow. */
function AgendaCard({ industry }: { industry: string }) {
  const known = industry in WALKTHROUGHS
  const key = known ? industry : 'hvac'
  const steps = WALKTHROUGHS[key]
  const label = INDUSTRIES.find((i) => i.value === key)?.label ?? 'HVAC / AC service'
  const ref = useRef<HTMLOListElement>(null)
  const active = useCycle(ref, INDEXES, 2600, 0)

  return (
    <Bezel className="shadow-float" coreClassName="@container overflow-hidden">
      <div className="flex items-center gap-2.5 border-b border-ink-900/[0.06] px-4 py-3">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white" aria-hidden="true">
          <ClipboardList className="size-3.5" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] leading-tight font-semibold text-ink-900">Your demo walkthrough</p>
          <p className="truncate font-mono text-[10px] leading-tight text-ink-500">
            {known ? `Tailored for ${label}` : 'Example: HVAC / AC service'}
          </p>
        </div>
        <span className="eyebrow-mono ml-auto shrink-0 rounded-full bg-ink-50 px-2 py-1 text-[9px] text-ink-500 ring-1 ring-ink-900/[0.06]">Sample data</span>
      </div>

      <ol ref={ref} className="relative px-3 py-3 @md:px-4 @md:py-4">
        <span className="absolute top-8 bottom-8 left-[2.15rem] w-px bg-ink-900/[0.08] @md:left-[2.65rem]" aria-hidden="true" />
        {steps.map((step, i) => {
          const on = i === active
          const Icon = step.icon
          return (
            <li
              key={`${key}-${step.title}`}
              className={cn(
                'relative flex items-start gap-3.5 rounded-2xl px-3 py-3 transition-colors duration-700 ease-premium @md:gap-4',
                on ? 'bg-brand-50/80 ring-1 ring-brand-100' : 'ring-1 ring-transparent',
              )}
            >
              <span
                className={cn(
                  'relative z-10 flex size-9 shrink-0 items-center justify-center rounded-xl transition-[background-color,color,box-shadow] duration-700 ease-premium',
                  on ? 'bg-brand-gradient text-white shadow-cta' : 'bg-white text-brand-600 ring-1 ring-ink-900/[0.08]',
                )}
                aria-hidden="true"
              >
                <Icon className="size-[18px]" strokeWidth={1.7} />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="flex items-center gap-2 text-[0.9375rem] leading-tight font-semibold text-ink-900">
                  <span className="font-mono text-[10px] font-semibold text-ink-500">0{i + 1}</span>
                  {step.title}
                </p>
                <p className="mt-1 text-[0.8125rem] leading-snug text-ink-600">{step.text}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Bezel>
  )
}

/** The technician app, peeking in from the bottom edge of its card. Decorative thumbnail + real text. */
function AppPeek() {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-wash ring-1 ring-ink-900/[0.06]">
      <div className="absolute inset-0 bg-blueprint opacity-60 mask-fade-edges" aria-hidden="true" />
      <div className="relative flex flex-col sm:flex-row sm:items-stretch">
        <div className="p-6 sm:flex-1 sm:py-7 sm:pr-2 sm:pl-7">
          <p className="eyebrow-mono flex items-center gap-2 text-brand-600">
            <Smartphone className="size-3.5" aria-hidden="true" />
            Technician app
          </p>
          <h3 className="mt-3 font-display text-[1.25rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">A live look at the technician app</h3>
          <p className="mt-2.5 text-[0.9375rem] leading-snug text-ink-600">
            See a job from the technician’s phone: the day’s list, the checklist, parts used, photos and customer sign-off.
          </p>
        </div>
        <div className="relative mx-auto mt-1 h-[190px] w-[180px] shrink-0 overflow-hidden sm:mx-6 sm:mt-6" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[290px] origin-top-left scale-[0.62]">
            <PhoneFrame>
              <TechJobsScreen />
            </PhoneFrame>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-wash to-transparent" />
        </div>
      </div>
    </div>
  )
}

const NEXT_STEPS = [
  { title: 'We read your request', text: 'Our team reads what you share, so the conversation starts with your trade and team size.' },
  { title: 'We get in touch', text: 'We contact you by email or phone to agree a time for your demo.' },
  { title: 'You see FSMFlow in action', text: 'We walk through the flow using your industry and answer your questions.' },
]

function NextSteps() {
  return (
    <div>
      <h3 className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] text-ink-900">What happens next</h3>
      <ol className="mt-5 space-y-5">
        {NEXT_STEPS.map((s, i) => (
          <li key={s.title} className="relative flex gap-4">
            {i < NEXT_STEPS.length - 1 && <span className="absolute top-9 bottom-[-1.25rem] left-[17px] w-px bg-brand-200" aria-hidden="true" />}
            <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-50 font-mono text-[0.8125rem] font-semibold text-brand-700 ring-1 ring-brand-100">
              {i + 1}
            </span>
            <div className="pt-0.5">
              <p className="text-[1rem] leading-tight font-semibold text-ink-900">{s.title}</p>
              <p className="mt-1 text-[0.9375rem] leading-snug text-ink-600">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Right-hand side panel on /demo. `industry` is the form's current choice ('' until chosen). */
export function DemoPanel({ industry }: { industry: string }) {
  return (
    <aside aria-labelledby="demo-panel-heading" className="flex flex-col gap-8">
      <div>
        <Eyebrow>In your demo</Eyebrow>
        <h2 id="demo-panel-heading" className="text-h2 mt-5 font-semibold text-ink-900">
          What you’ll get in your demo
        </h2>
        <p className="text-lead mt-4 max-w-xl text-ink-600">
          A walkthrough built around your trade and shown with sample data, starting with an AC service day.
        </p>
      </div>
      <AgendaCard industry={industry} />
      <AppPeek />
      <NextSteps />
    </aside>
  )
}
