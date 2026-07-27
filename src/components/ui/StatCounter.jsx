import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StatCounter({ value, suffix = '', prefix = '', label, isYear = false, dark = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className={`font-display font-extrabold text-3xl sm:text-4xl tabular-nums ${dark ? 'text-white' : 'text-ink'}`}>
        {prefix}
        {inView ? (
          <CountUp end={value} duration={isYear ? 1.6 : 2.2} separator="," />
        ) : (
          0
        )}
        {suffix}
      </div>
      {label && (
        <p className={`mt-2 text-xs sm:text-sm font-medium ${dark ? 'text-white/55' : 'text-ink-soft'}`}>{label}</p>
      )}
    </div>
  )
}
