export type ClubMember = {
  name: string
  role: string
  social?: {
    linkedin?: string
    github?: string
    twitter?: string
    instagram?: string
  }
}

export type Club = {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  logo: string
  color: string
  members: ClubMember[]
  social?: {
    instagram?: string
    email?: string
  }
}

export const clubsData: Club[] = [
  {
    id: "it-club",
    name: "IT Club",
    shortName: "IT",
    tagline: "Code. Create. Innovate.",
    description:
      "The IT Club is dedicated to fostering technological innovation and coding excellence. We organize workshops, hackathons, and tech talks to help students enhance their programming skills and stay updated with the latest industry trends.",
    logo: "/logo/it.jpg",
    color: "bg-neo-teal",
    social: {
      instagram: "https://instagram.com/gssitclub",
      email: "itclub@globalcollege.edu.np",
    },
    members: [
      {
        name: "Rojin Shrestha",
        role: "President",
      },
      {
        name: "Samyam Bhatta",
        role: "Executive Member",
      },
      {
        name: "Sneha Nepal",
        role: "Executive Member",
      },
      {
        name: "Oshan Bimali",
        role: "Executive Member",
      },
      {
        name: "Aarnav KC",
        role: "Executive Member",
      },
      {
        name: "Aarya Malla",
        role: "Executive Member",
      },
      {
        name: "Myeisha Tiwari",
        role: "Executive Member",
      },
      {
        name: "Aayush Kiran Kunwar",
        role: "Executive Member",
      },
      {
        name: "Spandan Bhantana",
        role: "Executive Member",
      },
    ],
  },
  {
    id: "mun-club",
    name: "MUN Club",
    shortName: "MUN",
    tagline: "Debate. Diplomacy. Leadership.",
    description:
      "The MUN Club provides students with opportunities to engage in diplomacy, international relations, and public speaking. Through simulated UN conferences, members develop critical thinking, negotiation, and leadership skills.",
    logo: "/logo/mun.jpg",
    color: "bg-neo-yellow",
    social: {
      instagram: "https://instagram.com/gss.mun",
      email: "mun@globalcollege.edu.np",
    },
    members: [
      {
        name: "?????????????",
        role: "President",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
    ],
  },
  {
    id: "science-club",
    name: "Science and Innovation Club",
    shortName: "SCI",
    tagline: "Explore. Experiment. Discover.",
    description:
      "The Science and Innovation Club encourages scientific curiosity and hands-on experimentation. We conduct workshops, science fairs, and lab sessions covering various fields including physics, chemistry, biology, and environmental science.",
    logo: "/logo/science.jpg",
    color: "bg-purple-500",
    social: {
      instagram: "https://instagram.com/gss.scienceclub",
      email: "science@globalcollege.edu.np",
    },
    members: [
      {
        name: "?????????????",
        role: "President",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
    ],
  },
  {
    id: "sports-club",
    name: "Sports Club",
    shortName: "SPORTS",
    tagline: "Play. Compete. Excel.",
    description:
      "The Sports Club promotes physical fitness, teamwork, and competitive spirit. We organize tournaments, training sessions, and sports events across various disciplines including football, basketball, athletics, and more.",
    logo: "/logo/sports.jpg",
    color: "bg-orange-500",
    social: {
      instagram: "https://instagram.com/gss.sports",
      email: "sports@globalcollege.edu.np",
    },
    members: [
      {
        name: "?????????????",
        role: "President",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
    ],
  },
  {
    id: "arts-club",
    name: "Arts and Literature Club",
    shortName: "ARTS",
    tagline: "Create. Express. Inspire.",
    description:
      "The Arts and Literature Club celebrates creativity and artistic expression. From painting and sculpture to digital art and photography, we provide a platform for students to explore and showcase their artistic talents.",
    logo: "/logo/arts.jpg",
    color: "bg-pink-500",
    social: {
      instagram: "https://instagram.com/gss.arts",
      email: "arts@globalcollege.edu.np",
    },
    members: [
      {
        name: "?????????????",
        role: "President",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
    ],
  },
  {
    id: "social-club",
    name: "Social Club",
    shortName: "SOCIAL",
    tagline: "Serve. Impact. Transform.",
    description:
      "The Social Club is committed to community service and social responsibility. We organize outreach programs, awareness campaigns, and volunteering activities to make a positive impact on society.",
    logo: "/logo/social.jpg",
    color: "bg-green-500",
    social: {
      instagram: "https://instagram.com/gss.socialservice",
      email: "social@globalcollege.edu.np",
    },
    members: [
      {
        name: "?????????????",
        role: "President",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
      {
        name: "?????????????",
        role: "Executive Member",
      },
    ],
  },
]

export const getClubById = (id: string) => {
  return clubsData.find((club) => club.id === id)
}

export const getClubByShortName = (shortName: string) => {
  return clubsData.find((club) => club.shortName === shortName)
}
