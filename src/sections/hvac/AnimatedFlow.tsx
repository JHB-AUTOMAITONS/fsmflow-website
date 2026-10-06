import { Check, type LucideIcon } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react'
import { Bezel } from '@/components/ui/Bezel'
import { observe, prefersReducedMotion } from '@/lib/observer'
import { cn } from '@/lib/cn'

export interface FlowStage {
  id: string
  /** Short label under the node. */
  label: string
  icon: LucideIcon
  /** Heading inside the detail panel. */
  heading: string
  text: string
  /** Mini product screen for this stage. */
  detail: ReactNode
  /** Small chips shown under the text (e.g. what gets recorded). */
  chips?: string[]
}

interface Props {
  stages: FlowStage[]
  /** Optional return arc, e.g. AMC → Service ("repeat visits"). Indices into `stages`. */
  loop?: { from: number; to: number; label: string }
  /** Auto-advance interval in ms while visible. */
  autoMs?: number
  className?: string
  ariaLabel: string
}

const PAUSE_AFTER_CLICK = 14000

/**
 * The signature "flow" visual: a job token travels along the track while each
 * stage reveals the real product screen behind it. Auto-advances while on
 * screen (never under reduced motion), pauses on interaction, and is fully
 * operable with the keyboard (Tab + Enter on the stage buttons; arrow keys also step through).
 *
 * Desktop: horizontal track + one detail panel. Mobile: vertical rail with the
 * detail panel opening inline under the active stage.
 */
