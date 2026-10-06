import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/lib/cn'

export interface Crumb {
  label: string
  href?: string
}

/** Breadcrumb trail. The last crumb is the current page (no link). */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link to={item.href} className="-my-3 inline-flex items-center rounded-md py-3 transition-colors hover:text-brand-600">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={cn(last && 'font-medium text-ink-800')}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
