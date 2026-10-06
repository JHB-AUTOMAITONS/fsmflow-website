import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import type { Faq } from '@/lib/schema'

/**
 * Accessible accordion. All answers stay in the DOM (crawlable, matches FAQPage
 * JSON-LD) and collapsed ones are `inert` so keyboard and screen readers skip them.
 */
export function FaqList({ items, defaultOpen = 0, className }: { items: Faq[]; defaultOpen?: number | null; className?: string }) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const uid = useId()
  return (
    <ul className={cn('divide-y divide-ink-900/[0.08] rounded-[28px] bg-white ring-1 ring-ink-900/[0.07] shadow-card', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const btnId = `${uid}-q${i}`
        const panelId = `${uid}-a${i}`
        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group/faq flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8 md:py-6"
              >
                <span className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-900 transition-colors group-hover/faq:text-brand-600 md:text-lg">
                  {item.q}
                </span>
                <span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-500 ease-premium',
                    isOpen ? 'rotate-45 bg-brand-600 text-white' : 'bg-ink-900/5 text-ink-700 group-hover/faq:bg-brand-50',
                  )}
                  aria-hidden="true"
                >
                  <Plus className="size-4" strokeWidth={2} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              inert={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows] duration-500 ease-premium',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl px-6 pb-6 text-[1.0625rem] leading-relaxed text-ink-600 md:px-8 md:pb-7">{item.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
