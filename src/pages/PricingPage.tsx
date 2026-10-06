import { PageHero } from '@/components/layout/PageHero'
import { PricingPlans } from '@/components/sections/company/PricingPlans'
import { CoreFlowStrip, EnterpriseBlock } from '@/components/sections/company/PricingExtras'
import { PricingTable } from '@/components/sections/company/PricingTable'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { CtaBand } from '@/components/ui/CtaBand'
import { FaqList } from '@/components/ui/Faq'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TextLink } from '@/components/ui/Button'
import { PLANS, PRICING_FAQS } from '@/data/pricing'
import { breadcrumbSchema, faqSchema, webPageSchema } from '@/lib/schema'

const TITLE = 'Pricing Plans for Field Teams | FSMFlow'
const DESCRIPTION =
  'Compare FSMFlow plans for HVAC, AC and field service teams: Starter, Growth and Enterprise. See what each includes and book a demo to confirm pricing.'

export default function PricingPage() {
  // Placeholder note disappears automatically once real prices are added in data/pricing.ts.
  const pricesPending = PLANS.some((p) => p.pricingMode === 'per-unit' && p.price === null)

  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/pricing"
        jsonLd={[
          webPageSchema({ name: 'FSMFlow pricing', description: DESCRIPTION, path: '/pricing' }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
          faqSchema(PRICING_FAQS),
        ]}
      />

      <PageHero
        eyebrow="Pricing"
        title="Pricing for every size of field team"
        lead="Three plans, from a small AC service team to a business with many branches. Pick a starting point, then book a demo to confirm the right fit and your exact price."
        align="center"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      <Section tone="transparent" spacing="none" aria-labelledby="plans-heading" className="pt-2 pb-16 md:pb-24">
        <Container size="wide">
          <h2 id="plans-heading" className="sr-only">
            Plans
          </h2>
          <PricingPlans />
          {pricesPending && (
            <Reveal>
              <p className="mx-auto mt-12 max-w-2xl text-center text-[0.9375rem] leading-relaxed text-ink-500 lg:mt-14">
                Prices are shown here once they are confirmed. Until then, ask for a quote for your team size when you book a demo.
              </p>
            </Reveal>
          )}
        </Container>
      </Section>

      <Section tone="white" spacing="none" aria-labelledby="flow-heading" className="pb-16 md:pb-24">
        <Container size="wide">
          <Reveal>
            <CoreFlowStrip />
          </Reveal>
        </Container>
      </Section>

      <Section tone="white" spacing="none" aria-labelledby="compare-heading" className="pb-20 md:pb-28">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              id="compare-heading"
              eyebrow="Compare"
              title="Compare plans side by side"
              lead="Plan contents are indicative. Your demo confirms exactly what each plan includes for your team."
            />
          </Reveal>
          <div className="mt-10 md:mt-12">
            <PricingTable />
          </div>
        </Container>
      </Section>

      <Section tone="mist" aria-labelledby="enterprise-heading">
        <Container size="wide">
          <Reveal variant="scale">
            <EnterpriseBlock />
          </Reveal>
        </Container>
      </Section>

      <Section tone="white" aria-labelledby="faq-heading">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <Reveal>
              <SectionHeading
                id="faq-heading"
                eyebrow="Pricing FAQ"
                title="Questions about pricing"
                lead="Straight answers on how pricing works. Where something depends on your team, we say so and confirm it in your demo."
              />
              <p className="mt-6 text-[0.9375rem] text-ink-600">
                Planning to cancel later? Read the <TextLink href="/refund-policy">Refund / Cancellation Policy</TextLink>
              </p>
            </Reveal>
            <Reveal delay={90}>
              <FaqList items={PRICING_FAQS} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Find the right plan for your team"
        text="Book a demo and see how jobs, technicians, spare parts, invoices and AMC fit together. We will confirm the plan and price for your team size."
        secondary={{ label: 'Talk to us', href: '/contact' }}
      />
    </>
  )
}
