import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../common/SectionHeading.jsx'
import useScrollReveal from '../../animations/useScrollReveal.js'
import { values } from '../../data/site.js'

export default function WhyChooseUs() {
  const scope = useScrollReveal()

  return (
    <section ref={scope} className="py-20 lg:py-28 bg-ink relative overflow-hidden">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="container-wr relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="Siwan trusts one address for four categories of work."
          description="We built W R Enterprises around a simple idea: a builder, electrician, plumber or painter shouldn't need four different shops to finish one job."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div data-reveal key={v.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <CheckCircle2 size={22} className="text-blue-400" />
              <h3 className="mt-4 font-display font-bold text-white text-base">{v.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
