import { useEffect, useRef, type RefObject } from 'react'
import { observe } from '@/lib/observer'

interface Options {
  rootMargin?: string
  threshold?: number
  /** Stop observing after the first time the element is seen. Default true. */
  once?: boolean
}

/**
 * Calls `onEnter` when the referenced element scrolls into view (and `onLeave`
 * when it leaves, if `once` is false). Does not hold React state, so it can't
 * cause re-renders or hydration mismatches.
 */
export function useOnView<T extends Element>(
  ref: RefObject<T | null>,
  onEnter: () => void,
  onLeave?: () => void,
  { rootMargin, threshold, once = true }: Options = {},
) {
  // "Latest callback" refs, updated in an effect (never during render).
  const enter = useRef(onEnter)
  const leave = useRef(onLeave)
  useEffect(() => {
    enter.current = onEnter
    leave.current = onLeave
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let stop = () => {}
    stop = observe(
      el,
      (entry) => {
        if (entry.isIntersecting) {
          enter.current()
          if (once) stop()
        } else {
          leave.current?.()
        }
      },
      { rootMargin, threshold },
    )
    return () => stop()
  }, [ref, rootMargin, threshold, once])
}
