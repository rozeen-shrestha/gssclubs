import Link from "next/link";
import { Container } from "@/components/mun/container";
import { Logo } from "@/components/mun/logo";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { CSSProperties } from "react";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-background">
      <Container
        className="flex flex-col md:flex-row justify-between gap-8 border-t border-white pt-8"
      >
        {/* Left Section: Logo, Description, Social Links */}
        <div className="flex flex-col gap-4 items-center md:items-start flex-1">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-16" /> {/* Increased image size */}
            <span className="text-2xl font-bold text-white">GSSMUN</span> {/* Added GSSMUN text */}
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col flex-1">
          <h3 className="font-headline text-lg font-medium">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex flex-col flex-1">
          <h3 className="font-headline text-lg font-medium">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>gssmunclub@gmail.com</li>
            <li>Global School of Science, Kathmandu, Nepal</li>
          </ul>
        </div>
      </Container>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Design by @gssitclub | © {new Date().getFullYear()} GSSMUN — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
