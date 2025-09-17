
"use client";
import { projects } from "@/data/projects";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
  <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-10 text-center">Our Portfolio</h1>
        <div className="flex gap-4 justify-center mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl font-semibold border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                ${filter === cat
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg scale-105"
                  : "bg-white/20 dark:bg-slate-900/40 text-white border-white/30 hover:bg-white/30 hover:text-blue-300"}
              `}
              style={{ minWidth: 120 }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative bg-white/90 dark:bg-slate-900/90 rounded-3xl shadow-2xl p-8 flex flex-col border border-slate-200 dark:border-slate-700 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

              {/* Project image with animated scale */}
              <div className="overflow-hidden rounded-xl mb-4">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </div>

              {/* Project title with gradient */}
              <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mb-2 text-slate-600 dark:text-slate-300">{project.description}</p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-2">
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 text-white font-semibold text-xs shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-xs shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
