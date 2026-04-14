import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'About Sebastian',
  description:
    "Meet Sebastian — Adelaide's mobile detailing specialist. 24 years old, solo operator, does every job personally. No subcontractors. No shortcuts.",
  alternates: { canonical: '/about' },
  openGraph: { url: '/about' },
}

const values = [
  {
    title: 'Personal Service',
    body: "When you book, you get Sebastian. Not a team member. Not a trainee. The guy whose name is on the van — doing your car.",
  },
  {
    title: 'Honest Assessment',
    body: "I'll tell you exactly what your car needs and what it doesn't. No upselling services that won't make a difference. Straight advice.",
  },
  {
    title: 'Obsessive Attention to Detail',
    body: "I got into detailing because I care more about how a car looks than most people think is normal. That's not a bug — that's the whole point.",
  },
  {
    title: 'Quality Over Volume',
    body: "I don't try to do 10 cars a week. I do the right number so every job gets the time it deserves. Your car doesn't get rushed.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section
        aria-labelledby="about-page-heading"
        className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">About</span>
            <h1
              id="about-page-heading"
              className="text-display uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-cream)' }}
            >
              Sebastian&apos;s{' '}
              <span style={{ color: 'var(--color-accent-light)' }}>Story</span>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              24 years old. Solo operator. Every job done personally.
            </p>
          </div>
        </div>
        {/* Decorative line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)' }}
          aria-hidden="true"
        />
      </section>

      {/* Main story section */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <div
                className="flex flex-col gap-5 text-base leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <p>
                  I started detailing other people&apos;s cars when I was 18 — initially just to fund
                  my own obsession. I quickly realised I was better at it than most, and that people
                  actually cared about the results.
                </p>
                <p>
                  By the time I was 21, it was a proper business. I invested in real equipment —
                  professional-grade polishers, ceramic coating certifications, the works. I took
                  every course I could find and practiced constantly.
                </p>
                <p>
                  Now I do this full-time. Mobile, which means I come to you. No drop-off, no
                  waiting rooms, no dealing with a front desk. You deal with me directly, start to
                  finish.
                </p>
                <p>
                  The ceramic coating work is what I&apos;m most proud of. It&apos;s the most technical
                  thing I do — surface preparation is everything — and the results speak for
                  themselves. Cars I&apos;ve coated still look the same two years later.
                </p>
                <p style={{ color: 'var(--color-cream)', fontWeight: '600' }}>
                  If you&apos;re particular about your car, I&apos;m your guy.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button as="link" href="/contact" variant="primary" size="md">
                  Book A Detail
                </Button>
                <Button as="link" href="/services" variant="secondary" size="md">
                  View Services
                </Button>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="flex flex-col gap-4">
              <div
                className="relative aspect-[3/4] border border-[var(--color-border)] overflow-hidden"
                style={{ background: 'var(--color-surface-2)' }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ color: 'var(--color-text-faint)' }}
                >
                  <p className="text-sm text-center px-8">
                    Photo of Sebastian
                    <br />
                    <span className="text-xs">(Add portrait to /public/images/)</span>
                  </p>
                </div>
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l" style={{ borderColor: 'var(--color-accent)' }} aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r" style={{ borderColor: 'var(--color-accent)' }} aria-hidden="true" />
              </div>
              {/* Quick facts */}
              <div
                className="border border-[var(--color-border)] p-5"
                style={{ background: 'var(--color-surface-1)' }}
              >
                <dl className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Based In', value: 'Adelaide, SA' },
                    { label: 'Mobile Service', value: 'Entire Metro' },
                    { label: 'Experience', value: '6+ Years' },
                    { label: 'All Jobs', value: 'Done Personally' },
                  ].map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--color-text-faint)' }}>
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-medium" style={{ color: 'var(--color-cream)' }}>
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section
        aria-labelledby="values-heading"
        className="section-padding"
        style={{ background: 'var(--color-surface-1)' }}
      >
        <div className="container-site">
          <SectionTitle
            label="How I Work"
            title="What You Can Expect"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-[var(--color-border)]" style={{ background: 'var(--color-border)' }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8"
                style={{ background: 'var(--color-surface-1)' }}
              >
                <h3
                  className="text-display text-2xl uppercase tracking-wider mb-4"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding-sm"
        style={{ background: 'var(--color-bg)' }}
        aria-label="Contact call to action"
      >
        <div className="container-site text-center">
          <h2
            className="text-display uppercase leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', color: 'var(--color-cream)' }}
          >
            Ready to see the difference?
          </h2>
          <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
            Get a quote. It&apos;s free and there&apos;s no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button as="link" href="/contact" variant="primary" size="lg">
              Get A Free Quote
            </Button>
            <a
              href="tel:+61415163873"
              className="inline-flex items-center gap-2 text-base font-semibold transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)' }}
            >
              +61 415 163 873
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
