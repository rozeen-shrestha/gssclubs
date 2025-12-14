"use client"

import { motion } from "framer-motion"
import { Code, Palette, Users, Heart, Github, Linkedin, Mail } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  contribution: string
  color: string
  icon: React.ReactNode
  socials?: {
    github?: string
    linkedin?: string
    email?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Rojin Shrestha",
    role: "Lead Developer",
    contribution: "Full-stack development, architecture, and deployment",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: <Code className="w-8 h-8" />,
    socials: {
      github: "https://github.com/rozeen-shrestha",
      linkedin: "https://www.linkedin.com/in/rojinshrestha/",
    },
  },
  {
    name: "Sneha Nepal",
    role: "Developer & Designer",
    contribution: "Initial designs and development contributions",
    color: "from-violet-500/20 to-purple-500/20",
    icon: <Code className="w-8 h-8" />,
    socials: {
        github: "https://github.com/Sneha-Nepal",
    },
  },
  {
    name: "Aarya Malla",
    role: "UI/UX Designer",
    contribution: "Visual design, branding, and user experience",
    color: "from-purple-500/20 to-pink-500/20",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    name: "Myeisha Tiwari",
    role: "UI/UX Designer",
    contribution: "Visual design, branding, and user experience",
    color: "from-pink-500/20 to-rose-500/20",
    icon: <Palette className="w-8 h-8" />,
  },
]

export default function Credits() {
  return (
    <section className="pt-14 pb-8 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-ranade font-black text-5xl md:text-7xl text-neo-yellow mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Made with{" "}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="inline w-12 h-12 md:w-16 md:h-16 text-red-500 fill-red-500" />
            </motion.span>
          </motion.h1>
          <motion.p
            className="font-ranade font-medium text-white text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            This platform was built by IT CLUB, for students. Meet the team behind IT CLUB.
          </motion.p>
        </motion.div>

        {/* Team Members */}
        <div className="mb-20">
          <motion.h2
            className="font-ranade font-black text-4xl md:text-5xl text-neo-teal mb-10 uppercase tracking-tight text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="relative bg-blue-950/60 border-4 border-black p-6 shadow-neo-lg overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  boxShadow: "12px 12px 0px rgba(0, 0, 0, 1)",
                  x: -2,
                  y: -2,
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-50`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 bg-neo-yellow border-4 border-black flex items-center justify-center mb-4 shadow-neo"
                  >
                    {member.icon}
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-ranade font-black text-2xl text-white mb-2 uppercase">
                    {member.name}
                  </h3>
                  <p className="font-ranade font-bold text-neo-teal mb-3 uppercase text-sm">
                    {member.role}
                  </p>

                  {/* Contribution */}
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {member.contribution}
                  </p>

                  {/* Social Links */}
                  {member.socials && (
                    <div className="flex gap-3">
                      {member.socials.github && (
                        <motion.a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-neo hover:shadow-neo-hover transition-all"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 text-black" />
                        </motion.a>
                      )}
                      {member.socials.linkedin && (
                        <motion.a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-neo hover:shadow-neo-hover transition-all"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-5 h-5 text-black" />
                        </motion.a>
                      )}
                      {member.socials.email && (
                        <motion.a
                          href={`mailto:${member.socials.email}`}
                          className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-neo hover:shadow-neo-hover transition-all"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-5 h-5 text-black" />
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Special Thanks */}
        <motion.div
          className="relative bg-blue-950/60 border-4 border-black p-8 md:p-12 shadow-neo-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Decoration */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <div className="relative z-10 text-center">
            <h2 className="font-ranade font-black text-3xl md:text-4xl text-neo-yellow mb-4 uppercase tracking-tight">
              Special Thanks
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              A huge thank you to <span className="text-neo-teal font-bold">Global School of Science</span> for their
              support. Thanks to all the club members, students, and faculty who made this platform
              possible.
            </p>
            <motion.div
              className="inline-block bg-neo-teal border-4 border-black px-8 py-4 shadow-neo"
              whileHover={{
                boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
                x: -2,
                y: -2,
              }}
            >
              <p className="font-ranade font-black text-xl text-white uppercase">
               GSS IT CLUB 2025
              </p>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}
