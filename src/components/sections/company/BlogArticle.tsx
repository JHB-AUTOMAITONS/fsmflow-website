import { ArrowLeft, CalendarDays, Clock, Lightbulb, UserRound } from 'lucide-react'
import { Link } from 'react-router'
import { Tag } from '@/components/product/StatusPill'
import { Seo } from '@/components/seo/Seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Container } from '@/components/ui/Container'
import { CtaBand } from '@/components/ui/CtaBand'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { PUBLISHED_POSTS, type BlogBlock, type BlogPost } from '@/data/blog'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { BlogCard } from './BlogCard'
import { PostArt } from './PostArt'

const SUFFIX = ' | FSMFlow'

/** Keeps "<title> | FSMFlow" within 60 characters by shortening the article title at a word boundary. */
function seoTitle(title: string): string {
  const full = `${title}${SUFFIX}`
  if (full.length <= 60) return full
  const room = 60 - SUFFIX.length - 1
  const cut = title.slice(0, room).replace(/\s+\S*$/, '')
  return `${cut}…${SUFFIX}`
}

function trimDescription(text: string): string {
  if (text.length <= 160) return text
  return `${text.slice(0, 157).replace(/\s+\S*$/, '')}…`
}

/** UTC + en-IN so server and browser always print the same date (no hydration mismatch). */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>
    case 'h2':
      return <h2 id={slugify(block.text)}>{block.text}</h2>
    case 'h3':
      return <h3>{block.text}</h3>
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div role="note" className="my-8 flex gap-4 rounded-[22px] bg-brand-50 p-5 ring-1 ring-brand-100 sm:p-6">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-card ring-1 ring-brand-100">
            <Lightbulb className="size-5" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div className="text-[1.0625rem] leading-relaxed text-ink-800">{block.text}</div>
        </div>
      )
  }
}

/** Article template. Rendered only for published posts (see BlogPostPage). */
export function BlogArticle({ post }: { post: BlogPost }) {
  const path = `/blog/${post.slug}`
  const description = trimDescription(post.excerpt)
  const related = [
    ...PUBLISHED_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...PUBLISHED_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3)

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path },
    ]),
    ...(post.publishedAt && post.author
      ? [articleSchema({ title: post.title, description, path, published: post.publishedAt, modified: post.updatedAt, author: post.author })]
      : []),
  ]

  return (
    <>
      <Seo title={seoTitle(post.title)} description={description} path={path} ogType="article" jsonLd={jsonLd} />

      <article aria-labelledby="post-title">
        <header className="relative isolate overflow-hidden pt-8 pb-10 md:pt-14 md:pb-14">
          <div className="absolute inset-0 -z-10 bg-dots opacity-50 mask-fade-b" aria-hidden="true" />
          <Container size="narrow">
            <div className="hero-in mb-8">
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
            </div>
            <div className="hero-in flex flex-wrap items-center gap-x-3 gap-y-2" style={{ '--d': '60ms' } as React.CSSProperties}>
              <Tag tone={post.accent} className="px-2 py-1 text-xs">
                {post.category}
              </Tag>
              <span className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-ink-500">
                <Clock className="size-3.5" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
            </div>
            <h1
              id="post-title"
              className="hero-in mt-5 text-[clamp(2rem,1.35rem+2.5vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.034em] text-ink-900"
              style={{ '--d': '120ms' } as React.CSSProperties}
            >
              {post.title}
            </h1>
            <p className="text-lead hero-in mt-5 text-ink-600" style={{ '--d': '200ms' } as React.CSSProperties}>
              {post.excerpt}
            </p>
            <div className="hero-in mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9375rem] text-ink-600" style={{ '--d': '260ms' } as React.CSSProperties}>
              {post.author && (
                <span className="inline-flex items-center gap-2">
                  <UserRound className="size-4 text-ink-500" aria-hidden="true" />
                  <span className="sr-only">Author: </span>
                  {post.author}
                </span>
              )}
              {post.publishedAt && (
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4 text-ink-500" aria-hidden="true" />
                  <span className="sr-only">Published: </span>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </span>
              )}
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <span>
                  Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                </span>
              )}
            </div>
          </Container>
        </header>

        <Container size="wide">
          <div className="hero-in-scale overflow-hidden rounded-[28px] ring-1 ring-ink-900/[0.06] shadow-card md:rounded-[36px]" style={{ '--d': '300ms' } as React.CSSProperties}>
            <PostArt post={post} animated className="aspect-[16/9] md:aspect-[21/9]" />
          </div>
        </Container>

        <Section tone="white" spacing="none" className="pt-12 pb-16 md:pt-16 md:pb-24">
          <Container size="narrow">
            <div className="prose-fsm">
              {(post.body ?? []).map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
            <div className="mt-12 border-t border-ink-900/[0.08] pt-8">
              <Link to="/blog" className="group inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-brand-600 hover:text-brand-800">
                <ArrowLeft className="size-4 transition-transform duration-500 ease-premium group-hover:-translate-x-1" aria-hidden="true" />
                All articles
              </Link>
            </div>
          </Container>
        </Section>
      </article>

      {related.length > 0 && (
        <Section tone="mist" aria-labelledby="related-heading" spacing="tight">
          <Container size="wide">
            <Reveal>
              <h2 id="related-heading" className="text-h2 font-semibold text-ink-900">
                Keep reading
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {related.map((p, i) => (
                <li key={p.slug}>
                  <Reveal delay={i * 80} className="h-full">
                    <BlogCard post={p} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <CtaBand
        title="See FSMFlow with your own workflow"
        text="Book a demo and we will show how jobs, technicians, spare parts, invoices and AMC fit together for your kind of business."
        secondary={{ label: 'Browse the blog', href: '/blog' }}
      />
    </>
  )
}
