import { useParams } from 'react-router'
import { NotFoundView } from '@/components/layout/NotFoundView'
import { Seo } from '@/components/seo/Seo'
import { BenefitsSection } from '@/components/sections/features/BenefitsSection'
import { CapabilitiesSection } from '@/components/sections/features/CapabilitiesSection'
import { FaqSection } from '@/components/sections/features/FaqSection'
import { FeatureHero } from '@/components/sections/features/FeatureHero'
import { HvacSection } from '@/components/sections/features/HvacSection'
import { RelatedSection } from '@/components/sections/features/RelatedSection'
import { CtaBand } from '@/components/ui/CtaBand'
import { FEATURE_PAGES } from '@/data/featurePages'
import { getFeature } from '@/data/features'
import { HVAC_SOLUTION } from '@/data/solutions'
import { breadcrumbSchema, faqSchema, softwareSchema, webPageSchema } from '@/lib/schema'

/**
 * Data-driven feature page (/features/:slug). Content lives in data/featurePages.ts,
 * each feature's signature mockup in components/product/feature-visuals. Unknown slugs 404.
 */
export default function FeaturePage() {
  const { slug } = useParams()
  const feature = getFeature(slug)
  const content = feature ? FEATURE_PAGES[feature.slug] : undefined
  if (!feature || !content) return <NotFoundView />

  // Section backgrounds alternate, starting from the capabilities tone chosen for this page.
  const a = content.capabilities.tone
  const b = a === 'white' ? 'mist' : 'white'

  return (
    <>
      <Seo
        title={feature.seoTitle}
        description={feature.seoDescription}
        path={feature.path}
        jsonLd={[
          webPageSchema({ name: feature.seoTitle, description: feature.seoDescription, path: feature.path }),
          softwareSchema({ name: feature.h1, description: feature.seoDescription, path: feature.path }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: feature.h1, path: feature.path },
          ]),
          faqSchema(content.faqs),
        ]}
      />
      <FeatureHero feature={feature} content={content} />
      <CapabilitiesSection content={content.capabilities} />
      <BenefitsSection content={content.benefits} tone={b} />
      <HvacSection content={content.hvac} tone={a} />
      <RelatedSection related={content.related} solutions={content.solutions} tone={b} />
      <FaqSection faqs={content.faqs} tone={a} />
      <CtaBand
        title={content.cta.title}
        text={content.cta.text}
        secondary={{ label: 'See it for HVAC', href: HVAC_SOLUTION.path }}
        note="A short walkthrough with sample data from an HVAC service business."
      />
    </>
  )
}
