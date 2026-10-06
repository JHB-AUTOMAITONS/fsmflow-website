import { CalendarCheck, Clock, Handshake, LifeBuoy, Mail, MapPin, Phone, ShoppingBag, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Honeypot } from '@/components/forms/Honeypot'
import { FormErrorSummary, SubmitErrorAlert } from '@/components/forms/FormMessages'
import { FormSuccess } from '@/components/forms/FormSuccess'
import { SelectField } from '@/components/forms/SelectField'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { TextAreaField } from '@/components/forms/TextAreaField'
import { TextField } from '@/components/forms/TextField'
import { useLeadForm } from '@/components/forms/useLeadForm'
import { all, email, maxLength, minLength, optionalPhone, required } from '@/components/forms/validators'
import { Bezel } from '@/components/ui/Bezel'
import { IconTile, type IconTone } from '@/components/ui/IconTile'
import { Reveal } from '@/components/ui/Reveal'
import { SITE } from '@/data/site'
import { buildMailto, type LeadPayload } from '@/lib/forms'
import { cn } from '@/lib/cn'

/* ------------------------------ contact options ------------------------------ */

interface Option {
  key: string
  icon: LucideIcon
  tone: IconTone
  title: string
  text: ReactNode
  /** Present for cards that are links. */
  action?: { label: string; href: string }
}

/** Phone, address and hours appear only when SITE.contact has a non-empty value for them. */
function contactOptions(): Option[] {
  // Widen the literal '' types from `as const` so the "is it set?" checks stay meaningful.
  const mail: string = SITE.contact.email
  const phone: string = SITE.contact.phone
  const address: string = SITE.contact.address
  const hours: string = SITE.contact.hours
  const options: Option[] = [
    {
      key: 'demo',
      icon: CalendarCheck,
      tone: 'solid',
      title: 'Book a demo',
      text: 'See FSMFlow with examples from your trade.',
      action: { label: 'Request a Demo', href: '/demo' },
    },
    {
      key: 'email',
      icon: Mail,
      tone: 'brand',
      title: 'Email',
      text: <span className="break-all">{mail}</span>,
      action: { label: 'Write to us', href: `mailto:${mail}` },
    },
  ]
  if (phone) {
    options.push({
      key: 'phone',
      icon: Phone,
      tone: 'aqua',
      title: 'Phone',
      text: phone,
      action: { label: 'Call us', href: `tel:${phone.replace(/[^\d+]/g, '')}` },
    })
  }
  if (address) options.push({ key: 'address', icon: MapPin, tone: 'iris', title: 'Address', text: <span className="whitespace-pre-line">{address}</span> })
  if (hours) options.push({ key: 'hours', icon: Clock, tone: 'heat', title: 'Hours', text: hours })
  return options
}

function OptionCard({ option }: { option: Option }) {
  const { action } = option
  const inner = (
    <div className="flex items-start gap-4 p-5">
      <IconTile icon={option.icon} tone={option.tone} size="md" />
      <div className="min-w-0">
        <p className="font-display text-[1.0625rem] leading-tight font-semibold tracking-[-0.01em] text-ink-900">{option.title}</p>
        <p className="mt-1 text-[0.9375rem] leading-snug text-ink-600">{option.text}</p>
        {action && <p className="mt-2.5 text-[0.9375rem] font-semibold text-brand-600 group-hover:text-brand-800">{action.label} &rarr;</p>}
      </div>
    </div>
  )
  if (!action) return <Bezel radius="md">{inner}</Bezel>

  const cls = 'group block rounded-[22px] focus-visible:outline-offset-4'
  return (
    <Bezel radius="md" interactive>
      {action.href.startsWith('/') ? (
        <Link to={action.href} className={cls}>
          {inner}
        </Link>
      ) : (
        <a href={action.href} className={cls}>
          {inner}
        </a>
      )}
    </Bezel>
  )
}

const TOPIC_NOTES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShoppingBag, title: 'Sales', text: 'Plans, pricing and whether FSMFlow fits your team.' },
  { icon: LifeBuoy, title: 'Support', text: 'Help with using FSMFlow day to day.' },
  { icon: Handshake, title: 'Partnership', text: 'Working together with FSMFlow.' },
]

