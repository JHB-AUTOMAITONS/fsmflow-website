import { BellRing, Cctv, ClipboardList, Check, ScanLine, ShieldCheck } from 'lucide-react'
import { useId } from 'react'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { cn } from '@/lib/cn'
import { GrowScope, LegendDot, MiniStepper, Panel, PanelHead } from './parts'
import { FLOOR_CAMERAS, INSTALLED_CAMERAS, type CameraState, type FloorCamera } from './sample'

const STATE_COLOR: Record<CameraState, string> = {
  installed: '#2f66ff',
  mounting: '#ff9f1c',
  pending: '#8793b3',
}

const f = (n: number) => n.toFixed(1)
const rad = (deg: number) => (deg * Math.PI) / 180

/** Pie-slice path for a camera's field of view. */
function cone(c: FloorCamera) {
  const a1 = rad(c.angle - c.spread / 2)
  const a2 = rad(c.angle + c.spread / 2)
  const x1 = c.x + Math.cos(a1) * c.reach
  const y1 = c.y + Math.sin(a1) * c.reach
  const x2 = c.x + Math.cos(a2) * c.reach
  const y2 = c.y + Math.sin(a2) * c.reach
  return `M${f(c.x)} ${f(c.y)} L${f(x1)} ${f(y1)} A${c.reach} ${c.reach} 0 0 1 ${f(x2)} ${f(y2)} Z`
}

const WALL = { stroke: '#0b1736', strokeOpacity: 0.34, strokeWidth: 2.4, strokeLinecap: 'round' as const, fill: 'none' }

