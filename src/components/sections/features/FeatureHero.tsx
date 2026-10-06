import type { CSSProperties } from 'react'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { FEATURE_VISUALS } from '@/components/product/feature-visuals'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ButtonLink } from '@/components/ui/Button'
import { CheckList } from '@/components/ui/CheckList'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { IconTile } from '@/components/ui/IconTile'
import type { FeaturePageContent } from '@/data/featurePages'
import type { FeatureMeta } from '@/data/features'
import { HVAC_SOLUTION } from '@/data/solutions'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/** Splits the H1 so its last word can carry the brand gradient while the text stays the exact keyword. */
function splitTitle(h1: string) {
  const i = h1.lastIndexOf(' ')
  return i === -1 ? { head: '', tail: h1 } : { head: h1.slice(0, i + 1), tail: h1.slice(i + 1) }
}

/**
 * Feature page hero: breadcrumb, module eyebrow, the exact-keyword H1, lead, three benefit
 * bullets, CTAs and the feature's signature product visual (stacked below on mobile).
 */
export function FeatureHero({ feature, content }: { feature: FeatureMeta; content: FeaturePageContent }) {
  const Visual = FEATURE_VISUALS[feature.slug]
  const { head, tail } = splitTitle(feature.h1)
  return (
    <section aria-labelledby="feature-heading" className="relative isolate overflow-hidden pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-70 mask-fade-b" aria-hidden="true" />
      <FlowBackdrop variant="hero" className="-z-10 top-16 hidden h-[580px] opacity-60 lg:left-[30%] lg:block lg:w-auto lg:opacity-70" />

      <Container size="wide">
        <div className="hero-in mb-8 md:mb-10" style={delay(0)}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Features' }, { label: feature.h1 }]} />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl lg:max-w-none">
            <div className="hero-in" style={delay(40)}>
              <span className="inline-flex items-center gap-2.5">
                <IconTile icon={feature.icon} tone="solid" size="sm" />
                <Eyebrow>{content.eyebrow}</Eyebrow>
              </span>
            </div>

            <h1
              id="feature-heading"
              className="hero-in mt-6 text-[clamp(2.3rem,1.15rem+2.9vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.038em] text-ink-900"
              style={delay(100)}
            >
              {head}
              <span className="text-gradient">{tail}</span>
            </h1>

            <p className="text-lead hero-in mt-6 max-w-xl text-ink-600" style={delay(190)}>
              {content.lead}
            </p>

            <div className="hero-in mt-7 max-w-xl" style={delay(260)}>
              <CheckList tone="brand" items={content.bullets} itemClassName="text-[1rem] text-ink-700" className="space-y-2.5" />
            </div>

            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(340)}>
              <ButtonLink href="/demo" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href={HVAC_SOLUTION.path} size="lg" variant="secondary" arrow={false}>
                See it for HVAC
              </ButtonLink>
            </div>
          </div>

          {Visual && (
            <div className="mx-auto w-full max-w-[700px] lg:max-w-none">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-x-6 -top-10 -bottom-10 -z-10" aria-hidden="true">
                  <div className="absolute top-4 right-0 size-72 rounded-full bg-aqua-200/40 blur-3xl" />
                  <div className="absolute bottom-0 left-6 size-72 rounded-full bg-iris-200/40 blur-3xl" />
                </div>
                <div className="hero-in-scale" style={delay(220)}>
                  <Visual />
                </div>
              </div>
              <p className="mt-6 text-center text-[11px] text-ink-500 lg:mt-16 lg:text-right">Illustrative product visual · sample data</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
