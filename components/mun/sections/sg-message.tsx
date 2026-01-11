import Image from "next/image";
import { Container } from "@/components/mun/container";

export function SGMessage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              A Message from the Secretariat
            </h2>
            <div className="mt-8 relative">
              <blockquote className="text-xl text-muted-foreground relative z-10">
                <p>Esteemed Delegates,</p><br />

                <p>It is with immense honor and heartfelt enthusiasm that I welcome you to this year’s conference. Serving as your Secretary-General is a privilege beyond words, and I am truly delighted to witness the gathering of such talented, inquisitive, and passionate young minds under one roof.</p><br />

                <p>What distinguishes our conference from others is not merely its structure, but the vision behind it. We have brought together the finest Executive Board members from across Nepal individuals who have not only excelled within the Model UN circuit but have also inspired countless delegates through their dedication, intellect, and leadership. Their presence ensures that every committee session is marked by rigorous debate, thoughtful mentorship, and an unwavering standard of excellence.</p><br />

                <p>Our foremost priority is you the delegates. Every decision, every plan, and every detail of this conference has been designed with your experience at its core. We aim to create an environment where your voices are heard, your ideas are valued, and your potential is realized. Whether this is your first conference or one of many, we want this to be an experience that challenges you, empowers you, and stays with you long after the closing ceremony.This conference is more than just a simulation of diplomacy it is a space for growth, courage, and connection.</p><br />

                <p>I encourage you to debate with purpose, collaborate with respect, and embrace every opportunity to learn from those around you. Remember, what defines a true delegate is not the placard they hold, but the passion and conviction they bring to the table.</p><br />

                <p>On behalf of the entire Secretariat, I extend my warmest welcome to each of you. We cannot wait to see the brilliance, creativity, and spirit you bring to this year’s conference. Together, let us make it an unforgettable celebration of dialogue, leadership, and youth diplomacy.</p><br />

                <p>With warm regards and anticipation,</p>
              </blockquote>
            </div>
            <div className="mt-8">
              <p className="font-semibold text-lg text-foreground">Jaya Bhattarai</p>
              <p className="text-muted-foreground">Secretary-General, GSSMUN 4.0</p>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl order-first lg:order-last">
            <Image
              src="/sg.png"
              alt="Secretary-General portrait"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
