import { Star } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { reviews, company } from '../../data/site.js'

export default function ReviewsSection() {
  const scope = useScrollReveal()

  return (
    <section ref={scope} className="py-20 lg:py-28 bg-white">
      <div className="container-wr">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Google Reviews" title="What Siwan says after buying from us." />
          <div data-reveal className="flex items-center gap-3 shrink-0">
            <span className="flex text-blue-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <div>
              <p className="font-display font-extrabold text-lg leading-none">{company.rating.toFixed(1)}</p>
              <p className="text-xs text-ink-soft">{company.reviewCount}+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div data-reveal key={r.id} className="rounded-3xl bg-smoke-50 border border-smoke-200 p-6 flex flex-col">
              <span className="flex text-blue-500 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <p className="text-sm text-ink-soft leading-relaxed flex-1">"{r.text}"</p>
              <p className="mt-5 font-display font-bold text-sm text-ink">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
