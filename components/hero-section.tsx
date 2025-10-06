"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import TechBackground from "./tech-background"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <TechBackground className="min-h-screen">
      <section className="min-h-screen flex items-start px-6 py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-20 relative">
            <h1 className="font-ranade font-bold text-hero-light text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
              For Students, <span className="text-hero-primary">By Students</span>
            </h1>

            <p className="font-ranade text-hero-muted text-lg md:text-xl leading-relaxed text-pretty max-w-lg">
              Dive into a world of creativity, innovation, and collaboration.<br />
              Explore past highlights, upcoming events, and showcase the power of student creativity at GSS Clubs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-hero-primary hover:bg-hero-primary-hover text-white font-ranade font-medium text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-hero border-0"
              >
                Explore Clubs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-hero-primary text-hero-primary font-ranade font-medium text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-hero"
              >
                Events
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-[600px] z-10 overflow-visible">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Tower Building Image - Central */}
            <div className="relative z-10">
              <img
                src="/images/building.png"
                alt="GSS Tower Building"
                className="w-64 shadow-hero"
                style={{ width: "auto", height: "auto", maxHeight: 600 }}
              />
            </div>

            {/* Science Club - Top left */}
            <motion.div
              className="absolute top-[-80px] left-[20px] w-56 h-56 z-8"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <img
                src="/placeholder.svg?height=224&width=224"
                alt="Science Club"
                className="w-full h-full object-cover rounded-full shadow-hero border-3 border-hero-accent opacity-85"
              />
            </motion.div>

            {/* Robotics Club - Top right */}
            <motion.div
              className="absolute top-[-96px] right-[50px] w-60 h-60 z-15"
              animate={{
                x: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <img
                src="/placeholder.svg?height=240&width=240"
                alt="Robotics Club"
                className="w-full h-full object-cover rounded-full shadow-hero border-3 border-hero-accent"
              />
            </motion.div>

            {/* Art Club - Center right, slightly above center */}
            <motion.div
              className="absolute top-[120px] right-[-80px] w-52 h-52 z-20"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <img
                src="/placeholder.svg?height=288&width=288"
                alt="Art Club"
                className="w-full h-full object-cover rounded-full shadow-hero border-4 border-hero-accent"
              />
            </motion.div>

            {/* Environment Club - Bottom right */}
            <motion.div
              className="absolute bottom-[-72px] right-[60px] w-56 h-56 z-12"
              animate={{
                x: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2.1,
              }}
            >
              <img
                src="/placeholder.svg?height=224&width=224"
                alt="Environment Club"
                className="w-full h-full object-cover rounded-full shadow-hero border-3 border-hero-accent"
              />
            </motion.div>

            {/* Drama Club - Bottom left */}
            <motion.div
              className="absolute bottom-[-98px] left-[40px] w-64 h-64 z-18"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.8,
              }}
            >
              <img
                src="/placeholder.svg?height=256&width=256"
                alt="Drama Club"
                className="w-full h-full object-cover rounded-full shadow-hero border-4 border-hero-accent"
              />
            </motion.div>

            {/* Music Club - Center left, slightly below center */}
            <motion.div
              className="absolute left-[-96px] top-[220px] w-52 h-52 z-6"
              animate={{
                x: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3.0,
              }}
            >
              <img
                src="/placeholder.svg?height=208&width=208"
                alt="Music Club"
                className="w-full h-full object-cover rounded-full shadow-hero border-3 border-hero-accent opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </TechBackground>
  )
}
