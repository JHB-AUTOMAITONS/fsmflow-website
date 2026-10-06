import { ArrowRight, Clock, Hourglass } from 'lucide-react'
import { Link } from 'react-router'
import { Tag } from '@/components/product/StatusPill'
import { Bezel } from '@/components/ui/Bezel'
import type { BlogPost } from '@/data/blog'
import { cn } from '@/lib/cn'
import { PostArt } from './PostArt'

function ReadTime({ minutes }: { minutes: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink-500">
      <Clock className="size-3.5" aria-hidden="true" />
      {minutes} min read
    </span>
  )
}

/** Published posts show a read link; upcoming posts show a quiet "Coming soon" state and are never links. */
function Status({ post }: { post: BlogPost }) {
  if (post.status === 'published') {
    return (
      <span className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-600 transition-colors group-hover:text-brand-800">
        Read article
        <ArrowRight className="size-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" aria-hidden="true" />
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 text-[0.8125rem] font-semibold text-ink-600 ring-1 ring-ink-900/[0.06]">
      <Hourglass className="size-3.5" aria-hidden="true" />
      Coming soon
    </span>
  )
}

function Title({ post, className }: { post: BlogPost; className?: string }) {
  if (post.status === 'published') {
    return (
      <Link to={`/blog/${post.slug}`} className={cn('after:absolute after:inset-0 after:content-[""] hover:text-brand-700', className)}>
        {post.title}
      </Link>
    )
  }
  return <span className={className}>{post.title}</span>
}

export function BlogCard({ post }: { post: BlogPost }) {
  const published = post.status === 'published'
  return (
    <article className="group relative h-full">
      <Bezel interactive={published} className="h-full" coreClassName="flex h-full flex-col overflow-hidden">
        <PostArt post={post} className="aspect-[16/10]" />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Tag tone={post.accent} className="px-2 py-1 text-xs">
              {post.category}
            </Tag>
            <ReadTime minutes={post.readMinutes} />
          </div>
          <h3 className="mt-4 font-display text-[1.25rem] leading-[1.22] font-semibold tracking-[-0.02em] text-ink-900">
            <Title post={post} />
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">{post.excerpt}</p>
          <div className="mt-auto pt-6">
            <Status post={post} />
          </div>
        </div>
      </Bezel>
    </article>
  )
}

/** Large horizontal card for the lead story. */
export function FeaturedBlogCard({ post }: { post: BlogPost }) {
  const published = post.status === 'published'
  return (
    <article className="group relative">
      <Bezel radius="xl" interactive={published} coreClassName="grid overflow-hidden lg:grid-cols-[1.05fr_1fr]">
        <PostArt post={post} animated className="aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]" />
        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="eyebrow-mono text-brand-600">{published ? 'Latest article' : 'Up next'}</span>
            <Tag tone={post.accent} className="px-2 py-1 text-xs">
              {post.category}
            </Tag>
            <ReadTime minutes={post.readMinutes} />
          </div>
          <h3 className="mt-5 font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.35rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink-900">
            <Title post={post} />
          </h3>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink-600">{post.excerpt}</p>
          <div className="mt-7">
            <Status post={post} />
          </div>
        </div>
      </Bezel>
    </article>
  )
}
