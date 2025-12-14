"use client"

import { motion } from "framer-motion"
import { Sparkles, Lightbulb, Rocket } from "lucide-react"

export default function StudentCorner() {
  return (
    <section className="pt-14 pb-8 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="font-ranade font-black text-5xl md:text-6xl lg:text-7xl text-neo-teal mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Student Corner
          </motion.h1>
          <motion.p
            className="font-ranade font-medium text-white text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Showcasing creativity, innovation, and achievements
          </motion.p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-4 border-black p-16 shadow-neo-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">

              <h2 className="font-ranade font-black text-5xl md:text-6xl text-white mb-6 uppercase tracking-wide">
                Coming Soon
              </h2>

              <p className="font-ranade font-medium text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                This space will showcase the amazing creativity and innovative projects from our talented students
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <motion.div
                  className="bg-black/30 border-2 border-white/20 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Lightbulb className="w-10 h-10 text-neo-yellow mx-auto mb-3" strokeWidth={2.5} />
                  <h3 className="font-ranade font-bold text-white text-lg uppercase mb-2">
                    Student Projects
                  </h3>
                  <p className="font-ranade text-gray-300 text-sm">
                    Innovative coding and tech projects
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/30 border-2 border-white/20 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Sparkles className="w-10 h-10 text-neo-teal mx-auto mb-3" strokeWidth={2.5} />
                  <h3 className="font-ranade font-bold text-white text-lg uppercase mb-2">
                    Creative Works
                  </h3>
                  <p className="font-ranade text-gray-300 text-sm">
                    Design, art, and multimedia creations
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/30 border-2 border-white/20 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Rocket className="w-10 h-10 text-neo-pink mx-auto mb-3" strokeWidth={2.5} />
                  <h3 className="font-ranade font-bold text-white text-lg uppercase mb-2">
                    Achievements
                  </h3>
                  <p className="font-ranade text-gray-300 text-sm">
                    Competitions, hackathons, and awards
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
