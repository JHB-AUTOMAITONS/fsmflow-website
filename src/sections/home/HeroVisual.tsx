import { Bell, Check, IndianRupee, LayoutDashboard, Navigation } from 'lucide-react'
import { useRef, type CSSProperties, type ReactNode } from 'react'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { JobStepper } from '@/components/product/JobPanels'
import { LiveBadge, ProductWindow } from '@/components/product/ProductWindow'
import { ServiceDashboardPanel } from '@/components/product/ServiceDashboard'
import { StatusPill } from '@/components/product/StatusPill'
import { useCycle } from '@/hooks/useCycle'
import type { JobStatus } from '@/data/sample'
import { cn } from '@/lib/cn'

const STEPS: JobStatus[] = ['assigned', 'en-route', 'in-progress', 'completed']

/** Floating glass card that overlaps the dashboard edge (desktop only, decorative). */
function Float({ className, delay, children }: { className?: string; delay: number; children: ReactNode }) {
  return (
    <div
      className={cn('hero-in absolute z-10 hidden rounded-[20px] bg-white p-3.5 shadow-float ring-1 ring-ink-900/[0.07] xl:block', className)}
      style={{ '--d': `${delay}ms` } as CSSProperties}
      aria-hidden="true"
    >
      <div className="animate-float-y" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  )
}

/** The job card that steps through Assigned → En route → In progress → Completed. */
function LiveJobCard({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const status = useCycle(ref, STEPS, 2600, 'in-progress')
  return (
    <div ref={ref} className={className}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">JOB-1024</p>
          <p className="mt-0.5 font-display text-[15px] leading-tight font-semibold tracking-[-0.02em] text-ink-900">AC Maintenance</p>
          <p className="text-[11px] text-ink-500">Customer #1024 · Anna Nagar</p>
        </div>
        <StatusPill status={status} />
      </div>
      <JobStepper current={status} className="mt-3.5" />
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="mx-auto w-full max-w-[700px] xl:max-w-none">
      <div className="relative">
        {/* soft ambient light behind the window */}
        <div className="pointer-events-none absolute -inset-x-6 -top-10 -bottom-10 -z-10" aria-hidden="true">
          <div className="absolute top-4 right-0 size-72 rounded-full bg-aqua-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-6 size-72 rounded-full bg-iris-200/40 blur-3xl" />
        </div>

        <div className="hero-in-scale" style={{ '--d': '220ms' } as CSSProperties}>
          <ProductWindow
            title="FSMFlow · Service control"
            subtitle="HVAC service · Chennai"
            icon={LayoutDashboard}
            actions={<LiveBadge />}
            label="FSMFlow field service dashboard for an HVAC company showing today's jobs, technician status on a live map, customer details and service revenue"
          >
            <ServiceDashboardPanel variant="hero" />
          </ProductWindow>
        </div>

        {/* Floating overlays (desktop). They hang off the window edges so live data stays readable. */}
        <Float delay={650} className="-top-14 -right-6 w-[268px] 2xl:-right-12">
          <LiveJobCard />
        </Float>

        <Float delay={1050} className="top-[73%] -right-12 w-[228px] 2xl:-right-[4.5rem]">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-mint-50 text-mint-600 ring-1 ring-mint-100">
              <IndianRupee className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="flex items-center gap-1 text-[12px] leading-tight font-semibold text-ink-900">
                Payment received <Check className="size-3 text-mint-500" strokeWidth={3} aria-hidden="true" />
              </p>
              <p className="mt-0.5 font-mono text-[10.5px] text-ink-500">₹3,260 · INV-2291</p>
            </div>
          </div>
        </Float>

        <Float delay={850} className="-bottom-[4.25rem] left-8 w-[236px]">
          <div className="flex items-center gap-2.5">
            <Avatar initials="AS" tone="aqua" size="md" />
            <div className="min-w-0">
              <p className="text-[12.5px] leading-tight font-semibold text-ink-900">Arun Selvam</p>
              <p className="flex items-center gap-1 text-[11px] text-aqua-600">
                <Navigation className="size-3" aria-hidden="true" /> En route · ETA 12 min
              </p>
            </div>
          </div>
          <Meter value={68} tone="aqua" className="mt-3" still />
          <p className="mt-1.5 flex justify-between text-[10px] text-ink-500">
            <span>Metro Café, T. Nagar</span>
            <span className="font-mono">2.4 km</span>
          </p>
        </Float>

        <Float delay={1250} className="-right-6 -bottom-[4.5rem] w-[240px] 2xl:-right-12">
          <div className="flex items-start gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-heat-50 text-heat-600 ring-1 ring-heat-100">
              <Bell className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[12px] leading-tight font-semibold text-ink-900">AMC renewal due</p>
              <p className="mt-0.5 text-[11px] leading-snug text-ink-500">Orchid Clinic · 6 units · in 7 days</p>
            </div>
          </div>
        </Float>
      </div>

      {/* Mobile / tablet: the same job card sits under the window instead of floating */}
      <div className="hero-in mt-4 rounded-[20px] bg-white p-4 shadow-card ring-1 ring-ink-900/[0.07] xl:hidden" style={{ '--d': '500ms' } as CSSProperties}>
        <LiveJobCard />
      </div>

      <p className="mt-6 text-center text-[11px] text-ink-500 xl:mt-24 xl:text-right">Illustrative product visuals · sample data</p>
    </div>
  )
}
