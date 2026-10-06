import { AirVent, Boxes, CalendarClock, Search, ShieldCheck } from 'lucide-react'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { CUSTOMER } from '@/data/sample'
import { cn } from '@/lib/cn'
import { FloatCard, Mono, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

/** Deterministic QR-style tile (no randomness, so server and client markup match). */
export function QrTile({ seed, className }: { seed: string; className?: string }) {
  const n = 15
  let s = 0
  for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) >>> 0
  const cells: { x: number; y: number }[] = []
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const finder = (x < 6 && y < 6) || (x > n - 7 && y < 6) || (x < 6 && y > n - 7)
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0
      if (!finder && (s >>> 27) % 2 === 0) cells.push({ x, y })
    }
  }
  const finderAt = (x: number, y: number) => (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
      <rect width="5" height="5" rx="0.7" fill="#0b1736" />
      <rect x="1" y="1" width="3" height="3" fill="#fff" />
      <rect x="2" y="2" width="1" height="1" fill="#0b1736" />
    </g>
  )
  return (
    <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} className={cn('size-full', className)} aria-hidden="true" focusable="false">
      <rect x="-1" y="-1" width={n + 2} height={n + 2} fill="#fff" />
      {cells.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width="1" height="1" fill="#0b1736" />
      ))}
      {finderAt(0, 0)}
      {finderAt(n - 5, 0)}
      {finderAt(0, n - 5)}
    </svg>
  )
}

const HISTORY = [
  { date: '04 Oct', title: 'AC Maintenance', note: 'Filters cleaned, gas pressure normal' },
  { date: '12 Jul', title: 'AC Repair', note: 'Running capacitor replaced' },
  { date: '05 Apr', title: 'AMC Visit', note: 'Quarterly service completed' },
]

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.04]">
      <p className="text-[10px] font-medium text-ink-500">{label}</p>
      <div className="mt-1 text-[12px] leading-tight font-semibold text-ink-800">{children}</div>
    </div>
  )
}

