"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { eventsData, getEventTypeColor, getEventTypeIcon } from "@/lib/events-data"

// Get upcoming events from events data
const upcomingEvents = eventsData.filter(event => event.status === "upcoming").slice(0, 3)

interface EventCardProps {
  event: typeof upcomingEvents[0]
  index: number
}

function TimelineEventCard({ event, index }: EventCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <div className="mb-12 relative">
      {/* Event Card */}
      <motion.div
        ref={cardRef}
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <Link href={`/events/${event.id}`} className="block">
          <motion.div
            className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg hover:shadow-neo-xl transition-all duration-200 p-8 cursor-pointer"
            whileHover={{
              boxShadow: "10px 10px 0px rgba(19, 237, 230, 0.3), 6px 6px 0px rgba(0, 0, 0, 1)",
              x: -3,
              y: -3,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className={`px-3 py-1 font-ranade font-bold text-xs uppercase border-2 border-black shadow-neo ${getEventTypeColor(event.type)}`}
                whileHover={{ scale: 1.05 }}
              >
                {event.type}
              </motion.div>
            </div>

            <h3 className="font-ranade font-black text-xl md:text-2xl text-neo-yellow mb-4 uppercase tracking-tight">
              {event.title}
            </h3>

            <div className="flex items-center gap-2 text-neo-teal text-sm mb-4">
              <Calendar className="w-4 h-4" />
              <span className="font-ranade font-medium">{event.date}</span>
            </div>

            {/* Club Name and View Details - 50/50 Split */}
            <div className="pt-4 border-t-2 border-black/20 flex items-center justify-between gap-4">
              <div className="text-white font-ranade font-bold text-sm flex-1">
                {event.club}
              </div>

              <div className="flex items-center gap-2 bg-neo-yellow hover:bg-neo-teal text-black font-ranade font-bold text-sm px-4 py-2 transition-all duration-300 shadow-neo border-2 border-black group flex-1 justify-center">
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default function EventsPreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
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
            Upcoming <motion.span
              className="text-neo-teal"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Events
            </motion.span>
          </motion.h2>
          <motion.p
            className="font-ranade font-medium text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Don't miss out on exciting opportunities to learn, compete, and connect
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-12">
          {upcomingEvents.map((event, index) => (
            <TimelineEventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/events">
            <Button
              size="lg"
              className="rounded-none bg-neo-teal hover:bg-neo-blue text-black hover:text-white font-ranade font-bold text-lg px-8 py-6 transition-all duration-300 shadow-neo hover:shadow-neo-hover border-4 border-black group"
            >
              <span>View All Events</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
