import { MapPin, Phone, MessageCircle } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { company } from '../../data/site.js'

export default function LocationCTA() {
  const scope = useScrollReveal()

  return (
    <section ref={scope} className="py-20 lg:py-28 bg-blue-600 relative overflow-hidden">
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10" />
      <div className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/10" />

      <div className="container-wr relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div data-reveal>
          <p className="eyebrow text-blue-200 mb-4">Visit The Store</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight text-balance">
            Kutub Chhapra More, Siswan–Siwan Road, Siwan.
          </h2>
          <p className="mt-5 flex items-start gap-3 text-blue-100">
            <MapPin size={20} className="shrink-0 mt-0.5" />
            {company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.state} {company.address.pin}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton as="a" href={`tel:${company.phone.replace(/\s/g, '')}`} variant="light">
              <Phone size={16} /> Call Now
            </MagneticButton>
            <MagneticButton as="a" href={`https://wa.me/${company.whatsapp}`} variant="outlineLight">
              <MessageCircle size={16} /> WhatsApp
            </MagneticButton>
          </div>
        </div>

        <div data-reveal className="rounded-3xl overflow-hidden border border-white/15 aspect-[4/3] grid place-items-center bg-blue-700/40">
          <div className="text-center text-blue-100">
            <MapPin size={32} className="mx-auto mb-3" />
            <p className="text-sm">Map embed placeholder — connect Google Maps embed here</p>
          </div>
        </div>
      </div>
    </section>
  )
}
