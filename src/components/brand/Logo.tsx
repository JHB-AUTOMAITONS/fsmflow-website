import { useId } from 'react'
import { Link } from 'react-router'
import { cn } from '@/lib/cn'

/**
 * FSMFlow mark: an "F" drawn as one continuous flow line — it rises like a
 * service route, turns into an arm and ends in a job-site dot.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 40 40" className={cn('size-9', className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-bg`} x1="4" y1="2" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2f66ff" />
          <stop offset="1" stopColor="#6554f3" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${id}-bg)`} />
      <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" fill="none" stroke="#fff" strokeOpacity="0.28" />
      <path
        d="M13.5 30V16.5c0-3.6 2.2-5.6 5.6-5.6h8.4"
        fill="none"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.5 21.6h8.2" fill="none" stroke="#fff" strokeOpacity="0.92" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="29.2" cy="10.9" r="2.5" fill="#52d1f0" />
    </svg>
  )
}

export function Logo({ className, markClassName, to = '/' }: { className?: string; markClassName?: string; to?: string }) {
  return (
    <Link
      to={to}
      aria-label="FSMFlow — home"
      className={cn('group/logo inline-flex items-center gap-2.5 rounded-xl', className)}
    >
      <LogoMark className={cn('transition-transform duration-500 ease-premium group-hover/logo:-rotate-6', markClassName)} />
      <span className="font-display text-[1.375rem] leading-none font-bold tracking-[-0.03em] text-ink-900">
        FSM<span className="text-brand-600">Flow</span>
      </span>
    </Link>
  )
}
