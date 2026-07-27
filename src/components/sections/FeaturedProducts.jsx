import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../ui/ProductCard.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { featuredProducts } from '../../data/site.js'

export default function FeaturedProducts() {
  const scope = useScrollReveal()

  return (
    <section ref={scope} className="py-20 lg:py-28 bg-white">
      <div className="container-wr">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Products"
            title="A closer look at what moves fastest off our shelves."
          />
          <Link
            data-reveal
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all shrink-0"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
