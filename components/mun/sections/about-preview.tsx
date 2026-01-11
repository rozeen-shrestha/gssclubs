import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/mun/container";
import { Button } from "@/components/ui/button";


export function AboutPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/previewimg.jpg"
              alt="Conference preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              A Tradition of Diplomatic Excellence
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              GSSMUN has established itself as a premier platform for young leaders to engage in fruitful debate, craft innovative solutions, and build lasting connections. Our mission is to inspire the next generation of global citizens through a realistic and challenging simulation of international diplomacy.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full transition-transform hover:scale-105">
                <Link href="/about-us">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