function ContactOptions() {
  return (
    <div>
      <h2 className="sr-only">Ways to reach us</h2>
      <ul className="space-y-4">
        {contactOptions().map((option, i) => (
          <li key={option.key}>
            <Reveal delay={i * 70}>
              <OptionCard option={option} />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={150}>
        <div className="mt-8 rounded-[22px] bg-mist p-5 ring-1 ring-ink-900/[0.05]">
          <p className="eyebrow-mono text-ink-500">What to write to us about</p>
          <ul className="mt-4 space-y-3.5">
            {TOPIC_NOTES.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-[18px] shrink-0 text-brand-500" strokeWidth={1.7} aria-hidden="true" />
                <p className="text-[0.9375rem] leading-snug text-ink-600">
                  <span className="font-semibold text-ink-900">{title}.</span> {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}

/* ------------------------------- contact form -------------------------------- */

type Key = 'name' | 'email' | 'phone' | 'topic' | 'message'

const TOPICS = ['Sales', 'Support', 'Partnership', 'Other'].map((label) => ({ value: label, label }))
const INITIAL: Record<Key, string> = { name: '', email: '', phone: '', topic: '', message: '' }
const LABELS: Record<Key, string> = { name: 'Name', email: 'Email', phone: 'Phone', topic: 'Topic', message: 'Message' }

const RULES = {
  name: all(required('Enter your name.'), minLength(2, 'Enter your full name.')),
  email: email,
  phone: optionalPhone,
  topic: required('Choose what your message is about.'),
  message: all(required('Write a short message so we know how to help.'), minLength(10, 'Please add a little more detail (at least 10 characters).'), maxLength(2000, 'Please keep your message under 2,000 characters.')),
}

const toPayload = (v: Record<Key, string>): LeadPayload => ({
  name: v.name.trim(),
  email: v.email.trim(),
  phone: v.phone.trim() || undefined,
  topic: v.topic,
  message: v.message.trim(),
})

function ContactForm() {
  const form = useLeadForm<Key>({ kind: 'contact', initial: INITIAL, labels: LABELS, rules: RULES, toPayload })
  const firstName = form.values.name.trim().split(/\s+/)[0]

  return (
    <Bezel radius="xl" coreClassName="p-6 sm:p-9 lg:p-10">
      {form.status === 'success' ? (
        <FormSuccess
          title={firstName ? `Thanks, ${firstName}` : 'Thanks for your message'}
          via={form.via}
          mailtoHref={buildMailto(form.payload(), 'contact')}
          receivedText="We have received your message and will reply by email."
          onReset={form.reset}
          resetLabel="Send another message"
        />
      ) : (
        <form noValidate onSubmit={form.handleSubmit} aria-labelledby="contact-form-title" className="relative">
          <h2 id="contact-form-title" className="font-display text-h3 font-semibold text-ink-900">
            Send us a message
          </h2>
          <p className="mt-2 text-[0.9375rem] leading-snug text-ink-600">We read every message. Phone is optional.</p>

          <div className="mt-7 space-y-5">
            <FormErrorSummary errors={form.summary} summaryRef={form.summaryRef} />

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField {...form.field('name')} label="Name" type="text" autoComplete="name" required />
              <TextField
                {...form.field('email')}
                label="Email"
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                required
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField {...form.field('phone')} label="Phone" optional type="tel" inputMode="tel" autoComplete="tel" />
              <SelectField {...form.field('topic')} label="Topic" placeholder="Choose a topic" options={TOPICS} required />
            </div>
            <TextAreaField {...form.field('message')} label="Message" rows={5} required />

            <Honeypot value={form.trap} onChange={form.setTrap} />

            {form.status === 'error' && (
              <SubmitErrorAlert message={form.serverError} onRetry={() => void form.retry()} fallback={`You can also email us at ${SITE.contact.email}.`} />
            )}

            <div className={cn('flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between')}>
              <SubmitButton label="Send message" loading={form.status === 'submitting'} />
              <p className="text-[0.8125rem] leading-snug text-ink-500 sm:max-w-[15rem]">
                We use your details only to reply to you. See our{' '}
                <Link to="/privacy-policy" className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </form>
      )}
    </Bezel>
  )
}

export function ContactSection() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
      <ContactOptions />
      <ContactForm />
    </div>
  )
}
