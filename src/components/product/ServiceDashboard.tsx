import { BarChart3, Briefcase, LayoutDashboard, Map as MapIcon, Package, Users } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { Bars, Donut, Sparkline } from '@/components/product/Charts'
import { CityMap } from '@/components/product/CityMap'
import { JobRow } from '@/components/product/JobPanels'
import { KpiTile } from '@/components/product/ProductWindow'
import { Counter } from '@/components/ui/Counter'
import { JOBS, KPIS, REVENUE_SERIES, TECHNICIANS, type Technician } from '@/data/sample'
import { inr, inrCompact } from '@/lib/format'
import { cn } from '@/lib/cn'

const SIDEBAR = [LayoutDashboard, Briefcase, Users, MapIcon, Package, BarChart3]

/** Slim icon rail, shown from ~512px container width up. */
export function DashboardSidebar({ className }: { className?: string }) {
  return (
    <aside className={cn('hidden w-11 shrink-0 flex-col items-center gap-1.5 border-r border-ink-900/[0.06] bg-mist/60 py-3 @lg:flex', className)}>
      {SIDEBAR.map((Icon, i) => (
        <span
          key={i}
          className={cn(
            'flex size-8 items-center justify-center rounded-xl',
            i === 0 ? 'bg-brand-gradient text-white shadow-cta' : 'text-ink-500',
          )}
        >
          <Icon className="size-4" strokeWidth={1.7} />
        </span>
      ))}
    </aside>
  )
}

/**
 * The Service Dashboard: KPIs, today's schedule, live technician map and
 * revenue. `variant="hero"` is the compact version; "full" adds the bottom
 * analytics row and the fifth KPI.
 */
