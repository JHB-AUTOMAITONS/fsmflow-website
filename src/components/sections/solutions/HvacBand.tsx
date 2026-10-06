import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { SplitAc } from '@/components/illustrations/Hvac'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { HVAC_SOLUTION } from '@/data/solutions'

/**
 * Slim cross-link to the HVAC page. HVAC is the platform's primary focus, so
 * every industry page points back to it without letting it take over the page.
 */
export function HvacBand({ id, note }: { id: string; note: string }) {
  return (
    <Section tone="white" spacing="none" className="pt-0 pb-12 md:pb-16" aria-labelledby={id}>
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-linear-to-br from-wash via-white to-aqua-50 ring-1 ring-ink-900/[0.07] shadow-card">
            <FlowBackdrop variant="band" className="-z-10 opacity-30 md:left-[40%] md:w-auto" />
            <div className="grid items-center gap-6 p-6 md:grid-cols-[12rem_minmax(0,1fr)_auto] md:gap-10 md:p-8">
              <SplitAc className="w-40 md:w-48" />
              <div className="min-w-0">
                <Eyebrow tone="aqua">Also on FSMFlow</Eyebrow>
                <h2 id={id} className="text-h3 mt-3 font-semibold text-ink-900">
                  FSMFlow also runs HVAC and AC service teams
                </h2>
                <p className="mt-2 max-w-xl leading-relaxed text-ink-600">{note}</p>
              </div>
              <ButtonLink href={HVAC_SOLUTION.path} variant="secondary" className="justify-self-start md:justify-self-end">
                HVAC field service software
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
