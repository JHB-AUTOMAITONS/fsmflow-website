import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { FeaturePageContent } from '@/data/featurePages'
import { getFeature } from '@/data/features'
import { getSolution } from '@/data/solutions'

/** Three related feature cards (each a keyword-anchored link) plus links to relevant solution pages. */
export function RelatedSection({
  related,
  solutions,
  tone,
}: {
  related: FeaturePageContent['related']
  solutions: FeaturePageContent['solutions']
  tone: 'white' | 'mist'
}) {
  const cards = related.flatMap((r) => {
    const f = getFeature(r.slug)
    return f ? [{ ...r, feature: f }] : []
  })
  const links = solutions.links.flatMap((l) => {
    const s = getSolution(l.slug)
    return s ? [{ ...l, solution: s }] : []
  })

  return (
    <Section tone={tone} spacing="tight" aria-labelledby="related-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Connected modules"
            title="Works with the rest of FSMFlow"
            lead="Every module shares the same customer, job and asset records, so nothing is typed twice."
            id="related-heading"
          />
        </Reveal>

        <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 90}>
              <div className="group/card flex h-full flex-col rounded-[28px] bg-white p-6 shadow-card ring-1 ring-ink-900/[0.07] transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift md:p-7">
                <IconTile icon={c.feature.icon} tone={(['brand', 'aqua', 'iris'] as const)[i % 3]} size="lg" />
                <h3 className="mt-5 text-[1.2rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900">{c.feature.h1}</h3>
                <p className="mt-2 flex-1 text-[0.9844rem] leading-relaxed text-ink-600">{c.line}</p>
                <TextLink href={c.feature.path} className="mt-5 min-h-11 self-start">
                  {c.anchor}
                </TextLink>
              </div>
            </Reveal>
          ))}
        </ul>

        {links.length > 0 && (
          <Reveal className="mt-8 flex flex-col gap-3 rounded-[24px] bg-white/80 p-5 ring-1 ring-ink-900/[0.07] md:flex-row md:items-center md:gap-6 md:px-7">
            <p className="text-[0.9844rem] text-ink-600">{solutions.intro}</p>
            <div className="flex flex-wrap gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.slug}
                  to={l.solution.path}
                  className="group/pill inline-flex min-h-11 items-center gap-2 rounded-full bg-mist px-4 text-[0.9375rem] font-semibold text-ink-800 ring-1 ring-ink-900/[0.08] transition-[background-color,box-shadow,color] duration-300 hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                >
                  <l.solution.icon className="size-4 text-brand-500" strokeWidth={1.8} aria-hidden="true" />
                  {l.anchor}
                  <ArrowUpRight className="size-4 text-ink-300 transition-transform duration-300 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 group-hover/pill:text-brand-500" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  )
}
