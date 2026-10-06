import { Check, FileSpreadsheet, MessageCircle, Notebook, PhoneCall, ScrollText, X } from 'lucide-react'
import { StatusPill } from '@/components/product/StatusPill'
import { Bezel } from '@/components/ui/Bezel'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

const SCATTERED = [
  { icon: MessageCircle, label: 'WhatsApp groups', rot: '-rotate-2' },
  { icon: FileSpreadsheet, label: 'Excel sheets', rot: 'rotate-1' },
  { icon: ScrollText, label: 'Paper job cards', rot: '-rotate-1' },
  { icon: PhoneCall, label: 'Phone calls', rot: 'rotate-2' },
  { icon: Notebook, label: 'Notebooks', rot: '-rotate-2' },
]

const PROBLEMS = ['Job details live in five places', 'AMC renewals depend on someone remembering', 'Payments are chased from memory']
const GAINS = ['One record per customer, unit and job', 'Reminders for visits and renewals', 'Pending payments visible by customer']

export function BeforeAfter() {
  return (
    <section aria-labelledby="flow-heading" className="relative bg-white py-20 md:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="flow-heading"
            eyebrow="Why FSMFlow"
            align="center"
            title="Replace scattered tools with one flow"
            lead="Many service teams run on WhatsApp groups, Excel sheets and paper job cards. It works until the team grows. FSMFlow is service management software that keeps every job, customer and payment connected."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Before */}
          <Reveal variant="left">
            <div className="relative h-full overflow-hidden rounded-[32px] border border-dashed border-ink-300/70 bg-ink-50/70 p-6 md:p-9">
              <p className="eyebrow-mono text-ink-500">Before</p>
              <h3 className="mt-3 text-h3 font-semibold text-ink-800">Work is spread across tools</h3>
              <div className="mt-7 flex flex-wrap gap-3" aria-hidden="true">
                {SCATTERED.map((s) => {
                  const Icon = s.icon
                  return (
                    <span
                      key={s.label}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[0.875rem] font-medium text-ink-600 shadow-card ring-1 ring-ink-900/[0.06] md:origin-center',
                        s.rot,
                      )}
                    >
                      <Icon className="size-4 text-ink-500" strokeWidth={1.7} />
                      {s.label}
                    </span>
                  )
                })}
              </div>
              <ul className="mt-8 space-y-3">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[1rem] text-ink-700">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600" aria-hidden="true">
                      <X className="size-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* After */}
          <Reveal variant="right" delay={100}>
            <Bezel radius="xl" className="h-full" coreClassName="relative h-full overflow-hidden bg-linear-to-br from-white via-white to-brand-50/60 p-6 md:p-9">
              <p className="eyebrow-mono text-brand-600">With FSMFlow</p>
              <h3 className="mt-3 text-h3 font-semibold text-ink-900">One connected record for every job</h3>

              <div className="mt-7 rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink-900/[0.07]" aria-hidden="true">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">JOB-1024 · CUSTOMER #1024</p>
                    <p className="font-display text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink-900">AC Maintenance</p>
                  </div>
                  <StatusPill status="in-progress" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[10.5px] font-semibold">
                  {['Quote', 'Technician', 'Parts', 'Invoice'].map((t, i) => (
                    <div key={t} className="relative">
                      <span
                        className={cn(
                          'mx-auto flex size-7 items-center justify-center rounded-full',
                          i < 2 ? 'bg-mint-500 text-white' : i === 2 ? 'bg-brand-gradient text-white shadow-cta' : 'bg-ink-100 text-ink-500',
                        )}
                      >
                        {i < 2 ? <Check className="size-3.5" strokeWidth={3} /> : <span className="size-1.5 rounded-full bg-current" />}
                      </span>
                      <p className="mt-1.5 text-ink-600">{t}</p>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {GAINS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[1rem] text-ink-700">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-50 text-mint-600" aria-hidden="true">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Bezel>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
