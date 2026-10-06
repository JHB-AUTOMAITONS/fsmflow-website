import { ArrowUp, Repeat } from 'lucide-react'
import type { CSSProperties } from 'react'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import type { SolutionAccent, SolutionStage, StageVariant } from '@/data/solutionPages'
import { cn } from '@/lib/cn'
import { ACCENT, type AccentStyle } from './accent'

interface Props {
  stages: SolutionStage[]
  /**
   * line   — nodes on a rail with the label and detail underneath
   * ribbon — one continuous band of chevrons with the detail underneath
   * stairs — cards that step upwards, left to right
   * Below the `lg` breakpoint every variant becomes a vertical rail.
   */
  variant?: StageVariant
  /** Node content for the vertical rail and the `line` variant. */
  nodes?: 'number' | 'icon'
  accent: SolutionAccent
  /** `line` only: a dashed return path from the last stage back to the first. */
  loopLabel?: string
  className?: string
}

const pad = (i: number) => String(i + 1).padStart(2, '0')

const CHEVRON = 14
const CLIP = {
  first: `polygon(0 0, calc(100% - ${CHEVRON}px) 0, 100% 50%, calc(100% - ${CHEVRON}px) 100%, 0 100%)`,
  middle: `polygon(0 0, calc(100% - ${CHEVRON}px) 0, 100% 50%, calc(100% - ${CHEVRON}px) 100%, 0 100%, ${CHEVRON}px 50%)`,
  last: `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${CHEVRON}px 50%)`,
}

function Node({
  stage,
  index,
  last,
  nodes,
  a,
  className,
}: {
  stage: SolutionStage
  index: number
  last: boolean
  nodes: 'number' | 'icon'
  a: AccentStyle
  className?: string
}) {
  const Icon = stage.icon
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative z-10 flex size-11 shrink-0 items-center justify-center ring-1 ring-inset',
        nodes === 'number' ? 'rounded-xl' : 'rounded-full',
        last ? cn(a.solidGradient, 'text-white shadow-cta ring-white/40') : cn('bg-white shadow-card ring-ink-900/[0.08]', a.text),
        className,
      )}
    >
      {nodes === 'number' ? <span className="font-mono text-[13px] font-bold">{pad(index)}</span> : <Icon className="size-5" strokeWidth={1.6} />}
    </span>
  )
}

const labelCls = 'font-display text-[1.0625rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900'
const detailCls = 'text-[0.9375rem] leading-snug text-ink-600'

/**
 * Industry workflow: 6 to 8 stages, horizontal on desktop and a vertical rail on
 * mobile. Each stage fades in on scroll (Reveal, so server HTML is identical).
 */
