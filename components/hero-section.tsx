"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import TechBackground from "./tech-background"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeroSection() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-start px-6 pt-32 pb-20 lg:py-28">
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
              <Button
                size="lg"
                className="bg-neo-teal hover:bg-neo-blue text-white font-ranade font-bold text-lg px-8 py-4 transition-all duration-300 shadow-neo hover:shadow-neo-hover border-2 border-black rounded-none w-full sm:w-auto"
              >
                Explore Clubs
              </Button>
              <Button
                size="lg"
                className="bg-neo-blue text-neo-yellow border-2 border-black hover:bg-neo-yellow hover:text-neo-blue font-ranade font-bold text-lg px-8 py-4 transition-all duration-300 shadow-neo hover:shadow-neo-hover rounded-none w-full sm:w-auto"
              >
                Events
              </Button>
            </motion.div>
          </div>

          {/* Right Content: Building + Club Images (hidden on <lg) */}
          <motion.div
            className="hidden lg:flex relative items-center justify-center h-[600px] xl:h-[700px] z-10 overflow-visible scale-75 xl:scale-100 origin-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Tower Building Image - Central */}
            <div className="relative z-10">
              <img
                src="/images/building.png"
                alt="GSS Tower Building"
                className="w-auto h-auto"
                style={{ maxHeight: "clamp(400px, 60vh, 600px)" }}
              />
            </div>

            {/* Club Images */}
            <div className="block">
              {/* Science Club - Top left */}
              <motion.div
                className="absolute top-[-60px] left-[-20px] w-40 h-40 xl:w-56 xl:h-56 z-8"
                animate={{
                  x: [0, 8, -3, 0],
                  y: [0, -4, 2, 0],
                  rotate: [0, 3, -2, 0]
                }}
                transition={{
                  duration: 7.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/placeholder.svg?height=224&width=224"
                  alt="Science Club"
                  className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black opacity-85"
                />
              </motion.div>
              {/* Robotics Club - Top right */}
              <motion.div
                className="absolute top-[-120px] right-[30px] w-44 h-44 xl:w-60 xl:h-60 z-15"
                animate={{
                  x: [0, -7, 4, 0],
                  y: [0, 5, -3, 0],
                  rotate: [0, -4, 2, 0]
                }}
                transition={{
                  duration: 8.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.3,
                }}
              >
                <img
                  src="/placeholder.svg?height=240&width=240"
                  alt="Robotics Club"
                  className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black"
                />
              </motion.div>
              {/* Art Club - Center right, slightly above center */}
              <motion.div
                className="absolute top-[140px] right-[-100px] w-36 h-36 xl:w-52 xl:h-52 z-20"
                animate={{
                  x: [0, 6, -2, 0],
                  y: [0, -6, 3, 0],
                  rotate: [0, 5, -3, 0]
                }}
                transition={{
                  duration: 6.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.9,
                }}
              >
                <img
                  src="/placeholder.svg?height=288&width=288"
                  alt="Art Club"
                  className="w-full h-full object-cover rounded-full shadow-neo-lg border-4 border-black"
                />
              </motion.div>
              {/* Environment Club - Bottom right */}
              <motion.div
                className="absolute bottom-[-50px] right-[40px] w-40 h-40 xl:w-56 xl:h-56 z-12"
                animate={{
                  x: [0, -9, 3, 0],
                  y: [0, 4, -2, 0],
                  rotate: [0, -3, 4, 0]
                }}
                transition={{
                  duration: 7.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.4,
                }}
              >
                <img
                  src="/placeholder.svg?height=224&width=224"
                  alt="Environment Club"
                  className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black"
                />
              </motion.div>
              {/* Drama Club - Bottom left */}
              <motion.div
                className="absolute bottom-[-110px] left-[20px] w-44 h-44 xl:w-64 xl:h-64 z-18"
                animate={{
                  x: [0, 7, -4, 0],
                  y: [0, -5, 3, 0],
                  rotate: [0, 4, -2, 0]
                }}
                transition={{
                  duration: 8.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.6,
                }}
              >
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Drama Club"
                  className="w-full h-full object-cover rounded-full shadow-neo-lg border-4 border-black"
                />
              </motion.div>
              {/* Music Club - Center left, slightly below center */}
              <motion.div
                className="absolute left-[-110px] top-[200px] w-36 h-36 xl:w-52 xl:h-52 z-6"
                animate={{
                  x: [0, -6, 5, 0],
                  y: [0, 6, -4, 0],
                  rotate: [0, -5, 3, 0]
                }}
                transition={{
                  duration: 7.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.8,
                }}
              >
                <img
                  src="/placeholder.svg?height=208&width=208"
                  alt="Music Club"
                  className="w-full h-full object-cover rounded-full shadow-neo border-4 border-black opacity-80"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
