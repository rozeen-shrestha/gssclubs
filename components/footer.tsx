"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const clubNames = ["IT Club", "Arts and Literature Club", "MUN Club", "Social Club", "Sports Club", "Science and Innovation Club"]
  const mainLinks = ["Home", "Student Corner", "Contact"]
  const socials = [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.89-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.86c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62a4.27 4.27 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
        </svg>
      ),
    },
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
            <div className="flex space-x-4 mt-2">
              {socials.map((s, index) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="bg-neo-teal border-4 border-black shadow-neo p-2 text-white hover:bg-neo-yellow hover:text-black transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
                    x: 2,
                    y: 2,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
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
                  key={club}
                  href="#"
                  className="font-ranade font-bold text-white hover:text-neo-teal transition-colors duration-300 text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4, color: "#22d3ee" }}
                >
                  {club}
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
                  key={link}
                  href="#"
                  className="block font-ranade font-bold text-white hover:text-neo-teal transition-colors duration-300 text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4, color: "#22d3ee" }}
                >
                  {link}
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
            href="credits"
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
