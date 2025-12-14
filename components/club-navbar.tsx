"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Club } from "@/lib/clubs-data"
import { cn } from "@/lib/utils"

type ClubNavbarProps = {
  club: Club
}

const ClubNavbar = ({ club }: ClubNavbarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
  ]

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-6"
        )}
      >
        <div
          className={cn("max-w-7xl mx-auto", scrolled ? "px-3" : "px-6")}
        >
          <motion.div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled
                ? `bg-white border-4 border-black px-6 py-4`
                : "px-0 py-0"
            )}
            style={{
              boxShadow: scrolled ? "8px 8px 0px rgba(0, 0, 0, 1)" : "none",
            }}
          >
            {/* Club Logo and Name */}
            <Link href={`/clubs/${club.id}`}>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={club.logo}
                  alt={`${club.name} logo`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-black"
                />
                <span
                  className={cn(
                    "font-ranade font-black text-xl md:text-2xl uppercase tracking-tight transition-colors",
                    scrolled ? "text-black" : "text-foreground"
                  )}
                >
                  {club.name}
                </span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-ranade font-bold hover:text-neo-teal transition-colors uppercase tracking-wide",
                    scrolled ? "text-black" : "text-foreground"
                  )}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <Link href="/clubs">
                <motion.div
                  className={cn(
                    "flex items-center font-ranade font-bold uppercase tracking-wide border-2 px-4 py-2 transition-colors",
                    scrolled
                      ? "border-black text-black hover:bg-black hover:text-white"
                      : "border-foreground text-foreground hover:bg-foreground hover:text-background"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Clubs
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(true)}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  scrolled
                    ? "text-black hover:bg-gray-200"
                    : "text-foreground hover:bg-gray-800"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background p-6 flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-ranade font-black text-2xl uppercase tracking-tight">
                {club.name}
              </span>
              <motion.button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-800"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-ranade font-bold text-3xl uppercase tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.indexOf(item) * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="py-8 text-center">
              <Link href="/clubs" onClick={() => setMobileMenuOpen(false)}>
                <motion.div
                  className="inline-flex items-center font-ranade font-bold uppercase tracking-wide border-2 border-foreground px-6 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Clubs
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ClubNavbar
