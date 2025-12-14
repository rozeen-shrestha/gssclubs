"use client"

import { usePathname } from "next/navigation"
import { getClubById } from "@/lib/clubs-data"
import ClubNavbar from "./club-navbar"
import Navigation from "./navigation"

const ConditionalNavigation = () => {
  const pathname = usePathname()
  const clubPageRegex = /^\/clubs\/([a-zA-Z0-9-]+)$/
  const match = pathname.match(clubPageRegex)

  if (match) {
    const clubId = match[1]
    const club = getClubById(clubId)
    if (club) {
      return <ClubNavbar club={club} />
    }
  }

  return <Navigation />
}

export default ConditionalNavigation
