import { Bell, Camera, Check, ChevronLeft, Navigation, PenLine, Phone, Plus } from 'lucide-react'
import { Meter } from '@/components/product/Charts'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { JOBS } from '@/data/sample'
import { cn } from '@/lib/cn'

/** Screen 1 — "Today's jobs" for the signed-in technician. */
export function TechJobsScreen({ className }: { className?: string }) {
  const mine = [JOBS[0], JOBS[1], JOBS[2], JOBS[3]]
  return (
    <div className={cn('flex h-full flex-col bg-mist', className)}>
      <div className="bg-white px-4 pt-1 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium text-ink-500">Tuesday, 6 Oct</p>
            <p className="font-display text-[17px] leading-tight font-semibold tracking-[-0.02em] text-ink-900">Today’s jobs</p>
          </div>
          <span className="relative flex size-8 items-center justify-center rounded-full bg-ink-50 text-ink-600">
            <Bell className="size-4" aria-hidden="true" />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-coral-500 ring-2 ring-white" />
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
          {[
            ['4', 'Assigned'],
            ['1', 'In progress'],
            ['2', 'Done'],
          ].map(([n, l], i) => (
            <div key={l} className={cn('rounded-xl py-1.5', i === 1 ? 'bg-brand-50 ring-1 ring-brand-100' : 'bg-ink-50')}>
              <p className="font-display text-[15px] leading-none font-semibold text-ink-900">{n}</p>
              <p className="mt-0.5 text-[9px] font-medium text-ink-500">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <ul className="flex-1 space-y-2 overflow-hidden px-3 py-3">
        {mine.map((j, i) => (
          <li key={j.id} className={cn('rounded-2xl bg-white p-3 shadow-card ring-1 ring-ink-900/[0.05]', i === 0 && 'ring-brand-200')}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold text-ink-500">{j.time}</span>
              <StatusPill status={j.status} />
            </div>
            <p className="mt-1.5 text-[13px] leading-tight font-semibold text-ink-900">{j.type}</p>
            <p className="mt-0.5 text-[11px] text-ink-500">
              {j.customer} · {j.area}
            </p>
            {i === 0 && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[10.5px] font-semibold text-brand-700">
                <Navigation className="size-3" aria-hidden="true" /> Open job & navigate
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Screen 2 — job detail with travel / arrive / start actions. */
export function TechJobDetailScreen({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-full flex-col bg-white', className)}>
      <div className="flex items-center gap-2 px-3 pt-1 pb-3">
        <span className="flex size-7 items-center justify-center rounded-full bg-ink-50 text-ink-600">
          <ChevronLeft className="size-4" aria-hidden="true" />
        </span>
        <p className="font-mono text-[10px] font-semibold text-ink-500">JOB-1024</p>
        <span className="ml-auto">
          <StatusPill status="in-progress" />
        </span>
      </div>
      <div className="px-4">
        <p className="font-display text-xl leading-tight font-semibold tracking-[-0.02em] text-ink-900">AC Maintenance</p>
        <p className="mt-0.5 text-[12px] text-ink-500">Quarterly service · 2 split ACs</p>
      </div>

      <div className="mx-4 mt-3 overflow-hidden rounded-2xl ring-1 ring-ink-900/[0.06]">
        <div className="relative h-24 bg-wash">
          <svg viewBox="0 0 240 96" className="size-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="240" height="96" fill="#eef3fc" />
            <path d="M-10 70 C 60 60, 90 20, 160 36 S 230 40, 250 20" fill="none" stroke="#fff" strokeWidth="9" />
            <path d="M40 -10 C 50 30, 70 60, 60 110" fill="none" stroke="#fff" strokeWidth="7" />
            <path d="M-10 70 C 60 60, 90 20, 160 36" fill="none" stroke="#2f66ff" strokeWidth="2.4" strokeDasharray="5 5" strokeLinecap="round" className="flow-line" />
            <circle cx="160" cy="36" r="11" fill="#2f66ff" opacity="0.15" />
            <circle cx="160" cy="36" r="5" fill="#2f66ff" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
        <div className="flex items-center justify-between bg-white px-3 py-2.5">
          <div>
            <p className="text-[12px] font-semibold text-ink-900">Sharma Residency</p>
            <p className="text-[10.5px] text-ink-500">14, 3rd Avenue, Anna Nagar</p>
          </div>
          <span className="flex size-8 items-center justify-center rounded-full bg-mint-50 text-mint-600">
            <Phone className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="mx-4 mt-3 flex flex-wrap gap-1.5">
        <Tag tone="brand">2 × Split AC</Tag>
        <Tag tone="mint">AMC active</Tag>
        <Tag tone="aqua">Last visit 04 Oct</Tag>
      </div>

      <div className="mx-4 mt-3 rounded-2xl bg-mist p-3 ring-1 ring-ink-900/[0.05]">
        <p className="font-mono text-[9px] font-semibold tracking-wider text-ink-500">LAST VISIT · 04 OCT</p>
        <p className="mt-1 text-[11.5px] leading-snug text-ink-700">Filters cleaned. Gas pressure normal at 118 psi. Customer asked about the bedroom unit’s noise.</p>
      </div>

      <div className="mt-auto space-y-2 px-4 pb-3 pt-3">
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-semibold">
          <span className="rounded-xl bg-ink-50 py-2 text-ink-500">Start travel</span>
          <span className="rounded-xl bg-ink-50 py-2 text-ink-500">Arrived</span>
          <span className="rounded-xl bg-brand-gradient py-2 text-white shadow-cta">Working</span>
        </div>
        <div className="rounded-xl bg-brand-gradient py-3 text-center text-[13px] font-semibold text-white shadow-cta">Continue checklist</div>
      </div>
    </div>
  )
}

/** Screen 3 — completion: checklist, parts used, signature. */
export function TechCompleteScreen({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-full flex-col bg-mist', className)}>
      <div className="bg-white px-4 pt-1 pb-3">
        <p className="font-mono text-[10px] font-semibold text-ink-500">JOB-1024 · COMPLETE</p>
        <p className="font-display text-[17px] leading-tight font-semibold tracking-[-0.02em] text-ink-900">Service summary</p>
        <div className="mt-2.5 flex items-center gap-2">
          <Meter value={100} tone="mint" className="flex-1" />
          <span className="font-mono text-[10px] font-semibold text-mint-600">5 / 5</span>
        </div>
      </div>
      <div className="flex-1 space-y-2.5 overflow-hidden px-3 py-3">
        <div className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.05]">
          <p className="text-[11px] font-semibold text-ink-700">Parts used</p>
          <ul className="mt-2 space-y-1.5 text-[11.5px] text-ink-700">
            <li className="flex justify-between">
              <span>Running capacitor 35 µF × 1</span>
              <span className="font-mono text-ink-500">₹420</span>
            </li>
            <li className="flex justify-between">
              <span>R32 refrigerant · 300 g</span>
              <span className="font-mono text-ink-500">₹270</span>
            </li>
          </ul>
          <p className="mt-2 flex items-center gap-1 text-[10px] font-medium text-mint-600">
            <Check className="size-3" strokeWidth={3} aria-hidden="true" /> Deducted from van stock
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-ink-200 bg-white py-3 text-[10.5px] font-medium text-ink-500">
            <Camera className="size-4 text-brand-500" aria-hidden="true" /> 2 photos <Plus className="size-3" aria-hidden="true" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-white py-3 text-[10.5px] font-medium text-ink-500 ring-1 ring-ink-900/[0.05]">
            <PenLine className="size-4 text-brand-500" aria-hidden="true" />
            <svg viewBox="0 0 60 20" className="h-4 w-14" aria-hidden="true">
              <path d="M2 14c6-14 10-14 8-2s4 4 8-4 6 8 10 2 4-8 8-2 6 4 10-2" fill="none" stroke="#0b1736" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="space-y-2 px-4 pb-3">
        <div className="flex items-center justify-between text-[11px] text-ink-500">
          <span>Service report</span>
          <span className="font-semibold text-ink-800">Auto-generated</span>
        </div>
        <div className="rounded-xl bg-brand-gradient py-3 text-center text-[13px] font-semibold text-white shadow-cta">Complete job</div>
      </div>
    </div>
  )
}
