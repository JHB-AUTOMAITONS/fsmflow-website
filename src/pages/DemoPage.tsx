import { PageHero } from '@/components/layout/PageHero'
import { DemoExperience } from '@/components/sections/company/DemoExperience'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'

const TITLE = 'Book a Demo for Your Service Team | FSMFlow'
const DESCRIPTION =
  'Book a FSMFlow demo and see jobs, technicians, spare parts, invoices and AMC renewals in one place. Tell us about your team and we will tailor it.'

export default function DemoPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/demo"
        jsonLd={[
          webPageSchema({ name: 'Book a Demo', description: DESCRIPTION, path: '/demo' }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Book a Demo', path: '/demo' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Demo"
        title="Book a Demo"
        lead="See how an AC service business runs on FSMFlow, from the first customer call to the final invoice. Tell us about your team and we will tailor the walkthrough."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Book a Demo' }]}
        className="md:pb-10"
      />

      <Section tone="transparent" spacing="none" aria-label="Request a demo" className="pt-2 pb-20 md:pb-28">
        <Container size="wide">
          <DemoExperience />
        </Container>
      </Section>
    </>
  )
}
