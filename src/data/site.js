// Central content source — keeps copy separate from components.
// Replace placeholder values with real business data/photos when available.

import bulbImg from "../assets/images/products/bulb.png";
import doorLocksImg from "../assets/images/products/doorlocks.png";
import faucetImg from "../assets/images/products/faucet.png";
import paintImg from "../assets/images/products/paint.png";
import plumbingPipeImg from "../assets/images/products/plumbing pipe.png";
import switchesImg from "../assets/images/products/switches.png";
import waterTankImg from "../assets/images/products/watertank1.png";
import wiresImg from "../assets/images/products/wires.png";


export const company = {
  name: 'W R Enterprises',
  established: 2017,
  owners: ['Md. Asif', 'Yasir Wali'],
  rating: 5.0,
  reviewCount: 120,
  phone: "+91 93517 85674",
  whatsapp: "919351785674",
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
  { label: 'Trusted Brands', value: 7, suffix: '' },
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
  {
    id: 1,
    name: "L&T Modular Switch Series",
    category: "Electrical",
    sku: "WR-EL-014",
    brand: "L&T",
    image: switchesImg,
  },
  {
    id: 2,
    name: "Bajaj House Wires",
    category: "Electrical",
    sku: "WR-EL-002",
    brand: "Bajaj",
    image: wiresImg,
  },
  {
    id: 3,
    name: "Hindware CPVC Plumbing Pipe",
    category: "Plumbing",
    sku: "WR-PL-007",
    brand: "Hindware",
    image: plumbingPipeImg,
  },
  {
    id: 4,
    name: "Ashirvad Overhead Water Tank",
    category: "Plumbing",
    sku: "WR-PL-003",
    brand: "Ashirvad",
    image: waterTankImg,
  },
  {
    id: 5,
    name: "Indigo / Birla Opus Exterior Paint",
    category: "Paint",
    sku: "WR-PT-009",
    brand: "Indigo Paints",
    image: paintImg,
  },
  {
    id: 6,
    name: "Premium Door Lock Set",
    category: "Hardware",
    sku: "WR-HW-021",
    brand: "Hardware",
    image: doorLocksImg,
  },
  {
    id: 7,
    name: "LED Bulb",
    category: "Electrical",
    sku: "WR-EL-019",
    brand: "Bajaj",
    image: bulbImg,
  },
  {
    id: 8,
    name: "Chrome Bathroom Faucet",
    category: "Plumbing",
    sku: "WR-PL-011",
    brand: "Hindware",
    image: faucetImg,
  },
];

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
  {
    id: "bajaj",
    name: "Bajaj",
    category: "Electrical",
    description:
      "Fans, lighting and electrical appliances trusted in Indian homes for decades.",
  },
  {
    id: "birla-opus",
    name: "Birla Opus",
    category: "Paint",
    description:
      "A new generation of premium paints from the Aditya Birla Group.",
  },
  {
    id: "hindware",
    name: "Hindware",
    category: "Plumbing",
    description:
      "Sanitary ware and bath fittings synonymous with quality plumbing in India.",
  },
  {
    id: "cera",
    name: "Cera",
    category: "Plumbing",
    description:
      "Premium sanitaryware, faucets and wellness products known for quality and modern design.",
  },
  {
    id: "indigo",
    name: "Indigo Paints",
    category: "Paint",
    description:
      "One of India's leading paint brands, offering premium interior, exterior, waterproofing and decorative coating solutions.",
  },
  {
    id: "lnt",
    name: "L&T Switchgear",
    category: "Electrical",
    description:
      "Reliable modular switches, MCBs, distribution boards and electrical protection solutions trusted for residential, commercial and industrial installations.",
  },
];

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
]

export const reviews = [
  { id: 1, name: 'Rakesh Kumar', rating: 5, text: 'Everything I needed for my house wiring in one visit. Genuine Bajaj products and fair pricing.' },
  { id: 2, name: 'Sanjay Verma', rating: 5, text: 'Ordered CPVC pipes in bulk for a site — delivered on time and billed properly with GST.' },
  { id: 3, name: 'Priya Singh', rating: 5, text: 'They helped me pick the right exterior paint and arranged a painter too. Very professional.' },
  { id: 4, name: 'Mohd. Irfan', rating: 5, text: 'Best hardware shop near Siswan Road. Staff actually knows the products, not just selling.' },
]

export const faqs = [
  {
    q: "Do you deliver outside the 10 KM radius?",
    a: "Our standard free delivery covers a 10 KM radius from Kutub Chhapra More. For locations beyond that, please call us and we'll arrange delivery based on your location and order size.",
  },
  {
    q: "Can I get a GST invoice for my purchase?",
    a: "Yes. We provide GST-compliant invoices for both retail and wholesale purchases.",
  },
  {
    q: "Do you supply materials for large construction projects?",
    a: "Absolutely. We regularly supply contractors, builders, schools, commercial buildings, and residential projects with bulk quantities at competitive rates.",
  },
  {
    q: "Do you offer wholesale pricing?",
    a: "Yes. We offer special wholesale pricing for contractors, electricians, plumbers, painters, retailers, and bulk buyers. Contact us for quotation and dealer rates.",
  },
  {
    q: "Can I place an order over WhatsApp?",
    a: "Yes. Simply send us your product list or requirements on WhatsApp. We'll confirm availability, pricing, and arrange pickup or delivery.",
  },
  {
    q: "Which brands are available at W R Enterprises?",
    a: "We stock trusted brands including Bajaj, L&T Switchgear, Birla Opus, Indigo Paints, Hindware, CERA, and many other leading electrical, plumbing, hardware, and paint brands.",
  },
  {
    q: "Do you provide installation services?",
    a: "Yes. We can connect you with experienced electricians, plumbers, and painters who regularly work with our products for hassle-free installation.",
  },
  {
    q: "Can I order products that are not currently in stock?",
    a: "Yes. If a product is unavailable, we can usually arrange it through our supplier network within a short time. Contact us for availability.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, UPI, PhonePe, Google Pay, Paytm, bank transfers, and other commonly used digital payment methods.",
  },
  {
    q: "What are your business hours?",
    a: "We are open Monday to Saturday from 8:00 AM to 8:30 PM and Sunday from 9:00 AM to 2:00 PM.",
  },
  {
    q: "Where is W R Enterprises located?",
    a: "We are located at Kutub Chhapra More, Siswan–Siwan Road, Siwan, Bihar 841241, with convenient parking and easy access from nearby areas.",
  },
  {
    q: "How can I contact W R Enterprises?",
    a: "Call us at +91 93517 85674 or send us a message on WhatsApp. Our team is happy to assist with quotations, product availability, and delivery information.",
  },
];


export const socialLinks = {
  phone: "+91 93517 85674",
  whatsapp: "https://wa.me/919351785674",
  maps: "https://maps.google.com/?cid=16893529517452019266",
  email: "info@wrenterprises.in",
};

export const businessHighlights = [
  "Established in 2017",
  "Authorized Brand Dealer",
  "GST Billing Available",
  "Bulk & Wholesale Supply",
  "10 KM Home Delivery",
  "Professional Installation Support",
  "Premium Electrical, Plumbing, Hardware & Paint Solutions",
];