export function AnimatedFlow({ stages, loop, autoMs = 3600, className, ariaLabel }: Props) {
  const uid = useId()
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const pausedUntil = useRef(0)
  const hovering = useRef(false)
  const n = stages.length

  const select = useCallback((i: number, manual = false) => {
    setActive(i)
    if (manual) pausedUntil.current = Date.now() + PAUSE_AFTER_CLICK
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el || prefersReducedMotion()) return
    let timer = 0
    const stop = observe(
      el,
      (entry) => {
        window.clearInterval(timer)
        if (!entry.isIntersecting) return
        timer = window.setInterval(() => {
          if (hovering.current || Date.now() < pausedUntil.current) return
          setActive((a) => (a + 1) % n)
        }, autoMs)
      },
      { threshold: 0.35 },
    )
    return () => {
      window.clearInterval(timer)
      stop()
    }
  }, [n, autoMs])

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (active + 1) % n
      select(next, true)
      document.getElementById(`${uid}-s${next}`)?.focus()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (active - 1 + n) % n
      select(prev, true)
      document.getElementById(`${uid}-s${prev}`)?.focus()
    }
  }

  const progress = n > 1 ? active / (n - 1) : 0
  const edge = `calc(100% / ${2 * n})`

  const node = (stage: FlowStage, i: number) => {
    const done = i < active
    const current = i === active
    const Icon = stage.icon
    return (
      <button
        key={stage.id}
        id={`${uid}-s${i}`}
        type="button"
        aria-current={current ? 'step' : undefined}
        aria-controls={`${uid}-panel`}
        onClick={() => select(i, true)}
        className="group/node flex min-w-0 items-center gap-4 rounded-2xl py-1.5 text-left md:flex-col md:gap-3 md:text-center"
      >
        <span
          className={cn(
            'relative flex size-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-[background-color,color,box-shadow,transform] duration-700 ease-premium md:size-14 md:rounded-[20px]',
            current && 'scale-105 bg-brand-gradient text-white shadow-lift ring-white/40',
            done && 'bg-brand-50 text-brand-600 ring-brand-200',
            !current && !done && 'bg-white text-ink-500 shadow-card ring-ink-900/[0.08] group-hover/node:text-brand-600 group-hover/node:ring-brand-300',
          )}
        >
          {current && <span className="absolute inset-0 animate-pulse-ring rounded-[inherit] bg-brand-500/25" aria-hidden="true" />}
          {done ? <Check className="size-5" strokeWidth={2.4} aria-hidden="true" /> : <Icon className="size-5 md:size-[22px]" strokeWidth={1.6} aria-hidden="true" />}
        </span>
        <span
          className={cn(
            'text-[0.9375rem] leading-tight font-semibold transition-colors duration-500 md:text-[0.8125rem] lg:text-[0.9rem]',
            current ? 'text-ink-900' : done ? 'text-ink-700' : 'text-ink-500',
          )}
        >
          {stage.label}
        </span>
      </button>
    )
  }

  const panel = (stage: FlowStage) => (
    <div key={stage.id} className="animate-panel-in grid items-center gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10">
      <div>
        <p className="eyebrow-mono text-brand-600">Stage {stages.findIndex((s) => s.id === stage.id) + 1} of {n}</p>
        <h3 className="mt-3 text-h3 font-semibold text-ink-900">{stage.heading}</h3>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-600">{stage.text}</p>
        {stage.chips && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {stage.chips.map((c) => (
              <li key={c} className="rounded-full bg-brand-50 px-3 py-1 text-[0.8125rem] font-medium text-brand-700 ring-1 ring-brand-100">
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="min-w-0">{stage.detail}</div>
    </div>
  )

  return (
    <div
      ref={rootRef}
      className={className}
      onPointerEnter={() => (hovering.current = true)}
      onPointerLeave={() => (hovering.current = false)}
      onFocus={() => (hovering.current = true)}
      onBlur={() => (hovering.current = false)}
    >
      <Bezel radius="xl" coreClassName="px-4 py-6 sm:px-8 md:px-10 md:py-10">
        {/* ---- track ---- */}
        <div role="group" aria-label={ariaLabel} onKeyDown={onKeyDown} className="relative">
          {/* desktop horizontal line + travelling token */}
          <div className="pointer-events-none absolute top-7 hidden h-[3px] md:block" style={{ left: edge, right: edge }} aria-hidden="true">
            <div className="absolute inset-0 rounded-full bg-ink-900/[0.08]" />
            <div className="absolute inset-0" style={{ clipPath: 'inset(-14px 0 -14px 0)' }}>
              <div
                className="absolute inset-0 transition-transform duration-[900ms] ease-premium"
                style={{ transform: `translateX(${(progress - 1) * 100}%)` }}
              >
                <div className="size-full rounded-full bg-brand-gradient" />
                <span className="absolute top-1/2 -right-2 size-4 -translate-y-1/2 rounded-full bg-white shadow-pop ring-[3px] ring-brand-500">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />
                </span>
              </div>
            </div>
          </div>

          {/* optional return arc (e.g. AMC → next service visit) */}
          {loop && (
            <div className="pointer-events-none absolute -top-9 right-0 left-0 hidden h-9 md:block" aria-hidden="true">
              <svg viewBox="0 0 1000 36" preserveAspectRatio="none" className="size-full overflow-visible">
                <path
                  d={`M${((loop.from + 0.5) / n) * 1000} 34 C ${((loop.from + 0.5) / n) * 1000} 2, ${((loop.to + 0.5) / n) * 1000} 2, ${((loop.to + 0.5) / n) * 1000} 34`}
                  fill="none"
                  stroke="#6554f3"
                  strokeOpacity="0.55"
                  strokeWidth="1.6"
                  vectorEffect="non-scaling-stroke"
                  className="flow-line"
                />
              </svg>
              <span
                className="eyebrow-mono absolute top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1.5 text-[9px] text-iris-700 shadow-card ring-1 ring-iris-100"
                style={{ left: `${(((loop.from + loop.to) / 2 + 0.5) / n) * 100}%` } as CSSProperties}
              >
                {loop.label}
              </span>
            </div>
          )}

          <div
            className="flex flex-col gap-1 md:grid md:gap-0 md:[grid-template-columns:var(--cols)]"
            style={{ '--cols': `repeat(${n}, minmax(0, 1fr))` } as CSSProperties}
          >
            {stages.map((stage, i) => (
              <div key={stage.id} className="relative min-w-0">
                {/* mobile connector to the next stage */}
                {i < n - 1 && (
                  <span
                    className={cn(
                      'absolute top-[30px] -bottom-2.5 left-6 w-[3px] -translate-x-1/2 rounded-full transition-colors duration-700 md:hidden',
                      i < active ? 'bg-brand-500' : 'bg-ink-900/[0.08]',
                    )}
                    aria-hidden="true"
                  />
                )}
                {node(stage, i)}
                {/* Mobile: the detail opens inline under the active stage */}
                {i === active && (
                  <div role="region" aria-labelledby={`${uid}-s${i}`} className="relative z-10 bg-white pt-3 pb-5 pl-0 md:hidden">
                    {panel(stage)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ---- desktop detail panel ---- */}
        <div
          id={`${uid}-panel`}
          role="region"
          aria-labelledby={`${uid}-s${active}`}
          className="mt-10 hidden border-t border-ink-900/[0.07] pt-10 md:block"
        >
          {panel(stages[active])}
        </div>
      </Bezel>
    </div>
  )
}
