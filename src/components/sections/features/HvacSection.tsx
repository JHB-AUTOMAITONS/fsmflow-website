import { Link } from 'react-router'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { SplitAc } from '@/components/illustrations/Hvac'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { IconTile, type IconTone } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { FeaturePageContent } from '@/data/featurePages'
import { HVAC_SOLUTION } from '@/data/solutions'

const TONES: IconTone[] = ['aqua', 'brand', 'iris', 'heat']

/**
 * "How HVAC teams use it" — HVAC is FSMFlow's primary industry, so every feature page
 * carries a specific, feature-relevant callout that links to the HVAC solution page.
 */
export function HvacSection({ content, tone }: { content: FeaturePageContent['hvac']; tone: 'white' | 'mist' }) {
  const { title, intro, scenarios } = content
  return (
    <Section tone={tone} spacing="tight" aria-labelledby="hvac-heading">
      <Container>
        <Reveal
          variant="scale"
          className="relative isolate overflow-hidden rounded-[32px] bg-linear-to-br from-aqua-50 via-white to-brand-50 p-6 ring-1 ring-aqua-100 shadow-card md:rounded-[44px] md:p-12"
        >
          <FlowBackdrop variant="band" className="-z-10 opacity-60" />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
            <div>
              <Eyebrow tone="aqua">HVAC · AC service teams</Eyebrow>
              <h2 id="hvac-heading" className="text-h2 mt-5 max-w-xl font-semibold text-ink-900">
                {title}
              </h2>
              <p className="text-lead mt-5 max-w-xl text-ink-600">
                {intro[0]}
                <Link
                  to={HVAC_SOLUTION.path}
                  className="font-semibold text-brand-600 underline decoration-brand-200 decoration-2 underline-offset-4 transition-colors hover:text-brand-800 hover:decoration-brand-600"
                >
                  HVAC field service software
                </Link>
                {intro[1]}
              </p>
              <div className="mt-7 hidden max-w-[17rem] lg:block" aria-hidden="true">
                <SplitAc still />
              </div>
              <div className="mt-8">
                <ButtonLink href={HVAC_SOLUTION.path} variant="secondary" arrow="up-right">
                  Explore the HVAC solution
                </ButtonLink>
              </div>
            </div>

            <ul className="space-y-3">
              {scenarios.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-[24px] bg-white/90 p-5 shadow-card ring-1 ring-ink-900/[0.06] backdrop-blur-sm">
                  <IconTile icon={s.icon} tone={TONES[i % TONES.length]} size="md" />
                  <div className="min-w-0">
                    <h3 className="text-[1.0625rem] leading-snug font-semibold tracking-[-0.01em] text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-600">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
