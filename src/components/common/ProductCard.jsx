import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const mediaClass = {
  Electrical: 'wr-media-electrical',
  Plumbing: 'wr-media-plumbing',
  Paint: 'wr-media-paint',
  Hardware: 'wr-media-hardware',
}

export default function ProductCard({ product }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) translateY(-4px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <div
      data-reveal
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group rounded-3xl bg-white border border-smoke-200 shadow-soft hover:shadow-card overflow-hidden transition-shadow duration-500 will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`wr-media ${mediaClass[product.category] || ''} aspect-[4/3] flex items-end p-4`}>
        <span className="text-[11px] font-semibold tracking-wide uppercase text-white/85 bg-black/20 rounded-full px-3 py-1 backdrop-blur-sm">
          {product.sku}
        </span>
      </div>
      <div className="p-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{product.category}</p>
          <h3 className="mt-1 font-display font-bold text-base text-ink leading-snug">{product.name}</h3>
        </div>
        <span className="shrink-0 mt-1 grid place-items-center w-9 h-9 rounded-full bg-smoke-100 text-ink group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </div>
  )
}
