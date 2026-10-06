import { useEffect } from 'react'

/**
 * Pauses the endlessly-repeating CSS animations inside page sections that are scrolled out of view.
 *
 * The site has a lot of ambient motion (flowing airflow lines, pulsing status dots, a spinning fan…).
 * Browsers still tick main-thread animations for off-screen elements, which profiling showed to be
 * the biggest source of main-thread work on a phone (about 6.5 s → 4.3 s of native work at 4× CPU
 * throttle). A section only needs to animate while it can be seen.
 *
 * Uses the Web Animations API rather than an attribute or class, so React-managed DOM is never
 * modified (no hydration mismatches). Only animations that were `running` and `iterations: Infinity`
 * are paused, and only those are resumed — one-shot entrance animations are never replayed.
 */
export function AmbientMotion() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || typeof Element.prototype.getAnimations !== 'function') return

    const paused = new WeakSet<Animation>()
    const apply = (el: Element, visible: boolean) => {
      for (const a of el.getAnimations({ subtree: true })) {
        if (visible) {
          if (paused.has(a)) {
            paused.delete(a)
            a.play()
          }
        } else if (a.playState === 'running' && a.effect?.getComputedTiming().iterations === Infinity) {
          paused.add(a)
          a.pause()
        }
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) apply(e.target, e.isIntersecting)
      },
      { rootMargin: '120px 0px 120px 0px' },
    )

    const seen = new WeakSet<Element>()
    const scan = () => {
      document.querySelectorAll('main section, footer').forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el)
          io.observe(el)
        }
      })
    }
    scan()

    // Sections that mount later (client-side navigation to a lazy route).
    let frame = 0
    const mo = new MutationObserver(() => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        scan()
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      mo.disconnect()
    }
  }, [])
  return null
}
