import { CircleAlert, RotateCw } from 'lucide-react'
import type { RefObject } from 'react'
import { Button } from '@/components/ui/Button'

export interface SummaryError {
  /** The control's id, so the link can move focus to it. */
  id: string
  label: string
  message: string
}

/**
 * Appears after a failed submit and receives focus, so screen-reader users hear
 * what went wrong and keyboard users can jump straight to each field.
 */
export function FormErrorSummary({ errors, summaryRef }: { errors: SummaryError[]; summaryRef: RefObject<HTMLDivElement | null> }) {
  if (errors.length === 0) return null
  return (
    <div
      ref={summaryRef}
      tabIndex={-1}
      role="alert"
      aria-labelledby="form-error-summary-title"
      className="rounded-2xl bg-coral-50 p-4 ring-1 ring-coral-100 outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
    >
      <p id="form-error-summary-title" className="flex items-center gap-2 text-[0.9375rem] font-semibold text-coral-600">
        <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
        {errors.length === 1 ? 'Please fix 1 field to continue' : `Please fix ${errors.length} fields to continue`}
      </p>
      <ul className="mt-2.5 space-y-1 pl-6 text-[0.9375rem] text-ink-700">
        {errors.map((e) => (
          <li key={e.id} className="list-disc marker:text-coral-500">
            <a
              href={`#${e.id}`}
              onClick={(event) => {
                event.preventDefault()
                document.getElementById(e.id)?.focus()
              }}
              className="inline-flex min-h-8 items-center font-medium text-ink-800 underline decoration-coral-500/40 underline-offset-4 hover:decoration-coral-500"
            >
              {e.label}: {e.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Shown when the request itself failed (network, server). Values are kept; "Try again" resubmits them. */
export function SubmitErrorAlert({ message, onRetry, fallback }: { message: string; onRetry: () => void; fallback?: string }) {
  return (
    <div role="alert" className="rounded-2xl bg-coral-50 p-4 ring-1 ring-coral-100">
      <p className="flex items-start gap-2 text-[0.9375rem] font-semibold text-coral-600">
        <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <span>We couldn’t send that. Nothing has been lost, your answers are still here.</span>
      </p>
      <p className="mt-1.5 pl-6 text-[0.9375rem] leading-snug text-ink-700">{message}</p>
      {fallback && <p className="mt-1.5 pl-6 text-[0.9375rem] leading-snug text-ink-700">{fallback}</p>}
      <div className="mt-3 pl-6">
        <Button variant="secondary" arrow={false} onClick={onRetry} className="gap-2">
          <RotateCw className="size-4" aria-hidden="true" />
          Try again
        </Button>
      </div>
    </div>
  )
}
