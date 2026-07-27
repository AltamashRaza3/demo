import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { company, categories } from '../../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wr py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-white text-ink font-display font-extrabold text-sm">
              WR
            </span>
            <span className="font-display font-extrabold text-lg">{company.name}</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Hardware, electrical, plumbing and paint — under one roof in Siwan since {company.established}.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-blue-400 mb-5">Categories</h3>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to="/products" className="text-white/70 hover:text-white text-sm transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-blue-400 mb-5">Company</h3>
          <ul className="space-y-3">
            {[
              ['About', '/about'],
              ['Services', '/services'],
              ['Brands', '/brands'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-blue-400 mb-5">Visit Us</h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5 text-blue-400" />
              <span>{company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.state} {company.address.pin}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 mt-0.5 text-blue-400" />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <MessageCircle size={18} className="shrink-0 mt-0.5 text-blue-400" />
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Us</a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 mt-0.5 text-blue-400" />
              <span>{company.hours[0].day}: {company.hours[0].time}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wr py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Owned by {company.owners.join(' & ')} · Siwan, Bihar</p>
        </div>
      </div>
    </footer>
  )
}
