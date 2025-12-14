"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import SchoolContact from "./school-contact"

interface ContactPerson {
  name: string
  role: string
  color: string
  photo: string
  socials: {
    phone: string
    email?: string
    github?: string
    linkedin?: string
  }
}

const clubIncharge: ContactPerson[] = [
  {
    name: "Chandra Bahadur Khadka",
    role: "Club Incharge",
    color: "from-emerald-500/20 to-teal-500/20",
    photo: "/images/ck.jpg",
    socials: {
      phone: "+977 9851109359",
      email: "chandra.khadka@globalcollege.edu.np",
    },
  },
  {
    name: "Jay Prakash Paudel",
    role: "Club Incharge",
    color: "from-amber-500/20 to-orange-500/20",
    photo: "/images/jpp.jpg",
    socials: {
      phone: "+977 9801904904",
      email: "jay.paudel@globalcollege.edu.np",
    },
  },
  {
    name: "Khem Raj Deuja",
    role: "Club Incharge",
    color: "from-rose-500/20 to-red-500/20",
    photo: "/images/krd.jpg",
    socials: {
      phone: "+977 9801904901",
      email: "khem.deuja@globalcollege.edu.np",
    },
  },
]

export default function Contacts() {
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
            Contact Us
          </motion.h1>
          <motion.p
            className="font-ranade font-medium text-white text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Get in touch with the GSS Clubs team
          </motion.p>
        </motion.div>

        {/* Club Incharge Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clubIncharge.map((person, index) => (
              <motion.div
                key={index}
                className="relative bg-blue-950/60 border-4 border-black shadow-neo-lg overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  boxShadow: "12px 12px 0px rgba(0, 0, 0, 1)",
                  x: -2,
                  y: -2,
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${person.color} opacity-50`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Photo */}
                  <div className="relative w-full aspect-square mb-4 border-b-4 border-black">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    {/* Name & Role */}
                    <h3 className="font-ranade font-black text-xl text-white mb-1 uppercase">
                      {person.name}
                    </h3>
                    <p className="font-ranade font-bold text-neo-teal mb-4 uppercase text-xs">
                      {person.role}
                    </p>

                    {/* Contact Links */}
                    <div className="flex flex-col gap-2.5">
                      <a
                        href={`tel:${person.socials.phone}`}
                        className="flex items-center gap-2.5 text-white hover:text-neo-yellow transition-colors font-ranade bg-black/30 p-2.5 border-2 border-black/50"
                      >
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{person.socials.phone}</span>
                      </a>
                      {person.socials.email && (
                        <a
                          href={`mailto:${person.socials.email}`}
                          className="flex items-center gap-2.5 text-white hover:text-neo-yellow transition-colors font-ranade bg-black/30 p-2.5 border-2 border-black/50"
                        >
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <span className="text-xs break-all">{person.socials.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* General Contact Info */}
        <SchoolContact />
      </div>
    </section>
  )
}
