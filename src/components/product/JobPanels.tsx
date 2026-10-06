import { Camera, Check, ClipboardList, MapPin, Phone, Wrench } from 'lucide-react'
import { Meter } from '@/components/product/Charts'
import { Avatar } from '@/components/product/Avatar'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { JOB_STEPS, type JobStatus } from '@/data/sample'
import { cn } from '@/lib/cn'

const ORDER: JobStatus[] = ['assigned', 'en-route', 'in-progress', 'completed']

/** Assigned → En route → In progress → Completed, with the current step highlighted. */
export function JobStepper({ current, className }: { current: JobStatus; className?: string }) {
  const idx = ORDER.indexOf(current)
  return (
    <ol className={cn('relative grid grid-cols-4', className)} aria-hidden="true">
      <span className="absolute top-[11px] right-[12.5%] left-[12.5%] h-[2px] rounded-full bg-ink-900/[0.08]" />
      <span
        className="absolute top-[11px] left-[12.5%] h-[2px] rounded-full bg-brand-gradient transition-[width] duration-700 ease-premium"
        style={{ width: `${(idx / (ORDER.length - 1)) * 75}%` }}
      />
      {JOB_STEPS.map((step, i) => {
        const done = i < idx
        const active = i === idx
        return (
          <li key={step.key} className="relative flex flex-col items-center gap-1.5 text-center">
            <span
              className={cn(
                'relative flex size-[22px] items-center justify-center rounded-full ring-2 ring-white transition-colors duration-500',
                done && 'bg-brand-500 text-white',
                active && 'bg-brand-gradient text-white shadow-cta',
                !done && !active && 'bg-ink-100 text-ink-500',
              )}
            >
              {active && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />}
              {done ? <Check className="size-3" strokeWidth={3} /> : <span className="size-1.5 rounded-full bg-current" />}
            </span>
            <span className={cn('text-[9.5px] leading-tight font-semibold @sm:text-[10px]', active ? 'text-ink-900' : 'text-ink-500')}>{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}

/** Job card: "AC Maintenance — Customer #1024" with live status steps. */
export function JobCardPanel({
  className,
  status = 'in-progress',
  compact,
}: {
  className?: string
  status?: JobStatus
  compact?: boolean
}) {
  return (
    <div className={cn('flex flex-col gap-4 p-4 @md:p-5', className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">JOB-1024</p>
          <p className="mt-1 font-display text-lg leading-tight font-semibold tracking-[-0.02em] text-ink-900">AC Maintenance</p>
          <p className="mt-0.5 text-[12px] text-ink-500">Customer #1024 · Sharma Residency</p>
        </div>
        <StatusPill status={status} />
      </div>

      <JobStepper current={status} />

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.04]">
          <p className="flex items-center gap-1 text-[10px] font-medium text-ink-500">
            <MapPin className="size-3" aria-hidden="true" /> Location
          </p>
          <p className="mt-1 text-[12px] leading-snug font-semibold text-ink-800">3rd Avenue, Anna Nagar</p>
        </div>
        <div className="rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.04]">
          <p className="flex items-center gap-1 text-[10px] font-medium text-ink-500">
            <Wrench className="size-3" aria-hidden="true" /> Technician
          </p>
          <div className="mt-1 flex items-center gap-1.5">
            <Avatar initials="RK" size="xs" />
            <p className="text-[12px] font-semibold text-ink-800">Ravi Kumar</p>
          </div>
        </div>
      </div>

      {!compact && (
        <>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-700">
                <ClipboardList className="size-3.5 text-brand-500" aria-hidden="true" /> Service checklist
              </p>
              <p className="font-mono text-[10px] text-ink-500">3 / 5</p>
            </div>
            <Meter value={60} tone="brand" />
            <ul className="mt-3 space-y-1.5">
              {[
                ['Clean indoor filters', true],
                ['Check refrigerant pressure', true],
                ['Test compressor & fan', true],
                ['Clean drain line', false],
                ['Upload before / after photos', false],
              ].map(([label, done]) => (
                <li key={String(label)} className="flex items-center gap-2 text-[12px] text-ink-700">
                  <span
                    className={cn(
                      'flex size-4 shrink-0 items-center justify-center rounded-md ring-1 ring-inset',
                      done ? 'bg-mint-500 text-white ring-mint-500' : 'bg-white text-transparent ring-ink-200',
                    )}
                  >
                    <Check className="size-2.5" strokeWidth={3.5} />
                  </span>
                  <span className={cn(done && 'text-ink-500')}>{String(label)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-brand-50/70 px-3 py-2 ring-1 ring-brand-100">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-brand-800">
              <Camera className="size-3.5" aria-hidden="true" /> 2 photos attached
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-brand-800">
              <Phone className="size-3.5" aria-hidden="true" /> Customer notified
            </span>
          </div>
        </>
      )}
    </div>
  )
}

/** A compact row for job lists. */
export function JobRow({
  id,
  type,
  customer,
  area,
  time,
  status,
  priority,
  className,
}: {
  id: string
  type: string
  customer: string
  area: string
  time: string
  status: JobStatus
  priority?: boolean
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3 rounded-xl px-3 py-2.5', className)}>
      <span className="w-11 shrink-0 font-mono text-[11px] font-semibold text-ink-500 tabular">{time}</span>
      <div className="min-w-0 flex-1">
        <p className="flex min-w-0 items-center gap-1.5 text-[12.5px] leading-tight font-semibold text-ink-900">
          <span className="truncate">{type}</span>
          {priority && <Tag tone="coral" className="shrink-0">High</Tag>}
        </p>
        <p className="mt-0.5 truncate text-[11px] text-ink-500">
          {customer} · {area} <span className="hidden font-mono text-[10px] text-ink-500 @md:inline">· {id}</span>
        </p>
      </div>
      <StatusPill status={status} />
    </div>
  )
}
