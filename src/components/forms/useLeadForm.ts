import { useCallback, useEffect, useId, useMemo, useRef, useState, type ChangeEvent, type FormEvent, type RefObject } from 'react'
import { submitLead, type LeadKind, type LeadPayload, type LeadResult } from '@/lib/forms'
import type { FieldRule } from './validators'
import type { SummaryError } from './FormMessages'

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface Options<K extends string> {
  kind: LeadKind
  initial: Record<K, string>
  /** Human label for each field (used in the error summary). */
  labels: Record<K, string>
  rules: Partial<Record<K, FieldRule>>
  /** Turns raw values into the payload (e.g. select values -> visible labels). */
  toPayload: (values: Record<K, string>) => LeadPayload
}

type ChangeTarget = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

/**
 * Small, dependency-free form controller for the demo and contact forms.
 *
 * - Errors are derived from the current values, so they clear the moment a field is fixed.
 * - A field shows its error after it has been blurred, or after the first submit attempt.
 * - A failed submit moves focus to the error summary (see FormErrorSummary).
 * - A filled honeypot "succeeds" without sending anything.
 */
export function useLeadForm<K extends string>({ kind, initial, labels, rules, toPayload }: Options<K>) {
  const uid = useId()
  const [values, setValues] = useState<Record<K, string>>(initial)
  const [touched, setTouched] = useState<Partial<Record<K, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [serverError, setServerError] = useState('')
  const [via, setVia] = useState<Extract<LeadResult, { ok: true }>['via']>('endpoint')
  const [trap, setTrap] = useState('')
  const [focusTick, setFocusTick] = useState(0)
  const summaryRef: RefObject<HTMLDivElement | null> = useRef(null)

  const idFor = useCallback((name: K) => `${uid}-${name}`, [uid])

  const errors = useMemo(() => {
    const out: Partial<Record<K, string>> = {}
    for (const name of Object.keys(values) as K[]) {
      const message = rules[name]?.(values[name])
      if (message) out[name] = message
    }
    return out
  }, [values, rules])

  const summary: SummaryError[] = useMemo(
    () => (Object.keys(errors) as K[]).map((name) => ({ id: idFor(name), label: labels[name], message: errors[name] as string })),
    [errors, idFor, labels],
  )

  useEffect(() => {
    if (focusTick > 0) summaryRef.current?.focus()
  }, [focusTick])

  const setValue = useCallback((name: K, value: string) => setValues((v) => ({ ...v, [name]: value })), [])

  /** Props for TextField / SelectField / TextAreaField. */
  const field = (name: K) => ({
    id: idFor(name),
    name,
    value: values[name],
    error: touched[name] || submitted ? errors[name] : undefined,
    onChange: (e: ChangeEvent<ChangeTarget>) => setValue(name, e.target.value),
    onBlur: () => setTouched((t) => (t[name] ? t : { ...t, [name]: true })),
  })

  const send = useCallback(async () => {
    setStatus('submitting')
    setServerError('')
    const result = await submitLead(toPayload(values), kind)
    if (result.ok) {
      setVia(result.via)
      setStatus('success')
    } else {
      setServerError(result.error)
      setStatus('error')
    }
  }, [kind, toPayload, values])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return
    setSubmitted(true)
    if (summary.length > 0) {
      setFocusTick((n) => n + 1)
      return
    }
    if (trap.trim() !== '') {
      setVia('endpoint')
      setStatus('success')
      return
    }
    void send()
  }

  const reset = () => {
    setValues(initial)
    setTouched({})
    setSubmitted(false)
    setStatus('idle')
    setServerError('')
    setTrap('')
  }

  return {
    values,
    setValue,
    field,
    handleSubmit,
    retry: send,
    reset,
    status,
    serverError,
    via,
    trap,
    setTrap,
    summary: submitted ? summary : [],
    summaryRef,
    /** The payload as it would be sent (used for the mailto fallback link on the success screen). */
    payload: () => toPayload(values),
  }
}
