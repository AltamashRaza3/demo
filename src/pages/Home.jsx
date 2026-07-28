import Seo from '../components/common/Seo.jsx'
import Hero from '../components/home/Hero.jsx'
import TrustBadges from '../components/home/TrustBadges.jsx'
import Stats from '../components/home/Stats.jsx'
import CategoriesShowcase from '../components/home/CategoriesShowcase.jsx'
import FeaturedProducts from '../components/home/FeaturedProducts.jsx'
import ServicesOverview from '../components/home/ServicesOverview.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import BrandsMarquee from '../components/home/BrandsMarquee.jsx'
import GalleryPreview from '../components/sections/GalleryPreview.jsx'
import ReviewsSection from '../components/home/ReviewsSection.jsx'
import LocationCTA from '../components/home/LocationCTA.jsx'

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
