import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { FeaturePageContent } from '@/data/featurePages'
import { CapabilityBento, CapabilityRail, CapabilitySplit, CapabilitySteps, CapabilityTimeline } from './CapabilityLayouts'

/**
 * "What it does" — six capabilities, laid out in the shape that suits the content
 * (split rows, bento, numbered steps, a ruled rail or a lifecycle timeline).
 * Carries the page's keyword H2.
 */
export function CapabilitiesSection({ content }: { content: FeaturePageContent['capabilities'] }) {
  const { layout, tone, title, lead, items, aside, closing } = content
  const centered = layout === 'steps' || layout === 'timeline'
  const heading = (
    <Reveal>
      <SectionHeading
        eyebrow={layout === 'steps' ? 'How it works' : layout === 'timeline' ? 'The contract lifecycle' : 'What it does'}
        title={title}
        lead={lead}
        id="capabilities-heading"
        align={centered ? 'center' : 'left'}
      />
    </Reveal>
  )

  return (
    <Section tone={tone} aria-labelledby="capabilities-heading">
      <Container>
        {layout === 'rail' ? (
          <CapabilityRail items={items} aside={aside} heading={heading} />
        ) : (
          <>
            {heading}
            {layout === 'split' && <CapabilitySplit items={items} />}
            {layout === 'bento' && <CapabilityBento items={items} />}
            {layout === 'steps' && <CapabilitySteps items={items} />}
            {layout === 'timeline' && <CapabilityTimeline items={items} closing={closing} />}
          </>
        )}
      </Container>
    </Section>
  )
}
