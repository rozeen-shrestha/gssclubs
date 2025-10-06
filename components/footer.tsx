"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const clubNames = ["Science Club", "Robotics Club", "Art Club", "Environment Club", "Drama Club", "Music Club"]
  const mainLinks = ["Home", "Student Corner", "Contact"]
  const socials = [
    { name: "Twitter", href: "#", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.89-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.86c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62a4.27 4.27 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/></svg>
    )},
    { name: "Instagram", href: "#", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/></svg>
    )},
    { name: "Facebook", href: "#", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/></svg>
    )}
  ]
  return (
    <footer className="relative bg-gradient-to-t from-slate-900 to-slate-800 border-t border-cyan-400/30 py-14 shadow-2xl overflow-hidden">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-cyan-700/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-stretch gap-12 h-full">
          {/* Logo and Socials */}
          <div className="flex flex-col items-start gap-6 md:w-1/3 self-stretch h-full">
            <div>
              <div className="w-12 h-12 bg-hero-primary rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-hero-light rounded-md"></div>
              </div>
              <span className="font-ranade font-bold text-hero-light text-3xl md:text-4xl">GSS CLUBS</span>
            </div>
            <p className="text-hero-muted text-base max-w-xs">
              Uniting students through creativity, innovation, and collaboration. Join a club and be part of the GSS journey!
            </p>
            <div className="flex space-x-4 mt-2">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="text-hero-muted hover:text-hero-primary transition-colors duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Club Names Group */}
          <div className="flex flex-col self-stretch h-full md:w-1/3 md:pl-0 md:pr-0">
            <h3 className="font-ranade font-bold text-xl text-hero-light mb-6">Our Clubs</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
              {clubNames.map((club, index) => (
                <motion.a
                  key={club}
                  href="#"
                  className="font-ranade text-hero-muted hover:text-hero-primary transition-colors duration-300 text-base md:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {club}
                </motion.a>
              ))}
            </div>
          </div>
          {/* Main Links Group */}
          <div className="flex flex-col items-start self-stretch h-full">
            <h3 className="font-ranade font-bold text-xl text-hero-light mb-6">Quick Links</h3>
            <div className="space-y-3">
              {mainLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block font-ranade text-hero-muted hover:text-hero-primary transition-colors duration-300 text-base md:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-14 pt-8 border-t border-hero-accent/20 w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="font-ranade text-hero-muted text-base md:text-lg">© 2024 GSS Clubs. All rights reserved.</p>
          <a
            href="#credits"
            className="font-ranade text-hero-muted hover:text-hero-primary transition-colors duration-300 text-base md:text-lg"
          >
            Credits
          </a>
        </div>
      </div>
    </footer>
  )
}
