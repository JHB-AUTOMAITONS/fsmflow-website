import { Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { FEATURE_VISUALS } from '@/components/product/feature-visuals'
import { Bezel } from '@/components/ui/Bezel'
import { TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FEATURES, getFeature, type FeatureMeta } from '@/data/features'
import { cn } from '@/lib/cn'

const COPY: Record<string, { text: string; points?: string[] }> = {
  'sales-crm-software': {
    text: 'Log enquiries, schedule follow-ups and watch your pipeline move from first call to a booked job.',
    points: ['Lead sources and follow-up reminders', 'Pipeline by stage', 'Won deals become quotations and jobs'],
  },
  'quotation-software': {
    text: 'Create clear estimates from your own price list, get approval, then turn them into jobs, invoices and tracked payments.',
    points: ['Quotes from your price list', 'Approval and revision tracking', 'Invoices and payment status'],
  },
  'work-order-management-software': {
    text: 'Every service job has an owner, a checklist, parts, photos and a status the whole team can see.',
    points: ['Create and assign in seconds', 'Checklists, photos and notes', 'Service reports from the job'],
  },
  'field-service-app': {
    text: 'The technician’s day on a phone: jobs, customer history, navigation, checklists and sign-off.',
    points: ['Today’s jobs and navigation', 'Checklists, parts and photos', 'Live status back to the office'],
  },
  'employee-management-software': {
    text: 'Technician profiles, skills, schedules and workload, so assigning work is a decision, not a guess.',
    points: ['Skills and availability', 'Weekly schedule board', 'Workload at a glance'],
  },
  'asset-management-software': { text: 'Every customer site and installed unit, with its full service history.' },
  'warranty-management-software': { text: 'Warranty status, AMC contracts, scheduled visits and renewal reminders.' },
  'inventory-management-software': { text: 'Spare parts across warehouse and vans, tied to jobs, with low-stock alerts.' },
  'reporting-software': { text: 'Jobs, revenue, technician productivity and pending payments in clear dashboards.' },
}

function Peek({ slug, className, height = 250 }: { slug: string; className?: string; height?: number }) {
  const Visual = FEATURE_VISUALS[slug]
  if (!Visual) return null
  return (
    <div
      className={cn('relative overflow-hidden rounded-[20px] bg-wash ring-1 ring-ink-900/[0.05]', className)}
      style={{ height }}
      aria-hidden="true"
    >
      <div className="mask-fade-b absolute inset-x-4 top-4 sm:inset-x-6 sm:top-6">
        <Visual compact />
      </div>
    </div>
  )
}

function FeatureBody({ f, points = true }: { f: FeatureMeta; points?: boolean }) {
  const c = COPY[f.slug]
  return (
    <>
      <div className="flex items-center gap-3">
        <IconTile icon={f.icon} tone="brand" />
        <h4 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-ink-900">{f.h1}</h4>
      </div>
      <p className="mt-3.5 text-[0.9688rem] leading-relaxed text-ink-600">{c.text}</p>
      {points && c.points && (
        <ul className="mt-4 space-y-2">
          {c.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-700">
              <Check className="mt-1 size-3.5 shrink-0 text-mint-500" strokeWidth={3} aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5">
        <TextLink href={f.path}>Explore {f.primaryKeyword}</TextLink>
      </div>
    </>
  )
}

function Group({ label, children, id }: { label: string; children: ReactNode; id: string }) {
  return (
    <div className="mt-16 first:mt-0 md:mt-20">
      <Reveal className="mb-7 flex items-center gap-4">
        <h3 id={id} className="eyebrow-mono shrink-0 text-ink-500">
          {label}
        </h3>
        <span className="h-px flex-1 bg-ink-900/[0.08]" aria-hidden="true" />
      </Reveal>
      {children}
    </div>
  )
}

/**
 * Home features section — deliberately NOT a uniform card grid: three groups,
 * three layouts (paired showcase cards → asymmetric bento with a tall phone
 * card → compact four-up tiles).
 */
export function FeaturesSection() {
  const get = (slug: string) => getFeature(slug)!
  const big = (slug: string, delay = 0) => {
    const f = get(slug)
    return (
      <Reveal delay={delay}>
        <Bezel interactive className="h-full" coreClassName="flex h-full flex-col p-4 sm:p-5">
          <Peek slug={slug} height={260} />
          <div className="flex flex-1 flex-col px-1.5 pt-6 pb-2 sm:px-2">
            <FeatureBody f={f} />
          </div>
        </Bezel>
      </Reveal>
    )
  }

  return (
    <section id="features" aria-labelledby="features-heading" className="relative bg-white py-20 md:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="features-heading"
            eyebrow="Features"
            title="Field service management software that covers the whole job"
            lead="Nine connected modules take a job from first enquiry to final payment and then into the next AMC visit. Use what you need today and switch on the rest as you grow."
          />
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Group id="feat-sell" label="Sell & quote">
            <div className="grid gap-6 lg:grid-cols-2">
              {big('sales-crm-software')}
              {big('quotation-software', 100)}
            </div>
          </Group>

          <Group id="feat-run" label="Run the day">
            <div className="grid gap-6 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <Bezel interactive className="h-full" coreClassName="grid h-full gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:items-center">
                  <div>
                    <FeatureBody f={get('work-order-management-software')} />
                  </div>
                  <Peek slug="work-order-management-software" height={300} />
                </Bezel>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5 lg:row-span-2">
                <Bezel
                  interactive
                  className="h-full"
                  coreClassName="flex h-full flex-col bg-linear-to-b from-brand-50/60 to-white p-5 sm:p-6"
                >
                  <Peek slug="field-service-app" height={340} className="bg-white/60" />
                  <div className="flex flex-1 flex-col px-1 pt-6">
                    <FeatureBody f={get('field-service-app')} />
                  </div>
                </Bezel>
              </Reveal>

              <Reveal delay={60} className="lg:col-span-7">
                <Bezel interactive className="h-full" coreClassName="grid h-full gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-center">
                  <Peek slug="employee-management-software" height={280} className="order-2 md:order-1" />
                  <div className="order-1 md:order-2">
                    <FeatureBody f={get('employee-management-software')} />
                  </div>
                </Bezel>
              </Reveal>
            </div>
          </Group>

          <Group id="feat-keep" label="Keep customers, parts and numbers in order">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {['asset-management-software', 'warranty-management-software', 'inventory-management-software', 'reporting-software'].map((slug, i) => {
                const f = FEATURES.find((x) => x.slug === slug)!
                return (
                  <Reveal key={slug} delay={i * 70}>
                    <Bezel interactive className="h-full" coreClassName="flex h-full flex-col p-5">
                      <Peek slug={slug} height={150} className="mb-5" />
                      <FeatureBody f={f} points={false} />
                    </Bezel>
                  </Reveal>
                )
              })}
            </div>
          </Group>
        </div>
      </Container>
    </section>
  )
}
