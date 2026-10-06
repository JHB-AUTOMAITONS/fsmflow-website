import { ChartColumn } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { Bars, Donut, Meter } from '@/components/product/Charts'
import { KpiTile, ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Counter } from '@/components/ui/Counter'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { REVENUE_SERIES } from '@/data/sample'
import { inr, inrCompact } from '@/lib/format'

function ReportsPanel() {
  return (
    <div className="space-y-3 p-4 @md:p-5">
      <div className="grid grid-cols-2 gap-2 @2xl:grid-cols-4">
        <KpiTile label="Service revenue" value={<Counter to={642000} format={inrCompact} />} delta="▲ 18% vs last period" />
        <KpiTile label="Jobs completed" value={<Counter to={312} />} delta="▲ 9%" />
        <KpiTile label="AMC renewals due" value={<Counter to={14} />} delta="Next 30 days" deltaTone="flat" />
        <KpiTile label="Pending payments" value={<Counter to={182500} format={inrCompact} />} delta="4 invoices overdue" deltaTone="down" />
      </div>

      <div className="grid gap-3 @2xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.07]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium text-ink-500">Revenue by day</p>
              <p className="tabular mt-1 font-display text-lg leading-none font-semibold tracking-[-0.03em] text-ink-900">{inr(642000)}</p>
            </div>
            <Tag tone="mint">▲ 18%</Tag>
          </div>
          <div className="mt-4 h-36">
            <Bars data={REVENUE_SERIES} highlight={9} labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu']} />
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.07]">
          <Donut
            className="size-28 shrink-0"
            segments={[
              { value: 38, color: '#2f66ff' },
              { value: 26, color: '#00a5cf' },
              { value: 22, color: '#6554f3' },
              { value: 14, color: '#ffb547' },
            ]}
          >
            <p className="font-display text-xl leading-none font-semibold text-ink-900">312</p>
            <p className="text-[9px] font-medium text-ink-500">jobs</p>
          </Donut>
          <ul className="space-y-1.5 text-[11.5px] text-ink-600">
            {[
              ['#2f66ff', 'Maintenance', '38%'],
              ['#00a5cf', 'Repair', '26%'],
              ['#6554f3', 'Installation', '22%'],
              ['#ffb547', 'AMC / other', '14%'],
            ].map(([c, l, v]) => (
              <li key={l} className="flex items-center gap-2">
                <span className="size-2 rounded-full" style={{ background: c }} />
                <span className="flex-1">{l}</span>
                <span className="font-mono text-ink-500">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-3 @2xl:grid-cols-2">
        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.07]">
          <p className="text-[11px] font-semibold text-ink-700">Technician productivity</p>
          <ul className="mt-3 space-y-2.5">
            {[
              ['RK', 'brand', 'Ravi Kumar', 92, 41],
              ['AS', 'aqua', 'Arun Selvam', 84, 38],
              ['IK', 'iris', 'Imran Khan', 71, 29],
              ['SP', 'mint', 'Suresh Pillai', 66, 27],
            ].map(([i, t, n, v, j], idx) => (
              <li key={String(n)} className="flex items-center gap-2.5">
                <Avatar initials={String(i)} tone={t as 'brand' | 'aqua' | 'iris' | 'mint'} size="xs" />
                <span className="w-24 shrink-0 truncate text-[11.5px] font-medium text-ink-700">{n}</span>
                <Meter value={v as number} delay={idx * 80} />
                <span className="w-12 shrink-0 text-right font-mono text-[10.5px] text-ink-500">{j} jobs</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.07]">
          <p className="text-[11px] font-semibold text-ink-700">Pending payments by age</p>
          <div className="mt-3 flex h-3 overflow-hidden rounded-full">
            <span className="grow-x block h-full w-[46%] bg-mint-500" />
            <span className="grow-x block h-full w-[28%] bg-heat-500" style={{ '--d': '120ms' } as React.CSSProperties} />
            <span className="grow-x block h-full w-[26%] bg-coral-500" style={{ '--d': '240ms' } as React.CSSProperties} />
          </div>
          <ul className="mt-3 space-y-1.5 text-[11.5px] text-ink-600">
            {[
              ['bg-mint-500', '0–15 days', inr(84000)],
              ['bg-heat-500', '16–30 days', inr(51000)],
              ['bg-coral-500', 'Over 30 days', inr(47500)],
            ].map(([c, l, v]) => (
              <li key={l} className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${c}`} />
                <span className="flex-1">{l}</span>
                <span className="font-mono text-ink-500">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function HvacReports() {
  return (
    <section id="reports" aria-labelledby="hvac-reports-heading" className="relative bg-mist py-20 md:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="hvac-reports-heading"
            align="center"
            eyebrow="Reports"
            title="Know how your HVAC business is performing"
            lead="Revenue, completed jobs, technician productivity, AMC renewals and pending payments, updated from the work your team does every day."
          />
        </Reveal>

        <Reveal variant="scale" className="mt-14 md:mt-16">
          <div className="mx-auto max-w-[980px]">
            <ProductWindow
              title="Business reports"
              subtitle="Last 10 working days"
              icon={ChartColumn}
              label="Business performance report showing service revenue, jobs completed, AMC renewals due, pending payments, revenue by day, jobs by type, technician productivity and pending payments by age"
            >
              <ReportsPanel />
            </ProductWindow>
            <p className="mt-6 text-center">
              <TextLink href="/features/reporting-software">Explore reporting software for field service teams</TextLink>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
