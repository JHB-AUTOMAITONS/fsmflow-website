import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getFeature } from '@/data/features'
import { SOLUTIONS } from '@/data/solutions'

const RELATED: { slug: string; text: string }[] = [
  { slug: 'work-order-management-software', text: 'Create, assign and track every installation, repair and maintenance job.' },
  { slug: 'field-service-app', text: 'Give technicians jobs, checklists, parts and sign-off on their phones.' },
  { slug: 'warranty-management-software', text: 'Track warranty, AMC contracts, scheduled visits and renewals.' },
  { slug: 'inventory-management-software', text: 'Manage spare parts across warehouse and vans with low-stock alerts.' },
  { slug: 'quotation-software', text: 'Send quotations quickly, convert them to jobs and follow up on payments.' },
  { slug: 'reporting-software', text: 'See revenue, jobs, technician productivity and renewals at a glance.' },
]

/** Internal links to the feature pages HVAC teams use most, plus the other industry solutions. */
export function HvacRelated() {
  const others = SOLUTIONS.filter((s) => s.slug !== 'hvac-field-service-software')
  return (
    <section aria-labelledby="hvac-related-heading" className="relative bg-white py-20 md:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="hvac-related-heading"
            eyebrow="Connected modules"
            title="The modules HVAC teams use every day"
            lead="HVAC software works best when every part shares the same customer, unit and job record. These FSMFlow modules are built to work together."
          />
        </Reveal>

        <ul className="mt-12 grid gap-3 md:mt-14 md:grid-cols-2 md:gap-4">
          {RELATED.map((r, i) => {
            const f = getFeature(r.slug)
            if (!f) return null
            return (
              <Reveal as="li" key={r.slug} delay={(i % 2) * 70}>
                <Link
                  to={f.path}
                  className="group/rel flex items-center gap-4 rounded-[24px] bg-mist p-4 ring-1 ring-ink-900/[0.05] transition-[background-color,box-shadow,transform] duration-500 ease-premium hover:-translate-y-0.5 hover:bg-white hover:shadow-lift md:p-5"
                >
                  <IconTile icon={f.icon} size="lg" tone="brand" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-900">{f.h1}</span>
                    <span className="mt-0.5 block text-[0.9375rem] leading-snug text-ink-600">{r.text}</span>
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-ink-500 shadow-card ring-1 ring-ink-900/[0.06] transition-[transform,background-color,color] duration-500 ease-premium group-hover/rel:translate-x-0.5 group-hover/rel:-translate-y-0.5 group-hover/rel:bg-brand-600 group-hover/rel:text-white">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>

        <Reveal className="mt-12">
          <p className="text-[0.9688rem] leading-relaxed text-ink-600">
            FSMFlow also runs other field teams:{' '}
            {others.map((s, i) => (
              <span key={s.slug}>
                <Link to={s.path} className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600">
                  {s.primaryKeyword}
                </Link>
                {i < others.length - 2 ? ', ' : i === others.length - 2 ? ' and ' : '.'}
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
