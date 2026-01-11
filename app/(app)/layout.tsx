import type React from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "../globals.css";
import ConditionalNavigation from "@/components/conditional-navigation";

const TechBackground = dynamic(() => import("@/components/tech-background"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: true,
});

const ranade = Inter({
  subsets: ["latin"],
  variable: "--font-ranade",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GSS Clubs — Global School of Science",
    template: "%s — GSS Clubs",
  },
  description:
    "Explore student-run clubs, events, and activities at Global School of Science. Discover upcoming workshops, competitions, and past highlights.",
};

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased transition-colors duration-300",
        GeistSans.variable,
        GeistMono.variable,
        ranade.variable
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TechBackground>
          <ConditionalNavigation />
          {children}
        </TechBackground>
      </ThemeProvider>
      <Footer />
    </div>
  );
}
