import { useState } from 'react'
import type { BlogPost } from '@/data/blog'
import { cn } from '@/lib/cn'
import { PostArt } from './PostArt'

/**
 * The one place every blog surface (grid card, lead card, article hero) gets
 * its cover from. Renders the post's real `image` when it has one; falls back
 * to the decorative PostArt cover when it doesn't, or if the photo fails to
 * load at runtime (broken/missing file), so a bad path never shows a broken
 * image icon or an empty container.
 */
export function BlogImage({
  post,
  className,
  animated = false,
  priority = false,
}: {
  post: BlogPost
  className?: string
  animated?: boolean
  priority?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (!post.image || failed) {
    return <PostArt post={post} className={className} animated={animated} />
  }

  return (
    <div className={cn('relative isolate overflow-hidden bg-ink-50', className)}>
      <img
        src={post.image.src}
        alt={post.image.alt}
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: post.image.position ?? 'center' }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
