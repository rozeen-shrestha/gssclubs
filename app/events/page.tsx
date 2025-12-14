"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Clock, Filter, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import { eventsData, getEventTypeColor, getEventTypeIcon, type Event } from "@/lib/events-data"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterClub, setFilterClub] = useState<string>("all")

  const filteredEvents = eventsData.filter((event) => {
    const statusMatch = filterStatus === "all" || event.status === filterStatus
    const clubMatch = filterClub === "all" || event.club.includes(filterClub)
    return statusMatch && clubMatch
  })

  // Sort events: upcoming first, then by date
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (a.status === "upcoming" && b.status === "completed") return -1
    if (a.status === "completed" && b.status === "upcoming") return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <main className="min-h-screen">
      <section className="pt-14 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-ranade font-black text-5xl md:text-7xl text-neo-yellow mb-4 uppercase tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                Events
            </motion.h1>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-blue-950/50 backdrop-blur-sm border-4 border-black shadow-neo-lg p-6 w-full max-w-4xl">
              <div className="flex items-center justify-center gap-2 text-neo-yellow font-ranade font-bold mb-4">
                <Filter className="w-5 h-5" />
                <span>Filter:</span>
              </div>

              {/* Status Filter */}
              <div className="flex gap-2 justify-center mb-3 flex-wrap">
                <button
                  onClick={() => setFilterStatus("all")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterStatus === "all"
                      ? "bg-neo-yellow text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus("upcoming")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterStatus === "upcoming"
                      ? "bg-neo-yellow text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setFilterStatus("completed")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterStatus === "completed"
                      ? "bg-neo-yellow text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  Past
                </button>
              </div>

              {/* Club Filter */}
              <div className="flex gap-2 justify-center flex-wrap">
                <button
                  onClick={() => setFilterClub("all")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterClub === "all"
                      ? "bg-neo-teal text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  All Clubs
                </button>
                <button
                  onClick={() => setFilterClub("IT")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterClub === "IT"
                      ? "bg-neo-teal text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => setFilterClub("MUN")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterClub === "MUN"
                      ? "bg-neo-teal text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  MUN
                </button>
                <button
                  onClick={() => setFilterClub("SCI")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterClub === "SCI"
                      ? "bg-neo-teal text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  SCI
                </button>
                <button
                  onClick={() => setFilterClub("SPORTS")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterClub === "SPORTS"
                      ? "bg-neo-teal text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  SPORTS
                </button>
                <button
                  onClick={() => setFilterClub("ARTS")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterClub === "ARTS"
                      ? "bg-neo-teal text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  ARTS
                </button>
                <button
                  onClick={() => setFilterClub("SOCIAL")}
                  className={`px-4 py-2 font-ranade font-bold text-sm uppercase border-2 border-black transition-all ${
                    filterClub === "SOCIAL"
                      ? "bg-neo-teal text-black shadow-neo"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50"
                  }`}
                >
                  SOCIAL
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {sortedEvents.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-ranade font-bold text-white text-2xl mb-4">No events found</p>
              <p className="font-ranade text-neo-teal">Try adjusting your filters</p>
            </motion.div>
          ) : (
            <div className="relative">
              {sortedEvents.map((event, index) => (
                <div key={event.id} className="mb-16 relative">
                  {/* Event Card */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/events/${event.id}`} className="block">
                      <motion.div
                        className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg hover:shadow-neo-xl transition-all duration-200 overflow-hidden cursor-pointer"
                        whileHover={{
                          boxShadow: "12px 12px 0px rgba(255, 223, 46, 0.3), 8px 8px 0px rgba(0, 0, 0, 1)",
                          x: -4,
                          y: -4,
                        }}
                      >
                      {/* Event Image */}
                      <div className="relative h-48 overflow-hidden border-b-4 border-black">
                        <motion.img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Badges on image */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <motion.div
                              className={`px-3 py-1 font-ranade font-bold text-sm uppercase border-2 border-black shadow-neo ${getEventTypeColor(event.type)}`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {event.type}
                            </motion.div>

                            {event.attendees > 0 && (
                              <motion.div
                                className="flex items-center gap-1 text-white font-ranade font-bold text-xs bg-black/70 px-3 py-1 border-2 border-black shadow-neo"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Users className="w-3 h-3" />
                                <span>{event.attendees}</span>
                              </motion.div>
                            )}
                          </div>

                          <motion.div
                            className={`px-3 py-1 font-ranade font-bold text-sm uppercase border-2 border-black shadow-neo ${
                              event.status === "completed"
                                ? "bg-green-500 text-white"
                                : "bg-neo-yellow text-black"
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {event.status === "completed" ? "Completed" : "Upcoming"}
                          </motion.div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="p-8 bg-blue-950/50 backdrop-blur-sm">
                        <h3 className="font-ranade font-black text-2xl md:text-3xl text-neo-yellow mb-6 uppercase tracking-tight">
                          {event.title}
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2 text-neo-teal text-sm">
                            <Calendar className="w-4 h-4" />
                            <span className="font-ranade font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-neo-teal text-sm">
                            <Clock className="w-4 h-4" />
                            <span className="font-ranade font-medium">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-neo-teal text-sm col-span-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-ranade font-medium">{event.location}</span>
                          </div>
                        </div>

                        <p className="text-white text-base mb-6 leading-relaxed font-ranade">
                          {event.description.substring(0, 200)}...
                        </p>

                        {/* Club Name and View Details - 50/50 Split */}
                        <div className="pt-6 border-t-2 border-black/20 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-neo-yellow font-ranade font-bold text-base flex-1">
                            <span>{event.club}</span>
                          </div>

                          <div className="flex items-center gap-2 bg-neo-yellow hover:bg-neo-teal text-black font-ranade font-bold text-sm px-6 py-3 transition-all duration-300 shadow-neo border-2 border-black group flex-1 justify-center">
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
