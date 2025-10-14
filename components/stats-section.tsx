"use client"

import { motion } from "framer-motion"
import { Users, Calendar, MapPin } from "lucide-react"

export default function AffiliationCard() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-3 sm:px-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative bg-blue-950/60 border-4 border-black p-6 sm:p-12 md:p-16 overflow-hidden shadow-neo-lg">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
            {/* School Logo/Icon */}
            <motion.div
              className="flex-shrink-0 flex justify-center items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-40 h-24 sm:w-56 sm:h-32 bg-white flex items-center justify-center shadow-neo-lg border-4 border-black"
                whileHover={{
                  boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
                  x: -2,
                  y: -2,
                }}
              >
                <img
                  src="/global.jpg"
                  alt="Global School of Science Logo"
                  className="w-36 h-16 sm:w-48 sm:h-24 object-contain drop-shadow-lg"
                  draggable={false}
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <motion.h3
                className="text-4xl md:text-4xl font-bold text-white mb-2 leading-tight"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Affiliated with
                <br />
                <motion.span
                  className="text-neo-yellow"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Global School of Science
                </motion.span>
              </motion.h3>
              <motion.p
                className="text-slate-300 text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We are the official Information Technology club of Global School of Science, fostering innovation
                and technical excellence among students since our establishment.
              </motion.p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                {/*
                  { icon: Users, value: "1700+", label: "Active Students", delay: 0.7 },
                  { icon: Calendar, value: "50+", label: "Events Organized", delay: 0.8 },
                  { icon: MapPin, value: "2019 AD", label: "Established", delay: 0.9 },
                ].map((stat, index) => (
                */}
                {["Users", "Calendar", "MapPin"].map((icon, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-10 h-10 bg-neo-blue flex items-center justify-center border-2 border-black"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={`/${icon.toLowerCase()}.svg`}
                        alt={icon}
                        className="w-5 h-5 text-neo-yellow"
                      />
                    </motion.div>
                    <div className="text-left">
                      <motion.div
                        className="text-xl font-bold text-white"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      >
                        {icon === "Users"
                          ? "1700+"
                          : icon === "Calendar"
                          ? "50+"
                          : "2019 AD"}
                      </motion.div>
                      <div className="text-sm text-slate-400">
                        {icon === "Users"
                          ? "Active Students"
                          : icon === "Calendar"
                          ? "Events Organized"
                          : "Established"}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
