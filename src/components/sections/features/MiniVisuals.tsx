import { useRef } from 'react'
import { ArrowDownRight, ArrowRight, Camera, Check, ChevronRight, Navigation, Plus, ReceiptText, Truck, Warehouse, Wrench } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { Donut, Meter } from '@/components/product/Charts'
import { JobRow } from '@/components/product/JobPanels'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { QrTile } from '@/components/product/feature-visuals/AssetVisual'
import { FakeButton, Mono } from '@/components/product/feature-visuals/parts'
import { JOBS, TECHNICIANS } from '@/data/sample'
import type { MiniKey } from '@/data/featurePages'
import { useOnView } from '@/hooks/useOnView'
import { cn } from '@/lib/cn'
import { inr } from '@/lib/format'

/**
 * Small UI snippets that illustrate one capability. Purely decorative (aria-hidden),
 * built from the same sample data as the big feature visuals.
 */
function Frame({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('@container rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-ink-900/[0.07]', className)}>
      {title && <Mono className="mb-2.5 block">{title}</Mono>}
      {children}
    </div>
  )
}

function CrmSources() {
  const rows = [
    ['Phone calls', 12, 'brand'],
    ['Website enquiries', 8, 'aqua'],
    ['Referrals', 6, 'mint'],
    ['Walk-ins', 3, 'heat'],
  ] as const
  return (
    <Frame title="Lead sources · October">
      <ul className="space-y-2.5">
        {rows.map(([label, n, tone], i) => (
          <li key={label} className="grid grid-cols-[7.5rem_1fr_1.5rem] items-center gap-3 text-[11.5px] text-ink-700">
            <span className="truncate">{label}</span>
            <Meter value={(n / 12) * 100} tone={tone} delay={i * 90} />
            <span className="tabular text-right font-mono text-[11px] font-semibold text-ink-900">{n}</span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function CrmFollowups() {
  const rows = [
    ['Hotel Palm Grove', 'Call about the AMC quotation', 'Today, 4 pm', 'heat'],
    ['Orchid Clinic', 'Renewal reply pending', 'Overdue 1 day', 'coral'],
    ['Greenleaf Offices', 'VRF site visit', 'Tomorrow, 11:00', 'aqua'],
  ] as const
  return (
    <Frame title="Follow-ups">
      <ul className="space-y-2">
        {rows.map(([name, note, due, tone]) => (
          <li key={name} className="flex items-center gap-2.5 rounded-xl bg-mist px-2.5 py-2 ring-1 ring-ink-900/[0.04]">
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11.5px] leading-tight font-semibold text-ink-900">{name}</span>
              <span className="block truncate text-[10.5px] text-ink-500">{note}</span>
            </span>
            <Tag tone={tone}>{due}</Tag>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function CrmConvert() {
  return (
    <Frame title="Won deal → quotation → job">
      <div className="flex flex-col gap-2 @md:flex-row @md:items-center">
        <div className="min-w-0 flex-1 rounded-xl bg-mint-50 p-2.5 ring-1 ring-mint-100">
          <p className="text-[10px] font-semibold text-mint-600">Deal won</p>
          <p className="mt-0.5 truncate text-[12px] font-semibold text-ink-900">Sharma Residency</p>
          <p className="tabular text-[11px] text-ink-600">{inr(74000)} · 2 × split AC</p>
        </div>
        <ArrowRight className="hidden size-4 shrink-0 text-ink-300 @md:block" aria-hidden="true" />
        <div className="min-w-0 flex-1 rounded-xl bg-brand-50 p-2.5 ring-1 ring-brand-100">
          <p className="flex items-center gap-1 text-[10px] font-semibold text-brand-700">
            <ReceiptText className="size-3" aria-hidden="true" /> Quotation
          </p>
          <p className="mt-0.5 font-mono text-[12px] font-semibold text-ink-900">QT-0482</p>
          <p className="text-[11px] text-ink-600">Requirement carried over</p>
        </div>
        <ArrowRight className="hidden size-4 shrink-0 text-ink-300 @md:block" aria-hidden="true" />
        <div className="min-w-0 flex-1 rounded-xl bg-iris-50 p-2.5 ring-1 ring-iris-100">
          <p className="flex items-center gap-1 text-[10px] font-semibold text-iris-700">
            <Wrench className="size-3" aria-hidden="true" /> Job
          </p>
          <p className="mt-0.5 font-mono text-[12px] font-semibold text-ink-900">JOB-1034</p>
          <p className="text-[11px] text-ink-600">Ready to assign</p>
        </div>
      </div>
    </Frame>
  )
}

function AssetCard() {
  return (
    <Frame>
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <Mono>AST-2208</Mono>
          <p className="mt-1 font-display text-[15px] leading-tight font-semibold tracking-[-0.02em] text-ink-900">Split AC · 1.5 ton</p>
          <p className="mt-0.5 text-[11px] text-ink-500">Inverter · Living room, ground floor</p>
          <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[11px]">
            <div>
              <dt className="text-[10px] text-ink-500">Serial no.</dt>
              <dd className="font-mono font-semibold text-ink-800">2208-45193</dd>
            </div>
            <div>
              <dt className="text-[10px] text-ink-500">Installed</dt>
              <dd className="font-semibold text-ink-800">14 Mar 2023</dd>
            </div>
          </dl>
        </div>
        <div className="size-16 shrink-0 overflow-hidden rounded-xl p-1 ring-1 ring-ink-900/10">
          <QrTile seed="AST-2208-45193" />
        </div>
      </div>
    </Frame>
  )
}

function AssetHistory() {
  const rows = [
    ['04 Oct', 'AC Maintenance', 'Filters cleaned, gas pressure normal'],
    ['12 Jul', 'AC Repair', 'Running capacitor replaced'],
    ['05 Apr', 'AMC Visit', 'Quarterly service completed'],
  ]
  return (
    <Frame title="Service history">
      <ol className="space-y-2.5 border-l border-ink-900/10 pl-3.5">
        {rows.map(([date, title, note]) => (
          <li key={date} className="relative">
            <span className="absolute top-1 -left-[19px] size-2.5 rounded-full bg-brand-500 ring-2 ring-white" />
            <p className="text-[12px] leading-tight font-semibold text-ink-900">
              {title} <span className="font-mono text-[10px] font-medium text-ink-500">· {date}</span>
            </p>
            <p className="text-[11px] text-ink-500">{note}</p>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

function AssetCover() {
  return (
    <Frame title="Coverage">
      <div className="space-y-3">
        {[
          ['Warranty', 'Till Mar 2027', 82, 'mint'],
          ['AMC visits used', '3 of 4', 75, 'brand'],
          ['Next service', '04 Jan 2027', 22, 'aqua'],
        ].map(([label, value, pct, tone], i) => (
          <div key={String(label)}>
            <div className="mb-1.5 flex justify-between text-[11.5px]">
              <span className="text-ink-600">{label}</span>
              <span className="font-semibold text-ink-900">{value}</span>
            </div>
            <Meter value={Number(pct)} tone={tone as 'mint' | 'brand' | 'aqua'} delay={i * 100} />
          </div>
        ))}
      </div>
    </Frame>
  )
}

function StockColumn({ icon: Icon, name, rows }: { icon: typeof Truck; name: string; rows: readonly (readonly [string, number])[] }) {
  return (
    <div className="rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.04]">
      <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-800">
        <Icon className="size-3.5 text-brand-500" aria-hidden="true" /> {name}
      </p>
      <ul className="mt-2 space-y-1.5">
        {rows.map(([n, q]) => (
          <li key={n} className="flex items-center justify-between gap-2 text-[11px] text-ink-600">
            <span className="truncate">{n}</span>
            <span className={cn('tabular font-mono font-semibold', q === 0 ? 'text-coral-600' : 'text-ink-900')}>{q}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function InvVan() {
  return (
    <Frame title="Stock by location">
      <div className="grid gap-2.5 @md:grid-cols-[1fr_auto_1fr] @md:items-center">
        <StockColumn icon={Warehouse} name="Main warehouse" rows={[['Running capacitor 35 µF', 0], ['R32 refrigerant gas', 9], ['Drain pump · split AC', 4]]} />
        <span className="hidden size-7 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 @md:flex">
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </span>
        <StockColumn icon={Truck} name="Van 2 · Ravi Kumar" rows={[['Running capacitor 35 µF', 2], ['R32 refrigerant gas', 5], ['Drain pump · split AC', 2]]} />
      </div>
    </Frame>
  )
}

function InvLow() {
  const rows = [
    ['Running capacitor', '2 left · min 10'],
    ['Indoor PCB · inverter', '3 left · min 4'],
  ]
  return (
    <Frame title="Low stock">
      <ul className="space-y-2">
        {rows.map(([n, d]) => (
          <li key={n} className="flex items-center gap-2 rounded-xl bg-coral-50/60 px-2.5 py-2 ring-1 ring-coral-100">
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11.5px] leading-tight font-semibold text-ink-900">{n}</span>
              <span className="block font-mono text-[10px] text-coral-600">{d}</span>
            </span>
            <FakeButton tone="ghost" className="px-2.5 py-1 text-[10.5px]">
              Reorder
            </FakeButton>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function InvUsed() {
  return (
    <Frame title="Part used on a job">
      <div className="flex flex-col gap-2 @md:flex-row @md:items-center">
        <div className="min-w-0 flex-1 rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.04]">
          <p className="font-mono text-[10px] font-semibold text-ink-500">JOB-1024</p>
          <p className="text-[12px] font-semibold text-ink-900">AC Maintenance</p>
          <p className="text-[11px] text-ink-500">Sharma Residency</p>
        </div>
        <ChevronRight className="hidden size-4 shrink-0 text-ink-300 @md:block" aria-hidden="true" />
        <div className="min-w-0 flex-1 rounded-xl bg-brand-50 p-2.5 ring-1 ring-brand-100">
          <p className="text-[10px] font-semibold text-brand-700">Part recorded</p>
          <p className="truncate text-[12px] font-semibold text-ink-900">Running capacitor 35 µF × 1</p>
          <p className="tabular font-mono text-[11px] text-ink-600">{inr(420)}</p>
        </div>
        <ChevronRight className="hidden size-4 shrink-0 text-ink-300 @md:block" aria-hidden="true" />
        <div className="min-w-0 flex-1 rounded-xl bg-aqua-50 p-2.5 ring-1 ring-aqua-100">
          <p className="flex items-center gap-1 text-[10px] font-semibold text-aqua-600">
            <Truck className="size-3" aria-hidden="true" /> Van 2 stock
          </p>
          <p className="flex items-center gap-1 font-mono text-[12px] font-semibold text-ink-900">
            3 → 2 <ArrowDownRight className="size-3.5 text-coral-600" aria-hidden="true" />
          </p>
          <p className="text-[11px] text-ink-500">Deducted automatically</p>
        </div>
      </div>
    </Frame>
  )
}

function RptToday() {
  const tiles = [
    ['24', 'Jobs today', 'text-ink-900'],
    ['15', 'Completed', 'text-mint-600'],
    ['9', 'Open', 'text-heat-600'],
    ['12/14', 'Technicians active', 'text-brand-600'],
  ]
  return (
    <Frame title="Today">
      <div className="grid grid-cols-2 gap-2 @md:grid-cols-4">
        {tiles.map(([n, l, c]) => (
          <div key={l} className="rounded-xl bg-mist p-2.5 ring-1 ring-ink-900/[0.04]">
            <p className={cn('tabular font-display text-[1.25rem] leading-none font-semibold tracking-[-0.03em]', c)}>{n}</p>
            <p className="mt-1.5 text-[10.5px] text-ink-500">{l}</p>
          </div>
        ))}
      </div>
    </Frame>
  )
}

function RptTechs() {
  const rows = [...TECHNICIANS].sort((a, b) => b.jobsToday - a.jobsToday).slice(0, 4)
  return (
    <Frame title="Jobs today">
      <ul className="space-y-2">
        {rows.map((t, i) => (
          <li key={t.id} className="flex items-center gap-2">
            <Avatar initials={t.initials} tone={t.tone} size="xs" className="ring-0" />
            <Meter value={(t.jobsToday / rows[0].jobsToday) * 100} tone={i === 0 ? 'brand' : 'aqua'} delay={i * 90} />
            <span className="tabular w-3 text-right font-mono text-[11px] font-semibold text-ink-800">{t.jobsToday}</span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function RptAging() {
  const bands = [
    { label: '0 – 7 days', amount: 62000, cls: 'bg-mint-400' },
    { label: '8 – 30 days', amount: 78500, cls: 'bg-heat-400' },
    { label: 'Over 30 days', amount: 42000, cls: 'bg-coral-500' },
  ]
  const total = bands.reduce((s, b) => s + b.amount, 0)
  return (
    <Frame title="Pending payments by age">
      <div className="flex h-2.5 overflow-hidden rounded-full bg-ink-900/[0.06]" aria-hidden="true">
        {bands.map((b) => (
          <span key={b.label} className={cn('h-full border-r-2 border-white last:border-r-0', b.cls)} style={{ width: `${(b.amount / total) * 100}%` }} />
        ))}
      </div>
      <ul className="mt-3 grid gap-2 @md:grid-cols-3">
        {bands.map((b) => (
          <li key={b.label} className="rounded-xl bg-mist px-2.5 py-2 ring-1 ring-ink-900/[0.04]">
            <p className="flex items-center gap-1.5 text-[10.5px] text-ink-500">
              <span className={cn('size-2 rounded-full', b.cls)} /> {b.label}
            </p>
            <p className="tabular mt-1 font-display text-[1rem] leading-none font-semibold tracking-[-0.02em] text-ink-900">{inr(b.amount)}</p>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function RptRenewals() {
  const rows = [
    ['Orchid Clinic', '6 units', '7 days'],
    ['Sharma Residency', '3 units', '12 days'],
    ['Greenleaf Offices', '8 units', '24 days'],
  ]
  return (
    <Frame title="AMC renewals due">
      <ul className="divide-y divide-ink-900/[0.06]">
        {rows.map(([n, u, d]) => (
          <li key={n} className="flex items-center justify-between gap-2 py-2 first:pt-0 last:pb-0">
            <span className="min-w-0">
              <span className="block truncate text-[11.5px] leading-tight font-semibold text-ink-900">{n}</span>
              <span className="block text-[10px] text-ink-500">{u}</span>
            </span>
            <Tag tone="heat">in {d}</Tag>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function RptTypes() {
  const types = [
    ['Maintenance', 38, '#2f66ff'],
    ['Repair', 26, '#00a5cf'],
    ['Installation', 22, '#6554f3'],
    ['AMC visits', 14, '#ffb547'],
  ] as const
  return (
    <Frame title="Jobs by type · this week">
      <div className="flex items-center gap-4">
        <Donut className="size-[5.5rem] shrink-0" thickness={12} segments={types.map(([label, value, color]) => ({ label, value, color }))}>
          <p className="font-display text-lg leading-none font-semibold text-ink-900">112</p>
          <p className="text-[9.5px] font-medium text-ink-500">jobs</p>
        </Donut>
        <ul className="min-w-0 flex-1 space-y-1.5 text-[11.5px] text-ink-600">
          {types.map(([label, value, color]) => (
            <li key={label} className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full" style={{ background: color }} />
              <span className="min-w-0 flex-1 truncate">{label}</span>
              <span className="font-mono text-[10.5px] text-ink-500">{value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  )
}

function AppJobs() {
  const rows = [JOBS[0], JOBS[1], JOBS[2]]
  return (
    <Frame title="Today’s jobs" className="p-2">
      <div>
        {rows.map((j, i) => (
          <JobRow
            key={j.id}
            id={j.id}
            type={j.type}
            customer={j.customer}
            area={j.area}
            time={j.time}
            status={j.status}
            className={i < rows.length - 1 ? 'rounded-none border-b border-ink-900/[0.05]' : ''}
          />
        ))}
      </div>
    </Frame>
  )
}

function AppChecklist() {
  const rows: [string, boolean][] = [
    ['Clean indoor filters', true],
    ['Check refrigerant pressure', true],
    ['Test compressor and fan', true],
    ['Clean drain line', false],
  ]
  return (
    <Frame title="Service checklist · 3 of 4">
      <Meter value={75} tone="brand" className="mb-3" />
      <ul className="space-y-2">
        {rows.map(([label, done]) => (
          <li key={label} className="flex items-center gap-2.5 text-[12px] text-ink-700">
            <span
              className={cn(
                'flex size-[18px] shrink-0 items-center justify-center rounded-md ring-1 ring-inset',
                done ? 'bg-mint-500 text-white ring-mint-500' : 'bg-white text-transparent ring-ink-200',
              )}
            >
              <Check className="size-3" strokeWidth={3.5} aria-hidden="true" />
            </span>
            <span className={cn(done && 'text-ink-500')}>{label}</span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function AppPhotos() {
  const tiles = [
    ['Before', 'from-aqua-100 to-brand-100'],
    ['After', 'from-mint-100 to-aqua-100'],
    ['Nameplate', 'from-iris-100 to-brand-100'],
  ]
  return (
    <Frame title="Photos and parts">
      <div className="grid grid-cols-4 gap-2">
        {tiles.map(([label, grad]) => (
          <div key={label} className={cn('relative flex aspect-square items-end rounded-xl bg-linear-to-br p-1.5 ring-1 ring-ink-900/[0.06]', grad)}>
            <Camera className="absolute top-1.5 right-1.5 size-3.5 text-ink-600/60" aria-hidden="true" />
            <span className="text-[10px] font-semibold text-ink-700">{label}</span>
          </div>
        ))}
        <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-ink-200 text-ink-500">
          <Plus className="size-4" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-3 flex justify-between rounded-xl bg-mist px-2.5 py-2 text-[11px] text-ink-600 ring-1 ring-ink-900/[0.04]">
        <span>Running capacitor 35 µF × 1</span>
        <span className="font-mono font-semibold text-ink-900">{inr(420)}</span>
      </p>
    </Frame>
  )
}

function AppSign() {
  return (
    <Frame title="Customer sign-off">
      <div className="rounded-xl border border-dashed border-ink-200 bg-mist px-3 py-3">
        <svg viewBox="0 0 160 44" className="h-10 w-full" aria-hidden="true">
          <path d="M6 30c10-26 18-26 14-4s8 8 16-8 12 16 20 4 8-16 16-4 12 8 20-4 10 6 20 0" fill="none" stroke="#0b1736" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 38h148" stroke="#0b1736" strokeOpacity="0.12" />
        </svg>
        <p className="mt-1 text-[10.5px] text-ink-500">Signed by Mr. Anil Sharma · 04 Oct, 12:48</p>
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded-xl bg-mint-50 px-2.5 py-2 ring-1 ring-mint-100">
        <span className="flex items-center gap-1.5 text-[11.5px] font-semibold text-mint-600">
          <Check className="size-3.5" strokeWidth={3} aria-hidden="true" /> Service report ready
        </span>
        <StatusPill status="completed" live={false} />
      </div>
    </Frame>
  )
}

function WoSla() {
  return (
    <Frame title="JOB-1027 · AC Repair">
      <div className="flex items-center gap-4">
        <Donut
          className="size-24 shrink-0"
          thickness={12}
          segments={[
            { value: 68, color: '#ff9f1c' },
            { value: 32, color: '#eef2f9' },
          ]}
        >
          <p className="font-display text-[15px] leading-none font-semibold text-ink-900">2h 10m</p>
          <p className="mt-0.5 text-[9.5px] font-medium text-ink-500">SLA left</p>
        </Donut>
        <dl className="min-w-0 flex-1 space-y-2 text-[11.5px]">
          <div className="flex items-center justify-between gap-2">
            <dt className="text-ink-500">Priority</dt>
            <dd>
              <Tag tone="coral">High</Tag>
            </dd>
          </div>
          <div className="flex items-center justify-between gap-2">
            <dt className="text-ink-500">Window</dt>
            <dd className="font-mono font-semibold text-ink-800">11:00 – 13:30</dd>
          </div>
          <div className="flex items-center justify-between gap-2">
            <dt className="text-ink-500">Technician</dt>
            <dd className="flex items-center gap-1.5 font-semibold text-ink-800">
              <Avatar initials="AS" tone="aqua" size="xs" className="ring-0" /> Arun S.
            </dd>
          </div>
          <div className="flex items-center justify-between gap-2">
            <dt className="text-ink-500">Status</dt>
            <dd>
              <StatusPill status="in-progress" />
            </dd>
          </div>
        </dl>
      </div>
    </Frame>
  )
}

function EmpSkills() {
  const t = TECHNICIANS[4]
  return (
    <Frame title="Technician profile">
      <div className="flex items-center gap-3">
        <Avatar initials={t.initials} tone={t.tone} size="lg" className="ring-0" />
        <div className="min-w-0">
          <p className="text-[13px] leading-tight font-semibold text-ink-900">{t.name}</p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-500">
            <Navigation className="size-3" aria-hidden="true" /> {t.role} · {t.area}
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Tag tone="iris">VRF</Tag>
        <Tag tone="aqua">Chiller</Tag>
        <Tag tone="brand">Installation</Tag>
      </div>
      <div className="mt-3.5">
        <div className="mb-1.5 flex justify-between text-[11px]">
          <span className="text-ink-600">Workload this week</span>
          <span className="font-mono font-semibold text-ink-900">46%</span>
        </div>
        <Meter value={46} tone="mint" />
      </div>
      <div className="mt-3 grid grid-cols-6 gap-1">
        {['M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span
            key={i}
            className={cn(
              'rounded-md py-1 text-center font-mono text-[10px] font-semibold',
              i === 1 ? 'bg-ink-900 text-white' : [0, 1, 3, 4].includes(i) ? 'bg-brand-50 text-brand-700' : 'bg-ink-50 text-ink-500',
            )}
          >
            {d}
          </span>
        ))}
      </div>
    </Frame>
  )
}

const MINIS: Record<MiniKey, () => React.ReactNode> = {
  'crm-sources': CrmSources,
  'crm-followups': CrmFollowups,
  'crm-convert': CrmConvert,
  'asset-card': AssetCard,
  'asset-history': AssetHistory,
  'asset-cover': AssetCover,
  'inv-van': InvVan,
  'inv-low': InvLow,
  'inv-used': InvUsed,
  'rpt-today': RptToday,
  'rpt-techs': RptTechs,
  'rpt-aging': RptAging,
  'rpt-types': RptTypes,
  'rpt-renewals': RptRenewals,
  'app-jobs': AppJobs,
  'app-checklist': AppChecklist,
  'app-photos': AppPhotos,
  'app-sign': AppSign,
  'wo-sla': WoSla,
  'emp-skills': EmpSkills,
}

export function MiniVisual({ name, className }: { name: MiniKey; className?: string }) {
  const Mini = MINIS[name]
  const ref = useRef<HTMLDivElement>(null)
  // Lets the meters inside grow in once the snippet scrolls into view.
  useOnView(ref, () => ref.current?.classList.add('is-in'))
  return (
    <div ref={ref} className={className} aria-hidden="true">
      <Mini />
    </div>
  )
}