/** Office floor plan with camera positions, field-of-view cones and cable runs to the NVR. */
function FloorPlan({ className }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="8 8 404 254" className={cn('h-auto w-full', className)} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`${id}-clip`}>
          <rect x="14" y="14" width="392" height="242" rx="12" />
        </clipPath>
        {FLOOR_CAMERAS.map((c) => (
          <radialGradient key={c.id} id={`${id}-fov${c.id}`} gradientUnits="userSpaceOnUse" cx={c.x} cy={c.y} r={c.reach}>
            <stop offset="0" stopColor={STATE_COLOR[c.state]} stopOpacity={c.state === 'pending' ? 0.12 : 0.3} />
            <stop offset="1" stopColor={STATE_COLOR[c.state]} stopOpacity="0.02" />
          </radialGradient>
        ))}
      </defs>

      {/* building + rooms */}
      <rect x="14" y="14" width="392" height="242" rx="12" fill="#ffffff" />
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="14" y="14" width="126" height="114" fill="#eef4ff" />
        <rect x="14" y="128" width="82" height="128" fill="#f3f1ff" />
        <rect x="96" y="150" width="154" height="106" fill="#fff5e3" opacity="0.7" />
        <rect x="250" y="150" width="156" height="106" fill="#e6faff" opacity="0.8" />
        <rect x="140" y="14" width="266" height="136" fill="#fafcff" />

        {/* furniture */}
        <g fill="#e7ecf6" stroke="#0b1736" strokeOpacity="0.07">
          <rect x="22" y="52" width="14" height="30" rx="5" />
          <rect x="164" y="48" width="40" height="18" rx="4" />
          <rect x="218" y="48" width="40" height="18" rx="4" />
          <rect x="272" y="48" width="40" height="18" rx="4" />
          <rect x="326" y="48" width="40" height="18" rx="4" />
          <rect x="164" y="96" width="40" height="18" rx="4" />
          <rect x="218" y="96" width="40" height="18" rx="4" />
          <rect x="272" y="96" width="40" height="18" rx="4" />
          <rect x="326" y="96" width="40" height="18" rx="4" />
          <rect x="150" y="204" width="56" height="18" rx="4" />
        </g>
        <rect x="44" y="82" width="62" height="16" rx="8" fill="#bdd3ff" opacity="0.7" />
        <ellipse cx="328" cy="206" rx="44" ry="17" fill="#8db2ff" opacity="0.4" />
        <g fill="#0b1736" opacity="0.1">
          <rect x="24" y="146" width="18" height="52" rx="3" />
          <rect x="48" y="146" width="18" height="52" rx="3" />
        </g>
        {/* NVR */}
        <rect x="26" y="222" width="58" height="18" rx="4" fill="#0b1736" />
        <text x="55" y="250" textAnchor="middle" fontFamily="'JetBrains Mono Variable', monospace" fontSize="7" fontWeight="600" fill="#5a6a92">NVR</text>
        <circle cx="34" cy="231" r="2" fill="#12b76a" />
        <circle cx="41" cy="231" r="2" fill="#12b76a" />
        <circle cx="48" cy="231" r="2" fill="#12b76a" />
        <rect x="56" y="228" width="22" height="6" rx="2" fill="#fff" opacity="0.18" />

        {/* cable runs */}
        <g fill="none" stroke="#6554f3" strokeOpacity="0.55" strokeWidth="1.5" strokeLinejoin="round" className="flow-line-slow">
          <path d="M84 231 H90 V202 H190 V150 V120 H394 V142" />
          <path d="M394 120 V26" />
          <path d="M190 120 V26 H152 H28" />
          <path d="M190 120 H130" />
          <path d="M190 202 H318 V244" />
          <path d="M70 222 V150 H88 V136" />
        </g>

        {/* fields of view */}
        {FLOOR_CAMERAS.map((c) => (
          <path
            key={c.id}
            d={cone(c)}
            fill={`url(#${id}-fov${c.id})`}
            stroke={STATE_COLOR[c.state]}
            strokeOpacity={c.state === 'pending' ? 0.4 : 0.4}
            strokeWidth="1"
            strokeDasharray={c.state === 'pending' ? '3 3' : undefined}
          />
        ))}
      </g>

      {/* walls */}
      <g {...WALL}>
        <path d="M140 14 V56 M140 84 V128" />
        <path d="M14 128 H96 V190 M96 214 V256" />
        <path d="M96 150 H176 M206 150 H290 M322 150 H406" />
        <path d="M250 150 V190 M250 214 V256" />
      </g>
      <rect x="14" y="14" width="392" height="242" rx="12" fill="none" stroke="#0b1736" strokeOpacity="0.28" strokeWidth="3" />
      {/* entrance gap */}
      <path d="M14 66 V96" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      <path d="M14 66 H22 M14 96 H22" stroke="#0b1736" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />

      {/* room labels */}
      <g fontFamily="'JetBrains Mono Variable', monospace" fontSize="8.5" fontWeight="600" letterSpacing="1" fill="#5a6a92">
        <text x="50" y="40">RECEPTION</text>
        <text x="226" y="38">OPEN OFFICE</text>
        <text x="20" y="143">SERVER</text>
        <text x="108" y="168">CABIN</text>
        <text x="262" y="168">MEETING</text>
      </g>

      {/* camera markers */}
      {FLOOR_CAMERAS.map((c) => (
        <g key={c.id} transform={`translate(${c.x} ${c.y})`}>
          {c.state === 'mounting' && <circle r="10" fill="#ff9f1c" opacity="0.4" className="origin-center animate-pulse-ring [transform-box:fill-box]" />}
          <circle r="9" fill="#fff" stroke={STATE_COLOR[c.state]} strokeWidth="2.2" strokeDasharray={c.state === 'pending' ? '3 2.4' : undefined} />
          <text y="3.6" textAnchor="middle" fontFamily="'Figtree Variable', sans-serif" fontSize="10.5" fontWeight="800" fill="#0b1736">
            {c.id}
          </text>
        </g>
      ))}

      {/* live callout */}
      <g transform="translate(236 208)">
        <rect width="116" height="24" rx="12" fill="#fff" stroke="#0b1736" strokeOpacity="0.12" />
        <circle cx="13" cy="12" r="3.4" fill="#ff9f1c" />
        <text x="23" y="15.6" fontFamily="'Figtree Variable', sans-serif" fontSize="10.5" fontWeight="700" fill="#0b1736">
          Camera 7 · mounting
        </text>
      </g>
    </svg>
  )
}

const CHECKS = [
  { label: 'Cameras mounted', value: '6 of 8', state: 'partial' as const },
  { label: 'NVR set up', value: '16-ch', state: 'done' as const },
  { label: 'Cable runs tested', value: '6 of 8', state: 'partial' as const },
  { label: 'Customer sign-off', value: 'Pending', state: 'todo' as const },
]

