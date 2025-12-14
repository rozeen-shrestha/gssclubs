"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const clubNames = [
    { name: "IT Club", id: "it-club" },
    { name: "Arts and Literature Club", id: "arts-club" },
    { name: "MUN Club", id: "mun-club" },
    { name: "Social Club", id: "social-club" },
    { name: "Sports Club", id: "sports-club" },
    { name: "Science and Innovation Club", id: "science-club" }
  ]
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Student Corner", href: "/student-corner" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <footer className="relative bg-neo-blue border-t-4 border-black py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-stretch gap-12 h-full">
          {/* Logo and Socials */}
          <motion.div
            className="flex flex-col items-start gap-6 md:w-1/3 self-stretch h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-ranade font-black text-neo-yellow text-3xl md:text-4xl uppercase tracking-tight">
                GSS CLUBS
              </span>
            </motion.div>
            <motion.p
              className="text-white font-medium text-base max-w-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Uniting students through creativity, innovation, and collaboration. Join a club and be part of the GSS
              journey!
            </motion.p>
          </motion.div>

          {/* Club Names Group */}
          <motion.div
            className="flex flex-col self-stretch h-full md:w-1/3 md:pl-0 md:pr-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-ranade font-black text-2xl text-neo-yellow mb-6 uppercase tracking-tight">Our Clubs</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
              {clubNames.map((club, index) => (
                <motion.a
                  key={club.name}
                  href={`/clubs/${club.id}`}
                  className="font-ranade font-bold text-white hover:text-neo-teal transition-colors duration-300 text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4, color: "#22d3ee" }}
                >
                  {club.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Main Links Group */}
          <motion.div
            className="flex flex-col items-start self-stretch h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-ranade font-black text-2xl text-neo-yellow mb-6 uppercase tracking-tight">
              Quick Links
            </h3>
            <div className="space-y-3">
              {mainLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block font-ranade font-bold text-white hover:text-neo-teal transition-colors duration-300 text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4, color: "#22d3ee" }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-14 pt-8 border-t-4 border-black w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-ranade font-bold text-white text-base uppercase tracking-wide">
            © 2025 GSS Clubs. All rights reserved.
          </p>
          <motion.a
            href="/credits"
            className="font-ranade font-bold text-white hover:text-neo-yellow transition-colors duration-300 text-base uppercase tracking-wide"
            whileHover={{ scale: 1.05, x: 4 }}
          >
            Credits
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}
