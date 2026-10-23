import { ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { NotFoundView } from '@/components/layout/NotFoundView'
import { PageHero } from '@/components/layout/PageHero'
import { WorkOrderVisual } from '@/components/product/feature-visuals/WorkOrderVisual'
import { SectionTitle } from '@/components/sections/solutions/SectionTitle'
import { StageFlow } from '@/components/sections/solutions/StageFlow'
import { Seo } from '@/components/seo/Seo'
import { Bezel } from '@/components/ui/Bezel'
import { ButtonLink } from '@/components/ui/Button'
import { CheckList } from '@/components/ui/CheckList'
import { Container } from '@/components/ui/Container'
import { CtaBand } from '@/components/ui/CtaBand'
import { FaqList } from '@/components/ui/Faq'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { getPublishedPost } from '@/data/blog'
import { COUNTRIES, getCountryByPath } from '@/data/countries'
import { COUNTRY_PAGES } from '@/data/countryPages'
import { getFeature } from '@/data/features'
import { getSolution } from '@/data/solutions'
import { cn } from '@/lib/cn'
import { breadcrumbSchema, faqSchema, softwareSchema, webPageSchema } from '@/lib/schema'

/**
 * Country landing pages (Malaysia, Sri Lanka, Singapore, South Africa, Nigeria). The country comes
 * from the URL; SEO fields are in `countries.ts` and the unique copy in `countryPages.ts`.
 */
export default function CountryPage() {
  const { pathname } = useLocation()
  const country = getCountryByPath(pathname)
  const content = country ? COUNTRY_PAGES[country.slug] : undefined
  if (!country || !content) return <NotFoundView />

  const posts = content.posts.flatMap((p) => {
    const post = getPublishedPost(p.slug)
    return post ? [{ href: `/blog/${post.slug}`, label: p.label }] : []
  })
  const others = COUNTRIES.filter((c) => c.slug !== country.slug)

  return (
    <>
      <Seo
        title={country.seoTitle}
        description={country.seoDescription}
        path={country.path}
        jsonLd={[
          webPageSchema({ name: country.h1, description: country.seoDescription, path: country.path }),
          softwareSchema({ name: `${country.h1} — FSMFlow`, description: country.seoDescription, path: country.path }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: country.h1, path: country.path },
          ]),
          faqSchema(content.faqs),
        ]}
      />

      {/* 1. Hero */}
      <PageHero
        id="country-heading"
        eyebrow={content.eyebrow}
        title={country.h1}
        lead={content.lead}
        crumbs={[{ label: 'Home', href: '/' }, { label: country.h1 }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/demo" size="lg">
            Book a Demo
          </ButtonLink>
          <ButtonLink href="#how-it-helps" size="lg" variant="secondary" arrow={false}>
            See how it helps
          </ButtonLink>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink-900/[0.08] pt-6">
          {content.heroPoints.map((p) => (
            <li key={p} className="text-[0.9375rem] font-medium text-ink-700">
              {p}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* 2. Challenges */}
      <Section tone="mist" aria-labelledby="challenges-heading">
        <Container>
          <Reveal>
            <SectionTitle id="challenges-heading" accent="brand" eyebrow="Common challenges" title={content.challenges.title} lead={content.challenges.lead} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {content.challenges.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <Bezel className="h-full" coreClassName="flex h-full gap-4 p-5 md:p-6">
                  <IconTile icon={item.icon} tone="brand" size="lg" />
                  <div>
                    <h3 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{item.text}</p>
                  </div>
                </Bezel>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. How FSMFlow helps */}
      <Section id="how-it-helps" tone="white" aria-labelledby="help-heading">
        <Container>
          <Reveal>
            <SectionTitle id="help-heading" accent="brand" eyebrow="How FSMFlow helps" title={content.help.title} lead={content.help.lead} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {content.help.items.map((item, i) => {
              const n = content.help.items.length
              const feature = getFeature(item.feature)
              if (!feature) return null
              return (
                <Reveal
                  key={item.title}
                  delay={i * 60}
                  className={cn(
                    n % 2 === 1 && i === n - 1 && 'md:col-span-2',
                    n % 3 === 2 && i >= n - 2 ? 'lg:col-span-3' : 'lg:col-span-2',
                  )}
                >
                  <Bezel className="h-full" coreClassName="flex h-full flex-col p-5 md:p-6">
                    <IconTile icon={feature.icon} tone="brand" size="lg" />
                    <h3 className="mt-5 text-[1.125rem] font-semibold tracking-[-0.02em] text-ink-900">{item.title}</h3>
                    <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">{item.text}</p>
                    <Link to={feature.path} className="-mb-2 mt-3 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-600 hover:text-brand-800">
                      Explore {item.linkLabel}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Bezel>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* 4. Industries */}
      <Section tone="mist" aria-labelledby="industries-heading">
        <Container>
          <Reveal>
            <SectionTitle id="industries-heading" accent="brand" eyebrow="Industries supported" title={content.industries.title} lead={content.industries.lead} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {content.industries.items.map((item, i) => {
              const solution = getSolution(item.solution)
              if (!solution) return null
              return (
                <Reveal key={item.solution} delay={i * 60}>
                  <Link to={solution.path} className="group/ind block h-full rounded-[28px]">
                    <Bezel interactive className="h-full" coreClassName="flex h-full gap-4 p-5 md:p-6">
                      <IconTile icon={solution.icon} tone="brand" size="lg" />
                      <div>
                        <h3 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-ink-900 group-hover/ind:text-brand-700">{solution.h1}</h3>
                        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{item.text}</p>
                      </div>
                    </Bezel>
                  </Link>
                </Reveal>
              )
            })}
          </div>
          <p className="mt-8 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-600">
            {content.industries.other}{' '}
            <Link to="/solutions/service-business-management-software" className="font-semibold text-brand-600 hover:text-brand-800">
              See service business management software
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* 5. Benefits */}
      <Section tone="white" aria-labelledby="benefits-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal>
              <SectionTitle id="benefits-heading" accent="brand" eyebrow="Business benefits" title={content.benefits.title} lead={content.benefits.lead} />
            </Reveal>
            <Reveal delay={100}>
              <ul className="divide-y divide-ink-900/[0.08] rounded-[28px] bg-white ring-1 ring-ink-900/[0.07] shadow-card">
                {content.benefits.items.map((b) => (
                  <li key={b.title} className="p-5 md:p-6">
                    <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-900">{b.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-600">{b.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6. Product features and workflow */}
      <Section tone="mist" aria-labelledby="workflow-heading">
        <Container>
          <Reveal>
            <SectionTitle id="workflow-heading" accent="brand" eyebrow="Workflow" title={content.workflow.title} lead={content.workflow.lead} />
          </Reveal>
          <StageFlow className="mt-14" stages={content.workflow.stages} variant="line" nodes="icon" accent="brand" />
          <Reveal className="mx-auto mt-14 max-w-4xl">
            <WorkOrderVisual neutral />
            <p className="mt-4 text-center text-[11px] text-ink-500">Illustrative product visual · sample data</p>
          </Reveal>
        </Container>
      </Section>

      {/* 7. FAQs */}
      <Section tone="white" aria-labelledby="country-faq-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <Reveal>
              <SectionTitle
                id="country-faq-heading"
                accent="brand"
                eyebrow="FAQ"
                title={`Questions from service teams in ${country.name}`}
                lead="Short answers about what FSMFlow does. Anything country-specific is best confirmed in a demo."
              />
              <p className="eyebrow-mono mt-10 text-ink-500">Related reading</p>
              <CheckList
                className="mt-4"
                items={[
                  ...posts.map((p) => (
                    <Link key={p.href} to={p.href} className="font-semibold text-brand-600 hover:text-brand-800">
                      {p.label}
                    </Link>
                  )),
                ]}
              />
            </Reveal>
            <Reveal delay={100}>
              <FaqList items={content.faqs} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="mist" spacing="tight" aria-labelledby="other-countries-heading">
        <Container>
          <h2 id="other-countries-heading" className="text-h3 font-semibold text-ink-900">
            Field service software for other countries
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {others.map((c) => (
              <li key={c.slug}>
                <Link to={c.path} className="font-semibold text-brand-600 hover:text-brand-800">
                  FSMFlow in {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/" className="font-semibold text-brand-600 hover:text-brand-800">
                Field service management software overview
              </Link>
            </li>
          </ul>
        </Container>
      </Section>

      {/* 8. Final CTA */}
      <CtaBand title={content.cta.title} text={content.cta.text} note={content.cta.note} secondary={{ label: 'See pricing', href: '/pricing' }} />
    </>
  )
}
