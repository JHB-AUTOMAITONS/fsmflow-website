import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * Light-toned phone frame for the technician app mockups. Screen content is
 * authored at ~300px wide; the frame scales with its container width.
 */
export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode
  className?: string
  /** Accessible description of what the screen shows. */
  label?: string
}) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19] w-full max-w-[290px] rounded-[2.4rem] bg-linear-to-b from-ink-100 to-ink-200 p-[7px] shadow-float ring-1 ring-ink-900/10',
        className,
      )}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      <div className="@container relative flex size-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink-900/5">
        {/* status bar + notch */}
        <div className="relative flex h-7 shrink-0 items-center justify-between px-5 pt-1 font-mono text-[9px] font-semibold text-ink-700">
          <span>10:42</span>
          <span className="absolute top-1.5 left-1/2 h-[14px] w-16 -translate-x-1/2 rounded-full bg-ink-900/90" />
          <span className="flex items-center gap-1">
            <span className="flex items-end gap-px">
              {[3, 5, 7, 9].map((h) => (
                <span key={h} className="w-[2px] rounded-sm bg-ink-700" style={{ height: h }} />
              ))}
            </span>
            <span className="h-[9px] w-[18px] rounded-[3px] border border-ink-700 p-px">
              <span className="block h-full w-[72%] rounded-[1px] bg-ink-700" />
            </span>
          </span>
        </div>
        <div className="min-h-0 flex-1">{children}</div>
        {/* home indicator */}
        <div className="flex h-4 shrink-0 items-center justify-center">
          <span className="h-1 w-20 rounded-full bg-ink-900/15" />
        </div>
      </div>
    </div>
  )
}
