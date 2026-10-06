import { createContext, useContext, useEffect } from 'react'
import { applyHead, buildHead, type SeoInput } from '@/lib/seo'

/**
 * Server prerender provides a collector; the page's <Seo/> writes into it during
 * render and the prerender script injects the result into the HTML <head>.
 * In the browser there is no collector, so <Seo/> updates document.head directly
 * (client-side navigations).
 */
export interface SeoCollector {
  current: SeoInput | null
}
export const SeoCollectorContext = createContext<SeoCollector | null>(null)

export function Seo(props: SeoInput) {
  const collector = useContext(SeoCollectorContext)
  if (collector) collector.current = props

  const serialised = JSON.stringify(props)
  useEffect(() => {
    applyHead(buildHead(JSON.parse(serialised) as SeoInput))
  }, [serialised])

  return null
}
