"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { eventsData, type Event } from "@/lib/events-data"

export default function EventsTimeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-ranade font-black text-5xl md:text-6xl text-neo-yellow mb-4 uppercase">
            Upcoming Events
          </h2>
          <p className="font-ranade text-xl text-white/80 max-w-2xl mx-auto">
            Don't miss out on exciting workshops, competitions, and seminars
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData
            .filter((event) => event.status === "upcoming")
            .map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-ranade font-black text-4xl md:text-5xl text-neo-teal mb-8 uppercase text-center">
            Past Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData
              .filter((event) => event.status === "completed")
              .map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface EventCardProps {
  event: Event
  index: number
  shouldReduceMotion: boolean | null
}

function EventCard({ event, index, shouldReduceMotion }: EventCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const getTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "workshop":
        return "bg-neo-blue"
      case "competition":
        return "bg-neo-pink"
      case "seminar":
        return "bg-neo-teal"
      case "hackathon":
        return "bg-neo-yellow"
      default:
        return "bg-neo-blue"
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 50 }
      }
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      }}
    >
      <Link href={`/events/${event.id}`}>
        <div className="group bg-blue-950/40 backdrop-blur-sm border-4 border-black shadow-neo hover:shadow-neo-hover transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className={`absolute top-4 right-4 ${getTypeColor(event.type)} px-4 py-2 border-2 border-black shadow-neo`}
            >
              <span className="font-ranade font-bold text-sm uppercase text-black">
                {event.type}
              </span>
            </div>
            {event.status === "completed" && (
              <div className="absolute top-4 left-4 bg-gray-800 px-4 py-2 border-2 border-black shadow-neo">
                <span className="font-ranade font-bold text-sm uppercase text-white">
                  Completed
                </span>
              </div>
            )}
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-ranade font-bold text-2xl text-neo-yellow mb-3 group-hover:text-neo-teal transition-colors">
              {event.title}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-4 h-4 text-neo-teal" />
                <span className="font-ranade text-sm">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4 text-neo-teal" />
                <span className="font-ranade text-sm">{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-neo-teal" />
                <span className="font-ranade text-sm">{event.location}</span>
              </div>
              {event.attendees > 0 && (
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-4 h-4 text-neo-teal" />
                  <span className="font-ranade text-sm">
                    {event.attendees} attendees
                  </span>
                </div>
              )}
            </div>

            <p className="font-ranade text-white/70 text-sm line-clamp-3 mb-4 flex-1">
              {event.description}
            </p>

            <div className="mt-auto">
              <span className="font-ranade font-bold text-neo-teal group-hover:text-neo-yellow transition-colors">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
