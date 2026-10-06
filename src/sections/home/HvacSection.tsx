import {
  AirVent,
  CalendarClock,
  CalendarRange,
  Clock3,
  History,
  Package,
  RefreshCw,
  Siren,
  Snowflake,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { SplitAc } from '@/components/illustrations/Hvac'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { Tag } from '@/components/product/StatusPill'
import { Bezel } from '@/components/ui/Bezel'
import { TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { HVAC_SOLUTION } from '@/data/solutions'
import { cn } from '@/lib/cn'
import { AnimatedFlow } from '@/sections/hvac/AnimatedFlow'
import { HOME_FLOW } from '@/sections/hvac/flows'

function JobType({
  icon,
  title,
  text,
  children,
  className,
  delay = 0,
  tone = 'brand',
}: {
  icon: LucideIcon
  title: string
  text: string
  children?: ReactNode
  className?: string
  delay?: number
  tone?: 'brand' | 'aqua' | 'iris' | 'heat' | 'mint'
}) {
  return (
    <Reveal delay={delay} className={className}>
      <Bezel interactive className="h-full" coreClassName="flex h-full flex-col p-5 md:p-6">
        <IconTile icon={icon} tone={tone} />
        <h4 className="mt-4 text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink-900">{title}</h4>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{text}</p>
        {children && <div className="mt-auto pt-5">{children}</div>}
      </Bezel>
    </Reveal>
  )
}

const Mini = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('rounded-2xl bg-mist p-3 ring-1 ring-ink-900/[0.05]', className)} aria-hidden="true">
    {children}
  </div>
)

