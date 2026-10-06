import { ChevronDown } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { NavLink, useLocation } from 'react-router'
import { Logo } from '@/components/brand/Logo'
import { ButtonLink } from '@/components/ui/Button'
import { HEADER_CTA, PRIMARY_NAV } from '@/data/nav'
import { cn } from '@/lib/cn'
import { FeaturesMenu, MegaPanel, SolutionsMenu } from './MegaMenus'
import { MobileMenu } from './MobileMenu'

type MenuId = 'solutions' | 'features'

/**
 * Sticky, floating header. Desktop: Home | Solutions ▼ | Features ▼ | Pricing | Blog + Book a Demo.
 * There is intentionally no Login link in the public header (FSM.docx, section 2).
 */
export function Header({ scrolled }: { scrolled: boolean }) {
  const { pathname } = useLocation()
  const uid = useId()
  const [open, setOpen] = useState<MenuId | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggers = useRef<Partial<Record<MenuId, HTMLButtonElement | null>>>({})

  const closeAll = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    setOpen(null)
    setMobileOpen(false)
  }, [])

  // Close everything when the route changes.
  useEffect(() => {
    closeAll()
  }, [pathname, closeAll])

  // Escape closes the open menu and returns focus to its trigger.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggers.current[open]?.focus()
        setOpen(null)
      }
    }
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const hoverOpen = (id: MenuId) => (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(closeTimer.current)
    setOpen(id)
  }
  const hoverClose = (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(null), 160)
  }

  const sectionActive = (id: MenuId) => pathname.startsWith(`/${id}/`)

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div
        ref={rootRef}
        className="relative mx-auto max-w-[1240px]"
        onPointerLeave={hoverClose}
        onPointerEnter={(e) => e.pointerType === 'mouse' && window.clearTimeout(closeTimer.current)}
        onBlur={(e) => {
          if (open && !e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null)
        }}
      >
        <div
          className={cn(
            'flex h-[62px] items-center justify-between gap-4 rounded-[22px] border bg-white/80 pr-2.5 pl-4 backdrop-blur-xl transition-[box-shadow,border-color,background-color] duration-500 ease-premium md:h-[66px] md:pl-5',
            scrolled || open || mobileOpen
              ? 'border-ink-900/[0.08] bg-white/90 shadow-pop'
              : 'border-ink-900/[0.05] shadow-card',
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {PRIMARY_NAV.map((item) => {
                if (item.kind === 'link') {
                  return (
                    <li key={item.label}>
                      <NavLink
                        to={item.href}
                        end={item.href === '/'}
                        className={({ isActive }) =>
                          cn(
                            'relative inline-flex items-center rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-300',
                            isActive ? 'text-brand-700' : 'text-ink-700 hover:bg-ink-900/[0.04] hover:text-ink-900',
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {item.label}
                            {isActive && (
                              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" aria-hidden="true" />
                            )}
                          </>
                        )}
                      </NavLink>
                    </li>
                  )
                }
                const id = item.menu
                const isOpen = open === id
                return (
                  <li key={item.label} onPointerEnter={hoverOpen(id)}>
                    <button
                      ref={(el) => {
                        triggers.current[id] = el
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${uid}-${id}`}
                      onClick={() => setOpen(isOpen ? null : id)}
                      className={cn(
                        'relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-300',
                        isOpen || sectionActive(id) ? 'text-brand-700' : 'text-ink-700 hover:text-ink-900',
                        isOpen && 'bg-brand-50',
                        !isOpen && 'hover:bg-ink-900/[0.04]',
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn('size-4 transition-transform duration-500 ease-premium', isOpen && 'rotate-180')}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      {sectionActive(id) && !isOpen && (
                        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" aria-hidden="true" />
                      )}
                    </button>
                    {/* The panel follows its trigger in the DOM so Tab flows straight into the open menu. */}
                    <MegaPanel id={`${uid}-${id}`} label={item.label} open={isOpen}>
                      {id === 'solutions' ? <SolutionsMenu onNavigate={closeAll} /> : <FeaturesMenu onNavigate={closeAll} />}
                    </MegaPanel>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={HEADER_CTA.href} size="md" className="hidden sm:inline-flex">
              {HEADER_CTA.label}
            </ButtonLink>
            <button
              type="button"
              className="relative flex size-11 items-center justify-center rounded-2xl text-ink-900 transition-colors hover:bg-ink-900/[0.05] lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls={`${uid}-mobile`}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-[22px]" aria-hidden="true">
                <span
                  className={cn(
                    'absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-500 ease-premium',
                    mobileOpen ? 'top-1.5 rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute top-1.5 left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-premium',
                    mobileOpen ? 'scale-x-0 opacity-0' : 'opacity-100',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-500 ease-premium',
                    mobileOpen ? 'top-1.5 -rotate-45' : 'top-3',
                  )}
                />
              </span>
            </button>
          </div>
        </div>

      </div>

      <MobileMenu id={`${uid}-mobile`} open={mobileOpen} onClose={closeAll} />
    </header>
  )
}

/** Skip link for keyboard users. */
export function SkipLink() {
  return (
    <a
      href="#main"
      onClick={(e) => {
        e.preventDefault()
        const main = document.getElementById('main')
        main?.focus()
        main?.scrollIntoView()
      }}
      className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  )
}
