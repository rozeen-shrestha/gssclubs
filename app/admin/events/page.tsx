"use client"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

type Event = {
  id: string
  title: string
  club: string
  date: string
  time: string
  location: string
  status: "upcoming" | "completed"
  color: string
}

const events: Event[] = [
  {
    id: "1",
    title: "Web Development Workshop",
    club: "IT Club",
    date: "Nov 20, 2025",
    time: "2:00 PM",
    location: "Computer Lab",
    status: "upcoming",
    color: "bg-neo-teal",
  },
  {
    id: "2",
    title: "MUN Conference 2025",
    club: "MUN",
    date: "Nov 25, 2025",
    time: "9:00 AM",
    location: "Auditorium",
    status: "upcoming",
    color: "bg-neo-yellow",
  },
  {
    id: "3",
    title: "Science Fair",
    club: "Science Club",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    location: "Science Block",
    status: "completed",
    color: "bg-purple-500",
  },
]

export default function AdminEventsPage() {
  return (
    <>
      <AdminPageHeader
        title="Manage Events"
        description="Create and manage club events"
      />

      <div className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Add New Event Button */}
          <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button className="rounded-none bg-neo-yellow hover:bg-neo-yellow/90 text-black border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-black uppercase">
          <Plus className="w-5 h-5 mr-2" />
          Create New Event
        </Button>
      </motion.div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Event Icon */}
                <div className={`w-16 h-16 ${event.color} border-4 border-black shadow-neo flex items-center justify-center flex-shrink-0`}>
                  <Calendar className="w-8 h-8 text-black" />
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-ranade font-black text-2xl text-neo-yellow uppercase tracking-tight mb-1">
                        {event.title}
                      </h3>
                      <p className="font-ranade font-bold text-white/70">
                        {event.club}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 border-2 border-black shadow-neo font-ranade font-bold text-xs uppercase ${
                        event.status === "upcoming"
                          ? "bg-neo-teal text-black"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="w-4 h-4 text-neo-teal" />
                      <span className="font-ranade font-medium text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-4 h-4 text-neo-teal" />
                      <span className="font-ranade font-medium text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-4 h-4 text-neo-teal" />
                      <span className="font-ranade font-medium text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 flex-shrink-0">
                  <Button className="rounded-none bg-blue-950/50 hover:bg-blue-900/50 text-neo-teal border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase text-sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button className="rounded-none bg-red-500 hover:bg-red-600 text-white border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase text-sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
        </div>
      </div>
    </>
  )
}
