import { useId } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'hero' | 'band' | 'cta' | 'footer'

/**
 * Decorative "airflow" lines — the brand motif. Soft curves with a dashed overlay
 * (flowing only when `animated`). Purely decorative (aria-hidden), pointer-events none.
 */
export function FlowBackdrop({
  variant = 'band',
  className,
  animated = variant === 'cta',
}: {
  variant?: Variant
  className?: string
  /** Flowing dash animation. Off by default except in the CTA band: dash animation repaints on the main thread. */
  animated?: boolean
}) {
  const id = useId()
  const stroke = variant === 'cta' ? '#ffffff' : `url(#${id}-g)`
  const opacity = variant === 'cta' ? 0.35 : variant === 'footer' ? 0.5 : 1

  const paths: Record<Variant, string[]> = {
    hero: [
      'M-40 380 C 160 300, 260 470, 460 380 S 800 250, 1000 330 S 1240 420, 1320 300',
      'M-40 430 C 180 350, 280 520, 480 430 S 820 300, 1020 380 S 1250 470, 1320 350',
      'M-40 330 C 140 250, 240 420, 440 330 S 780 200, 980 280 S 1230 370, 1320 250',
    ],
    band: [
      'M-20 140 C 200 60, 380 220, 620 130 S 1000 40, 1220 120',
      'M-20 180 C 220 100, 400 260, 640 170 S 1020 80, 1220 160',
    ],
    cta: [
      'M-40 220 C 200 120, 360 330, 640 210 S 1000 90, 1280 200',
      'M-40 270 C 220 170, 380 380, 660 260 S 1020 140, 1280 250',
      'M-40 170 C 180 70, 340 280, 620 160 S 980 40, 1280 150',
    ],
    footer: [
      'M-20 90 C 240 20, 460 160, 700 90 S 1080 10, 1300 80',
      'M-20 130 C 260 60, 480 200, 720 130 S 1100 50, 1300 120',
    ],
  }

  const viewBox = variant === 'hero' ? '0 0 1280 620' : variant === 'cta' ? '0 0 1240 420' : '0 0 1240 260'

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={cn('pointer-events-none absolute inset-0 size-full', className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#52d1f0" stopOpacity="0" />
          <stop offset="0.3" stopColor="#52d1f0" />
          <stop offset="0.65" stopColor="#2f66ff" />
          <stop offset="1" stopColor="#6554f3" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round" opacity={opacity}>
        {paths[variant].map((d, i) => (
          <g key={d}>
            <path d={d} stroke={stroke} strokeOpacity={variant === 'cta' ? 0.5 : 0.22} strokeWidth={i === 0 ? 1.6 : 1} vectorEffect="non-scaling-stroke" />
            {i < 2 && (
              <path
                d={d}
                stroke={stroke}
                strokeOpacity={variant === 'cta' ? 0.9 : 0.6}
                strokeWidth="1.6"
                strokeDasharray={animated ? undefined : i === 0 ? '6 10' : '4 12'}
                className={animated ? (i === 0 ? 'flow-line' : 'flow-line-slow') : undefined}
                vectorEffect="non-scaling-stroke"
              />
            )}
          </g>
        ))}
      </g>
    </svg>
  )
}
