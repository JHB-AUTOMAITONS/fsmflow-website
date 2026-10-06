import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Eyebrow, type Tone } from './Eyebrow'

interface Props {
  eyebrow?: ReactNode
  eyebrowTone?: Tone
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  /** Heading element. Pages use exactly one h1; sections default to h2. */
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  lead,
  align = 'left',
  as: Tag = 'h2',
  id,
  className,
  titleClassName,
}: Props) {
  const centered = align === 'center'
  return (
    <div className={cn('flex flex-col', centered ? 'mx-auto items-center text-center' : 'items-start', className)}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={cn(
          'mt-5 font-semibold text-ink-900',
          Tag === 'h1' ? 'text-h1' : Tag === 'h2' ? 'text-h2' : 'text-h3',
          centered ? 'max-w-3xl' : 'max-w-3xl',
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p className={cn('text-lead mt-5 text-ink-600', centered ? 'max-w-2xl' : 'max-w-2xl')}>{lead}</p>
      )}
    </div>
  )
}
