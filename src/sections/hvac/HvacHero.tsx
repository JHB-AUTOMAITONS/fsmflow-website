import { Navigation, Package, Snowflake } from 'lucide-react'
import type { CSSProperties } from 'react'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { SplitAc, ThermoDial } from '@/components/illustrations/Hvac'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { JobStepper } from '@/components/product/JobPanels'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { Bezel } from '@/components/ui/Bezel'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { HVAC_SOLUTION } from '@/data/solutions'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

const JOB_TYPES = ['AC installation', 'AC repair', 'Preventive maintenance', 'AMC', 'Breakdown service']

/** A stack of live-looking HVAC service tickets around the animated split AC. */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] pt-6 pb-8 lg:mx-0 lg:ml-auto">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-4 right-0 size-72 rounded-full bg-aqua-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 rounded-full bg-iris-200/40 blur-3xl" />
      </div>

      {/* back tickets (cascade) */}
      <div
        className="hero-in absolute top-0 -left-3 hidden w-[78%] -rotate-[4deg] rounded-[24px] bg-white p-4 shadow-card ring-1 ring-ink-900/[0.07] md:block"
        style={delay(500)}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold text-ink-500">AMC-310</span>
          <Tag tone="mint">AMC visit</Tag>
        </div>
        <p className="mt-1 text-[13px] font-semibold text-ink-900">Orchid Clinic · 6 units</p>
        <Meter value={75} tone="mint" className="mt-2" still />
      </div>
      <div
        className="hero-in absolute -right-3 bottom-0 hidden w-[74%] rotate-[3deg] rounded-[24px] bg-white p-4 shadow-card ring-1 ring-ink-900/[0.07] md:block"
        style={delay(650)}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold text-ink-500">JOB-1031</span>
          <Tag tone="iris">Installation</Tag>
        </div>
        <p className="mt-1 text-[13px] font-semibold text-ink-900">Greenleaf Offices · 2 × 1.5 ton</p>
        <p className="mt-0.5 text-[11px] text-ink-500">Wed 12:00 · Imran Khan</p>
      </div>

      {/* main ticket */}
      <div className="hero-in-scale relative md:mx-4 md:my-14" style={delay(250)}>
        <Bezel
          radius="xl"
          className="shadow-float"
          role="img"
          aria-label="HVAC breakdown service job card for Hotel Palm Grove showing a split AC unit, high priority, assigned technician and suggested spare parts"
          coreClassName="overflow-hidden"
        >
          <div aria-hidden="true">
            <div className="relative bg-linear-to-b from-brand-50 via-white to-aqua-50/60 px-6 pt-5 pb-1">
              <div className="flex items-center justify-between">
                <Tag tone="coral">Breakdown · High priority</Tag>
                <span className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">JOB-1033</span>
              </div>
              <SplitAc className="mx-auto mt-4 max-w-[340px]" />
            </div>
            <div className="space-y-4 border-t border-ink-900/[0.06] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg leading-tight font-semibold tracking-[-0.02em] text-ink-900">Breakdown Service</p>
                  <p className="mt-0.5 text-[12px] text-ink-500">Hotel Palm Grove · OMR · VRF outdoor unit fault</p>
                </div>
                <StatusPill status="assigned" />
              </div>
              <JobStepper current="en-route" />
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-mist p-3 ring-1 ring-ink-900/[0.05]">
                <div className="flex items-center gap-2.5">
                  <Avatar initials="KR" tone="heat" size="md" />
                  <div>
                    <p className="text-[12.5px] leading-tight font-semibold text-ink-900">Karthik Raman</p>
                    <p className="flex items-center gap-1 text-[11px] text-aqua-600">
                      <Navigation className="size-3" /> ETA 18 min
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-ink-600">
                  <Package className="size-3.5 text-brand-500" />
                  <span>Fan motor</span>
                  <span className="text-ink-300">·</span>
                  <span>Inverter PCB</span>
                </div>
              </div>
            </div>
          </div>
        </Bezel>

        <div
          className="hero-in absolute top-[30%] -left-10 z-10 hidden size-28 rounded-full bg-white p-1 shadow-float ring-1 ring-ink-900/[0.07] md:block lg:-left-14"
          style={delay(900)}
          aria-hidden="true"
        >
          <ThermoDial value={24} />
        </div>
      </div>
    </div>
  )
}

/**
 * HVAC solution hero. The H1 is the exact primary keyword. The visual is a
 * service-ticket cascade around an animated split AC, designed to say
 * "built for HVAC and AC service companies" in one glance.
 */
export function HvacHero() {
  return (
    <section aria-labelledby="hvac-hero-heading" className="relative isolate overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-dots opacity-60 mask-fade-b" aria-hidden="true" />
      <FlowBackdrop variant="hero" className="-z-10 top-24 h-[620px] opacity-60 xl:left-[38%] xl:w-auto" />

      <Container size="wide">
        <div className="hero-in mb-8" style={delay(0)}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions' }, { label: HVAC_SOLUTION.h1 }]} />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
          <div className="max-w-2xl lg:max-w-none">
            <div className="hero-in" style={delay(40)}>
              <Eyebrow tone="aqua">
                <Snowflake className="size-3" aria-hidden="true" /> AC, heating &amp; ventilation service
              </Eyebrow>
            </div>
            <h1
              id="hvac-hero-heading"
              className="hero-in mt-5 text-[clamp(2.6rem,1.2rem+3.9vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.038em] text-ink-900"
              style={delay(100)}
            >
              <span className="text-gradient">HVAC</span> Field Service Software
            </h1>
            <p className="text-lead hero-in mt-6 max-w-xl text-ink-600" style={delay(190)}>
              HVAC field service software that runs AC installation, repair, preventive maintenance and AMC (annual maintenance contract) work.
              FSMFlow is HVAC service management software built for Indian service teams: every request, technician, spare part and payment in
              one flow.
            </p>

            <ul className="hero-in mt-7 flex flex-wrap gap-2" style={delay(260)} aria-label="HVAC job types FSMFlow handles">
              {JOB_TYPES.map((t) => (
                <li key={t} className="rounded-full bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-ink-700 shadow-card ring-1 ring-ink-900/[0.07]">
                  {t}
                </li>
              ))}
            </ul>

            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(330)}>
              <ButtonLink href="/demo?industry=hvac" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="#workflow" size="lg" variant="secondary" arrow={false}>
                See the HVAC workflow
              </ButtonLink>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
