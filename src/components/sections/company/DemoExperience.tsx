import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Honeypot } from '@/components/forms/Honeypot'
import { FormErrorSummary, SubmitErrorAlert } from '@/components/forms/FormMessages'
import { FormSuccess } from '@/components/forms/FormSuccess'
import { SelectField } from '@/components/forms/SelectField'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { TextAreaField } from '@/components/forms/TextAreaField'
import { TextField } from '@/components/forms/TextField'
import { useLeadForm } from '@/components/forms/useLeadForm'
import { all, email, maxLength, minLength, phone, required } from '@/components/forms/validators'
import { Bezel } from '@/components/ui/Bezel'
import { TextLink } from '@/components/ui/Button'
import { HVAC_SOLUTION } from '@/data/solutions'
import { SITE } from '@/data/site'
import { buildMailto, type LeadPayload } from '@/lib/forms'
import { INDUSTRIES } from './demoData'
import { DemoPanel } from './DemoPanel'

type Key = 'name' | 'company' | 'email' | 'phone' | 'industry' | 'technicians' | 'message'

const TECHNICIANS = ['1–5', '6–15', '16–50', '51–100', '100+'].map((label) => ({ value: label, label }))

/** ?industry=… values from solution pages -> select values. "service" is the general service-business page. */
const PARAM_TO_INDUSTRY: Record<string, string> = { hvac: 'hvac', cctv: 'cctv', solar: 'solar', construction: 'construction', service: 'other' }

const INITIAL: Record<Key, string> = { name: '', company: '', email: '', phone: '', industry: '', technicians: '', message: '' }

const LABELS: Record<Key, string> = {
  name: 'Name',
  company: 'Company',
  email: 'Work email',
  phone: 'Phone',
  industry: 'Industry',
  technicians: 'Number of technicians',
  message: 'Message',
}

const RULES = {
  name: all(required('Enter your name.'), minLength(2, 'Enter your full name.')),
  company: required('Enter your company name.'),
  email,
  phone,
  industry: required('Choose the industry that fits you best.'),
  technicians: required('Choose the size of your field team.'),
  message: maxLength(1000, 'Please keep your message under 1,000 characters.'),
}

const toPayload = (v: Record<Key, string>): LeadPayload => ({
  name: v.name.trim(),
  company: v.company.trim(),
  email: v.email.trim(),
  phone: v.phone.trim(),
  industry: INDUSTRIES.find((i) => i.value === v.industry)?.label ?? v.industry,
  technicians: v.technicians,
  message: v.message.trim() || undefined,
})

/**
 * Form + side panel for /demo. The side panel follows the industry chosen in the form.
 * ?industry= is read in an effect (never during render), so server HTML and the first
 * client render are identical.
 */
export function DemoExperience() {
  const form = useLeadForm<Key>({ kind: 'demo', initial: INITIAL, labels: LABELS, rules: RULES, toPayload })
  const [params] = useSearchParams()
  const industryParam = params.get('industry')
  const { setValue } = form

  useEffect(() => {
    const preset = industryParam && Object.hasOwn(PARAM_TO_INDUSTRY, industryParam) ? PARAM_TO_INDUSTRY[industryParam] : ''
    if (preset) setValue('industry', preset)
  }, [industryParam, setValue])

  const firstName = form.values.name.trim().split(/\s+/)[0]
  const sending = form.status === 'submitting'

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12 xl:gap-16">
      <Bezel radius="xl" coreClassName="p-6 sm:p-9 lg:p-10">
        {form.status === 'success' ? (
          <FormSuccess
            title={firstName ? `Thanks, ${firstName}` : 'Thanks for your request'}
            via={form.via}
            mailtoHref={buildMailto(form.payload(), 'demo')}
            receivedText="We have received your demo request. The steps on this page show what happens next."
            onReset={form.reset}
            resetLabel="Send another request"
          >
            <p className="text-[0.9375rem] font-semibold text-ink-900">While you wait</p>
            <div className="mt-3 flex flex-col gap-1.5">
              <TextLink href={HVAC_SOLUTION.path}>See how {HVAC_SOLUTION.primaryKeyword} works</TextLink>
              <TextLink href="/pricing">Look at the pricing plans</TextLink>
            </div>
          </FormSuccess>
        ) : (
          <form noValidate onSubmit={form.handleSubmit} aria-labelledby="demo-form-title" className="relative">
            <h2 id="demo-form-title" className="font-display text-h3 font-semibold text-ink-900">
              Tell us about your team
            </h2>
            <p className="mt-2 text-[0.9375rem] leading-snug text-ink-600">All fields are required unless marked optional.</p>

            <div className="mt-7 space-y-5">
              <FormErrorSummary errors={form.summary} summaryRef={form.summaryRef} />

              <div className="grid gap-5 sm:grid-cols-2">
                <TextField {...form.field('name')} label="Name" type="text" autoComplete="name" required />
                <TextField {...form.field('company')} label="Company" type="text" autoComplete="organization" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  {...form.field('email')}
                  label="Work email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  required
                />
                <TextField {...form.field('phone')} label="Phone" type="tel" inputMode="tel" autoComplete="tel" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField {...form.field('industry')} label="Industry" placeholder="Select your industry" options={INDUSTRIES} required />
                <SelectField
                  {...form.field('technicians')}
                  label="Number of technicians"
                  placeholder="Select team size"
                  options={TECHNICIANS}
                  required
                />
              </div>
              <TextAreaField
                {...form.field('message')}
                label="Message"
                optional
                rows={4}
                hint="Anything you would like us to cover, such as AMC, spare parts or technician scheduling."
              />

              <Honeypot value={form.trap} onChange={form.setTrap} />

              {form.status === 'error' && (
                <SubmitErrorAlert message={form.serverError} onRetry={() => void form.retry()} fallback={`You can also email us at ${SITE.contact.email}.`} />
              )}

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <SubmitButton label="Request a Demo" loading={sending} />
                <p className="text-[0.8125rem] leading-snug text-ink-500 sm:max-w-[15rem]">
                  We use your details only to reply to this request. See our{' '}
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

      <DemoPanel industry={form.values.industry} />
    </div>
  )
}
