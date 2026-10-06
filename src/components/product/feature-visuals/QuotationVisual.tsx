import { ArrowRight, Check, IndianRupee, Plus, ReceiptText } from 'lucide-react'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { PARTS } from '@/data/sample'
import { cn } from '@/lib/cn'
import { inr } from '@/lib/format'
import { FakeButton, FloatCard, Mono, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

const part = (sku: string) => {
  const p = PARTS.find((x) => x.sku === sku)
  if (!p) throw new Error(`Unknown sample part ${sku}`)
  return p
}

interface Line {
  name: string
  sub: string
  type: 'Part' | 'Labour'
  qty: number
  rate: number
}

const LINES: Line[] = [
  { name: part('PCB-INV').name, sub: part('PCB-INV').sku, type: 'Part', qty: 1, rate: part('PCB-INV').price },
  { name: part('PMP-DRN').name, sub: part('PMP-DRN').sku, type: 'Part', qty: 1, rate: part('PMP-DRN').price },
  { name: part('CAP-035').name, sub: part('CAP-035').sku, type: 'Part', qty: 2, rate: part('CAP-035').price },
  { name: 'R32 refrigerant top-up', sub: 'GAS-R32 · per kg', type: 'Part', qty: 1, rate: part('GAS-R32').price },
  { name: 'Labour · diagnosis and repair', sub: 'Split AC · 2 units', type: 'Labour', qty: 1, rate: 1200 },
]

const partsTotal = LINES.filter((l) => l.type === 'Part').reduce((s, l) => s + l.qty * l.rate, 0)
const labourTotal = LINES.filter((l) => l.type === 'Labour').reduce((s, l) => s + l.qty * l.rate, 0)
const SUBTOTAL = partsTotal + labourTotal
const DISCOUNT = 490
const TOTAL = SUBTOTAL - DISCOUNT
const PAID = 3000

const COLS = 'grid grid-cols-[minmax(0,1fr)_1.5rem_4.5rem] items-center gap-x-2 @2xl:grid-cols-[minmax(0,1fr)_1.5rem_3.75rem_4.5rem]'

const JOURNEY = [
  { label: 'Draft', meta: 'Created by Priya', state: 'done' },
  { label: 'Sent', meta: '06 Oct · 09:40', state: 'done' },
  { label: 'Approved', meta: '06 Oct · 10:12', state: 'current' },
  { label: 'Invoiced', meta: 'Next step', state: 'todo' },
  { label: 'Paid', meta: 'Balance ' + inr(TOTAL - PAID), state: 'todo' },
] as const

/** Quotation: a document with parts and labour, the status journey and a payment tracker. */
export function QuotationVisual({ className, compact }: FeatureVisualProps) {
  const lines = compact ? LINES.slice(0, 3) : LINES
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title="Quotation QT-0482"
        subtitle="Sharma Residency · Anna Nagar"
        icon={ReceiptText}
        actions={<StatusPill status="completed" label="Approved" live={false} />}
        label="FSMFlow quotation for an AC repair showing parts and labour line items, discount and total of ₹7,000, with a status journey from draft to paid and a payment tracker for the invoice"
      >
        <div className={cn('grid gap-3 p-3 @md:p-4', !compact && '@xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]')}>
          <div className="min-w-0 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-ink-900/[0.08]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Mono>Quotation</Mono>
                <p className="mt-1 font-display text-lg leading-none font-semibold tracking-[-0.02em] text-ink-900">QT-0482</p>
              </div>
              <div className="text-right text-[10.5px] leading-snug text-ink-500">
                <p>Date · 06 Oct 2026</p>
                <p>Valid till · 20 Oct 2026</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl bg-mist px-3 py-2 ring-1 ring-ink-900/[0.04]">
              <p className="text-[10px] font-medium text-ink-500">Prepared for</p>
              <p className="text-[12px] font-semibold text-ink-800">Sharma Residency · Mr. Anil Sharma</p>
            </div>

            <div className="mt-3">
              <div className={cn(COLS, 'border-b border-ink-900/[0.08] pb-1.5 text-[10px] font-semibold tracking-wide text-ink-500 uppercase')}>
                <span>Item</span>
                <span className="text-center">Qty</span>
                <span className="hidden text-right @2xl:block">Rate</span>
                <span className="text-right">Amount</span>
              </div>
              <ul>
                {lines.map((l) => (
                  <li key={l.name} className={cn(COLS, 'border-b border-ink-900/[0.05] py-2')}>
                    <div className="min-w-0">
                      <p className="truncate text-[12px] leading-tight font-semibold text-ink-800">{l.name}</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-ink-500">
                        <Tag tone={l.type === 'Part' ? 'brand' : 'aqua'} className="px-1 py-0 text-[9.5px]">
                          {l.type}
                        </Tag>
                        <span className="truncate font-mono">{l.sub}</span>
                      </p>
                    </div>
                    <span className="tabular text-center text-[11.5px] text-ink-600">{l.qty}</span>
                    <span className="tabular hidden text-right text-[11.5px] text-ink-500 @2xl:block">{inr(l.rate)}</span>
                    <span className="tabular text-right text-[12px] font-semibold text-ink-900">{inr(l.qty * l.rate)}</span>
                  </li>
                ))}
              </ul>
              {!compact && (
                <div className="mt-2 flex items-center gap-1.5 rounded-xl border border-dashed border-ink-200 px-2.5 py-1.5 text-[11px] font-medium text-ink-500">
                  <Plus className="size-3.5 text-brand-500" aria-hidden="true" /> Add part from price list
                </div>
              )}
            </div>

            <dl className="mt-3 ml-auto max-w-[15rem] space-y-1 text-[11.5px]">
              {!compact && (
                <>
                  <div className="flex justify-between text-ink-500">
                    <dt>Parts</dt>
                    <dd className="tabular">{inr(partsTotal)}</dd>
                  </div>
                  <div className="flex justify-between text-ink-500">
                    <dt>Labour</dt>
                    <dd className="tabular">{inr(labourTotal)}</dd>
                  </div>
                  <div className="flex justify-between text-mint-600">
                    <dt>Existing customer discount</dt>
                    <dd className="tabular">−{inr(DISCOUNT)}</dd>
                  </div>
                </>
              )}
              <div className="flex items-baseline justify-between border-t border-ink-900/[0.08] pt-2">
                <dt className="text-[12px] font-semibold text-ink-700">Total</dt>
                <dd className="tabular font-display text-xl leading-none font-semibold tracking-[-0.03em] text-ink-900">{inr(compact ? SUBTOTAL - DISCOUNT : TOTAL)}</dd>
              </div>
            </dl>
          </div>

          {!compact && (
            <div className="min-w-0 space-y-3">
              <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.08]">
                <p className="text-[11px] font-semibold text-ink-700">Quotation status</p>
                <ol className="mt-3 space-y-0">
                  {JOURNEY.map((s, i) => (
                    <li key={s.label} className="relative flex gap-2.5 pb-3 last:pb-0">
                      {i < JOURNEY.length - 1 && (
                        <span className={cn('absolute top-5 bottom-0 left-[9px] w-px', s.state === 'done' ? 'bg-brand-300' : 'bg-ink-900/10')} aria-hidden="true" />
                      )}
                      <span
                        className={cn(
                          'relative flex size-[19px] shrink-0 items-center justify-center rounded-full',
                          s.state === 'done' && 'bg-brand-500 text-white',
                          s.state === 'current' && 'bg-mint-500 text-white shadow-pop',
                          s.state === 'todo' && 'bg-ink-100 text-ink-300',
                        )}
                      >
                        {s.state === 'current' && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-mint-500/40" />}
                        {s.state === 'todo' ? <span className="size-1.5 rounded-full bg-current" /> : <Check className="size-3" strokeWidth={3} aria-hidden="true" />}
                      </span>
                      <div className="min-w-0">
                        <p className={cn('text-[12px] leading-tight font-semibold', s.state === 'todo' ? 'text-ink-500' : 'text-ink-900')}>{s.label}</p>
                        <p className="font-mono text-[10px] text-ink-500">{s.meta}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.08]">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-700">
                    <IndianRupee className="size-3.5 text-brand-500" aria-hidden="true" /> Payment tracker
                  </p>
                  <Mono>Advance</Mono>
                </div>
                <Meter value={(PAID / TOTAL) * 100} tone="mint" className="mt-3" />
                <div className="mt-2 flex items-end justify-between text-[11px]">
                  <span className="text-ink-500">
                    Paid <span className="tabular font-semibold text-mint-600">{inr(PAID)}</span>
                  </span>
                  <span className="text-ink-500">
                    Balance <span className="tabular font-semibold text-ink-900">{inr(TOTAL - PAID)}</span>
                  </span>
                </div>
                <FakeButton className="mt-3 w-full py-2">
                  Convert to job and invoice <ArrowRight className="size-3.5" aria-hidden="true" />
                </FakeButton>
              </div>
            </div>
          )}
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="right-6 bottom-12 w-[218px] @2xl:-right-5" delay={800}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-mint-50 text-mint-600 ring-1 ring-mint-100">
              <Check className="size-4" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] leading-tight font-semibold text-ink-900">Customer approved</p>
              <p className="mt-0.5 font-mono text-[10.5px] text-ink-500">QT-0482 · {inr(TOTAL)}</p>
            </div>
          </div>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
