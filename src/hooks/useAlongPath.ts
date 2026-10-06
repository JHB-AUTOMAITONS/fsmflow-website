import { useEffect, type RefObject } from 'react'
import { prefersReducedMotion } from '@/lib/observer'

interface Options {
  /** Milliseconds for one full trip along the path. */
  duration?: number
  /** 0–1 starting position (also the resting position under reduced motion). */
  start?: number
  /** Rotate the element to follow the path direction. */
  rotate?: boolean
  /** Ping-pong instead of restarting from the beginning. */
  pingPong?: boolean
}

/**
 * Moves an SVG element (<g>, <circle>…) along an SVG <path> using rAF, setting
 * its `transform` attribute. Because it works in SVG user units it scales with
 * the viewBox. Pauses while off-screen and holds still under reduced motion.
 *
 * Render the target with `visibility="hidden"`; the hook reveals it once it has
 * been positioned (SSR can't measure the path).
 */
export function useAlongPath(
  pathRef: RefObject<SVGPathElement | null>,
  targetRef: RefObject<SVGElement | null>,
  { duration = 9000, start = 0, rotate = false, pingPong = false }: Options = {},
) {
  useEffect(() => {
    const path = pathRef.current
    const target = targetRef.current
    if (!path || !target || typeof path.getTotalLength !== 'function') return

    const total = path.getTotalLength()
    const place = (t: number) => {
      const p = path.getPointAtLength(t * total)
      let angle = 0
      if (rotate) {
        const q = path.getPointAtLength(Math.min(total, t * total + 1))
        angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI
      }
      target.setAttribute('transform', `translate(${p.x.toFixed(2)} ${p.y.toFixed(2)})${rotate ? ` rotate(${angle.toFixed(1)})` : ''}`)
    }

    place(start)
    // Targets are server-rendered with visibility="hidden" so they never flash at (0,0).
    target.removeAttribute('visibility')
    if (prefersReducedMotion()) return

    let raf = 0
    let visible = false
    let last = 0
    let progress = start
    let dir = 1

    const tick = (now: number) => {
      if (!visible) return
      const dt = last ? now - last : 0
      last = now
      progress += (dt / duration) * dir
      if (pingPong) {
        if (progress >= 1) {
          progress = 1
          dir = -1
        } else if (progress <= 0) {
          progress = 0
          dir = 1
        }
      } else if (progress >= 1) {
        progress -= 1
      }
      place(progress)
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) {
        last = 0
        raf = requestAnimationFrame(tick)
      } else {
        cancelAnimationFrame(raf)
      }
    })
    io.observe(path.ownerSVGElement ?? path)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [pathRef, targetRef, duration, start, rotate, pingPong])
}
