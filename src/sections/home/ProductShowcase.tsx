import { Briefcase, LayoutDashboard, MapPinned, UserRound } from 'lucide-react'
import type { ReactNode } from 'react'
import { CustomerProfilePanel } from '@/components/product/CustomerPanel'
import { JobCardPanel } from '@/components/product/JobPanels'
import { LiveBadge, ProductWindow } from '@/components/product/ProductWindow'
import { ServiceDashboardPanel, TechnicianTrackingPanel } from '@/components/product/ServiceDashboard'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/product/StatusPill'
import { cn } from '@/lib/cn'

function Panel({
  className,
  delay,
  caption,
  description,
  children,
}: {
  className?: string
  delay?: number
  caption: string
  description: string
  children: ReactNode
}) {
  return (
    <Reveal delay={delay} className={cn('flex min-w-0 flex-col', className)}>
      <div className="min-h-0 flex-1">{children}</div>
      <div className="mt-5 px-1">
        <h3 className="text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink-900">{caption}</h3>
        <p className="mt-1.5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-600">{description}</p>
      </div>
    </Reveal>
  )
}

/** Large product showcase: four real-looking panels in an asymmetric bento. */
export function ProductShowcase() {
  return (
    <section id="product" aria-labelledby="product-heading" className="relative bg-mist py-20 md:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="The product"
            id="product-heading"
            title="Every job, technician and customer at a glance"
            lead="Service managers see what needs action. Technicians see what to do next. Customers get updates without calling the office."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-14 lg:mt-20 lg:grid-cols-12">
          <Panel
            className="lg:col-span-7"
            caption="Service dashboard"
            description="Open jobs, today’s jobs, completed jobs, pending payments and active technicians, with the day’s schedule and revenue in one view."
          >
            <ProductWindow
              className="h-full"
              title="Service dashboard"
              subtitle="Today · all branches"
              icon={LayoutDashboard}
              actions={<LiveBadge />}
              label="FSMFlow service dashboard showing open jobs, today's jobs, completed jobs, pending payments, active technicians, the day's schedule, a live map, service revenue and jobs by type"
            >
              <ServiceDashboardPanel variant="full" />
            </ProductWindow>
          </Panel>

          <Panel
            className="lg:col-span-5"
            delay={120}
            caption="Technician tracking"
            description="See where every technician is and what they are working on, so dispatch decisions are made on live information."
          >
            <ProductWindow
              className="h-full"
              title="Technician tracking"
              subtitle="Chennai service area"
              icon={MapPinned}
              actions={<LiveBadge>12 active</LiveBadge>}
              label="Live map of technician locations with status for each technician: en route, on a job or available"
              bodyClassName="flex"
            >
              <TechnicianTrackingPanel className="w-full" />
            </ProductWindow>
          </Panel>

          <Panel
            className="lg:col-span-5"
            caption="Job card"
            description="Assigned, en route, in progress, completed. Every job carries its customer, location, checklist, photos and status history."
          >
            <ProductWindow
              className="h-full"
              title="Job card"
              subtitle="AC Maintenance · Customer #1024"
              icon={Briefcase}
              actions={<Tag tone="heat">In progress</Tag>}
              label="Job card for AC maintenance for customer 1024 showing the status steps assigned, en route, in progress and completed, the technician, location and service checklist"
            >
              <JobCardPanel />
            </ProductWindow>
          </Panel>

          <Panel
            className="lg:col-span-7"
            delay={120}
            caption="Customer profile"
            description="Customer details, assets, service history, AMC and warranty status, and previous jobs, all in one record."
          >
            <ProductWindow
              className="h-full"
              title="Customer profile"
              subtitle="Sharma Residency"
              icon={UserRound}
              actions={<Tag tone="mint">AMC active</Tag>}
              label="Customer profile showing contact details, installed AC units with warranty and AMC status, and previous service jobs"
            >
              <CustomerProfilePanel />
            </ProductWindow>
          </Panel>
        </div>

        <p className="mt-12 text-center text-[0.8125rem] text-ink-500">Illustrative product visuals with sample data.</p>
      </Container>
    </section>
  )
}
