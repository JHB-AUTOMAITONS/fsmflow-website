import { RefreshCcw } from 'lucide-react'
import type { ReactNode } from 'react'
import { Tag } from '@/components/product/StatusPill'
import { Reveal } from '@/components/ui/Reveal'
import { IconTile, type IconTone } from '@/components/ui/IconTile'
import type { Capability, FeaturePageContent } from '@/data/featurePages'
import { cn } from '@/lib/cn'
import { MiniVisual } from './MiniVisuals'

type Caps = FeaturePageContent['capabilities']

/** Cycles tile colours so neighbouring capabilities are visually distinct. */
const TONES: IconTone[] = ['brand', 'aqua', 'iris', 'mint', 'heat', 'brand']
const tone = (i: number) => TONES[i % TONES.length]

function ChipTag({ chip }: { chip: NonNullable<Capability['chip']> }) {
  return <Tag tone={chip.tone}>{chip.label}</Tag>
}

/* ------------------------------------------------------------------ */
/* Split: alternating rows with a mini product visual                  */
/* ------------------------------------------------------------------ */
const STAGES = [
  'from-brand-50 via-wash to-white ring-brand-100',
  'from-aqua-50 via-white to-brand-50 ring-aqua-100',
  'from-iris-50 via-white to-brand-50 ring-iris-100',
  'from-mint-50 via-white to-aqua-50 ring-mint-100',
]

