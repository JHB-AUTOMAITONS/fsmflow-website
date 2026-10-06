import { CalendarClock, LayoutGrid, SunMedium } from 'lucide-react'
import { useId, type CSSProperties } from 'react'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { inrCompact } from '@/lib/format'
import { cn } from '@/lib/cn'
import { GrowScope, Panel, PanelHead } from './parts'
import { OM_VISITS, SOLAR_PROJECT, SOLAR_STAGES } from './sample'

/** Stage colours run from light blue to indigo as a project moves through the pipeline. */
const STAGE_FILL = ['#bdd3ff', '#8db2ff', '#5a8bff', '#2f66ff', '#6554f3']
const TOTAL_KW = SOLAR_STAGES.reduce((a, s) => a + s.kw, 0)
const TOTAL_PROJECTS = SOLAR_STAGES.reduce((a, s) => a + s.count, 0)

const CARD_PROGRESS: Record<string, number[]> = { install: [60, 25], commission: [90] }

const PANEL_COLS = 6
const PANEL_W = 40
const PANEL_H = 66
const GAP = 4
const X0 = 34
const Y0 = 48
const INSTALLED = 9

/** Top-down rooftop with the panel array, a DC string to the inverter and install progress. */
function RoofLayout({ className }: { className?: string }) {
  const id = useId()
  const panels = Array.from({ length: 12 }, (_, i) => ({
    i,
    x: X0 + (i % PANEL_COLS) * (PANEL_W + GAP),
    y: Y0 + Math.floor(i / PANEL_COLS) * (PANEL_H + GAP),
  }))
  return (
    <svg viewBox="0 0 360 232" className={cn('h-auto w-full', className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-roof`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f7fc" />
          <stop offset="1" stopColor="#e3eaf6" />
        </linearGradient>
        <linearGradient id={`${id}-panel`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3f74ff" />
          <stop offset="1" stopColor="#1a3fb8" />
        </linearGradient>
        <linearGradient id={`${id}-glare`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.32" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <pattern id={`${id}-cells`} patternUnits="objectBoundingBox" width="0.25" height="0.1">
          <path d="M0 0 H10 M0 0 V6.6" stroke="#fff" strokeOpacity="0.26" strokeWidth="0.6" fill="none" />
        </pattern>
        <radialGradient id={`${id}-sun`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffb547" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffb547" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sun */}
      <circle cx="326" cy="18" r="22" fill={`url(#${id}-sun)`} />
      <g transform="translate(326 18)">
        <g className="animate-fan" style={{ transformOrigin: '0px 0px' }} stroke="#ff9f1c" strokeWidth="1.6" strokeLinecap="round">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
            <path key={d} d="M0 -10.5 V-14.5" transform={`rotate(${d})`} />
          ))}
        </g>
        <circle r="6.5" fill="#ffb547" stroke="#ff9f1c" strokeWidth="1.4" />
      </g>

      <g transform="rotate(-2.5 180 120)">
        {/* roof slab */}
        <rect x="20" y="30" width="320" height="178" rx="9" fill={`url(#${id}-roof)`} stroke="#0b1736" strokeOpacity="0.14" />
        <rect x="26" y="36" width="308" height="166" rx="6" fill="none" stroke="#0b1736" strokeOpacity="0.07" strokeDasharray="2 3" />

        {/* DC string between the two rows, running to the inverter */}
        <path d={`M${X0} 116 H306`} fill="none" stroke="#ff9f1c" strokeWidth="1.8" strokeLinecap="round" className="flow-line" />

        {/* panels */}
        {panels.map((p) => {
          const state = p.i < INSTALLED ? 'done' : p.i === INSTALLED ? 'active' : 'queued'
          return (
            <g key={p.i} transform={`translate(${p.x} ${p.y})`}>
              {state === 'done' ? (
                <>
                  <rect width={PANEL_W} height={PANEL_H} rx="2.5" fill={`url(#${id}-panel)`} stroke="#fff" strokeOpacity="0.6" />
                  <rect width={PANEL_W} height={PANEL_H} rx="2.5" fill={`url(#${id}-cells)`} />
                  <rect width={PANEL_W} height={PANEL_H} rx="2.5" fill={`url(#${id}-glare)`} />
                </>
              ) : (
                <>
                  {state === 'active' && <rect width={PANEL_W} height={PANEL_H} rx="2.5" fill="#ff9f1c" opacity="0.28" className="animate-blink" />}
                  <rect
                    width={PANEL_W}
                    height={PANEL_H}
                    rx="2.5"
                    fill={state === 'active' ? '#fff5e3' : '#ffffff'}
                    fillOpacity={state === 'active' ? 0.9 : 0.7}
                    stroke={state === 'active' ? '#ff9f1c' : '#2f66ff'}
                    strokeOpacity={state === 'active' ? 1 : 0.5}
                    strokeWidth="1.3"
                    strokeDasharray="4 3"
                  />
                </>
              )}
            </g>
          )
        })}

        {/* inverter */}
        <g transform="translate(308 98)">
          <rect width="26" height="38" rx="4" fill="#0b1736" />
          <rect x="4" y="5" width="18" height="9" rx="2" fill="#52d1f0" opacity="0.9" />
          <circle cx="8" cy="22" r="1.8" fill="#12b76a" />
          <circle cx="13" cy="22" r="1.8" fill="#ffb547" />
          <path d="M5 29 H21 M5 33 H21" stroke="#fff" strokeOpacity="0.3" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </g>

      {/* labels */}
      <g fontFamily="'JetBrains Mono Variable', monospace" fontSize="7" fontWeight="600" letterSpacing="1.2" fill="#5a6a92">
        <text x="24" y="224">SOUTH-FACING · TILT 15°</text>
        <text x="258" y="224">INVERTER 5 KW</text>
      </g>
      {/* compass */}
      <g transform="translate(22 14)">
        <circle r="9" fill="#fff" stroke="#0b1736" strokeOpacity="0.12" />
        <path d="M0 -6 L3 3 L0 1 L-3 3 Z" fill="#2f66ff" />
        <text y="-11" textAnchor="middle" fontFamily="'JetBrains Mono Variable', monospace" fontSize="6" fontWeight="700" fill="#5a6a92">
          N
        </text>
      </g>
    </svg>
  )
}

