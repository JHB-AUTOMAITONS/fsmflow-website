import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { SplitAc } from '@/components/illustrations/Hvac'
import { Bezel } from '@/components/ui/Bezel'
import { ButtonLink } from '@/components/ui/Button'
import { CheckList } from '@/components/ui/CheckList'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HVAC_SOLUTION, SOLUTIONS } from '@/data/solutions'

const BLURB: Record<string, string> = {
  'cctv-software': 'Site surveys, camera installations, handover records and AMC visits for security installers.',
  'solar-software': 'Leads, site surveys, installation projects and after-sales service for solar EPC teams.',
  'construction-management-software': 'Enquiries, quotations, site crews, materials and payments across every project.',
  'service-business-management-software': 'Scheduling, dispatch, quotations and payments for any team that visits customers.',
}

/** One platform, five industries — HVAC gets the 2×2 hero tile. */
export function SolutionsSection() {
  const others = SOLUTIONS.filter((s) => s.slug !== HVAC_SOLUTION.slug)
  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="relative bg-mist py-20 md:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="solutions-heading"
            eyebrow="Solutions"
            title="One platform for every kind of service team"
            lead="FSMFlow started with the daily reality of HVAC and AC service. The same flow of requests, jobs, technicians, parts and payments runs CCTV, solar, construction and other field service businesses."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="md:col-span-2 lg:row-span-2">
            <Bezel radius="xl" interactive className="h-full" coreClassName="relative flex h-full flex-col overflow-hidden bg-linear-to-br from-brand-50 via-white to-aqua-50 p-6 md:p-9">
              <div className="pointer-events-none absolute -right-20 -bottom-24 size-80 rounded-full bg-aqua-200/40 blur-3xl" aria-hidden="true" />
              <Eyebrow tone="brand">Primary focus</Eyebrow>
              <h3 className="mt-5 text-h2 font-semibold text-ink-900">
                <Link to={HVAC_SOLUTION.path} className="hover:text-brand-700">
                  {HVAC_SOLUTION.h1}
                </Link>
              </h3>
              <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-ink-600">
                From AC installation to AMC renewals, FSMFlow gives HVAC companies one system for jobs, technicians, spare parts, quotations and
                payments.
              </p>
              <CheckList
                className="mt-6"
                items={['Installation, repair and breakdown jobs', 'AMC contracts and warranty tracking', 'Spare parts on every van']}
              />
              <div className="relative mt-8 flex flex-1 items-end justify-between gap-6">
                <ButtonLink href={HVAC_SOLUTION.path}>Explore HVAC</ButtonLink>
                <SplitAc still className="-mb-3 hidden w-52 sm:block" title="Wall-mounted split AC unit illustration" />
              </div>
            </Bezel>
          </Reveal>

          {others.map((s, i) => (
            <Reveal key={s.slug} delay={(i + 1) * 70}>
              <Link to={s.path} className="group/sol block h-full rounded-[28px]">
                <Bezel interactive className="h-full" coreClassName="flex h-full flex-col p-5 md:p-6">
                  <div className="flex items-start justify-between">
                    <IconTile icon={s.icon} tone="brand" size="lg" />
                    <span className="flex size-9 items-center justify-center rounded-full bg-ink-900/[0.04] text-ink-500 transition-[transform,background-color,color] duration-500 ease-premium group-hover/sol:translate-x-0.5 group-hover/sol:-translate-y-0.5 group-hover/sol:bg-brand-600 group-hover/sol:text-white">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.1875rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900">{s.h1}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{BLURB[s.slug]}</p>
                </Bezel>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
