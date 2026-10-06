/**
 * Post-build audit of the prerendered site in ./dist. Checks, per page:
 *   - exactly one <h1>, and it equals the approved primary keyword (solutions/features)
 *   - <title> (≤ 60 chars, contains the primary keyword for keyword pages) and meta description (70–160 chars)
 *   - canonical URL, robots, Open Graph + Twitter tags, valid JSON-LD
 *   - heading hierarchy (no skipped levels)
 *   - every <img> has alt text
 *   - every internal link resolves to a prerendered page (broken-link check)
 *   - no duplicate titles / descriptions across pages
 *   - excluded pages (login, guides, templates, settings, standalone FSM page) are absent
 * Exit code 1 when any error is found.
 *
 * Usage: npm run build && npm run audit:seo
 */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')
const server = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const routes = JSON.parse(fs.readFileSync(path.join(dist, '.routes.json'), 'utf8'))
const routeSet = new Set(routes)

const keywordByPath = new Map()
for (const s of server.SOLUTIONS) keywordByPath.set(s.path, { keyword: s.primaryKeyword, h1: s.h1 })
for (const f of server.FEATURES) keywordByPath.set(f.path, { keyword: f.primaryKeyword, h1: f.h1 })
keywordByPath.set('/', { keyword: 'field service management software', h1: null })

const FORBIDDEN = ['/login', '/guides', '/free-templates', '/templates', '/settings', '/field-service-management', '/solutions', '/features']

