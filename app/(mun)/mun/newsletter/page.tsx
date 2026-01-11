"use client";

import Image from "next/image";
import { Container } from "@/components/mun/container";
import { PageHeader } from "@/components/mun/page-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function NewsletterPage() {
    const newsletterImages = Array.from({ length: 7 }, (_, i) => ({
      src: `/newsletter/NL${i + 1}.jpg`,
      alt: `Newsletter page ${i + 1}`,
    }));

  return (
    <>
      <PageHeader
        title="Our Newsletter"
        subtitle="Browse through the pages of our latest and past newsletter issues."
      />
      <div className="py-12 sm:py-16">
        <Container>
          <p className="text-center text-sm text-gray-500 mb-4">Swipe or click the arrows</p>
          <Carousel
            opts={{
              align: "start",
              startIndex: 0,
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {newsletterImages.map((image) => (
                <CarouselItem key={image.src}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-[8/11] items-center justify-center p-0 relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          unoptimized
                          fill
                          className="object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Container>
      </div>
    </>
  );
}
