import { MessageCircleQuestion } from 'lucide-react'
import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { FaqList } from '@/components/ui/Faq'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Faq } from '@/lib/schema'

/** 3–4 real questions in an accessible accordion; the page also emits FAQPage JSON-LD for the same items. */
export function FaqSection({ faqs, tone }: { faqs: Faq[]; tone: 'white' | 'mist' }) {
  return (
    <Section tone={tone} aria-labelledby="faq-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading eyebrow="FAQ" title="Common questions" lead="Straight answers before you book a demo." id="faq-heading" />
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink-900/[0.07]">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <MessageCircleQuestion className="size-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <p className="text-[0.9375rem] leading-snug text-ink-600">
                  Something else on your mind?{' '}
                  <Link to="/contact" className="inline-flex min-h-11 items-center font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600">
                    Ask us
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
