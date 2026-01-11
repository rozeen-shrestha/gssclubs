export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  attendees: number
  image: string
  type: "workshop" | "competition" | "seminar" | "hackathon"
  status: "completed" | "upcoming"
  club: string
  clubId: string
}

export const eventsData: Event[] = [
  {
    id: "multi-tier-basketball",
    title: "Multi Tier Basketball Competition",
    date: "TBD",
    time: "TBD",
    location: "School Basketball Court",
    description:
      "An exciting multi-tier basketball competition open to all skill levels. Teams will compete in different divisions based on their experience, ensuring fair and competitive matches. This tournament promotes teamwork, sportsmanship, and healthy competition among students. Join us for an action-packed event filled with thrilling games and school spirit.",
    attendees: 0,
    image: "/placeholder.svg?height=300&width=400",
    type: "competition",
    status: "upcoming",
    club: "Sports Club",
    clubId: "sports-club",
  },
  {
    id: "maths-olympiad",
    title: "Maths Olympiad",
    date: "TBD",
    time: "TBD",
    location: "School Auditorium",
    description:
      "Challenge your mathematical prowess in our Maths Olympiad! This competition tests problem-solving skills, logical reasoning, and mathematical knowledge across various topics. Students will tackle complex problems, compete for top honors, and showcase their analytical abilities. Perfect for mathematics enthusiasts looking to push their limits.",
    attendees: 0,
    image: "/placeholder.svg?height=300&width=400",
    type: "competition",
    status: "upcoming",
    club: "Science and Innovation Club",
    clubId: "science-club",
  },
  {
    id: "cyber-security-seminar",
    title: "Cyber Security Seminar",
    date: "March 15, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "GSS Hall",
    description:
      "An engaging seminar focused on the essentials of cyber security. The session covered key concepts, real-world threats, and included a live demonstration showing how hacking takes place. Students gained practical awareness on staying safe online. Topics included password security, phishing attacks, encryption, and best practices for protecting personal data.",
    attendees: 600,
    image: "/placeholder.svg?height=300&width=400",
    type: "seminar",
    status: "completed",
    club: "IT Club",
    clubId: "it-club",
  },
  {
    id: "esports-tournament-lan",
    title: "Esports Tournament LAN (PUBG & Free Fire)",
    date: "April 22, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "GSS Hall",
    description:
      "A thrilling LAN esports tournament featuring PUBG and Free Fire. Teams battled it out in an electrifying atmosphere, showcasing their gaming skills and teamwork. The event fostered camaraderie and competitive spirit among participants. With professional-grade equipment and live streaming, this tournament brought together the best mobile gamers from across the school.",
    attendees: 400,
    image: "/placeholder.svg?height=300&width=400",
    type: "competition",
    status: "completed",
    club: "IT Club",
    clubId: "it-club",
  },
  {
    id: "model-un-conference",
    title: "Model UN Conference",
    date: "January 16-18, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "GSS Hall",
    description:
      "Engage in diplomatic discussions and debate global issues at our Model UN Conference. Represent countries, draft resolutions, and develop your public speaking skills. Delegates participated in committees covering international security, human rights, and sustainable development, honing their negotiation and diplomacy skills.",
    attendees: 120,
    image: "/placeholder.svg?height=300&width=400",
    type: "seminar",
    status: "completed",
    club: "MUN Club",
    clubId: "mun-club",
  },
]

export const getEventById = (id: string): Event | undefined => {
  return eventsData.find((event) => event.id === id)
}

export const EVENT_TYPE_COLORS: Record<Event["type"], string> = {
  workshop: "bg-neo-teal text-black",
  competition: "bg-neo-yellow text-black",
  seminar: "bg-purple-500 text-white",
  hackathon: "bg-orange-500 text-white",
}

export const getEventTypeColor = (type: Event["type"]) => {
  switch (type) {
    case "workshop":
      return EVENT_TYPE_COLORS.workshop
    case "competition":
      return EVENT_TYPE_COLORS.competition
    case "seminar":
      return EVENT_TYPE_COLORS.seminar
    case "hackathon":
      return EVENT_TYPE_COLORS.hackathon
    default:
      return "bg-gray-500 text-white"
  }
}

export const EVENT_TYPE_ICONS: Record<Event["type"], string> = {
  workshop: "Workshop",
  competition: "Competition",
  seminar: "Seminar",
  hackathon: "Hackathon",
}

export const getEventTypeIcon = (type: Event["type"]) => {
  switch (type) {
    case "workshop":
      return EVENT_TYPE_ICONS.workshop
    case "competition":
      return EVENT_TYPE_ICONS.competition
    case "seminar":
      return EVENT_TYPE_ICONS.seminar
    case "hackathon":
      return EVENT_TYPE_ICONS.hackathon
    default:
      return "Event"
  }
}
