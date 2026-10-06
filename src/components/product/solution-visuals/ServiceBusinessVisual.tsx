import { Bug, Check, Droplets, GripVertical, IndianRupee, LayoutGrid, ReceiptText, UserRound, WashingMachine, Zap, type LucideIcon } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { LiveBadge, ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { cn } from '@/lib/cn'
import { inr } from '@/lib/format'
import { GrowScope, Panel, PanelHead } from './parts'
import {
  DISPATCH_END,
  DISPATCH_NOW,
  DISPATCH_ROWS,
  DISPATCH_START,
  SELECTED_JOB,
  TRADE_LABEL,
  UNASSIGNED_JOBS,
  type DispatchBlock,
  type Trade,
} from './sample'

const SPAN = DISPATCH_END - DISPATCH_START
const at = (hour: number) => `${((hour - DISPATCH_START) / SPAN) * 100}%`

const TRADE: Record<Trade, { icon: LucideIcon; tile: string; block: string; dot: string }> = {
  electrical: { icon: Zap, tile: 'bg-heat-50 text-heat-600 ring-heat-100', block: 'border-heat-500 bg-heat-100', dot: 'bg-heat-500' },
  plumbing: { icon: Droplets, tile: 'bg-aqua-50 text-aqua-600 ring-aqua-100', block: 'border-aqua-500 bg-aqua-100', dot: 'bg-aqua-500' },
  appliance: { icon: WashingMachine, tile: 'bg-iris-50 text-iris-600 ring-iris-100', block: 'border-iris-500 bg-iris-100', dot: 'bg-iris-500' },
  pest: { icon: Bug, tile: 'bg-mint-50 text-mint-600 ring-mint-100', block: 'border-mint-500 bg-mint-100', dot: 'bg-mint-500' },
}

const HOUR_LABELS = ['9 am', '11 am', '1 pm', '3 pm']

function JobBlock({ block, trade }: { block: DispatchBlock; trade: Trade }) {
  return (
    <span
      className={cn(
        'absolute top-1 bottom-1 flex items-center gap-1 overflow-hidden rounded-md border-l-[3px] px-1.5 text-[10px] leading-none font-semibold text-ink-800',
        TRADE[trade].block,
        block.state === 'active' && 'shadow-pop ring-1 ring-ink-900/10',
      )}
      style={{ left: at(block.from), width: `${(block.hours / SPAN) * 100}%` }}
    >
      {block.state === 'done' && <Check className="size-2.5 shrink-0" strokeWidth={3.5} />}
      {block.state === 'active' && (
        <span className="relative flex size-1.5 shrink-0">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-ink-700" />
          <span className="relative size-1.5 rounded-full bg-ink-700" />
        </span>
      )}
      <span className="hidden truncate @sm:inline">{block.title}</span>
    </span>
  )
}

export function ServiceBusinessVisual({ className }: { className?: string }) {
  const due = SELECTED_JOB.quote.amount - SELECTED_JOB.paid
  return (
    <ProductWindow
      className={className}
      title="FSMFlow · Dispatch board"
      subtitle="Field service · all teams"
      icon={LayoutGrid}
      actions={<LiveBadge />}
      label="FSMFlow dispatch board for a service business: a queue of unassigned jobs across electrical, plumbing, appliance repair and pest control, a technician schedule by time slot with a job being dragged onto a plumber's row, and the selected job's customer, quotation and payment status in rupees"
    >
      <GrowScope className="space-y-3 p-3.5 @md:p-4">
        <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-2">
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-ink-500">Tuesday, 6 October</p>
            <p className="font-display text-[1.05rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">18 jobs · 4 technicians</p>
          </div>
          <div className="hidden flex-wrap items-center gap-1.5 @md:flex">
            <Tag tone="brand">All trades</Tag>
            {(Object.keys(TRADE) as Trade[]).map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-ink-600">
                <span className={cn('size-2 rounded-full', TRADE[t].dot)} />
                {TRADE_LABEL[t]}
              </span>
            ))}
          </div>
        </div>

        <Panel>
          <PanelHead title="Unassigned jobs" meta={`${UNASSIGNED_JOBS.length} waiting`} />
          <ul className="grid grid-cols-2 gap-2 px-2.5 pb-2.5 @md:grid-cols-4">
            {UNASSIGNED_JOBS.map((j, i) => {
              const T = TRADE[j.trade]
              return (
                <li
                  key={j.id}
                  className={cn(
                    'relative min-w-0 rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.05]',
                    i === 0 && 'z-10 -rotate-[1.5deg] bg-white shadow-lift ring-brand-300',
                  )}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className={cn('flex size-6 items-center justify-center rounded-lg ring-1 ring-inset', T.tile)}>
                      <T.icon className="size-3.5" aria-hidden="true" />
                    </span>
                    {j.urgent ? <Tag tone="coral">Urgent</Tag> : <GripVertical className="size-3.5 text-ink-300" aria-hidden="true" />}
                  </div>
                  <p className="mt-1.5 truncate text-[11.5px] leading-tight font-semibold text-ink-900">{j.title}</p>
                  <p className="mt-0.5 truncate text-[10px] text-ink-500">
                    {j.area} · {j.window}
                  </p>
                </li>
              )
            })}
          </ul>
        </Panel>

        <Panel>
          <PanelHead title="Technician schedule" meta="Drag a job onto a row" />
          <div className="px-3 pb-3">
            <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-2 @lg:grid-cols-[7.5rem_minmax(0,1fr)]">
              <span />
              <div className="relative pb-1.5">
                <div className="grid grid-cols-4 font-mono text-[9px] text-ink-500">
                  {HOUR_LABELS.map((h) => (
                    <span key={h}>{h}</span>
                  ))}
                </div>
                <span
                  className="absolute -top-0.5 -translate-x-1/2 rounded-full bg-coral-600 px-1.5 py-0.5 text-[8.5px] leading-none font-bold text-white"
                  style={{ left: at(DISPATCH_NOW) }}
                >
                  Now
                </span>
              </div>
            </div>
            {DISPATCH_ROWS.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-x-2 border-t border-ink-900/[0.05] @lg:grid-cols-[7.5rem_minmax(0,1fr)]"
              >
                <div className="flex items-center gap-2">
                  <Avatar initials={row.initials} tone={row.tone} />
                  <div className="hidden min-w-0 @lg:block">
                    <p className="truncate text-[11.5px] leading-tight font-semibold text-ink-900">{row.name}</p>
                    <p className="truncate text-[10px] text-ink-500">{row.role}</p>
                  </div>
                </div>
                <div className="relative h-10">
                  <div className="absolute inset-0 grid grid-cols-8" aria-hidden="true">
                    {Array.from({ length: SPAN }, (_, i) => (
                      <span key={i} className={cn(i > 0 && 'border-l border-ink-900/[0.05]')} />
                    ))}
                  </div>
                  {row.blocks.map((b) => (
                    <JobBlock key={b.title} block={b} trade={row.trade} />
                  ))}
                  {row.name === 'Salim Ansari' && (
                    <span
                      className="absolute top-1 bottom-1 z-10 flex items-center gap-1 overflow-hidden rounded-md border border-dashed border-aqua-500 bg-aqua-50 px-1.5 text-[10px] leading-none font-semibold text-aqua-600 shadow-pop"
                      style={{ left: at(13), width: `${(2 / SPAN) * 100}%` }}
                    >
                      <GripVertical className="size-3 shrink-0" aria-hidden="true" />
                      <span className="hidden truncate @sm:inline">Geyser · drop</span>
                    </span>
                  )}
                  <span className="absolute inset-y-0 z-20 w-px bg-coral-500/70" style={{ left: at(DISPATCH_NOW) }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <div className="grid divide-y divide-ink-900/[0.05] @md:grid-cols-3 @md:divide-x @md:divide-y-0">
            <div className="flex items-center gap-2.5 p-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <UserRound className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">{SELECTED_JOB.id} · CUSTOMER</p>
                <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{SELECTED_JOB.customer}</p>
                <p className="truncate text-[10.5px] text-ink-500">{SELECTED_JOB.place} · Geyser not heating</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-iris-50 text-iris-600 ring-1 ring-iris-100">
                <ReceiptText className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">{SELECTED_JOB.quote.id} · QUOTATION</p>
                <p className="flex items-center gap-2 text-[12px] leading-tight font-semibold text-ink-900">
                  <span className="tabular">{inr(SELECTED_JOB.quote.amount)}</span>
                  <Tag tone="mint">{SELECTED_JOB.quote.status}</Tag>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-mint-50 text-mint-600 ring-1 ring-mint-100">
                <IndianRupee className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">PAYMENT</p>
                <p className="tabular text-[12px] leading-tight font-semibold text-heat-600">{inr(due)} due</p>
                <p className="mt-0.5 truncate text-[10.5px] text-ink-500">
                  {inr(SELECTED_JOB.paid)} of {inr(SELECTED_JOB.quote.amount)} paid
                </p>
                <Meter value={(SELECTED_JOB.paid / SELECTED_JOB.quote.amount) * 100} tone="mint" className="mt-1.5" />
              </div>
            </div>
          </div>
        </Panel>
      </GrowScope>
    </ProductWindow>
  )
}
