import type { Metadata } from 'next'
import { getContact, getFAQ, getSEO } from '@/lib/cms'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/sections/ContactForm'
import FAQSection from '@/components/sections/FAQSection'

export async function generateMetadata(): Promise<Metadata> {
  const seo = getSEO()
  return {
    title: seo.contact.title,
    description: seo.contact.description,
  }
}

export default function ContactPage() {
  const contact = getContact()
  const faq = getFAQ()

  return (
    <>
      <section className="pt-32 pb-16 bg-forest" aria-label="Contact header">
        <div className="container">
          <SectionTitle
            eyebrow="Get In Touch"
            title="Get A Free Quote"
            subtitle="Fill in the form and Sebastian will be in touch shortly."
            light
          />
        </div>
      </section>

      <section className="section-pad bg-bg" aria-label="Contact form and details">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — takes up more space */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar contact details */}
            <aside className="lg:col-span-2 flex flex-col gap-7" aria-label="Contact details">
              {/* Direct contact */}
              <div className="bg-primary border border-forest/10 p-7">
                <p className="eyebrow mb-4">Direct Contact</p>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-forest/50 mb-1">Phone / Text</p>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="font-heading text-[1.5rem] font-700 text-forest hover:text-secondary transition-colors"
                    >
                      {contact.phoneFormatted}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-forest/50 mb-1">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-forest hover:text-secondary transition-colors text-[15px]"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-forest/50 mb-1">Hours</p>
                    <p className="text-forest/70 text-[15px]">{contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Mobile note */}
              <div className="bg-forest text-primary p-7">
                <p className="eyebrow text-green-200/60 mb-3">Service Area</p>
                <p className="font-heading text-[1.2rem] font-700 mb-2">
                  {contact.note}
                </p>
                <p className="text-green-100/70 text-sm leading-relaxed">
                  We cover all suburbs across metropolitan Adelaide. No drop-off required — we work wherever your car is.
                </p>
              </div>

              {/* Social links */}
              {(contact.instagram !== '#' || contact.facebook !== '#') && (
                <div className="bg-primary border border-forest/10 p-7">
                  <p className="eyebrow mb-4">Follow Along</p>
                  <div className="flex gap-4">
                    {contact.instagram !== '#' && (
                      <a
                        href={contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-forest hover:text-secondary transition-colors"
                        aria-label="Instagram"
                      >
                        Instagram
                      </a>
                    )}
                    {contact.facebook !== '#' && (
                      <a
                        href={contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-forest hover:text-secondary transition-colors"
                        aria-label="Facebook"
                      >
                        Facebook
                      </a>
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faq} preview />
    </>
  )
}
