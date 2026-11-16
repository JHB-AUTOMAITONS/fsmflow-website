import { Seo } from '@/components/seo/Seo'
import { CtaBand } from '@/components/ui/CtaBand'
import { SITE } from '@/data/site'
import { faqSchema, organizationSchema, softwareSchema, webPageSchema, websiteSchema } from '@/lib/schema'
import { BeforeAfter } from '@/sections/home/BeforeAfter'
import { CountriesSection } from '@/sections/home/CountriesSection'
import { FeaturesSection } from '@/sections/home/FeaturesSection'
import { Hero } from '@/sections/home/Hero'
import { HOME_FAQS, HomeFaq } from '@/sections/home/HomeFaq'
import { GettingStarted } from '@/sections/home/GettingStarted'
import { HvacSection } from '@/sections/home/HvacSection'
import { IndustryStrip } from '@/sections/home/IndustryStrip'
import { OperationsLifecycle } from '@/sections/home/OperationsLifecycle'
import { ProductShowcase } from '@/sections/home/ProductShowcase'
import { SolutionsSection } from '@/sections/home/SolutionsSection'

const TITLE = 'Field Service Management Software for Businesses | FSMFlow'
const DESCRIPTION =
  'FSMFlow field service management software for Indian service businesses. Manage jobs, technicians, work orders, AMC and inventory in one FSM software platform.'

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
      <OperationsLifecycle />
      <HvacSection />
      <ProductShowcase />
      <FeaturesSection />
      <SolutionsSection />
      <BeforeAfter />
      <GettingStarted />
      <CountriesSection />
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
