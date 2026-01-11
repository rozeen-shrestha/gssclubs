import Image from "next/image";
import { Container } from "@/components/mun/container";
import { PageHeader } from "@/components/mun/page-header";
import { Card } from "@/components/ui/card";
import { pastEditions } from "@/lib/data";

export default function PastEditionsPage() {
  return (
    <>
      <PageHeader
        title="Our Legacy"
        subtitle="A look back at the themes, debates, and moments that have defined GSSMUN over the years."
      />
      <div className="py-12 sm:py-16">
        <Container>
          <div className="space-y-24">
            {pastEditions.map((edition) => (
              <Card key={edition.year} className="grid md:grid-cols-5 overflow-hidden border-2">
                <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={`/past-editions/${edition.year}.jpg`}
                    alt={`GSSMUN ${edition.year}`}
                    unoptimized
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
                  <p className="text-accent font-semibold text-lg">{edition.year}</p>
                  <h3 className="font-headline text-4xl font-bold mt-2">GSSMUN {edition.year - 2022}.0</h3>
                  <p className="mt-4 text-muted-foreground text-base">
                    The {edition.year} edition brought together hundreds of delegates to discuss critical global challenges, fostering a spirit of collaboration and innovative thinking. Keynote speakers inspired attendees, and intense debates led to well-crafted resolutions.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
