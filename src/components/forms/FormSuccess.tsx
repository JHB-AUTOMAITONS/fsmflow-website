import { Check, Mail } from 'lucide-react'
import { useEffect, useRef, type ReactNode } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { SITE } from '@/data/site'
import type { LeadResult } from '@/lib/forms'

type Via = Extract<LeadResult, { ok: true }>['via']

interface Props {
  /** Heading, e.g. "Thanks, Priya". */
  title: string
  via: Via
  /** pre-filled mailto: link, used when the visitor's email app is the delivery route. */
  mailtoHref: string
  /** What we received, in one line, for the endpoint route. */
  receivedText: string
  /** Optional "what happens next" content (demo page). */
  children?: ReactNode
  onReset: () => void
  resetLabel: string
}

/**
 * Success screen. The wording depends on how the lead travelled so we never say
 * "we've received it" when the visitor still has to press send in their email app.
 */
export function FormSuccess({ title, via, mailtoHref, receivedText, children, onReset, resetLabel }: Props) {
  const heading = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    heading.current?.focus()
  }, [])

  const emailRoute = via === 'mailto'

  return (
    <div role="status" className="flex flex-col items-start">
      <span className="flex size-14 items-center justify-center rounded-[18px] bg-mint-50 text-mint-600 ring-1 ring-mint-100">
        {emailRoute ? <Mail className="size-6" strokeWidth={1.6} aria-hidden="true" /> : <Check className="size-6" strokeWidth={2.2} aria-hidden="true" />}
      </span>
      <h2 ref={heading} tabIndex={-1} className="mt-6 text-h3 font-semibold text-ink-900 outline-none">
        {emailRoute ? 'One more step: send the email' : title}
      </h2>

      {emailRoute ? (
        <>
          <p className="mt-3 max-w-lg text-[1.0625rem] leading-relaxed text-ink-600">
            Your email app should now be open with your details filled in. Please press <strong className="text-ink-900">Send</strong> to complete your request. We
            only receive it once you do.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={mailtoHref} variant="secondary" arrow={false} className="gap-2">
              <Mail className="size-4" aria-hidden="true" />
              Open the email again
            </ButtonLink>
          </div>
          <p className="mt-4 max-w-lg text-[0.9375rem] leading-snug text-ink-500">
            Nothing opened? Write to us at{' '}
            <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600">
              {SITE.contact.email}
            </a>{' '}
            and include the same details.
          </p>
        </>
      ) : (
        <p className="mt-3 max-w-lg text-[1.0625rem] leading-relaxed text-ink-600">
          {via === 'dev' ? 'Development mode: nothing was sent. Set VITE_LEAD_ENDPOINT to deliver real submissions.' : receivedText}
        </p>
      )}

      {children && <div className="mt-8 w-full border-t border-ink-900/[0.08] pt-7">{children}</div>}

      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex min-h-11 items-center rounded-full text-[0.9375rem] font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600"
      >
        {resetLabel}
      </button>
    </div>
  )
}
