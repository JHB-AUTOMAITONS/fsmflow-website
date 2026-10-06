import { useParams } from 'react-router'
import { NotFoundView } from '@/components/layout/NotFoundView'
import { SOLUTION_VISUALS } from '@/components/product/solution-visuals'
import { Seo } from '@/components/seo/Seo'
import { ChallengeSection } from '@/components/sections/solutions/ChallengeSection'
import { FaqSection } from '@/components/sections/solutions/FaqSection'
import { HvacBand } from '@/components/sections/solutions/HvacBand'
import { ModulesSection } from '@/components/sections/solutions/ModulesSection'
import { SolutionHero } from '@/components/sections/solutions/SolutionHero'
import { WorkflowSection } from '@/components/sections/solutions/WorkflowSection'
import { CtaBand } from '@/components/ui/CtaBand'
import { SOLUTION_PAGES } from '@/data/solutionPages'
import { HVAC_SOLUTION, getSolution } from '@/data/solutions'
import { breadcrumbSchema, faqSchema, softwareSchema, webPageSchema } from '@/lib/schema'

/**
 * Industry solution pages (CCTV, solar, construction, service business), driven
 * by `getSolution()` for the SEO fields and `SOLUTION_PAGES` for the content.
 * HVAC has its own bespoke page; unknown slugs fall through to the 404 view.
 */
export default function SolutionPage() {
  const { slug } = useParams()
  const solution = getSolution(slug)
  const content = slug ? SOLUTION_PAGES[slug] : undefined
  const Visual = slug ? SOLUTION_VISUALS[slug] : undefined

  if (!solution || !content || !Visual || solution.slug === HVAC_SOLUTION.slug) return <NotFoundView />

  return (
    <>
      <Seo
        title={solution.seoTitle}
        description={solution.seoDescription}
        path={solution.path}
        jsonLd={[
          webPageSchema({ name: solution.h1, description: solution.seoDescription, path: solution.path }),
          softwareSchema({ name: solution.h1, description: solution.seoDescription, path: solution.path }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: solution.h1, path: solution.path },
          ]),
          faqSchema(content.faqs),
        ]}
      />

      <SolutionHero solution={solution} content={content} Visual={Visual} id="solution-heading" />

      <ChallengeSection id="challenges-heading" accent={content.accent} {...content.challenges} />

      <WorkflowSection id="workflow-heading" accent={content.accent} {...content.workflow} />

      <ModulesSection id="modules-heading" accent={content.accent} {...content.modules} />

      <HvacBand id="hvac-heading" note={content.hvacNote} />

      <FaqSection id="faq-heading" accent={content.accent} lead={content.faqLead} faqs={content.faqs} />

      <CtaBand
        title={content.cta.title}
        text={content.cta.text}
        note={content.cta.note}
        secondary={{ label: 'See pricing', href: '/pricing' }}
      />
    </>
  )
}
