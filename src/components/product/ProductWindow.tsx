import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Bezel } from '@/components/ui/Bezel'
import { cn } from '@/lib/cn'

interface Props {
  title: string
  subtitle?: string
  icon?: LucideIcon
  /** Right-aligned controls in the title bar (badges, pills…). */
  actions?: ReactNode
  /**
   * Accessible description of the whole mockup (also acts as its image "alt").
   * Inner content is then hidden from assistive tech. Omit for purely decorative use.
   */
  label?: string
  className?: string
  bodyClassName?: string
  children: ReactNode
  radius?: 'md' | 'lg' | 'xl'
}

/**
 * Chrome for every product mockup: double-bezel shell, slim title bar, and a
 * container-query body so contents adapt to the width of their panel
 * (use @sm: / @md: / @lg: variants inside).
 */
export function ProductWindow({ title, subtitle, icon: Icon, actions, label, className, bodyClassName, children, radius = 'lg' }: Props) {
  return (
    <Bezel
      radius={radius}
      className={cn('shadow-float', className)}
      coreClassName="@container flex h-full flex-col overflow-hidden [&_.grid>*]:min-w-0"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      <div className="flex items-center gap-2.5 border-b border-ink-900/[0.06] px-3.5 py-2.5 @md:px-4 @md:py-3">
        {Icon && (
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
            <Icon className="size-3.5" strokeWidth={2} />
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-[13px] leading-tight font-semibold text-ink-900">{title}</p>
          {subtitle && <p className="truncate font-mono text-[10px] leading-tight text-ink-500">{subtitle}</p>}
        </div>
        {actions && <div className="ml-auto flex shrink-0 items-center gap-2">{actions}</div>}
      </div>
      <div className={cn('min-h-0 flex-1', bodyClassName)}>{children}</div>
    </Bezel>
  )
}

/** "Live" badge for title bars. */
export function LiveBadge({ children = 'Live' }: { children?: ReactNode }) {
  return (
    <span className="eyebrow-mono inline-flex items-center gap-1.5 rounded-full bg-mint-50 px-2 py-1 text-[9px] text-mint-600 ring-1 ring-mint-100">
      <span className="relative inline-flex size-1.5">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-mint-500" />
        <span className="relative size-1.5 rounded-full bg-mint-500" />
      </span>
      {children}
    </span>
  )
}

export function KpiTile({
  label,
  value,
  delta,
  deltaTone = 'up',
  className,
  children,
}: {
  label: string
  value: ReactNode
  delta?: string
  deltaTone?: 'up' | 'down' | 'flat'
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn('rounded-2xl bg-mist p-3 ring-1 ring-ink-900/[0.04]', className)}>
      <p className="text-[11px] leading-tight font-medium text-ink-500">{label}</p>
      <p className="tabular mt-1.5 font-display text-[1.4rem] leading-none font-semibold tracking-[-0.03em] text-ink-900">{value}</p>
      {delta && (
        <p
          className={cn(
            'mt-1.5 text-[10.5px] leading-none font-semibold',
            deltaTone === 'up' && 'text-mint-600',
            deltaTone === 'down' && 'text-coral-600',
            deltaTone === 'flat' && 'text-ink-500',
          )}
        >
          {delta}
        </p>
      )}
      {children}
    </div>
  )
}
