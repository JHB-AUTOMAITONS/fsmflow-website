import { useId } from 'react'
import type { BlogPost } from '@/data/blog'
import { cn } from '@/lib/cn'

type Accent = BlogPost['accent']

/** Hex values mirror the tokens in styles/index.css (SVG attributes cannot read Tailwind classes). */
const PALETTE: Record<Accent, { from: string; to: string; line: string; soft: string; icon: string }> = {
  brand: { from: '#eef4ff', to: '#bdd3ff', line: '#2f66ff', soft: '#8db2ff', icon: 'text-brand-600' },
  aqua: { from: '#e6faff', to: '#92e4fa', line: '#00a5cf', soft: '#52d1f0', icon: 'text-aqua-600' },
  iris: { from: '#f3f1ff', to: '#cfc8ff', line: '#6554f3', soft: '#aea2ff', icon: 'text-iris-600' },
  mint: { from: '#e7f9f1', to: '#c4f0dc', line: '#0a9455', soft: '#2fcb8a', icon: 'text-mint-600' },
  heat: { from: '#fff5e3', to: '#ffe8bf', line: '#e07f00', soft: '#ffb547', icon: 'text-heat-600' },
}

/** Small deterministic string hash, so each post gets its own composition and server/client markup match. */
function hash(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/**
 * Generative cover art built only from the post's accent colour and icon:
 * soft gradient, concentric rings and airflow curves whose positions come from
 * the slug, plus a dotted corner and a bezel tile holding the icon.
 * Decorative (aria-hidden); no photos.
 */
export function PostArt({ post, className, animated = false }: { post: BlogPost; className?: string; animated?: boolean }) {
  const id = useId()
  const c = PALETTE[post.accent]
  const h = hash(post.slug)
  // Rings stay centred behind the icon (so any crop of the cover keeps them aligned); the slug varies the rest.
  const cx = 200
  const cy = 125
  const ring = 30 + (h % 14)
  const flip = (h >> 11) % 2 === 0
  const dotsX = flip ? 12 : 268
  const Icon = post.icon

  return (
    <div className={cn('relative isolate overflow-hidden', className)} aria-hidden="true">
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" focusable="false">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c.from} />
            <stop offset="1" stopColor={c.to} />
          </linearGradient>
          <pattern id={`${id}-dots`} width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.3" fill={c.line} opacity="0.35" />
          </pattern>
          <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#fff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="250" fill={`url(#${id}-bg)`} />
        <rect x={dotsX} y="14" width="120" height="84" fill={`url(#${id}-dots)`} />
        <circle cx={cx} cy={cy} r="120" fill={`url(#${id}-glow)`} />
        {[ring, ring + 30, ring + 64, ring + 102].map((r, i) => (
          <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke={c.line} strokeOpacity={0.32 - i * 0.06} strokeWidth={i === 0 ? 1.5 : 1} />
        ))}
        <path
          d={`M-20 ${190 - (h % 40)} C 90 ${120 + (h % 50)}, 160 ${250 - (h % 60)}, 270 ${160 + (h % 30)} S 380 ${100 + (h % 40)}, 430 ${150 - (h % 30)}`}
          fill="none"
          stroke={c.soft}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          className={animated ? 'flow-line-slow' : undefined}
        />
        <path
          d={`M-20 ${222 - (h % 30)} C 100 ${160 + (h % 40)}, 170 ${262 - (h % 50)}, 280 ${200 + (h % 24)} S 390 ${140 + (h % 30)}, 430 ${190 - (h % 24)}`}
          fill="none"
          stroke={c.line}
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="flex rounded-[24px] bg-white/55 p-1.5 shadow-lift ring-1 ring-white/80 backdrop-blur-sm">
          <span className={cn('flex size-14 items-center justify-center rounded-[19px] bg-white shadow-card ring-1 ring-ink-900/[0.05] sm:size-16', c.icon)}>
            <Icon className="size-6 sm:size-7" strokeWidth={1.5} />
          </span>
        </span>
      </div>
    </div>
  )
}
