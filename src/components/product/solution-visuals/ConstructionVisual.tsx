import { CalendarRange, Check, HardHat, IndianRupee, Package, Users } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { cn } from '@/lib/cn'
import { inr, inrCompact } from '@/lib/format'
import { GrowScope, Panel, PanelHead } from './parts'
import {
  CONTRACT_VALUE,
  CREWS,
  GANTT_MONTHS,
  GANTT_ROWS,
  GANTT_TODAY,
  MATERIALS,
  PAYMENT_MILESTONES,
  type GanttRow,
  type PaymentMilestone,
} from './sample'

const MONTHS = GANTT_MONTHS.length
const pct = (months: number) => `${(months / MONTHS) * 100}%`

const CREW_DOT = {
  'on-site': { dot: 'bg-mint-500', label: 'On site' },
  arriving: { dot: 'bg-heat-500', label: 'Arriving' },
  off: { dot: 'bg-ink-300', label: 'Off today' },
} as const

const MATERIAL_TONE = { Delivered: 'mint', Ordered: 'brand', Requested: 'heat' } as const

const PAY_FILL: Record<PaymentMilestone['state'], string> = {
  paid: 'bg-mint-500',
  invoiced: 'bg-heat-500',
  upcoming: 'bg-ink-200',
}

function GanttBar({ row, index }: { row: GanttRow; index: number }) {
  const style = { left: pct(row.from), width: pct(row.to - row.from), '--d': `${index * 70}ms` } as CSSProperties
  if (row.milestone) {
    return (
      <span className="absolute top-1/2 -translate-y-1/2" style={{ left: pct(row.from) }}>
        <span className="block size-3.5 rotate-45 rounded-[3px] bg-ink-300 ring-2 ring-white" />
      </span>
    )
  }
  if (row.state === 'done') {
    return (
      <span className="absolute top-1.5 flex h-5 items-center justify-end rounded-md bg-mint-500 pr-1.5 text-white" style={style}>
        <Check className="size-3" strokeWidth={3.2} />
      </span>
    )
  }
  if (row.state === 'active') {
    return (
      <span className="absolute top-1.5 h-5 overflow-hidden rounded-md bg-brand-100 ring-1 ring-brand-200" style={style}>
        <span className="grow-x block h-full rounded-md bg-brand-gradient" style={{ width: `${row.progress}%`, '--d': `${index * 70}ms` } as CSSProperties} />
        <span className="absolute inset-y-0 right-1.5 flex items-center text-[9px] font-bold text-brand-800">{row.progress}%</span>
      </span>
    )
  }
  return <span className="absolute top-1.5 h-5 rounded-md border border-dashed border-ink-300 bg-white/70" style={style} />
}

const ROW = 'grid grid-cols-[4.75rem_minmax(0,1fr)] gap-x-2 @md:grid-cols-[9.5rem_minmax(0,1fr)]'

