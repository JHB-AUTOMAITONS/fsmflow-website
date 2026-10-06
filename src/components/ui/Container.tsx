import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/cn'

const sizes = {
  narrow: 'max-w-[820px]',
  default: 'max-w-[1200px]',
  wide: 'max-w-[1320px]',
} as const

type Props<T extends ElementType> = {
  as?: T
  size?: keyof typeof sizes
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

export function Container<T extends ElementType = 'div'>({ as, size = 'default', className, ...rest }: Props<T>) {
  const Tag = (as ?? 'div') as ElementType
  return <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-10', sizes[size], className)} {...rest} />
}
