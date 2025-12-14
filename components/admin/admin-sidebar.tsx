"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  FileText,
  Image,
  UserCircle,
} from "lucide-react"
import { useState } from "react"

type NavItem = {
  name: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Clubs", href: "/admin/clubs", icon: Users },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Members", href: "/admin/members", icon: UserCircle },
  { name: "Submissions", href: "/admin/submissions", icon: FileText },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-neo-yellow border-4 border-black shadow-neo hover:shadow-neo-hover flex items-center justify-center transition-all"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <Menu className="w-6 h-6 text-black" />
        )}
      </button>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 h-screen w-72 bg-blue-950/50 backdrop-blur-sm border-r-4 border-black shadow-neo-xl z-40 transition-transform lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: -288 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
      >
        {/* Header */}
        <div className="bg-neo-yellow border-b-4 border-black p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black border-4 border-black shadow-neo flex items-center justify-center">
              <span className="font-ranade font-black text-2xl text-neo-yellow">A</span>
            </div>
            <div>
              <h2 className="font-ranade font-black text-xl text-black uppercase tracking-tight">
                Admin
              </h2>
              <p className="font-ranade font-bold text-xs text-black/70">GSS Clubs</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-180px)]">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`flex items-center gap-3 px-4 py-3 border-4 border-black shadow-neo transition-all cursor-pointer ${
                    isActive
                      ? "bg-neo-teal text-black shadow-neo-hover"
                      : "bg-blue-950/30 text-white hover:bg-blue-900/50 hover:shadow-neo-hover"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-ranade font-bold uppercase text-sm">{item.name}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 border-t-4 border-black bg-blue-950/50 p-4">
          <Link href="/admin/login">
            <motion.button
              className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 border-4 border-black shadow-neo hover:shadow-neo-hover text-white transition-all"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogOut className="w-5 h-5" />
              <span className="font-ranade font-bold uppercase text-sm">Logout</span>
            </motion.button>
          </Link>
        </div>
      </motion.aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
