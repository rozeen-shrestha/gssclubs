import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
// Main layout kept minimal; per-route groups handle wrappers/styles.

// No global wrappers at root

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

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased transition-colors duration-300",
          GeistSans.variable,
          GeistMono.variable,
          ranade.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
