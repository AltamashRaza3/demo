import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CategoryCard from '../ui/CategoryCard.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { categories } from '../../data/site.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Signature moment: the category "ledger" — a pinned section that scrolls
 * horizontally as the user scrolls down, echoing a stockist's inventory rail.
 */
export default function CategoriesShowcase() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return undefined

      const distance = track.scrollWidth - section.offsetWidth

      const st = gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance + 400}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      })

      return () => st.scrollTrigger?.kill()
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-smoke-50 py-20 lg:py-0 lg:min-h-screen lg:flex lg:items-center overflow-hidden">
      <div className="container-wr w-full">
        <SectionHeading
          eyebrow="What We Stock"
          title="Four categories, one stockroom, zero compromise."
          description="From switchboards to sanitary ware — every line is sourced, billed and delivered from a single address on Siswan–Siwan Road."
        />

        <div ref={trackRef} className="mt-12 flex gap-6 lg:w-max lg:flex-nowrap overflow-x-auto lg:overflow-visible pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory">
          {categories.map((category) => (
            <div className="snap-start" key={category.id}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
