import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center font-body font-bold tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:  'bg-green text-cream hover:bg-green-dark',
  secondary:'bg-green-dark text-cream hover:bg-green',
  outline:  'border border-green text-green hover:bg-green hover:text-cream',
  ghost:    'text-green hover:text-green-mid underline underline-offset-4 decoration-2',
}

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[11px] tracking-[0.12em]',
  md: 'px-7 py-3.5 text-[12px] tracking-[0.1em]',
  lg: 'px-9 py-4 text-[13px] tracking-[0.1em]',
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
