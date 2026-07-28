import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    // Respect user accessibility settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
    });

    // Sync ScrollTrigger with Lenis
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    // Drive Lenis using GSAP's ticker
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Production-friendly lag smoothing
    gsap.ticker.lagSmoothing(1000, 16);

    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);
}