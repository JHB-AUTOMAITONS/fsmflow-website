import {
  ArrowRight,
  CalendarClock,
  Check,
  Handshake,
  IndianRupee,
  MessageCircle,
  Package,
  ReceiptText,
  UserCheck,
  type LucideIcon,
} from 'lucide-react'
import { StatusPill } from '@/components/product/StatusPill'
import { Bezel } from '@/components/ui/Bezel'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

/* ------------------------------------------------------------------------- */
/* Before: scattered tools                                                    */
/* ------------------------------------------------------------------------- */

function WhatsAppLikeCard() {
  return (
    <div className="-rotate-2 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-ink-900/[0.07]">
      <p className="flex items-center gap-2 text-[11px] font-semibold text-ink-800">
        <span className="flex size-6 items-center justify-center rounded-full bg-mint-50 text-mint-600 ring-1 ring-mint-100">
          <MessageCircle className="size-3.5" aria-hidden="true" />
        </span>
        Service team group
        <span className="ml-auto rounded-full bg-coral-500 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white">47</span>
      </p>
      <div className="mt-2.5 space-y-1.5 text-[11px] leading-snug">
        <p className="w-fit max-w-[88%] rounded-xl rounded-tl-sm bg-ink-50 px-2.5 py-1.5 text-ink-700">Who is free at 11?</p>
        <p className="ml-auto w-fit max-w-[88%] rounded-xl rounded-tr-sm bg-mint-50 px-2.5 py-1.5 text-ink-700">Which AC at Anna Nagar?</p>
        <p className="w-fit max-w-[88%] rounded-xl rounded-tl-sm bg-ink-50 px-2.5 py-1.5 text-ink-700">Send the address again</p>
      </div>
    </div>
  )
}

