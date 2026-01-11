import { HeroSection } from "@/components/mun/sections/hero-section";
import { AboutPreview } from "@/components/mun/sections/about-preview";
import { SGMessage } from "@/components/mun/sections/sg-message";
import { NewsletterPreview } from "@/components/mun/sections/newsletter-preview";
import { Map } from "@/components/mun/sections/map";
import { FadeIn } from "@/components/mun/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FadeIn>
        <AboutPreview />
      </FadeIn>
      <FadeIn>
        <SGMessage />
      </FadeIn>
      <FadeIn>
        <NewsletterPreview />
      </FadeIn>
      <Map />
    </div>
  );
}
