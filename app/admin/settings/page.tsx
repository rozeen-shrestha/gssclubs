"use client"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { motion } from "framer-motion"
import { Save, Bell, Shield, Database, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AdminSettingsPage() {
  return (
    <>
      <AdminPageHeader
        title="Settings"
        description="Configure your admin panel preferences"
      />

      <div className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
        {/* General Settings */}
        <motion.div
          className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-neo-teal border-b-4 border-black p-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-black" />
            <h2 className="font-ranade font-black text-2xl text-black uppercase tracking-tight">
              General Settings
            </h2>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="siteName" className="font-ranade font-bold text-white uppercase text-sm">
                Site Name
              </Label>
              <Input
                id="siteName"
                defaultValue="GSS Clubs"
                className="rounded-none bg-blue-950/30 border-4 border-black shadow-neo font-ranade font-bold text-white focus:shadow-neo-hover focus:border-neo-teal transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminEmail" className="font-ranade font-bold text-white uppercase text-sm">
                Admin Email
              </Label>
              <Input
                id="adminEmail"
                type="email"
                defaultValue="admin@gss.edu.np"
                className="rounded-none bg-blue-950/30 border-4 border-black shadow-neo font-ranade font-bold text-white focus:shadow-neo-hover focus:border-neo-teal transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="bg-neo-yellow border-b-4 border-black p-6 flex items-center gap-3">
            <Bell className="w-6 h-6 text-black" />
            <h2 className="font-ranade font-black text-2xl text-black uppercase tracking-tight">
              Notifications
            </h2>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between py-3 border-b-2 border-black/20">
              <div>
                <p className="font-ranade font-bold text-white">Email Notifications</p>
                <p className="font-ranade text-sm text-white/60 mt-1">
                  Receive email updates for new submissions
                </p>
              </div>
              <Switch className="data-[state=checked]:bg-neo-teal" />
            </div>

            <div className="flex items-center justify-between py-3 border-b-2 border-black/20">
              <div>
                <p className="font-ranade font-bold text-white">Event Reminders</p>
                <p className="font-ranade text-sm text-white/60 mt-1">
                  Get reminded about upcoming events
                </p>
              </div>
              <Switch className="data-[state=checked]:bg-neo-teal" defaultChecked />
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-ranade font-bold text-white">Member Updates</p>
                <p className="font-ranade text-sm text-white/60 mt-1">
                  Notifications when members join or leave
                </p>
              </div>
              <Switch className="data-[state=checked]:bg-neo-teal" defaultChecked />
            </div>
          </div>
        </motion.div>

        {/* Appearance */}
        <motion.div
          className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="bg-purple-500 border-b-4 border-black p-6 flex items-center gap-3">
            <Palette className="w-6 h-6 text-black" />
            <h2 className="font-ranade font-black text-2xl text-black uppercase tracking-tight">
              Appearance
            </h2>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between py-3 border-b-2 border-black/20">
              <div>
                <p className="font-ranade font-bold text-white">Dark Mode</p>
                <p className="font-ranade text-sm text-white/60 mt-1">
                  Toggle dark mode interface
                </p>
              </div>
              <Switch className="data-[state=checked]:bg-neo-teal" defaultChecked />
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-ranade font-bold text-white">Animations</p>
                <p className="font-ranade text-sm text-white/60 mt-1">
                  Enable interface animations
                </p>
              </div>
              <Switch className="data-[state=checked]:bg-neo-teal" defaultChecked />
            </div>
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="bg-orange-500 border-b-4 border-black p-6 flex items-center gap-3">
            <Database className="w-6 h-6 text-black" />
            <h2 className="font-ranade font-black text-2xl text-black uppercase tracking-tight">
              Database
            </h2>
          </div>

          <div className="p-6">
            <p className="font-ranade text-white mb-4">
              Backup and restore your database
            </p>
            <div className="flex gap-3">
              <Button className="rounded-none bg-neo-teal hover:bg-neo-teal/90 text-black border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase">
                Backup Now
              </Button>
              <Button className="rounded-none bg-blue-950/50 hover:bg-blue-900/50 text-white border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase">
                Restore
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Button className="w-full md:w-auto rounded-none bg-neo-yellow hover:bg-neo-yellow/90 text-black border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-black text-lg uppercase px-8 py-6">
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </Button>
        </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
