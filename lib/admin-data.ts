export type AdminClub = {
  id: string
  name: string
  shortName: string
}

export type AdminEvent = {
  id: string
  title: string
  clubId: string
  date: string
  time: string
  location: string
  status: "upcoming" | "completed"
}

export type AdminMember = {
  id: string
  name: string
  clubId: string
  role: string
  email?: string
  social?: {
    linkedin?: string
    github?: string
  }
}

export const adminClubs: AdminClub[] = [
  { id: "it-club", name: "IT Club", shortName: "IT" },
  { id: "mun-club", name: "MUN Club", shortName: "MUN" },
  { id: "science-club", name: "Science and Innovation Club", shortName: "SCI" },
  { id: "sports-club", name: "Sports Club", shortName: "SPORTS" },
  { id: "arts-club", name: "Arts and Literature Club", shortName: "ARTS" },
  { id: "social-club", name: "Social Club", shortName: "SOCIAL" },
]

export const adminEvents: AdminEvent[] = [
  {
    id: "1",
    title: "Web Development Workshop",
    clubId: "it-club",
    date: "Nov 20, 2025",
    time: "2:00 PM",
    location: "Computer Lab",
    status: "upcoming",
  },
  {
    id: "2",
    title: "MUN Conference 2025",
    clubId: "mun-club",
    date: "Nov 25, 2025",
    time: "9:00 AM",
    location: "Auditorium",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Science Fair",
    clubId: "science-club",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    location: "Science Block",
    status: "completed",
  },
]

export const adminMembers: AdminMember[] = [
  { id: "m1", name: "Rojin Shrestha", clubId: "it-club", role: "President" },
]
