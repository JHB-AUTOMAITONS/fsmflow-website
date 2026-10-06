import { BellRing, Check, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { cn } from '@/lib/cn'
import { FakeButton, FloatCard, Mono, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

/** October 2026 starts on a Thursday; weeks are Monday-first. */
const LEAD_BLANKS = 3
const DAYS = 31
const TODAY = 6
const MARKS: Record<number, 'done' | 'visit' | 'renewal'> = { 4: 'done', 9: 'visit', 13: 'visit', 16: 'visit', 18: 'renewal', 22: 'visit', 27: 'visit' }

const VISITS = [
  { label: 'Jan', date: '04 Jan', done: true },
  { label: 'Apr', date: '05 Apr', done: true },
  { label: 'Jul', date: '05 Jul', done: true },
  { label: 'Oct', date: '04 Oct', done: true },
]

const UPCOMING = [
  { date: '09 Oct', title: 'Hotel Palm Grove', note: 'AMC visit · 4 units · Suresh Pillai', tone: 'brand' },
  { date: '13 Oct', title: 'Greenleaf Offices', note: 'AMC visit · 8 units · Ravi Kumar', tone: 'brand' },
  { date: '18 Oct', title: 'Sharma Residency', note: 'AMC renewal due · 3 units', tone: 'heat' },
] as const

function MiniCalendar({ compact }: { compact?: boolean }) {
  const cells: (number | null)[] = [...Array<null>(LEAD_BLANKS).fill(null), ...Array.from({ length: DAYS }, (_, i) => i + 1)]
  while (cells.length % 7 !== 0) cells.push(null)
  return (
    <div className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.08]">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-semibold text-ink-900">October 2026</p>
        <span className="flex items-center gap-1 text-ink-500">
          <ChevronLeft className="size-4" aria-hidden="true" />
          <ChevronRight className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-y-1 text-center">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <span key={i} className="font-mono text-[9.5px] font-semibold text-ink-500">
            {d}
          </span>
        ))}
        {cells.map((d, i) => {
          const mark = d ? MARKS[d] : undefined
          return (
            <span key={i} className="flex justify-center">
              {d && (
                <span
                  className={cn(
                    'tabular relative flex size-7 items-center justify-center rounded-full text-[11px] font-medium text-ink-600',
                    d === TODAY && 'bg-ink-900 font-semibold text-white',
                    mark === 'visit' && d !== TODAY && 'bg-brand-50 font-semibold text-brand-700 ring-1 ring-brand-200',
                    mark === 'renewal' && 'bg-heat-50 font-semibold text-heat-600 ring-1 ring-heat-400',
                    mark === 'done' && 'bg-mint-50 font-semibold text-mint-600',
                  )}
                >
                  {d}
                </span>
              )}
            </span>
          )
        })}
      </div>
      {!compact && (
        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-ink-500">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-brand-500" /> AMC visit
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-heat-500" /> Renewal due
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-mint-500" /> Done
          </span>
        </div>
      )}
      {!compact && (
        <ul className="mt-3 space-y-1.5 border-t border-ink-900/[0.06] pt-3">
          {UPCOMING.map((u) => (
            <li key={u.date} className="flex items-center gap-2.5">
              <span className={cn('w-11 shrink-0 rounded-lg py-1 text-center font-mono text-[10px] font-semibold', u.tone === 'heat' ? 'bg-heat-50 text-heat-600' : 'bg-brand-50 text-brand-700')}>{u.date}</span>
              <div className="min-w-0">
                <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{u.title}</p>
                <p className="truncate text-[10.5px] text-ink-500">{u.note}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Warranty and AMC: renewal alert, coverage, visit timeline and a month calendar of scheduled visits. */
export function WarrantyVisual({ className, compact }: FeatureVisualProps) {
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title="Warranty & AMC"
        subtitle="Sharma Residency · AMC-0188"
        icon={ShieldCheck}
        actions={!compact && <Tag tone="mint">Contract active</Tag>}
        label="FSMFlow warranty and AMC view showing a renewal alert, contract coverage with visits used, a quarterly visit timeline, a month calendar of scheduled AMC visits and upcoming renewals"
      >
        <div className="space-y-3 p-3 @md:p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-heat-50 px-3 py-2.5 ring-1 ring-heat-100">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-white text-heat-600 shadow-card">
              <BellRing className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] leading-tight font-semibold text-ink-900">AMC renewal due in 12 days</p>
              <p className="mt-0.5 truncate text-[11px] text-ink-600">3 units · contract ends 18 Oct 2026</p>
            </div>
            {!compact && <FakeButton className="hidden @sm:inline-flex">Start renewal</FakeButton>}
          </div>

          <div className={cn('grid gap-3', !compact && '@xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]')}>
            <div className="min-w-0 space-y-3">
              <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.08]">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold text-ink-700">Coverage</p>
                  <Mono>19 Oct 2025 – 18 Oct 2026</Mono>
                </div>
                <div className="mt-3 space-y-3">
                  <div>
                    <div className="mb-1.5 flex justify-between text-[11px]">
                      <span className="text-ink-600">Visits used</span>
                      <span className="font-mono font-semibold text-ink-900">4 of 4</span>
                    </div>
                    <Meter value={100} tone="mint" />
                  </div>
                  <div>
                    <div className="mb-1.5 flex justify-between text-[11px]">
                      <span className="text-ink-600">Contract period elapsed</span>
                      <span className="font-mono font-semibold text-heat-600">97%</span>
                    </div>
                    <Meter value={97} tone="heat" delay={120} />
                  </div>
                  {!compact && (
                    <div>
                      <div className="mb-1.5 flex justify-between text-[11px]">
                        <span className="text-ink-600">Cassette AC warranty</span>
                        <span className="font-mono font-semibold text-ink-900">Till Dec 2026</span>
                      </div>
                      <Meter value={84} tone="aqua" delay={240} />
                    </div>
                  )}
                </div>

                <div className="relative mt-4 grid grid-cols-4">
                  <span className="absolute top-[11px] right-[12.5%] left-[12.5%] h-[2px] rounded-full bg-brand-500" aria-hidden="true" />
                  {VISITS.map((v) => (
                    <div key={v.label} className="relative flex flex-col items-center gap-1 text-center">
                      <span className="flex size-[22px] items-center justify-center rounded-full bg-brand-500 text-white ring-2 ring-white">
                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[10.5px] leading-tight font-semibold text-ink-800">{v.label}</span>
                      <span className="font-mono text-[9.5px] text-ink-500">{v.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {!compact && (
                <div className="grid grid-cols-3 gap-2">
                  {[
                    ['Contract value', '₹86,000 / yr'],
                    ['Units covered', '3 units'],
                    ['Visits', 'Quarterly'],
                  ].map(([l, v]) => (
                    <div key={l} className="rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.04]">
                      <p className="text-[10px] font-medium text-ink-500">{l}</p>
                      <p className="mt-1 text-[11.5px] leading-tight font-semibold text-ink-800">{v}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!compact && (
              <div className="min-w-0">
                <MiniCalendar />
              </div>
            )}
          </div>
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="-bottom-10 left-8 w-[232px]" delay={800}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <ShieldCheck className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] leading-tight font-semibold text-ink-900">Visit scheduled · 09 Oct</p>
              <p className="mt-0.5 text-[11px] text-ink-500">Hotel Palm Grove · assigned</p>
            </div>
          </div>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
