import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

const tones = {
  brand: 'bg-brand-50 text-brand-700 ring-brand-100 [--dot:var(--color-brand-500)]',
  aqua: 'bg-aqua-50 text-aqua-600 ring-aqua-100 [--dot:var(--color-aqua-500)]',
  iris: 'bg-iris-50 text-iris-700 ring-iris-100 [--dot:var(--color-iris-500)]',
  mint: 'bg-mint-50 text-mint-600 ring-mint-100 [--dot:var(--color-mint-500)]',
  heat: 'bg-heat-50 text-heat-600 ring-heat-100 [--dot:var(--color-heat-500)]',
  neutral: 'bg-white text-ink-600 ring-ink-900/10 [--dot:var(--color-ink-400)]',
} as const

export type Tone = keyof typeof tones

interface Props {
  children: ReactNode
  tone?: Tone
  /** Show the small status dot. Default true. */
  dot?: boolean
  /** Make the dot pulse (use for "live" things only). */
  live?: boolean
  className?: string
}

/** A small category label. Use it to name what the section is about, not as decoration. */
export function Eyebrow({ children, tone = 'brand', dot = true, live = false, className }: Props) {
  return (
    <span
      className={cn(
        'eyebrow-mono inline-flex items-center gap-2 rounded-full px-3 py-1.5 ring-1 ring-inset',
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span className="relative inline-flex size-1.5">
          {live && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-(--dot)" />}
          <span className="relative size-1.5 rounded-full bg-(--dot)" />
        </span>
      )}
      {children}
    </span>
  )
}
