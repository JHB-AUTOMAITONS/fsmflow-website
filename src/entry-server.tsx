import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { matchPage } from '@/routes'
import App from './App'
import { SeoCollectorContext, type SeoCollector } from './components/seo/Seo'
import { FEATURES } from './data/features'
import { getAllRoutes } from './data/routes'
import { SOLUTIONS } from './data/solutions'
import { buildHead, headToHtml, type SeoInput } from './lib/seo'

export interface RenderResult {
  html: string
  seo: SeoInput | null
  /** Source file of the matched page chunk (for modulepreload hints). */
  pageFile: string | undefined
}

/**
 * Renders one URL to an HTML string + the page's SEO data. Used only by scripts/prerender.mjs.
 * `renderToString` (not streaming) so the whole page lands inside <main> in a single pass; the
 * server build swaps in an eager route table, so nothing suspends.
 */
export async function render(url: string): Promise<RenderResult> {
  const collector: SeoCollector = { current: null }
  const html = renderToString(
    <SeoCollectorContext.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </SeoCollectorContext.Provider>,
  )
  return { html, seo: collector.current, pageFile: matchPage(url)?.file }
}

// Re-exported for the prerender / audit scripts.
export { buildHead, headToHtml, getAllRoutes, FEATURES, SOLUTIONS }
