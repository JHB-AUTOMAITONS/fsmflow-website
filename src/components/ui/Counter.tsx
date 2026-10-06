import { useRef } from 'react'
import { useOnView } from '@/hooks/useOnView'
import { prefersReducedMotion } from '@/lib/observer'
import { cn } from '@/lib/cn'

interface Props {
  to: number
  from?: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  /** Custom formatter (e.g. inr). Overrides decimals/prefix/suffix. */
  format?: (n: number) => string
  className?: string
}

/**
 * Counts up when scrolled into view. Server HTML and first client render show
 * the final value (good for SEO / no-JS); the animation then rewrites the text
 * node directly, so React state is never involved.
 */
export function Counter({ to, from = 0, duration = 1500, decimals = 0, prefix = '', suffix = '', format, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const fmt = (n: number) => (format ? format(n) : `${prefix}${n.toFixed(decimals)}${suffix}`)

  useOnView(ref, () => {
    const el = ref.current
    const node = el?.firstChild
    if (!el || !node || prefersReducedMotion()) return
    const t0 = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      node.nodeValue = fmt(from + (to - from) * eased)
      if (p < 1) requestAnimationFrame(step)
    }
    node.nodeValue = fmt(from)
    requestAnimationFrame(step)
  })

  return (
    <span ref={ref} className={cn('tabular', className)}>
      {fmt(to)}
    </span>
  )
}
