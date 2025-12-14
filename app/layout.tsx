import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"
import ConditionalNavigation from "@/components/conditional-navigation";

// Lazy load heavy components
const TechBackground = dynamic(() => import("@/components/tech-background"), {
  ssr: false,
})
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: true,
})

const ranade = Inter({
  subsets: ["latin"],
  variable: "--font-ranade",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GSS CLUBS",
  description: "CLUB",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased transition-colors duration-300",
        GeistSans.variable,
        GeistMono.variable,
        ranade.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >

          <TechBackground>
            <ConditionalNavigation />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </TechBackground>
        </ThemeProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
