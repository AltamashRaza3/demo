import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import MagneticButton from '../common/MagneticButton.jsx'
import { company } from '../../data/site.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/brands', label: 'Brands' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-soft border-b border-smoke-200' : 'bg-transparent'
      }`}
    >
      <nav className="container-wr flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-ink text-white font-display font-extrabold text-sm">
            WR
          </span>
          <span className="font-display font-extrabold text-lg tracking-tightest leading-none">
            {company.name}
          </span>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-600 bg-blue-50' : 'text-ink-soft hover:text-ink hover:bg-smoke-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-blue-600 transition-colors"
          >
            <Phone size={16} strokeWidth={2.4} />
            {company.phone}
          </a>
          <MagneticButton as="link" to="/contact" variant="solid">
            Request Quote
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-11 h-11 rounded-full bg-smoke-100 text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden glass border-t border-smoke-200 overflow-hidden"
          >
            <ul className="container-wr flex flex-col py-4">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-display font-semibold ${isActive ? 'text-blue-600' : 'text-ink'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4">
                <MagneticButton as="link" to="/contact" variant="solid" full onClick={() => setOpen(false)}>
                  Request Quote
                </MagneticButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
