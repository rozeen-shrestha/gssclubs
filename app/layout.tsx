import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TechBackground from "@/components/tech-background"
import { cn } from "@/lib/utils"
import "./globals.css"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

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
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </TechBackground>
        </ThemeProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