/** Asset management: registry of installed units + the detail record of one unit. */
export function AssetVisual({ className, compact }: FeatureVisualProps) {
  const unit = CUSTOMER.assets[0]
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title="Assets · Sharma Residency"
        subtitle="Customer #1024 · 3 units installed"
        icon={Boxes}
        actions={!compact && <Tag tone="mint">AMC active</Tag>}
        label="FSMFlow asset registry for an HVAC customer listing three installed AC units, with the selected split AC showing serial number, install date, warranty, AMC status, next service date, tag and service history"
      >
        <div className={cn('grid gap-3 p-3 @md:p-4', !compact && '@xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)]')}>
          {!compact && (
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 rounded-xl bg-ink-50 px-2.5 py-2 text-[11px] text-ink-500">
                <Search className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">Search by serial, model or area</span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10.5px] font-semibold">
                {['All', 'Warranty', 'AMC', 'Due soon'].map((f, i) => (
                  <span key={f} className={cn('rounded-full px-2.5 py-1 ring-1 ring-inset', i === 0 ? 'bg-brand-50 text-brand-700 ring-brand-100' : 'bg-white text-ink-500 ring-ink-900/10')}>
                    {f}
                  </span>
                ))}
              </div>
              <ul className="mt-2.5 space-y-1.5">
                {CUSTOMER.assets.map((a, i) => (
                  <li
                    key={a.name}
                    className={cn(
                      'flex items-center gap-2.5 rounded-2xl p-2.5 ring-1 ring-inset',
                      i === 0 ? 'bg-brand-50/70 ring-brand-200' : 'bg-white ring-ink-900/[0.07]',
                    )}
                  >
                    <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-xl', i === 0 ? 'bg-brand-gradient text-white' : 'bg-ink-50 text-ink-500')}>
                      <AirVent className="size-[18px]" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] leading-tight font-semibold text-ink-900">{a.name}</p>
                      <p className="mt-0.5 truncate text-[10.5px] text-ink-500">
                        {a.model} · {a.location}
                      </p>
                    </div>
                    {a.status === 'expiring' ? <StatusPill status="in-progress" label="Renewal due" live={false} className="hidden @2xl:inline-flex" /> : <span className="size-2 shrink-0 rounded-full bg-mint-500" />}
                  </li>
                ))}
              </ul>
              <div className="mt-2.5 flex items-center gap-1.5 rounded-2xl border border-dashed border-ink-200 px-3 py-2 text-[11px] font-medium text-ink-500">
                <span className="flex size-4 items-center justify-center rounded-full bg-brand-50 text-brand-600">+</span> Add unit to this site
              </div>
              <div className="mt-2.5 rounded-2xl bg-mist p-3 ring-1 ring-ink-900/[0.04]">
                <p className="text-[11px] font-semibold text-ink-700">Coverage across units</p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  {[
                    ['3 / 3', 'Under AMC'],
                    ['2 / 3', 'In warranty'],
                    ['1', 'Renewal due'],
                  ].map(([n, l]) => (
                    <div key={l} className="rounded-xl bg-white px-1 py-2 ring-1 ring-ink-900/[0.05]">
                      <p className="tabular font-display text-[1rem] leading-none font-semibold text-ink-900">{n}</p>
                      <p className="mt-1 text-[10px] text-ink-500">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="min-w-0 rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.08]">
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <Mono>AST-2208 · Unit 1 of 3</Mono>
                <p className="mt-1.5 font-display text-[1.05rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">{unit.name}</p>
                <p className="mt-0.5 text-[11px] text-ink-500">{unit.model}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Tag tone="mint">
                    <ShieldCheck className="size-3" aria-hidden="true" /> In warranty
                  </Tag>
                  <Tag tone="brand">AMC active</Tag>
                </div>
              </div>
              <div className="shrink-0 text-center">
                <div className="size-[4.25rem] overflow-hidden rounded-xl p-1 ring-1 ring-ink-900/10">
                  <QrTile seed="AST-2208-45193" />
                </div>
                <p className="mt-1 font-mono text-[9px] font-semibold text-ink-500">AST-2208</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 @2xl:grid-cols-3">
              <Fact label="Serial no.">
                <span className="font-mono text-[11.5px]">2208-45193</span>
              </Fact>
              <Fact label="Installed">14 Mar 2023</Fact>
              <Fact label="Warranty">Till Mar 2027</Fact>
              {!compact && <Fact label="Last service">04 Oct 2026</Fact>}
              {!compact && <Fact label="Site">Ground floor</Fact>}
              {!compact && <Fact label="Visits to date">12 jobs</Fact>}
            </div>

            <div className="mt-3 rounded-xl bg-brand-50/70 p-2.5 ring-1 ring-brand-100">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-800">
                  <CalendarClock className="size-3.5" aria-hidden="true" /> Next service · 04 Jan 2027
                </p>
                <span className="font-mono text-[10px] font-semibold text-brand-700">in 90 days</span>
              </div>
              <Meter value={22} tone="brand" className="mt-2" />
            </div>

            {!compact && (
              <div className="mt-3">
                <p className="text-[11px] font-semibold text-ink-700">Service history</p>
                <ol className="mt-2 space-y-2 border-l border-ink-900/10 pl-3">
                  {HISTORY.map((h) => (
                    <li key={h.date} className="relative">
                      <span className="absolute top-1 -left-[17px] size-2 rounded-full bg-brand-500 ring-2 ring-white" />
                      <p className="text-[11.5px] leading-tight font-semibold text-ink-800">
                        {h.title} <span className="font-mono text-[10px] font-medium text-ink-500">· {h.date}</span>
                      </p>
                      <p className="text-[10.5px] text-ink-500">{h.note}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="-bottom-8 -left-5 w-[222px]" delay={800}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-heat-50 text-heat-600 ring-1 ring-heat-100">
              <CalendarClock className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] leading-tight font-semibold text-ink-900">Cassette AC · Hall</p>
              <p className="mt-0.5 text-[11px] text-ink-500">AMC renews in 12 days</p>
            </div>
          </div>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
