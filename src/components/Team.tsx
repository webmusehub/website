import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Github, Linkedin, Instagram, Users } from "lucide-react"
import { motion } from "framer-motion"
import CustomCursor from '@/components/CustomCursor'
import ParticleBackground from '@/components/ParticleBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface TeamMember {
  name: string
  role: string
  img: string
  linkedin: string
  github: string
  instagram: string
}

interface SocialLinkProps {
  href: string
  icon: React.ComponentType<{ size?: string | number; className?: string }>
  label: string
  isDark: boolean
}

const SocialLink = ({ href, icon: Icon, label, isDark }: SocialLinkProps) => (
  <motion.a
    href={href}
    whileHover={{ y: -3, scale: 1.2 }}
    transition={{ duration: 0.2 }}
    className="w-12 h-12 glass-subtle rounded-xl flex items-center justify-center hover-glow-strong border border-glass-border-bright hover:border-neon-cyan transition-all duration-300 group"
    aria-label={label}
    role="listitem"
    target={href !== "#" ? "_blank" : undefined}
    rel={href !== "#" ? "noopener noreferrer" : undefined}
    data-cursor-hover
  >
    <Icon className="w-5 h-5 text-foreground group-hover:text-neon-cyan transition-colors duration-300" />
  </motion.a>
)

const teamMembers: TeamMember[] = [
  {
    name: "Pratham Honnappanavar",
    role: "Founder & CEO",
    img: "https://i.pravatar.cc/300?img=1",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    name: "Sushant Tiwari",
    role: "Project Manager",
    img: "https://i.pravatar.cc/300?img=2",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    name: "Soujanya Maharudra Bailawad",
    role: "Full Stack Developer",
    img: "https://i.pravatar.cc/300?img=3",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    name: "Sepuri Pavan",
    role: "Full Stack Developer",
    img: "https://i.pravatar.cc/300?img=4",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    name: "Sandesh Biradar",
    role: "Content Creator",
    img: "https://i.pravatar.cc/300?img=5",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
]

export default function Team() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      <main>
        <section id="team" className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Enhanced Animated Badge */}
              <div className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-xl mb-8 hover-glow-strong animate-float">
                <Users className="w-4 h-4 text-neon-cyan animate-pulse-glow" />
                <span className="text-sm font-semibold tracking-wide">Meet Our Amazing Team</span>
              </div>

              {/* Enhanced Main Heading */}
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up">
                <span className="hero-text block mb-2">Meet Our</span>
                <span className="text-gradient-secondary block">Team</span>
              </h1>

              {/* Enhanced Subheading */}
              <p className="text-xl md:text-2xl text-foreground/85 mb-16 max-w-3xl mx-auto leading-relaxed font-light animate-slide-in-left">
                The passionate minds powering innovation, creativity, and collaboration behind our project.
              </p>
            </motion.div>

            {/* Team Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 40 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="glass rounded-2xl border border-glass-border-bright hover-glow-strong transition-all duration-500 hover:scale-105 shadow-floating h-96">
                    <CardContent className="flex flex-col items-center text-center p-8 h-full">
                      <div className="flex-1 flex flex-col items-center justify-center">
                        {/* Avatar */}
                        <div className="relative mb-6">
                          <Avatar className="w-32 h-32 border-4 border-glass-border-bright relative z-10 transition-all duration-300">
                            <AvatarImage 
                              src={member.img} 
                              alt={`Profile picture of ${member.name}`}
                              loading="lazy"
                            />
                            <AvatarFallback className="text-xl font-bold bg-gradient-primary text-primary-foreground">
                              {member.name.split(' ').map(n => n.charAt(0)).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>

                        <h3 className="text-2xl font-bold mb-2 hero-text group-hover:text-neon-cyan transition-colors duration-300">{member.name}</h3>
                        <p className="text-neon-cyan font-semibold mb-6 text-lg">
                          {member.role}
                        </p>
                      </div>

                      {/* Enhanced Social Links */}
                      <div className="flex space-x-6 mt-auto" role="list" aria-label="Social media links">
                        <SocialLink
                          href={member.linkedin}
                          icon={Linkedin}
                          label={`${member.name}'s LinkedIn profile`}
                          isDark={false}
                        />
                        <SocialLink
                          href={member.github}
                          icon={Github}
                          label={`${member.name}'s GitHub profile`}
                          isDark={false}
                        />
                        <SocialLink
                          href={member.instagram}
                          icon={Instagram}
                          label={`${member.name}'s Instagram profile`}
                          isDark={false}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
