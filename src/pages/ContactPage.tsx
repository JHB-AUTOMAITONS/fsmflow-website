import { PageHero } from '@/components/layout/PageHero'
import { ContactSection } from '@/components/sections/company/ContactSection'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'

const TITLE = 'Contact Us | FSMFlow'
const DESCRIPTION =
  'Contact the FSMFlow team for sales, support or partnership questions, or book a demo to see how FSMFlow works for your HVAC or service business.'

export default function ContactPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/contact"
        jsonLd={[
          webPageSchema({ name: 'Contact FSMFlow', description: DESCRIPTION, path: '/contact', type: 'ContactPage' }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="Contact FSMFlow"
        lead="Questions about FSMFlow, support or working together? Send us a message, or book a demo if you would like to see the product first."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        className="md:pb-10"
      />

      <Section tone="transparent" spacing="none" aria-label="Contact options and message form" className="pt-2 pb-20 md:pb-28">
        <Container size="wide">
          <ContactSection />
        </Container>
      </Section>
    </>
  )
}
