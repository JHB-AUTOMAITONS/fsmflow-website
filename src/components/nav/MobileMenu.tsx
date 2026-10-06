import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router'
import { ButtonLink } from '@/components/ui/Button'
import { IconTile } from '@/components/ui/IconTile'
import { FEATURES } from '@/data/features'
import { HEADER_CTA } from '@/data/nav'
import { SOLUTIONS } from '@/data/solutions'
import { cn } from '@/lib/cn'

interface Props {
  id: string
  open: boolean
  onClose: () => void
}

const stagger = (i: number): CSSProperties => ({ '--i': i }) as CSSProperties

/**
 * Full-screen mobile navigation. Always rendered (links stay crawlable); hidden
 * with visibility + `inert` while closed. Items rise in with a staggered delay.
 */
export function MobileMenu({ id, open, onClose }: Props) {
  const [section, setSection] = useState<'solutions' | 'features' | null>('solutions')
  const panelRef = useRef<HTMLDivElement>(null)

  // Lock page scroll while open; close on Escape.
  useEffect(() => {
    if (!open) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  // If the viewport grows past the mobile breakpoint, make sure the overlay closes.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && onClose()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [onClose])

  const item = cn(
    'translate-y-6 opacity-0 transition-[opacity,transform] duration-700 ease-premium [transition-delay:calc(var(--i)*55ms+120ms)]',
    open && 'translate-y-0 opacity-100',
  )

  return (
    <div
      id={id}
      ref={panelRef}
      inert={!open}
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 -z-10 overflow-y-auto bg-white/95 pt-[88px] backdrop-blur-2xl transition-[opacity,visibility] duration-500 ease-premium lg:hidden',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-xl flex-col px-5 pt-4 pb-10">
        <ul className="divide-y divide-ink-900/[0.07]">
          <li className={item} style={stagger(0)}>
            <Link to="/" onClick={onClose} className="flex items-center py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-900">
              Home
            </Link>
          </li>

          {([
            { key: 'solutions', label: 'Solutions', i: 1 },
            { key: 'features', label: 'Features', i: 2 },
          ] as const).map(({ key, label, i }) => {
            const expanded = section === key
            const links = key === 'solutions' ? SOLUTIONS : FEATURES
            return (
              <li key={key} className={item} style={stagger(i)}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${id}-${key}`}
                  onClick={() => setSection(expanded ? null : key)}
                  className="flex w-full items-center justify-between py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-900"
                >
                  {label}
                  <ChevronDown
                    className={cn('size-5 text-ink-500 transition-transform duration-500 ease-premium', expanded && 'rotate-180 text-brand-600')}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`${id}-${key}`}
                  inert={!expanded}
                  className={cn('grid transition-[grid-template-rows] duration-500 ease-premium', expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                >
                  <ul className="overflow-hidden">
                    {links.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={l.path}
                          onClick={onClose}
                          className="flex items-center gap-3 rounded-2xl px-1 py-2.5 active:bg-brand-50"
                        >
                          <IconTile icon={l.icon} size="sm" />
                          <span className="text-[1.0625rem] font-medium text-ink-800">{key === 'solutions' ? l.h1 : (l as (typeof FEATURES)[number]).navLabel}</span>
                        </Link>
                      </li>
                    ))}
                    <li className="h-3" aria-hidden="true" />
                  </ul>
                </div>
              </li>
            )
          })}

          <li className={item} style={stagger(3)}>
            <Link to="/pricing" onClick={onClose} className="flex items-center py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-900">
              Pricing
            </Link>
          </li>
          <li className={item} style={stagger(4)}>
            <Link to="/blog" onClick={onClose} className="flex items-center py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-ink-900">
              Blog
            </Link>
          </li>
        </ul>

        <div className={cn('mt-auto pt-8', item)} style={stagger(5)}>
          <ButtonLink href={HEADER_CTA.href} size="lg" className="w-full justify-between" onClick={onClose}>
            {HEADER_CTA.label}
          </ButtonLink>
          <p className="mt-4 text-center text-sm text-ink-500">See FSMFlow run your HVAC and field service operations.</p>
        </div>
      </nav>
    </div>
  )
}
