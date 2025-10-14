import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ClubCards from "@/components/club-cards"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ClubCards />
    </main>
  )
}
