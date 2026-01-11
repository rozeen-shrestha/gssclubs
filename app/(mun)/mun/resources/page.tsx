import { Container } from "@/components/mun/container";
import { PageHeader } from "@/components/mun/page-header";
import { resources } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Delegate Resources"
        subtitle="Essential documents and guides to help you prepare for GSSMUN 4.0."
      />
      <div className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <Card>
            <CardContent className="p-6">
                <ul className="divide-y divide-border">
                {resources.map((resource) => (
                    <li key={resource.name} className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-accent" />
                        <div>
                            <p className="font-semibold text-lg">{resource.name}</p>
                            <p className="text-sm text-muted-foreground">{resource.type} Document</p>
                        </div>
                    </div>
                    <Button asChild variant="ghost" className="gap-2">
                        <a href={resource.link} download>
                            <Download className="h-4 w-4" />
                            Download
                        </a>
                    </Button>
                    </li>
                ))}
                </ul>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  );
}
