import type { ReactNode } from 'react'
import type { SolutionAccent } from '@/data/solutionPages'
import { cn } from '@/lib/cn'
import { ACCENT } from './accent'

/**
 * Section heading with an accent-aware eyebrow chip. Same look as the shared
 * SectionHeading, but the chip colours are chosen for AA text contrast in every
 * industry accent (the shared heat and aqua tones are too light for small text).
 */
export function SectionTitle({
  id,
  accent,
  eyebrow,
  title,
  lead,
  className,
  titleClassName,
}: {
  id: string
  accent: SolutionAccent
  eyebrow: ReactNode
  title: ReactNode
  lead?: ReactNode
  className?: string
  titleClassName?: string
}) {
  return (
    <div className={cn('flex flex-col items-start', className)}>
      <span className={cn('eyebrow-mono inline-flex items-center gap-2 rounded-full px-3 py-1.5 ring-1 ring-inset', ACCENT[accent].eyebrowChip)}>
        <span className="size-1.5 rounded-full bg-(--dot)" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 id={id} className={cn('text-h2 mt-5 max-w-3xl font-semibold text-ink-900', titleClassName)}>
        {title}
      </h2>
      {lead && <p className="text-lead mt-5 max-w-2xl text-ink-600">{lead}</p>}
    </div>
  )
}
