import { cn } from '@/lib/cn'
import type { TechTone } from '@/data/sample'

const tones: Record<TechTone, string> = {
  brand: 'bg-brand-100 text-brand-700',
  iris: 'bg-iris-100 text-iris-700',
  aqua: 'bg-aqua-100 text-aqua-600',
  mint: 'bg-mint-100 text-mint-600',
  heat: 'bg-heat-100 text-heat-600',
}

const sizes = {
  xs: 'size-5 text-[8px]',
  sm: 'size-7 text-[10px]',
  md: 'size-9 text-xs',
  lg: 'size-11 text-sm',
} as const

export function Avatar({
  initials,
  tone = 'brand',
  size = 'sm',
  className,
}: {
  initials: string
  tone?: TechTone
  size?: keyof typeof sizes
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-semibold tracking-tight ring-2 ring-white',
        tones[tone],
        sizes[size],
        className,
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  )
}

export function AvatarStack({ items, size = 'sm' }: { items: { initials: string; tone: TechTone }[]; size?: keyof typeof sizes }) {
  return (
    <span className="flex -space-x-2">
      {items.map((it) => (
        <Avatar key={it.initials} initials={it.initials} tone={it.tone} size={size} />
      ))}
    </span>
  )
}
