import { CalendarClock, Check, Handshake, Plus, Search, Wrench } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { Counter } from '@/components/ui/Counter'
import type { TechTone } from '@/data/sample'
import { cn } from '@/lib/cn'
import { inr, inrCompact } from '@/lib/format'
import { FakeButton, FloatCard, Segmented, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

interface Lead {
  name: string
  need: string
  value: number
  area: string
  owner: { initials: string; tone: TechTone }
  due?: { label: string; tone: 'heat' | 'coral' | 'aqua' | 'ink' }
}

interface Stage {
  label: string
  dot: string
  leads: Lead[]
  won?: boolean
}

const PR = { initials: 'PR', tone: 'iris' } as const
const VN = { initials: 'VN', tone: 'aqua' } as const

const STAGES: Stage[] = [
  {
    label: 'New enquiry',
    dot: 'bg-iris-400',
    leads: [
      { name: 'Ananya Residency', need: '3 × 1.5 ton split AC, supply and install', value: 132000, area: 'Adyar', owner: PR },
      { name: 'Dr. Mehta Clinic', need: 'AMC for 6 units', value: 47500, area: 'T. Nagar', owner: VN },
      { name: 'Brew Lane Café', need: 'Cassette AC not cooling', value: 9500, area: 'Velachery', owner: PR },
    ],
  },
  {
    label: 'Site visit',
    dot: 'bg-aqua-500',
    leads: [
      { name: 'Greenleaf Offices', need: 'VRF survey · 12 indoor units', value: 640000, area: 'Guindy', owner: VN, due: { label: 'Visit tomorrow', tone: 'aqua' } },
      { name: 'Lotus Apartments', need: 'Chiller room inspection', value: 220000, area: 'Anna Nagar', owner: PR, due: { label: 'Visit Thu, 15:00', tone: 'ink' } },
    ],
  },
  {
    label: 'Quotation sent',
    dot: 'bg-brand-500',
    leads: [
      { name: 'Hotel Palm Grove', need: 'Yearly AMC · chillers and VRF', value: 210000, area: 'OMR', owner: VN, due: { label: 'Call today, 4 pm', tone: 'heat' } },
      { name: 'Patel Textiles', need: '5 × 2 ton ducted AC', value: 345000, area: 'Velachery', owner: PR, due: { label: 'Call in 2 days', tone: 'ink' } },
    ],
  },
  {
    label: 'Negotiation',
    dot: 'bg-heat-500',
    leads: [{ name: 'Orchid Clinic', need: 'AMC renewal · 6 units', value: 86000, area: 'Adyar', owner: VN, due: { label: 'Overdue 1 day', tone: 'coral' } }],
  },
  {
    label: 'Won',
    dot: 'bg-mint-500',
    won: true,
    leads: [{ name: 'Sharma Residency', need: '2 × 1.5 ton split AC install', value: 74000, area: 'Anna Nagar', owner: PR }],
  },
]

const OPEN_STAGES = STAGES.filter((s) => !s.won)
const WON = STAGES.find((s) => s.won)!.leads[0]

const OPEN_TOTAL = STAGES.filter((s) => !s.won).reduce((sum, s) => sum + s.leads.reduce((a, l) => a + l.value, 0), 0)

function LeadCard({ lead, won, selected }: { lead: Lead; won?: boolean; selected?: boolean }) {
  return (
    <li className={cn('rounded-xl bg-white p-2.5 shadow-card ring-1 ring-ink-900/[0.06]', won && 'ring-mint-400/60', selected && 'ring-brand-300')}>
      <p className="text-[12px] leading-tight font-semibold text-ink-900">{lead.name}</p>
      <p className="mt-1 line-clamp-2 text-[10.5px] leading-snug text-ink-500">{lead.need}</p>
      <div className="mt-2 flex items-center justify-between gap-1">
        <span className="tabular font-display text-[12.5px] font-semibold tracking-[-0.01em] text-ink-900">{inr(lead.value)}</span>
        <span className="flex min-w-0 items-center gap-1.5">
          <span className="truncate text-[10px] text-ink-500">{lead.area}</span>
          <Avatar initials={lead.owner.initials} tone={lead.owner.tone} size="xs" />
        </span>
      </div>
      {lead.due && (
        <Tag tone={lead.due.tone} className="mt-2">
          <CalendarClock className="size-3 shrink-0" aria-hidden="true" />
          {lead.due.label}
        </Tag>
      )}
      {won && (
        <span className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg bg-brand-gradient py-1.5 text-[10.5px] font-semibold text-white shadow-cta">
          <Wrench className="size-3" aria-hidden="true" /> Convert to job
        </span>
      )}
    </li>
  )
}

/** Sales CRM: pipeline kanban from new enquiry to a won deal that converts into a job. */
export function SalesCrmVisual({ className, compact }: FeatureVisualProps) {
  const stages = compact ? OPEN_STAGES : STAGES
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title="Sales pipeline"
        subtitle="HVAC enquiries · Chennai"
        icon={Handshake}
        actions={!compact && <Tag tone="brand">8 open leads</Tag>}
        label="FSMFlow sales CRM pipeline board with columns for new enquiry, site visit, quotation sent, negotiation and won, showing lead cards with values, owners, follow-up reminders and a convert to job button"
      >
        <div className="flex items-center gap-2 px-3 pt-3 pb-2.5 @md:px-4">
          <Segmented items={['Pipeline', 'List']} />
          {!compact && (
            <div className="hidden items-center gap-1.5 rounded-xl bg-ink-50 px-2.5 py-1.5 text-[11px] text-ink-500 @lg:flex">
              <Search className="size-3.5" aria-hidden="true" /> Search leads
            </div>
          )}
          <div className="ml-auto flex items-center gap-3">
            <p className="hidden text-right @sm:block">
              <span className="block text-[10px] leading-tight text-ink-500">Open pipeline</span>
              <span className="tabular font-display text-[15px] leading-tight font-semibold tracking-[-0.02em] text-ink-900">
                <Counter to={OPEN_TOTAL} format={inrCompact} />
              </span>
            </p>
            {!compact && (
              <FakeButton>
                <Plus className="size-3.5" aria-hidden="true" /> Add lead
              </FakeButton>
            )}
          </div>
        </div>

        <div className="flex gap-2.5 overflow-hidden px-3 pb-3 [-webkit-mask-image:linear-gradient(to_right,#000_86%,transparent)] [mask-image:linear-gradient(to_right,#000_86%,transparent)] @md:px-4 @md:pb-4 @xl:[-webkit-mask-image:none] @xl:[mask-image:none]">
          {stages.map((stage) => {
            const total = stage.leads.reduce((a, l) => a + l.value, 0)
            const leads = compact ? stage.leads.slice(0, 2) : stage.leads
            return (
              <div key={stage.label} className={cn('w-[9.1rem] shrink-0', stage.won && 'hidden @3xl:block')}>
                <div className="flex items-center justify-between gap-2 px-1 pb-2">
                  <p className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold text-ink-800">
                    <span className={cn('size-2 shrink-0 rounded-full', stage.dot)} />
                    <span className="truncate">{stage.label}</span>
                  </p>
                  <span className="rounded-md bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink-500">{stage.leads.length}</span>
                </div>
                <p className="-mt-1 mb-2 px-1 font-mono text-[10px] text-ink-500">{inrCompact(total)}</p>
                <ul className="space-y-1.5 rounded-2xl bg-mist p-1.5 ring-1 ring-ink-900/[0.04]">
                  {leads.map((lead) => (
                    <LeadCard key={lead.name} lead={lead} won={stage.won} selected={lead.name === 'Hotel Palm Grove'} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="-bottom-16 right-6 w-[236px] @3xl:hidden" delay={800}>
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold text-mint-600">
              <Check className="size-3" strokeWidth={3} aria-hidden="true" /> Deal won
            </p>
            <Avatar initials={WON.owner.initials} tone={WON.owner.tone} size="xs" />
          </div>
          <p className="mt-1 text-[12px] leading-tight font-semibold text-ink-900">{WON.name}</p>
          <p className="tabular mt-0.5 text-[11px] text-ink-500">
            {inr(WON.value)} · {WON.need}
          </p>
          <span className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg bg-brand-gradient py-1.5 text-[11px] font-semibold text-white shadow-cta">
            <Wrench className="size-3" aria-hidden="true" /> Convert to job
          </span>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
