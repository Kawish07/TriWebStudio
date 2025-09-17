"use client";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "End-to-end web solutions using modern technologies like React, Next.js, Node.js, and databases.",
    features: [
      "Custom Web Applications",
      "API Development",
      "Database Design",
      "Performance Optimization",
    ],
    icon: "💻",
    price: "Starting at 20000 Pkr",
  },
  {
    id: 2,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online presence with strategic SEO, content marketing, and paid advertising campaigns.",
    features: [
      "Search Engine Optimization",
      "Content Marketing",
      "Social Media Management",
      "PPC Advertising",
    ],
    icon: "📈",
    price: "Starting at 10000 Pkr",
  },
  {
    id: 3,
    title: "Front-End Design & UI/UX",
    description:
      "Beautiful, user-friendly designs that convert visitors into customers with modern aesthetics.",
    features: [
      "Responsive Web Design",
      "User Experience Research",
      "Brand Identity",
      "Mobile-First Approach",
    ],
    icon: "🎨",
    price: "Starting at 12000 Pkr",
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description:
      "Complete online stores with payment integration, inventory management, and customer analytics.",
    features: [
      "Shopify Development",
      "WooCommerce",
      "Payment Integration",
      "Inventory Management",
    ],
    icon: "🛒",
    price: "Starting at 15000 Pkr",
  },
  {
    id: 5,
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing at its best with our ongoing support.",
    features: [
      "Security Updates",
      "Performance Monitoring",
      "Content Updates",
      "Backup Management",
    ],
    icon: "🔧",
    price: "Starting at 20000 Pkr/month",
  },
  {
    id: 6,
    title: "Consulting & Strategy",
    description:
      "Strategic guidance for your digital transformation journey and technology decisions.",
    features: [
      "Technology Consulting",
      "Digital Strategy",
      "Performance Audits",
      "Growth Planning",
    ],
    icon: "💡",
    price: "Starting at 2000 Pkr/hour",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 overflow-hidden">
      {/* Animated blurred background shapes for vibrancy */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 opacity-30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with our comprehensive suite of
            services. From stunning websites to powerful marketing strategies,
            we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              className="bg-gradient-to-br from-slate-800/80 via-purple-900/80 to-slate-900/80 rounded-3xl shadow-2xl p-8 border border-white/10 backdrop-blur-md hover:shadow-purple-500/25 transition-all duration-200 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05 + idx * 0.05,
                      duration: 0.2,
                    }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-150"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {service.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05, transition: { duration: 0.12 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.12 } }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-pink-500/20 rounded-3xl p-12 text-center border border-white/10 backdrop-blur-md mt-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing
            together. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.12 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.12 } }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-200"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.12 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.12 } }}
              className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:shadow-lg transition-all duration-200 backdrop-blur-md"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
