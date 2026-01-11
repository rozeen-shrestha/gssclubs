"use client";

import Link from "next/link";
import { Container } from "@/components/mun/container";
import { Button } from "@/components/ui/button";

export function NewsletterPreview() {
  return (
    <section className="py-24 sm:py-32 bg-card">
      <Container>
        <div className="text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            Read Our Latest Newsletter
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Catch up on the latest stories, delegate experiences, and behind-the-scenes looks at GSSMUN.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full transition-transform hover:scale-105 border-2 border-white bg-transparent text-white">
              <Link href="/newsletter">View Newsletter</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
