import { useParams } from 'react-router'
import { NotFoundView } from '@/components/layout/NotFoundView'
import { BlogArticle } from '@/components/sections/company/BlogArticle'
import { getPublishedPost } from '@/data/blog'

/** Renders published posts only. Unknown or unpublished slugs show the shared 404 view. */
export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPublishedPost(slug)
  if (!post) return <NotFoundView />
  return <BlogArticle post={post} />
}