export function HvacSection() {
  return (
    <section id="hvac" aria-labelledby="hvac-heading" className="relative isolate overflow-hidden bg-wash-gradient py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-blueprint opacity-70 mask-fade-edges" aria-hidden="true" />

      <Container size="wide">
        {/* Heading + AC unit whose airflow becomes the workflow line */}
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="aqua">
              <Snowflake className="size-3" aria-hidden="true" /> HVAC &amp; AC service
            </Eyebrow>
            <h2 id="hvac-heading" className="text-h2 mt-5 font-semibold text-ink-900">
              Built for HVAC service teams
            </h2>
            <p className="text-lead mt-5 text-ink-600">
              AC installation, repair, preventive maintenance and AMC (annual maintenance contract) work follow the same path every day. FSMFlow
              turns that path into one connected flow, from the first call to the final payment.
            </p>
            <div className="mt-6">
              <TextLink href={HVAC_SOLUTION.path}>Explore {HVAC_SOLUTION.primaryKeyword}</TextLink>
            </div>
          </Reveal>

          <Reveal variant="scale" delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-x-10 top-6 -z-10 h-40 rounded-full bg-aqua-200/40 blur-3xl" aria-hidden="true" />
            <SplitAc
              className="mx-auto max-w-[400px]"
              title="Illustration of a wall-mounted split AC unit with cool air flowing out into the FSMFlow job workflow"
            />
          </Reveal>
        </div>

        <Reveal className="mt-4 md:mt-2">
          <AnimatedFlow
            stages={HOME_FLOW}
            ariaLabel="HVAC job workflow stages: customer request, job assignment, technician, service, parts, invoice and payment"
          />
        </Reveal>

        {/* Job types */}
        <div className="mt-20 md:mt-28">
          <Reveal className="max-w-2xl">
            <h3 className="text-h3 font-semibold text-ink-900">Every kind of AC job, handled</h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-600">
              Installation, repair and maintenance each get their own checklist, parts and history, so a technician never starts from zero.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-6 lg:grid-cols-12">
            <JobType
              className="md:col-span-3 lg:col-span-4"
              icon={AirVent}
              title="AC installation"
              text="Quote, schedule and commission split, cassette and VRF installs with a checklist and a handover record."
            >
              <Mini>
                <ul className="space-y-1.5 text-[12px] text-ink-700">
                  {['Site survey done', 'Indoor & outdoor unit fixed', 'Pipe test & commissioning'].map((t, i) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className={cn('size-3.5 rounded-full ring-1 ring-inset', i < 2 ? 'bg-mint-500 ring-mint-500' : 'bg-white ring-ink-200')} />
                      <span className={cn(i < 2 && 'text-ink-500')}>{t}</span>
                    </li>
                  ))}
                </ul>
              </Mini>
            </JobType>

            <JobType
              className="md:col-span-3 lg:col-span-4"
              delay={80}
              icon={Wrench}
              title="AC repair"
              tone="iris"
              text="Log the fault, send the nearest technician and record the fix and parts used against the unit."
            >
              <Mini className="flex items-center gap-2 text-[11.5px] font-semibold">
                <Tag tone="coral">Not cooling</Tag>
                <span className="text-ink-300" aria-hidden="true">→</span>
                <Tag tone="heat">Gas leak found</Tag>
                <span className="text-ink-300" aria-hidden="true">→</span>
                <Tag tone="mint">Fixed</Tag>
              </Mini>
            </JobType>

            <Reveal delay={120} className="md:col-span-6 lg:col-span-4 lg:row-span-2">
              <Bezel className="h-full" coreClassName="relative flex h-full flex-col overflow-hidden bg-linear-to-b from-brand-50/70 via-white to-aqua-50/50 p-5 md:p-6">
                <p className="eyebrow-mono text-brand-600">Every unit has a record</p>
                <h4 className="mt-3 text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink-900">Model, serial, warranty and AMC on one screen</h4>
                <div className="relative mt-6 flex flex-1 flex-col justify-center">
                  <SplitAc title="Split AC indoor unit illustration with airflow" className="mx-auto max-w-[330px]" />
                </div>
                <dl className="mt-4 rounded-2xl bg-white p-3.5 text-[12px] shadow-card ring-1 ring-ink-900/[0.06]" aria-hidden="true">
                  {[
                    ['Unit', 'Split AC · 1.5 ton inverter'],
                    ['Location', 'Sharma Residency · Living room'],
                    ['Installed', 'Mar 2023'],
                    ['Warranty', 'Till Dec 2026'],
                    ['AMC', '3 of 4 visits done'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-ink-900/[0.05] py-1.5 last:border-0">
                      <dt className="text-ink-500">{k}</dt>
                      <dd className="text-right font-medium text-ink-800">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Bezel>
            </Reveal>

            <JobType
              className="md:col-span-3 lg:col-span-4"
              delay={40}
              icon={CalendarClock}
              title="Preventive maintenance"
              tone="aqua"
              text="Recurring service plans create jobs on schedule, so units get serviced before they fail."
            >
              <Mini>
                <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px] font-semibold">
                  {['Jan', 'Apr', 'Jul', 'Oct'].map((m, i) => (
                    <span key={m} className={cn('rounded-lg py-1.5', i === 3 ? 'bg-brand-gradient text-white shadow-cta' : i < 3 ? 'bg-mint-50 text-mint-600' : 'bg-white text-ink-500')}>
                      {m}
                    </span>
                  ))}
                </div>
              </Mini>
            </JobType>

            <JobType
              className="md:col-span-3 lg:col-span-4"
              delay={120}
              icon={RefreshCw}
              title="AMC management"
              tone="mint"
              text="Contracts with units covered, visit schedules and renewal reminders, so repeat revenue is never missed."
            >
              <Mini>
                <div className="flex items-center justify-between text-[11px] font-semibold text-ink-700">
                  <span>Orchid Clinic · 6 units</span>
                  <span className="font-mono text-ink-500">3 / 4 visits</span>
                </div>
                <Meter value={75} tone="mint" className="mt-2" />
                <p className="mt-2 text-[11px] font-medium text-heat-600">Renews in 12 days</p>
              </Mini>
            </JobType>

            <JobType
              className="md:col-span-3 lg:col-span-3"
              icon={Siren}
              title="Breakdown service"
              tone="heat"
              text="Urgent calls get a priority flag and the nearest available technician."
            >
              <Mini className="flex items-center justify-between">
                <Tag tone="coral">High priority</Tag>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-ink-700">
                  <Clock3 className="size-3 text-ink-500" aria-hidden="true" /> 00:38
                </span>
              </Mini>
            </JobType>

            <JobType
              className="md:col-span-3 lg:col-span-3"
              delay={60}
              icon={CalendarRange}
              title="Technician scheduling"
              tone="brand"
              text="A day board of who is where, with workload visible at a glance."
            >
              <Mini className="space-y-1.5">
                {[
                  ['RK', 'brand', 'w-[78%]'],
                  ['AS', 'aqua', 'w-[56%]'],
                  ['IK', 'iris', 'w-[34%]'],
                ].map(([i, t, w]) => (
                  <div key={i} className="flex items-center gap-2">
                    <Avatar initials={i} tone={t as 'brand' | 'aqua' | 'iris'} size="xs" />
                    <span className="h-2 flex-1 rounded-full bg-white">
                      <span className={cn('block h-full rounded-full bg-brand-200', w)} />
                    </span>
                  </div>
                ))}
              </Mini>
            </JobType>

            <JobType
              className="md:col-span-3 lg:col-span-3"
              delay={120}
              icon={Package}
              title="Spare parts"
              tone="iris"
              text="Know what is on each van and what to reorder before a job is lost."
            >
              <Mini className="space-y-2">
                {[
                  ['Capacitor 35 µF', 20, 'coral'],
                  ['R32 gas', 70, 'mint'],
                ].map(([n, v, t]) => (
                  <div key={String(n)}>
                    <div className="flex justify-between text-[10.5px] font-medium text-ink-600">
                      <span>{n}</span>
                      <span className={cn('font-mono', t === 'coral' ? 'text-coral-600' : 'text-ink-500')}>{t === 'coral' ? 'Low' : 'OK'}</span>
                    </div>
                    <Meter value={v as number} tone={t as 'coral' | 'mint'} className="mt-1" />
                  </div>
                ))}
              </Mini>
            </JobType>

            <JobType
              className="md:col-span-3 lg:col-span-3"
              delay={180}
              icon={History}
              title="Customer history"
              tone="aqua"
              text="Every unit, visit, invoice and note in one customer record."
            >
              <Mini>
                <ol className="relative space-y-2 border-l border-ink-900/10 pl-3 text-[11px] text-ink-600">
                  {['04 Oct · Maintenance', '12 Jul · Repair', '05 Apr · AMC visit'].map((t) => (
                    <li key={t} className="relative">
                      <span className="absolute top-1 -left-[17px] size-2 rounded-full bg-brand-500 ring-2 ring-mist" />
                      {t}
                    </li>
                  ))}
                </ol>
              </Mini>
            </JobType>
          </div>
        </div>
      </Container>
    </section>
  )
}
