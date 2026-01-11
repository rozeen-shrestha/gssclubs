import Image from "next/image";
import { Container } from "@/components/mun/container";
import { PageHeader } from "@/components/mun/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutUsPage() {


  return (
    <>
      <PageHeader
        title="About GSSMUN"
        subtitle="Forging Future Leaders Through Diplomacy"
      />
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/aboutus.jpg"
                alt="About GSSMUN"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-xl text-muted-foreground">
              <h2 className="font-headline text-3xl font-bold text-foreground">Our Mission</h2>
              <p>
                The GSS Model United Nations conference is dedicated to providing an intellectually stimulating environment where students can hone their skills in diplomacy, negotiation, and public speaking. We aim to foster a deeper understanding of global issues and the intricacies of international relations.
              </p>
              <h2 className="font-headline text-3xl font-bold text-foreground">Our Vision</h2>
              <p>
                Our vision is to become a premier Model UN conference in the region, recognized for its academic rigor, professional organization, and the quality of its debate. We strive to create an inclusive platform that empowers young people to become conscientious and effective global leaders.
              </p>
               <h2 className="font-headline text-3xl font-bold text-foreground">Our History</h2>
              <p>
                Founded in 2022, GSSMUN has grown into a significant event on the collegiate MUN circuit. Each year, we have expanded our committees, increased delegate participation, and elevated the level of discourse, building a legacy of excellence and community.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
