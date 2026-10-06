import { SITE } from '@/data/site'
import { absoluteUrl } from './seo'

export interface Faq {
  q: string
  a: string
}

type Json = Record<string, unknown>

export const organizationSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl('/favicon.svg'),
  description: SITE.description,
  areaServed: 'IN',
})

export const websiteSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE.url}/#organization` },
})

/** SoftwareApplication — name and category aligned with the page's primary topic. */
export const softwareSchema = (opts: { name: string; description: string; path: string; category?: string }): Json => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.path),
  applicationCategory: opts.category ?? 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  publisher: { '@id': `${SITE.url}/#organization` },
})

export const webPageSchema = (opts: {
  name: string
  description: string
  path: string
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'Blog'
}): Json => ({
  '@context': 'https://schema.org',
  '@type': opts.type ?? 'WebPage',
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.path),
  inLanguage: 'en-IN',
  isPartOf: { '@id': `${SITE.url}/#website` },
})

export const breadcrumbSchema = (items: { name: string; path: string }[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
})

export const faqSchema = (faqs: Faq[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const articleSchema = (opts: {
  title: string
  description: string
  path: string
  published: string
  modified?: string
  author: string
}): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.title,
  description: opts.description,
  url: absoluteUrl(opts.path),
  datePublished: opts.published,
  dateModified: opts.modified ?? opts.published,
  author: { '@type': 'Person', name: opts.author },
  publisher: { '@id': `${SITE.url}/#organization` },
  mainEntityOfPage: absoluteUrl(opts.path),
})
