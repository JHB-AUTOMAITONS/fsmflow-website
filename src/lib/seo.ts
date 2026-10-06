import { SITE } from '@/data/site'

export interface SeoInput {
  /** Full <title>, already including the brand suffix. */
  title: string
  description: string
  /** Absolute-path URL, e.g. "/solutions/cctv-software". */
  path: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>[]
}

export interface HeadTag {
  tag: 'meta' | 'link' | 'script'
  attrs: Record<string, string>
  /** Inline text (JSON-LD). */
  text?: string
}

export function absoluteUrl(path: string): string {
  if (path === '/') return `${SITE.url}/`
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

/** Builds the full set of head tags for a page. Shared by the server prerender and the client. */
export function buildHead(input: SeoInput) {
  const url = absoluteUrl(input.path)
  const image = absoluteUrl(SITE.ogImage)
  const robots = input.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: input.description } },
    { tag: 'meta', attrs: { name: 'robots', content: robots } },
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    { tag: 'meta', attrs: { property: 'og:type', content: input.ogType ?? 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: SITE.locale } },
    { tag: 'meta', attrs: { property: 'og:title', content: input.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: input.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: input.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: input.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ]
  for (const block of input.jsonLd ?? []) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(block) })
  }
  return { title: input.title, tags }
}

const escapeAttr = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeText = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Server-side: serialise the head to an HTML string. Every managed tag gets data-seo for later replacement. */
export function headToHtml(head: ReturnType<typeof buildHead>): string {
  const lines = [`<title>${escapeText(head.title)}</title>`]
  for (const t of head.tags) {
    const attrs = Object.entries(t.attrs)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(' ')
    if (t.tag === 'script') {
      // JSON-LD must not contain a literal </script> sequence.
      const safe = (t.text ?? '').replace(/</g, '\\u003c')
      lines.push(`<script data-seo ${attrs}>${safe}</script>`)
    } else {
      lines.push(`<${t.tag} data-seo ${attrs} />`)
    }
  }
  return lines.join('\n    ')
}

/** Client-side: apply head tags after navigation (idempotent — replaces tags marked data-seo). */
export function applyHead(head: ReturnType<typeof buildHead>): void {
  if (typeof document === 'undefined') return
  document.title = head.title
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
  for (const t of head.tags) {
    const el = document.createElement(t.tag)
    el.setAttribute('data-seo', '')
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v)
    if (t.text) el.textContent = t.text
    document.head.appendChild(el)
  }
}
