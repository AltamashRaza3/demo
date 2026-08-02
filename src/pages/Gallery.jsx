import { useMemo, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import { galleryImages } from '../data/site.js'

const mediaClass = {
  Electrical: 'wr-media-electrical',
  Plumbing: 'wr-media-plumbing',
  Paint: 'wr-media-paint',
  Hardware: 'wr-media-hardware',
  Storefront: 'wr-media-electrical',

}

const filters = ['All', ...Array.from(new Set(galleryImages.map((g) => g.category)))]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const scope = useScrollReveal([activeFilter])

  const filtered = useMemo(
    () => galleryImages.filter((g) => activeFilter === 'All' || g.category === activeFilter),
    [activeFilter],
  )

  const openAt = (i) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length)
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)

  return (
    <div>
      <Seo
        title="Gallery"
        description="A look inside the W R Enterprises showroom in Siwan — electrical, plumbing, paint and hardware sections."
      />

      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-smoke-50">
        <div className="container-wr">
          <SectionHeading eyebrow="Gallery" title="Step inside the showroom." />
        </div>
      </section>

      <section ref={scope} className="py-12 lg:py-16 bg-white">
        <div className="container-wr">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeFilter === f
                    ? "bg-blue-600 text-white"
                    : "bg-smoke-100 text-ink-soft hover:bg-smoke-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                type="button"
                data-reveal
                onClick={() => openAt(i)}
                className={`group relative mb-5 w-full overflow-hidden rounded-2xl break-inside-avoid ${
                  i % 4 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {img.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            key={lightboxIndex}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl"
          >
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].title}
              className="max-h-[85vh] w-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="font-display text-xl font-bold text-white">
                {filtered[lightboxIndex].title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
