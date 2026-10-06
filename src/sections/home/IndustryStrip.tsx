import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SOLUTIONS } from '@/data/solutions'
import { cn } from '@/lib/cn'

/** A slim "runs field work for…" band: factual, links to every industry solution. */
export function IndustryStrip() {
  return (
    <section aria-labelledby="industry-strip" className="relative border-y border-ink-900/[0.06] bg-white">
      <Container size="wide" className="py-7 md:py-8">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <p id="industry-strip" className="eyebrow-mono shrink-0 text-ink-500">
            Runs field work for
          </p>
          <ul className="no-scrollbar -mx-5 flex snap-x gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon
              return (
                <li key={s.slug} className="shrink-0 snap-start">
                  <Link
                    to={s.path}
                    className={cn(
                      'group/chip inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-[0.9375rem] font-semibold ring-1 transition-[transform,box-shadow,background-color] duration-500 ease-premium hover:-translate-y-0.5 hover:shadow-lift',
                      i === 0 ? 'bg-brand-50 text-brand-800 ring-brand-200' : 'bg-white text-ink-800 shadow-card ring-ink-900/[0.08] hover:ring-brand-300',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-8 items-center justify-center rounded-full',
                        i === 0 ? 'bg-brand-gradient text-white' : 'bg-ink-50 text-ink-600 group-hover/chip:bg-brand-50 group-hover/chip:text-brand-600',
                      )}
                    >
                      <Icon className="size-4" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    {s.navLabel === 'HVAC' ? 'HVAC & AC service' : s.navLabel === 'Service Businesses' ? 'Other service businesses' : s.navLabel}
                    <ArrowUpRight
                      className="size-3.5 text-ink-300 transition-[transform,color] duration-500 ease-premium group-hover/chip:translate-x-0.5 group-hover/chip:-translate-y-0.5 group-hover/chip:text-brand-600"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
