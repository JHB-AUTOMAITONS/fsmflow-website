import { PageHero } from '@/components/layout/PageHero'
import { BlogIndex } from '@/components/sections/company/BlogIndex'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { CtaBand } from '@/components/ui/CtaBand'
import { Section } from '@/components/ui/Section'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'

const TITLE = 'Blog: HVAC & Service Business Insights | FSMFlow'
const DESCRIPTION =
  'Practical articles for HVAC and service business owners: technician scheduling, AMC renewals, quotations, spare parts and the reports worth checking each week.'

export default function BlogPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/blog"
        jsonLd={[
          webPageSchema({ name: 'FSMFlow blog', description: DESCRIPTION, path: '/blog', type: 'Blog' }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Blog"
        title="FSMFlow blog"
        lead="Practical reading for HVAC and service business owners: scheduling, AMC renewals, quotations, spare parts and the reports worth checking each week."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        className="md:pb-10"
      />

      <Section tone="transparent" spacing="none" aria-labelledby="articles-heading" className="pt-2 pb-16 md:pb-24">
        <Container size="wide">
          <h2 id="articles-heading" className="sr-only">
            Articles
          </h2>
          <BlogIndex />
        </Container>
      </Section>

      <CtaBand
        title="See your own workflow in FSMFlow"
        text="Book a demo and we will walk through jobs, technicians, spare parts, invoices and AMC using examples from your trade."
        secondary={{ label: 'Contact us', href: '/contact' }}
      />
    </>
  )
}
