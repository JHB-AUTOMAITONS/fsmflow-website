import { useRef, type CSSProperties, type ReactNode } from 'react'
import { useOnView } from '@/hooks/useOnView'
import { cn } from '@/lib/cn'

/**
 * Root of every feature visual: a size container for the `@md:` / `@xl:` variants and
 * the ancestor that lets `grow-x` / `grow-y` bars animate in once the visual scrolls into view.
 */
export function VisualRoot({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useOnView(ref, () => ref.current?.classList.add('is-in'))
  return (
    <div ref={ref} className={cn('relative @container', className)}>
      {children}
    </div>
  )
}

/**
 * Floating card that hangs off a visual's edge. Shown only when the visual's
 * container is wide (>= 36rem), decorative (aria-hidden), CSS-only entrance.
 */
export function FloatCard({ className, delay = 600, children }: { className?: string; delay?: number; children: ReactNode }) {
  return (
    <div
      className={cn('hero-in absolute z-10 hidden rounded-[18px] bg-white p-3 shadow-float ring-1 ring-ink-900/[0.07] @xl:block', className)}
      style={{ '--d': `${delay}ms` } as CSSProperties}
      aria-hidden="true"
    >
      <div className="animate-float-y" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  )
}

/** Mono micro-label used for IDs and small section captions inside mockups. */
export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('font-mono text-[10px] font-semibold tracking-wider text-ink-500 uppercase', className)}>{children}</span>
}

/** Pill-style segmented control, purely visual. */
export function Segmented({ items, active = 0, className }: { items: string[]; active?: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-0.5 rounded-xl bg-ink-50 p-0.5 text-[11px] font-semibold', className)}>
      {items.map((it, i) => (
        <span key={it} className={cn('rounded-lg px-2.5 py-1', i === active ? 'bg-white text-ink-900 shadow-card' : 'text-ink-500')}>
          {it}
        </span>
      ))}
    </div>
  )
}

/** Small primary action that looks like a button (mockups are decorative, so it is not interactive). */
export function FakeButton({ children, className, tone = 'primary' }: { children: ReactNode; className?: string; tone?: 'primary' | 'soft' | 'ghost' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] leading-none font-semibold whitespace-nowrap',
        tone === 'primary' && 'bg-brand-gradient text-white shadow-cta',
        tone === 'soft' && 'bg-brand-50 text-brand-700 ring-1 ring-brand-100',
        tone === 'ghost' && 'bg-white text-ink-700 ring-1 ring-ink-900/10',
        className,
      )}
    >
      {children}
    </span>
  )
}
