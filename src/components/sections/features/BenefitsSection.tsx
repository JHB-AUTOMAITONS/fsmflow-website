import { Bezel } from '@/components/ui/Bezel'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Benefit, FeaturePageContent } from '@/data/featurePages'
import { cn } from '@/lib/cn'

/** Small UI-style chip echoing the product: icon, label and a sample value. */
function BenefitChip({ chip, className }: { chip: Benefit['chip']; className?: string }) {
  return (
    <div className={cn('inline-flex max-w-full items-center gap-3 rounded-2xl bg-white py-2.5 pr-4 pl-2.5 shadow-card ring-1 ring-ink-900/[0.07]', className)} aria-hidden="true">
      <IconTile icon={chip.icon} tone={chip.tone} size="sm" />
      <div className="min-w-0">
        <p className="text-[10.5px] leading-tight font-medium text-ink-500">{chip.label}</p>
        <p className="mt-0.5 text-[0.8125rem] leading-snug font-semibold text-ink-900">{chip.value}</p>
      </div>
    </div>
  )
}

/**
 * Outcome-led benefits. `rows` is an editorial list beside a sticky heading;
 * `cards` is a 2 × 2 grid of bezel cards. Each pairs a sentence with a small UI chip.
 */
export function BenefitsSection({ content, tone }: { content: FeaturePageContent['benefits']; tone: 'white' | 'mist' }) {
  const { layout, title, lead, items } = content
  const heading = (
    <Reveal>
      <SectionHeading eyebrow="What changes" title={title} lead={lead} id="benefits-heading" />
    </Reveal>
  )

  return (
    <Section tone={tone} aria-labelledby="benefits-heading">
      <Container>
        {layout === 'rows' ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">{heading}</div>
            <ol className="border-y border-ink-900/[0.09]">
              {items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  className="grid gap-5 border-b border-ink-900/[0.09] py-8 last:border-b-0 md:grid-cols-[minmax(0,1fr)_16rem] md:items-center md:gap-10 md:py-10"
                >
                  <div className="flex gap-5">
                    <span className="pt-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-[1.3rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900 md:text-[1.45rem]">{item.title}</h3>
                      <p className="mt-2.5 max-w-xl text-[1.0156rem] leading-relaxed text-ink-600">{item.text}</p>
                    </div>
                  </div>
                  <BenefitChip chip={item.chip} className="ml-[2.1rem] md:ml-0 md:justify-self-end" />
                </Reveal>
              ))}
            </ol>
          </div>
        ) : (
          <>
            {heading}
            <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
              {items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 90}>
                  <Bezel className="h-full" coreClassName="flex h-full flex-col p-6 md:p-8">
                    <BenefitChip chip={item.chip} className="self-start bg-mist shadow-none" />
                    <h3 className="mt-6 text-[1.3rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900 md:text-[1.45rem]">{item.title}</h3>
                    <p className="mt-2.5 text-[1.0156rem] leading-relaxed text-ink-600">{item.text}</p>
                  </Bezel>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Container>
    </Section>
  )
}
