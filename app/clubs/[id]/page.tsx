"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, Linkedin, Github, Twitter, Instagram, Calendar, Mail } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getClubById } from "@/lib/clubs-data"
import { eventsData } from "@/lib/events-data"

export default function ClubPage({ params }: { params: { id: string } }) {
  const club = getClubById(params.id)
  const shouldReduceMotion = useReducedMotion()

  if (!club) {
    notFound()
  }

  // Get events for this club
  const clubEvents = eventsData.filter((event) => event.club.includes(club.shortName))

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="about" className="pt-14 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Club Header */}
          <motion.div
            className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-xl overflow-hidden mb-12"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-12 bg-gradient-to-br from-blue-950/50 to-blue-900/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Club Info */}
                <div className="flex-1 text-center md:text-left">
                  <motion.h1
                    className="font-ranade font-black text-5xl md:text-7xl text-neo-yellow mb-4 uppercase tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {club.name}
                  </motion.h1>
                  <motion.p
                    className="font-ranade font-bold text-2xl text-neo-teal mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {club.tagline}
                  </motion.p>
                  <motion.p
                    className="font-ranade text-white text-lg leading-relaxed max-w-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {club.description}
                  </motion.p>
                </div>

                {/* Club Logo */}
                <motion.div
                  className="hidden md:flex w-48 h-48 border-4 border-black shadow-neo-lg overflow-hidden flex-shrink-0"
                  initial={shouldReduceMotion ? { scale: 1 } : { scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                  <img
                    src={club.logo}
                    alt={`${club.name} Logo`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Socials Section */}
          {club.social && (
            <motion.div
              className="mb-12"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-ranade font-black text-3xl md:text-4xl text-neo-teal mb-6 uppercase tracking-tight text-center">
                Connect With Us
              </h2>
              <div className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg p-8">
                <div className="flex flex-wrap justify-center gap-4">
                  {club.social.instagram && (
                    <a
                      href={club.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 border-4 border-black shadow-neo hover:shadow-neo-hover flex items-center justify-center transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram className="w-8 h-8 text-white" />
                      </motion.div>
                      <p className="text-center mt-2 font-ranade font-bold text-xs text-white uppercase">Instagram</p>
                    </a>
                  )}
                  {club.social.email && (
                    <a
                      href={`mailto:${club.social.email}`}
                      className="group"
                    >
                      <motion.div
                        className="w-16 h-16 bg-neo-yellow border-4 border-black shadow-neo hover:shadow-neo-hover flex items-center justify-center transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="w-8 h-8 text-black" />
                      </motion.div>
                      <p className="text-center mt-2 font-ranade font-bold text-xs text-white uppercase">Email</p>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-ranade font-black text-4xl md:text-5xl text-neo-teal mb-8 uppercase tracking-tight text-center">
              Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {club.members.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg hover:shadow-neo-xl transition-all duration-200 p-6"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                >
                  {/* Member Name & Role */}
                  <div className="mb-4">
                    <h3 className="font-ranade font-black text-2xl text-neo-yellow mb-2 uppercase">
                      {member.name}
                    </h3>
                    <p className="font-ranade font-bold text-white text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Links */}
                  {member.social && (
                    <div className="flex gap-3 pt-4 border-t-2 border-black/20">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-neo-teal border-2 border-black shadow-neo hover:shadow-neo-hover flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Linkedin className="w-5 h-5 text-black" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-neo-yellow border-2 border-black shadow-neo hover:shadow-neo-hover flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Github className="w-5 h-5 text-black" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-400 border-2 border-black shadow-neo hover:shadow-neo-hover flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Twitter className="w-5 h-5 text-black" />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-pink-500 border-2 border-black shadow-neo hover:shadow-neo-hover flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Instagram className="w-5 h-5 text-black" />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-ranade font-black text-4xl md:text-5xl text-neo-yellow mb-8 uppercase tracking-tight text-center">
              Our Events
            </h2>

            {clubEvents.length === 0 ? (
              <div className="text-center py-12 bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg">
                <p className="font-ranade font-bold text-white text-xl">No events yet</p>
                <p className="font-ranade text-neo-teal">Check back soon for upcoming events!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clubEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                  >
                    <Link href={`/events/${event.id}`} className="block">
                      <div className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg hover:shadow-neo-xl transition-all duration-200 overflow-hidden cursor-pointer h-full">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="font-ranade font-black text-2xl text-neo-yellow uppercase tracking-tight flex-1">
                              {event.title}
                            </h3>
                            <span
                              className={`px-3 py-1 font-ranade font-bold text-xs uppercase border-2 border-black shadow-neo ${
                                event.status === "completed"
                                  ? "bg-green-500 text-white"
                                  : "bg-neo-teal text-black"
                              }`}
                            >
                              {event.status === "completed" ? "Completed" : "Upcoming"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-white mb-3">
                            <Calendar className="w-4 h-4 text-neo-teal" />
                            <span className="font-ranade font-medium text-sm">{event.date}</span>
                          </div>

                          <p className="text-white text-sm font-ranade leading-relaxed">
                            {event.description.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
