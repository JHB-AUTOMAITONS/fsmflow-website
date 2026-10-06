import { ChevronDown, Mail } from 'lucide-react'
import { Fragment, useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { PageHero } from '@/components/layout/PageHero'
import { Seo } from '@/components/seo/Seo'
import { Bezel } from '@/components/ui/Bezel'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/data/site'
import type { LegalBlock, LegalDoc } from '@/data/legal'
import { cn } from '@/lib/cn'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g

/** Renders [label](/path) as an internal <Link> (or a normal link for mailto:/https:). */
function inline(text: string): ReactNode {
  const out: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0
    if (index > last) out.push(text.slice(last, index))
    const [, label, href] = match
    out.push(
      /^(https?:|mailto:)/.test(href) ? (
        <a key={index} href={href}>
          {label}
        </a>
      ) : (
        <Link key={index} to={href}>
          {label}
        </Link>
      ),
    )
    last = index + match[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out.map((node, i) => <Fragment key={i}>{node}</Fragment>)
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{inline(block.text)}</p>
    case 'h3':
      return <h3>{block.text}</h3>
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{inline(item)}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="mb-5 list-decimal pl-5 marker:font-semibold marker:text-brand-600">
          {block.items.map((item) => (
            <li key={item} className="mb-1.5 pl-1">
              {inline(item)}
            </li>
          ))}
        </ol>
      )
  }
}

/** Highlights the section currently under the sticky header. Runs after mount, so SSR markup is unaffected. */
function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const visible = new Set<string>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const first = ids.find((id) => visible.has(id))
        if (first) setActive(first)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: 0 },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [ids])
  return active
}

function TocList({ doc, active, onNavigate }: { doc: LegalDoc; active: string; onNavigate?: () => void }) {
  // On mobile the list collapses when a link is used. Re-scroll after the collapse so the heading lands under the sticky header.
  const jump = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return
    event.preventDefault()
    onNavigate()
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
    })
  }
  return (
    <ol className="space-y-0.5">
      {doc.sections.map((s, i) => {
        const current = active === s.id
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={jump(s.id)}
              aria-current={current ? 'location' : undefined}
              className={cn(
                'flex min-h-11 items-baseline gap-2.5 lg:min-h-9 rounded-xl px-3 py-1.5 text-[0.9375rem] leading-snug transition-colors duration-300',
                current ? 'bg-brand-50 font-semibold text-brand-700' : 'text-ink-600 hover:bg-ink-900/[0.04] hover:text-ink-900',
              )}
            >
              <span className={cn('w-5 shrink-0 font-mono text-[0.6875rem] font-semibold tabular', current ? 'text-brand-600' : 'text-ink-500')}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{s.title}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

/**
 * Shared layout for the three legal pages: hero with "Last updated", a sticky
 * table of contents on desktop (a collapsible one on mobile), prose body and a
 * closing contact card. No marketing copy.
 */
export function LegalLayout({ doc }: { doc: LegalDoc }) {
  const ids = doc.sections.map((s) => s.id)
  const active = useActiveSection(ids)
  const [tocOpen, setTocOpen] = useState(false)

  return (
    <>
      <Seo
        title={doc.seoTitle}
        description={doc.description}
        path={doc.path}
        jsonLd={[
          webPageSchema({ name: doc.title, description: doc.description, path: doc.path }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: doc.title, path: doc.path },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Legal"
        title={doc.title}
        lead={inline(doc.intro)}
        crumbs={[{ label: 'Home', href: '/' }, { label: doc.title }]}
      >
        <p className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 font-mono text-[0.75rem] font-semibold tracking-wide text-ink-700 shadow-card ring-1 ring-ink-900/[0.07]">
          <span className="size-1.5 rounded-full bg-mint-500" aria-hidden="true" />
          Last updated: {SITE.policyDate}
        </p>
      </PageHero>

      <Section tone="white" spacing="none" className="pt-2 pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
            <aside aria-label="Table of contents" className="lg:sticky lg:top-28 lg:self-start">
              {/* Mobile: collapsible */}
              <div className="rounded-2xl bg-mist ring-1 ring-ink-900/[0.06] lg:hidden">
                <button
                  type="button"
                  aria-expanded={tocOpen}
                  aria-controls="legal-toc-mobile"
                  onClick={() => setTocOpen((v) => !v)}
                  className="flex min-h-12 w-full items-center justify-between gap-3 px-4 text-left text-[0.9375rem] font-semibold text-ink-900"
                >
                  On this page
                  <ChevronDown className={cn('size-4 transition-transform duration-500 ease-premium', tocOpen && 'rotate-180')} aria-hidden="true" />
                </button>
                <nav id="legal-toc-mobile" aria-label="On this page" hidden={!tocOpen} className="px-2 pb-3">
                  <TocList doc={doc} active={active} onNavigate={() => setTocOpen(false)} />
                </nav>
              </div>

              {/* Desktop: sticky */}
              <nav aria-label="On this page" className="hidden lg:block">
                <p className="eyebrow-mono mb-3 px-3 text-ink-500">On this page</p>
                <div className="max-h-[calc(100vh-9rem)] overflow-y-auto pr-1">
                  <TocList doc={doc} active={active} />
                </div>
              </nav>
            </aside>

            <div className="max-w-[46rem]">
              <article className="prose-fsm">
                {doc.sections.map((section, i) => (
                  <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                    <h2 id={`${section.id}-title`} className={cn(i === 0 && 'mt-0!')}>
                      <span className="mr-2 font-mono text-[0.95rem] font-semibold text-brand-600 tabular">{i + 1}.</span>
                      {section.title}
                    </h2>
                    {section.blocks.map((block, j) => (
                      <Block key={j} block={block} />
                    ))}
                  </section>
                ))}
              </article>

              <Bezel className="mt-14" coreClassName="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="font-display text-xl font-semibold tracking-[-0.02em] text-ink-900">Questions about this policy?</p>
                  <p className="mt-1.5 text-[0.9375rem] leading-snug text-ink-600">
                    Write to us at{' '}
                    <a
                      href={`mailto:${SITE.contact.email}`}
                      className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600"
                    >
                      {SITE.contact.email}
                    </a>{' '}
                    or use our contact page.
                  </p>
                </div>
                <ButtonLink href="/contact" variant="secondary" arrow={false} className="shrink-0 gap-2">
                  <Mail className="size-4" aria-hidden="true" />
                  Contact us
                </ButtonLink>
              </Bezel>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
