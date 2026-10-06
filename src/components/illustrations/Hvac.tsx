import { useId } from 'react'
import { cn } from '@/lib/cn'

/**
 * Clean geometric HVAC illustrations (no stock art). All are inline SVG, scale
 * with their container, are decorative by default (aria-hidden) and animate with
 * transform/dash-offset only. Pass `title` to expose one as an image.
 */
interface IllusProps {
  className?: string
  /** If set, the SVG becomes role="img" with this label (use for informative images). */
  title?: string
  /** Disable ambient motion (e.g. for small menu thumbnails). */
  still?: boolean
}

const a11y = (title?: string) =>
  title ? ({ role: 'img', 'aria-label': title } as const) : ({ 'aria-hidden': true, focusable: false } as const)

/** Wall-mounted split AC indoor unit with cool airflow. */
export function SplitAc({ className, title, still }: IllusProps) {
  const id = useId()
  const flow = still ? '' : 'flow-line'
  return (
    <svg viewBox="0 0 360 250" className={cn('w-full', className)} {...a11y(title)}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e9eff9" />
        </linearGradient>
        <linearGradient id={`${id}-air`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1ebde3" />
          <stop offset="1" stopColor="#2f66ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* soft ground shadow */}
      <ellipse cx="180" cy="126" rx="150" ry="9" fill="#0b1736" opacity="0.07" />
      {/* body */}
      <rect x="20" y="16" width="320" height="104" rx="28" fill={`url(#${id}-body)`} stroke="#0b1736" strokeOpacity="0.1" />
      <rect x="21" y="17" width="318" height="102" rx="27" fill="none" stroke={`url(#${id}-top)`} strokeOpacity="0.9" />
      {/* top intake slits */}
      <g stroke="#0b1736" strokeOpacity="0.1" strokeWidth="2.4" strokeLinecap="round">
        <path d="M54 33h150" />
        <path d="M54 42h150" />
        <path d="M54 51h150" />
      </g>
      {/* front panel seam */}
      <path d="M22 84c52 9 264 9 316 0" fill="none" stroke="#0b1736" strokeOpacity="0.09" />
      {/* display */}
      <rect x="262" y="34" width="58" height="26" rx="9" fill="#0b1736" />
      <text x="291" y="52" textAnchor="middle" fontFamily="'JetBrains Mono Variable', monospace" fontSize="13" fontWeight="600" fill="#52d1f0">
        24°C
      </text>
      <circle cx="274" cy="74" r="2.6" fill="#12b76a" />
      <circle cx="284" cy="74" r="2.6" fill="#1ebde3" />
      {/* louver slot + flap */}
      <rect x="52" y="96" width="256" height="12" rx="6" fill="#0b1736" opacity="0.1" />
      <path d="M54 104h252l-8 9H62z" fill="#fff" stroke="#0b1736" strokeOpacity="0.14" strokeLinejoin="round" />
      {/* airflow */}
      <g fill="none" strokeLinecap="round" stroke={`url(#${id}-air)`} strokeWidth="2.2">
        <path d="M84 118c-6 30 10 54 -8 100" className={flow} strokeDasharray="6 10" />
        <path d="M132 118c-4 34 14 56 -4 112" className={flow} strokeDasharray="6 10" style={{ animationDelay: '-0.6s' }} />
        <path d="M180 118c2 36 16 58 0 124" className={flow} strokeDasharray="6 10" style={{ animationDelay: '-1.2s' }} />
        <path d="M228 118c8 34 24 54 10 112" className={flow} strokeDasharray="6 10" style={{ animationDelay: '-0.3s' }} />
        <path d="M276 118c12 30 30 48 24 96" className={flow} strokeDasharray="6 10" style={{ animationDelay: '-0.9s' }} />
      </g>
    </svg>
  )
}

/** Outdoor condenser unit with a spinning fan. */
export function OutdoorUnit({ className, title, still }: IllusProps) {
  const id = useId()
  return (
    <svg viewBox="0 0 240 220" className={cn('w-full', className)} {...a11y(title)}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e6edf8" />
        </linearGradient>
        <radialGradient id={`${id}-hub`} cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#8db2ff" />
          <stop offset="1" stopColor="#2f66ff" />
        </radialGradient>
      </defs>
      <ellipse cx="120" cy="204" rx="104" ry="8" fill="#0b1736" opacity="0.08" />
      {/* feet */}
      <rect x="34" y="188" width="30" height="10" rx="3" fill="#b1bbd2" />
      <rect x="176" y="188" width="30" height="10" rx="3" fill="#b1bbd2" />
      {/* body */}
      <rect x="14" y="22" width="212" height="170" rx="22" fill={`url(#${id}-body)`} stroke="#0b1736" strokeOpacity="0.1" />
      {/* fan housing */}
      <circle cx="98" cy="106" r="66" fill="#f4f7fc" stroke="#0b1736" strokeOpacity="0.1" />
      <circle cx="98" cy="106" r="58" fill="none" stroke="#0b1736" strokeOpacity="0.08" strokeWidth="1.4" />
      <circle cx="98" cy="106" r="46" fill="none" stroke="#0b1736" strokeOpacity="0.07" strokeWidth="1.4" />
      <circle cx="98" cy="106" r="34" fill="none" stroke="#0b1736" strokeOpacity="0.06" strokeWidth="1.4" />
      {/* blades */}
      <g className={still ? undefined : 'animate-fan'} style={{ transformOrigin: '98px 106px' }}>
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            d="M98 106c-7-12-8-30 2-46 10 6 14 20 6 40-1 3-4 6-8 6z"
            fill="#2f66ff"
            opacity="0.16"
            transform={`rotate(${deg} 98 106)`}
          />
        ))}
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={`s${deg}`}
            d="M98 106c-7-12-8-30 2-46"
            fill="none"
            stroke="#2f66ff"
            strokeOpacity="0.45"
            strokeWidth="1.6"
            strokeLinecap="round"
            transform={`rotate(${deg} 98 106)`}
          />
        ))}
      </g>
      <circle cx="98" cy="106" r="11" fill={`url(#${id}-hub)`} />
      <circle cx="98" cy="106" r="3.5" fill="#fff" opacity="0.9" />
      {/* grille spokes */}
      <g stroke="#0b1736" strokeOpacity="0.1" strokeWidth="1.4">
        <path d="M98 40v132" />
        <path d="M32 106h132" />
        <path d="M51 59l94 94" />
        <path d="M145 59l-94 94" />
      </g>
      {/* side vents */}
      <g stroke="#0b1736" strokeOpacity="0.14" strokeWidth="3" strokeLinecap="round">
        {[52, 66, 80, 94, 108, 122, 136, 150].map((y) => (
          <path key={y} d={`M182 ${y}h28`} />
        ))}
      </g>
      <rect x="180" y="34" width="32" height="8" rx="4" fill="#2f66ff" opacity="0.14" />
    </svg>
  )
}

