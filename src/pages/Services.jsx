import Seo from '../components/ui/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import MagneticButton from '../components/ui/MagneticButton.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import { services } from '../data/site.js'
import {
  ShoppingBag, Truck, Boxes, Receipt, PackageCheck,
  Wrench, Zap, Droplets, PaintRoller,
} from 'lucide-react'

const icons = {
  retail: ShoppingBag,
  wholesale: Boxes,
  bulk: PackageCheck,
  gst: Receipt,
  delivery: Truck,
  installation: Wrench,
  electrician: Zap,
  plumber: Droplets,
  painter: PaintRoller,
}

export default function Services() {
  const scope = useScrollReveal()

  return (
    <div ref={scope}>
      <Seo
        title="Services"
        description="Retail, wholesale, bulk orders, GST billing, home delivery and installation support from W R Enterprises in Siwan."
      />

      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 bg-smoke-50">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Services"
            title="Buying is only half the job. We handle the rest."
            description="From a single switch to a full construction site order — every service exists to get the right material into the right hands, installed correctly."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wr grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.id] || Wrench
            return (
              <div
                data-reveal
                key={service.id}
                className="rounded-3xl border border-smoke-200 p-8 hover:shadow-card hover:border-blue-200 transition-all duration-400"
              >
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 font-display font-bold text-lg">{service.name}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ink text-center">
        <div className="container-wr">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance max-w-2xl mx-auto">
            Tell us what the project needs — we'll tell you how we can help.
          </h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton as="link" to="/contact" variant="solid">
              Request a Quote
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
