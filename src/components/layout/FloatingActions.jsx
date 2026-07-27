import { MessageCircle, Phone } from 'lucide-react'
import { company } from '../../data/site.js'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-card hover:scale-105 transition-transform"
      >
        <MessageCircle size={24} fill="white" className="text-[#25D366]" />
      </a>
      <a
        href={`tel:${company.phone.replace(/\s/g, '')}`}
        aria-label="Call now"
        className="grid place-items-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-card hover:scale-105 transition-transform"
      >
        <Phone size={22} />
      </a>
    </div>
  )
}
