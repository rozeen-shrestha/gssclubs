import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/mun/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { galleryImages } from "@/lib/data";

export function GalleryPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            Moments from GSSMUN
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore highlights from our past conferences and get a glimpse of the GSSMUN experience.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-16"
        >
          <CarouselContent>
            {galleryImages.map((image) => {
              const galleryImage = PlaceHolderImages.find(p => p.id === image.imageId);
              return (
                <CarouselItem key={image.imageId} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-4/3 items-center justify-center p-0 relative">
                        {galleryImage && (
                          <Image
                            src={galleryImage.imageUrl}
                            alt={galleryImage.description}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            data-ai-hint={galleryImage.imageHint}
                          />
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full transition-transform hover:scale-105">
            <Link href="/past-editions">View Full Gallery</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
