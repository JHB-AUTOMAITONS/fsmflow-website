import { Camera, PenLine, RadioTower } from 'lucide-react'
import { PhoneFrame } from '@/components/product/PhoneFrame'
import { TechCompleteScreen, TechJobDetailScreen, TechJobsScreen } from '@/components/product/TechScreens'
import { cn } from '@/lib/cn'
import { FloatCard, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

/**
 * Field service app: three overlapping phones (today's jobs, job detail, completion). The
 * stage narrows gracefully: one phone on small containers, two on medium, three on wide.
 * Compact mode crops the phones at the bottom, like a peek into the app.
 */
export function FieldAppVisual({ className, compact }: FeatureVisualProps) {
  return (
    <VisualRoot className={className}>
      <div className="relative mx-auto w-full max-w-[680px]">
        <div
          className="absolute inset-x-[3%] top-[7%] bottom-[3%] overflow-hidden rounded-[40px] bg-linear-to-b from-brand-100/70 via-wash to-aqua-100/70 ring-1 ring-brand-200/70"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-dots-brand opacity-40 mask-fade-edges" />
        </div>

        <div
          className={cn('relative z-10 flex items-start justify-center px-[3%] pt-[4%]', compact && 'max-h-[21rem] overflow-hidden')}
          style={compact ? { WebkitMaskImage: 'linear-gradient(to bottom, #000 70%, transparent)', maskImage: 'linear-gradient(to bottom, #000 70%, transparent)' } : undefined}
        >
          <div className={cn('-mr-[9%] mt-9 origin-bottom -rotate-3', compact ? 'w-[44%]' : 'hidden w-[40%] @sm:block')}>
            <PhoneFrame label="Technician app screen listing today's jobs with status for each AC service call">
              <TechJobsScreen />
            </PhoneFrame>
          </div>
          <div className={cn('relative z-10', compact ? 'w-[58%]' : 'w-[76%] @sm:w-[46%]')}>
            <PhoneFrame label="Technician app job detail for an AC maintenance job with customer address, call button, unit tags and travel, arrived and working actions">
              <TechJobDetailScreen />
            </PhoneFrame>
          </div>
          {!compact && (
            <div className="-ml-[9%] mt-9 hidden w-[40%] origin-bottom rotate-3 @md:block">
              <PhoneFrame label="Technician app completion screen with parts used, photos, customer signature and complete job button">
                <TechCompleteScreen />
              </PhoneFrame>
            </div>
          )}
        </div>

        {!compact && (
          <>
            <FloatCard className="top-[6%] -left-4 w-[214px] 2xl:-left-8" delay={800}>
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-aqua-50 text-aqua-600 ring-1 ring-aqua-100">
                  <RadioTower className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] leading-tight font-semibold text-ink-900">Office updated live</p>
                  <p className="mt-0.5 font-mono text-[10.5px] text-ink-500">JOB-1024 · In progress</p>
                </div>
              </div>
            </FloatCard>
            <FloatCard className="top-[46%] -right-4 w-[206px] 2xl:-right-8" delay={1000}>
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-mint-50 text-mint-600 ring-1 ring-mint-100">
                  <PenLine className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] leading-tight font-semibold text-ink-900">Customer signed off</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-500">
                    <Camera className="size-3" aria-hidden="true" /> 2 photos attached
                  </p>
                </div>
              </div>
            </FloatCard>
          </>
        )}
      </div>
    </VisualRoot>
  )
}
