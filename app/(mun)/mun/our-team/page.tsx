import Image from "next/image";
import { Container } from "@/components/mun/container";
import { PageHeader } from "@/components/mun/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";

export default function OurTeamPage() {
  return (
    <>
      <PageHeader
        title="Meet the Secretariat"
        subtitle="The dedicated team working behind the scenes to make GSSMUN 4.0 a memorable experience."
      />
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src={`/team/${member.imageId}.jpg`}
                    alt={`Portrait of ${member.name}`}
                    unoptimized
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 bg-card">
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-accent font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
