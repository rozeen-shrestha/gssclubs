"use client"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

type Club = {
  id: string
  name: string
  shortName: string
  members: number
  color: string
}

const clubs: Club[] = [
  { id: "1", name: "IT Club", shortName: "IT", members: 24, color: "bg-neo-teal" },
  { id: "2", name: "Model United Nations", shortName: "MUN", members: 18, color: "bg-neo-yellow" },
  { id: "3", name: "Science Club", shortName: "SCI", members: 20, color: "bg-purple-500" },
  { id: "4", name: "Sports Club", shortName: "SPORTS", members: 32, color: "bg-orange-500" },
  { id: "5", name: "Arts Club", shortName: "ARTS", members: 16, color: "bg-pink-500" },
  { id: "6", name: "Social Service Club", shortName: "SOCIAL", members: 22, color: "bg-green-500" },
]

export default function AdminClubsPage() {
  return (
    <>
      <AdminPageHeader
        title="Manage Clubs"
        description="Add, edit, or remove clubs from the system"
      />

      <div className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Add New Club Button */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button className="rounded-none bg-neo-teal hover:bg-neo-teal/90 text-black border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-black uppercase">
              <Plus className="w-5 h-5 mr-2" />
              Add New Club
            </Button>
          </motion.div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
          <motion.div
            key={club.id}
            className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Club Header */}
            <div className={`${club.color} border-b-4 border-black p-6 flex items-center gap-4`}>
              <div className="w-16 h-16 bg-black border-4 border-black shadow-neo flex items-center justify-center">
                <span className="font-ranade font-black text-2xl text-white">
                  {club.shortName}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-ranade font-black text-xl text-black uppercase">
                  {club.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Users className="w-4 h-4 text-black/60" />
                  <span className="font-ranade font-bold text-sm text-black/70">
                    {club.members} members
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 flex gap-3">
              <Button className="flex-1 rounded-none bg-blue-950/50 hover:bg-blue-900/50 text-neo-teal border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase text-sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button className="rounded-none bg-red-500 hover:bg-red-600 text-white border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase text-sm">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
        </div>
      </div>
    </>
  )
}
