import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { FieldShell, type FieldChrome } from './Field'
import { controlClass, describedBy, invalidClass } from './fieldStyles'

type Props = FieldChrome & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className' | 'aria-invalid' | 'aria-describedby'>

/** Single-line input with a real <label>, inline error and aria wiring. */
export function TextField({ id, label, optional, hint, error, className, ...input }: Props) {
  return (
    <FieldShell id={id} label={label} optional={optional} hint={hint} error={error} className={className}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, Boolean(hint))}
        className={cn(controlClass, 'h-12', error && invalidClass)}
        {...input}
      />
    </FieldShell>
  )
}
