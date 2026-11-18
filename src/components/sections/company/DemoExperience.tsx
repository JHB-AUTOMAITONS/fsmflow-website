import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Bezel } from '@/components/ui/Bezel'
import { DemoFormEmbed } from './DemoFormEmbed'
import { DemoPanel } from './DemoPanel'

/** ?industry=… values from solution pages -> the walkthrough shown in the side panel. "service" is the general service-business page. */
const PARAM_TO_INDUSTRY: Record<string, string> = { hvac: 'hvac', cctv: 'cctv', solar: 'solar', construction: 'construction', service: 'other' }

/**
 * Hosted form + side panel for /demo. The side panel follows ?industry=, which is read in an effect
 * (never during render), so server HTML and the first client render are identical.
 */
export function DemoExperience() {
  const [params] = useSearchParams()
  const industryParam = params.get('industry')
  const [industry, setIndustry] = useState('')

  useEffect(() => {
    setIndustry(industryParam && Object.hasOwn(PARAM_TO_INDUSTRY, industryParam) ? PARAM_TO_INDUSTRY[industryParam] : '')
  }, [industryParam])

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12 xl:gap-16">
      <Bezel radius="xl" coreClassName="p-4 sm:p-6 lg:p-8">
        <h2 id="demo-form-title" className="px-2 pt-2 font-display text-h3 font-semibold text-ink-900 sm:px-3">
          Tell us about your team
        </h2>
        <p className="mt-2 px-2 text-[0.9375rem] leading-snug text-ink-600 sm:px-3">We will reply to set up a walkthrough around your trade.</p>
        <div className="mt-4">
          <DemoFormEmbed />
        </div>
        <p className="px-2 pt-2 text-[0.8125rem] leading-snug text-ink-500 sm:px-3">
          We use your details only to reply to this request. See our{' '}
          <Link to="/privacy-policy" className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600">
            Privacy Policy
          </Link>
          .
        </p>
      </Bezel>

      <DemoPanel industry={industry} />
    </div>
  )
}
