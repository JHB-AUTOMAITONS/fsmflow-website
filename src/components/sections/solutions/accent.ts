import type { IconTone } from '@/components/ui/IconTile'
import type { SolutionAccent } from '@/data/solutionPages'

/**
 * Per-industry accent classes. Every class is written out in full so Tailwind
 * can see it. Light-theme only; the brand blue stays the primary colour and the
 * accent adds each industry's own warmth.
 */
export interface AccentStyle {
  /** Classes for the small eyebrow chip above section headings (AA contrast). */
  eyebrowChip: string
  icon: IconTone
  /** Accent text colour (AA on white at 14px+ bold). */
  text: string
  textDeep: string
  soft: string
  softRing: string
  solid: string
  solidGradient: string
  /** Gradient used for the accent word in the H1 (apply with bg-clip-text). */
  heading: string
  blobA: string
  blobB: string
  /** Big decorative numerals. */
  numeral: string
  /** Connector lines between stages. */
  rail: string
  /** Dashed outline colour. */
  dashed: string
  /** CSS variable holding the accent's 500 shade (used with color-mix). */
  cssVar: string
}

export const ACCENT: Record<SolutionAccent, AccentStyle> = {
  iris: {
    eyebrowChip: 'bg-iris-50 text-iris-700 ring-iris-100 [--dot:var(--color-iris-500)]',
    icon: 'iris',
    text: 'text-iris-600',
    textDeep: 'text-iris-700',
    soft: 'bg-iris-50',
    softRing: 'ring-iris-100',
    solid: 'bg-iris-500',
    solidGradient: 'bg-linear-to-br from-iris-500 to-brand-500',
    heading: 'from-iris-600 via-brand-500 to-aqua-500',
    blobA: 'bg-iris-200/50',
    blobB: 'bg-brand-200/40',
    numeral: 'text-iris-200',
    rail: 'bg-iris-200',
    dashed: 'border-iris-300',
    cssVar: '--color-iris-500',
  },
  heat: {
    eyebrowChip: 'bg-heat-50 text-amber-800 ring-heat-100 [--dot:var(--color-heat-500)]',
    icon: 'heat',
    text: 'text-amber-700',
    textDeep: 'text-amber-700',
    soft: 'bg-heat-50',
    softRing: 'ring-heat-100',
    solid: 'bg-heat-500',
    solidGradient: 'bg-linear-to-br from-heat-500 to-coral-500',
    heading: 'from-heat-600 to-coral-600',
    blobA: 'bg-heat-400/25',
    blobB: 'bg-brand-200/35',
    numeral: 'text-heat-100',
    rail: 'bg-heat-400/40',
    dashed: 'border-heat-400',
    cssVar: '--color-heat-500',
  },
  brand: {
    eyebrowChip: 'bg-brand-50 text-brand-700 ring-brand-100 [--dot:var(--color-brand-500)]',
    icon: 'brand',
    text: 'text-brand-600',
    textDeep: 'text-brand-700',
    soft: 'bg-brand-50',
    softRing: 'ring-brand-100',
    solid: 'bg-brand-500',
    solidGradient: 'bg-linear-to-br from-brand-500 to-iris-500',
    heading: 'from-brand-600 via-iris-500 to-aqua-500',
    blobA: 'bg-brand-200/45',
    blobB: 'bg-heat-100/80',
    numeral: 'text-brand-200',
    rail: 'bg-brand-200',
    dashed: 'border-brand-300',
    cssVar: '--color-brand-500',
  },
  aqua: {
    eyebrowChip: 'bg-aqua-50 text-cyan-800 ring-aqua-100 [--dot:var(--color-aqua-500)]',
    icon: 'aqua',
    text: 'text-cyan-700',
    textDeep: 'text-cyan-700',
    soft: 'bg-aqua-50',
    softRing: 'ring-aqua-100',
    solid: 'bg-aqua-500',
    solidGradient: 'bg-linear-to-br from-aqua-400 to-brand-500',
    heading: 'from-aqua-600 via-brand-500 to-iris-500',
    blobA: 'bg-aqua-200/50',
    blobB: 'bg-iris-200/35',
    numeral: 'text-aqua-200',
    rail: 'bg-aqua-200',
    dashed: 'border-aqua-300',
    cssVar: '--color-aqua-500',
  },
}

/** "sales CRM software" → "Sales CRM software" (anchor text in sentence case). */
export const sentenceCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
