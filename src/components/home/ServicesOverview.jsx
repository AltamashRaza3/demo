import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { services } from '../../data/site.js'

export default function ServicesOverview() {
  const scope = useScrollReveal()

  return (
    <section ref={scope} className="py-20 lg:py-28 bg-smoke-50">
      <div className="container-wr">
        <SectionHeading
          eyebrow="Services"
          title="Buying the product is step one. We handle the rest, too."
          description="Retail counter or full site supply — every service is built around getting materials installed correctly, not just sold."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((service, i) => (
            <div
              data-reveal
              key={service.id}
              className="group rounded-3xl bg-white border border-smoke-200 p-7 hover:border-blue-200 hover:shadow-card transition-all duration-400"
            >
              <span className="font-mono text-xs text-blue-500/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display font-bold text-lg text-ink">{service.name}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all">
            See every service <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
