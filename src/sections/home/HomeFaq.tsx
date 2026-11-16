import { Container } from '@/components/ui/Container'
import { FaqList } from '@/components/ui/Faq'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Faq } from '@/lib/schema'

export const HOME_FAQS: Faq[] = [
  {
    q: 'What is field service management software?',
    a: 'Field service management software helps businesses that send technicians to customer locations run that work from one system. It covers requests and quotations, job scheduling and assignment, technician tracking, spare parts and inventory, invoicing and payments, and recurring service such as AMC. FSMFlow brings these together in one connected workflow for Indian service businesses.',
  },
  {
    q: 'Who is FSMFlow built for?',
    a: 'FSMFlow is built for Indian service businesses with field teams. HVAC and AC service companies are the primary focus, and the platform also supports CCTV installers, solar companies, construction contractors and other service businesses.',
  },
  {
    q: 'How does FSMFlow help HVAC and AC service companies?',
    a: 'It manages AC installation, repair, preventive maintenance and breakdown jobs, assigns technicians, tracks spare parts, handles quotations and invoices, and stores AMC and warranty details for every unit, with reminders before renewals are due.',
  },
  {
    q: 'Is there a mobile app for technicians?',
    a: 'Yes. The field service app gives technicians their jobs, customer details, checklists, parts and sign-off on a phone, and keeps the office updated as each job progresses.',
  },
  {
    q: 'Can I manage AMC contracts and warranty in FSMFlow?',
    a: 'Yes. Warranty and AMC details are stored against each customer asset, with scheduled service visits and renewal reminders, so you can see what is covered and what is due.',
  },
  {
    q: 'How do I get started with FSMFlow?',
    a: 'Book a demo. We will walk through FSMFlow using your type of business, show how jobs, technicians, parts and AMC work together, and answer your questions about setup and pricing.',
  },
  {
    q: 'What should I look for when choosing field service management software?',
    a: 'Check that it covers the whole job rather than one step. Look for a technician mobile app, work orders with checklists, equipment records with service history, technician scheduling by skill and workload, spare parts tracking, preventive maintenance and AMC, and quotations and invoicing in the same system. Then ask to see it using your own kind of job. FSMFlow is designed around exactly this flow.',
  },
  {
    q: 'Can the office see job progress without calling technicians?',
    a: 'Yes. Technicians update each job from the field service app as it moves from assigned to en route, in progress and completed, and the office sees the same status on the job screen. Checklists, photos and parts used are attached to the job as the work happens.',
  },
  {
    q: 'What reports does FSMFlow provide?',
    a: 'FSMFlow reports on open, completed and pending jobs, revenue and pending payments, technician productivity, part usage and AMC renewals. Which reports you get depends on your plan, so confirm it in the demo. If you are comparing FSM software, ask to see these on sample data from your own trade.',
  },
]

export function HomeFaq() {
  return (
    <section id="faq" aria-labelledby="home-faq-heading" className="relative bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="home-faq-heading"
              eyebrow="FAQ"
              title="Questions teams ask before they book a demo"
              lead="Short answers about what FSMFlow does and who it is for."
            />
          </Reveal>
          <Reveal delay={100}>
            <FaqList items={HOME_FAQS} />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
