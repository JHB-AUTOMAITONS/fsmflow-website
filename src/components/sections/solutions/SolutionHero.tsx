import type { ComponentType, CSSProperties } from 'react'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import type { SolutionPageContent } from '@/data/solutionPages'
import type { SolutionMeta } from '@/data/solutions'
import { cn } from '@/lib/cn'
import { ACCENT } from './accent'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

interface Props {
  solution: SolutionMeta
  content: SolutionPageContent
  Visual: ComponentType<{ className?: string }>
  id: string
}

/**
 * Industry hero. The H1 is the exact primary keyword with one accent word.
 * Text enters with CSS (`.hero-in`) so first paint never waits for JavaScript.
 */
export function SolutionHero({ solution, content, Visual, id }: Props) {
  const a = ACCENT[content.accent]
  const Icon = solution.icon
  const at = solution.h1.indexOf(content.h1Accent)
  const before = at > 0 ? solution.h1.slice(0, at) : ''
  const after = at >= 0 ? solution.h1.slice(at + content.h1Accent.length) : solution.h1

  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-dots opacity-70 mask-fade-b" aria-hidden="true" />
      <FlowBackdrop variant="hero" className="-z-10 top-20 h-[620px] opacity-60 lg:left-[34%] lg:w-auto" />

      <Container size="wide">
        <div className="hero-in mb-8 md:mb-10" style={delay(0)}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions' }, { label: solution.h1 }]} />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.14fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl lg:max-w-none">
            <div className="hero-in" style={delay(40)}>
              <span className="inline-flex max-w-full items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 text-[0.8125rem] font-semibold text-ink-800 shadow-card ring-1 ring-ink-900/[0.07]">
                <span className={cn('flex size-6 shrink-0 items-center justify-center rounded-full ring-2 ring-white', a.soft, a.text)}>
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                <span className="min-w-0">{content.eyebrow}</span>
              </span>
            </div>

            <h1
              id={id}
              className="hero-in mt-6 text-[clamp(2.3rem,1.15rem+2.9vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.038em] text-ink-900"
              style={delay(100)}
            >
              {before}
              <span className={cn('bg-linear-to-r bg-clip-text text-transparent', a.heading)}>{content.h1Accent}</span>
              {after}
            </h1>

            <p className="text-lead hero-in mt-6 max-w-xl text-ink-600" style={delay(190)}>
              {content.lead}
            </p>

            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(280)}>
              <ButtonLink href="/demo" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href={content.secondaryCta.href} size="lg" variant="secondary" arrow={false}>
                {content.secondaryCta.label}
              </ButtonLink>
            </div>

            <ul className="hero-in mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink-900/[0.08] pt-6" style={delay(380)}>
              {content.heroPoints.map((p) => (
                <li key={p.label} className="flex items-center gap-2.5 text-[0.9375rem] font-medium text-ink-700">
                  <IconTile icon={p.icon} tone={a.icon} size="sm" />
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-[700px] lg:max-w-none">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-x-6 -top-10 -bottom-10 -z-10" aria-hidden="true">
                <div className={cn('absolute top-4 right-0 size-72 rounded-full blur-3xl', a.blobA)} />
                <div className={cn('absolute bottom-0 left-6 size-72 rounded-full blur-3xl', a.blobB)} />
              </div>
              <div className="hero-in-scale" style={delay(220)}>
                <Visual />
              </div>
            </div>
            <p className="mt-6 text-center text-[11px] text-ink-500 lg:text-right">Illustrative product visual · sample data</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
