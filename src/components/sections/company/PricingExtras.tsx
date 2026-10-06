import { ClipboardList, Package, ReceiptText, ShieldCheck, UserCheck, type LucideIcon } from 'lucide-react'
import { Bezel } from '@/components/ui/Bezel'
import { ButtonLink } from '@/components/ui/Button'
import { CheckList } from '@/components/ui/CheckList'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/cn'

const FLOW: { icon: LucideIcon; label: string; note: string; tone: string }[] = [
  { icon: ClipboardList, label: 'Job', note: 'Created from a service call or an AMC visit', tone: 'bg-brand-50 text-brand-600 ring-brand-100' },
  { icon: UserCheck, label: 'Technician', note: 'Assigned, on the way, on site, tracked live', tone: 'bg-aqua-50 text-aqua-600 ring-aqua-100' },
  { icon: Package, label: 'Parts', note: 'Taken from van or warehouse stock and logged', tone: 'bg-iris-50 text-iris-600 ring-iris-100' },
  { icon: ReceiptText, label: 'Invoice', note: 'Raised from the finished job, payment followed up', tone: 'bg-heat-50 text-heat-600 ring-heat-100' },
  { icon: ShieldCheck, label: 'AMC', note: 'Contract visits and renewal dates tracked', tone: 'bg-mint-50 text-mint-600 ring-mint-100' },
]

/** "Every plan runs on the same connected flow" strip. Static, decorative connectors. */
export function CoreFlowStrip() {
  return (
    <Bezel radius="lg" coreClassName="px-5 py-8 sm:px-8 md:px-10 md:py-10">
      <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow-mono text-brand-600">Same flow in every plan</p>
          <h2 id="flow-heading" className="mt-3 font-display text-h3 font-semibold text-ink-900">
            From the first call to the next AMC renewal
          </h2>
        </div>
        <p className="max-w-sm text-[0.9375rem] leading-snug text-ink-500 md:text-right">
          Plans differ in scale and depth, not in how a job moves through your business.
        </p>
      </div>

      <ol className="relative mt-9 grid gap-6 md:grid-cols-5 md:gap-4">
        {/* connector: vertical on mobile, horizontal from md */}
        <svg className="absolute top-6 bottom-6 left-[22px] w-1 md:hidden" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 2 100">
          <line x1="1" y1="0" x2="1" y2="100" stroke="#2f66ff" strokeOpacity="0.45" strokeWidth="1.6" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" className="flow-line-slow" />
        </svg>
        <svg className="absolute top-[22px] right-[10%] left-[10%] hidden h-1 w-[80%] md:block" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 100 2">
          <line x1="0" y1="1" x2="100" y2="1" stroke="#2f66ff" strokeOpacity="0.45" strokeWidth="1.6" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" className="flow-line-slow" />
        </svg>

        {FLOW.map(({ icon: Icon, label, note, tone }, i) => (
          <li key={label} className="relative flex gap-4 md:flex-col md:items-center md:gap-0 md:text-center">
            <span className={cn('relative z-10 flex size-11 shrink-0 items-center justify-center rounded-[14px] shadow-[0_0_0_7px_#fff] ring-1 ring-inset', tone)} aria-hidden="true">
              <Icon className="size-5" strokeWidth={1.6} />
            </span>
            <div className="md:mt-4">
              <p className="flex items-center gap-2 font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-900 md:justify-center">
                <span className="font-mono text-[0.6875rem] font-semibold text-ink-500">0{i + 1}</span>
                {label}
              </p>
              <p className="mt-1 text-[0.875rem] leading-snug text-ink-500">{note}</p>
            </div>
          </li>
        ))}
      </ol>
    </Bezel>
  )
}

