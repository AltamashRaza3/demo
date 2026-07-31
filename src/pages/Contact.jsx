import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ChevronDown,
  Send,
} from "lucide-react";
import Seo from "../components/common/Seo.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import MagneticButton from "../components/common/MagneticButton.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { company, faqs } from "../data/site.js";

export default function Contact() {
  const scope = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

const [mapStatus, setMapStatus] = useState("loading");

useEffect(() => {
  const timer = setTimeout(() => {
    setMapStatus((current) => (current === "loading" ? "error" : current));
  }, 8000); // wait 8 seconds

  return () => clearTimeout(timer);
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only form: no backend wired up. Replace with a form handler / API call.
    setSubmitted(true);
  };

  return (
    <div ref={scope}>
      <Seo
        title="Contact"
        description="Visit W R Enterprises at Kutub Chhapra More, Siswan–Siwan Road, Siwan, Bihar 841241. Call +91 93517 85674 or WhatsApp us for hardware, electrical, plumbing and paint supplies."
      />

      {/* Hero */}
      <section className="bg-smoke-50 pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Contact"
            title="Visit W R Enterprises or Get in Touch."
            description="Visit our store, call us directly, chat on WhatsApp, or send the form below. We usually respond within an hour during business hours."
          />
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-wr grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact Form */}
          <div
            data-reveal
            className="rounded-3xl border border-smoke-200 p-6 sm:p-8 lg:col-span-3 lg:p-10"
          >
            {submitted ? (
              <div className="py-16 text-center">
                <h3 className="font-display text-2xl font-bold">Thank you!</h3>

                <p className="mt-3 text-ink-soft">
                  Your message has been received. We'll contact you shortly. For
                  urgent enquiries, please call us directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />

                  <Field
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    placeholder="+91 93517 85674"
                    required
                  />
                </div>

                <Field
                  label="Email (Optional)"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    How can we help?
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us about the products or services you need..."
                    className="w-full rounded-2xl bg-smoke-100 px-4 py-3.5 text-sm placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <MagneticButton as="button" type="submit" variant="solid" full>
                  <Send size={16} />
                  Send Message
                </MagneticButton>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-5 lg:col-span-2">
            <div
              data-reveal
              className="rounded-3xl border border-smoke-200 bg-smoke-50 p-7"
            >
              <div className="space-y-6">
                <InfoRow icon={MapPin} label="Address">
                  Kutub Chhapra More
                  <br />
                  Siswan–Siwan Road
                  <br />
                  Siwan, Bihar 841241
                </InfoRow>

                <InfoRow icon={Phone} label="Phone">
                  <a
                    href="tel:+919351785674"
                    className="transition-colors hover:text-blue-600"
                  >
                    +91 93517 85674
                  </a>
                </InfoRow>

                <InfoRow icon={MessageCircle} label="WhatsApp">
                  <a
                    href="https://wa.me/919351785674"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue-600"
                  >
                    Chat on WhatsApp
                  </a>
                </InfoRow>

                <InfoRow icon={Clock} label="Business Hours">
                  {company.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </InfoRow>
              </div>
            </div>
            {/* Google Map */}
            <div
              data-reveal
              className="overflow-hidden rounded-3xl border border-smoke-200 bg-white shadow-lg"
            >
              <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px]">
                {mapStatus === "loading" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-smoke-50">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
                    <p className="mt-4 text-sm text-ink-soft">
                      Loading Google Maps...
                    </p>
                  </div>
                )}

                {mapStatus === "error" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-smoke-50 px-6 text-center">
                    <MapPin className="mb-4 text-blue-600" size={40} />

                    <h3 className="font-display text-lg font-bold text-ink">
                      Unable to load the map
                    </h3>

                    <p className="mt-2 text-sm text-ink-soft">
                      Please check your internet connection or open the location
                      directly in Google Maps.
                    </p>

                    <a
                      href="https://maps.google.com/?cid=16893529517452019266"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                )}

                <iframe
                  title="W R Enterprises Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.8284011737617!2d84.36216026544572!3d26.155842437216293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fb916d7ac0ab%3A0xea60d8b76d51b642!2sW%20R%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1785493946198!5m2!1sen!2sin"
                  className={`h-full w-full transition-opacity duration-500 ${
                    mapStatus === "loaded" ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  onLoad={() => setMapStatus("loaded")}
                  
                />
              </div>

              <div className="border-t border-smoke-200 p-5">
                <h3 className="font-display text-lg font-bold text-ink">
                  W R Enterprises
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Kutub Chhapra More
                  <br />
                  Siswan–Siwan Road
                  <br />
                  Siwan, Bihar 841241
                </p>

                <MagneticButton
                  as="a"
                  href="https://maps.google.com/?cid=16893529517452019266"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="solid"
                  className="mt-5 w-full justify-center"
                >
                  Open in Google Maps
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-smoke-50 py-16 lg:py-24">
        <div className="container-wr max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

          <div className="mt-10 divide-y divide-smoke-200 border-y border-smoke-200">
            {faqs.map((faq, i) => (
              <div key={faq.q} data-reveal>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold">
                    {faq.q}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === i && (
                  <p className="pb-5 text-sm leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="w-full rounded-2xl bg-smoke-100 px-4 py-3.5 text-sm placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
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
  );
}
