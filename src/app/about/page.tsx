"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Mock team data - replace with your actual team import
const team = [
  {
    name: "Sarah Johnson",
    role: "Full-Stack Developer & Co-Founder",
    bio: "10+ years experience in web development with expertise in React, Node.js, and cloud architecture.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=60",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  },
  {
    name: "Mike Chen",
    role: "UI/UX Designer & Co-Founder",
    bio: "Creative designer passionate about crafting beautiful, user-centered experiences that drive engagement.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=60",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Dribbble", url: "#" },
      { platform: "Behance", url: "#" }
    ]
  },
  {
    name: "Alex Rodriguez",
    role: "Digital Marketing Expert & Co-Founder",
    bio: "Data-driven marketer specializing in SEO, content strategy, and performance marketing campaigns.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=60",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "Instagram", url: "#" }
    ]
  }
];

const VALUES = [
  {
    icon: "🎯",
    title: "Quality First",
    description: "We never compromise on quality. Every project receives our full attention to detail and commitment to excellence."
  },
  {
    icon: "🤝",
    title: "Transparency",
    description: "Clear communication, honest pricing, and open collaboration throughout every stage of your project."
  },
  {
    icon: "📈",
    title: "Results Driven",
    description: "We measure success by your success. Our goal is to deliver measurable impact to your business."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "Staying ahead of the curve with cutting-edge technologies and creative solutions to complex problems."
  }
];

const STATS = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

export default function AboutPage() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated blurred background shapes for vibrancy */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 opacity-30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 drop-shadow-lg animate-fade-in">
            About TriWeb Studio
          </h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in">
            We empower businesses to thrive online through beautiful design, robust development, and smart digital marketing. 
            Founded in 2022, we've been helping companies transform their digital presence with cutting-edge solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                className="bg-gradient-to-br from-slate-800/80 via-purple-900/80 to-slate-900/80 rounded-3xl p-6 text-center shadow-2xl border border-white/10 backdrop-blur-md hover:shadow-purple-500/25 transition-all duration-200 group"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 group-hover:drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.35 }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                className="bg-gradient-to-br from-slate-800/80 via-purple-900/80 to-slate-900/80 rounded-3xl p-8 text-center shadow-2xl border border-white/10 backdrop-blur-md group hover:shadow-purple-500/25 transition-all duration-200"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-200">
                  {value.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center">
            Meet the Founders
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our diverse team brings together expertise in development, design, and marketing to deliver exceptional results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.35 }}
                whileHover={{ scale: 1.06, rotate: 1 }}
                onHoverStart={() => setHoveredMember(member.name)}
                onHoverEnd={() => setHoveredMember(null)}
                className="bg-gradient-to-br from-slate-800/80 via-purple-900/80 to-slate-900/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/10 backdrop-blur-md hover:shadow-purple-500/25 transition-all duration-200 group"
              >
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  className="relative mb-6"
                >
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1 bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg"
                  />
                  {hoveredMember === member.name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 blur-lg"
                    />
                  )}
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-200">
                  {member.name}
                </h3>
                
                <span className="text-blue-300 font-semibold mb-4 text-center">
                  {member.role}
                </span>
                
                <p className="text-gray-200 text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex gap-4 mt-auto">
                  {member.socials.map((social, idx) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200"
                    >
                      {social.platform}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Statement */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-pink-500/20 rounded-3xl p-12 text-center border border-white/10 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 drop-shadow-lg">
              Our Mission
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              To democratize digital excellence by providing world-class web development, design, and marketing services 
              that help businesses of all sizes compete in the digital marketplace. We believe every business deserves 
              a powerful online presence that drives growth and success.
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-200"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.section>
      </div>
    </section>
  );
}