import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ClubCards from "@/components/club-cards"
import EventsPreview from "@/components/events-preview"
import SchoolContact from "@/components/school-contact"
import Link from "next/link"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ClubCards />
      <EventsPreview />
      <div className="py-12 px-6">
        <SchoolContact />
      </div>
      <div className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/contact">
            <div className="bg-neo-teal hover:bg-neo-blue text-white font-ranade font-bold text-xl px-8 py-6 border-4 border-black shadow-neo hover:shadow-neo-hover transition-all duration-300 cursor-pointer">
              Get in Touch with Us
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
