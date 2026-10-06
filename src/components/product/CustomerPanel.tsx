import { AirVent, BadgeCheck, CalendarClock, History, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { StatusPill, Tag } from '@/components/product/StatusPill'
import { CUSTOMER } from '@/data/sample'
import { cn } from '@/lib/cn'

/** Customer profile: contact, assets, AMC / warranty and previous jobs. */
export function CustomerProfilePanel({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-4 p-4 @md:p-5 @2xl:grid-cols-[0.9fr_1.1fr]', className)}>
      <div>
        <div className="flex items-start gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient font-display text-lg font-semibold text-white">
            SR
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">{CUSTOMER.id.toUpperCase()}</p>
            <p className="font-display text-lg leading-tight font-semibold tracking-[-0.02em] text-ink-900">{CUSTOMER.name}</p>
            <p className="mt-0.5 text-[12px] text-ink-500">{CUSTOMER.type}</p>
          </div>
        </div>

        <dl className="mt-4 space-y-2 text-[12px]">
          <div className="flex items-center gap-2 text-ink-700">
            <Phone className="size-3.5 shrink-0 text-ink-500" aria-hidden="true" />
            <dt className="sr-only">Contact</dt>
            <dd>
              {CUSTOMER.contact} · {CUSTOMER.phone}
            </dd>
          </div>
          <div className="flex items-start gap-2 text-ink-700">
            <MapPin className="mt-0.5 size-3.5 shrink-0 text-ink-500" aria-hidden="true" />
            <dt className="sr-only">Address</dt>
            <dd>{CUSTOMER.address}</dd>
          </div>
          <div className="flex items-center gap-2 text-ink-700">
            <BadgeCheck className="size-3.5 shrink-0 text-mint-500" aria-hidden="true" />
            <dt className="sr-only">Since</dt>
            <dd>
              {CUSTOMER.since} · {CUSTOMER.visits} visits
            </dd>
          </div>
        </dl>

        <div className="mt-4 rounded-2xl bg-mist p-3 ring-1 ring-ink-900/[0.04]">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-700">
            <History className="size-3.5 text-brand-500" aria-hidden="true" /> Previous jobs
          </p>
          <ol className="mt-2.5 space-y-2.5">
            {CUSTOMER.history.map((h) => (
              <li key={h.date + h.title} className="flex items-start gap-2.5">
                <span className="w-9 shrink-0 pt-px font-mono text-[10px] font-semibold text-ink-500">{h.date}</span>
                <div className="min-w-0">
                  <p className="text-[12px] leading-tight font-semibold text-ink-800">{h.title}</p>
                  <p className="text-[11px] text-ink-500">{h.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-700">
            <AirVent className="size-3.5 text-brand-500" aria-hidden="true" /> Assets · {CUSTOMER.assets.length} units
          </p>
          <Tag tone="mint">
            <ShieldCheck className="size-3" aria-hidden="true" /> AMC active
          </Tag>
        </div>
        <ul className="mt-2.5 space-y-2">
          {CUSTOMER.assets.map((a) => (
            <li key={a.name} className="rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.07]">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-[12.5px] leading-tight font-semibold text-ink-900">{a.name}</p>
                  <p className="mt-0.5 truncate text-[11px] text-ink-500">{a.model}</p>
                </div>
                {a.status === 'expiring' ? <StatusPill status="in-progress" label="Renewal due" /> : <StatusPill status="completed" label="Active" live={false} />}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] text-ink-500">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="size-3 text-ink-500" aria-hidden="true" /> {a.warranty}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarClock className="size-3 text-ink-500" aria-hidden="true" /> {a.amc}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
