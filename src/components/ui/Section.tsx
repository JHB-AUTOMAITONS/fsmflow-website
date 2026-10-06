import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

const tones = {
  white: 'bg-white',
  mist: 'bg-mist',
  wash: 'bg-wash-gradient',
  transparent: '',
} as const

interface Props extends ComponentPropsWithoutRef<'section'> {
  tone?: keyof typeof tones
  /** Vertical rhythm. "none" lets a page control spacing itself. */
  spacing?: 'default' | 'tight' | 'loose' | 'none'
}

const spacings = {
  default: 'py-20 md:py-28',
  tight: 'py-14 md:py-20',
  loose: 'py-24 md:py-36',
  none: '',
} as const

/** A page band. Pass aria-labelledby (pointing at its heading id) for landmark navigation. */
export function Section({ tone = 'white', spacing = 'default', className, ...rest }: Props) {
  return <section className={cn('relative', tones[tone], spacings[spacing], className)} {...rest} />
}
