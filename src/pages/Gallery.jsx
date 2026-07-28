import { useMemo, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import useScrollReveal from '../animations/useScrollReveal.js'
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
                  activeFilter === f ? 'bg-blue-600 text-white' : 'bg-smoke-100 text-ink-soft hover:bg-smoke-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((img, i) => (
              <button
                data-reveal
                type="button"
                key={img.id}
                onClick={() => openAt(i)}
                className={`wr-media ${mediaClass[img.category]} mb-5 w-full rounded-2xl break-inside-avoid flex items-end p-4 text-left ${
                  i % 4 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                } hover:opacity-90 transition-opacity`}
              >
                <span className="text-xs font-semibold text-white/90 bg-black/25 rounded-full px-3 py-1 backdrop-blur-sm">
                  {img.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-6"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute top-6 right-6 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 sm:left-8 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 sm:right-8 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`wr-media ${mediaClass[filtered[lightboxIndex].category]} w-full max-w-3xl aspect-[4/3] rounded-3xl flex items-end p-6`}
            >
              <span className="text-white font-display font-bold text-lg">{filtered[lightboxIndex].title}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
