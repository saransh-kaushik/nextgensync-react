import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AIInsightBanner from "@/components/ai-insight-banner"
import ServicesSection from "@/components/services-section"
import SafetySection from "@/components/safety-section"
import PersonalizationSection from "@/components/personalization-section"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <HeroSection />
      <AIInsightBanner />
      <ServicesSection />
      <SafetySection />
      <PersonalizationSection />
      <Footer />
    </main>
  )
}
