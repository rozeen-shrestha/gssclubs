"use client"

import { motion } from "framer-motion"
import { Lock, Mail, LogIn } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login - replace with actual authentication
    setTimeout(() => {
      router.push("/admin/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Login Card */}
        <div className="bg-blue-950/50 backdrop-blur-sm border-4 border-black shadow-neo-xl overflow-hidden">
          {/* Header */}
          <div className="bg-neo-yellow border-b-4 border-black p-6 text-center">
            <motion.div
              className="w-20 h-20 bg-black border-4 border-black shadow-neo mx-auto mb-4 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              <Lock className="w-10 h-10 text-neo-yellow" />
            </motion.div>
            <h1 className="font-ranade font-black text-3xl text-black uppercase tracking-tight">
              Admin Login
            </h1>
            <p className="font-ranade font-bold text-sm text-black/70 mt-2">
              GSS Clubs Dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="font-ranade font-bold text-white uppercase text-sm"
              >
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-teal" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@gss.edu.np"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 rounded-none bg-blue-950/30 border-4 border-black shadow-neo font-ranade font-bold text-white placeholder:text-white/40 focus:shadow-neo-hover focus:border-neo-teal transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="font-ranade font-bold text-white uppercase text-sm"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-teal" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-14 rounded-none bg-blue-950/30 border-4 border-black shadow-neo font-ranade font-bold text-white placeholder:text-white/40 focus:shadow-neo-hover focus:border-neo-teal transition-all"
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 rounded-none bg-neo-teal hover:bg-neo-teal/90 text-black border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-black text-lg uppercase tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-4 border-black rounded-full" />
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Login
                </span>
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="border-t-4 border-black bg-blue-950/30 p-4 text-center">
            <p className="font-ranade font-medium text-sm text-white/60">
              Forgot your password? Contact IT Admin
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/"
            className="font-ranade font-bold text-neo-yellow hover:text-neo-teal transition-colors uppercase text-sm"
          >
            ← Back to Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
