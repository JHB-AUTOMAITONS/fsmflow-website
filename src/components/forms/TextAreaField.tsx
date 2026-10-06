import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { FieldShell, type FieldChrome } from './Field'
import { controlClass, describedBy, invalidClass } from './fieldStyles'

type Props = FieldChrome & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'className' | 'aria-invalid' | 'aria-describedby'>

export function TextAreaField({ id, label, optional, hint, error, className, rows = 4, ...area }: Props) {
  return (
    <FieldShell id={id} label={label} optional={optional} hint={hint} error={error} className={className}>
      <textarea
        id={id}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, Boolean(hint))}
        className={cn(controlClass, 'resize-y py-3 leading-relaxed', error && invalidClass)}
        {...area}
      />
    </FieldShell>
  )
}
