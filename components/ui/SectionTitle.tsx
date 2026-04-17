interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? 'text-cream/40' : ''}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading leading-[1.02] ${light ? 'text-cream' : 'text-green'}`}
        style={{ fontWeight: 700 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 font-body text-[17px] leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-cream/65' : 'text-green/65'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
