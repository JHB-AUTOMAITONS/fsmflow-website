import { Check, ChartColumn, IndianRupee } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { Bars, Donut, Sparkline } from '@/components/product/Charts'
import { KpiTile, ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { Counter } from '@/components/ui/Counter'
import { KPIS, REVENUE_SERIES, TECHNICIANS } from '@/data/sample'
import { cn } from '@/lib/cn'
import { inr, inrCompact } from '@/lib/format'
import { FloatCard, Segmented, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

const DAY_LABELS = ['25', '26', '28', '29', '30', '1', '2', '3', '5', '6']

const JOB_TYPES = [
  { label: 'Maintenance', value: 38, color: '#2f66ff' },
  { label: 'Repair', value: 26, color: '#00a5cf' },
  { label: 'Installation', value: 22, color: '#6554f3' },
  { label: 'AMC visits', value: 14, color: '#ffb547' },
]

const RENEWALS = [
  { name: 'Sharma Residency', note: '3 units', due: '12 days' },
  { name: 'Orchid Clinic', note: '6 units', due: '7 days' },
  { name: 'Greenleaf Offices', note: '8 units', due: '24 days' },
]

const productivity = [...TECHNICIANS].sort((a, b) => b.jobsToday - a.jobsToday)

/** Reporting: KPIs, revenue, jobs by type, technician productivity, AMC renewals and pending payments. */
export function ReportingVisual({ className, compact }: FeatureVisualProps) {
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title="Reports · October"
        subtitle="1 – 6 Oct · all service lines"
        icon={ChartColumn}
        actions={!compact && <Segmented items={['Today', 'Week', 'Month']} active={1} className="hidden @sm:flex" />}
        label="FSMFlow reporting dashboard with revenue for ten working days, jobs split by maintenance, repair, installation and AMC visits, technician productivity, AMC renewals due and pending payments"
      >
        <div className="space-y-3 p-3 @md:p-4">
          <div className={cn('grid grid-cols-2 gap-2', compact ? '' : '@lg:grid-cols-4')}>
            <KpiTile label="Revenue · this week" value={<Counter to={482300} format={inrCompact} />} delta="▲ 18% vs last week">
              {!compact && <Sparkline data={REVENUE_SERIES} height={28} className="mt-2 h-7" />}
            </KpiTile>
            <KpiTile label="Jobs completed" value={<Counter to={112} />} delta="▲ 9% vs last week" />
            {!compact && <KpiTile label="AMC renewals due" value={<Counter to={7} />} delta="in the next 30 days" deltaTone="flat" />}
            {!compact && <KpiTile label="Pending payments" value={<Counter to={KPIS.pendingPayments} format={inrCompact} />} delta="4 invoices due" deltaTone="down" />}
          </div>

          <div className="grid gap-3 @xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.08]">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] font-medium text-ink-500">Service revenue · last 10 working days</p>
                  <p className="tabular mt-1 font-display text-xl leading-none font-semibold tracking-[-0.03em] text-ink-900">{inr(643000)}</p>
                </div>
                <span className="rounded-md bg-mint-50 px-1.5 py-0.5 text-[10.5px] font-semibold text-mint-600">▲ 18%</span>
              </div>
              <div className={cn('mt-3', compact ? 'h-24' : 'h-28')}>
                <Bars data={REVENUE_SERIES} labels={DAY_LABELS} highlight={9} />
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.08]">
              <Donut className="size-[5rem] shrink-0 @xl:size-[5.25rem]" thickness={12} segments={JOB_TYPES}>
                <p className="font-display text-lg leading-none font-semibold text-ink-900">24</p>
                <p className="text-[9.5px] font-medium text-ink-500">jobs today</p>
              </Donut>
              <ul className="min-w-0 flex-1 space-y-1.5 text-[11px] text-ink-600">
                {JOB_TYPES.map((t) => (
                  <li key={t.label} className="flex items-center gap-2">
                    <span className="size-2 shrink-0 rounded-full" style={{ background: t.color }} />
                    <span className="min-w-0 flex-1 truncate">{t.label}</span>
                    <span className="font-mono text-[10px] text-ink-500">{t.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {!compact && (
            <div className="grid gap-3 @xl:grid-cols-2">
              <div className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.08]">
                <p className="text-[11px] font-semibold text-ink-700">Technician productivity · jobs today</p>
                <ul className="mt-2.5 space-y-2">
                  {productivity.slice(0, 4).map((t, i) => (
                    <li key={t.id} className="flex items-center gap-2.5">
                      <Avatar initials={t.initials} tone={t.tone} size="xs" className="ring-0" />
                      <span className="w-20 shrink-0 truncate text-[11.5px] font-medium text-ink-700">{t.name}</span>
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-ink-900/[0.06]" aria-hidden="true">
                        <span
                          className={cn('grow-x block h-full rounded-full', i === 0 ? 'bg-brand-gradient' : 'bg-brand-300')}
                          style={{ width: `${(t.jobsToday / productivity[0].jobsToday) * 100}%`, '--d': `${i * 90}ms` } as React.CSSProperties}
                        />
                      </span>
                      <span className="tabular w-4 text-right font-mono text-[11px] font-semibold text-ink-700">{t.jobsToday}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.08]">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold text-ink-700">AMC renewals due</p>
                  <Tag tone="heat">3 of 7</Tag>
                </div>
                <ul className="mt-2 divide-y divide-ink-900/[0.06]">
                  {RENEWALS.map((r) => (
                    <li key={r.name} className="flex items-center justify-between gap-2 py-1.5">
                      <div className="min-w-0">
                        <p className="truncate text-[11.5px] leading-tight font-semibold text-ink-900">{r.name}</p>
                        <p className="text-[10px] text-ink-500">{r.note}</p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] font-semibold text-heat-600">in {r.due}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="-bottom-10 -right-5 w-[222px]" delay={800}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-mint-50 text-mint-600 ring-1 ring-mint-100">
              <IndianRupee className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="flex items-center gap-1 text-[12px] leading-tight font-semibold text-ink-900">
                Payment received <Check className="size-3 text-mint-500" strokeWidth={3} aria-hidden="true" />
              </p>
              <p className="mt-0.5 font-mono text-[10.5px] text-ink-500">₹3,260 · INV-2291</p>
            </div>
          </div>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
