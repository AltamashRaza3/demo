import { ShieldCheck, Truck, Receipt, Wrench } from 'lucide-react'
import useScrollReveal from '../../animations/useScrollReveal.js'

const badges = [
  { icon: ShieldCheck, label: 'Genuine Brands', sub: 'Bajaj · Birla Opus · Hindware ·Indigo' },
  { icon: Truck, label: 'Home Delivery', sub: 'Free within 10 KM' },
  { icon: Receipt, label: 'GST Billing', sub: 'Retail & wholesale' },
  { icon: Wrench, label: 'Installation Support', sub: 'Electrician · Plumber · Painter' },
]

export default function TrustBadges() {
  const scope = useScrollReveal()

  return (
    <section ref={scope} className="border-y border-smoke-200 bg-white">
      <div className="container-wr py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map(({ icon: Icon, label, sub }) => (
          <div data-reveal key={label} className="flex items-center gap-4">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
              <Icon size={22} />
            </span>
            <div>
              <p className="font-display font-bold text-sm text-ink leading-tight">{label}</p>
              <p className="text-xs text-ink-soft mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
