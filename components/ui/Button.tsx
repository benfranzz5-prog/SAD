import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button'
  href?: never
}

interface ButtonAsLink extends BaseProps {
  as: 'link'
  href: string
  external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-widest',
  md: 'px-7 py-3.5 text-xs tracking-widest',
  lg: 'px-10 py-4 text-sm tracking-widest',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-[var(--color-accent)] text-[var(--color-cream)]',
    'border border-[var(--color-accent)]',
    'hover:bg-[var(--color-accent-light)] hover:border-[var(--color-accent-light)]',
    'focus-visible:ring-2 focus-visible:ring-[var(--color-cream)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
    'transition-all duration-300',
  ].join(' '),
  secondary: [
    'bg-transparent text-[var(--color-cream)]',
    'border border-[var(--color-cream)]',
    'hover:bg-[var(--color-cream)] hover:text-[var(--color-bg)]',
    'focus-visible:ring-2 focus-visible:ring-[var(--color-cream)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
    'transition-all duration-300',
  ].join(' '),
  ghost: [
    'bg-transparent text-[var(--color-text-muted)]',
    'border border-transparent',
    'hover:text-[var(--color-cream)] hover:border-[var(--color-border)]',
    'focus-visible:ring-2 focus-visible:ring-[var(--color-cream)]',
    'transition-all duration-300',
  ].join(' '),
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props

  const baseClass = [
    'inline-flex items-center justify-center gap-2',
    'font-[var(--font-dm-sans)] font-semibold uppercase',
    'rounded-none',
    'cursor-pointer',
    'select-none',
    'whitespace-nowrap',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (props.as === 'link') {
    const { href, external } = props
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    )
  }

  const { as: _as, href: _href, ...rest } = props as ButtonAsButton & { href?: never; as?: 'button' }
  return (
    <button className={baseClass} {...rest}>
      {children}
    </button>
  )
}

export default Button
