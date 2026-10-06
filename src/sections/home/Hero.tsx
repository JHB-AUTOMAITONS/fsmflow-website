import { Flame, Smartphone, Snowflake } from 'lucide-react'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Counter } from '@/components/ui/Counter'
import { HeroVisual } from './HeroVisual'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

/**
 * Home hero. H1 uses the exact primary keyword ("field service management
 * software"); HVAC is signalled by the eyebrow, supporting copy and visual.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 xl:pb-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-70 mask-fade-b" aria-hidden="true" />
      <FlowBackdrop variant="hero" className="-z-10 top-24 h-[620px] opacity-70 xl:left-[38%] xl:w-auto" />

      <Container size="wide">
        <div className="grid items-center gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] xl:gap-16">
          <div className="max-w-2xl xl:max-w-none">
            <div className="hero-in" style={delay(0)}>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 text-[0.8125rem] font-semibold text-ink-800 shadow-card ring-1 ring-ink-900/[0.07]">
                <span className="flex items-center -space-x-1.5">
                  <span className="flex size-6 items-center justify-center rounded-full bg-aqua-100 text-aqua-600 ring-2 ring-white">
                    <Snowflake className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-heat-100 text-heat-600 ring-2 ring-white">
                    <Flame className="size-3.5" aria-hidden="true" />
                  </span>
                </span>
                Built for HVAC, AC &amp; field service teams
              </span>
            </div>

            <h1
              id="hero-heading"
              className="hero-in mt-6 text-[clamp(2.3rem,1.15rem+2.9vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.038em] text-ink-900"
              style={delay(90)}
            >
              Field Service Management Software for <span className="text-gradient">Modern Service Businesses</span>
            </h1>

            <p className="text-lead hero-in mt-6 max-w-xl text-ink-600" style={delay(190)}>
              FSMFlow is field service management software built for Indian service businesses. Manage technicians, service jobs, customers,
              AMC, inventory and field operations from one powerful platform.
            </p>

            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(290)}>
              <ButtonLink href="/demo" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="#features" size="lg" variant="secondary" arrow={false}>
                Explore Features
              </ButtonLink>
            </div>

            <dl className="hero-in mt-12 grid max-w-xl grid-cols-3 gap-x-4 border-t border-ink-900/[0.08] pt-6" style={delay(400)}>
              <div className="flex flex-col-reverse">
                <dt className="mt-1.5 text-[0.8125rem] leading-snug text-ink-500">connected modules</dt>
                <dd className="font-display text-3xl leading-none font-semibold tracking-[-0.03em] text-ink-900">
                  <Counter to={9} />
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="mt-1.5 text-[0.8125rem] leading-snug text-ink-500">industry solutions</dt>
                <dd className="font-display text-3xl leading-none font-semibold tracking-[-0.03em] text-ink-900">
                  <Counter to={5} />
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="mt-1.5 text-[0.8125rem] leading-snug text-ink-500">technician mobile app</dt>
                <dd className="flex h-[1.875rem] items-center">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Smartphone className="size-[18px]" aria-hidden="true" />
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
