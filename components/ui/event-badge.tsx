"use client"

import React from "react"
import { getEventTypeColor, EVENT_TYPE_ICONS, EVENT_TYPE_COLORS } from "@/lib/events-data"

type Props = {
  label?: string
  type?: keyof typeof EVENT_TYPE_COLORS
  status?: "completed" | "upcoming"
  className?: string
  size?: "xs" | "sm" | "base"
}

export function EventBadge({ label, type, status, className = "", size = "xs" }: Props) {
  const base = "font-ranade font-bold uppercase border-2 border-black shadow-neo"
  const sizeCls = size === "base" ? "px-4 py-2 text-base" : size === "sm" ? "px-3 py-1 text-sm" : "px-3 py-1 text-xs"
  const color = status
    ? status === "completed"
      ? "bg-green-500 text-white"
      : "bg-neo-teal text-black"
    : type
    ? getEventTypeColor(type)
    : "bg-gray-500 text-white"

  const text = label ?? (type ? EVENT_TYPE_ICONS[type] : status ? (status === "completed" ? "Completed" : "Upcoming") : "Event")

  return <span className={`${base} ${sizeCls} ${color} ${className}`}>{text}</span>
}

export default EventBadge
