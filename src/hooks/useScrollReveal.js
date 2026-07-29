import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal() {
  const scope = useRef(null);

  useEffect(() => {
    if (!scope.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray("[data-reveal]", scope.current);

      targets.forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: (i % 6) * 0.06,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return scope;
}