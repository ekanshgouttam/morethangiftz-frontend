import { UtilityBar } from '@/components/layout/UtilityBar'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/hero/HeroSection'
import { CategorySection } from '@/components/categories/CategorySection'
import { TrustStats } from '@/components/trust/TrustStats'

export default function App() {
  return (
    <div id="top">
      <UtilityBar />
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <TrustStats />
        {/* Temporary spacer so #contact exists until the final CTA is built */}
        <div id="contact" className="h-24" />
      </main>
    </div>
  )
}