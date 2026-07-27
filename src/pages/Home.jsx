import Seo from '../components/ui/Seo.jsx'
import Hero from '../components/sections/Hero.jsx'
import TrustBadges from '../components/sections/TrustBadges.jsx'
import Stats from '../components/sections/Stats.jsx'
import CategoriesShowcase from '../components/sections/CategoriesShowcase.jsx'
import FeaturedProducts from '../components/sections/FeaturedProducts.jsx'
import ServicesOverview from '../components/sections/ServicesOverview.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import BrandsMarquee from '../components/sections/BrandsMarquee.jsx'
import GalleryPreview from '../components/sections/GalleryPreview.jsx'
import ReviewsSection from '../components/sections/ReviewsSection.jsx'
import LocationCTA from '../components/sections/LocationCTA.jsx'

export default function Home() {
  return (
    <>
      <Seo
        title="Everything Your Home & Project Needs Under One Roof"
        description="W R Enterprises — Siwan's premium hardware, electrical, plumbing and paint supplier since 2017. Retail, wholesale, GST billing, home delivery and installation support."
      />
      <Hero />
      <TrustBadges />
      <Stats />
      <CategoriesShowcase />
      <FeaturedProducts />
      <ServicesOverview />
      <WhyChooseUs />
      <BrandsMarquee />
      <GalleryPreview />
      <ReviewsSection />
      <LocationCTA />
    </>
  )
}
