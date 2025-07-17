import HeroSection from "./components/hero-section"
import FeaturedDishesSection from "./components/featured-dishes-section"
import AboutPreviewSection from "./components/about-preview-section"
import ChefsPreviewSection from "./components/chefs-preview-section"
import MenuPreviewSection from "./components/menu-preview-section"
import DesignPreviewSection from "./components/design-preview-section"
import CTASection from "./components/cta-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedDishesSection />
      <AboutPreviewSection />
      <ChefsPreviewSection />
      <MenuPreviewSection />
      <DesignPreviewSection />
      <CTASection />
    </div>
  )
}
