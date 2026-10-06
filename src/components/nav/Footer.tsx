import { Link } from 'react-router'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { Logo } from '@/components/brand/Logo'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { BUILD_YEAR, SITE } from '@/data/site'
import { FOOTER_COLUMNS } from '@/data/nav'

/** Footer structure follows FSM.docx section 5 exactly. */
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-ink-900/[0.07] bg-mist">
      <div className="absolute inset-0 -z-10 bg-dots opacity-40 mask-fade-b" aria-hidden="true" />
      <FlowBackdrop variant="footer" className="-z-10 top-auto bottom-0 h-64 opacity-70" />

      <Container className="pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-600">{SITE.tagline}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-500">
              Field service management software for HVAC, CCTV, solar, construction and other service businesses in India.
            </p>
            <ButtonLink href="/demo" size="md" className="mt-7">
              Book a Demo
            </ButtonLink>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8 lg:pl-8">
            {FOOTER_COLUMNS.map((col) => {
              const labelId = `footer-${col.title.toLowerCase()}`
              return (
                <nav key={col.title} aria-labelledby={labelId}>
                  <p id={labelId} className="eyebrow-mono text-ink-500">
                    {col.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          to={link.href}
                          className="inline-block text-[0.9375rem] text-ink-700 transition-[color,transform] duration-300 ease-premium hover:translate-x-0.5 hover:text-brand-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-900/[0.08] pt-6 text-sm text-ink-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {BUILD_YEAR} {SITE.name}.in — all rights reserved.
          </p>
          <p>Built for Indian service businesses.</p>
        </div>
      </Container>

      <div
        className="pointer-events-none -mt-6 -mb-[0.22em] select-none text-center font-display text-[clamp(5.5rem,21vw,19rem)] leading-none font-bold tracking-[-0.06em] text-ink-900/[0.045]"
        aria-hidden="true"
      >
        FSMFlow
      </div>
    </footer>
  )
}
