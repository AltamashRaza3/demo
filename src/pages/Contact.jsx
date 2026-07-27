import { useState } from 'react'
import { MapPin, Phone, MessageCircle, Clock, ChevronDown, Send } from 'lucide-react'
import Seo from '../components/ui/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import MagneticButton from '../components/ui/MagneticButton.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import { company, faqs } from '../data/site.js'

export default function Contact() {
  const scope = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only form: no backend wired up. Replace with a form handler / API call.
    setSubmitted(true)
  }

  return (
    <div ref={scope}>
      <Seo
        title="Contact"
        description="Get in touch with W R Enterprises in Siwan — call, WhatsApp, or send a message for a quote on hardware, electrical, plumbing or paint supplies."
      />

      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 bg-smoke-50">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your project."
            description="Call, message us on WhatsApp, or send the form below — we usually reply within the hour during business hours."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wr grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div data-reveal className="lg:col-span-3 rounded-3xl border border-smoke-200 p-8 lg:p-10">
            {submitted ? (
              <div className="py-16 text-center">
                <h3 className="font-display font-bold text-2xl">Message received.</h3>
                <p className="mt-3 text-ink-soft">We'll get back to you shortly — or call us directly for a faster reply.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" id="name" placeholder="Your name" required />
                  <Field label="Phone Number" id="phone" placeholder="+91 00000 00000" type="tel" required />
                </div>
                <Field label="Email (optional)" id="email" placeholder="you@example.com" type="email" />
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">What do you need?</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project or the products you're looking for…"
                    className="w-full rounded-2xl bg-smoke-100 px-4 py-3.5 text-sm placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <MagneticButton as="button" type="submit" variant="solid" full>
                  <Send size={16} /> Send Message
                </MagneticButton>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div data-reveal className="rounded-3xl bg-smoke-50 border border-smoke-200 p-7 space-y-5">
              <InfoRow icon={MapPin} label="Address">
                {company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.state} {company.address.pin}
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-blue-600">{company.phone}</a>
              </InfoRow>
              <InfoRow icon={MessageCircle} label="WhatsApp">
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-blue-600">Message us</a>
              </InfoRow>
              <InfoRow icon={Clock} label="Business Hours">
                {company.hours.map((h) => (
                  <span key={h.day} className="block">{h.day}: {h.time}</span>
                ))}
              </InfoRow>
            </div>

            <div data-reveal className="rounded-3xl overflow-hidden aspect-video bg-smoke-100 grid place-items-center border border-smoke-200">
              <div className="text-center text-ink-soft px-6">
                <MapPin size={28} className="mx-auto mb-2" />
                <p className="text-sm">Google Maps embed placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-smoke-50">
        <div className="container-wr max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions." />
          <div className="mt-10 divide-y divide-smoke-200 border-t border-b border-smoke-200">
            {faqs.map((faq, i) => (
              <div key={faq.q} data-reveal>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display font-semibold text-base">{faq.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-ink-soft transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm text-ink-soft leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink mb-2">{label}</label>
      <input
        id={id}
        name={id}
        className="w-full rounded-2xl bg-smoke-100 px-4 py-3.5 text-sm placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  )
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 shrink-0">
        <Icon size={18} />
      </span>
      <div className="text-sm">
        <p className="font-semibold text-ink">{label}</p>
        <p className="mt-0.5 text-ink-soft leading-relaxed">{children}</p>
      </div>
    </div>
  )
}
