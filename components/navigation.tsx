"use client"

import { useEffect, useState, memo } from "react"
import { ChevronDown, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [clubsOpen, setClubsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const clubs = [
    { name: "IT Club", id: "it-club" },
    { name: "Arts and Literature Club", id: "arts-club" },
    { name: "MUN Club", id: "mun-club" },
    { name: "Social Club", id: "social-club" },
    { name: "Sports Club", id: "sports-club" },
    { name: "Science and Innovation Club", id: "science-club" }
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-6"}`}
    >
      <div className={`max-w-7xl mx-auto ${scrolled ? "px-3" : "px-6"}`}>
        <motion.div
          className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white border-4 border-black shadow-neo px-6 py-4" : "px-0 py-0"}`}
          animate={{
            boxShadow: scrolled ? "8px 8px 0px rgba(0, 0, 0, 1)" : "none",
          }}
        >
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className={`font-ranade font-black text-2xl md:text-3xl uppercase tracking-tight transition-colors ${scrolled ? "text-black" : "text-foreground"}`}>
              GSS CLUBS
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { name: "Home", href: "/" },
              { name: "Student Corner", href: "/student-corner" },
              { name: "Contact", href: "/contact" }
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-ranade font-bold hover:text-neo-teal transition-colors uppercase tracking-wide ${scrolled ? "text-black" : "text-foreground"}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setClubsOpen(true)}
              onMouseLeave={() => setClubsOpen(false)}
            >
              <motion.button
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`font-ranade font-bold hover:text-neo-teal transition-colors uppercase tracking-wide ${scrolled ? "text-black" : "text-foreground"}`}
                >
                  Clubs
                </span>
                <motion.div
                  animate={{ rotate: clubsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-4 h-4 ${scrolled ? "text-black" : "text-foreground"}`} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {clubsOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white border-4 border-black shadow-neo-lg"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {clubs.map((club, index) => (
                      <motion.a
                        key={club.name}
                        href={`/clubs/${club.id}`}
                        className="block px-6 py-3 font-ranade font-bold text-black hover:bg-neo-teal hover:text-white transition-colors border-b-2 border-black last:border-b-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        {club.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 ${scrolled ? "text-black" : "text-foreground"}`}>
              {mobileMenuOpen ? (
                <X strokeWidth={3} />
              ) : (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[72px] bg-white z-40 md:hidden border-t-4 border-black"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Mobile Menu Items */}
              <div className="p-6 space-y-6">
                {[
                  { name: "Home", href: "/" },
                  { name: "Student Corner", href: "/student-corner" },
                  { name: "Contact", href: "/contact" }
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block font-ranade font-bold text-black text-2xl uppercase tracking-wide"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Clubs Section */}
                <div className="pt-4 border-t-2 border-black">
                  <h3 className="font-ranade font-black text-black text-xl uppercase tracking-wide mb-4">
                    Clubs
                  </h3>
                  <div className="space-y-3">
                    {clubs.map((club, index) => (
                      <motion.a
                        key={club.name}
                        href={`/clubs/${club.id}`}
                        className="block font-ranade font-bold text-black text-lg pl-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {club.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default memo(Navigation)
