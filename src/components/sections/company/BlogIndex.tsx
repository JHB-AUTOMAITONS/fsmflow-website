import { FileSearch, Info } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { BLOG_CATEGORIES, BLOG_POSTS, PUBLISHED_POSTS, type BlogCategory } from '@/data/blog'
import { cn } from '@/lib/cn'
import { BlogCard, FeaturedBlogCard } from './BlogCard'

type Filter = 'All' | BlogCategory
const FILTERS: Filter[] = ['All', ...BLOG_CATEGORIES]

/**
 * Category chips + featured card + grid. Filtering is client-side; the server
 * (and the first client render) always show "All".
 */
export function BlogIndex() {
  const [filter, setFilter] = useState<Filter>('All')

  const posts = useMemo(() => (filter === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter)), [filter])
  const featured = posts.find((p) => p.status === 'published') ?? posts[0]
  const rest = posts.filter((p) => p !== featured)

  return (
    <div>
      <div className="-mx-5 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:overflow-visible sm:px-0">
        <div role="group" aria-label="Filter articles by category" className="flex w-max gap-2 py-1 sm:w-auto sm:flex-wrap">
          {FILTERS.map((name) => {
            const pressed = filter === name
            return (
              <button
                key={name}
                type="button"
                aria-pressed={pressed}
                onClick={() => setFilter(name)}
                className={cn(
                  'inline-flex h-11 shrink-0 items-center rounded-full px-5 text-[0.9375rem] font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-300 ease-premium active:scale-[0.97]',
                  pressed
                    ? 'bg-brand-gradient text-white shadow-cta'
                    : 'bg-white text-ink-700 shadow-card ring-1 ring-ink-900/[0.08] hover:text-brand-700 hover:ring-brand-300',
                )}
              >
                {name}
              </button>
            )
          })}
        </div>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {posts.length === 0
          ? `No articles in ${filter} yet.`
          : `Showing ${posts.length} ${posts.length === 1 ? 'article' : 'articles'}${filter === 'All' ? '' : ` in ${filter}`}.`}
      </p>

      {PUBLISHED_POSTS.length === 0 && (
        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white p-4 text-[0.9375rem] leading-snug text-ink-600 shadow-card ring-1 ring-ink-900/[0.06] sm:items-center sm:px-5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
            <Info className="size-4" aria-hidden="true" />
          </span>
          <p>
            <strong className="font-semibold text-ink-900">Our first articles are on the way.</strong> The topics below are what we plan to cover first.
          </p>
        </div>
      )}

      {posts.length === 0 || !featured ? (
        <div className="mt-10 flex flex-col items-center rounded-[28px] bg-white px-6 py-14 text-center shadow-card ring-1 ring-ink-900/[0.06]">
          <span className="flex size-14 items-center justify-center rounded-[18px] bg-brand-50 text-brand-600 ring-1 ring-brand-100">
            <FileSearch className="size-6" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-display text-h3 font-semibold text-ink-900">No articles in {filter} yet</h2>
          <p className="mt-2 max-w-sm text-ink-600">Try another category, or see everything we are working on.</p>
          <Button variant="secondary" arrow={false} className="mt-6" onClick={() => setFilter('All')}>
            Show all articles
          </Button>
        </div>
      ) : (
        <div key={filter} className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
          <Reveal>
            <FeaturedBlogCard post={featured} />
          </Reveal>
          {rest.length > 0 && (
            <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {rest.map((post, i) => (
                <li key={post.slug}>
                  <Reveal delay={(i % 3) * 80} className="h-full">
                    <BlogCard post={post} />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
