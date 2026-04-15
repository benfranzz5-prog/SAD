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
        <p className={`eyebrow mb-3 ${light ? 'text-green-200' : 'text-secondary'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-h2 leading-[1.02] tracking-[-0.02em] ${
          light ? 'text-primary' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-[17px] leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-green-100/80' : 'text-forest/70'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
