import { useEffect } from 'react'
import { SITE } from '@/data/site'

const { id, url, embedScript } = SITE.demoForm

/**
 * The hosted demo-request form, embedded as an iframe.
 *
 * form_embed.js resizes the iframe to the form's height. It is loaded once and never removed: it registers
 * its listeners globally and attaches to each form iframe when that iframe announces itself, so coming back
 * to /demo through client-side navigation works without reloading the script. It is added in an effect, so
 * server HTML and the first client render are identical.
 */
export function DemoFormEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${embedScript}"]`)) return
    const script = document.createElement('script')
    script.src = embedScript
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    // While it starts up the script takes the iframe out of the page flow, so the room for the form is
    // reserved on this wrapper (the form is about 500px tall) to stop the card collapsing and jumping.
    <div className="min-h-[520px]">
      <iframe
        src={url}
        id={`inline-${id}`}
        title="Request a demo"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Book a Demo"
        data-layout-iframe-id={`inline-${id}`}
        data-form-id={id}
        style={{ width: '100%', border: 'none', display: 'block' }}
      />
    </div>
  )
}
