"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface Club {
  id: string
  name: string
  logo: string
  description: string
  color: string
}

const clubsData: Club[] = [
  {
    id: "1",
    name: "Science Club",
    logo: "/placeholder.svg?height=520&width=520",
    description: "Explore the wonders of science through experiments and discovery",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "2",
    name: "Robotics Club",
    logo: "/placeholder.svg?height=520&width=520",
    description: "Build and program robots to solve real-world challenges",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "3",
    name: "Art Club",
    logo: "/placeholder.svg?height=520&width=520",
    description: "Express creativity through various forms of visual arts",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "4",
    name: "Environment Club",
    logo: "/placeholder.svg?height=520&width=520",
    description: "Promote environmental awareness and sustainable practices",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "5",
    name: "Drama Club",
    logo: "/placeholder.svg?height=520&width=520",
    description: "Develop acting skills and perform captivating theatrical productions",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: "6",
    name: "Music Club",
    logo: "/placeholder.svg?height=520&width=520",
    description: "Create beautiful music and develop musical talents together",
    color: "from-indigo-500/20 to-blue-500/20",
  },
]

export default function ClubCards() {
  return (
    <section className="py-20 px-6 bg-hero-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-ranade font-bold text-4xl md:text-5xl text-hero-light mb-4">
            Our <span className="text-hero-primary">Clubs</span>
          </h2>
          <p className="font-ranade text-hero-muted text-lg max-w-2xl mx-auto">
            Discover your passion and join a community of like-minded students
          </p>
        </motion.div>

        {/* Club Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubsData.map((club, index) => (
            <motion.div
              key={club.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 overflow-hidden group-hover:border-teal-400/60 group-hover:shadow-xl group-hover:shadow-teal-400/10 transition-all duration-300">
                {/* Club Logo - Full Size */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={club.logo || "/placeholder.svg"}
                    alt={`${club.name} Logo`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${club.color} to-transparent opacity-60`} />
                </div>

                {/* Club Content */}
                <div className="p-6">
                  <h3 className="font-ranade font-bold text-xl text-hero-light mb-3 group-hover:text-hero-primary transition-colors duration-300">
                    {club.name}
                  </h3>
                  <p className="font-ranade text-hero-muted text-sm leading-relaxed mb-4">{club.description}</p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-hero-primary font-ranade font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Read more</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
