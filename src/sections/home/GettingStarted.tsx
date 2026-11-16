import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const STEPS = [
  {
    title: 'Set up your business',
    text: 'Start with a demo built around your trade. Decide which modules you need first; the rest can be switched on as the team grows.',
  },
  {
    title: 'Add your technicians and staff',
    text: 'Create profiles with skills and availability for technicians, and add the office team who will dispatch and invoice.',
  },
  {
    title: 'Add customers and equipment',
    text: 'Enter customers, sites and installed units with model, serial number, warranty and AMC cover.',
  },
  {
    title: 'Set up your job workflow',
    text: 'Define job types and service checklists, load your price list for quotations and add your spare parts list.',
  },
  {
    title: 'Run jobs day to day',
    text: 'Create jobs, assign technicians and follow each one from assigned to completed, with parts, photos and sign-off on the job.',
  },
  {
    title: 'Monitor and improve',
    text: 'Use the dashboard and reports for open jobs, pending payments, technician workload, stock and AMC renewals.',
  },
]

export function GettingStarted() {
  return (
    <section id="getting-started" aria-labelledby="getting-started-heading" className="relative bg-mist py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="getting-started-heading"
              eyebrow="Getting started"
              title="From first demo to your first live job"
              lead="Most teams already have their technicians, customers and equipment in spreadsheets or WhatsApp. Setup is mostly bringing that information into one place and agreeing how a job should flow."
            />
            <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-ink-600">
              How long setup takes and how much guided help is included depend on your team and plan, so we confirm both in the demo.
            </p>
            <div className="mt-8">
              <ButtonLink href="/demo">Book a Demo</ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ol className="space-y-5">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-900/[0.06] md:p-6">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-50 font-mono text-[13px] font-semibold text-brand-700 ring-1 ring-brand-100"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-900">{s.title}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-600">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
