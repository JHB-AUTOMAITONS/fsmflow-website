import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

interface Props extends ComponentPropsWithoutRef<'div'> {
  /** Class for the inner "core" surface. */
  coreClassName?: string
  /** Radius preset. */
  radius?: 'md' | 'lg' | 'xl'
  /** Adds a lift-on-hover effect for clickable cards. */
  interactive?: boolean
}

const radii = {
  md: { shell: 'rounded-[22px]', core: 'rounded-[17px]' },
  lg: { shell: 'rounded-[28px]', core: 'rounded-[22px]' },
  xl: { shell: 'rounded-[36px]', core: 'rounded-[29px]' },
} as const

/**
 * Double-bezel surface: a tinted outer shell holding an inner white core with
 * concentric radii — reads like a glass plate in a tray. Used for product
 * windows and major cards.
 */
export function Bezel({ className, coreClassName, radius = 'lg', interactive, children, ...rest }: Props) {
  const r = radii[radius]
  return (
    <div
      className={cn(
        'bg-ink-900/[0.035] p-1.5 ring-1 ring-ink-900/[0.06]',
        r.shell,
        interactive &&
          'transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
      {...rest}
    >
      <div className={cn('h-full bg-white shadow-card ring-1 ring-ink-900/[0.04]', r.core, coreClassName)}>{children}</div>
    </div>
  )
}
