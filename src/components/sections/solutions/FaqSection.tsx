import { Container } from '@/components/ui/Container'
import { FaqList } from '@/components/ui/Faq'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { SolutionAccent } from '@/data/solutionPages'
import type { Faq } from '@/lib/schema'
import { SectionTitle } from './SectionTitle'

/** Industry FAQ: heading on the left (sticky on desktop), accordion on the right. */
export function FaqSection({ id, accent, lead, faqs }: { id: string; accent: SolutionAccent; lead: string; faqs: Faq[] }) {
  return (
    <Section tone="mist" aria-labelledby={id}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle id={id} accent={accent} eyebrow="FAQ" title="Frequently asked questions" lead={lead} />
          </Reveal>
          <Reveal delay={80}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