export function CctvVisual({ className }: { className?: string }) {
  return (
    <ProductWindow
      className={className}
      title="FSMFlow · Installation job"
      subtitle="CCTV · Orion Business Centre, Hyderabad"
      icon={Cctv}
      actions={<StatusPill status="in-progress" />}
      label="FSMFlow installation job for a CCTV company: a site survey floor plan with eight camera positions, viewing angles and cable runs to the NVR, an installation checklist, installed camera records with serial numbers, warranty and annual maintenance contract status, and upcoming service visit reminders"
    >
      <GrowScope className="space-y-3 p-3.5 @md:p-4">
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">JOB-2041</p>
            <p className="font-display text-[1.05rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">8-camera office installation</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Tag tone="iris">8 cameras</Tag>
            <Tag tone="brand">16-ch NVR</Tag>
            <Tag tone="aqua">Cat6 cabling</Tag>
          </div>
        </div>

        <MiniStepper steps={['Survey', 'Quotation', 'Installation', 'Handover', 'AMC']} current={2} />

        <div className="grid gap-3 @lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
          <Panel className="flex flex-col overflow-hidden">
            <PanelHead icon={ScanLine} title="Site survey · camera plan" meta="Floor 1" />
            <div className="flex flex-1 items-center px-2 pb-1">
              <FloorPlan />
            </div>
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 border-t border-ink-900/[0.05] px-3 py-2">
              <LegendDot className="bg-brand-500">Installed</LegendDot>
              <LegendDot className="bg-heat-500">Mounting</LegendDot>
              <LegendDot className="bg-ink-300">Pending</LegendDot>
              <span className="ml-auto hidden font-mono text-[9.5px] text-ink-500 @md:inline">Cones show field of view</span>
            </div>
          </Panel>

          <div className="flex flex-col gap-3">
            <Panel>
              <PanelHead icon={ClipboardList} title="Installation checklist" />
              <div className="px-3 pb-3">
                <Meter value={75} tone="brand" />
                <ul className="mt-3 space-y-2">
                  {CHECKS.map((c) => (
                    <li key={c.label} className="flex items-center gap-2 text-[12px] text-ink-700">
                      <span
                        className={cn(
                          'flex size-4 shrink-0 items-center justify-center rounded-md ring-1 ring-inset',
                          c.state === 'done' && 'bg-mint-500 text-white ring-mint-500',
                          c.state === 'partial' && 'bg-heat-50 text-heat-600 ring-heat-400',
                          c.state === 'todo' && 'bg-white text-transparent ring-ink-200',
                        )}
                      >
                        {c.state === 'partial' ? <span className="size-1.5 rounded-full bg-heat-500" /> : <Check className="size-2.5" strokeWidth={3.5} />}
                      </span>
                      <span className="min-w-0 flex-1 truncate">{c.label}</span>
                      <span className="shrink-0 font-mono text-[10px] text-ink-500">{c.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>

            <Panel className="flex-1">
              <PanelHead icon={BellRing} title="Service reminders" />
              <ul className="space-y-2 px-3 pb-3">
                <li className="rounded-xl bg-heat-50 px-2.5 py-2 ring-1 ring-heat-100">
                  <p className="text-[11.5px] leading-tight font-semibold text-ink-900">Service visit due · in 7 days</p>
                  <p className="mt-0.5 text-[10.5px] text-ink-500">Sunrise Apartments · 12 cameras</p>
                </li>
                <li className="rounded-xl bg-brand-50/70 px-2.5 py-2 ring-1 ring-brand-100">
                  <p className="text-[11.5px] leading-tight font-semibold text-ink-900">AMC renewal · in 21 days</p>
                  <p className="mt-0.5 text-[10.5px] text-ink-500">Orchid Clinic · 6 cameras</p>
                </li>
              </ul>
            </Panel>
          </div>
        </div>

        <Panel>
          <PanelHead
            icon={ShieldCheck}
            title="Installed cameras"
            meta={
              <span className="inline-flex items-center gap-2">
                <Tag tone="mint">AMC active</Tag>
              </span>
            }
          />
          <ul className="divide-y divide-ink-900/[0.05] px-1 pb-1">
            {INSTALLED_CAMERAS.slice(0, 3).map((cam) => (
              <li
                key={cam.id}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 px-2 py-2 @md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.1fr)_auto]"
              >
                <span className="font-mono text-[10.5px] font-semibold text-ink-500">{cam.id}</span>
                <div className="min-w-0">
                  <p className="truncate text-[12px] leading-tight font-semibold text-ink-900">{cam.place}</p>
                  <p className="truncate text-[10.5px] text-ink-500">{cam.model}</p>
                </div>
                <span className="hidden font-mono text-[10.5px] text-ink-500 @md:block">{cam.serial}</span>
                <div className="hidden text-[10.5px] leading-snug text-ink-500 @md:block">
                  <p>{cam.warranty}</p>
                  <p>{cam.amc}</p>
                </div>
                <StatusPill status="completed" label="Active" live={false} />
              </li>
            ))}
          </ul>
        </Panel>
      </GrowScope>
    </ProductWindow>
  )
}
