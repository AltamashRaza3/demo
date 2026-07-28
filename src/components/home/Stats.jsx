import StatCounter from '../common/StatCounter.jsx'
import { stats } from '../../data/site.js'

export default function Stats() {
  return (
    <section className="bg-ink">
      <div className="container-wr py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
          {stats.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              isYear={s.isYear}
              label={s.label}
              dark
            />
          ))}
        </div>
      </div>
    </section>
  )
}
