import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center font-heading font-700 tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-secondary text-white hover:bg-blue-700 active:bg-blue-800',
  secondary:
    'bg-forest text-primary hover:bg-green-950 active:bg-green-900',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-forest',
  ghost:
    'text-forest hover:text-secondary underline underline-offset-4 decoration-2',
}

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-[0.1em]',
  md: 'px-7 py-3.5 text-sm tracking-[0.08em]',
  lg: 'px-9 py-4 text-base tracking-[0.08em]',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  external?: boolean
}

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  children,
  ...props
}: LinkButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}
