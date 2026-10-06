import { Camera, Check, ClipboardCheck, MapPin, Package, Phone, Timer } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { JOBS } from '@/data/sample'
import { cn } from '@/lib/cn'
import { FloatCard, Mono, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

const JOB = JOBS[1] // JOB-1027 · AC Repair · Metro Café, T. Nagar · Arun Selvam

const LIFECYCLE = [
  { label: 'Created', meta: '08:10 · by Priya', state: 'done' },
  { label: 'Assigned', meta: '08:25 · Arun Selvam', state: 'done' },
  { label: 'En route', meta: '10:50 · 2.4 km', state: 'done' },
  { label: 'In progress', meta: 'Started 11:32', state: 'current' },
  { label: 'Completed', meta: 'Checklist + report', state: 'todo' },
  { label: 'Invoiced', meta: 'From the quotation', state: 'todo' },
] as const

const CHECKLIST: [string, boolean][] = [
  ['Check cooling and airflow', true],
  ['Leak test on joints and flare nuts', true],
  ['Measure refrigerant pressure', true],
  ['Top up R32 and re-test', false],
  ['Upload before / after photos', false],
  ['Customer sign-off', false],
]

/** Work order detail: lifecycle timeline, SLA and priority, assigned technician, checklist and parts. */
export function WorkOrderVisual({ className, compact }: FeatureVisualProps) {
  const steps = compact ? LIFECYCLE.slice(1, 5) : LIFECYCLE
  const done = CHECKLIST.filter(([, d]) => d).length
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title={`Work order ${JOB.id}`}
        subtitle={`${JOB.customer} · ${JOB.area}`}
        icon={ClipboardCheck}
        actions={<StatusPill status="in-progress" />}
        label="FSMFlow work order for an AC repair showing high priority, an SLA countdown, a lifecycle timeline from created to invoiced, the assigned technician, a service checklist, parts used and photos"
      >
        <div className="p-3 @md:p-4">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
            <div className="min-w-0">
              <Mono>Work order · {JOB.id}</Mono>
              <p className="mt-1 font-display text-[1.15rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">{JOB.type}</p>
              <p className="mt-0.5 text-[11.5px] text-ink-500">{JOB.detail}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <Tag tone="coral">High priority</Tag>
              <Tag tone="heat">
                <Timer className="size-3" aria-hidden="true" /> SLA · 2h 10m left
              </Tag>
            </div>
          </div>

          <div className={cn('mt-3.5 grid gap-3', !compact && '@xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]')}>
            <div className="rounded-2xl bg-mist p-3.5 ring-1 ring-ink-900/[0.04]">
              <p className="text-[11px] font-semibold text-ink-700">Job lifecycle</p>
              <ol className="mt-3">
                {steps.map((s, i) => (
                  <li key={s.label} className="relative flex gap-2.5 pb-3 last:pb-0">
                    {i < steps.length - 1 && (
                      <span className={cn('absolute top-5 bottom-0 left-[9px] w-px', s.state === 'done' ? 'bg-brand-300' : 'bg-ink-900/10')} aria-hidden="true" />
                    )}
                    <span
                      className={cn(
                        'relative flex size-[19px] shrink-0 items-center justify-center rounded-full',
                        s.state === 'done' && 'bg-brand-500 text-white',
                        s.state === 'current' && 'bg-brand-gradient text-white shadow-cta',
                        s.state === 'todo' && 'bg-white text-ink-300 ring-1 ring-ink-900/10',
                      )}
                    >
                      {s.state === 'current' && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />}
                      {s.state === 'todo' ? <span className="size-1.5 rounded-full bg-current" /> : s.state === 'done' ? <Check className="size-3" strokeWidth={3} aria-hidden="true" /> : <span className="size-1.5 rounded-full bg-white" />}
                    </span>
                    <div className="flex min-w-0 flex-1 items-baseline justify-between gap-2">
                      <p className={cn('text-[12px] leading-tight font-semibold', s.state === 'todo' ? 'text-ink-500' : 'text-ink-900')}>{s.label}</p>
                      <p className="truncate font-mono text-[10px] text-ink-500">{s.meta}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {!compact && (
              <div className="min-w-0 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.08]">
                  <Avatar initials="AS" tone="aqua" size="md" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] leading-tight font-semibold text-ink-900">Arun Selvam</p>
                    <p className="mt-0.5 flex items-center gap-1 truncate text-[11px] text-ink-500">
                      <MapPin className="size-3 shrink-0 text-ink-500" aria-hidden="true" /> T. Nagar · AC technician
                    </p>
                  </div>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-50 text-mint-600">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.08]">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold text-ink-700">Service checklist</p>
                    <span className="font-mono text-[10px] text-ink-500">
                      {done} / {CHECKLIST.length}
                    </span>
                  </div>
                  <Meter value={(done / CHECKLIST.length) * 100} tone="brand" className="mt-2" />
                  <ul className="mt-2.5 space-y-1.5">
                    {CHECKLIST.slice(0, 5).map(([label, isDone]) => (
                      <li key={label} className="flex items-center gap-2 text-[11.5px] text-ink-700">
                        <span
                          className={cn(
                            'flex size-4 shrink-0 items-center justify-center rounded-md ring-1 ring-inset',
                            isDone ? 'bg-mint-500 text-white ring-mint-500' : 'bg-white text-transparent ring-ink-200',
                          )}
                        >
                          <Check className="size-2.5" strokeWidth={3.5} aria-hidden="true" />
                        </span>
                        <span className={cn('truncate', isDone && 'text-ink-500')}>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-brand-50/70 px-2.5 py-2 ring-1 ring-brand-100">
                    <p className="flex items-center gap-1 text-[10.5px] font-semibold text-brand-800">
                      <Package className="size-3" aria-hidden="true" /> Parts used
                    </p>
                    <p className="mt-0.5 text-[11px] text-ink-600">R32 gas · 300 g</p>
                  </div>
                  <div className="rounded-xl bg-aqua-50 px-2.5 py-2 ring-1 ring-aqua-100">
                    <p className="flex items-center gap-1 text-[10.5px] font-semibold text-aqua-600">
                      <Camera className="size-3" aria-hidden="true" /> Photos
                    </p>
                    <p className="mt-0.5 text-[11px] text-ink-600">2 attached</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="-bottom-9 -left-5 w-[222px]" delay={800}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600 ring-1 ring-aqua-100">
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] leading-tight font-semibold text-ink-900">Arun arrived on site</p>
              <p className="mt-0.5 font-mono text-[10.5px] text-ink-500">11:32 · status updated</p>
            </div>
          </div>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
