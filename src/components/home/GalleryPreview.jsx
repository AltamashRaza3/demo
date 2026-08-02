import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import { galleryImages } from '../../data/site.js'

// const mediaClass = {
//   Electrical: 'wr-media-electrical',
//   Plumbing: 'wr-media-plumbing',
//   Paint: 'wr-media-paint',
//   Hardware: 'wr-media-hardware',
//   Storefront: 'wr-media-electrical',

// }

export default function GalleryPreview() {
  const scope = useScrollReveal()
  const preview = galleryImages.slice(0, 6)

  return (
    <section ref={scope} className="py-20 lg:py-28 bg-smoke-50">
      <div className="container-wr">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Inside The Store"
            title="A look around the showroom floor."
          />
          <Link
            data-reveal
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all shrink-0"
          >
            Full gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 columns-2 sm:columns-3 gap-5 [column-fill:_balance]">
          {preview.map((img, i) => (
            <div
              key={img.id}
              data-reveal
              className={`group relative mb-5 overflow-hidden rounded-2xl break-inside-avoid ${
                i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={img.image}
                alt={img.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-full bg-black/30 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
