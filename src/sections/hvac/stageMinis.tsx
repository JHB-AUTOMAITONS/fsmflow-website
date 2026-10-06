import { Bell, Check, Navigation, Phone, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { CityMap } from '@/components/product/CityMap'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { Bezel } from '@/components/ui/Bezel'
import { inr } from '@/lib/format'
import { cn } from '@/lib/cn'

/**
 * Mini product screens used inside the animated HVAC workflow. Each is a small,
 * self-contained "what this stage looks like in FSMFlow" card (sample data only).
 */
function Mini({ id, title, badge, children, className }: { id: string; title: string; badge?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <Bezel radius="md" className="mx-auto w-full max-w-[430px]" coreClassName={cn('@container p-4', className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">{id}</p>
          <p className="truncate font-display text-[1.0625rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">{title}</p>
        </div>
        {badge}
      </div>
      {children}
    </Bezel>
  )
}

function Row({ k, v, className }: { k: string; v: ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-start justify-between gap-4 border-b border-ink-900/[0.06] py-2 text-[12.5px] last:border-0', className)}>
      <dt className="shrink-0 text-ink-500">{k}</dt>
      <dd className="text-right font-medium text-ink-800">{v}</dd>
    </div>
  )
}

const Action = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex h-9 items-center rounded-full bg-brand-gradient px-4 text-[12.5px] font-semibold text-white shadow-cta">{children}</span>
)

export function RequestMini() {
  return (
    <Mini id="REQ-5521" title="New service request" badge={<Tag tone="aqua"><Phone className="size-3" aria-hidden="true" /> Phone call</Tag>}>
      <dl className="mt-3">
        <Row k="Customer" v="Metro Café · T. Nagar" />
        <Row k="Issue" v="Not cooling · water dripping" />
        <Row k="Unit" v={<span className="inline-flex items-center gap-1.5">Cassette AC · 2.0 ton <Tag tone="mint">Under AMC</Tag></span>} />
        <Row k="Priority" v={<Tag tone="heat">Medium</Tag>} />
      </dl>
      <div className="mt-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-mint-600">
          <Check className="size-3.5" strokeWidth={3} aria-hidden="true" /> Matched to customer & unit
        </span>
        <Action>Create job</Action>
      </div>
    </Mini>
  )
}

export function LeadMini() {
  return (
    <Mini id="ENQ-3104" title="New enquiry" badge={<Tag tone="iris">Referral</Tag>}>
      <dl className="mt-3">
        <Row k="Customer" v="Greenleaf Offices · Guindy" />
        <Row k="Requirement" v="2 × 1.5 ton split AC installation" />
        <Row k="Estimated value" v={<span className="font-mono">{inr(86000)}</span>} />
        <Row k="Next follow-up" v="Site visit · tomorrow 11:00" />
      </dl>
      <div className="mt-3 flex justify-end">
        <Action>Send quotation</Action>
      </div>
    </Mini>
  )
}

export function QuoteMini() {
  const lines: [string, number][] = [
    ['2 × Split AC installation', 7000],
    ['Copper piping · 6 m', 3300],
    ['Drain line & electrical', 1200],
  ]
  const total = lines.reduce((a, [, v]) => a + v, 0)
  return (
    <Mini id="QT-2041" title="Quotation" badge={<StatusPill status="completed" label="Approved" live={false} />}>
      <ul className="mt-3">
        {lines.map(([l, v]) => (
          <li key={l} className="flex justify-between border-b border-ink-900/[0.06] py-2 text-[12.5px] text-ink-700">
            <span>{l}</span>
            <span className="font-mono text-ink-600">{inr(v)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[12.5px] font-semibold text-ink-900">Total</span>
        <span className="font-mono text-base font-semibold text-ink-900">{inr(total)}</span>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-mint-50 px-3 py-2 text-[11.5px] font-medium text-mint-600 ring-1 ring-mint-100">
        <span className="flex items-center gap-1.5">
          <Check className="size-3.5" strokeWidth={3} aria-hidden="true" /> Approved by customer
        </span>
        <span className="font-semibold">Convert to job →</span>
      </div>
    </Mini>
  )
}

export function JobCreatedMini() {
  return (
    <Mini id="JOB-1031" title="AC Installation" badge={<StatusPill status="assigned" label="Scheduled" live={false} />}>
      <dl className="mt-3">
        <Row k="Customer" v="Greenleaf Offices · Guindy" />
        <Row k="Created from" v={<span className="font-mono">QT-2041</span>} />
        <Row k="Scheduled" v="Wed · 12:00" />
        <Row k="Checklist" v="Split AC installation · 8 steps" />
      </dl>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-brand-50/70 px-3 py-2 text-[11.5px] font-medium text-brand-800 ring-1 ring-brand-100">
        <Sparkles className="size-3.5" aria-hidden="true" /> Items, price and site details carried over — nothing retyped
      </div>
    </Mini>
  )
}

export function AssignMini() {
  const techs = [
    { i: 'IK', t: 'iris' as const, n: 'Imran Khan', r: 'Installation lead', m: '3 jobs today · 4.2 km', fit: 96, on: true },
    { i: 'FM', t: 'brand' as const, n: 'Faizal Mohammed', r: 'AC technician', m: '3 jobs today · 7.8 km', fit: 74, on: false },
    { i: 'RK', t: 'aqua' as const, n: 'Ravi Kumar', r: 'Senior AC technician', m: '4 jobs today · 9.1 km', fit: 61, on: false },
  ]
  return (
    <Mini id="JOB-1031" title="Assign technician" badge={<Tag tone="brand">Best match first</Tag>}>
      <ul className="mt-3 space-y-2">
        {techs.map((t) => (
          <li
            key={t.n}
            className={cn('flex items-center gap-3 rounded-2xl p-2.5 ring-1', t.on ? 'bg-brand-50/70 ring-brand-200' : 'bg-white ring-ink-900/[0.07]')}
          >
            <Avatar initials={t.i} tone={t.t} size="md" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] leading-tight font-semibold text-ink-900">{t.n}</p>
              <p className="truncate text-[11px] text-ink-500">
                {t.r} · {t.m}
              </p>
              <Meter value={t.fit} tone={t.on ? 'brand' : 'aqua'} className="mt-1.5 h-1" />
            </div>
            {t.on ? <Action>Assign</Action> : <span className="font-mono text-[11px] text-ink-500">{t.fit}%</span>}
          </li>
        ))}
      </ul>
    </Mini>
  )
}

export function TechnicianMini() {
  return (
    <Mini id="JOB-1031" title="Imran Khan is on the way" badge={<StatusPill status="en-route" />}>
      <div className="relative mt-3 h-32 overflow-hidden rounded-2xl ring-1 ring-ink-900/[0.07]">
        <CityMap className="absolute inset-0" compact showEta={false} />
        <span className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-ink-800 shadow-pop">
          <Navigation className="size-3 text-aqua-600" aria-hidden="true" /> ETA 12 min · 2.4 km
        </span>
      </div>
      <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-aqua-50 px-3 py-2.5 ring-1 ring-aqua-100">
        <Bell className="mt-0.5 size-3.5 shrink-0 text-aqua-600" aria-hidden="true" />
        <p className="text-[11.5px] leading-snug text-ink-700">
          <span className="font-semibold text-ink-900">Customer notified:</span> your technician Imran is 12 minutes away.
        </p>
      </div>
    </Mini>
  )
}

export function ServiceMini() {
  const items: [string, boolean][] = [
    ['Clean indoor filters', true],
    ['Check refrigerant pressure', true],
    ['Test compressor & fan', true],
    ['Clean drain line', false],
  ]
  return (
    <Mini id="JOB-1024" title="AC Maintenance" badge={<StatusPill status="in-progress" />}>
      <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-ink-700">
        <span>Service checklist</span>
        <span className="font-mono text-ink-500">3 / 4</span>
      </div>
      <Meter value={75} className="mt-1.5" />
      <ul className="mt-3 space-y-2">
        {items.map(([l, done]) => (
          <li key={l} className="flex items-center gap-2.5 text-[12.5px] text-ink-700">
            <span
              className={cn(
                'flex size-[18px] shrink-0 items-center justify-center rounded-md ring-1 ring-inset',
                done ? 'bg-mint-500 text-white ring-mint-500' : 'bg-white text-transparent ring-ink-200',
              )}
            >
              <Check className="size-3" strokeWidth={3.5} />
            </span>
            <span className={cn(done && 'text-ink-500')}>{l}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Tag tone="brand">2 photos</Tag>
        <Tag tone="aqua">Gas pressure: 118 psi</Tag>
        <Tag tone="ink">Note added</Tag>
      </div>
    </Mini>
  )
}

export function PartsMini() {
  return (
    <Mini id="JOB-1024" title="Parts used" badge={<Tag tone="mint">Van stock synced</Tag>}>
      <ul className="mt-3">
        {[
          ['Running capacitor 35 µF × 1', 420, 'Van · 1 left'],
          ['R32 refrigerant · 300 g', 270, 'Van · 4.2 kg left'],
        ].map(([n, p, s]) => (
          <li key={String(n)} className="flex items-start justify-between gap-3 border-b border-ink-900/[0.06] py-2.5">
            <div>
              <p className="text-[12.5px] font-medium text-ink-800">{n}</p>
              <p className="text-[11px] text-ink-500">{s}</p>
            </div>
            <span className="font-mono text-[12.5px] text-ink-600">{inr(p as number)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-heat-50 px-3 py-2 text-[11.5px] font-medium text-heat-600 ring-1 ring-heat-100">
        <Bell className="size-3.5 shrink-0" aria-hidden="true" /> Capacitor 35 µF is below minimum — reorder suggested
      </div>
    </Mini>
  )
}

export function InvoiceMini() {
  const lines: [string, number][] = [
    ['Service charge', 2150],
    ['Running capacitor 35 µF', 420],
    ['R32 refrigerant · 300 g', 270],
    ['Visit & transport', 420],
  ]
  const total = lines.reduce((a, [, v]) => a + v, 0)
  return (
    <Mini id="INV-2291" title="Invoice" badge={<StatusPill status="en-route" label="Sent" live={false} />}>
      <ul className="mt-3">
        {lines.map(([l, v]) => (
          <li key={l} className="flex justify-between border-b border-ink-900/[0.06] py-2 text-[12.5px] text-ink-700">
            <span>{l}</span>
            <span className="font-mono text-ink-600">{inr(v)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[12.5px] font-semibold text-ink-900">Amount due</span>
        <span className="font-mono text-base font-semibold text-ink-900">{inr(total)}</span>
      </div>
      <p className="mt-3 text-[11px] text-ink-500">Generated from the completed job · parts and labour already included</p>
    </Mini>
  )
}

export function PaymentMini() {
  return (
    <Mini id="INV-2291" title="Payment received" badge={<StatusPill status="completed" live={false} label="Paid" />}>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-mint-50 text-mint-600 ring-1 ring-mint-100">
          <Check className="size-6" strokeWidth={2.4} aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-2xl leading-none font-semibold tracking-[-0.03em] text-ink-900">{inr(3260)}</p>
          <p className="mt-1 text-[11.5px] text-ink-500">Recorded today · UPI</p>
        </div>
      </div>
      <dl className="mt-3">
        <Row k="Customer" v="Sharma Residency" />
        <Row k="Pending payments" v={<span className="font-mono">{inr(185760)} → {inr(182500)}</span>} />
      </dl>
    </Mini>
  )
}

export function AmcMini() {
  return (
    <Mini id="AMC-310" title="Orchid Clinic · 6 units" badge={<Tag tone="mint">Active</Tag>}>
      <dl className="mt-3">
        <Row k="Valid till" v="31 Mar 2027" />
        <Row k="Visits used" v={<span className="font-mono">3 of 4</span>} />
        <Row k="Next visit" v="12 Jan · Suresh Pillai" />
      </dl>
      <Meter value={75} tone="mint" className="mt-2" />
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-heat-50 px-3 py-2 text-[11.5px] font-medium text-heat-600 ring-1 ring-heat-100">
        <Bell className="size-3.5 shrink-0" aria-hidden="true" /> Renewal reminder goes out in 7 days
      </div>
    </Mini>
  )
}
