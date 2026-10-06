import type { CSSProperties, ReactNode } from 'react'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs'
import { Container } from '@/components/ui/Container'
import { Eyebrow, type Tone } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/cn'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

interface Props {
  /** The page's single <h1>. */
  title: ReactNode
  lead?: ReactNode
  eyebrow?: ReactNode
  eyebrowTone?: Tone
  crumbs?: Crumb[]
  align?: 'left' | 'center'
  /** Actions (buttons) or any extra content under the lead. */
  children?: ReactNode
  /** Optional right-hand visual (desktop). When set, the hero becomes a two-column split. */
  aside?: ReactNode
  id?: string
  className?: string
}

/**
 * Text-led page hero used by inner pages (Pricing, Blog, Demo, About, Contact, legal…).
 * Animates in with CSS only (no JS needed for first paint).
 */
export function PageHero({
  title,
  lead,
  eyebrow,
  eyebrowTone,
  crumbs,
  align = 'left',
  children,
  aside,
  id = 'page-heading',
  className,
}: Props) {
  const centered = align === 'center' && !aside
  return (
    <section aria-labelledby={id} className={cn('relative isolate overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20', className)}>
      <div className="absolute inset-0 -z-10 bg-dots opacity-60 mask-fade-b" aria-hidden="true" />
      <FlowBackdrop variant="band" className="-z-10 top-10 h-72 opacity-70" />
      <Container size="wide">
        {crumbs && (
          <div className="hero-in mb-8" style={delay(0)}>
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        <div className={cn(aside ? 'grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14' : '')}>
          <div className={cn('flex flex-col', centered ? 'mx-auto max-w-3xl items-center text-center' : 'max-w-3xl items-start')}>
            {eyebrow && (
              <div className="hero-in" style={delay(40)}>
                <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
              </div>
            )}
            <h1
              id={id}
              className={cn('text-h1 hero-in font-semibold tracking-[-0.034em] text-ink-900', eyebrow ? 'mt-5' : '')}
              style={delay(100)}
            >
              {title}
            </h1>
            {lead && (
              <p className="text-lead hero-in mt-5 max-w-2xl text-ink-600" style={delay(190)}>
                {lead}
              </p>
            )}
            {children && (
              <div className="hero-in mt-8 w-full" style={delay(280)}>
                {children}
              </div>
            )}
          </div>
          {aside && (
            <div className="hero-in-scale" style={delay(240)}>
              {aside}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
