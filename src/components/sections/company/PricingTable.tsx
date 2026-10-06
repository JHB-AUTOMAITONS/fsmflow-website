import { Check } from 'lucide-react'
import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { COMPARISON, PLANS, priceSummary, type Cell, type Plan, type PlanId } from '@/data/pricing'
import { cn } from '@/lib/cn'

/** Included / not included / short note. Always carries a text alternative. */
function CellValue({ value, align = 'center' }: { value: Cell; align?: 'center' | 'end' }) {
  const box = align === 'center' ? 'justify-center' : 'justify-end'
  if (value === true) {
    return (
      <span className={cn('flex', box)}>
        <span className="flex size-6 items-center justify-center rounded-full bg-mint-50 text-mint-600 ring-1 ring-mint-100">
          <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
        </span>
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className={cn('flex', box)}>
        <span aria-hidden="true" className="text-lg leading-none text-ink-300">
          —
        </span>
        <span className="sr-only">Not included</span>
      </span>
    )
  }
  return <span className={cn('block text-[0.9375rem] leading-snug font-semibold text-ink-700', align === 'center' ? 'text-center' : 'text-right')}>{value}</span>
}

/** Desktop / tablet: a real table with a sticky header and the highlighted plan tinted. */
function DesktopTable() {
  return (
    <div className="hidden md:block">
      <table className="w-full table-fixed border-separate border-spacing-0 text-left">
        <caption className="sr-only">Feature comparison of the Starter, Growth and Enterprise plans</caption>
        <thead>
          <tr>
            <th scope="col" className="sticky top-[88px] z-20 w-[37%] border-b border-ink-900/10 bg-white py-5 pr-4 align-bottom">
              <span className="eyebrow-mono text-ink-500">What’s included</span>
            </th>
            {PLANS.map((plan) => (
              <th
                key={plan.id}
                scope="col"
                className={cn(
                  'sticky top-[88px] z-20 border-b border-ink-900/10 px-3 py-5 text-center align-bottom',
                  plan.highlight ? 'rounded-t-2xl bg-brand-50' : 'bg-white',
                )}
              >
                <span className="block font-display text-xl leading-tight font-semibold tracking-[-0.02em] text-ink-900">{plan.name}</span>
                <span className="mt-1 block text-[0.8125rem] leading-snug font-medium text-ink-500">{priceSummary(plan)}</span>
              </th>
            ))}
          </tr>
        </thead>
        {COMPARISON.map((group) => (
          <tbody key={group.id}>
            <tr>
              <th scope="rowgroup" className="pt-9 pb-3 text-left">
                <span className="eyebrow-mono inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-2 text-ink-600 ring-1 ring-ink-900/[0.05]">
                  <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                  {group.title}
                </span>
              </th>
              {PLANS.map((plan) => (
                <td key={plan.id} className={cn(plan.highlight && 'bg-brand-50/60')} />
              ))}
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className="group/row">
                <th scope="row" className="border-b border-ink-900/[0.06] py-4 pr-4 text-left text-[1rem] leading-snug font-medium text-ink-800">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={PLANS[i].id}
                    className={cn('border-b border-ink-900/[0.06] px-3 py-4 align-middle', PLANS[i].highlight && 'bg-brand-50/60')}
                  >
                    <CellValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
        <tfoot>
          <tr>
            <td className="pt-8" />
            {PLANS.map((plan) => (
              <td key={plan.id} className={cn('px-3 pt-8 pb-2 text-center', plan.highlight && 'rounded-b-2xl bg-brand-50/60')}>
                <ButtonLink
                  href={plan.cta.href}
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  arrow={false}
                  className="w-full px-4"
                  aria-label={`${plan.cta.label}: ${plan.name} plan`}
                >
                  {plan.cta.label}
                </ButtonLink>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

/** Mobile: pick one plan with tabs, then read its full list. No squashed multi-column table. */
function MobilePlanTabs() {
  const uid = useId()
  const [active, setActive] = useState<PlanId>('growth')
  const tabRefs = useRef<Partial<Record<PlanId, HTMLButtonElement | null>>>({})
  const plan = PLANS.find((p) => p.id === active) as Plan
  const index = PLANS.findIndex((p) => p.id === active)

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = -1
    if (e.key === 'ArrowRight') next = (index + 1) % PLANS.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + PLANS.length) % PLANS.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = PLANS.length - 1
    if (next < 0) return
    e.preventDefault()
    const id = PLANS[next].id
    setActive(id)
    tabRefs.current[id]?.focus()
  }

  return (
    <div className="md:hidden">
      <div
        role="tablist"
        aria-label="Choose a plan to see what it includes"
        onKeyDown={onKeyDown}
        className="sticky top-[84px] z-20 grid grid-cols-3 gap-1 rounded-full bg-white/90 p-1 shadow-card ring-1 ring-ink-900/[0.08] backdrop-blur-xl"
      >
        {PLANS.map((p) => {
          const selected = p.id === active
          return (
            <button
              key={p.id}
              ref={(el) => {
                tabRefs.current[p.id] = el
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${p.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(p.id)}
              className={cn(
                'h-11 rounded-full text-[0.9375rem] font-semibold transition-[background-color,color,box-shadow] duration-300 ease-premium',
                selected ? 'bg-brand-gradient text-white shadow-cta' : 'text-ink-700 hover:bg-ink-900/[0.04]',
              )}
            >
              {p.name}
            </button>
          )
        })}
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${active}`} tabIndex={0} className="mt-5 rounded-2xl outline-offset-4">
        <div className="rounded-[22px] bg-brand-50/70 p-5 ring-1 ring-brand-100">
          <p className="font-display text-xl font-semibold tracking-[-0.02em] text-ink-900">{plan.name}</p>
          <p className="mt-1 text-[0.9375rem] leading-snug text-ink-600">{plan.tagline}</p>
          <p className="mt-3 text-[0.875rem] font-semibold text-ink-700">{priceSummary(plan)}</p>
          <ButtonLink href={plan.cta.href} variant={plan.highlight ? 'primary' : 'secondary'} className="mt-4 w-full" aria-label={`${plan.cta.label}: ${plan.name} plan`}>
            {plan.cta.label}
          </ButtonLink>
        </div>

        {COMPARISON.map((group) => {
          const col = PLANS.findIndex((p) => p.id === active)
          return (
            <section key={group.id} aria-labelledby={`${uid}-g-${group.id}`} className="mt-7">
              <h3 id={`${uid}-g-${group.id}`} className="eyebrow-mono flex items-center gap-2 text-ink-600">
                <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="mt-2 divide-y divide-ink-900/[0.07] rounded-2xl bg-white px-4 ring-1 ring-ink-900/[0.07]">
                {group.rows.map((row) => (
                  <li key={row.label} className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-[0.9375rem] leading-snug text-ink-800">{row.label}</span>
                    <span className="shrink-0">
                      <CellValue value={row.values[col]} align="end" />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export function PricingTable() {
  return (
    <>
      <DesktopTable />
      <MobilePlanTabs />
    </>
  )
}
