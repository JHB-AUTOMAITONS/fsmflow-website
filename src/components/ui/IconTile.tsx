import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

const tones = {
  brand: 'bg-brand-50 text-brand-600 ring-brand-100',
  iris: 'bg-iris-50 text-iris-600 ring-iris-100',
  aqua: 'bg-aqua-50 text-aqua-600 ring-aqua-100',
  mint: 'bg-mint-50 text-mint-600 ring-mint-100',
  heat: 'bg-heat-50 text-heat-600 ring-heat-100',
  coral: 'bg-coral-50 text-coral-600 ring-coral-100',
  ink: 'bg-ink-50 text-ink-700 ring-ink-100',
  solid: 'bg-brand-gradient text-white ring-white/30 shadow-cta',
} as const

const sizes = {
  sm: { box: 'size-9 rounded-[11px]', icon: 'size-[18px]' },
  md: { box: 'size-11 rounded-[14px]', icon: 'size-5' },
  lg: { box: 'size-14 rounded-[18px]', icon: 'size-6' },
} as const

export type IconTone = keyof typeof tones

export function IconTile({
  icon: Icon,
  tone = 'brand',
  size = 'md',
  className,
}: {
  icon: LucideIcon
  tone?: IconTone
  size?: keyof typeof sizes
  className?: string
}) {
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center ring-1 ring-inset', tones[tone], sizes[size].box, className)}
      aria-hidden="true"
    >
      <Icon className={sizes[size].icon} strokeWidth={1.6} />
    </span>
  )
}
