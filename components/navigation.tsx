"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 py-6
        transition-colors transition-[background] ease-in-out
        ${scrolled
          ? "bg-gradient-to-r from-slate-800 to-slate-900 bg-opacity-100 border-b border-cyan-400/20 shadow-lg backdrop-blur-sm"
          : "bg-transparent border-none shadow-none backdrop-blur-0"
        }
      `}
      style={{ minHeight: "84px" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-hero-primary rounded-xl flex items-center justify-center">
            <div className="w-6 h-6 bg-hero-light rounded-md"></div>
          </div>
          <span className="font-ranade font-bold text-hero-light text-2xl md:text-3xl">GSS CLUBS</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="font-ranade text-hero-light hover:text-hero-primary transition-colors">
            Home
          </a>
          <div className="flex items-center space-x-1">
            <a href="#" className="font-ranade text-hero-light hover:text-hero-primary transition-colors">
              Clubs
            </a>
            <ChevronDown className="w-4 h-4 text-hero-light" />
          </div>
          <a href="#" className="font-ranade text-hero-light hover:text-hero-primary transition-colors">
            Student Corner
          </a>
          <a href="#" className="font-ranade text-hero-light hover:text-hero-primary transition-colors">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <div className="w-6 h-6 text-hero-light">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}
