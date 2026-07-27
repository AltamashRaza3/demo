// Central content source — keeps copy separate from components.
// Replace placeholder values with real business data/photos when available.

export const company = {
  name: 'W R Enterprises',
  established: 2017,
  owners: ['Md. Asif', 'Yasir Wali'],
  rating: 5.0,
  reviewCount: 120,
  phone: '+91 00000 00000',
  whatsapp: '910000000000',
  address: {
    line1: 'Kutub Chhapra More',
    line2: 'Siswan–Siwan Road',
    city: 'Siwan',
    state: 'Bihar',
    pin: '841241',
  },
  deliveryRadiusKm: 10,
  hours: [
    { day: 'Monday – Saturday', time: '8:00 AM – 8:30 PM' },
    { day: 'Sunday', time: '9:00 AM – 2:00 PM' },
  ],
}

export const stats = [
  { label: 'Established', value: 2017, suffix: '', prefix: '', isYear: true },
  { label: 'Product Categories', value: 30, suffix: '+' },
  { label: 'Trusted Brands', value: 3, suffix: '' },
  { label: 'KM Home Delivery', value: 10, suffix: '' },
  { label: 'Customer Satisfaction', value: 98, suffix: '%' },
]

export const categories = [
  {
    id: 'electrical',
    sku: 'WR-EL',
    name: 'Electrical',
    tagline: 'Wiring, switches & lighting',
    items: ['Wires', 'Cables', 'Switches', 'Modular Switches', 'Sockets', 'Plug Tops', 'Extension Boards', 'LED Bulbs', 'Tube Lights', 'Concealed Lights', 'MCB', 'Electrical Tape'],
  },
  {
    id: 'plumbing',
    sku: 'WR-PL',
    name: 'Plumbing',
    tagline: 'Pipes, tanks & sanitary ware',
    items: ['PVC Pipes', 'CPVC Pipes', 'Water Tanks', 'Faucets', 'Bathroom Accessories', 'Sanitary Ware'],
  },
  {
    id: 'paint',
    sku: 'WR-PT',
    name: 'Paint',
    tagline: 'Interior, exterior & waterproofing',
    items: ['Interior Paint', 'Exterior Paint', 'Primers', 'Putty', 'Waterproofing'],
  },
  {
    id: 'hardware',
    sku: 'WR-HW',
    name: 'Hardware',
    tagline: 'Tools, locks & fasteners',
    items: ['Tools', 'Door Locks', 'Hinges', 'Fasteners', 'Adhesives', 'Safety Equipment'],
  },
]

export const featuredProducts = [
  { id: 1, name: 'Modular Switch Series', category: 'Electrical', sku: 'WR-EL-014' },
  { id: 2, name: 'Armoured Copper Cable', category: 'Electrical', sku: 'WR-EL-002' },
  { id: 3, name: 'CPVC Plumbing Pipe', category: 'Plumbing', sku: 'WR-PL-007' },
  { id: 4, name: 'Overhead Water Tank', category: 'Plumbing', sku: 'WR-PL-003' },
  { id: 5, name: 'Weatherproof Exterior Paint', category: 'Paint', sku: 'WR-PT-009' },
  { id: 6, name: 'Premium Door Lock Set', category: 'Hardware', sku: 'WR-HW-021' },
  { id: 7, name: 'LED Batten Light', category: 'Electrical', sku: 'WR-EL-019' },
  { id: 8, name: 'Chrome Bathroom Faucet', category: 'Plumbing', sku: 'WR-PL-011' },
]

export const services = [
  { id: 'retail', name: 'Retail Sales', description: 'Walk in and pick exactly what your project needs, with staff who know the difference between a CPVC fitting and a PVC one.' },
  { id: 'wholesale', name: 'Wholesale Supply', description: 'Standing rates and stock priority for contractors, shop owners and repeat builders across Siwan.' },
  { id: 'bulk', name: 'Bulk Orders', description: 'Site-scale quantities for construction projects, sourced and staged ahead of your delivery date.' },
  { id: 'gst', name: 'GST Billing', description: 'Proper GST-compliant invoices on every order, retail or wholesale, filed and ready for your records.' },
  { id: 'delivery', name: 'Home Delivery', description: 'Free delivery within a 10 KM radius of Kutub Chhapra More, scheduled around your site timeline.' },
  { id: 'installation', name: 'Installation Support', description: 'Coordination with vetted electricians, plumbers and painters so what you buy gets installed right.' },
  { id: 'electrician', name: 'Electrician Support', description: 'On-call electricians for wiring, switchboard and lighting work tied to what you purchase.' },
  { id: 'plumber', name: 'Plumber Support', description: 'Plumbers who install what we sell — pipes, tanks, faucets and sanitary fittings.' },
  { id: 'painter', name: 'Painter Support', description: 'Painting crews briefed on the exact product you bought, from primer to top coat.' },
]

