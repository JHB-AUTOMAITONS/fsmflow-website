import { Compass } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { ButtonLink, TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { HVAC_SOLUTION } from '@/data/solutions'

/**
 * Shared "page not found" content. Used by the catch-all route and by the
 * data-driven pages (/solutions/:slug, /features/:slug, /blog/:slug) when the
 * slug is unknown, so the prerendered 404.html hydrates cleanly on any URL.
 */
export function NotFoundView() {
  return (
    <>
      <Seo
        title="Page not found | FSMFlow"
        description="The page you’re looking for doesn’t exist. Explore FSMFlow field service management software or book a demo."
        path="/404"
        noindex
      />
      <section aria-labelledby="nf-heading" className="py-24 md:py-36">
        <Container size="narrow" className="flex flex-col items-center text-center">
          <span className="flex size-16 items-center justify-center rounded-[22px] bg-brand-50 text-brand-600 ring-1 ring-brand-100">
            <Compass className="size-7" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <Eyebrow className="mt-8">Error 404</Eyebrow>
          <h1 id="nf-heading" className="text-h1 mt-5 font-semibold">
            Page not found
          </h1>
          <p className="text-lead mt-5 max-w-lg text-ink-600">
            That link may be old or mistyped. Head back to the homepage, or see how FSMFlow runs HVAC and field service operations.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg">
              Back to home
            </ButtonLink>
            <ButtonLink href="/demo" size="lg" variant="secondary" arrow={false}>
              Book a Demo
            </ButtonLink>
          </div>
          <p className="mt-10 text-sm text-ink-500">
            Looking for <TextLink href={HVAC_SOLUTION.path}>{HVAC_SOLUTION.primaryKeyword}</TextLink>?
          </p>
        </Container>
      </section>
    </>
  )
}
