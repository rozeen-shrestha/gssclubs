import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ClubCards from "@/components/club-cards"
import EventsPreview from "@/components/events-preview"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ClubCards />
      <EventsPreview />
    </main>
  )
}
