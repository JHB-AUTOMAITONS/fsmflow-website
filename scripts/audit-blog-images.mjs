/**
 * Blog featured-image audit. Checks every post in BLOG_POSTS (published and
 * upcoming) and the prerendered /blog pages in ./dist, so a bad image
 * association is caught before it ships:
 *   - every post's `image.src` (when set) points to a file that exists under public/
 *   - `image.alt` is present and isn't just the post title restated
 *   - no two posts in different categories share the same image (likely misassigned)
 *   - published posts without an `image` are flagged for manual review (not a build error —
 *     they fall back to the decorative PostArt cover, which is an intentional, non-misleading state)
 *   - every prerendered /blog/<slug> page actually renders an <img> (not just the SVG fallback)
 *     when the post has an `image`, and that <img>'s alt is non-empty
 *
 * Usage: npm run build && npm run audit:images
 */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')
const publicDir = path.join(root, 'public')
const server = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const publishedPosts = server.BLOG_POSTS.filter((p) => p.status === 'published')

const errors = []
const warnings = []
const needsManualReview = []

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

const byImageSrc = new Map()

for (const post of server.BLOG_POSTS) {
  const label = `${post.slug} (${post.status})`

  if (!post.image) {
    if (post.status === 'published') needsManualReview.push(`${label}: published with no featured image (showing decorative fallback)`)
    continue
  }

  const { src, alt } = post.image
  if (!src.startsWith('/')) {
    errors.push(`${label}: image.src "${src}" is not root-relative (must start with "/")`)
  } else {
    const file = path.join(publicDir, src.replace(/^\//, ''))
    if (!fs.existsSync(file)) errors.push(`${label}: image.src "${src}" has no file at public${src}`)
  }

  if (!alt || !alt.trim()) {
    errors.push(`${label}: image.alt is empty`)
  } else if (norm(alt) === norm(post.title)) {
    warnings.push(`${label}: image.alt just repeats the title — describe what the photo actually shows`)
  }

  const existing = byImageSrc.get(src)
  if (existing && existing.category !== post.category) {
    warnings.push(`${label}: image "${src}" is also used by "${existing.slug}" (category "${existing.category}") — confirm it's relevant to both`)
  }
  byImageSrc.set(src, post)
}

// ---- cross-check against the prerendered output
if (fs.existsSync(dist)) {
  for (const post of publishedPosts) {
    const file = path.join(dist, 'blog', post.slug, 'index.html')
    if (!fs.existsSync(file)) {
      errors.push(`${post.slug}: prerendered page missing at dist/blog/${post.slug}/index.html`)
      continue
    }
    const html = fs.readFileSync(file, 'utf8')
    if (post.image) {
      const imgTagMatch = html.match(new RegExp(`<img\\b[^>]*\\bsrc="${post.image.src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`))
      if (!imgTagMatch) {
        errors.push(`${post.slug}: rendered page has no <img> for image.src "${post.image.src}"`)
      } else if (!/\balt="/.test(imgTagMatch[0]) || /\balt=""/.test(imgTagMatch[0])) {
        errors.push(`${post.slug}: rendered featured image has no alt text`)
      }
    }
  }
} else {
  warnings.push('dist/ not found — skipped cross-checking prerendered pages (run `npm run build` first)')
}

console.log(`Audited ${server.BLOG_POSTS.length} blog posts (${publishedPosts.length} published)`)
const withImage = server.BLOG_POSTS.filter((p) => p.image).length
console.log(`  ${withImage} with a featured image, ${server.BLOG_POSTS.length - withImage} using the decorative fallback`)

if (needsManualReview.length) {
  console.log(`\n${needsManualReview.length} post(s) need manual image review:`)
  for (const m of needsManualReview) console.log('  ? ' + m)
}
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`)
  for (const w of warnings) console.log('  ! ' + w)
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`)
  for (const e of errors) console.log('  ✗ ' + e)
  process.exit(1)
}
console.log('\n✓ Blog image audit passed with no errors')