export function SolarVisual({ className }: { className?: string }) {
  return (
    <ProductWindow
      className={className}
      title="FSMFlow · Solar projects"
      subtitle="Rooftop and EPC · Pune"
      icon={SunMedium}
      actions={<Tag tone="heat">27 active</Tag>}
      label="FSMFlow solar project board showing 27 projects and 361 kW by stage from survey to after-sales service, a rooftop panel layout with nine of twelve panels installed, installation progress meters, and the upcoming annual maintenance contract (AMC) and service visit schedule"
    >
      <GrowScope className="space-y-3 p-3.5 @md:p-4">
        {/* pipeline */}
        <Panel className="p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[12px] font-semibold text-ink-900">Project pipeline · by stage</p>
            <p className="font-mono text-[10px] text-ink-500">
              {TOTAL_PROJECTS} projects · {TOTAL_KW} kW
            </p>
          </div>
          <div className="mt-2.5 flex h-2 gap-[3px] overflow-hidden rounded-full" aria-hidden="true">
            {SOLAR_STAGES.map((s, i) => (
              <span
                key={s.key}
                className="grow-x h-full rounded-full"
                style={{ width: `${(s.kw / TOTAL_KW) * 100}%`, background: STAGE_FILL[i], '--d': `${i * 90}ms` } as CSSProperties}
              />
            ))}
          </div>

          {/* wide: kanban columns */}
          <div className="mt-3 hidden grid-cols-5 gap-1.5 @md:grid">
            {SOLAR_STAGES.map((s, i) => (
              <div key={s.key} className="min-w-0 rounded-xl bg-mist p-1.5 ring-1 ring-ink-900/[0.04]">
                <div className="px-1 pt-0.5 pb-1.5">
                  <p className="flex items-center gap-1.5 truncate font-mono text-[8.5px] font-semibold tracking-wider text-ink-500 uppercase">
                    <span className="size-1.5 shrink-0 rounded-full" style={{ background: STAGE_FILL[i] }} />
                    <span className="truncate">{s.label}</span>
                  </p>
                  <p className="mt-1 font-mono text-[9.5px] text-ink-500">
                    <span className="font-semibold text-ink-700">{s.count}</span> · {s.kw} kW
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {s.cards.map((c, ci) => {
                    const progress = CARD_PROGRESS[s.key]?.[ci]
                    return (
                      <li key={c.name} className="rounded-lg bg-white p-2 shadow-card ring-1 ring-ink-900/[0.05]">
                        <p className="truncate text-[10.5px] leading-tight font-semibold text-ink-900">{c.name}</p>
                        <p className="mt-1 flex items-baseline justify-between gap-1">
                          <span className="font-display text-[13px] leading-none font-semibold tracking-[-0.02em] text-ink-900">{c.kw} kW</span>
                          {c.value > 0 && <span className="tabular text-[9.5px] text-ink-500">{inrCompact(c.value)}</span>}
                        </p>
                        {progress !== undefined && <Meter value={progress} tone="brand" className="mt-1.5" delay={i * 60} />}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* narrow: compact rows */}
          <ul className="mt-3 space-y-2 @md:hidden">
            {SOLAR_STAGES.map((s, i) => (
              <li key={s.key} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1">
                <p className="flex min-w-0 items-center gap-1.5 text-[11.5px] font-semibold text-ink-800">
                  <span className="size-2 shrink-0 rounded-full" style={{ background: STAGE_FILL[i] }} />
                  <span className="truncate">{s.label}</span>
                </p>
                <p className="font-mono text-[10.5px] text-ink-500">
                  {s.count} · {s.kw} kW
                </p>
              </li>
            ))}
          </ul>
        </Panel>

        <div className="grid gap-3 @lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <Panel className="overflow-hidden">
            <PanelHead icon={LayoutGrid} title={`Panel layout · ${SOLAR_PROJECT.name}`} meta={`${SOLAR_PROJECT.kwp} kWp`} />
            <div className="px-2 pb-1">
              <RoofLayout />
            </div>
            <div className="flex flex-wrap items-center gap-1.5 border-t border-ink-900/[0.05] px-3 py-2">
              <Tag tone="brand">
                {SOLAR_PROJECT.panels} × {SOLAR_PROJECT.wp} Wp
              </Tag>
              <Tag tone="mint">9 mounted</Tag>
              <Tag tone="heat">3 to go</Tag>
            </div>
          </Panel>

          <Panel className="flex flex-col">
            <div className="flex items-start justify-between gap-2 px-3 pt-3">
              <div className="min-w-0">
                <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">{SOLAR_PROJECT.id}</p>
                <p className="truncate text-[12.5px] leading-tight font-semibold text-ink-900">{SOLAR_PROJECT.name}</p>
                <p className="text-[10.5px] text-ink-500">{SOLAR_PROJECT.area}</p>
              </div>
              <StatusPill status="in-progress" label="Installation" />
            </div>
            <ul className="space-y-2.5 px-3 pt-3 pb-3.5">
              {SOLAR_PROJECT.meters.map((m, i) => (
                <li key={m.label}>
                  <div className="mb-1 flex items-center justify-between text-[11px]">
                    <span className="text-ink-700">{m.label}</span>
                    <span className="font-mono text-[10px] font-semibold text-ink-500">{m.value}%</span>
                  </div>
                  <Meter value={m.value} tone={m.tone} delay={i * 80} />
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-2.5 border-t border-ink-900/[0.05] px-3 py-2.5">
              <Avatar initials="IK" tone="iris" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] leading-tight font-semibold text-ink-900">Inverter wiring · today</p>
                <p className="truncate text-[10.5px] text-ink-500">Imran Khan · 2 technicians</p>
              </div>
              <StatusPill status="assigned" />
            </div>
          </Panel>
        </div>

        <Panel>
          <PanelHead icon={CalendarClock} title="AMC and service schedule" meta="Next 14 days" />
          <ul className="divide-y divide-ink-900/[0.05] px-1 pb-1">
            {OM_VISITS.slice(0, 2).map((v) => (
              <li key={v.date + v.task} className="flex items-center gap-3 px-2 py-2">
                <span className="w-12 shrink-0 rounded-lg bg-mist py-1 text-center font-mono text-[10.5px] font-semibold text-ink-600 ring-1 ring-ink-900/[0.04]">
                  {v.date}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{v.task}</p>
                  <p className="truncate text-[10.5px] text-ink-500">{v.site}</p>
                </div>
                <Tag tone={v.tag === 'AMC' ? 'mint' : 'iris'}>{v.tag}</Tag>
              </li>
            ))}
          </ul>
        </Panel>
      </GrowScope>
    </ProductWindow>
  )
}
