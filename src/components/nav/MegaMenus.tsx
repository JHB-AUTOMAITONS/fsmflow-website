import { ArrowRight, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { SplitAc } from '@/components/illustrations/Hvac'
import { Bezel } from '@/components/ui/Bezel'
import { IconTile } from '@/components/ui/IconTile'
import { FEATURES } from '@/data/features'
import { HVAC_SOLUTION, SOLUTIONS } from '@/data/solutions'
import { cn } from '@/lib/cn'

interface PanelProps {
  id: string
  label: string
  open: boolean
  className?: string
  children: ReactNode
}

/**
 * Wrapper that animates a mega-menu in/out. Panels are always in the DOM (so the
 * links are crawlable) and hidden with visibility, which also removes them from
 * the tab order while closed.
 */
export function MegaPanel({ id, label, open, className, children }: PanelProps) {
  return (
    <div
      id={id}
      role="group"
      aria-label={label}
      className={cn(
        'absolute inset-x-0 top-full pt-3 transition-[opacity,transform,visibility] duration-300 ease-premium',
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        className,
      )}
    >
      <Bezel radius="xl" className="bg-[#edf1f8] shadow-float" coreClassName="p-3 md:p-4">
        {children}
      </Bezel>
    </div>
  )
}

export function SolutionsMenu({ onNavigate }: { onNavigate: () => void }) {
  const others = SOLUTIONS.filter((s) => s.slug !== HVAC_SOLUTION.slug)
  return (
    <div className="grid grid-cols-12 gap-3">
      <Link
        to={HVAC_SOLUTION.path}
        onClick={onNavigate}
        className="group/hvac relative col-span-5 flex flex-col overflow-hidden rounded-[24px] bg-linear-to-br from-brand-50 via-white to-aqua-50 p-6 ring-1 ring-brand-100 transition-shadow duration-500 ease-premium hover:shadow-lift"
      >
        <span className="eyebrow-mono inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-brand-700 ring-1 ring-brand-100">
          <Sparkles className="size-3" aria-hidden="true" /> Primary focus
        </span>
        <span className="mt-4 font-display text-[1.375rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">
          {HVAC_SOLUTION.h1}
        </span>
        <span className="mt-2 max-w-[18rem] text-[0.9375rem] leading-snug text-ink-600">
          Built for AC, heating and ventilation service teams — from first call to AMC renewal.
        </span>
        <span className="mt-auto flex items-end justify-between pt-5">
          <span className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-600">
            Explore HVAC
            <ArrowRight className="size-4 transition-transform duration-500 ease-premium group-hover/hvac:translate-x-1" aria-hidden="true" />
          </span>
          <SplitAc still className="w-40 translate-y-3 transition-transform duration-700 ease-premium group-hover/hvac:translate-y-1" />
        </span>
      </Link>
      <div className="col-span-7 grid grid-cols-2 gap-1.5 content-start">
        {others.map((s) => (
          <Link
            key={s.slug}
            to={s.path}
            onClick={onNavigate}
            className="group/item flex items-start gap-3 rounded-2xl p-3.5 transition-colors duration-300 hover:bg-brand-50/70"
          >
            <IconTile icon={s.icon} tone="brand" />
            <span className="min-w-0">
              <span className="block font-semibold tracking-[-0.01em] text-ink-900 transition-colors group-hover/item:text-brand-700">
                {s.h1}
              </span>
              <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-500">{s.tagline}</span>
            </span>
          </Link>
        ))}
        <p className="col-span-2 mt-1 rounded-2xl bg-ink-900/[0.03] px-4 py-3 text-[0.8125rem] text-ink-600">
          Not sure which fits your business?{' '}
          <Link to="/demo" onClick={onNavigate} className="font-semibold text-brand-600 hover:text-brand-800">
            Book a demo
          </Link>{' '}
          and we’ll map it with you.
        </p>
      </div>
    </div>
  )
}

export function FeaturesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-9 grid grid-cols-3 gap-1.5">
        {FEATURES.map((f) => (
          <Link
            key={f.slug}
            to={f.path}
            onClick={onNavigate}
            className="group/item flex items-start gap-3 rounded-2xl p-3.5 transition-colors duration-300 hover:bg-brand-50/70"
          >
            <IconTile icon={f.icon} tone="brand" />
            <span className="min-w-0">
              <span className="block font-semibold tracking-[-0.01em] text-ink-900 transition-colors group-hover/item:text-brand-700">
                {f.navLabel}
              </span>
              <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-500">{f.tagline}</span>
            </span>
          </Link>
        ))}
      </div>
      <Link
        to="/demo"
        onClick={onNavigate}
        className="group/promo relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[24px] bg-brand-gradient p-5 text-white"
      >
        <span className="pointer-events-none absolute -right-10 -bottom-10 size-40 rounded-full bg-white/10" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-2 -bottom-2 size-24 rounded-full bg-white/10" aria-hidden="true" />
        <span className="eyebrow-mono text-white/80">One platform</span>
        <span className="mt-3 font-display text-xl leading-tight font-semibold tracking-[-0.02em]">
          Nine modules. One connected workflow.
        </span>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
          See it in a demo
          <ArrowRight className="size-4 transition-transform duration-500 ease-premium group-hover/promo:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </div>
  )
}
