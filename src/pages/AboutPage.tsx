import { LayoutDashboard, MapPinned, Smartphone, Waypoints, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router'
import { SplitAc } from '@/components/illustrations/Hvac'
import { PageHero } from '@/components/layout/PageHero'
import { JobCardPanel } from '@/components/product/JobPanels'
import { LiveBadge, ProductWindow } from '@/components/product/ProductWindow'
import { BeforeAfter } from '@/components/sections/company/AboutVisuals'
import { Seo } from '@/components/seo/Seo'
import { Bezel } from '@/components/ui/Bezel'
import { TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { CtaBand } from '@/components/ui/CtaBand'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FEATURES } from '@/data/features'
import { HVAC_SOLUTION, SOLUTIONS } from '@/data/solutions'
import { cn } from '@/lib/cn'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'

const TITLE = 'About Us | FSMFlow'
const DESCRIPTION =
  'Learn what FSMFlow is, who it is for and how it helps Indian HVAC, CCTV, solar, construction and service teams run jobs, technicians and AMC in one place.'

const PRINCIPLES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Smartphone,
    title: 'Field-first',
    text: 'Technicians do their work on a phone: job details, checklist, parts, photos and customer sign-off. The office sees every update as it happens.',
  },
  {
    icon: Waypoints,
    title: 'One connected flow',
    text: 'An enquiry becomes a quotation, a job, an invoice and an AMC reminder without anyone typing the same details twice.',
  },
  {
    icon: MapPinned,
    title: 'Built for how Indian service teams actually work',
    text: 'Prices in rupees, annual maintenance contracts, a mix of home and business customers, and technicians who cover several sites in a day.',
  },
]

const OTHER_SOLUTIONS = SOLUTIONS.filter((s) => s.slug !== HVAC_SOLUTION.slug)

/** Hero visual: a sample job card in a product window. */
function HeroAside() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="pointer-events-none absolute -inset-6 -z-10" aria-hidden="true">
        <div className="absolute top-2 right-0 size-60 rounded-full bg-aqua-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-4 size-60 rounded-full bg-iris-200/40 blur-3xl" />
      </div>
      <Reveal variant="scale">
        <ProductWindow
          title="FSMFlow · Job card"
          subtitle="Sample data"
          icon={LayoutDashboard}
          actions={<LiveBadge />}
          label="FSMFlow job card for an AC maintenance visit showing status, location, technician, service checklist and photos"
        >
          <JobCardPanel />
        </ProductWindow>
      </Reveal>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/about"
        jsonLd={[
          webPageSchema({ name: 'About FSMFlow', description: DESCRIPTION, path: '/about', type: 'AboutPage' }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="About"
        title="About FSMFlow"
        lead={
          <>
            FSMFlow is{' '}
            <Link to="/" className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600">
              field service management software
            </Link>{' '}
            built for Indian service businesses. It is designed first for AC and HVAC service companies, and it also fits CCTV, solar, construction and
            other teams that send people to customer sites.
          </>
        }
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        aside={<HeroAside />}
      />

      <Section tone="white" spacing="tight" aria-labelledby="problem-heading">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              id="problem-heading"
              eyebrow="The problem"
              title="Service work gets scattered across too many places"
              lead="A service call starts in a WhatsApp group, moves to an Excel sheet, is written on a paper job card and ends with an invoice somewhere else. Details get lost, and AMC renewals slip by because nobody was reminded."
            />
          </Reveal>
          <div className="mt-12 md:mt-14">
            <BeforeAfter />
          </div>
        </Container>
      </Section>

      <Section tone="mist" aria-labelledby="principles-heading">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              id="principles-heading"
              eyebrow="How we think"
              title="Three principles behind the product"
              lead="They decide what we build, and what we leave out."
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 90} className="h-full">
                  <Bezel className="h-full" coreClassName="flex h-full flex-col p-7">
                    <div className="flex items-center justify-between">
                      <IconTile icon={p.icon} tone="solid" size="lg" />
                      <span className="font-mono text-[0.8125rem] font-semibold text-ink-500">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-h3 font-semibold text-ink-900">{p.title}</h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-600">{p.text}</p>
                  </Bezel>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="white" aria-labelledby="inside-heading">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              id="inside-heading"
              eyebrow="What’s inside"
              title="Nine connected modules, one platform"
              lead="Every module shares the same customer, job and equipment records, so nothing needs to be entered twice."
            />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <li key={f.slug}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <Bezel interactive radius="md" className="h-full" coreClassName="flex h-full flex-col p-6">
                    <IconTile icon={f.icon} tone="brand" size="md" />
                    <h3 className="mt-5 font-display text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink-900">{f.navLabel}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-snug text-ink-600">{f.tagline}</p>
                    <div className="mt-auto pt-5">
                      <TextLink href={f.path}>{f.h1}</TextLink>
                    </div>
                  </Bezel>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="mist" aria-labelledby="industries-heading">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              id="industries-heading"
              eyebrow="Industries"
              title="Made for HVAC first, shaped for other service trades"
              lead="The same flow of enquiry, job, technician, invoice and renewal applies to every business that serves customers on site."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <li className="md:col-span-2 lg:row-span-2">
              <Reveal variant="scale" className="h-full">
                <Bezel radius="xl" className="h-full" coreClassName="relative isolate flex h-full flex-col overflow-hidden p-7 sm:p-9">
                  <div className="absolute inset-0 -z-10 bg-linear-to-br from-aqua-50 via-white to-brand-50" aria-hidden="true" />
                  <div className="absolute inset-0 -z-10 bg-blueprint opacity-50 mask-fade-edges" aria-hidden="true" />
                  <Eyebrow tone="aqua" className="self-start">
                    Primary focus
                  </Eyebrow>
                  <h3 className="mt-5 font-display text-h2 font-semibold text-ink-900">HVAC and AC service</h3>
                  <p className="text-lead mt-4 max-w-xl text-ink-600">
                    Installation, repair, AMC and preventive maintenance for AC and HVAC companies: jobs, technicians, spare parts, invoices and
                    contract renewals in one connected flow.
                  </p>
                  <div className="mt-6">
                    <TextLink href={HVAC_SOLUTION.path}>{HVAC_SOLUTION.h1}</TextLink>
                  </div>
                  <div className="mx-auto mt-8 w-full max-w-[380px] flex-1 content-end">
                    <SplitAc className="drop-shadow-sm" />
                  </div>
                </Bezel>
              </Reveal>
            </li>
            {OTHER_SOLUTIONS.map((s, i) => (
              <li key={s.slug} className={cn(i === OTHER_SOLUTIONS.length - 1 && 'lg:col-span-2')}>
                <Reveal delay={i * 80} className="h-full">
                  <Bezel interactive radius="md" className="h-full" coreClassName="flex h-full flex-col p-6">
                    <IconTile icon={s.icon} tone={i % 2 ? 'iris' : 'brand'} size="md" />
                    <h3 className="mt-5 font-display text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink-900">{s.navLabel}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-snug text-ink-600">{s.tagline}</p>
                    <div className="mt-auto pt-5">
                      <TextLink href={s.path}>{s.h1}</TextLink>
                    </div>
                  </Bezel>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="See FSMFlow with your own workflow"
        text="Book a demo and we will walk through jobs, technicians, spare parts, invoices and AMC using examples from your trade."
        secondary={{ label: 'Contact us', href: '/contact' }}
      />
    </>
  )
}
