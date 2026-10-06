import { SITE } from '@/data/site'

export type LeadKind = 'demo' | 'contact'

/**
 * Human-readable lead fields. Select values are already converted to their
 * visible labels (e.g. "HVAC / AC service") because the people reading these
 * submissions are the FSMFlow team, not a database.
 */
export interface LeadPayload {
  name: string
  email: string
  phone?: string
  company?: string
  industry?: string
  technicians?: string
  topic?: string
  message?: string
}

/**
 * `via` tells the UI how the lead travelled so the success copy can be honest:
 *  - endpoint: POSTed to VITE_LEAD_ENDPOINT, so it has been received.
 *  - mailto:   the visitor's email app was opened; they still have to press send.
 *  - dev:      local development with no endpoint; nothing was sent.
 */
export type LeadResult = { ok: true; via: 'endpoint' | 'mailto' | 'dev' } | { ok: false; error: string }

const TIMEOUT_MS = 12_000

const FIELD_LABELS: Record<keyof LeadPayload, string> = {
  name: 'Name',
  email: 'Work email',
  phone: 'Phone',
  company: 'Company',
  industry: 'Industry',
  technicians: 'Number of technicians',
  topic: 'Topic',
  message: 'Message',
}

const ORDER: (keyof LeadPayload)[] = ['name', 'company', 'email', 'phone', 'industry', 'technicians', 'topic', 'message']

function endpoint(): string {
  const value = import.meta.env.VITE_LEAD_ENDPOINT
  return typeof value === 'string' ? value.trim() : ''
}

/** True when a real endpoint is configured (so submissions are received, not emailed by the visitor). */
export function hasLeadEndpoint(): boolean {
  return endpoint() !== ''
}

/** Builds the pre-filled mailto: link used when no endpoint is configured. */
export function buildMailto(payload: LeadPayload, kind: LeadKind): string {
  const subject =
    kind === 'demo'
      ? `Demo request${payload.company ? ` - ${payload.company}` : ''}`
      : `Website enquiry${payload.topic ? ` - ${payload.topic}` : ''}`

  const lines = ORDER.filter((key) => payload[key]).map((key) => `${FIELD_LABELS[key]}: ${payload[key]}`)
  const body = [`Hello ${SITE.name} team,`, '', ...lines, '', `Sent from ${SITE.domain}`].join('\r\n')

  return `mailto:${SITE.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * Delivers a demo / contact submission.
 *
 * - VITE_LEAD_ENDPOINT set  -> JSON POST with a timeout and friendly errors.
 * - not set, development    -> logs the payload and resolves (no mail app pops open while testing).
 * - not set, production     -> opens a pre-filled mailto: to SITE.contact.email.
 */
export async function submitLead(payload: LeadPayload, kind: LeadKind): Promise<LeadResult> {
  const url = endpoint()

  if (url) {
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          kind,
          ...payload,
          page: window.location.pathname,
          submittedAt: new Date().toISOString(),
        }),
        signal: controller.signal,
      })
      if (!response.ok) {
        return { ok: false, error: `The server could not take your request just now (error ${response.status}). Please try again.` }
      }
      return { ok: true, via: 'endpoint' }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return { ok: false, error: 'The request took too long. Please check your connection and try again.' }
      }
      return { ok: false, error: 'We could not reach the server. Please check your connection and try again.' }
    } finally {
      window.clearTimeout(timer)
    }
  }

  if (import.meta.env.DEV) {
    console.info('[FSMFlow] Lead (development, nothing sent):', kind, payload)
    await new Promise((resolve) => window.setTimeout(resolve, 700))
    return { ok: true, via: 'dev' }
  }

  try {
    window.location.href = buildMailto(payload, kind)
    return { ok: true, via: 'mailto' }
  } catch {
    return { ok: false, error: `We could not open your email app. Please write to ${SITE.contact.email} instead.` }
  }
}
