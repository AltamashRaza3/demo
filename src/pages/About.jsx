import Seo from '../components/ui/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import { company, timeline, values } from '../data/site.js'
import { Target, Eye } from 'lucide-react'

export default function About() {
  const scope = useScrollReveal()

  return (
    <div ref={scope}>
      <Seo
        title="About Us"
        description="Founded in 2017, W R Enterprises serves homeowners, builders and contractors across Siwan with genuine hardware, electrical, plumbing and paint products."
      />

      {/* Story */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-smoke-50">
        <div className="container-wr">
          <p data-reveal className="eyebrow mb-4">Our Story</p>
          <h1 data-reveal className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance">
            One roof, four trades, and a promise made in {company.established}.
          </h1>
          <p data-reveal className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed">
            Founded in {company.established}, W R Enterprises was established with a vision of providing
            quality hardware, electrical, plumbing and paint solutions under one roof. Today the business
            serves homeowners, builders, contractors, electricians, plumbers and businesses across Siwan
            with genuine products, competitive pricing and reliable service.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-wr grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div data-reveal className="rounded-3xl bg-ink text-white p-10">
            <Target size={28} className="text-blue-400" />
            <h2 className="mt-6 font-display font-bold text-2xl">Mission</h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              To provide premium quality products with excellent customer service, competitive
              pricing and dependable installation support.
            </p>
          </div>
          <div data-reveal className="rounded-3xl bg-blue-600 text-white p-10">
            <Eye size={28} className="text-blue-100" />
            <h2 className="mt-6 font-display font-bold text-2xl">Vision</h2>
            <p className="mt-4 text-blue-50 leading-relaxed">
              To become the most trusted hardware and building material supplier across Siwan
              and nearby regions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-smoke-50">
        <div className="container-wr">
          <SectionHeading eyebrow="What We Stand For" title="Why customers keep coming back." align="center" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div data-reveal key={v.title} className="rounded-3xl bg-white border border-smoke-200 p-7">
                <span className="font-mono text-xs text-blue-500/70">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display font-bold text-base">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wr">
          <SectionHeading eyebrow="Our Journey" title="From a single shop to Siwan's go-to supplier." />
          <div className="mt-14 relative pl-8 lg:pl-0">
            <div className="absolute left-[7px] lg:left-1/2 top-2 bottom-2 w-px bg-smoke-300 lg:-translate-x-1/2" />
            <ol className="space-y-10 lg:space-y-14">
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  data-reveal
                  className="relative lg:grid lg:grid-cols-2 lg:gap-10"
                >
                  <span className="absolute -left-8 lg:left-1/2 top-1 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-blue-100 lg:-translate-x-1/2" />
                  <div className={i % 2 === 0 ? 'lg:text-right lg:pr-14' : 'lg:col-start-2 lg:pl-14'}>
                    <p className="font-display font-extrabold text-2xl text-blue-600">{t.year}</p>
                    <h3 className="mt-1 font-display font-bold text-lg">{t.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-md lg:ml-auto">{t.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Owners */}
      <section className="py-20 lg:py-28 bg-ink">
        <div className="container-wr">
          <SectionHeading light eyebrow="Leadership" title="Run by two owners who still work the counter." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {company.owners.map((owner) => (
              <div data-reveal key={owner} className="rounded-3xl bg-white/5 border border-white/10 p-8">
                <div className="w-14 h-14 rounded-2xl wr-media wr-media-electrical" />
                <h3 className="mt-6 font-display font-bold text-xl text-white">{owner}</h3>
                <p className="mt-1 text-sm text-blue-300">Co-Founder, W R Enterprises</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