const errors = []
const warnings = []
const titles = new Map()
const descriptions = new Map()

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x27;/g, "'").replace(/&#39;/g, "'")
const strip = (html) => decode(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

function fileFor(route) {
  return route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html')
}

for (const route of routes) {
  const file = fileFor(route)
  if (!fs.existsSync(file)) {
    errors.push(`${route}: prerendered file missing`)
    continue
  }
  const html = fs.readFileSync(file, 'utf8')
  const err = (m) => errors.push(`${route}: ${m}`)
  const warn = (m) => warnings.push(`${route}: ${m}`)

  // ---- head
  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) ?? [])[1] ?? '')
  const description = decode((html.match(/<meta data-seo name="description" content="([^"]*)"/) ?? [])[1] ?? '')
  const canonical = (html.match(/<link data-seo rel="canonical" href="([^"]*)"/) ?? [])[1]
  if (!title) err('missing <title>')
  if (title.length > 60) warn(`title is ${title.length} chars (>60): "${title}"`)
  if (!description) err('missing meta description')
  else if (description.length < 70 || description.length > 160) warn(`meta description is ${description.length} chars (target 70–160)`)
  const expectedCanonical = route === '/' ? 'https://fsmflow.in/' : `https://fsmflow.in${route}`
  if (canonical !== expectedCanonical) err(`canonical is ${canonical}, expected ${expectedCanonical}`)
  for (const tag of ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:card']) {
    if (!html.includes(`"${tag}"`)) err(`missing ${tag}`)
  }
  if (!/<html lang="en-IN"/.test(html)) err('missing lang="en-IN"')
  if (titles.has(title)) err(`duplicate title also used by ${titles.get(title)}`)
  titles.set(title, route)
  if (descriptions.has(description)) err(`duplicate description also used by ${descriptions.get(description)}`)
  descriptions.set(description, route)

  // ---- JSON-LD
  for (const m of html.matchAll(/<script data-seo type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1].replace(/\\u003c/g, '<'))
    } catch {
      err('invalid JSON-LD block')
    }
  }
  if (!/application\/ld\+json/.test(html)) warn('no structured data')

  // ---- headings
  const body = html.slice(html.indexOf('<body'))
  const headings = [...body.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ level: Number(m[1]), text: strip(m[2]) }))
  const h1s = headings.filter((h) => h.level === 1)
  if (h1s.length !== 1) err(`expected exactly one <h1>, found ${h1s.length}`)
  let prev = 0
  for (const h of headings) {
    if (prev && h.level > prev + 1) {
      err(`heading level skipped: h${prev} → h${h.level} ("${h.text.slice(0, 50)}")`)
      break
    }
    prev = h.level
  }
  if (!headings.some((h) => h.level === 2)) warn('no <h2> found')

  // ---- keyword rules
  const kw = keywordByPath.get(route)
  if (kw) {
    const h1 = h1s[0]?.text ?? ''
    if (kw.h1 && norm(h1) !== norm(kw.h1)) err(`H1 "${h1}" is not the exact primary keyword "${kw.h1}"`)
    if (!kw.h1 && !norm(h1).includes(norm(kw.keyword))) err(`H1 "${h1}" does not contain "${kw.keyword}"`)
    if (!norm(title).includes(norm(kw.keyword)) && !(route === '/' && norm(title).includes('field service management software'))) {
      err(`title "${title}" does not include the primary keyword "${kw.keyword}"`)
    }
    if (!norm(description).includes(norm(kw.keyword))) err(`meta description does not include "${kw.keyword}"`)
    const mainText = norm(strip(body))
    // opening content: keyword within the first ~900 chars of main content
    const mainStart = body.indexOf('<main')
    const opening = norm(strip(body.slice(mainStart, mainStart + 9000))).slice(0, 1400)
    if (!opening.includes(norm(kw.keyword))) err(`primary keyword missing from the opening content`)
    const count = mainText.split(norm(kw.keyword)).length - 1
    if (count > 25) warn(`primary keyword appears ${count} times — check for stuffing`)
    const h2WithKw = headings.some((h) => h.level >= 2 && h.level <= 3 && norm(h.text).includes(norm(kw.keyword).split(' ').slice(0, 2).join(' ')))
    if (!h2WithKw) warn('no H2/H3 with the primary keyword or a close variation')
  }

  // ---- images
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) err(`<img> without alt: ${m[0].slice(0, 80)}`)
  }

  // ---- internal links
  const links = new Set([...body.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((m) => decode(m[1])))
  for (const href of links) {
    if (/^(https?:|mailto:|tel:|javascript:)/.test(href)) continue
    if (href.startsWith('#')) {
      const id = href.slice(1)
      if (id && !html.includes(`id="${id}"`)) err(`broken in-page anchor ${href}`)
      continue
    }
    const [p, hash] = href.split('#')
    const clean = (p.split('?')[0] || '/').replace(/\/$/, '') || '/'
    if (!routeSet.has(clean)) err(`broken internal link ${href}`)
    if (FORBIDDEN.includes(clean)) err(`link to excluded page ${href}`)
    if (hash) {
      const targetFile = fileFor(clean)
      if (fs.existsSync(targetFile) && !fs.readFileSync(targetFile, 'utf8').includes(`id="${hash}"`)) err(`broken anchor ${href}`)
    }
  }
  if (/href="\/login/.test(body.slice(0, body.indexOf('</header>')))) err('Login link found in the header')
}

// Approved structure check
const expected = [
  '/', '/pricing', '/blog', '/demo', '/about', '/contact', '/privacy-policy', '/terms-and-conditions', '/refund-policy',
  ...server.SOLUTIONS.map((s) => s.path),
  ...server.FEATURES.map((f) => f.path),
]
for (const e of expected) if (!routeSet.has(e)) errors.push(`approved page missing from build: ${e}`)
for (const r of routes) {
  if (!expected.includes(r) && !r.startsWith('/blog/')) errors.push(`unapproved page in build: ${r}`)
  if (FORBIDDEN.includes(r)) errors.push(`excluded page present: ${r}`)
}
if (!fs.existsSync(path.join(dist, 'sitemap.xml'))) errors.push('sitemap.xml missing')
if (!fs.existsSync(path.join(dist, 'robots.txt'))) errors.push('robots.txt missing')
if (!fs.existsSync(path.join(dist, '404.html'))) errors.push('404.html missing')

console.log(`Audited ${routes.length} pages`)
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`)
  for (const w of warnings) console.log('  ! ' + w)
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`)
  for (const e of errors) console.log('  ✗ ' + e)
  process.exit(1)
}
console.log('\n✓ SEO audit passed with no errors')
