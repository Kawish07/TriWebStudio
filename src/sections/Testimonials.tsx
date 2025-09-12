"use client";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6"
          >
            <FaStar className="w-4 h-4 mr-2 text-yellow-400" />
            Client Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Trusted by Industry
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients say about their experience working with us.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <FaQuoteLeft className="w-8 h-8 text-blue-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-white/90 leading-relaxed mb-8 relative z-10">
                  "{testimonial.feedback}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-md group-hover:blur-lg transition-all"></div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/60">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-12 mt-16 pt-16 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
            <div className="text-white/60 text-sm">Average Rating</div>
            <div className="flex gap-1 mt-2 justify-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="w-3 h-3 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-white/60 text-sm">Client Satisfaction</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">48h</div>
            <div className="text-white/60 text-sm">Response Time</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">2+</div>
            <div className="text-white/60 text-sm">Years Experience</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group"
          >
            Join Our Success Stories
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}