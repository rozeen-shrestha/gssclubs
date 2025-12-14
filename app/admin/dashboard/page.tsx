"use client"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { motion } from "framer-motion"
import { Users, Calendar, FileText, TrendingUp, Clock, CheckCircle } from "lucide-react"

type StatCard = {
  title: string
  value: string
  icon: React.ElementType
  color: string
  change?: string
}

const stats: StatCard[] = [
  {
    title: "Total Clubs",
    value: "6",
    icon: Users,
    color: "bg-neo-teal",
    change: "+2 this year",
  },
  {
    title: "Active Events",
    value: "12",
    icon: Calendar,
    color: "bg-neo-yellow",
    change: "3 upcoming",
  },
  {
    title: "Total Members",
    value: "150+",
    icon: Users,
    color: "bg-purple-500",
    change: "+25 this month",
  },
  {
    title: "Submissions",
    value: "8",
    icon: FileText,
    color: "bg-orange-500",
    change: "Pending review",
  },
]

type Activity = {
  title: string
  time: string
  status: "completed" | "pending"
}

const recentActivities: Activity[] = [
  { title: "New club registration: Drama Club", time: "2 hours ago", status: "pending" },
  { title: "Event published: Science Fair 2025", time: "5 hours ago", status: "completed" },
  { title: "Member added to IT Club", time: "1 day ago", status: "completed" },
  { title: "Gallery updated with new images", time: "2 days ago", status: "completed" },
  { title: "Settings updated", time: "3 days ago", status: "completed" },
]

export default function AdminDashboard() {
  return (
    <>
      <AdminPageHeader
        title="Dashboard"
        description="Overview of your clubs and activities"
      />

      <div className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              className={`${stat.color} border-4 border-black shadow-neo p-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-black border-4 border-black shadow-neo flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-black/50" />
              </div>
              <h3 className="font-ranade font-bold text-sm text-black/70 uppercase mb-1">
                {stat.title}
              </h3>
              <p className="font-ranade font-black text-4xl text-black mb-2">
                {stat.value}
              </p>
              {stat.change && (
                <p className="font-ranade font-bold text-xs text-black/60">
                  {stat.change}
                </p>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <motion.div
        className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="bg-neo-yellow border-b-4 border-black p-6">
          <h2 className="font-ranade font-black text-2xl text-black uppercase tracking-tight">
            Recent Activity
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 pb-4 border-b-2 border-black/20 last:border-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <div className={`mt-1 w-6 h-6 border-2 border-black flex items-center justify-center ${
                  activity.status === "completed" ? "bg-green-500" : "bg-orange-500"
                }`}>
                  {activity.status === "completed" ? (
                    <CheckCircle className="w-4 h-4 text-white" />
                  ) : (
                    <Clock className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-ranade font-bold text-white">
                    {activity.title}
                  </p>
                  <p className="font-ranade text-sm text-white/60 mt-1">
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <button
          className="bg-neo-teal border-4 border-black shadow-neo p-6 text-left"
        >
          <Users className="w-8 h-8 text-black mb-3" />
          <h3 className="font-ranade font-black text-xl text-black uppercase">
            Add New Club
          </h3>
          <p className="font-ranade text-sm text-black/70 mt-2">
            Register a new club to the system
          </p>
        </button>

        <button
          className="bg-neo-yellow border-4 border-black shadow-neo p-6 text-left"
        >
          <Calendar className="w-8 h-8 text-black mb-3" />
          <h3 className="font-ranade font-black text-xl text-black uppercase">
            Create Event
          </h3>
          <p className="font-ranade text-sm text-black/70 mt-2">
            Schedule a new event or activity
          </p>
        </button>

        <button
          className="bg-purple-500 border-4 border-black shadow-neo p-6 text-left"
        >
          <FileText className="w-8 h-8 text-black mb-3" />
          <h3 className="font-ranade font-black text-xl text-black uppercase">
            View Submissions
          </h3>
          <p className="font-ranade text-sm text-black/70 mt-2">
            Review pending submissions
          </p>
        </button>
      </motion.div>
        </div>
      </div>
    </>
  )
}
