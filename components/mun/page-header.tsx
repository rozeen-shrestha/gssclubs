import { Container } from "@/components/mun/container";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="py-12 sm:py-16 bg-card">
      <Container className="text-center">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-accent">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl sm:text-2xl text-muted-foreground">
          {subtitle}
        </p>
      </Container>
    </div>
  );
}
