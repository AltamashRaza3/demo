import { useRef } from 'react'
import { Link } from 'react-router-dom'

const base = 'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-6 py-3.5 transition-colors duration-300 will-change-transform'

const variants = {
  solid: 'bg-blue-600 text-white hover:bg-blue-700',
  ghost: 'bg-transparent text-ink border border-ink/15 hover:border-ink/35',
  light: 'bg-white text-ink shadow-soft hover:shadow-card',
  outlineLight: 'bg-transparent text-white border border-white/40 hover:border-white',
}

/**
 * A button with a subtle magnetic hover pull, implemented with plain
 * pointer events + CSS transform (no extra deps required).
 */
export default function MagneticButton({
  as = 'button',
  to,
  href,
  variant = 'solid',
  full = false,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  const classes = `${base} ${variants[variant]} ${full ? 'w-full' : ''} ${className}`
  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: classes,
    ...props,
  }

  if (as === 'link') {
    return (
      <Link to={to} {...sharedProps}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a href={href} {...sharedProps}>
        {children}
      </a>
    )
  }

  return <button type="button" {...sharedProps}>{children}</button>
}
