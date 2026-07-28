import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { galleryImages } from '../../data/site.js'

const mediaClass = {
  Electrical: 'wr-media-electrical',
  Plumbing: 'wr-media-plumbing',
  Paint: 'wr-media-paint',
  Hardware: 'wr-media-hardware',
  Storefront: 'wr-media-electrical',

}

export default function GalleryPreview() {
  const scope = useScrollReveal()
  const preview = galleryImages.slice(0, 6)

  return (
    <section ref={scope} className="py-20 lg:py-28 bg-smoke-50">
      <div className="container-wr">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading eyebrow="Inside The Store" title="A look around the showroom floor." />
          <Link data-reveal to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all shrink-0">
            Full gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 columns-2 sm:columns-3 gap-5 [column-fill:_balance]">
          {preview.map((img, i) => (
            <div
              data-reveal
              key={img.id}
              className={`wr-media ${mediaClass[img.category]} mb-5 rounded-2xl break-inside-avoid flex items-end p-4 ${i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-square'}`}
            >
              <span className="text-xs font-semibold text-white/90 bg-black/25 rounded-full px-3 py-1 backdrop-blur-sm">
                {img.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