export function StageFlow({ stages, variant = 'line', nodes = 'number', accent, loopLabel, className }: Props) {
  const a = ACCENT[accent]
  const n = stages.length
  const mix = (pct: number) => `color-mix(in oklab, var(${a.cssVar}) ${pct}%, white)`

  return (
    <div className={cn('relative', className)} style={{ '--n': n } as CSSProperties}>
      <ol
        className={cn(
          'grid gap-y-8 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))] lg:gap-y-0',
          variant === 'stairs' && 'lg:items-end lg:gap-x-3',
        )}
      >
        {stages.map((s, i) => {
          const last = i === n - 1
          const t = n > 1 ? i / (n - 1) : 0
          return (
            <Reveal
              as="li"
              key={s.label}
              delay={i * 70}
              className={cn(
                'relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 lg:block',
                variant === 'line' && 'lg:px-2 lg:text-center',
                variant === 'ribbon' && i > 0 && 'lg:-ml-2.5',
              )}
            >
              {/* vertical rail (mobile) */}
              {!last && <span aria-hidden="true" className={cn('absolute top-12 -bottom-8 left-[21px] w-px lg:hidden', a.rail)} />}

              {variant === 'line' && (
                <>
                  {i > 0 && <span aria-hidden="true" className={cn('absolute top-[21px] left-0 hidden h-0.5 w-1/2 lg:block', a.rail)} />}
                  {!last && <span aria-hidden="true" className={cn('absolute top-[21px] right-0 hidden h-0.5 w-1/2 lg:block', a.rail)} />}
                  <Node stage={s} index={i} last={last} nodes={nodes} a={a} className="lg:mx-auto" />
                  <div className="min-w-0 pt-1 lg:mt-4 lg:pt-0">
                    <h3 className={labelCls}>{s.label}</h3>
                    <p className={cn(detailCls, 'mt-1')}>{s.detail}</p>
                  </div>
                </>
              )}

              {variant === 'ribbon' && (
                <>
                  <Node stage={s} index={i} last={last} nodes={nodes} a={a} className="lg:hidden" />
                  <div className="min-w-0 pt-1 lg:pt-0">
                    <div
                      className={cn(
                        'lg:flex lg:h-16 lg:items-center lg:gap-2 lg:bg-(--chev) lg:pr-5 lg:[clip-path:var(--clip)]',
                        i === 0 ? 'lg:pl-5' : 'lg:pl-8',
                      )}
                      style={{ '--chev': mix(14 + t * 34), '--clip': i === 0 ? CLIP.first : last ? CLIP.last : CLIP.middle } as CSSProperties}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('hidden size-6 shrink-0 items-center justify-center rounded-full bg-white font-mono text-[10px] font-bold xl:flex', a.text)}
                      >
                        {pad(i)}
                      </span>
                      <h3 className={labelCls}>{s.label}</h3>
                    </div>
                    <p className={cn(detailCls, 'mt-1 lg:mt-3 lg:px-3')}>{s.detail}</p>
                  </div>
                </>
              )}

              {variant === 'stairs' && (
                <>
                  <Node stage={s} index={i} last={last} nodes={nodes} a={a} className="lg:hidden" />
                  <div
                    className="min-w-0 pt-1 lg:flex lg:min-h-(--h) lg:flex-col lg:rounded-2xl lg:bg-linear-to-b lg:from-white lg:to-(--tint) lg:p-3.5 lg:shadow-card lg:ring-1 lg:ring-ink-900/[0.07] xl:p-4"
                    style={{ '--h': `${156 + i * 22}px`, '--tint': mix(5 + t * 14) } as CSSProperties}
                  >
                    <div className="hidden items-center justify-between lg:flex">
                      <span className={cn('font-mono text-[11px] font-bold tracking-wider', a.text)}>{pad(i)}</span>
                      <IconTile icon={s.icon} tone={a.icon} size="sm" />
                    </div>
                    <h3 className={cn(labelCls, 'lg:mt-4 lg:text-[0.9375rem] xl:text-[1.0625rem]')}>{s.label}</h3>
                    <p className={cn(detailCls, 'mt-1')}>{s.detail}</p>
                    <span aria-hidden="true" className="mt-auto hidden pt-5 lg:block">
                      <span className={cn('grow-x block h-1 rounded-full', a.solid)} style={{ width: `${((i + 1) / n) * 100}%` }} />
                    </span>
                  </div>
                </>
              )}
            </Reveal>
          )
        })}
      </ol>

      {variant === 'line' && loopLabel && (
        <>
          <div className="relative mt-10 hidden lg:block" style={{ marginInline: 'calc(100% / (2 * var(--n)))' }}>
            <div aria-hidden="true" className={cn('h-14 rounded-b-[32px] border-x-2 border-b-2 border-dashed', a.dashed)} />
            <span
              aria-hidden="true"
              className={cn('absolute -top-2.5 -left-[11px] flex size-5 items-center justify-center rounded-full bg-white ring-1 ring-ink-900/[0.08]', a.text)}
            >
              <ArrowUp className="size-3" strokeWidth={2.4} />
            </span>
            <p className="absolute top-full left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.875rem] font-semibold whitespace-nowrap text-ink-800 shadow-card ring-1 ring-ink-900/[0.07]">
              <Repeat className={cn('size-4', a.text)} aria-hidden="true" />
              {loopLabel}
            </p>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.875rem] font-semibold text-ink-800 shadow-card ring-1 ring-ink-900/[0.07] lg:hidden">
            <Repeat className={cn('size-4 shrink-0', a.text)} aria-hidden="true" />
            {loopLabel}
          </p>
        </>
      )}
    </div>
  )
}
