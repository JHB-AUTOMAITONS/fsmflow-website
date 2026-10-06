import { Seo } from '@/components/seo/Seo'
import { CtaBand } from '@/components/ui/CtaBand'
import { SITE } from '@/data/site'
import { faqSchema, organizationSchema, softwareSchema, webPageSchema, websiteSchema } from '@/lib/schema'
import { BeforeAfter } from '@/sections/home/BeforeAfter'
import { FeaturesSection } from '@/sections/home/FeaturesSection'
import { Hero } from '@/sections/home/Hero'
import { HOME_FAQS, HomeFaq } from '@/sections/home/HomeFaq'
import { HvacSection } from '@/sections/home/HvacSection'
import { IndustryStrip } from '@/sections/home/IndustryStrip'
import { ProductShowcase } from '@/sections/home/ProductShowcase'
import { SolutionsSection } from '@/sections/home/SolutionsSection'

const TITLE = 'Field Service Management Software India | FSMFlow'
const DESCRIPTION =
  'Field service management software for Indian service businesses. Manage technicians, jobs, customers, AMC and inventory in one platform, built for HVAC teams.'

export default function HomePage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/"
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          webPageSchema({ name: 'Field Service Management Software', description: DESCRIPTION, path: '/' }),
          softwareSchema({ name: `${SITE.name} — Field Service Management Software`, description: DESCRIPTION, path: '/' }),
          faqSchema(HOME_FAQS),
        ]}
      />
      <Hero />
      <IndustryStrip />
      <HvacSection />
      <ProductShowcase />
      <FeaturesSection />
      <SolutionsSection />
      <BeforeAfter />
      <HomeFaq />
      <CtaBand
        title="See FSMFlow run your service business"
        text="Book a demo and we will walk through the workflow for your team, starting with HVAC and AC service if that is your business."
        secondary={{ label: 'Explore HVAC solution', href: '/solutions/hvac-field-service-software' }}
        note="Tell us your industry and team size — we will tailor the walkthrough."
      />
    </>
  )
}