export function CapabilitySplit({ items }: Pick<Caps, 'items'>) {
  const featured = items.filter((i) => i.mini)
  const rest = items.filter((i) => !i.mini)
  return (
    <>
      <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
        {featured.map((item, i) => {
          const flip = i % 2 === 1
          return (
            <div key={item.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
              <Reveal variant={flip ? 'right' : 'left'} className={cn(flip && 'md:order-2')}>
                <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-ink-500">{String(i + 1).padStart(2, '0')}</p>
                <div className="mt-3 flex items-center gap-3.5">
                  <IconTile icon={item.icon} tone={tone(i)} size="lg" />
                </div>
                <h3 className="text-h3 mt-5 font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-ink-600">{item.text}</p>
                {item.chip && (
                  <div className="mt-4">
                    <ChipTag chip={item.chip} />
                  </div>
                )}
              </Reveal>
              <Reveal variant="scale" delay={120} className={cn(flip && 'md:order-1')}>
                <div className={cn('relative isolate overflow-hidden rounded-[32px] bg-linear-to-br p-5 ring-1 sm:p-8 md:p-9', STAGES[i % STAGES.length])}>
                  <div className="absolute inset-0 -z-10 bg-dots-brand opacity-30 mask-fade-edges" aria-hidden="true" />
                  <MiniVisual name={item.mini!} className="mx-auto max-w-[26rem]" />
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>

      {rest.length > 0 && (
        <Reveal className="mt-16 border-t border-ink-900/[0.08] pt-12 md:mt-24 md:pt-14">
          <p className="eyebrow-mono text-ink-500">And also</p>
          <ul className="mt-8 grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {rest.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <IconTile icon={item.icon} tone={tone(i + 3)} size="md" />
                <div>
                  <h3 className="text-[1.0625rem] leading-snug font-semibold tracking-[-0.01em] text-ink-900">{item.title}</h3>
                  <p className="mt-1.5 text-[0.9688rem] leading-relaxed text-ink-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Bento: asymmetric grid, minis in some cells                         */
/* ------------------------------------------------------------------ */
const SPAN: Record<2 | 3 | 4, string> = {
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'md:col-span-2 lg:col-span-4',
}

export function CapabilityBento({ items }: Pick<Caps, 'items'>) {
  return (
    <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-6">
      {items.map((item, i) => {
        const span = item.span ?? 3
        const wide = span === 4
        const solid = Boolean(item.mini)
        return (
          <Reveal key={item.title} delay={(i % 3) * 80} className={cn('h-full', SPAN[span])}>
            <article
              className={cn(
                'relative flex h-full flex-col overflow-hidden rounded-[28px] p-6 ring-1 ring-inset md:p-7',
                solid ? 'bg-white shadow-card ring-ink-900/[0.07]' : 'bg-linear-to-br from-wash via-white to-white ring-brand-100',
                wide && item.mini && 'md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-8',
              )}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <IconTile icon={item.icon} tone={tone(i)} size="md" />
                  {item.chip && <ChipTag chip={item.chip} />}
                </div>
                <h3 className="mt-5 text-[1.2rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900 md:text-[1.3rem]">{item.title}</h3>
                <p className="mt-2.5 text-[0.9844rem] leading-relaxed text-ink-600">{item.text}</p>
              </div>
              {item.mini && <MiniVisual name={item.mini} className={cn('mt-6', wide && 'md:mt-0')} />}
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Steps: a numbered track (horizontal on desktop, vertical below)      */
/* ------------------------------------------------------------------ */
export function CapabilitySteps({ items }: Pick<Caps, 'items'>) {
  const cols: Record<number, string> = { 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' }
  return (
    <Reveal as="ol" className={cn('relative mt-14 grid gap-5 md:mt-20 lg:gap-4', cols[items.length] ?? 'lg:grid-cols-5')}>
      {items.map((item, i) => {
        const last = i === items.length - 1
        return (
          <li key={item.title} className="relative flex flex-col pl-[4.5rem] lg:pl-0">
            {/* node */}
            <span
              className={cn(
                'absolute top-0 left-0 flex size-[3.4rem] items-center justify-center rounded-full bg-white font-display text-xl font-semibold shadow-pop ring-2 lg:static',
                last ? 'text-mint-600 ring-mint-400' : 'text-brand-700 ring-brand-200',
              )}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            {/* connectors */}
            {!last && (
              <>
                <span className="absolute top-[3.4rem] bottom-[-1.25rem] left-[1.7rem] w-px bg-linear-to-b from-brand-300 to-brand-100 lg:hidden" aria-hidden="true" />
                <span
                  className="grow-x absolute top-[1.7rem] left-[3.4rem] -right-4 hidden h-px bg-linear-to-r from-brand-300 to-brand-100 lg:block"
                  style={{ '--d': `${i * 140}ms` } as React.CSSProperties}
                  aria-hidden="true"
                />
              </>
            )}
            <div className="flex-1 rounded-[24px] bg-white p-5 shadow-card ring-1 ring-ink-900/[0.07] lg:mt-6">
              <IconTile icon={item.icon} tone={last ? 'mint' : tone(i)} size="sm" />
              <h3 className="mt-3.5 text-[1.0625rem] leading-snug font-semibold tracking-[-0.01em] text-ink-900">{item.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{item.text}</p>
              {item.chip && (
                <div className="mt-4">
                  <ChipTag chip={item.chip} />
                </div>
              )}
            </div>
          </li>
        )
      })}
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Rail: sticky intro on the left, ruled list on the right              */
/* ------------------------------------------------------------------ */
export function CapabilityRail({ items, heading, aside }: Pick<Caps, 'items' | 'aside'> & { heading: ReactNode }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        {heading}
        {aside && (
          <Reveal className="mt-10 max-w-[26rem]">
            <MiniVisual name={aside} />
          </Reveal>
        )}
      </div>
      <ol className="divide-y divide-ink-900/[0.07] overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-ink-900/[0.07]">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 60} className="group/row flex gap-4 p-5 transition-colors duration-500 hover:bg-wash/60 md:gap-5 md:p-7">
            <div className="flex shrink-0 flex-col items-center gap-3">
              <IconTile icon={item.icon} tone={tone(i)} size="md" />
              <span className="font-mono text-[10.5px] font-semibold text-ink-500">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-[1.1rem] leading-snug font-semibold tracking-[-0.015em] text-ink-900 md:text-[1.2rem]">{item.title}</h3>
              <p className="mt-2 text-[0.9844rem] leading-relaxed text-ink-600">{item.text}</p>
              {item.chip && (
                <div className="mt-3">
                  <ChipTag chip={item.chip} />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Timeline: a vertical lifecycle, alternating sides on wide screens    */
/* ------------------------------------------------------------------ */
export function CapabilityTimeline({ items, closing }: Pick<Caps, 'items' | 'closing'>) {
  return (
    <div className="relative mx-auto mt-14 max-w-5xl md:mt-20">
      <span
        className="absolute top-3 bottom-8 left-[1.7rem] w-px bg-linear-to-b from-brand-300 via-aqua-300 to-brand-100 md:left-1/2"
        aria-hidden="true"
      />
      <ol className="relative">
        {items.map((item, i) => {
          const right = i % 2 === 1
          return (
            <Reveal as="li" key={item.title} variant={right ? 'right' : 'left'} className="relative pb-8 pl-[4.5rem] last:pb-0 md:grid md:grid-cols-2 md:gap-x-20 md:pl-0">
              <span
                className="absolute top-0 left-0 flex size-[3.4rem] items-center justify-center rounded-full bg-white text-brand-600 shadow-pop ring-2 ring-brand-200 md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              >
                <item.icon className="size-[22px]" strokeWidth={1.6} />
              </span>
              <div className={cn('rounded-[24px] bg-white p-5 shadow-card ring-1 ring-ink-900/[0.07] md:p-6', right ? 'md:col-start-2' : 'md:col-start-1')}>
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-ink-500">STEP {String(i + 1).padStart(2, '0')}</p>
                  {item.chip && <ChipTag chip={item.chip} />}
                </div>
                <h3 className="mt-2.5 text-[1.15rem] leading-snug font-semibold tracking-[-0.015em] text-ink-900">{item.title}</h3>
                <p className="mt-2 text-[0.9844rem] leading-relaxed text-ink-600">{item.text}</p>
              </div>
            </Reveal>
          )
        })}
      </ol>
      {closing && (
        <Reveal className="relative mt-8 flex pl-[4.5rem] md:justify-center md:pl-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[0.875rem] font-semibold text-ink-700 shadow-card ring-1 ring-ink-900/[0.08]">
            <RefreshCcw className="size-4 text-brand-500" aria-hidden="true" /> {closing}
          </span>
        </Reveal>
      )}
    </div>
  )
}
