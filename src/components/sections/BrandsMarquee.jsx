import { Link } from 'react-router-dom'
import { brands } from '../../data/site.js'

const loop = [...brands, ...brands, ...brands]

export default function BrandsMarquee() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-smoke-200 overflow-hidden">
      <div className="container-wr flex items-center justify-between mb-10">
        <p className="eyebrow">Authorized Stockist For</p>
        <Link to="/brands" className="text-sm font-semibold text-blue-600 hover:underline">
          Brand stories →
        </Link>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-16 items-center">
          {loop.map((b, i) => (
            <span
              key={`${b.id}-${i}`}
              className="font-display font-extrabold text-3xl sm:text-4xl text-ink/15 hover:text-ink/40 transition-colors whitespace-nowrap"
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
