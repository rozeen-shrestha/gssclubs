"use client"

import { motion } from "framer-motion"

type AdminPageHeaderProps = {
  title: string
  description?: string
}

export function AdminPageHeader({ title, description }: AdminPageHeaderProps) {
  return (
    <motion.div
      className="bg-blue-950/50 backdrop-blur-sm border-b-4 border-black p-6 lg:p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="font-ranade font-black text-4xl lg:text-5xl text-neo-yellow uppercase tracking-tight mb-2">
          {title}
        </h1>
        {description && (
          <p className="font-ranade font-bold text-white/80 text-lg">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