export const brands = [
  { id: 'bajaj', name: 'Bajaj', category: 'Electrical', description: 'Fans, lighting and electrical appliances trusted in Indian homes for decades.' },
  { id: 'birla-opus', name: 'Birla Opus', category: 'Paint', description: 'A new generation of premium paints from the Aditya Birla Group.' },
  { id: 'hindware', name: 'Hindware', category: 'Plumbing', description: 'Sanitary ware and bath fittings synonymous with quality plumbing in India.' },
]

export const timeline = [
  { year: '2017', title: 'W R Enterprises founded', description: 'Opened at Kutub Chhapra More with a single vision — one roof for hardware, electrical, plumbing and paint.' },
  { year: '2019', title: 'Wholesale supply expands', description: 'Began serving contractors and shop owners across Siwan with standing wholesale rates.' },
  { year: '2021', title: 'Authorized brand partnerships', description: 'Became a trusted stockist for Bajaj, Hindware and leading paint manufacturers.' },
  { year: '2023', title: 'Installation network built', description: 'Formalized support with electricians, plumbers and painters for end-to-end project delivery.' },
  { year: '2025', title: 'Home delivery launched', description: 'Introduced 10 KM radius home delivery, bringing the shop to the customer\u2019s doorstep.' },
]

export const values = [
  { title: 'Genuine Products', description: 'Every item on our shelves is sourced directly from authorized brand channels — no exceptions.' },
  { title: 'Fair Pricing', description: 'Wholesale-minded pricing whether you\u2019re buying one switch or a truckload of pipe.' },
  { title: 'Real Support', description: 'We connect you to electricians, plumbers and painters who know our products inside out.' },
  { title: 'Local Accountability', description: 'We live and work in Siwan. Our reputation is our address.' },
]

export const galleryImages = [
  { id: 1, category: 'Electrical', title: 'Wiring & switch aisle' },
  { id: 2, category: 'Plumbing', title: 'Pipe & fitting racks' },
  { id: 3, category: 'Paint', title: 'Paint mixing counter' },
  { id: 4, category: 'Hardware', title: 'Tools & fasteners wall' },
  { id: 5, category: 'Storefront', title: 'W R Enterprises frontage' },
  { id: 6, category: 'Electrical', title: 'LED lighting display' },
  { id: 7, category: 'Plumbing', title: 'Sanitary ware showroom' },
  { id: 8, category: 'Paint', title: 'Exterior paint shelf' },
  { id: 9, category: 'Hardware', title: 'Door lock & hinge counter' },
  { id: 10, category: 'Storefront', title: 'Billing counter' },
  { id: 11, category: 'Electrical', list: [], title: 'Cable coil storage' },
  { id: 12, category: 'Delivery', title: 'Home delivery in progress' },
]

export const reviews = [
  { id: 1, name: 'Rakesh Kumar', rating: 5, text: 'Everything I needed for my house wiring in one visit. Genuine Bajaj products and fair pricing.' },
  { id: 2, name: 'Sanjay Verma', rating: 5, text: 'Ordered CPVC pipes in bulk for a site — delivered on time and billed properly with GST.' },
  { id: 3, name: 'Priya Singh', rating: 5, text: 'They helped me pick the right exterior paint and arranged a painter too. Very professional.' },
  { id: 4, name: 'Mohd. Irfan', rating: 5, text: 'Best hardware shop near Siswan Road. Staff actually knows the products, not just selling.' },
]

export const faqs = [
  { q: 'Do you deliver outside the 10 KM radius?', a: 'Our standard free delivery covers a 10 KM radius from Kutub Chhapra More. For locations beyond that, call us and we\u2019ll work out a delivery arrangement.' },
  { q: 'Can I get a GST invoice for a retail purchase?', a: 'Yes. Every purchase, retail or wholesale, can be billed with a proper GST-compliant invoice.' },
  { q: 'Do you help with installation after purchase?', a: 'Yes. We coordinate with electricians, plumbers and painters we work with regularly, so what you buy gets installed correctly.' },
  { q: 'Do you supply for large construction sites?', a: 'Yes, we handle bulk and wholesale orders for builders and contractors, staged around your project timeline.' },
  { q: 'Which brands do you stock?', a: 'We are stockists for Bajaj (electrical), Birla Opus (paint) and Hindware (plumbing), alongside a wide range of hardware essentials.' },
]
