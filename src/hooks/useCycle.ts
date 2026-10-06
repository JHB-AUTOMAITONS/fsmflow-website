import { useEffect, useRef, useState, type RefObject } from 'react'
import { observe, prefersReducedMotion } from '@/lib/observer'

/**
 * Steps through `values` on an interval, but only while `ref` is on screen and
 * the visitor hasn't asked for reduced motion. The first render always returns
 * `initial` so server and client markup match.
 */
export function useCycle<T>(ref: RefObject<Element | null>, values: readonly T[], intervalMs: number, initial: T): T {
  const [value, setValue] = useState<T>(initial)
  const index = useRef(Math.max(0, values.indexOf(initial)))

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    let timer = 0
    const stopObserving = observe(
      el,
      (entry) => {
        window.clearInterval(timer)
        if (entry.isIntersecting) {
          timer = window.setInterval(() => {
            index.current = (index.current + 1) % values.length
            setValue(values[index.current])
          }, intervalMs)
        }
      },
      { threshold: 0.3 },
    )
    return () => {
      window.clearInterval(timer)
      stopObserving()
    }
  }, [ref, values, intervalMs])

  return value
}
