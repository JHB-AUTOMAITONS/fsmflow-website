import { ArrowRight, ArrowUpRight, LoaderCircle } from 'lucide-react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'soft' | 'ghost' | 'onBrand' | 'onBrandOutline'
type Size = 'md' | 'lg'

const base =
  'group/btn relative inline-flex select-none items-center justify-center gap-3 whitespace-nowrap rounded-full font-semibold ' +
  'transition-[transform,box-shadow,background-color,color] duration-500 ease-premium active:scale-[0.98] ' +
  'focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, { shell: string; bubble: string }> = {
  primary: {
    shell: 'bg-brand-gradient text-white shadow-cta hover:-translate-y-px hover:shadow-[0_1px_0_rgb(255_255_255/0.35)_inset,0_18px_34px_-10px_rgb(83_64_224/0.6)]',
    bubble: 'bg-white/20',
  },
  secondary: {
    shell: 'bg-white text-ink-900 ring-1 ring-ink-900/10 shadow-card hover:-translate-y-px hover:ring-brand-300 hover:shadow-lift',
    bubble: 'bg-brand-50 text-brand-600',
  },
  soft: {
    shell: 'bg-brand-50 text-brand-700 hover:bg-brand-100',
    bubble: 'bg-white text-brand-600',
  },
  ghost: {
    shell: 'text-ink-800 hover:text-brand-600',
    bubble: 'bg-ink-900/5 text-ink-700',
  },
  onBrand: {
    shell: 'bg-white text-brand-700 shadow-pop hover:-translate-y-px hover:bg-brand-50',
    bubble: 'bg-brand-100 text-brand-700',
  },
  onBrandOutline: {
    shell: 'text-white ring-1 ring-white/40 hover:bg-white/10 hover:ring-white/70',
    bubble: 'bg-white/15 text-white',
  },
}

const sizes: Record<Size, { withBubble: string; plain: string; bubble: string; text: string }> = {
  md: { withBubble: 'h-12 pl-5 pr-1.5', plain: 'h-12 px-5', bubble: 'size-9', text: 'text-[0.9375rem]' },
  lg: { withBubble: 'h-14 pl-7 pr-2', plain: 'h-14 px-7', bubble: 'size-10', text: 'text-base' },
}

interface Shared {
  variant?: Variant
  size?: Size
  /** Trailing arrow in its own circular "island". Default true except for ghost. */
  arrow?: boolean | 'up-right'
  className?: string
  children: ReactNode
}

function inner(
  { variant = 'primary', size = 'md', arrow, className, children }: Shared,
  loading = false,
) {
  const v = variants[variant]
  const s = sizes[size]
  const showArrow = arrow ?? (variant !== 'ghost')
  const Icon = arrow === 'up-right' ? ArrowUpRight : ArrowRight
  return {
    className: cn(base, v.shell, showArrow ? s.withBubble : s.plain, s.text, className),
    content: (
      <>
        <span>{children}</span>
        {showArrow && (
          <span
            className={cn(
              'flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-premium group-hover/btn:translate-x-0.5 group-hover/btn:scale-105',
              s.bubble,
              v.bubble,
            )}
            aria-hidden="true"
          >
            {loading ? <LoaderCircle className="size-4 animate-spin" /> : <Icon className="size-4" strokeWidth={2} />}
          </span>
        )}
      </>
    ),
  }
}

type ButtonProps = Shared & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & { loading?: boolean }

export function Button({ variant, size, arrow, className, children, loading, type = 'button', ...rest }: ButtonProps) {
  const { className: cls, content } = inner({ variant, size, arrow, className, children }, loading)
  return (
    <button type={type} className={cls} disabled={loading || rest.disabled} {...rest}>
      {content}
    </button>
  )
}

type LinkProps = Shared & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'>

const isExternal = (href: string) => /^(https?:|mailto:|tel:|#)/.test(href)

export function ButtonLink({ variant, size, arrow, className, children, href, ...rest }: LinkProps) {
  const { className: cls, content } = inner({ variant, size, arrow, className, children })
  if (isExternal(href)) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }
  return (
    <Link to={href} className={cls} {...rest}>
      {content}
    </Link>
  )
}

/** Inline text link with a small arrow — for "Learn more" style links inside cards. */
export function TextLink({
  href,
  children,
  className,
  tone = 'brand',
}: {
  href: string
  children: ReactNode
  className?: string
  tone?: 'brand' | 'ink'
}) {
  return (
    <Link
      to={href}
      className={cn(
        'group/link inline text-[0.9375rem] leading-snug font-semibold transition-colors duration-300',
        tone === 'brand' ? 'text-brand-600 hover:text-brand-800' : 'text-ink-800 hover:text-brand-600',
        className,
      )}
    >
      {children}
      <ArrowRight
        className="ml-1.5 inline size-4 align-[-0.2em] transition-transform duration-500 ease-premium group-hover/link:translate-x-1"
        strokeWidth={2}
        aria-hidden="true"
      />
    </Link>
  )
}
