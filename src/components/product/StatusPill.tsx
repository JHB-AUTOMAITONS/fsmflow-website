import { cn } from '@/lib/cn'
import type { JobStatus } from '@/data/sample'

const META: Record<JobStatus, { label: string; cls: string; dot: string }> = {
  assigned: { label: 'Assigned', cls: 'bg-iris-50 text-iris-700 ring-iris-100', dot: 'bg-iris-500' },
  'en-route': { label: 'En route', cls: 'bg-aqua-50 text-aqua-600 ring-aqua-100', dot: 'bg-aqua-500' },
  'in-progress': { label: 'In progress', cls: 'bg-heat-50 text-heat-600 ring-heat-100', dot: 'bg-heat-500' },
  completed: { label: 'Completed', cls: 'bg-mint-50 text-mint-600 ring-mint-100', dot: 'bg-mint-500' },
  pending: { label: 'Pending', cls: 'bg-ink-50 text-ink-600 ring-ink-100', dot: 'bg-ink-400' },
  overdue: { label: 'Overdue', cls: 'bg-coral-50 text-coral-600 ring-coral-100', dot: 'bg-coral-500' },
}

export function statusLabel(status: JobStatus) {
  return META[status].label
}

/** Job status chip used across every product mockup. `live` pulses the dot for in-flight states. */
export function StatusPill({
  status,
  label,
  live,
  className,
}: {
  status: JobStatus
  label?: string
  live?: boolean
  className?: string
}) {
  const m = META[status]
  const pulse = live ?? (status === 'en-route' || status === 'in-progress')
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] leading-4 font-semibold whitespace-nowrap ring-1 ring-inset',
        m.cls,
        className,
      )}
    >
      <span className="relative inline-flex size-1.5">
        {pulse && <span className={cn('absolute inset-0 animate-pulse-ring rounded-full', m.dot)} />}
        <span className={cn('relative size-1.5 rounded-full', m.dot)} />
      </span>
      {label ?? m.label}
    </span>
  )
}

/** Generic coloured tag (not a job status), e.g. "High priority", "AMC". */
export function Tag({
  tone = 'ink',
  children,
  className,
}: {
  tone?: 'ink' | 'brand' | 'iris' | 'aqua' | 'mint' | 'heat' | 'coral'
  children: React.ReactNode
  className?: string
}) {
  const tones = {
    ink: 'bg-ink-50 text-ink-600 ring-ink-100',
    brand: 'bg-brand-50 text-brand-700 ring-brand-100',
    iris: 'bg-iris-50 text-iris-700 ring-iris-100',
    aqua: 'bg-aqua-50 text-aqua-600 ring-aqua-100',
    mint: 'bg-mint-50 text-mint-600 ring-mint-100',
    heat: 'bg-heat-50 text-heat-600 ring-heat-100',
    coral: 'bg-coral-50 text-coral-600 ring-coral-100',
  } as const
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] leading-4 font-semibold whitespace-nowrap ring-1 ring-inset',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
