import { Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useRef, type CSSProperties, type ReactNode } from 'react'
import { useOnView } from '@/hooks/useOnView'
import { cn } from '@/lib/cn'

/**
 * Bars and meters (`.grow-x` / `.grow-y`) stay collapsed until an ancestor has
 * `.is-in`. Page sections get that from <Reveal>, but a hero visual shouldn't
 * fade in twice, so this wrapper only adds the class — no opacity or transform.
 */
export function GrowScope({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useOnView(ref, () => ref.current?.classList.add('is-in'))
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

/** White inner card used inside the industry mockups. */
export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('rounded-2xl bg-white ring-1 ring-ink-900/[0.07]', className)}>{children}</div>
}

/** Small panel heading: icon + title on the left, optional meta on the right. */
export function PanelHead({
  icon: Icon,
  title,
  meta,
  className,
}: {
  icon?: LucideIcon
  title: string
  meta?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center justify-between gap-2 px-3 pt-3 pb-2', className)}>
      <p className="flex min-w-0 items-center gap-1.5 text-[12px] font-semibold text-ink-900">
        {Icon && <Icon className="size-3.5 shrink-0 text-brand-500" aria-hidden="true" />}
        <span className="truncate">{title}</span>
      </p>
      {meta && <div className="shrink-0 font-mono text-[10px] text-ink-500">{meta}</div>}
    </div>
  )
}

/**
 * Stage stepper with any number of steps (the shared JobStepper is fixed at four).
 * `current` is the index of the active step; earlier steps show a tick.
 */
export function MiniStepper({ steps, current, className }: { steps: string[]; current: number; className?: string }) {
  const n = steps.length
  const inset = 100 / n / 2
  return (
    <ol className={cn('relative grid', className)} style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` } as CSSProperties} aria-hidden="true">
      <span className="absolute top-[11px] h-[2px] rounded-full bg-ink-900/[0.08]" style={{ left: `${inset}%`, right: `${inset}%` }} />
      <span
        className="absolute top-[11px] h-[2px] rounded-full bg-brand-gradient"
        style={{ left: `${inset}%`, width: `${(current / (n - 1)) * (100 - inset * 2)}%` }}
      />
      {steps.map((label, i) => {
        const done = i < current
        const active = i === current
        return (
          <li key={label} className="relative flex flex-col items-center gap-1.5 text-center">
            <span
              className={cn(
                'relative flex size-[22px] items-center justify-center rounded-full ring-2 ring-white',
                done && 'bg-brand-500 text-white',
                active && 'bg-brand-gradient text-white shadow-cta',
                !done && !active && 'bg-ink-100 text-ink-500',
              )}
            >
              {active && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />}
              {done ? <Check className="size-3" strokeWidth={3} /> : <span className="size-1.5 rounded-full bg-current" />}
            </span>
            <span className={cn('text-[9.5px] leading-tight font-semibold @sm:text-[10px]', active ? 'text-ink-900' : 'text-ink-500')}>{label}</span>
          </li>
        )
      })}
    </ol>
  )
}

/** Tiny coloured dot + label, used for map / board legends. */
export function LegendDot({ className, children }: { className: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-ink-600">
      <span className={cn('size-2 rounded-full', className)} />
      {children}
    </span>
  )
}
