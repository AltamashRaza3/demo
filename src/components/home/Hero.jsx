import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import MagneticButton from "../common/MagneticButton.jsx";
import { company } from "../../data/site.js";

const words = [
  "Everything",
  "Your",
  "Home",
  "&",
  "Project",
  "Needs",
  "Under",
  "One",
  "Roof",
];

export default function Hero() {
  const headlineRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(headlineRef);

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(
        q(".hero-word"),
        {
          yPercent: 130,
          rotate: 4,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.055,
          delay: 0.15,
        },
      ).fromTo(
        q(".hero-fade"),
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.35",
      );

      gsap.to(q(".hero-float-1"), {
        y: -22,
        x: 10,
        rotate: 6,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        overwrite: "auto",
      });

      gsap.to(q(".hero-float-2"), {
        y: 20,
        x: -14,
        rotate: -5,
        duration: 6.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        overwrite: "auto",
        delay: 0.4,
      });

      gsap.to(q(".hero-float-3"), {
        y: -16,
        x: -8,
        rotate: 4,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        overwrite: "auto",
        delay: 0.8,
      });
    }, headlineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={headlineRef} className="relative overflow-hidden bg-smoke-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grain pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="hero-float-1 absolute top-28 right-[6%] hidden h-24 w-24 rounded-3xl wr-media wr-media-electrical shadow-card sm:block sm:h-32 sm:w-32"
      />

      <div
        aria-hidden="true"
        className="hero-float-2 absolute bottom-24 right-[16%] hidden h-20 w-20 rounded-2xl wr-media wr-media-plumbing shadow-card sm:block sm:h-28 sm:w-28"
      />

      <div
        aria-hidden="true"
        className="hero-float-3 absolute top-1/2 right-[2%] hidden h-16 w-16 rounded-full wr-media wr-media-paint shadow-card lg:block lg:h-20 lg:w-20"
      />

      <div className="container-wr relative pt-16 pb-28 lg:pt-24 lg:pb-36">
        <p className="hero-fade eyebrow mb-6">
          Established {company.established} · Siwan, Bihar
        </p>

        <h1 className="max-w-4xl font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-tightest sm:text-6xl lg:text-7xl">
          {words.map((word, index) => (
            <span
              key={index}
              className="mr-3 inline-block overflow-hidden align-top sm:mr-4"
            >
              <span
                className={`hero-word inline-block ${
                  word === "One" || word === "Roof" ? "text-blue-600" : ""
                }`}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          Hardware, electrical, plumbing and paint — genuine products, wholesale
          pricing and installation support, all from one address on Qutub Chapra Siswan–Siwan
          Road.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton as="link" to="/products" variant="solid">
            Explore Products
          </MagneticButton>

          <MagneticButton as="link" to="/contact" variant="ghost">
            Request Quote
          </MagneticButton>

          <MagneticButton
            as="a"
            href={`https://wa.me/${company.whatsapp}`}
            variant="light"
          >
            <MessageCircle size={16} /> WhatsApp
          </MagneticButton>

          <MagneticButton
            as="a"
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            variant="light"
          >
            <Phone size={16} /> Call Now
          </MagneticButton>
        </div>

        <div className="hero-fade mt-16 flex items-center gap-3 text-sm text-ink-soft">
          <span className="flex text-blue-500">★★★★★</span>

          <span className="font-semibold text-ink">5.0 Google Rating</span>

          <span className="hidden sm:inline">
            — trusted across Siwan since 2017
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-soft/60"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>

        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
