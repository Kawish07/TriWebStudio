import { services } from "@/data/services";
import { FaCode, FaChartLine, FaPalette, FaRocket } from "react-icons/fa";

const icons = [FaCode, FaChartLine, FaPalette];

export default function ServiceHighlights() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <FaRocket className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Succeed Online
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From stunning designs to powerful development and strategic marketing, we provide comprehensive digital solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = icons[i] || FaCode;
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500', 
              'from-orange-500 to-red-500'
            ];
            const glows = [
              'group-hover:shadow-blue-500/20',
              'group-hover:shadow-purple-500/20',
              'group-hover:shadow-orange-500/20'
            ];
            
            return (
              <div
                key={service.title}
                className={`group relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${glows[i]} hover:-translate-y-2`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-2xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 dark:group-hover:from-white dark:group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradients[i]} mt-2.5 flex-shrink-0`}></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a 
                    href="/contact" 
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradients[i]} text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn`}
                  >
                    Get Started
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 delay-100"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Need a custom solution? We've got you covered.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Discuss Your Project
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}