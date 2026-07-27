import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveals all [data-reveal] children inside the returned ref with a fade-up,
 * staggered by document order, triggered once when scrolled into view.
 */
export default function useScrollReveal(deps = []) {
  const scope = useRef(null)

  useEffect(() => {
    if (!scope.current) return undefined
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray('[data-reveal]', scope.current)
      targets.forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: (i % 6) * 0.06,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })
    }, scope)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scope
}
