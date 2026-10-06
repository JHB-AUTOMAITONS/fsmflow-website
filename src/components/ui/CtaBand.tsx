import type { ReactNode } from 'react'
import { FlowBackdrop } from '@/components/brand/FlowBackdrop'
import { cn } from '@/lib/cn'
import { Container } from './Container'
import { ButtonLink } from './Button'
import { Reveal } from './Reveal'

interface Props {
  title: ReactNode
  text?: ReactNode
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  /** Small supporting line under the buttons, e.g. what happens in the demo. */
  note?: ReactNode
  className?: string
  id?: string
}

/** The closing call to action used at the bottom of every marketing page. */
export function CtaBand({
  title,
  text,
  primary = { label: 'Book a Demo', href: '/demo' },
  secondary,
  note,
  className,
  id = 'cta-heading',
}: Props) {
  return (
    <section aria-labelledby={id} className={cn('relative py-16 md:py-24', className)}>
      <Container>
        <Reveal
          variant="scale"
          className="relative isolate overflow-hidden rounded-[32px] bg-brand-gradient px-6 py-14 text-white shadow-lift md:rounded-[44px] md:px-16 md:py-20"
        >
          <div className="absolute inset-0 -z-10 bg-dots-brand opacity-30 mask-fade-edges" aria-hidden="true" />
          <FlowBackdrop variant="cta" className="-z-10" />
          <div className="pointer-events-none absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-aqua-300/30 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 id={id} className="text-h2 font-semibold text-white">
              {title}
            </h2>
            {text && <p className="text-lead mt-5 max-w-2xl text-white/85">{text}</p>}
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={primary.href} variant="onBrand" size="lg">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="onBrandOutline" size="lg" arrow={false}>
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
            {note && <p className="mt-6 text-sm text-white/75">{note}</p>}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
