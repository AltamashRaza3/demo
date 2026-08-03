import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Seo from "../components/common/Seo.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import ImageWithSkeleton from "../components/common/ImageWithSkeleton.jsx";

import { galleryImages } from "../data/site.js";

const filters = [
  "All",
  ...Array.from(new Set(galleryImages.map((g) => g.category))),
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const scope = useScrollReveal([activeFilter]);

  const filtered = useMemo(() => {
    return galleryImages.filter(
      (g) => activeFilter === "All" || g.category === activeFilter,
    );
  }, [activeFilter]);

  /* ---------------------------------------------------------
     Preload first visible gallery images
  --------------------------------------------------------- */

  useEffect(() => {
    filtered.slice(0, 6).forEach((img) => {
      const preload = new Image();
      preload.src = img.image;
    });
  }, [filtered]);

  /* ---------------------------------------------------------
     Preload next image for lightbox
  --------------------------------------------------------- */

  useEffect(() => {
    if (lightboxIndex === null) return;

    const nextImage = filtered[(lightboxIndex + 1) % filtered.length];

    if (nextImage) {
      const preload = new Image();
      preload.src = nextImage.image;
    }
  }, [lightboxIndex, filtered]);

  /* ---------------------------------------------------------
     Keyboard Navigation + Scroll Lock
  --------------------------------------------------------- */

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          close();
          break;

        case "ArrowRight":
          next();
          break;

        case "ArrowLeft":
          prev();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  const openAt = (index) => setLightboxIndex(index);

  const close = () => setLightboxIndex(null);

  const next = () =>
    setLightboxIndex((prevIndex) => (prevIndex + 1) % filtered.length);

  const prev = () =>
    setLightboxIndex(
      (prevIndex) => (prevIndex - 1 + filtered.length) % filtered.length,
    );

  return (
    <div>
      <Seo
        title="Gallery"
        description="A look inside the W R Enterprises showroom in Siwan — electrical, plumbing, paint and hardware sections."
      />

      {/* ---------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------- */}

      <section className="bg-smoke-50 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="container-wr">
          <SectionHeading eyebrow="Gallery" title="Step inside the showroom." />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Gallery */}
      {/* ---------------------------------------------------- */}

      <section ref={scope} className="bg-white py-12 lg:py-16">
        <div className="container-wr">
          {/* Filters */}

          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-smoke-100 text-ink-soft hover:bg-smoke-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filtered.map((img, index) => (
              <button
                key={img.id}
                type="button"
                data-reveal
                onClick={() => openAt(index)}
                className={`group relative w-full overflow-hidden rounded-2xl ${
                  index % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <ImageWithSkeleton
                  src={img.image}
                  alt={img.title}
                  priority={index < 6}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {img.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Lightbox */}
      {/* ---------------------------------------------------- */}

      <AnimatePresence mode="wait">
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            {/* Close */}

            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={22} />
            </button>

            {/* Previous */}

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl"
            >
              <img
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                draggable={false}
                className="
                  max-h-[85vh]
                  w-full
                  select-none
                  rounded-3xl
                  object-contain
                  shadow-2xl
                "
              />

              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl font-bold text-white">
                  {filtered[lightboxIndex].title}
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}