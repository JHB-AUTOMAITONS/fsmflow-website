import { Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

const tones = {
  brand: 'bg-brand-50 text-brand-600',
  mint: 'bg-mint-50 text-mint-600',
  aqua: 'bg-aqua-50 text-aqua-600',
  white: 'bg-white/20 text-white',
} as const

export function CheckList({
  items,
  tone = 'mint',
  className,
  itemClassName,
}: {
  items: ReactNode[]
  tone?: keyof typeof tones
  className?: string
  itemClassName?: string
}) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item, i) => (
        <li key={i} className={cn('flex items-start gap-3 text-[1.0625rem] leading-snug text-ink-700', itemClassName)}>
          <span className={cn('mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full', tones[tone])} aria-hidden="true">
            <Check className="size-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
