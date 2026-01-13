import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutUsSection } from "@/components/aboutus-section"
import { FeaturesSection } from "@/components/features-section"
import { CompaniesSection } from "@/components/companies-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WaveShader } from "@/components/wave-shader"

export default function LaundryLandingPage() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <WaveShader />
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CompaniesSection />
        <AboutUsSection />
        {/*<StatsSection />*/}
        {/*<OpinionsSection />*/}
        {/*<CTASection />*/}
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
