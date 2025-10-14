"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 justify-center relative overflow-hidden">
      {/* Background animated blobs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-pink-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative z-10">
        <motion.h1
          className="font-ranade font-black text-5xl text-neo-pink mb-4 tracking-tight"
          style={{ letterSpacing: "0.05em" }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Ouch!
        </motion.h1>
        <motion.div
          className="bg-neo-yellow border-4 border-black px-6 py-4 sm:px-12 sm:py-6 mb-4 shadow-neo-lg w-full flex justify-center"
          animate={{
            rotate: [-2, 2, -2],
            boxShadow: [
              "8px 8px 0px rgba(0, 0, 0, 1)",
              "12px 12px 0px rgba(0, 0, 0, 1)",
              "8px 8px 0px rgba(0, 0, 0, 1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.span
            className="font-ranade font-black text-2xl sm:text-4xl md:text-6xl text-black text-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.span>
        </motion.div>
        <motion.p
          className="font-ranade text-base sm:text-xl text-white mb-6 text-center"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Not Found
        </motion.p>
        <Link href="/" passHref>
          <motion.button
            className="bg-neo-teal text-black font-ranade font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border-2 border-black shadow-neo hover:shadow-neo-hover transition-all duration-300 w-full sm:w-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "10px 10px 0px rgba(0, 0, 0, 1)",
              x: -2,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Go Home
          </motion.button>
        </Link>
      </div>
    </main>
  )
}
