import Image from "next/image";
import { Container } from "@/components/mun/container";
import { sponsors as sponsorData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Sponsors() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            Our Esteemed Sponsors
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are grateful for the generous support of our partners who make this conference possible.
          </p>
        </div>
        <div className="mt-16 flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {sponsorData.map((sponsor) => {
            const sponsorImage = PlaceHolderImages.find(p => p.id === sponsor.imageId);
            return (
              <div key={sponsor.name} className="relative h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                {sponsorImage && (
                  <Image
                    src={sponsorImage.imageUrl}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    data-ai-hint={sponsorImage.imageHint}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
