import { useRef, type ComponentPropsWithoutRef, type CSSProperties, type ElementType } from 'react'
import { useOnView } from '@/hooks/useOnView'
import { cn } from '@/lib/cn'

type Variant = 'up' | 'scale' | 'left' | 'right'

type Props<T extends ElementType> = {
  as?: T
  /** Stagger delay in ms. */
  delay?: number
  variant?: Variant
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

/**
 * Scroll-triggered entrance. Pure class toggling (see .reveal in styles/index.css) —
 * identical markup on server and client, transform/opacity only, and a no-op under
 * prefers-reduced-motion. Don't use it for above-the-fold hero content (use .hero-in).
 */
export function Reveal<T extends ElementType = 'div'>({ as, delay = 0, variant = 'up', className, style, ...rest }: Props<T>) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  useOnView(ref, () => ref.current?.classList.add('is-in'))
  return (
    <Tag
      ref={ref}
      className={cn(
        'reveal',
        variant === 'scale' && 'reveal-scale',
        variant === 'left' && 'reveal-left',
        variant === 'right' && 'reveal-right',
        className,
      )}
      style={{ ...(style as CSSProperties), '--d': `${delay}ms` } as CSSProperties}
      {...rest}
    />
  )
}
