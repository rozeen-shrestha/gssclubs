"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { clubsData } from "@/lib/clubs-data"

export default function ClubCards() {
  return (
    <section className="py-8 px-6 bg-blue-900/0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-ranade font-black text-5xl md:text-6xl text-neo-yellow mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <motion.span
              className="text-neo-teal"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Clubs
            </motion.span>
          </motion.h2>
          <motion.p
            className="font-ranade font-medium text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Discover your passion and join a community of like-minded students
          </motion.p>
        </motion.div>

        {/* Club Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubsData.map((club, index) => (
            <Link key={club.id} href={`/clubs/${club.id}`}>
              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="bg-blue-950/20 backdrop-blur-sm overflow-hidden border-4 border-black shadow-neo-lg hover:shadow-neo-xl transition-all duration-200 flex flex-col relative"
                  style={{ minHeight: '420px' }}
                  whileHover={{
                    boxShadow: "12px 12px 0px rgba(34, 211, 238, 0.3), 8px 8px 0px rgba(0, 0, 0, 1)",
                    x: -4,
                    y: -4,
                  }}
                >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neo-teal/0 to-neo-yellow/0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative h-64 overflow-hidden border-b-4 border-black">
                  <motion.img
                    src={club.logo || "/placeholder.svg"}
                    alt={`${club.name} Logo`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                <div className="flex-1 flex p-6 bg-blue-950/50 backdrop-blur-sm">
                  <div className="flex w-full gap-4 items-center justify-between">
                    <h3 className="font-ranade font-black text-2xl text-neo-yellow uppercase tracking-tight break-words text-left flex-1">
                      {club.name}
                    </h3>
                    <div className="bg-neo-teal text-white font-ranade font-bold text-sm px-4 py-2 uppercase tracking-wide border-4 border-black shadow-neo whitespace-nowrap flex-shrink-0 hover:shadow-neo-hover transition-all duration-200">
                      Read more
                    </div>
                  </div>
                </div>
              </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
