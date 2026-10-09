import { UtilityBar } from '@/components/layout/UtilityBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/hero/HeroSection'
import { CategorySection } from '@/components/categories/CategorySection'
import { TrustStats } from '@/components/trust/TrustStats'
import { ProductSection } from '@/components/products/ProductSection'
import { BrandsSection } from '@/components/brands/BrandsSection'
import { CorporateGiftingSection } from '@/components/corporate/CorporateGiftingSection'
import { ClientsSection } from '@/components/clients/ClientsSection'
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection'
import { FinalCTA } from '@/components/corporate/FinalCTA'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { SearchOverlay } from '@/components/search/SearchOverlay'
import { drinkwareProducts, featuredProducts, giftSets } from '@/data/products'

export default function App() {
  return (
    <div id="top">
      <UtilityBar />
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <TrustStats />
        <ProductSection id="featured" title="Featured Products" products={featuredProducts} variant="horizontal" tone="grey" />
        <ProductSection
          id="drinkware"
          title="Drinkware & Kitchenware"
          subtitle="Extraordinary Events and Exhibition Products Delivered"
          products={drinkwareProducts}
        />
        <ProductSection id="gift-sets" title="Gift Sets" subtitle="We have unique Apparels no matter how you put it" products={giftSets} />
        <BrandsSection />
        <CorporateGiftingSection />
        <ClientsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
    </div>
  )
}