/** Decorative head office + branches diagram. */
function BranchDiagram() {
  const branches = [
    { x: 72, y: 62, label: 'BRANCH A' },
    { x: 348, y: 62, label: 'BRANCH B' },
    { x: 72, y: 238, label: 'BRANCH C' },
    { x: 348, y: 238, label: 'BRANCH D' },
  ]
  const dots = ['#00a5cf', '#6554f3', '#ff9f1c', '#12b76a']
  return (
    <svg viewBox="0 0 420 300" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ent-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f66ff" />
          <stop offset="1" stopColor="#6554f3" />
        </linearGradient>
      </defs>
      {branches.map((b, i) => (
        <g key={b.label}>
          <path d={`M210 150 C ${(210 + b.x) / 2} 150, ${b.x} ${(150 + b.y) / 2}, ${b.x} ${b.y}`} fill="none" stroke="#2f66ff" strokeOpacity="0.2" strokeWidth="1.2" />
          <path
            d={`M210 150 C ${(210 + b.x) / 2} 150, ${b.x} ${(150 + b.y) / 2}, ${b.x} ${b.y}`}
            fill="none"
            stroke="#2f66ff"
            strokeOpacity="0.7"
            strokeWidth="1.6"
            className={i % 2 === 0 ? 'flow-line' : 'flow-line-slow'}
          />
          <circle cx={b.x} cy={b.y} r="26" fill="#fff" stroke="#0b1736" strokeOpacity="0.1" />
          <rect x={b.x - 8} y={b.y - 9} width="16" height="18" rx="3" fill="none" stroke="#3e4e7a" strokeWidth="1.5" />
          <path d={`M${b.x - 4} ${b.y - 4}h2M${b.x + 2} ${b.y - 4}h2M${b.x - 4} ${b.y + 1}h2M${b.x + 2} ${b.y + 1}h2`} stroke="#3e4e7a" strokeWidth="1.5" strokeLinecap="round" />
          <text x={b.x} y={b.y < 150 ? b.y - 36 : b.y + 46} textAnchor="middle" fontFamily="'JetBrains Mono Variable', monospace" fontSize="10" fontWeight="600" letterSpacing="1.4" fill="#5a6a92">
            {b.label}
          </text>
          <circle cx={b.x + (b.x < 210 ? 34 : -34)} cy={b.y + (b.y < 150 ? 14 : -14)} r="5" fill={dots[i]} />
          <circle cx={b.x + (b.x < 210 ? 45 : -45)} cy={b.y + (b.y < 150 ? 24 : -24)} r="3.5" fill={dots[(i + 1) % 4]} opacity="0.7" />
        </g>
      ))}
      <circle cx="210" cy="150" r="48" fill="#2f66ff" opacity="0.08" />
      <circle cx="210" cy="150" r="36" fill="url(#ent-hub)" />
      <rect x="198" y="136" width="24" height="28" rx="4" fill="none" stroke="#fff" strokeWidth="2" />
      <path d="M204 144h3M213 144h3M204 151h3M213 151h3M204 158h3M213 158h3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <text x="210" y="212" textAnchor="middle" fontFamily="'JetBrains Mono Variable', monospace" fontSize="10" fontWeight="600" letterSpacing="1.4" fill="#183599">
        HEAD OFFICE
      </text>
    </svg>
  )
}

/** Enterprise / "talk to us" block. */
export function EnterpriseBlock() {
  return (
    <Bezel radius="xl" coreClassName="overflow-hidden">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 sm:p-10 lg:p-14">
          <Eyebrow tone="iris">Enterprise</Eyebrow>
          <h2 id="enterprise-heading" className="text-h2 mt-5 font-semibold text-ink-900">
            Bigger team or several branches?
          </h2>
          <p className="text-lead mt-5 max-w-xl text-ink-600">
            Tell us how your business is organised and we will set up the right plan with you. These are the things teams usually want to talk through.
          </p>
          <CheckList
            tone="brand"
            className="mt-7"
            items={[
              'Running several branches or service centres from one account',
              'Roles and permissions for office staff, supervisors and technicians',
              'Moving existing customer and equipment lists out of spreadsheets',
              'Training for your office team and technicians',
            ]}
          />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" size="lg">
              Talk to us
            </ButtonLink>
            <ButtonLink href="/demo" size="lg" variant="secondary" arrow={false}>
              Book a Demo
            </ButtonLink>
          </div>
        </div>
        <div className="relative isolate flex items-center justify-center border-t border-ink-900/[0.06] bg-wash px-6 py-10 lg:border-t-0 lg:border-l">
          <div className="absolute inset-0 -z-10 bg-blueprint opacity-70 mask-fade-edges" aria-hidden="true" />
          <div className="w-full max-w-[520px]">
            <BranchDiagram />
          </div>
        </div>
      </div>
    </Bezel>
  )
}
