import { ArrowDown, ArrowRight } from 'lucide-react'
import { Bezel } from '@/components/ui/Bezel'
import { ButtonLink, TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { ChallengeLayout, SectionIntro, SolutionAccent, SolutionChallenge } from '@/data/solutionPages'
import { getFeature } from '@/data/features'
import { cn } from '@/lib/cn'
import { ACCENT, type AccentStyle } from './accent'
import { SectionTitle } from './SectionTitle'

interface Props extends SectionIntro {
  id: string
  layout: ChallengeLayout
  accent: SolutionAccent
  items: SolutionChallenge[]
}

const pad = (i: number) => String(i + 1).padStart(2, '0')

/** Link to the feature page that answers a challenge. Skips silently if the slug is unknown. */
function AnswerLink({ item, className }: { item: SolutionChallenge; className?: string }) {
  const feature = getFeature(item.feature)
  if (!feature) return null
  return (
    <TextLink href={feature.path} className={cn('min-h-11', className)}>
      {item.linkLabel}
    </TextLink>
  )
}

const tag = 'eyebrow-mono'

/* --- split: problem → answer rows (CCTV) ---------------------------------- */
function SplitRows({ items, a }: { items: SolutionChallenge[]; a: AccentStyle }) {
  return (
    <ul className="mt-12 space-y-4 md:mt-14 md:space-y-5">
      {items.map((it, i) => (
        <Reveal as="li" key={it.problem} delay={Math.min(i, 3) * 60}>
          <div className="grid items-stretch md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1.3fr)]">
            <div className="flex items-center gap-4 rounded-[26px] border border-dashed border-ink-300 bg-white/70 p-5 md:p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-coral-50 text-red-700 ring-1 ring-coral-100 ring-inset" aria-hidden="true">
                <it.icon className="size-5" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className={cn(tag, 'text-red-700')}>The problem</p>
                <h3 className="mt-2 font-display text-[1.25rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900 md:text-[1.35rem]">{it.problem}</h3>
              </div>
            </div>

            <div className="relative flex items-center justify-center py-1.5 md:py-0" aria-hidden="true">
              <span className="absolute inset-y-0 left-1/2 w-px border-l border-dashed border-ink-300 md:inset-x-0 md:inset-y-auto md:top-1/2 md:left-0 md:h-px md:w-full md:border-t md:border-l-0" />
              <span className={cn('relative flex size-9 items-center justify-center rounded-full bg-white ring-1 ring-ink-900/[0.08] shadow-card', a.text)}>
                <ArrowDown className="size-4 md:hidden" strokeWidth={2} />
                <ArrowRight className="hidden size-4 md:block" strokeWidth={2} />
              </span>
            </div>

            <Bezel radius="lg" coreClassName="flex h-full items-start gap-4 p-5 md:p-6">
              <IconTile icon={it.icon} tone={a.icon} className="hidden md:inline-flex" />
              <div className="min-w-0">
                <p className={cn(tag, a.textDeep)}>With FSMFlow</p>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-700">{it.answer}</p>
                <AnswerLink item={it} className="mt-4" />
              </div>
            </Bezel>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}

/* --- bento: asymmetric cards (solar) --------------------------------------- */
const BENTO_SPAN = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4', 'md:col-span-3', 'md:col-span-3']

function BentoCards({ items, a }: { items: SolutionChallenge[]; a: AccentStyle }) {
  return (
    <ul className="mt-12 grid gap-4 md:mt-14 md:grid-cols-6">
      {items.map((it, i) => {
        const wide = BENTO_SPAN[i]?.includes('col-span-4')
        return (
          <Reveal as="li" key={it.problem} delay={(i % 3) * 70} className={cn('min-w-0', BENTO_SPAN[i] ?? 'md:col-span-3')}>
            <Bezel interactive className="h-full" coreClassName="relative flex h-full flex-col overflow-hidden p-6 md:p-7">
              <div className={cn('pointer-events-none absolute -top-16 -right-16 size-48 rounded-full blur-3xl', a.blobA)} aria-hidden="true" />
              {wide && <it.icon className={cn('pointer-events-none absolute -right-5 -bottom-8 hidden size-44 md:block', a.numeral)} strokeWidth={0.9} aria-hidden="true" />}
              <div className="relative flex items-center justify-between">
                <IconTile icon={it.icon} tone={a.icon} size="lg" />
                <span className="font-mono text-xs font-semibold tracking-wider text-ink-500" aria-hidden="true">
                  {pad(i)}
                </span>
              </div>
              <p className={cn(tag, 'relative mt-6 text-red-700')}>The problem</p>
              <h3 className={cn('relative mt-2 font-display leading-snug font-semibold tracking-[-0.02em] text-ink-900', wide ? 'text-[1.4rem]' : 'text-[1.1875rem]')}>
                {it.problem}
              </h3>
              <div className="relative mt-5 border-t border-ink-900/[0.07] pt-5">
                <p className={cn(tag, a.textDeep)}>With FSMFlow</p>
                <p className="mt-2 leading-relaxed text-ink-600">{it.answer}</p>
              </div>
              <AnswerLink item={it} className="relative mt-auto pt-5" />
            </Bezel>
          </Reveal>
        )
      })}
    </ul>
  )
}

/* --- duo: problem strip over answer (service business) --------------------- */
function DuoCards({ items, a }: { items: SolutionChallenge[]; a: AccentStyle }) {
  return (
    <ul className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Reveal as="li" key={it.problem} delay={(i % 3) * 70} className="min-w-0">
          <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-ink-900/[0.07] transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift">
            <div className="bg-coral-50/70 px-6 pt-6 pb-8">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-[13px] bg-white text-red-700 ring-1 ring-coral-100 ring-inset" aria-hidden="true">
                  <it.icon className="size-5" strokeWidth={1.6} />
                </span>
                <p className={cn(tag, 'text-red-700')}>The problem</p>
              </div>
              <h3 className="mt-4 font-display text-[1.1875rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900">{it.problem}</h3>
            </div>
            <span
              aria-hidden="true"
              className={cn('relative z-10 -mt-4 ml-6 flex size-8 items-center justify-center rounded-full bg-white ring-1 ring-ink-900/[0.08] shadow-pop', a.text)}
            >
              <ArrowDown className="size-4" strokeWidth={2} />
            </span>
            <div className="flex flex-1 flex-col px-6 pt-3 pb-6">
              <p className={cn(tag, a.textDeep)}>With FSMFlow</p>
              <p className="mt-2 leading-relaxed text-ink-600">{it.answer}</p>
              <AnswerLink item={it} className="mt-auto pt-5" />
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}

/* --- ledger: sticky heading + numbered list (construction) ----------------- */
function LedgerList({ items, a }: { items: SolutionChallenge[]; a: AccentStyle }) {
  return (
    <ol className="divide-y divide-ink-900/[0.08]">
      {items.map((it, i) => (
        <Reveal as="li" key={it.problem} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 py-8 first:pt-0 last:pb-0 md:gap-x-8">
          <span
            className={cn(
              'font-display text-[3rem] leading-none font-semibold tracking-[-0.04em] tabular before:content-[attr(data-n)] md:text-[4rem]',
              a.numeral,
            )}
            data-n={pad(i)}
            aria-hidden="true"
          />
          <div className="min-w-0">
            <h3 className="font-display text-[1.25rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900 md:text-[1.4rem]">{it.problem}</h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-600">{it.answer}</p>
            <AnswerLink item={it} className="mt-4" />
          </div>
        </Reveal>
      ))}
    </ol>
  )
}

/** "Challenges → how FSMFlow helps" section. The layout differs per industry. */
export function ChallengeSection({ id, layout, accent, eyebrow, title, lead, items }: Props) {
  const a = ACCENT[accent]
  const heading = (
    <SectionTitle
      id={id}
      accent={accent}
      eyebrow={eyebrow}
      title={title}
      lead={lead}
      titleClassName={layout === 'ledger' ? 'text-[clamp(1.8rem,1.3rem+1.5vw,2.45rem)]' : undefined}
    />
  )

  return (
    <Section tone="mist" aria-labelledby={id}>
      <Container>
        {layout === 'ledger' ? (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              {heading}
              <div className="mt-8">
                <ButtonLink href="/demo" variant="secondary" arrow={false}>
                  Book a Demo
                </ButtonLink>
              </div>
            </Reveal>
            <LedgerList items={items} a={a} />
          </div>
        ) : (
          <>
            <Reveal>{heading}</Reveal>
            {layout === 'split' && <SplitRows items={items} a={a} />}
            {layout === 'bento' && <BentoCards items={items} a={a} />}
            {layout === 'duo' && <DuoCards items={items} a={a} />}
          </>
        )}
      </Container>
    </Section>
  )
}
