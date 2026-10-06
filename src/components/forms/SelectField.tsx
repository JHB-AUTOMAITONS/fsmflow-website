import { ChevronDown } from 'lucide-react'
import type { SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { FieldShell, type FieldChrome } from './Field'
import { controlClass, describedBy, invalidClass } from './fieldStyles'

export interface Option {
  value: string
  label: string
}

type Props = FieldChrome &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className' | 'aria-invalid' | 'aria-describedby' | 'children'> & {
    options: readonly Option[]
    /** Text of the empty first option, e.g. "Select your industry". */
    placeholder: string
  }

/** Native <select> (best mobile UX) with a custom chevron. */
export function SelectField({ id, label, optional, hint, error, className, options, placeholder, value, ...select }: Props) {
  const empty = value === ''
  return (
    <FieldShell id={id} label={label} optional={optional} hint={hint} error={error} className={className}>
      <div className="relative">
        <select
          id={id}
          value={value}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, Boolean(hint))}
          className={cn(controlClass, 'h-12 cursor-pointer appearance-none pr-11', empty && 'text-[#667495]', error && invalidClass)}
          {...select}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value} className="text-ink-900">
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink-500"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
    </FieldShell>
  )
}
