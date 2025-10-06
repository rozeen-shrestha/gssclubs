"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface TechBackgroundProps {
  children: React.ReactNode
  className?: string
  showGlow?: boolean
  showGrid?: boolean
  showCircuits?: boolean
}

export default function TechBackground({
  children,
  className = "",
  showGlow = true,
  showGrid = true,
  showCircuits = true,
}: TechBackgroundProps) {
  const glowRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current || isMobile) return

      const { clientX, clientY } = e
      const rect = glowRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center
      const moveX = (clientX - centerX) / 8
      const moveY = (clientY - centerY) / 8

      glowRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  return (
    <div className={`relative overflow-hidden bg-background ${className}`}>
      {/* Base gradient background - lighter and more seamless */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-background via-muted/10 to-background/80"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {/* Secondary gradient overlay for subtle depth */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-transparent via-cyan-400/3 to-teal-400/5"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {/* Animated grid overlay - desktop only with theme colors */}
      {showGrid && !isMobile && (
        <div
          className="fixed inset-0 opacity-5 hidden md:block transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(56, 178, 172, 0.08) 1px, transparent 1px), linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )}

      {/* Floating circuit elements */}
      {showCircuits && !isMobile && (
        <>
          {/* Secondary floating element */}
          <motion.div
            className="fixed top-3/4 left-[-50px] w-64 h-64 hidden md:block"
            animate={{ rotate: [0, -3, 0] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.4, 0, 0.2, 1],
              repeatType: "mirror",
            }}
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/15 transition-colors duration-700" />
              <div className="absolute inset-4 rounded-full border border-teal-400/8 transition-colors duration-700" />
            </div>
          </motion.div>

          {/* Small floating dots */}
          <div className="fixed inset-0 hidden md:block pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/25 to-teal-400/25 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`,
                  transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                  filter: "blur(0.5px)",
                }}
                animate={{
                  opacity: [0.25, 0.6, 0.25],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3.5 + i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: [0.4, 0, 0.2, 1],
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 transition-all duration-700">{children}</div>

      {/* Bottom edge glow - subtle theme colors */}
      <div
        className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/3 via-teal-500/2 to-transparent pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
    </div>
  )
}
