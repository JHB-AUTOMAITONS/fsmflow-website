/**
 * Site-wide constants. Anything marked CONFIRM should be replaced with real
 * business details before launch.
 */
export const SITE = {
  name: 'FSMFlow',
  domain: 'fsmflow.in',
  url: 'https://fsmflow.in',
  locale: 'en_IN',
  tagline: 'Your entire field service business, flowing in one system.',
  description:
    'FSMFlow is field service management software for Indian service businesses — manage technicians, jobs, customers, assets, quotations, inventory, AMC and warranty from one platform.',
  ogImage: '/og-image.png',
  /** The approved structure document was finalised on this date. */
  structureDate: '6 October 2026',
  /** Policies were last reviewed on this date. */
  policyDate: '6 October 2026',
  contact: {
    /** CONFIRM: replace with the real mailbox. */
    email: 'hello@fsmflow.in',
    /** CONFIRM: leave empty to hide, or add e.g. '+91 98765 43210'. */
    phone: '',
    /** CONFIRM: leave empty to hide. */
    address: '',
    /** CONFIRM: working hours shown on the contact page. Empty hides it. */
    hours: '',
  },
  /** CONFIRM: registered business name used in the legal pages. Empty → "FSMFlow". */
  legalEntity: '',
  whatsapp: {
    /** International format: country code + number, no "+", spaces or dashes (wa.me requires this). */
    number: '917090006577',
  },
} as const

const WHATSAPP_MESSAGE =
  'Hello FSMFlow Team, I am interested in your Field Service Management Software. Please share details about features, pricing, and demo.'

/** wa.me link with the message pre-filled. WhatsApp never sends it automatically; the visitor reviews and sends. */
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const BUILD_YEAR: number = typeof __BUILD_YEAR__ === 'number' ? __BUILD_YEAR__ : 2026
