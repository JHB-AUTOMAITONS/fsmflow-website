import {
  ArrowDown,
  BellOff,
  CalendarX2,
  ClipboardX,
  FileClock,
  PackageSearch,
  PhoneMissed,
  UserRoundX,
  WalletCards,
  type LucideIcon,
} from 'lucide-react'
import { TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Problem {
  icon: LucideIcon
  problem: string
  pain: string
  solution: string
  link: { href: string; label: string }
}

const PROBLEMS: Problem[] = [
  {
    icon: PhoneMissed,
    problem: 'Missed service requests',
    pain: 'Calls and messages scatter across phones and chats, and some never become a job.',
    solution: 'Every call, walk-in and enquiry is logged as a service request with an owner and a due time, linked to the customer and the unit.',
    link: { href: '/features/work-order-management-software', label: 'work order management software' },
  },
  {
    icon: CalendarX2,
    problem: 'Technician scheduling problems',
    pain: 'Double bookings, long travel and one dispatcher holding the whole day in their head.',
    solution: 'See each technician’s skills, location and workload, then assign in a few taps. The schedule updates for the whole team.',
    link: { href: '/features/employee-management-software', label: 'technician scheduling software' },
  },
  {
    icon: ClipboardX,
    problem: 'Manual job tracking',
    pain: 'Paper job cards and “where are you?” calls just to know a job’s status.',
    solution: 'Jobs move from Assigned to En route, In progress and Completed on the technician’s phone, so status is visible without a call.',
    link: { href: '/features/field-service-app', label: 'field service app' },
  },
  {
    icon: UserRoundX,
    problem: 'Lost customer information',
    pain: 'Which AC is installed where, when it was last serviced and what was replaced lives in someone’s memory.',
    solution: 'Customers, sites, installed units, service history and notes live in one record every technician can open.',
    link: { href: '/features/asset-management-software', label: 'asset management software' },
  },
  {
    icon: BellOff,
    problem: 'AMC renewal issues',
    pain: 'Contracts expire unnoticed and scheduled visits get skipped, which means lost repeat revenue.',
    solution: 'AMC contracts schedule their own visits and send renewal reminders before the end date.',
    link: { href: '/features/warranty-management-software', label: 'AMC management software' },
  },
  {
    icon: PackageSearch,
    problem: 'Spare-parts confusion',
    pain: 'Nobody knows what is on which van, so jobs wait for a capacitor or a gas cylinder.',
    solution: 'Stock is tracked across warehouse and vans, parts are linked to jobs, and low-stock alerts arrive before you run out.',
    link: { href: '/features/inventory-management-software', label: 'spare parts inventory software' },
  },
  {
    icon: FileClock,
    problem: 'Delayed quotations',
    pain: 'Quotes take a day or two to write, and by then the customer has called someone else.',
    solution: 'Build a quote from your own price list in minutes, send it for approval and turn it into a job when it is accepted.',
    link: { href: '/features/quotation-software', label: 'quotation software' },
  },
  {
    icon: WalletCards,
    problem: 'Payment follow-up',
    pain: 'Pending payments are chased from memory, and old dues are only noticed at month end.',
    solution: 'Invoices come straight from completed jobs, and pending payments are visible by customer and age.',
    link: { href: '/features/quotation-software', label: 'quotation and invoice software' },
  },
]

/** Eight HVAC problems → how FSMFlow answers each one. */
export function HvacProblems() {
  return (
    <section id="problems" aria-labelledby="hvac-problems-heading" className="relative bg-mist py-20 md:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="hvac-problems-heading"
            eyebrow="The daily grind"
            title="HVAC service software that fixes the daily problems"
            lead="Most HVAC and AC service companies lose time and money in the same eight places. Here is what goes wrong, and how FSMFlow handles it."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:gap-6">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.problem} delay={(i % 2) * 90}>
                <article className="group/card relative h-full overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-ink-900/[0.07] transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex gap-4 bg-ink-50/80 p-5 md:p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-coral-50 text-coral-600 ring-1 ring-coral-100" aria-hidden="true">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink-900">{p.problem}</h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-600">{p.pain}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <span
                      className="absolute -top-4 left-[3.25rem] flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-brand-600 shadow-pop ring-1 ring-ink-900/[0.08] transition-transform duration-500 ease-premium group-hover/card:translate-y-0.5"
                      aria-hidden="true"
                    >
                      <ArrowDown className="size-4" strokeWidth={2} />
                    </span>
                    <div className="p-5 pt-7 md:p-6 md:pt-8">
                      <p className="eyebrow-mono text-brand-600">With FSMFlow</p>
                      <p className="mt-2.5 text-[1rem] leading-relaxed text-ink-800">{p.solution}</p>
                      <div className="mt-4">
                        <TextLink href={p.link.href}>Explore {p.link.label}</TextLink>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
