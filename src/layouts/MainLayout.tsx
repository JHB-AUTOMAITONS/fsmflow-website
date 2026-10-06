import { Suspense, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router'
import { Footer } from '@/components/nav/Footer'
import { AmbientMotion } from '@/components/ui/AmbientMotion'
import { Header, SkipLink } from '@/components/nav/Header'
import { useOnView } from '@/hooks/useOnView'

/**
 * Shell shared by every page: skip link, sticky header, <main>, footer.
 * Handles scroll reset and a polite route announcement for screen readers.
 */
export function MainLayout() {
  const { pathname } = useLocation()
  const navType = useNavigationType()
  const [scrolled, setScrolled] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const sentinel = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)

  // A 1px sentinel at the top of the page tells us when the header should gain its shadow
  // (IntersectionObserver instead of a scroll listener).
  useOnView(sentinel, () => setScrolled(false), () => setScrolled(true), { once: false, rootMargin: '0px', threshold: 0 })

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    // Back/forward keeps the browser's own scroll restoration.
    if (navType !== 'POP' && !window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const t = window.setTimeout(() => setAnnouncement(document.title), 150)
    return () => window.clearTimeout(t)
  }, [pathname, navType])

  return (
    <div className="relative isolate">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-linear-to-b from-wash via-wash/40 to-white"
        aria-hidden="true"
      />
      <SkipLink />
      <div ref={sentinel} className="pointer-events-none absolute top-0 left-0 h-px w-px" aria-hidden="true" />
      <Header scrolled={scrolled} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <AmbientMotion />
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
    </div>
  )
}
