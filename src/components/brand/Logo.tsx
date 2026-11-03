import { Link } from 'react-router'
import { cn } from '@/lib/cn'

/**
 * FSMFlow logo: the location-pin mark and the stacked "FSM Flow" wordmark, supplied as two transparent
 * PNGs cut from the brand artwork (public/logo-mark.png, public/logo-wordmark.png). Both share the same
 * height, so they line up without any overlap, and the mark can tilt on hover on its own.
 * The images are decorative; the link carries the accessible name.
 */
const SIZES = {
  md: 'h-11 md:h-12',
  lg: 'h-14 md:h-16',
} as const

export function Logo({
  className,
  markClassName,
  size = 'md',
  to = '/',
}: {
  className?: string
  markClassName?: string
  size?: keyof typeof SIZES
  to?: string
}) {
  const h = SIZES[size]
  return (
    <Link
      to={to}
      aria-label="FSMFlow — home"
      className={cn('group/logo inline-flex items-center gap-2.5 rounded-xl', className)}
    >
      <img
        src="/logo-mark.png"
        alt=""
        width={322}
        height={394}
        decoding="async"
        draggable={false}
        className={cn(
          'w-auto origin-[60%_85%] select-none transition-transform duration-500 ease-premium motion-safe:group-hover/logo:-rotate-6 motion-safe:group-hover/logo:-translate-y-px',
          h,
          markClassName,
        )}
      />
      <img src="/logo-wordmark.png" alt="" width={524} height={394} decoding="async" draggable={false} className={cn('w-auto select-none', h)} />
    </Link>
  )
}
