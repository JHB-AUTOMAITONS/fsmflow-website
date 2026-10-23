import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { Bezel } from '@/components/ui/Bezel'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { COUNTRIES } from '@/data/countries'

/** Crawlable links from the home page to every country landing page. */
export function CountriesSection() {
  return (
    <section id="countries" aria-labelledby="countries-heading" className="relative bg-white py-20 md:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="countries-heading"
            eyebrow="Countries"
            title="Field Service Management Software for Global Service Businesses"
            lead="Service teams outside India run the same cycle of requests, jobs, technicians and follow-ups. Choose your country to see how FSMFlow fits the way your operation works."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link to={c.path} className="group/ctry block h-full rounded-[28px]">
                <Bezel interactive className="h-full" coreClassName="flex h-full flex-col p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.1875rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900">{c.h1}</h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-900/[0.04] text-ink-500 transition-colors group-hover/ctry:bg-brand-600 group-hover/ctry:text-white">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{c.tagline}</p>
                </Bezel>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
