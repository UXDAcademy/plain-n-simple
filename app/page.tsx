import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InteractiveDemo } from "@/components/interactive-demo"
import { BentoGrid } from "@/components/bento-grid"
import { VideoSection } from "@/components/video-section"
import { PreOrderSection } from "@/components/pre-order-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#FFF9F2]">
      <Navigation />
      <HeroSection />
      <InteractiveDemo />
      <BentoGrid />
      <VideoSection />
      <PreOrderSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
