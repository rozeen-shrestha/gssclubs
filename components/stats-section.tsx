"use client"

import { motion } from "framer-motion"
import { Users, Calendar, MapPin } from "lucide-react"

export default function AffiliationCard() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-3 sm:px-8" // increased max-width
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl border border-cyan-400/30 p-6 sm:p-12 md:p-16 overflow-hidden shadow-xl">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            {/* School Logo/Icon */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="w-40 h-24 sm:w-56 sm:h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-4 border-blue-400/30">
                <img
                  src="/gss.svg"
                  alt="Global School of Science Logo"
                  className="w-36 h-16 sm:w-48 sm:h-24 object-contain drop-shadow-lg"
                  draggable={false}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Proudly Affiliated with
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Global School of Science
                </span>
              </h3>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                We are the official Information Technology club of Global School of Science, fostering innovation
                and technical excellence among students since our establishment.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-3 justify-start">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">1700+</div> 
                    <div className="text-sm text-slate-400">Active Students</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-start">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">50+</div>
                    <div className="text-sm text-slate-400">Events Organized</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-start">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">2019 AD</div>
                    <div className="text-sm text-slate-400">Established</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-center text-slate-400 text-sm">
              <MapPin className="w-4 h-4 inline mr-2" />
              Global School of Science, Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
