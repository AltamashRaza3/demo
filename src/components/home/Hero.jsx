import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import MagneticButton from "../common/MagneticButton.jsx";
import { company } from "../../data/site.js";

import heroMain from "../../assets/images/hero/hero-main.png";

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

    }, headlineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={headlineRef} className="relative overflow-hidden bg-smoke-50">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grain pointer-events-none"
      />

      <div
        className="
        container-wr
        relative
        grid
        items-center
        min-h-[calc(100vh-88px)]
        gap-8
        pt-6
        pb-12
        lg:grid-cols-[0.9fr_1.3fr]
        lg:gap-8
        lg:pt-6
        lg:pb-12
        xl:gap-12
        "
      >
        {/* Left */}
        <div className="hero-fade order-2 lg:order-1 relative z-20">
          <p className="eyebrow mb-6">
            Established {company.established} • Siwan, Bihar
          </p>

          <h1 className="font-display text-[2.9rem] font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {words.map((word, index) => (
              <span key={index} className="mr-3 inline-block overflow-hidden">
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

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Premium hardware, electrical, plumbing and paint solutions for
            homes, businesses and construction projects. Genuine brands,
            competitive pricing, GST billing and expert support—all under one
            roof in Siwan.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton as="link" to="/products" variant="solid">
              Explore Products
            </MagneticButton>

            <MagneticButton
              as="a"
              href={`https://wa.me/${company.whatsapp}`}
              className="border-0 bg-[#25D366] text-white hover:bg-[#20ba5a]"
            >
              <MagneticButton
                as="a"
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                variant="light"
              >
                <Phone size={16} />
                Call Now
              </MagneticButton>
              <MessageCircle size={16} />
              WhatsApp
            </MagneticButton>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
            <span className="flex text-base text-blue-500">★★★★★</span>

            <span className="font-semibold text-ink">5.0 Google Rating</span>

            <span>•</span>

            <span>Since 2017</span>

            <span>•</span>

            <span>GST Billing</span>
          </div>
        </div>

        {/* Right */}
        <div className="hero-fade order-1 relative flex items-center justify-center lg:order-2 lg:-translate-y-24 xl:-translate-y-w8 2xl:-translate-y-32">
          <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[140px]" />

          <img
            src={heroMain}
            alt="W R Enterprises - Hardware, Electrical, Plumbing & Paint"
            className="
            relative
            z-10
            w-full
            max-w-md
            object-contain
            drop-shadow-[0_45px_80px_rgba(0,0,0,0.16)]
            sm:max-w-lg
            md:max-w-xl
            lg:max-w-[840px]
            xl:max-w-[980px]
            2xl:max-w-[1100px]
          "
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-soft/60 lg:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>

        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
