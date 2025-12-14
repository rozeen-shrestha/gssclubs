"use client"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { motion } from "framer-motion"
import { UserPlus, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Member = {
  id: string
  name: string
  role: string
  club: string
  email: string
  avatar?: string
  social?: {
    linkedin?: string
    github?: string
  }
}

const members: Member[] = [
  {
    id: "1",
    name: "John Doe",
    role: "President",
    club: "IT Club",
    email: "john@gss.edu.np",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Vice President",
    club: "IT Club",
    email: "jane@gss.edu.np",
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    id: "3",
    name: "Michael Brown",
    role: "Secretary General",
    club: "MUN",
    email: "michael@gss.edu.np",
    social: {
      linkedin: "https://linkedin.com/in/michaelbrown",
    },
  },
]

export default function AdminMembersPage() {
  return (
    <>
      <AdminPageHeader
        title="Manage Members"
        description="View and manage all club members"
      />

      <div className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Add New Member Button */}
          <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button className="rounded-none bg-purple-500 hover:bg-purple-600 text-white border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-black uppercase">
          <UserPlus className="w-5 h-5 mr-2" />
          Add New Member
        </Button>
      </motion.div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Member Info */}
            <div className="p-6">
              {/* Avatar */}
              <div className="w-20 h-20 bg-neo-teal border-4 border-black shadow-neo mx-auto mb-4 flex items-center justify-center">
                <span className="font-ranade font-black text-3xl text-black">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="font-ranade font-black text-xl text-neo-yellow uppercase text-center mb-1">
                {member.name}
              </h3>
              <p className="font-ranade font-bold text-white text-center text-sm mb-1">
                {member.role}
              </p>
              <p className="font-ranade text-neo-teal text-center text-sm mb-4">
                {member.club}
              </p>

              {/* Contact */}
              <div className="flex items-center justify-center gap-2 mb-4 pb-4 border-b-2 border-black/20">
                <Mail className="w-4 h-4 text-white/60" />
                <span className="font-ranade text-sm text-white/80">
                  {member.email}
                </span>
              </div>

              {/* Social Links */}
              {member.social && (
                <div className="flex justify-center gap-2 mb-4">
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
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <Button className="flex-1 rounded-none bg-blue-950/50 hover:bg-blue-900/50 text-neo-teal border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase text-xs">
                  Edit
                </Button>
                <Button className="flex-1 rounded-none bg-red-500 hover:bg-red-600 text-white border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase text-xs">
                  Remove
                </Button>
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