export function ServiceDashboardPanel({ variant = 'hero', className }: { variant?: 'hero' | 'full'; className?: string }) {
  const full = variant === 'full'
  const schedule = full ? [JOBS[0], JOBS[1], JOBS[2], JOBS[3], JOBS[4]] : [JOBS[0], JOBS[1], JOBS[2], JOBS[3]]
  return (
    <div className={cn('flex', className)}>
      <DashboardSidebar />
      <div className="min-w-0 flex-1 space-y-3 p-3.5 @md:p-4">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-medium text-ink-500">Tuesday, 6 October</p>
            <p className="truncate font-display text-[1.05rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">Good morning, Priya</p>
          </div>
          <div className="hidden shrink-0 items-center gap-0.5 rounded-xl bg-ink-50 p-0.5 text-[11px] font-semibold @md:flex">
            <span className="rounded-lg bg-white px-2.5 py-1 text-ink-900 shadow-card">Today</span>
            <span className="px-2.5 py-1 text-ink-500">Week</span>
          </div>
        </div>

        <div className={cn('grid grid-cols-2 gap-2', full ? '@md:grid-cols-5' : '@md:grid-cols-4')}>
          <KpiTile label="Today’s jobs" value={<Counter to={KPIS.todaysJobs} />} delta="▲ 12% vs yesterday" />
          {full && <KpiTile label="Open jobs" value={<Counter to={KPIS.openJobs} />} delta="9 need action" deltaTone="flat" />}
          <KpiTile label="Completed" value={<Counter to={KPIS.completedJobs} />} delta="63% done" />
          <KpiTile
            label="Active technicians"
            value={
              <>
                <Counter to={KPIS.activeTechs} />
                <span className="text-base font-medium text-ink-500">/{KPIS.totalTechs}</span>
              </>
            }
            delta="2 available"
            deltaTone="flat"
          />
          <KpiTile
            label="Pending payments"
            value={<Counter to={KPIS.pendingPayments} format={inrCompact} />}
            delta="4 invoices due"
            deltaTone="down"
            className={full ? 'col-span-2 @md:col-span-1' : ''}
          />
        </div>

        <div className="grid gap-3 @lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div className="rounded-2xl bg-white ring-1 ring-ink-900/[0.07]">
            <div className="flex items-center justify-between px-3 pt-3 pb-1">
              <p className="text-[12px] font-semibold text-ink-900">Today’s schedule</p>
              <p className="font-mono text-[10px] text-ink-500">{KPIS.todaysJobs} jobs</p>
            </div>
            <div className="px-1 pb-1.5">
              {schedule.map((j, i) => (
                <JobRow
                  key={j.id}
                  id={j.id}
                  type={j.type}
                  customer={j.customer}
                  area={j.area}
                  time={j.time}
                  status={j.status}
                  priority={j.priority === 'high'}
                  className={i < schedule.length - 1 ? 'border-b border-ink-900/[0.045] rounded-none' : ''}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-44 overflow-hidden rounded-2xl ring-1 ring-ink-900/[0.07]">
            <CityMap className="absolute inset-0" />
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold text-ink-800 shadow-pop">
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-mint-500" />
                <span className="relative size-1.5 rounded-full bg-mint-500" />
              </span>
              12 technicians live
            </div>
          </div>
        </div>

        {full ? (
          <div className="grid gap-3 @xl:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.07]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium text-ink-500">Service revenue · last 10 days</p>
                  <p className="tabular mt-1 font-display text-xl leading-none font-semibold tracking-[-0.03em] text-ink-900">{inr(6_42_000)}</p>
                </div>
                <span className="rounded-md bg-mint-50 px-1.5 py-0.5 text-[10.5px] font-semibold text-mint-600">▲ 18%</span>
              </div>
              <div className="mt-3 h-28">
                <Bars data={REVENUE_SERIES} highlight={9} labels={['W', 'T', 'F', 'S', 'M', 'T', 'W', 'T', 'F', 'T']} />
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.07]">
              <Donut
                className="size-24 shrink-0"
                segments={[
                  { value: 38, color: '#2f66ff' },
                  { value: 26, color: '#00a5cf' },
                  { value: 22, color: '#6554f3' },
                  { value: 14, color: '#ffb547' },
                ]}
              >
                <p className="font-display text-lg leading-none font-semibold text-ink-900">24</p>
                <p className="text-[9px] font-medium text-ink-500">jobs</p>
              </Donut>
              <ul className="space-y-1.5 text-[11px] text-ink-600">
                {[
                  ['#2f66ff', 'Maintenance'],
                  ['#00a5cf', 'Repair'],
                  ['#6554f3', 'Installation'],
                  ['#ffb547', 'AMC / other'],
                ].map(([c, l]) => (
                  <li key={l} className="flex items-center gap-2">
                    <span className="size-2 rounded-full" style={{ background: c }} />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="hidden items-center justify-between gap-4 rounded-2xl bg-white px-3.5 py-2.5 ring-1 ring-ink-900/[0.07] @lg:flex">
            <div>
              <p className="text-[11px] font-medium text-ink-500">Service revenue · this week</p>
              <p className="tabular mt-1 font-display text-lg leading-none font-semibold tracking-[-0.03em] text-ink-900">{inr(4_82_300)}</p>
            </div>
            <div className="w-40">
              <Sparkline data={REVENUE_SERIES} />
            </div>
            <span className="rounded-md bg-mint-50 px-1.5 py-0.5 text-[10.5px] font-semibold text-mint-600">▲ 18%</span>
          </div>
        )}
      </div>
    </div>
  )
}

const STATUS_DOT: Record<Technician['status'], { dot: string; label: string }> = {
  'on-job': { dot: 'bg-heat-500', label: 'On job' },
  'en-route': { dot: 'bg-aqua-500', label: 'En route' },
  available: { dot: 'bg-mint-500', label: 'Available' },
  break: { dot: 'bg-ink-300', label: 'On break' },
}

/** Technician tracking: live map plus a status list. */
export function TechnicianTrackingPanel({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-full flex-col', className)}>
      <div className="relative min-h-52 flex-1 overflow-hidden">
        <CityMap className="absolute inset-0" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {[
            ['En route', 'bg-aqua-500'],
            ['On job', 'bg-heat-500'],
            ['Available', 'bg-mint-500'],
          ].map(([l, c]) => (
            <span key={l} className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold text-ink-700 shadow-pop">
              <span className={cn('size-1.5 rounded-full', c)} />
              {l}
            </span>
          ))}
        </div>
      </div>
      <ul className="grid grid-cols-1 divide-y divide-ink-900/[0.06] border-t border-ink-900/[0.06] @md:grid-cols-2 @md:divide-y-0">
        {TECHNICIANS.slice(0, 4).map((t) => (
          <li key={t.id} className="flex items-center gap-2.5 px-3.5 py-2.5">
            <Avatar initials={t.initials} tone={t.tone} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{t.name}</p>
              <p className="truncate text-[10.5px] text-ink-500">{t.area}</p>
            </div>
            <span className="flex items-center gap-1.5 text-[10.5px] font-semibold text-ink-600">
              <span className={cn('size-1.5 rounded-full', STATUS_DOT[t.status].dot)} />
              {STATUS_DOT[t.status].label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
