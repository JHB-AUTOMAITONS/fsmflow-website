import { Bezel } from '@/components/ui/Bezel'
import { TextLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/product/StatusPill'
import { getFeature } from '@/data/features'
import type { ModuleLayout, SectionIntro, SolutionAccent, SolutionModule } from '@/data/solutionPages'
import { cn } from '@/lib/cn'
import { ACCENT, sentenceCase, type AccentStyle } from './accent'
import { SectionTitle } from './SectionTitle'

interface Props extends SectionIntro {
  id: string
  layout: ModuleLayout
  columns?: 1 | 2
  accent: SolutionAccent
  items: SolutionModule[]
}

function Chips({ chips, a, className }: { chips: string[]; a: AccentStyle; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)} aria-label="Included in this module">
      {chips.map((c) => (
        <li
          key={c}
          className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 font-mono text-[10.5px] font-semibold text-ink-600 ring-1 ring-ink-900/[0.06]"
        >
          <span className={cn('size-1.5 rounded-full', a.solid)} aria-hidden="true" />
          {c}
        </li>
      ))}
    </ul>
  )
}

function ModuleLink({ item }: { item: SolutionModule }) {
  const feature = getFeature(item.feature)
  if (!feature) return null
  return (
    <TextLink href={feature.path} className="min-h-11">
      {sentenceCase(feature.primaryKeyword)}
    </TextLink>
  )
}

/** Small "screen" of sample rows shown on featured cards. */
function Preview({ rows, className }: { rows: NonNullable<SolutionModule['preview']>; className?: string }) {
  return (
    <ul className={cn('mt-5 divide-y divide-ink-900/[0.06] rounded-2xl bg-mist px-3.5 py-1 ring-1 ring-ink-900/[0.05]', className)} aria-hidden="true">
      {rows.map((r) => (
        <li key={r.label} className="flex items-center justify-between gap-3 py-2.5">
          <span className="min-w-0 truncate text-[0.8125rem] font-medium text-ink-700">{r.label}</span>
          <Tag tone={r.tone} className="shrink-0">
            {r.value}
          </Tag>
        </li>
      ))}
    </ul>
  )
}

/* --- bento ------------------------------------------------------------------ */
function Bento({ items, a }: { items: SolutionModule[]; a: AccentStyle }) {
  const featured = items.filter((i) => i.preview).length
  // One wide featured card (text beside a mini screen) over a row of small cards,
  // or two featured cards side by side over a row of small ones.
  const wideHero = featured === 1
  const span = (i: number) => {
    if (wideHero) return i === 0 ? 'lg:col-span-8' : 'lg:col-span-4'
    return i < featured ? 'lg:col-span-6' : 'lg:col-span-3'
  }
  return (
    <ul className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-12">
      {items.map((it, i) => {
        const feature = getFeature(it.feature)
        if (!feature) return null
        const big = Boolean(it.preview)
        const split = big && wideHero
        return (
          <Reveal as="li" key={it.feature} delay={(i % 3) * 70} className={cn('min-w-0', span(i), big && 'md:col-span-2')}>
            <Bezel
              interactive
              className="h-full"
              coreClassName={cn(
                'relative flex h-full flex-col overflow-hidden p-6 md:p-7',
                big && 'md:p-8',
                split && 'lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10',
              )}
            >
              {big && <div className={cn('pointer-events-none absolute -top-20 -right-20 size-64 rounded-full blur-3xl', a.blobA)} aria-hidden="true" />}
              <div className="relative flex flex-1 flex-col lg:h-full">
                <div className="flex items-center gap-3">
                  <IconTile icon={feature.icon} tone={a.icon} size={big ? 'lg' : 'md'} />
                  <p className={cn('eyebrow-mono leading-snug!', a.textDeep)}>{feature.navLabel}</p>
                </div>
                <h3 className={cn('mt-5 font-display leading-snug font-semibold tracking-[-0.02em] text-ink-900', big ? 'text-[1.4rem] md:text-[1.6rem]' : 'text-[1.1875rem]')}>
                  {it.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink-600">{it.blurb}</p>
                {it.preview && <Preview rows={it.preview} className={split ? 'lg:hidden' : undefined} />}
                <Chips chips={it.chips} a={a} className="mt-5" />
                <div className="mt-auto pt-6">
                  <ModuleLink item={it} />
                </div>
              </div>
              {it.preview && split && <Preview rows={it.preview} className="relative hidden lg:mt-0 lg:block" />}
            </Bezel>
          </Reveal>
        )
      })}
    </ul>
  )
}

/* --- list (one big card of rows, or a two-column grid of cards) -------------- */
function ModuleList({ items, a, columns }: { items: SolutionModule[]; a: AccentStyle; columns: 1 | 2 }) {
  if (columns === 2) {
    return (
      <ul className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2">
        {items.map((it, i) => {
          const feature = getFeature(it.feature)
          if (!feature) return null
          return (
            <Reveal as="li" key={it.feature} delay={(i % 2) * 70} className="min-w-0">
              <Bezel interactive className="h-full" coreClassName="flex h-full gap-4 p-5 md:p-6">
                <IconTile icon={feature.icon} tone={a.icon} size="lg" />
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className={cn('eyebrow-mono leading-snug!', a.textDeep)}>{feature.navLabel}</p>
                  <h3 className="mt-2 font-display text-[1.1875rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900">{it.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-600">{it.blurb}</p>
                  <Chips chips={it.chips} a={a} className="mt-4" />
                  <div className="mt-auto pt-4">
                    <ModuleLink item={it} />
                  </div>
                </div>
              </Bezel>
            </Reveal>
          )
        })}
      </ul>
    )
  }

  return (
    <Reveal className="mt-12 md:mt-14">
      <Bezel radius="xl" coreClassName="overflow-hidden">
        <ul className="divide-y divide-ink-900/[0.07]">
          {items.map((it, i) => {
            const feature = getFeature(it.feature)
            if (!feature) return null
            return (
              <li key={it.feature} className="group/row relative grid gap-x-6 gap-y-4 p-6 transition-colors duration-500 hover:bg-mist/70 md:grid-cols-[auto_minmax(0,1.5fr)_minmax(0,1fr)] md:items-center md:px-8 md:py-6">
                <div className="flex items-center gap-4">
                  <IconTile icon={feature.icon} tone={a.icon} size="lg" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-ink-500 md:hidden" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-[1.25rem] leading-snug font-semibold tracking-[-0.02em] text-ink-900">{it.title}</h3>
                  <p className="mt-1.5 max-w-xl leading-relaxed text-ink-600">{it.blurb}</p>
                  <div className="mt-2.5">
                    <ModuleLink item={it} />
                  </div>
                </div>
                <Chips chips={it.chips} a={a} className="md:justify-end" />
              </li>
            )
          })}
        </ul>
      </Bezel>
    </Reveal>
  )
}

/** "Modules for {industry}" — a bento or a list-with-chips, depending on the page. */
export function ModulesSection({ id, layout, columns = 1, accent, eyebrow, title, lead, items }: Props) {
  const a = ACCENT[accent]
  return (
    <Section tone="wash" aria-labelledby={id}>
      <Container>
        <Reveal>
          <SectionTitle id={id} accent={accent} eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        {layout === 'bento' ? <Bento items={items} a={a} /> : <ModuleList items={items} a={a} columns={columns} />}
      </Container>
    </Section>
  )
}
