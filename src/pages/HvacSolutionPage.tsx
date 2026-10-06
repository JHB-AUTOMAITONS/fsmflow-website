import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { CtaBand } from '@/components/ui/CtaBand'
import { FaqList } from '@/components/ui/Faq'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HVAC_SOLUTION } from '@/data/solutions'
import { breadcrumbSchema, faqSchema, softwareSchema, webPageSchema, type Faq } from '@/lib/schema'
import { AnimatedFlow } from '@/sections/hvac/AnimatedFlow'
import { HVAC_FLOW } from '@/sections/hvac/flows'
import { HvacAmc } from '@/sections/hvac/HvacAmc'
import { HvacHero } from '@/sections/hvac/HvacHero'
import { HvacInventory } from '@/sections/hvac/HvacInventory'
import { HvacProblems } from '@/sections/hvac/HvacProblems'
import { HvacRelated } from '@/sections/hvac/HvacRelated'
import { HvacReports } from '@/sections/hvac/HvacReports'
import { HvacTechApp } from '@/sections/hvac/HvacTechApp'

const FAQS: Faq[] = [
  {
    q: 'What is HVAC field service software?',
    a: 'HVAC field service software helps air conditioning, heating and ventilation companies run installation, repair, preventive maintenance and AMC work from one system. It covers service requests, quotations, technician scheduling, job tracking, spare parts, invoices, payments and contract renewals, so the office and the technicians work from the same information.',
  },
  {
    q: 'How does FSMFlow manage AMC contracts for AC service?',
    a: 'Each AMC contract records the customer, the units covered, the validity period and the visit schedule. FSMFlow creates the scheduled visits, shows what has been completed and sends renewal reminders before the contract ends, so repeat revenue does not depend on someone remembering.',
  },
  {
    q: 'Can technicians use FSMFlow on their phones?',
    a: 'Yes. The field service app gives technicians their jobs, customer and unit details, checklists, parts and customer sign-off on a phone. The office sees status updates as the job moves from assigned to en route, in progress and completed.',
  },
  {
    q: 'Can I track spare parts used on each AC job?',
    a: 'Yes. Parts used are recorded against the job and the unit, deducted from warehouse or van stock and carried onto the invoice. Minimum stock levels trigger low-stock alerts for common parts such as capacitors, gas and PCBs.',
  },
  {
    q: 'Does FSMFlow work for AC installation companies as well as service companies?',
    a: 'Yes. Installation businesses can manage enquiries, site visits, quotations and installation jobs with checklists and a handover record, then move the customer into AMC and service. Service-only companies can start with jobs, technicians and AMC.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a demo. We will walk through FSMFlow with examples from your own work, such as installation, repair and AMC jobs, and discuss how your team and data would move across.',
  },
]

const DESCRIPTION = HVAC_SOLUTION.seoDescription

export default function HvacSolutionPage() {
  return (
    <>
      <Seo
        title={HVAC_SOLUTION.seoTitle}
        description={DESCRIPTION}
        path={HVAC_SOLUTION.path}
        jsonLd={[
          webPageSchema({ name: HVAC_SOLUTION.h1, description: DESCRIPTION, path: HVAC_SOLUTION.path }),
          softwareSchema({ name: HVAC_SOLUTION.h1, description: DESCRIPTION, path: HVAC_SOLUTION.path }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: HVAC_SOLUTION.h1, path: HVAC_SOLUTION.path },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <HvacHero />
      <HvacProblems />

      <section id="workflow" aria-labelledby="hvac-workflow-heading" className="relative overflow-hidden bg-white py-20 md:py-32">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              id="hvac-workflow-heading"
              align="center"
              eyebrow="The HVAC workflow"
              title="From lead to AMC, in one connected flow"
              lead="AC service management software has to follow the job all the way: enquiry, quotation, work order, technician, parts, invoice, payment and then the next scheduled visit. Select any stage to see what it looks like in FSMFlow."
            />
          </Reveal>
          <Reveal className="mt-20 md:mt-24" variant="scale">
            <AnimatedFlow
              stages={HVAC_FLOW}
              loop={{ from: 8, to: 2, label: 'Scheduled visits repeat' }}
              ariaLabel="HVAC workflow stages: lead, quotation, job, technician, service, parts, invoice, payment and AMC"
              autoMs={3800}
            />
          </Reveal>
        </Container>
      </section>

      <HvacTechApp />
      <HvacAmc />
      <HvacInventory />
      <HvacReports />
      <HvacRelated />

      <section id="faq" aria-labelledby="hvac-faq-heading" className="relative bg-mist py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <Reveal>
              <SectionHeading
                id="hvac-faq-heading"
                eyebrow="HVAC FAQ"
                title="Common questions from HVAC companies"
                lead="How FSMFlow fits AC installation, repair and AMC businesses."
              />
            </Reveal>
            <Reveal delay={100}>
              <FaqList items={FAQS} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Run your HVAC business on one flow"
        text="Book a demo and see FSMFlow with your own installation, repair and AMC jobs: from the first call to the next scheduled visit."
        primary={{ label: 'Book a Demo', href: '/demo?industry=hvac' }}
        secondary={{ label: 'Back to home', href: '/' }}
        note="HVAC is FSMFlow’s primary focus — your walkthrough will use AC and HVAC examples."
      />
    </>
  )
}
