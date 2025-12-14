"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import TechBackground from "./tech-background"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="min-h-0 lg:min-h-screen">
      <section className="flex items-start px-6 pt-32 pb-16 lg:min-h-screen lg:py-28">
        <div className="max-w-7xl mx-auto w-full lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 z-20 relative max-w-full lg:max-w-none">
            <motion.h1
              className="font-ranade font-black text-neo-yellow text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-balance uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              For Students, <span className="text-neo-teal">By Students</span>
            </motion.h1>

            <motion.p
              className="font-ranade text-base sm:text-lg md:text-xl leading-relaxed text-pretty max-w-full lg:max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dive into a world of creativity, innovation, and collaboration.
              Explore past highlights, upcoming events, and showcase the power of student creativity at GSS Clubs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/clubs" className="w-full sm:w-auto cursor-pointer">
                <Button
                  size="lg"
                  className="bg-neo-teal hover:bg-neo-blue text-white font-ranade font-bold text-lg px-8 py-4 transition-all duration-300 shadow-neo hover:shadow-neo-hover border-2 border-black rounded-none w-full cursor-pointer"
                >
                  Explore Clubs
                </Button>
              </Link>
              <Link href="/events" className="w-full sm:w-auto cursor-pointer">
                <Button
                  size="lg"
                  className="bg-neo-blue text-neo-yellow border-2 border-black hover:bg-neo-yellow hover:text-neo-blue font-ranade font-bold text-lg px-8 py-4 transition-all duration-300 shadow-neo hover:shadow-neo-hover rounded-none w-full cursor-pointer"
                >
                  Events
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content: Building + Club Images (hidden on <lg) */}
          <motion.div
            className="hidden lg:flex relative items-center justify-center h-[500px] xl:h-[600px] z-10 overflow-visible scale-[0.6] xl:scale-75 origin-center -translate-y-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, scale: { duration: 0.5 } }}
          >
            {/* Tower Building Image - Central */}
            <div className="relative z-10">
              <img
                src="/images/building.png"
                alt="GSS Tower Building"
                className="w-auto h-auto"
                style={{ maxHeight: "clamp(450px, 60vh, 650px)" }}
              />
            </div>

            {/* Club Images */}
            <div className="block">
              {/* Social Club - Top left */}
              <Link href="/clubs/social-club">
                <motion.div
                  className="absolute top-[-20px] left-[0px] w-34 h-34 xl:w-42 xl:h-42 z-8 cursor-pointer"
                  animate={{
                    x: [0, 6, -2, 0],
                    y: [0, -3, 1, 0],
                    rotate: [0, 2, -1, 0]
                  }}
                  transition={{
                    duration: 7.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="/logo/social.jpg"
                    alt="Social Club"
                    className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black opacity-85"
                  />
                </motion.div>
              </Link>
              {/* IT Club - Top right */}
              <Link href="/clubs/it-club">
                <motion.div
                  className="absolute top-[-60px] right-[70px] w-38 h-38 xl:w-50 xl:h-50 z-18 cursor-pointer"
                  animate={{
                    x: [0, -5, 3, 0],
                    y: [0, 4, -2, 0],
                    rotate: [0, -3, 1, 0]
                  }}
                  transition={{
                    duration: 8.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.3,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="/logo/it.jpg"
                    alt="IT Club"
                    className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black"
                  />
                </motion.div>
              </Link>
              {/* Arts and Literature Club - Center right, slightly above center */}
              <Link href="/clubs/arts-club">
                <motion.div
                  className="absolute top-[140px] right-[-60px] w-32 h-32 xl:w-42 xl:h-42 z-20 cursor-pointer"
                  animate={{
                    x: [0, 4, -1, 0],
                    y: [0, -4, 2, 0],
                    rotate: [0, 4, -2, 0]
                  }}
                  transition={{
                    duration: 6.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.9,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="/logo/arts.jpg"
                    alt="Arts and Literature Club"
                    className="w-full h-full object-cover rounded-full shadow-neo-lg border-4 border-black"
                  />
                </motion.div>
              </Link>
              {/* Science and Innovation Club - Bottom right */}
              <Link href="/clubs/science-club">
                <motion.div
                  className="absolute bottom-[0px] right-[80px] w-32 h-32 xl:w-40 xl:h-40 z-12 cursor-pointer"
                  animate={{
                    x: [0, -7, 2, 0],
                    y: [0, 3, -1, 0],
                    rotate: [0, -2, 3, 0]
                  }}
                  transition={{
                    duration: 7.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2.4,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="/logo/science.jpg"
                    alt="Science and Innovation Club"
                    className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black"
                  />
                </motion.div>
              </Link>
              {/* Sports Club - Bottom left */}
              <Link href="/clubs/sports-club">
                <motion.div
                  className="absolute bottom-[-60px] left-[60px] w-36 h-36 xl:w-48 xl:h-48 z-18 cursor-pointer"
                  animate={{
                    x: [0, 5, -3, 0],
                    y: [0, -4, 2, 0],
                    rotate: [0, 3, -1, 0]
                  }}
                  transition={{
                    duration: 8.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.6,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="/logo/sports.jpg"
                    alt="Sports Club"
                    className="w-full h-full object-cover rounded-full shadow-neo-lg border-4 border-black"
                  />
                </motion.div>
              </Link>
              {/* MUN Club - Center left, slightly below center */}
              <Link href="/clubs/mun-club">
                <motion.div
                  className="absolute left-[-70px] top-[200px] w-32 h-32 xl:w-42 xl:h-42 z-6 cursor-pointer"
                  animate={{
                    x: [0, -4, 4, 0],
                    y: [0, 5, -3, 0],
                    rotate: [0, -4, 2, 0]
                  }}
                  transition={{
                    duration: 7.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2.8,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="/logo/mun.jpg"
                    alt="MUN Club"
                    className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black opacity-80"
                  />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
