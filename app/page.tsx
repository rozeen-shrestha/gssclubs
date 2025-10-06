import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ClubCards from "@/components/club-cards"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hero-dark">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ClubCards />
      <Footer />
    </main>
  )
}
