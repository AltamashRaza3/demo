import { MapPin, Phone, MessageCircle } from "lucide-react";
import MagneticButton from "../common/MagneticButton.jsx";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import { company } from "../../data/site.js";

export default function LocationCTA() {
  const scope = useScrollReveal();

  return (
    <section
      ref={scope}
      className="relative overflow-hidden bg-blue-600 py-20 lg:py-28"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="absolute right-[-25%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/10 lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute right-[5%] top-1/2 hidden h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-white/10 xl:block"
      />

      <div className="container-wr relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div data-reveal>
          <p className="eyebrow mb-4 text-blue-200">Visit Our Store</p>

          <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Visit W R Enterprises in Siwan
          </h2>

          <p className="mt-6 flex items-start gap-3 text-base leading-relaxed text-blue-100">
            <MapPin size={22} className="mt-1 shrink-0 text-white" />

            <span>
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.city}, {company.address.state}{" "}
              {company.address.pin}
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MagneticButton
              as="a"
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              variant="light"
            >
              <Phone size={16} />
              Call Now
            </MagneticButton>

            <MagneticButton
              as="a"
              href={`https://wa.me/${company.whatsapp}`}
              variant="outlineLight"
            >
              <MessageCircle size={16} />
              WhatsApp
            </MagneticButton>
          </div>
        </div>

        {/* Google Map */}
        <div
          data-reveal
          className="overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl"
        >
          <iframe
            title="W R Enterprises Location"
            src="https://www.google.com/maps?q=Kutub+Chhapra+More+Siswan+Road+Siwan+Bihar&output=embed"
            className="h-72 w-full sm:h-80 md:h-96 lg:h-[430px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="flex flex-col gap-5 border-t border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="min-w-0">
              <h3 className="font-display text-lg font-bold text-zinc-900 sm:text-xl">
                W R Enterprises
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {company.address.line1},
                <br />
                {company.address.line2},
                <br />
                {company.address.city}, {company.address.state}{" "}
                {company.address.pin}
              </p>
            </div>

            <MagneticButton
              as="a"
              href="https://www.google.com/maps/search/?api=1&query=Kutub+Chhapra+More+Siswan+Road+Siwan+Bihar"
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              className="w-full justify-center sm:w-auto"
            >
              Open Maps
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
