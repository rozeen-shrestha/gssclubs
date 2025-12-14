"use client"

import Link from "next/link"
import type React from "react"

interface TechBackgroundProps {
  children: React.ReactNode
  className?: string
  showGrid?: boolean
}

export default function TechBackground({
  children,
  className = "",
  showGrid = true,
}: TechBackgroundProps) {

  return (
  <div className={`relative min-h-screen ${className}`}>
      {/* Infinite Grid Pattern Background */}
      {showGrid && (
        <div
          className="fixed inset-0 z-0 opacity-[0.08] dark:opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
      {/* Watermark */}

      <div className="fixed bottom-2 right-2 z-50 select-none text-xs sm:text-sm font-ranade opacity-90">
        <Link
          href="https://instagram.com/gssitclub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designer/Developer: @gssitclub
        </Link>
      </div>
    </div>
  )
}
