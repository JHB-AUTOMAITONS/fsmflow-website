import { ArrowDownRight, BellRing, Package, Search, Truck, Warehouse } from 'lucide-react'
import { ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { PARTS, type SamplePart } from '@/data/sample'
import { cn } from '@/lib/cn'
import { FakeButton, FloatCard, Mono, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

/** Warehouse / van split per SKU. The two numbers always add up to the sample stock. */
const SPLIT: Record<string, [number, number]> = {
  'CAP-035': [0, 2],
  'GAS-R32': [9, 5],
  'CPR-014': [18, 4],
  'PMP-DRN': [4, 2],
  'PCB-INV': [1, 2],
  'RMT-UNI': [25, 6],
}

type Level = 'low' | 'near' | 'ok'
const levelOf = (p: SamplePart): Level => (p.stock < p.min ? 'low' : p.stock < p.min * 1.3 ? 'near' : 'ok')

const LEVEL_UI: Record<Level, { tone: 'coral' | 'heat' | 'mint'; label: string; bar: string; text: string }> = {
  low: { tone: 'coral', label: 'Low', bar: 'bg-coral-500', text: 'text-coral-600' },
  near: { tone: 'heat', label: 'Near min', bar: 'bg-heat-500', text: 'text-heat-600' },
  ok: { tone: 'mint', label: 'In stock', bar: 'bg-mint-500', text: 'text-mint-600' },
}

const ROW = 'grid items-center gap-x-3 grid-cols-[minmax(0,1fr)_6.25rem] @md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_6.25rem] @2xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_5.5rem_5.5rem]'

function StockBar({ part, level }: { part: SamplePart; level: Level }) {
  const scale = Math.max(part.stock, part.min * 2)
  return (
    <div className="relative h-1.5 w-full rounded-full bg-ink-900/[0.07]" aria-hidden="true">
      <div className={cn('grow-x h-full rounded-full', LEVEL_UI[level].bar)} style={{ width: `${(part.stock / scale) * 100}%` }} />
      <span className="absolute -top-[3px] h-3 w-[2px] rounded-full bg-ink-700/70" style={{ left: `${(part.min / scale) * 100}%` }} />
    </div>
  )
}

/** Inventory: stock table with minimum-level meters, warehouse vs van split, low-stock alert, parts used on a job. */
export function InventoryVisual({ className, compact }: FeatureVisualProps) {
  const parts = compact ? PARTS.slice(0, 4) : PARTS
  const low = PARTS.filter((p) => levelOf(p) === 'low').length
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title="Stock · Spare parts"
        subtitle="Main warehouse + 6 service vans"
        icon={Package}
        actions={!compact && <Tag tone="coral">{low} below minimum</Tag>}
        label="FSMFlow spare parts inventory table with stock levels against minimums, warehouse and van stock split, low-stock alerts for a running capacitor and an inverter PCB, and a part deducted from a technician's van after a job"
      >
        <div className="space-y-3 p-3 @md:p-4">
          {!compact && (
            <div className="flex items-center gap-3 rounded-2xl bg-coral-50 px-3 py-2.5 ring-1 ring-coral-100">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-white text-coral-600 shadow-card">
                <BellRing className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12.5px] leading-tight font-semibold text-ink-900">{low} parts are below their minimum level</p>
                <p className="mt-0.5 truncate text-[11px] text-ink-600">Running capacitor 35 µF · Indoor PCB (inverter)</p>
              </div>
              <FakeButton className="hidden @sm:inline-flex">Reorder</FakeButton>
            </div>
          )}

          <div className="rounded-2xl bg-white ring-1 ring-ink-900/[0.08]">
            <div className="flex items-center gap-2 border-b border-ink-900/[0.06] px-3 py-2">
              <div className="flex min-w-0 flex-1 items-center gap-1.5 text-[11px] text-ink-500">
                <Search className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">Search parts or SKU</span>
              </div>
              <span className="hidden items-center gap-1 rounded-md bg-ink-50 px-2 py-1 text-[10.5px] font-semibold text-ink-500 @sm:flex">
                <Warehouse className="size-3" aria-hidden="true" /> All locations
              </span>
            </div>
            <div className={cn(ROW, 'border-b border-ink-900/[0.06] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-ink-500 uppercase')}>
              <span>Part</span>
              <span className="hidden @md:block">In stock · minimum</span>
              <span className="hidden text-center @2xl:block">Warehouse | Vans</span>
              <span className="text-right">Status</span>
            </div>
            <ul>
              {parts.map((p) => {
                const level = levelOf(p)
                const ui = LEVEL_UI[level]
                const [wh, van] = SPLIT[p.sku] ?? [p.stock, 0]
                return (
                  <li key={p.sku} className={cn(ROW, 'border-b border-ink-900/[0.05] px-3 py-2.5 last:border-b-0', level === 'low' && 'bg-coral-50/40')}>
                    <div className="min-w-0">
                      <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{p.name}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-ink-500">
                        {p.sku}
                        <span className="@md:hidden">
                          {' '}
                          · {p.stock} {p.unit}
                        </span>
                      </p>
                    </div>
                    <div className="hidden min-w-0 @md:block">
                      <div className="mb-1.5 flex items-baseline justify-between">
                        <span className={cn('tabular text-[12.5px] font-semibold', ui.text)}>
                          {p.stock} <span className="text-[10px] font-medium text-ink-500">{p.unit}</span>
                        </span>
                        <span className="font-mono text-[10px] text-ink-500">min {p.min}</span>
                      </div>
                      <StockBar part={p} level={level} />
                    </div>
                    <div className="hidden @2xl:block">
                      <div className="flex h-1.5 overflow-hidden rounded-full bg-ink-900/[0.07]" aria-hidden="true">
                        <span className="h-full bg-brand-500" style={{ width: `${(wh / p.stock) * 100}%` }} />
                        <span className="h-full bg-aqua-400" style={{ width: `${(van / p.stock) * 100}%` }} />
                      </div>
                      <p className="tabular mt-1.5 text-center font-mono text-[10px] text-ink-500">
                        {wh} | {van}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Tag tone={ui.tone}>{ui.label}</Tag>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {!compact && (
            <div className="flex items-center gap-3 rounded-2xl bg-mist px-3 py-2.5 ring-1 ring-ink-900/[0.04]">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600 ring-1 ring-aqua-100">
                <Truck className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] leading-tight font-semibold text-ink-900">Used on JOB-1024 · Running capacitor 35 µF × 1</p>
                <p className="mt-0.5 truncate text-[10.5px] text-ink-500">Deducted from Van 2 · Ravi Kumar</p>
              </div>
              <span className="flex items-center gap-0.5 font-mono text-[11px] font-semibold text-coral-600">
                <ArrowDownRight className="size-3.5" aria-hidden="true" /> −1
              </span>
            </div>
          )}
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="-bottom-10 left-[34%] w-[226px]" delay={800}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral-600 ring-1 ring-coral-100">
              <BellRing className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] leading-tight font-semibold text-ink-900">Low stock</p>
              <Mono className="mt-0.5 block normal-case">CAP-035 · 2 left, min 10</Mono>
            </div>
          </div>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
