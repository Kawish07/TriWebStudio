"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaPhone, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/30 dark:bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Main CTA section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
          >
            <FaRocket className="w-4 h-4 mr-2" />
            Ready to Launch?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transform your digital presence with cutting-edge design, powerful development, 
            and strategic marketing. Your success story starts with a single conversation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link 
              href="/contact" 
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <FaRocket className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/portfolio" 
              className="group px-10 py-5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-600 transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                View Portfolio
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="group text-center p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaPhone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quick Call</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Let's discuss your project over a friendly call</p>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Book a Call →</span>
          </div>

          <div className="group text-center p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send Message</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Drop us a detailed message about your needs</p>
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Send Email →</span>
          </div>

          <div className="group text-center p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaCalendarAlt className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Schedule Meeting</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Book a consultation at your convenience</p>
            <span className="text-pink-600 dark:text-pink-400 font-semibold">Schedule Now →</span>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center items-center gap-12 pt-16 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="font-medium">Free Consultation</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <span className="font-medium">24h Response Time</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
            <span className="font-medium">100% Satisfaction</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            <span className="font-medium">Money-Back Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}