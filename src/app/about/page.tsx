"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Mock team data - replace with your actual team import
const team = [
  {
    name: "Kawish Iqbal",
    role: "Full-Stack Developer",
    bio: "2+ years experience in Full Stack development with expertise in React, Node.js, and cloud architecture.",
    avatar: "/images/myimage.jpg",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/kawish-iqbal-222767264/" },
      { platform: "GitHub", url: "https://github.com/Kawish07" },
      { platform: "Portfolio", url: "https://portfolio-c6th.vercel.app/" }
    ]
  },
  {
    name: "Ahassam Shafiq",
    role: "UI/UX Designer and WordPress Developer",
    bio: "Creative designer passionate about crafting beautiful, user-centered experiences that drive engagement.",
    avatar: "/images/ahassamimage.jpg",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/ahsam-abbasi1133/" },
      { platform: "GitHub", url: "https://github.com/AhassamShafique" },
      { platform: "Portfolio", url: "#" }
    ]
  },
  {
    name: "Aqsa Afzal",
    role: "Digital Marketing and SEO Expert",
    bio: "Data-driven marketer specializing in SEO, content strategy, and performance marketing campaigns.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=60",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" },
      { platform: "Portfolio", url: "#" }
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
  { number: "20+", label: "Projects Completed" },
  { number: "20+", label: "Happy Clients" },
  { number: "2+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

export default function AboutPage() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Enhanced animated background with glassmorphism */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-white to-transparent" />

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <motion.h1 
            className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-8 drop-shadow-2xl"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            About TriWeb Studio
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We empower businesses to thrive online through beautiful design, robust development, and smart digital marketing. 
            Founded in 2022, we&apos;ve been helping companies transform their digital presence with cutting-edge solutions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 group-hover:scale-110 transition-transform duration-200">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
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
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-200">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Meet the Developers
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-light">
              Our diverse team brings together expertise in development, design, and marketing to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -12,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                onHoverStart={() => setHoveredMember(member.name)}
                onHoverEnd={() => setHoveredMember(null)}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center border border-white/10 hover:border-white/20 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-2xl border-2 border-white/20"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-200 blur-md" />
                    </div>
                    {hoveredMember === member.name && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 0.4 }}
                        className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl"
                      />
                    )}
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-200">
                    {member.name}
                  </h3>
                  
                  <span className="text-blue-300 font-semibold mb-6 text-center text-sm md:text-base">
                    {member.role}
                  </span>
                  
                  <p className="text-gray-300 text-center mb-8 leading-relaxed flex-grow text-sm md:text-base">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-3 mt-auto">
                    {member.socials.map((social, idx) => (
                      <motion.a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          transition: { duration: 0.15, ease: "easeOut" }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:shadow-lg transition-all duration-200 border border-white/20"
                      >
                        {social.platform}
                      </motion.a>
                    ))}
                  </div>
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
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div 
            className="relative bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center border border-white/20 hover:border-white/30 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-8 drop-shadow-lg">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-10 font-light">
                To democratize digital excellence by providing world-class web development, design, and marketing services 
                that help businesses of all sizes compete in the digital marketplace. We believe every business deserves 
                a powerful online presence that drives growth and success.
              </p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-200 border border-white/20"
              >
                Start Your Project Today
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -2s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: -4s;
        }
      `}</style>
    </section>
  );
}