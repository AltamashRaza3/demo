import { useEffect } from 'react'
import gsap from 'gsap'
import { Home } from 'lucide-react'
import Seo from '../components/ui/Seo.jsx'
import MagneticButton from '../components/ui/MagneticButton.jsx'

export default function NotFound() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nf-num', { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power4.out' })
      gsap.fromTo('.nf-fade', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-smoke-50">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="text-center px-6">
        <div className="flex justify-center font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none tracking-tightest">
          {['4', '0', '4'].map((n, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <span className={`nf-num inline-block ${i === 1 ? 'text-blue-600' : 'text-ink'}`}>{n}</span>
            </span>
          ))}
        </div>
        <p className="nf-fade mt-4 text-lg text-ink-soft max-w-md mx-auto">
          This aisle doesn't exist. Let's get you back to the shelves that do.
        </p>
        <div className="nf-fade mt-8 flex justify-center">
          <MagneticButton as="link" to="/" variant="solid">
            <Home size={16} /> Back to Home
          </MagneticButton>
        </div>
      </div>
    </div>
  )
}
