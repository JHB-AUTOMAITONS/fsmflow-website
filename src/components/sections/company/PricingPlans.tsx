import { CircleDashed } from 'lucide-react'
import { CheckList } from '@/components/ui/CheckList'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { PLANS, type Plan } from '@/data/pricing'
import { cn } from '@/lib/cn'
import { inr } from '@/lib/format'

/**
 * Big price block. Three states, driven entirely by data/pricing.ts:
 *   custom pricing -> "Custom"
 *   price === null -> "₹ —" with a "Price to be confirmed" note (placeholder)
 *   price is set   -> the amount via inr()
 */
export function PlanPrice({ plan }: { plan: Plan }) {
  if (plan.pricingMode === 'custom') {
    return (
      <div>
        <p className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.035em] text-ink-900">Custom</p>
        <p className="mt-2.5 text-[0.9375rem] leading-snug text-ink-500">Priced around {plan.priceUnit}.</p>
      </div>
    )
  }
  if (plan.price === null) {
    return (
      <div>
        <p className="flex items-baseline gap-2">
          <span className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.035em] text-ink-900">
            ₹<span className="px-1 text-ink-300">—</span>
          </span>
          <span className="text-[0.9375rem] text-ink-500">/ {plan.priceUnit}</span>
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-heat-50 px-2.5 py-1 text-[0.75rem] leading-none font-semibold text-heat-600 ring-1 ring-heat-100">
          <CircleDashed className="size-3.5" aria-hidden="true" />
          Price to be confirmed
        </p>
      </div>
    )
  }
  return (
    <div>
      <p className="flex items-baseline gap-2">
        <span className="tabular font-display text-[2.5rem] leading-none font-semibold tracking-[-0.035em] text-ink-900">{inr(plan.price)}</span>
        <span className="text-[0.9375rem] text-ink-500">/ {plan.priceUnit}</span>
      </p>
      <p className="mt-2.5 text-[0.9375rem] leading-snug text-ink-500">Confirm your exact total in your demo.</p>
    </div>
  )
}

function PlanBody({ plan }: { plan: Plan }) {
  const headingId = `plan-${plan.id}`
  return (
    <div className="flex h-full w-full flex-col p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <h3 id={headingId} className="font-display text-[1.625rem] leading-none font-semibold tracking-[-0.03em] text-ink-900">
          {plan.name}
        </h3>
        {plan.badge && (
          <span className="eyebrow-mono shrink-0 rounded-full bg-brand-gradient px-2.5 py-1.5 text-[0.625rem] text-white shadow-cta">{plan.badge}</span>
        )}
      </div>
      <p className="mt-3 text-[1.0625rem] leading-snug text-ink-600">{plan.tagline}</p>

      <div className="mt-7 min-h-[6.25rem]">
        <PlanPrice plan={plan} />
      </div>

      <ButtonLink
        href={plan.cta.href}
        size="lg"
        variant={plan.highlight ? 'primary' : 'secondary'}
        className="mt-7 w-full"
        aria-label={`${plan.cta.label}: ${plan.name} plan`}
      >
        {plan.cta.label}
      </ButtonLink>

      <div className="mt-8 border-t border-ink-900/[0.08] pt-6">
        <p className="eyebrow-mono text-ink-500">Best for</p>
        <p className="mt-2.5 text-[0.9375rem] leading-snug text-ink-700">{plan.forWho}</p>
      </div>

      <div className="mt-6">
        <p className="eyebrow-mono text-ink-500">Includes</p>
        <CheckList items={plan.includes} tone={plan.highlight ? 'brand' : 'mint'} className="mt-3.5 space-y-2.5" itemClassName="text-[0.9375rem]" />
      </div>
    </div>
  )
}

/** The three plan cards. Growth is the highlighted plan (gradient edge, lifted on desktop). */
export function PricingPlans() {
  return (
    <ul className="mx-auto grid max-w-xl items-stretch gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-7">
      {PLANS.map((plan, i) => (
        <li key={plan.id} className={cn('flex', plan.highlight && 'lg:-my-4')}>
          <Reveal delay={i * 90} variant="scale" className="flex w-full">
            <article aria-labelledby={`plan-${plan.id}`} className="flex w-full">
              {plan.highlight ? (
                <div className="flex w-full rounded-[30px] bg-brand-gradient p-[1.5px] shadow-lift">
                  <div className="flex w-full rounded-[28.5px] bg-linear-to-b from-brand-50 via-white to-white">
                    <PlanBody plan={plan} />
                  </div>
                </div>
              ) : (
                <div className="flex w-full rounded-[28px] bg-white shadow-card ring-1 ring-ink-900/[0.08]">
                  <PlanBody plan={plan} />
                </div>
              )}
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
