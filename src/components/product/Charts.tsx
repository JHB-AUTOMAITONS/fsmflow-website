import { useId } from 'react'
import { cn } from '@/lib/cn'

/** Smooth sparkline with soft area fill. Scales to its container. */
export function Sparkline({
  data,
  className,
  stroke = '#2f66ff',
  fillFrom = 'rgb(47 102 255 / 0.22)',
  height = 40,
}: {
  data: number[]
  className?: string
  stroke?: string
  fillFrom?: string
  height?: number
}) {
  const id = useId()
  const w = 120
  const max = Math.max(...data)
  const min = Math.min(...data)
  const span = max - min || 1
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, height - 4 - ((v - min) / span) * (height - 10)] as const)
  // Catmull-Rom → cubic Bézier for a smooth line
  const d = pts.reduce((acc, p, i, arr) => {
    if (i === 0) return `M${p[0].toFixed(1)} ${p[1].toFixed(1)}`
    const p0 = arr[i - 2] ?? arr[i - 1]
    const p1 = arr[i - 1]
    const p2 = p
    const p3 = arr[i + 1] ?? p
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    return `${acc} C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  }, '')
  const last = pts[pts.length - 1]
  return (
    <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" className={cn('h-10 w-full overflow-visible', className)} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={fillFrom} />
          <stop offset="1" stopColor={fillFrom} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L${w} ${height} L0 ${height} Z`} fill={`url(#${id}-f)`} />
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <circle cx={last[0]} cy={last[1]} r="2.6" fill="#fff" stroke={stroke} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

/** Vertical bars; grow in when a parent Reveal gains .is-in. */
export function Bars({
  data,
  labels,
  highlight,
  className,
  barClassName,
}: {
  data: number[]
  labels?: string[]
  /** Index of the emphasised bar. */
  highlight?: number
  className?: string
  barClassName?: string
}) {
  const max = Math.max(...data)
  return (
    <div className={cn('flex h-full items-end gap-1.5', className)} aria-hidden="true">
      {data.map((v, i) => (
        <div key={i} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1.5">
          <div className="flex w-full flex-1 items-end">
            <div
              className={cn(
                'grow-y w-full rounded-t-[5px]',
                i === highlight ? 'bg-brand-gradient' : 'bg-brand-100',
                barClassName,
              )}
              style={{ height: `${(v / max) * 100}%`, '--d': `${i * 55}ms` } as React.CSSProperties}
            />
          </div>
          {labels && <span className="font-mono text-[9px] text-ink-500">{labels[i]}</span>}
        </div>
      ))}
    </div>
  )
}

/** Simple donut with up to ~5 segments. Values are relative. */
export function Donut({
  segments,
  className,
  thickness = 11,
  children,
}: {
  segments: { value: number; color: string; label?: string }[]
  className?: string
  thickness?: number
  children?: React.ReactNode
}) {
  const total = segments.reduce((a, s) => a + s.value, 0)
  const r = 50 - thickness / 2
  const c = 2 * Math.PI * r
  // Cumulative start of each segment, computed without mutating anything during render.
  const lengths = segments.map((s) => (s.value / total) * c)
  const offsets = lengths.map((_, i) => lengths.slice(0, i).reduce((acc, l) => acc + l, 0))
  return (
    <div className={cn('relative aspect-square', className)}>
      <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#eef2f9" strokeWidth={thickness} />
        {segments.map((s, i) => {
          const dash = Math.max(0, lengths[i] - 2)
          return (
            <circle
              key={s.color + s.value}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={thickness}
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offsets[i]}
              strokeLinecap="round"
            />
          )
        })}
      </svg>
      {children && <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>}
    </div>
  )
}

/** Horizontal meter (e.g. stock level, AMC visits used). */
export function Meter({
  value,
  tone = 'brand',
  className,
  delay = 0,
  still = false,
}: {
  /** 0–100 */
  value: number
  tone?: 'brand' | 'mint' | 'heat' | 'coral' | 'aqua'
  className?: string
  delay?: number
  /** Skip the grow-in animation (for meters outside a <Reveal>, e.g. above-the-fold hero cards). */
  still?: boolean
}) {
  const tones = {
    brand: 'bg-brand-500',
    mint: 'bg-mint-500',
    heat: 'bg-heat-500',
    coral: 'bg-coral-500',
    aqua: 'bg-aqua-500',
  } as const
  return (
    <div className={cn('h-1.5 w-full overflow-hidden rounded-full bg-ink-900/[0.07]', className)} aria-hidden="true">
      <div
        className={cn(!still && 'grow-x', 'h-full rounded-full', tones[tone])}
        style={{ width: `${Math.min(100, Math.max(0, value))}%`, '--d': `${delay}ms` } as React.CSSProperties}
      />
    </div>
  )
}
