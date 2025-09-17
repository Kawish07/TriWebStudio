"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useEffect, useState } from "react";

export default function Hero() {
  // Only render particles on the client to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const particles = useMemo(
    () =>
      mounted
        ? Array.from({ length: 20 }, () => {
            const x = Math.random() * 1920;
            const y = Math.random() * 1080;
            const dx = Math.random() * 400 - 200; // move up to ±200px
            const dy = Math.random() * 400 - 200;
            const duration = Math.random() * 20 + 10;
            return {
              x,
              y,
              dx,
              dy,
              duration,
            };
          })
        : [],
    [mounted]
  );

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-24 gap-12 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Floating particles effect (client only) */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
              initial={{ x: p.x, y: p.y }}
              animate={{ x: p.x + p.dx, y: p.y + p.dy }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Available for new projects
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
        >
          <span className="block">TriWeb</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Studio
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto font-light"
        >
          Crafting Digital Excellence Through
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-lg md:text-xl font-semibold mb-12"
        >
          <span className="text-blue-400">Design</span>
          <span className="text-white/40">•</span>
          <span className="text-purple-400">Development</span>
          <span className="text-white/40">•</span>
          <span className="text-pink-400">Digital Marketing</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/portfolio"
            className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              View Our Work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-white/60"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">20+</div>
            <div className="text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">20+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}