import Seo from '../components/ui/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'
import { brands } from '../data/site.js'

const mediaClass = {
  bajaj: 'wr-media-electrical',
  'birla-opus': 'wr-media-paint',
  hindware: 'wr-media-plumbing',
}

export default function Brands() {
  const scope = useScrollReveal()

  return (
    <div ref={scope}>
      <Seo
        title="Brands"
        description="W R Enterprises is an authorized stockist for Bajaj, Birla Opus and Hindware in Siwan, Bihar."
      />

      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 bg-smoke-50">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Authorized Stockist"
            title="We only sell what we'd install in our own homes."
            description="Every brand on this page is sourced through authorized channels — genuine stock, no substitutes."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wr space-y-6">
          {brands.map((b, i) => (
            <div
              data-reveal
              key={b.id}
              className={`rounded-3xl border border-smoke-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className={`wr-media ${mediaClass[b.id]} aspect-[16/10] lg:aspect-auto`} />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="eyebrow mb-3">{b.category}</p>
                <h2 className="font-display font-extrabold text-3xl">{b.name}</h2>
                <p className="mt-4 text-ink-soft leading-relaxed max-w-md">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
