import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { errorId, hintId } from './fieldStyles'

export interface FieldChrome {
  /** Used for the label's htmlFor and the control's id. */
  id: string
  label: string
  /** Shown beside the label for non-required fields. */
  optional?: boolean
  hint?: string
  /** Error text (already filtered: only pass it once the field should show it). */
  error?: string
  className?: string
}

/**
 * Label + control slot + hint + error. The error container is always in the
 * DOM and is a polite live region, so a message that appears on blur is
 * announced without stealing focus.
 */
export function FieldShell({ id, label, optional, hint, error, className, children }: FieldChrome & { children: ReactNode }) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-[0.9375rem] font-semibold text-ink-800">
        <span>{label}</span>
        {optional && <span className="text-[0.8125rem] font-medium text-ink-500">Optional</span>}
      </label>
      {children}
      {hint && (
        <p id={hintId(id)} className="mt-2 text-[0.8125rem] leading-snug text-ink-500">
          {hint}
        </p>
      )}
      <div id={errorId(id)} aria-live="polite">
        {error && (
          <p className="mt-2 flex items-start gap-1.5 text-[0.875rem] leading-snug font-medium text-coral-600">
            <svg viewBox="0 0 16 16" className="mt-[3px] size-3.5 shrink-0" aria-hidden="true">
              <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.14" />
              <path d="M8 4.4v4.1M8 10.9v.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <span>
              <span className="sr-only">Error: </span>
              {error}
            </span>
          </p>
        )}
      </div>
    </div>
  )
}
