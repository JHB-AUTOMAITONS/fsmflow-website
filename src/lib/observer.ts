/**
 * Shared IntersectionObserver pool. A page can contain hundreds of reveal
 * targets; one observer per (rootMargin, threshold) keeps that cheap.
 */
type Callback = (entry: IntersectionObserverEntry) => void

const observers = new Map<string, { io: IntersectionObserver; callbacks: WeakMap<Element, Callback> }>()

function getPool(rootMargin: string, threshold: number) {
  const key = `${rootMargin}|${threshold}`
  let pool = observers.get(key)
  if (!pool) {
    const callbacks = new WeakMap<Element, Callback>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) callbacks.get(entry.target)?.(entry)
      },
      { rootMargin, threshold },
    )
    pool = { io, callbacks }
    observers.set(key, pool)
  }
  return pool
}

export function observe(
  el: Element,
  cb: Callback,
  opts: { rootMargin?: string; threshold?: number } = {},
): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    // Very old browsers: treat everything as visible.
    cb({ isIntersecting: true, target: el } as IntersectionObserverEntry)
    return () => {}
  }
  const { io, callbacks } = getPool(opts.rootMargin ?? '0px 0px -8% 0px', opts.threshold ?? 0.12)
  callbacks.set(el, cb)
  io.observe(el)
  return () => {
    callbacks.delete(el)
    io.unobserve(el)
  }
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
