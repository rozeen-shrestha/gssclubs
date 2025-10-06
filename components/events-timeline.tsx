"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  attendees: number
  image: string
  type: "workshop" | "competition" | "seminar" | "hackathon"
  status: "completed" | "upcoming"
  class: string
}

const eventsData: Event[] = [
  {
    id: "1",
    title: "Cyber Security Seminar",
    date: "March 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Lab A",
    description:
      "An engaging seminar focused on the essentials of cyber security. The session covered key concepts, real-world threats, and included a live demonstration showing how hacking takes place. Students gained practical awareness on staying safe online.",
    attendees: 45,
    image: "/placeholder.svg?height=300&width=400",
    type: "seminar",
    status: "completed",
    class: "Class of 2024",
  },
  {
    id: "2",
    title: "Esports Tournament LAN (PUBG & Free Fire)",
    date: "April 22, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description:
      "A thrilling LAN esports tournament featuring PUBG and Free Fire, organized by the Class of 2025. Teams battled it out in an electrifying atmosphere, showcasing their gaming skills and teamwork. The event fostered camaraderie and competitive spirit among participants.",
    attendees: 120,
    image: "/placeholder.svg?height=300&width=400",
    type: "competition",
    status: "completed",
    class: "Class of 2025",
  },
]

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "workshop":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "competition":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "seminar":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "hackathon":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30"
    default:
      return "bg-slate-500/20 text-slate-400 border-slate-500/30"
  }
}

const getEventTypeIcon = (type: string) => {
  switch (type) {
    case "workshop":
      return "🔬"
    case "competition":
      return "🏆"
    case "seminar":
      return "📚"
    case "hackathon":
      return "💻"
    default:
      return "📅"
  }
}

interface EventCardProps {
  event: Event
  index: number
  isLeft: boolean
}

function EventCard({ event, index, isLeft }: EventCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      className={`flex items-center w-full ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      {/* Event Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600 overflow-hidden group hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 60px rgba(6, 182, 212, 0.15)",
          }}
        >
          {/* Event Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

            {/* Event Type Badge */}
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}
            >
              <span className="mr-1">{getEventTypeIcon(event.type)}</span>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </div>

            {/* Status Badge */}
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                event.status === "completed"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
              }`}
            >
              {event.status === "completed" ? "✓ Completed" : "⏳ Upcoming"}
            </div>
          </div>

          {/* Event Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              {event.title}
            </h3>

            {/* Event Details */}
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{event.description}</p>

            {/* Class Footer */}
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <GraduationCap className="w-3 h-3" />
                <span>By {event.class}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Connector - Hidden on mobile */}
      <div className="hidden md:flex w-2/12 justify-center">
        <div className="relative">
          {/* Timeline dot */}
          <motion.div
            className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 relative z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          />

          {/* Connecting line */}
          {index < eventsData.length - 1 && (
            <motion.div
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-transparent"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              style={{ transformOrigin: "top" }}
            />
          )}
        </div>
      </div>

      {/* Spacer for opposite side - Hidden on mobile */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  )
}

export default function EventsTimeline() {
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: true, margin: "-200px" })

  return (
    <section className="relative min-h-screen py-20">
      {/* Parallax floating elements */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating timeline elements */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-32 h-32 border border-blue-500/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-3/4 right-[15%] w-24 h-24 border border-purple-500/10 rounded-lg"
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating dots */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${25 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Events</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover the exciting workshops, competitions, and activities that make our IT club vibrant
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-transparent" />

          {/* Events */}
          <div className="space-y-8 md:space-y-16">
            {eventsData.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-5 top-8 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 z-10" />

                {/* Mobile Card with Left Padding */}
                <div className="md:hidden ml-12">
                  <EventCard event={event} index={index} isLeft={true} />
                </div>

                {/* Desktop Alternating Layout */}
                <div className="hidden md:block">
                  <EventCard event={event} index={index} isLeft={index % 2 === 0} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
