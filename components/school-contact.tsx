"use client"

import { motion } from "framer-motion"
import { MapPin, Phone } from "lucide-react"

export default function SchoolContact() {
  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-blue-950/60 border-4 border-black p-8 shadow-neo-lg">
        <div className="relative z-10">
          <h2 className="font-ranade font-black text-3xl text-neo-yellow mb-6 uppercase">
            Global School of Science
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 text-white font-ranade">
              <MapPin className="w-5 h-5 text-neo-teal mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold">Address</p>
                <p className="text-sm text-gray-300">Mid-Baneshwor, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-white font-ranade">
              <Phone className="w-5 h-5 text-neo-teal mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold">Phone</p>
                <a href="tel:015970317" className="text-sm text-gray-300 hover:text-neo-teal transition-colors">
                  01-5970317
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-6 border-4 border-black overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.569614535174!2d85.33695917546709!3d27.699693976186943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bed7991c27%3A0x67085d1e30b8be32!2sGlobal%20School%20of%20Science!5e0!3m2!1sen!2snp!4v1763137055848!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
