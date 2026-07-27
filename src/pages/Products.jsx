import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Seo from '../components/ui/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import { categories } from '../data/site.js'

// Expand the small featured list into a fuller catalogue view by pairing
// every category's item names with the existing product-card presentation.
const allProducts = categories.flatMap((cat) =>
  cat.items.map((item, i) => ({
    id: `${cat.id}-${i}`,
    name: item,
    category: cat.name,
    sku: `${cat.sku}-${String(i + 1).padStart(3, '0')}`,
  })),
)

const filters = ['All', ...categories.map((c) => c.name)]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')
  const scope = useScrollReveal([activeFilter, query])

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesFilter = activeFilter === 'All' || p.category === activeFilter
      const matchesQuery = p.name.toLowerCase().includes(query.trim().toLowerCase())
      return matchesFilter && matchesQuery
    })
  }, [activeFilter, query])

  return (
    <div>
      <Seo
        title="Products"
        description="Browse hardware, electrical, plumbing and paint products carried by W R Enterprises in Siwan — wires, pipes, fittings, paints, tools and more."
      />

      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-smoke-50">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Catalogue"
            title="Explore what's on our shelves."
            description="A showcase of our product range — for pricing, wholesale rates and availability, reach out and we'll confirm directly."
          />
        </div>
      </section>

      <section ref={scope} className="py-12 lg:py-16 bg-white">
        <div className="container-wr">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeFilter === f ? 'bg-blue-600 text-white' : 'bg-smoke-100 text-ink-soft hover:bg-smoke-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-smoke-100 text-sm placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-ink-soft text-center py-20">No products match "{query}". Try a different search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
