import Link from 'next/link'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = 'Ready for a Proper Detail?',
  subtitle = "Get in touch and we'll sort out exactly what your car needs.",
}: CTABannerProps) {
  return (
    <section className="bg-forest py-20 px-4" aria-label="Call to action">
      <div className="container text-center">
        <div className="reveal">
          <p className="eyebrow mb-4 text-green-200/60">Get Started</p>
          <h2
            className="font-heading text-primary leading-[1.02] tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {title}
          </h2>
          <p className="text-green-100/70 text-[17px] mb-10 max-w-lg mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-secondary text-white font-heading font-700 uppercase tracking-[0.08em] text-sm px-9 py-4 hover:bg-blue-700 transition-colors"
            >
              Get A Free Quote
            </Link>
            <a
              href="tel:+61415163873"
              className="inline-flex items-center justify-center border-2 border-green-700 text-primary font-heading font-700 uppercase tracking-[0.08em] text-sm px-9 py-4 hover:border-primary transition-colors"
            >
              +61 415 163 873
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