function SheetCard() {
  const cols = ['A', 'B', 'C', 'D']
  return (
    <div className="rotate-[1.5deg] rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-ink-900/[0.07]">
      <p className="text-[11px] font-semibold text-ink-800">AMC_list_final_v3</p>
      <div className="mt-2.5 overflow-hidden rounded-lg ring-1 ring-ink-900/[0.1]">
        <div className="grid grid-cols-4 bg-ink-50 text-center font-mono text-[9px] font-semibold text-ink-500">
          {cols.map((c) => (
            <span key={c} className="border-r border-ink-900/[0.07] py-1 last:border-r-0">
              {c}
            </span>
          ))}
        </div>
        {[
          ['Sharma', '04 Oct', 'Done', ''],
          ['Orchid', '??', '', 'AMC?'],
          ['Patel', '12 Jul', '', ''],
        ].map((row, r) => (
          <div key={r} className="grid grid-cols-4 border-t border-ink-900/[0.07] text-[10px] text-ink-600">
            {row.map((cell, c) => (
              <span
                key={c}
                className={cn(
                  'truncate border-r border-ink-900/[0.07] px-1.5 py-1 last:border-r-0',
                  cell === 'AMC?' && 'bg-coral-50 font-semibold text-coral-600',
                  cell === '??' && 'bg-heat-50 text-heat-600',
                )}
              >
                {cell || ' '}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function PaperCard() {
  return (
    <div className="rotate-1 rounded-2xl bg-heat-50 p-3.5 shadow-card ring-1 ring-heat-100">
      <p className="font-mono text-[10px] font-semibold tracking-wider text-heat-600">JOB CARD No. 118</p>
      <svg viewBox="0 0 160 70" className="mt-2 h-auto w-full" aria-hidden="true">
        {[16, 32, 48, 64].map((y) => (
          <line key={y} x1="0" y1={y} x2="160" y2={y} stroke="#e07f00" strokeOpacity="0.22" />
        ))}
        <path d="M4 12c10-8 14 6 24-2s14 4 24-2 10 4 20-1" fill="none" stroke="#263661" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M4 28c8-6 16 4 26-1s12 3 22-2" fill="none" stroke="#263661" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M4 44c12-6 18 4 30-1s16 2 30-2 18 2 26-1" fill="none" stroke="#263661" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="128" cy="40" r="17" fill="none" stroke="#ff9f1c" strokeOpacity="0.5" strokeWidth="2" />
      </svg>
    </div>
  )
}

function MissedCard() {
  return (
    <div className="-rotate-1 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-coral-100">
      <div className="flex items-center justify-between gap-2">
        <p className="flex items-center gap-2 text-[11px] font-semibold text-ink-800">
          <CalendarClock className="size-4 text-coral-500" aria-hidden="true" />
          AMC renewal
        </p>
        <StatusPill status="overdue" label="Missed" live={false} />
      </div>
      <p className="mt-2 text-[11px] leading-snug text-ink-600">Orchid Clinic · 6 units · ended 12 days ago. Nobody called.</p>
    </div>
  )
}

function ScatteredPanel() {
  return (
    <div
      className="relative isolate h-full overflow-hidden rounded-[28px] bg-linear-to-br from-coral-50 via-white to-heat-50 p-5 ring-1 ring-coral-100 sm:p-7"
      role="img"
      aria-label="Illustration of scattered tools: a busy WhatsApp group, an Excel sheet with gaps, a handwritten paper job card and a missed AMC renewal reminder"
    >
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" aria-hidden="true" />
      <svg className="absolute inset-0 -z-10 size-full" viewBox="0 0 400 420" preserveAspectRatio="none" aria-hidden="true">
        <path d="M60 80 C 180 20, 260 160, 340 90 S 120 260, 340 300 S 200 400, 60 340" fill="none" stroke="#f4533f" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
        <path d="M340 60 C 240 180, 100 120, 80 260 S 300 330, 200 400" fill="none" stroke="#ff9f1c" strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="3 7" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5" aria-hidden="true">
        <div className="space-y-4 sm:space-y-5">
          <WhatsAppLikeCard />
          <PaperCard />
        </div>
        <div className="space-y-4 sm:mt-8 sm:space-y-5">
          <SheetCard />
          <MissedCard />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------- */
/* After: one connected flow                                                  */
/* ------------------------------------------------------------------------- */

const FLOW: { icon: LucideIcon; title: string; note: string }[] = [
  { icon: Handshake, title: 'Enquiry logged', note: 'Sharma Residency · 2 split ACs' },
  { icon: ReceiptText, title: 'Quotation approved', note: 'Sent and accepted' },
  { icon: UserCheck, title: 'Technician assigned', note: 'JOB-1024 · Ravi Kumar' },
  { icon: Package, title: 'Parts used from van stock', note: 'Capacitor 35 µF × 1' },
  { icon: IndianRupee, title: 'Invoice paid', note: 'INV-2291 · ₹3,260' },
  { icon: CalendarClock, title: 'AMC renewal scheduled', note: 'Next visit in 3 months' },
]

function OneFlowPanel() {
  return (
    <Bezel
      radius="lg"
      className="h-full shadow-lift"
      coreClassName="flex h-full flex-col"
      role="img"
      aria-label="Illustration of one connected flow: enquiry, quotation, technician, parts, invoice and AMC renewal in a single FSMFlow record"
    >
      <div className="flex items-center gap-2.5 border-b border-ink-900/[0.06] px-4 py-3" aria-hidden="true">
        <span className="flex size-6 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <Check className="size-3.5" strokeWidth={2.4} />
        </span>
        <div>
          <p className="text-[13px] leading-tight font-semibold text-ink-900">One customer record</p>
          <p className="font-mono text-[10px] leading-tight text-ink-500">Sample data</p>
        </div>
      </div>
      <ol className="relative flex-1 space-y-1 p-4 sm:p-5" aria-hidden="true">
        <span className="absolute top-9 bottom-9 left-[2.15rem] w-px bg-brand-200 sm:left-[2.4rem]" />
        {FLOW.map(({ icon: Icon, title, note }) => (
          <li key={title} className="relative flex items-center gap-3.5 rounded-2xl px-2 py-2.5">
            <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-card ring-1 ring-brand-100">
              <Icon className="size-[18px]" strokeWidth={1.7} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.9375rem] leading-tight font-semibold text-ink-900">{title}</p>
              <p className="mt-0.5 truncate text-[0.8125rem] text-ink-500">{note}</p>
            </div>
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-50 text-mint-600 ring-1 ring-mint-100">
              <Check className="size-3" strokeWidth={3} />
            </span>
          </li>
        ))}
      </ol>
    </Bezel>
  )
}

/** "Scattered tools" -> "one flow" illustration for the About page. */
export function BeforeAfter() {
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
      <Reveal variant="right" className="flex flex-col gap-4">
        <p className="eyebrow-mono flex items-center gap-2 text-coral-600">
          <span className="size-1.5 rounded-full bg-coral-500" aria-hidden="true" />
          Before: scattered tools
        </p>
        <div className="flex-1">
          <ScatteredPanel />
        </div>
        <ul className="flex flex-wrap gap-2 text-[0.8125rem] font-medium text-ink-700">
          {['WhatsApp groups', 'Excel sheets', 'Paper job cards', 'Missed AMC renewals'].map((t) => (
            <li key={t} className="rounded-full bg-white px-3 py-1.5 ring-1 ring-ink-900/[0.08]">
              {t}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="flex items-center justify-center" aria-hidden="true">
        <span className="flex size-12 rotate-90 items-center justify-center rounded-full bg-brand-gradient text-white shadow-cta lg:rotate-0">
          <ArrowRight className="size-5" strokeWidth={2} />
        </span>
      </div>

      <Reveal variant="left" delay={120} className="flex flex-col gap-4">
        <p className="eyebrow-mono flex items-center gap-2 text-brand-600">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          After: one connected flow
        </p>
        <div className="flex-1">
          <OneFlowPanel />
        </div>
        <ul className="flex flex-wrap gap-2 text-[0.8125rem] font-medium text-ink-700">
          {['One customer record', 'Live job status', 'Parts linked to jobs', 'Renewals tracked'].map((t) => (
            <li key={t} className="rounded-full bg-brand-50 px-3 py-1.5 text-brand-700 ring-1 ring-brand-100">
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}