/** Service van, side view. */
export function ServiceVan({ className, title }: IllusProps) {
  const id = useId()
  return (
    <svg viewBox="0 0 300 140" className={cn('w-full', className)} {...a11y(title)}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e4ebf7" />
        </linearGradient>
        <linearGradient id={`${id}-stripe`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f66ff" />
          <stop offset="1" stopColor="#6554f3" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="128" rx="128" ry="6" fill="#0b1736" opacity="0.09" />
      {/* roof rack + ladder */}
      <g stroke="#8793b3" strokeWidth="2.4" strokeLinecap="round">
        <path d="M40 26h140" />
        <path d="M52 26v8M96 26v8M140 26v8M172 26v8" />
        <path d="M44 20h132" strokeWidth="1.6" />
      </g>
      {/* box + cab */}
      <path
        d="M22 40a8 8 0 0 1 8-8h150a8 8 0 0 1 8 8v66H22z"
        fill={`url(#${id}-body)`}
        stroke="#0b1736"
        strokeOpacity="0.12"
      />
      <path
        d="M188 52h40c6 0 11 3 14 8l16 24c2 3 3 6 3 10v12h-73z"
        fill={`url(#${id}-body)`}
        stroke="#0b1736"
        strokeOpacity="0.12"
      />
      {/* window */}
      <path d="M198 60h28c3 0 5 1 6 3l11 18h-45z" fill="#bdd3ff" stroke="#0b1736" strokeOpacity="0.14" />
      <path d="M205 62l-8 19" stroke="#fff" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
      {/* brand stripe */}
      <rect x="22" y="82" width="214" height="9" fill={`url(#${id}-stripe)`} />
      <circle cx="46" cy="62" r="9" fill="#2f66ff" />
      <path d="M42 67V58c0-2 1-3 3-3h6" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M42 62h5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <g stroke="#0b1736" strokeOpacity="0.14" strokeWidth="1.4" strokeLinecap="round">
        <path d="M66 56h72" />
        <path d="M66 66h48" />
      </g>
      {/* headlight + bumper */}
      <rect x="254" y="92" width="10" height="7" rx="3" fill="#ffb547" />
      <rect x="22" y="104" width="256" height="6" rx="3" fill="#b1bbd2" opacity="0.6" />
      {/* wheels */}
      {[78, 222].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="112" r="19" fill="#0b1736" />
          <circle cx={cx} cy="112" r="10" fill="#e7ecf6" />
          <circle cx={cx} cy="112" r="3.5" fill="#8793b3" />
        </g>
      ))}
    </svg>
  )
}

/** Refrigerant gauge / thermostat dial used as a small accent. */
export function ThermoDial({ className, title, value = 24 }: IllusProps & { value?: number }) {
  const id = useId()
  return (
    <svg viewBox="0 0 120 120" className={cn('size-full', className)} {...a11y(title)}>
      <defs>
        <linearGradient id={`${id}-arc`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1ebde3" />
          <stop offset="0.6" stopColor="#2f66ff" />
          <stop offset="1" stopColor="#ffb547" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="#fff" stroke="#0b1736" strokeOpacity="0.08" />
      <path d="M26 88a46 46 0 1 1 68 0" fill="none" stroke="#0b1736" strokeOpacity="0.08" strokeWidth="9" strokeLinecap="round" />
      <path d="M26 88a46 46 0 0 1 36-69" fill="none" stroke={`url(#${id}-arc)`} strokeWidth="9" strokeLinecap="round" />
      <text x="60" y="66" textAnchor="middle" fontFamily="'Bricolage Grotesque Variable', sans-serif" fontSize="28" fontWeight="700" fill="#0b1736">
        {value}°
      </text>
      <text x="60" y="84" textAnchor="middle" fontFamily="'JetBrains Mono Variable', monospace" fontSize="8" fontWeight="600" letterSpacing="1.2" fill="#5a6a92">
        COOLING
      </text>
    </svg>
  )
}