function Timeline() {
  return (
    <Panel>
      <PanelHead icon={CalendarRange} title="Project timeline" meta="Aug – Jan" />
      <div className="px-3 pb-3">
        <div className={ROW}>
          <span />
          <div className="relative pt-4 pb-1">
            <div className="grid grid-cols-6 text-center font-mono text-[9px] text-ink-500">
              {GANTT_MONTHS.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <span
              className="absolute top-0 -translate-x-1/2 rounded-full bg-brand-500 px-1.5 py-0.5 text-[8.5px] leading-none font-bold text-white shadow-cta"
              style={{ left: pct(GANTT_TODAY) }}
            >
              Today
            </span>
          </div>
        </div>
        {GANTT_ROWS.map((row, i) => (
          <div key={row.label} className={cn(ROW, 'border-t border-ink-900/[0.05]')}>
            <p className="flex items-center truncate text-[10.5px] font-medium text-ink-700 @md:text-[11.5px]">
              <span className="truncate @md:hidden">{row.short}</span>
              <span className="hidden truncate @md:inline">{row.label}</span>
            </p>
            <div className="relative h-8">
              <div className="absolute inset-0 grid grid-cols-6" aria-hidden="true">
                {GANTT_MONTHS.map((m, mi) => (
                  <span key={m} className={cn('border-ink-900/[0.05]', mi > 0 && 'border-l')} />
                ))}
              </div>
              <GanttBar row={row} index={i} />
              <span className="absolute inset-y-0 w-px bg-brand-500/70" style={{ left: pct(GANTT_TODAY) }} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

export function ConstructionVisual({ className }: { className?: string }) {
  return (
    <ProductWindow
      className={className}
      title="FSMFlow · Project board"
      subtitle="Construction · Bengaluru"
      icon={HardHat}
      actions={<StatusPill status="in-progress" label="On schedule" />}
      label="FSMFlow construction project board: a milestone timeline with foundation complete and structure in progress, site crews and their tasks for today, materials requested with delivery status, and a milestone payment tracker showing amounts received and due in rupees"
    >
      <GrowScope className="space-y-3 p-3.5 @md:p-4">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">PRJ-0092 · 14 villas</p>
            <p className="truncate font-display text-[1.05rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">Lakeview Villas · Block B</p>
          </div>
          <div className="w-28 shrink-0 text-right @md:w-40">
            <p className="text-[10.5px] font-medium text-ink-500">
              Overall <span className="font-mono font-semibold text-ink-800">27%</span> · handover Jan
            </p>
            <Meter value={27} tone="brand" className="mt-1.5" />
          </div>
        </div>

        <Timeline />

        <div className="grid gap-3 @md:grid-cols-2">
          <Panel>
            <PanelHead icon={Users} title="Site crews · today" meta="18 people" />
            <ul className="divide-y divide-ink-900/[0.05] px-1 pb-1">
              {CREWS.map((c) => (
                <li key={c.name} className="flex items-center gap-2.5 px-2 py-2">
                  <Avatar initials={c.initials} tone={c.tone} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{c.name}</p>
                    <p className="truncate text-[10.5px] text-ink-500">
                      {c.trade} · {c.people} · {c.task}
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 text-[10.5px] font-semibold text-ink-600">
                    <span className={cn('size-1.5 rounded-full', CREW_DOT[c.status].dot)} />
                    <span className="hidden @xl:inline">{CREW_DOT[c.status].label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel>
            <PanelHead icon={Package} title="Materials requested" meta="3 open" />
            <ul className="divide-y divide-ink-900/[0.05] px-1 pb-1">
              {MATERIALS.map((m) => (
                <li key={m.item} className="flex items-center gap-2.5 px-2 py-2">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{m.item}</p>
                    <p className="truncate text-[10.5px] text-ink-500">
                      {m.qty} · {m.by}
                    </p>
                  </div>
                  <Tag tone={MATERIAL_TONE[m.status]}>{m.status}</Tag>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <Panel>
          <PanelHead icon={IndianRupee} title="Milestone payments" meta={`${inr(CONTRACT_VALUE)} contract`} />
          <div className="px-3 pb-3">
            <div className="flex h-2.5 gap-[3px] overflow-hidden rounded-full" aria-hidden="true">
              {PAYMENT_MILESTONES.map((m, i) => (
                <span
                  key={m.label}
                  className={cn('grow-x h-full rounded-full', PAY_FILL[m.state])}
                  style={{ width: `${m.share}%`, '--d': `${i * 90}ms` } as CSSProperties}
                />
              ))}
            </div>
            <ul className="mt-3 grid grid-cols-1 gap-x-3 gap-y-2 @md:grid-cols-5">
              {PAYMENT_MILESTONES.map((m) => (
                <li key={m.label} className="flex items-center justify-between gap-2 @md:block">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-800">
                    <span className={cn('size-2 shrink-0 rounded-full', PAY_FILL[m.state])} />
                    <span className="truncate">{m.label}</span>
                  </p>
                  <p className="tabular font-display text-[13px] font-semibold tracking-[-0.02em] text-ink-900 @md:mt-1">{inrCompact(m.amount)}</p>
                  <p className="hidden truncate text-[10px] text-ink-500 @md:block">{m.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Panel>
      </GrowScope>
    </ProductWindow>
  )
}
