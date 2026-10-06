import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { SectionIntro, SolutionAccent, SolutionStage, StageVariant } from '@/data/solutionPages'
import { SectionTitle } from './SectionTitle'
import { StageFlow } from './StageFlow'

interface Props extends SectionIntro {
  id: string
  accent: SolutionAccent
  variant: StageVariant
  nodes: 'number' | 'icon'
  stages: SolutionStage[]
  loopLabel?: string
}

/** Industry workflow: heading plus the StageFlow in the page's chosen style. */
export function WorkflowSection({ id, accent, eyebrow, title, lead, variant, nodes, stages, loopLabel }: Props) {
  return (
    <Section tone="white" aria-labelledby={id}>
      <Container>
        <Reveal>
          <SectionTitle id={id} accent={accent} eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <StageFlow className="mt-14 md:mt-16" stages={stages} variant={variant} nodes={nodes} accent={accent} loopLabel={loopLabel} />
      </Container>
    </Section>
  )
}
