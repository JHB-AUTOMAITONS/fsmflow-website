import { useId, useRef } from 'react'
import { useAlongPath } from '@/hooks/useAlongPath'
import { cn } from '@/lib/cn'

/**
 * Stylised service-area map (no real map tiles): city blocks, a coastline,
 * technician pins and a live route with a moving navigation arrow.
 * Pure SVG — scales with its container; the arrow stops under reduced motion.
 */
type PinTone = 'brand' | 'aqua' | 'iris' | 'mint' | 'heat'

const TONE: Record<PinTone, string> = {
  brand: '#2f66ff',
  aqua: '#00a5cf',
  iris: '#6554f3',
  mint: '#12b76a',
  heat: '#ff9f1c',
}

interface Pin {
  x: number
  y: number
  initials: string
  tone: PinTone
  pulse?: boolean
}

const PINS: Pin[] = [
  { x: 88, y: 74, initials: 'RK', tone: 'brand' },
  { x: 176, y: 152, initials: 'AS', tone: 'aqua', pulse: true },
  { x: 66, y: 214, initials: 'IK', tone: 'iris' },
  { x: 262, y: 236, initials: 'SP', tone: 'mint' },
  { x: 296, y: 104, initials: 'KR', tone: 'heat', pulse: true },
  { x: 150, y: 262, initials: 'FM', tone: 'brand' },
]

const COLS = [8, 84, 160, 236, 306]
const ROWS = [8, 78, 148, 218, 288]
// deterministic "land use": 2 = park
const PARKS = new Set(['1-1', '3-2', '0-3'])

const ROUTE = 'M176 152 C 196 146, 208 126, 226 120 S 262 108, 296 104'

export function CityMap({
  className,
  compact,
  showEta = true,
}: {
  className?: string
  /** Hide the area labels (for very small renders). */
  compact?: boolean
  showEta?: boolean
}) {
  const id = useId()
  const routeRef = useRef<SVGPathElement>(null)
  const arrowRef = useRef<SVGGElement>(null)
  useAlongPath(routeRef, arrowRef, { duration: 7000, rotate: true, pingPong: true, start: 0.08 })

  return (
    <svg viewBox="0 0 400 300" className={cn('size-full', className)} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-sea`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c6f1ff" />
          <stop offset="1" stopColor="#92e4fa" />
        </linearGradient>
        <linearGradient id={`${id}-route`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f66ff" />
          <stop offset="1" stopColor="#6554f3" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="#eef3fc" />

      {/* blocks */}
      {COLS.map((x, ci) =>
        ROWS.slice(0, -1).map((y, ri) => {
          const w = (COLS[ci + 1] ?? 392) - x - 8
          const h = ROWS[ri + 1] - y - 8
          const park = PARKS.has(`${ci}-${ri}`)
          return (
            <rect
              key={`${ci}-${ri}`}
              x={x}
              y={y}
              width={Math.max(0, w)}
              height={h}
              rx="7"
              fill={park ? '#d8f4e6' : '#ffffff'}
              stroke="#0b1736"
              strokeOpacity="0.045"
            />
          )
        }),
      )}

      {/* diagonal avenue */}
      <path d="M-10 262 L 410 38" stroke="#0b1736" strokeOpacity="0.06" strokeWidth="13" strokeLinecap="round" fill="none" />
      <path d="M-10 262 L 410 38" stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M-10 262 L 410 38" stroke="#ffb547" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="5 6" fill="none" />

      {/* coastline */}
      <path d="M352 0 C 338 70, 372 130, 346 190 S 356 270, 340 300 L400 300 L400 0 Z" fill={`url(#${id}-sea)`} />
      <path d="M352 0 C 338 70, 372 130, 346 190 S 356 270, 340 300" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="2" />

      {!compact && (
        <g fontFamily="'JetBrains Mono Variable', monospace" fontSize="7" fontWeight="600" letterSpacing="1.2" fill="#8793b3">
          <text x="48" y="62">ANNA NAGAR</text>
          <text x="148" y="190">T. NAGAR</text>
          <text x="226" y="278">ADYAR</text>
          <text x="22" y="252">GUINDY</text>
          <text x="302" y="86">OMR</text>
        </g>
      )}

      {/* route */}
      <path d={ROUTE} fill="none" stroke="#2f66ff" strokeOpacity="0.18" strokeWidth="7" strokeLinecap="round" />
      <path ref={routeRef} d={ROUTE} fill="none" stroke={`url(#${id}-route)`} strokeWidth="2.6" strokeLinecap="round" className="flow-line" />

      {/* destination */}
      <g transform="translate(296 104)">
        <circle r="14" fill="#f4533f" opacity="0.12" />
        <path d="M0 -17c-7 0-11 5-11 10 0 8 11 18 11 18s11-10 11-18c0-5-4-10-11-10z" fill="#f4533f" />
        <circle cy="-7" r="4" fill="#fff" />
      </g>
      {showEta && (
        <g transform="translate(212 86)">
          <rect width="74" height="20" rx="10" fill="#fff" stroke="#0b1736" strokeOpacity="0.1" />
          <circle cx="11" cy="10" r="3" fill="#00a5cf" />
          <text x="19" y="13.5" fontFamily="'Figtree Variable', sans-serif" fontSize="9" fontWeight="700" fill="#0b1736">
            ETA 12 min
          </text>
        </g>
      )}

      {/* technician pins */}
      {PINS.map((p) => (
        <g key={p.initials} transform={`translate(${p.x} ${p.y})`}>
          {p.pulse && <circle r="11" fill={TONE[p.tone]} className="origin-center animate-pulse-ring [transform-box:fill-box]" opacity="0.35" />}
          <circle r="11.5" fill="#fff" stroke={TONE[p.tone]} strokeWidth="2.2" />
          <text y="3" textAnchor="middle" fontFamily="'Figtree Variable', sans-serif" fontSize="8" fontWeight="800" fill="#0b1736">
            {p.initials}
          </text>
        </g>
      ))}

      {/* moving navigation arrow */}
      {/* Pre-positioned at start=0.08 on the route so it is correct in server HTML / un-hydrated sections. */}
      <g ref={arrowRef} transform="translate(185.65 147.82) rotate(-29.9)">
        <circle r="9" fill="#fff" stroke="#2f66ff" strokeWidth="1.5" />
        <path d="M-4 3.5 L5 0 L-4 -3.5 L-2 0 Z" fill="#2f66ff" />
      </g>
    </svg>
  )
}
