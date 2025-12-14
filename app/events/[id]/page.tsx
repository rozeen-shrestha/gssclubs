"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Footer from "@/components/footer"
import { getEventById, getEventTypeColor, getEventTypeIcon } from "@/lib/events-data"
import { Button } from "@/components/ui/button"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/events">
              <Button
                variant="outline"
                className="rounded-none bg-blue-950/30 hover:bg-blue-900/50 text-neo-teal border-2 border-black font-ranade font-bold shadow-neo hover:shadow-neo-hover"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Events
              </Button>
            </Link>
          </motion.div>

          {/* Event Header */}
          <motion.div
            className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-xl overflow-hidden mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Event Image */}
            <div className="relative h-96 overflow-hidden border-b-4 border-black">
              <motion.img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Badges */}
              <div className="absolute top-6 left-6 right-6 flex justify-between">
                <motion.div
                  className={`px-4 py-2 font-ranade font-bold text-base uppercase border-2 border-black shadow-neo-lg ${getEventTypeColor(event.type)}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {event.type}
                </motion.div>

                <motion.div
                  className={`px-4 py-2 font-ranade font-bold text-base uppercase border-2 border-black shadow-neo-lg ${
                    event.status === "completed"
                      ? "bg-green-500 text-white"
                      : "bg-neo-yellow text-black"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {event.status === "completed" ? "Completed" : "Upcoming"}
                </motion.div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.h1
                  className="font-ranade font-black text-4xl md:text-5xl lg:text-6xl text-neo-yellow mb-3 uppercase tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {event.title}
                </motion.h1>
                <motion.div
                  className="flex items-center gap-3 text-neo-teal font-ranade font-bold text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span>{event.club}</span>
                </motion.div>
              </div>
            </div>

            {/* Event Details Grid */}
            <motion.div
              className="p-8 bg-blue-950/50 backdrop-blur-sm border-b-4 border-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-900/30 border-2 border-black p-4 shadow-neo">
                  <div className="flex items-center gap-3 text-neo-teal mb-2">
                    <Calendar className="w-6 h-6" />
                    <span className="font-ranade font-bold text-sm uppercase">Date</span>
                  </div>
                  <p className="font-ranade font-black text-white text-xl">{event.date}</p>
                </div>

                <div className="bg-blue-900/30 border-2 border-black p-4 shadow-neo">
                  <div className="flex items-center gap-3 text-neo-teal mb-2">
                    <Clock className="w-6 h-6" />
                    <span className="font-ranade font-bold text-sm uppercase">Time</span>
                  </div>
                  <p className="font-ranade font-black text-white text-xl">{event.time}</p>
                </div>

                <div className="bg-blue-900/30 border-2 border-black p-4 shadow-neo">
                  <div className="flex items-center gap-3 text-neo-teal mb-2">
                    <MapPin className="w-6 h-6" />
                    <span className="font-ranade font-bold text-sm uppercase">Location</span>
                  </div>
                  <p className="font-ranade font-black text-white text-xl">{event.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="p-8 bg-blue-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="font-ranade font-black text-3xl text-neo-yellow mb-6 uppercase tracking-tight">
                About This Event
              </h2>
              <p className="font-ranade text-white text-lg leading-relaxed mb-8">
                {event.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 items-center">
                {event.attendees > 0 && (
                  <div className="bg-neo-yellow text-black px-6 py-3 border-2 border-black shadow-neo font-ranade font-bold flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                )}

                <Button
                  className="rounded-none bg-neo-teal hover:bg-neo-blue text-black hover:text-white font-ranade font-bold px-6 py-3 border-2 border-black shadow-neo hover:shadow-neo-hover transition-all"
                >
                  <Share2 className="mr-2 w-5 h-5" />
                  Share Event
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
