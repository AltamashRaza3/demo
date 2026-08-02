import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Seo from "../components/common/Seo.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { galleryImages } from "../data/site.js";

const filters = [
  "All",
  ...Array.from(new Set(galleryImages.map((g) => g.category))),
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const scope = useScrollReveal([activeFilter]);

  const filtered = useMemo(
    () =>
      galleryImages.filter(
        (g) => activeFilter === "All" || g.category === activeFilter,
      ),
    [activeFilter],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const next = filtered[(lightboxIndex + 1) % filtered.length];

    if (next) {
      const preload = new Image();
      preload.src = next.image;
    }
  }, [lightboxIndex, filtered]);

  const openAt = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const prev = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <div>
      <Seo
        title="Gallery"
        description="A look inside the W R Enterprises showroom in Siwan — electrical, plumbing, paint and hardware sections."
      />

      <section className="bg-smoke-50 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="container-wr">
          <SectionHeading eyebrow="Gallery" title="Step inside the showroom." />
        </div>
      </section>

      <section ref={scope} className="bg-white py-12 lg:py-16">
        <div className="container-wr">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === f
                    ? "bg-blue-600 text-white"
                    : "bg-smoke-100 text-ink-soft hover:bg-smoke-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
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
                  decoding="async"
                  fetchPriority="low"
                  width="900"
                  height="900"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl"
            >
              <img
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="max-h-[85vh] w-full rounded-3xl object-contain"
              />

              <div className="mt-5 text-center">
                <h3 className="font-display text-xl font-bold text-white">
                  {filtered[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
