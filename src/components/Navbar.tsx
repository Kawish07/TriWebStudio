"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/services", label: "Services", dropdown: true },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // List of services for dropdown
  const servicesList = [
    { label: "Full-Stack Development", href: "/services#fullstack" },
    { label: "SEO & Digital Marketing", href: "/services#seo" },
    { label: "Front-End Design & UI/UX", href: "/services#frontend" },
    { label: "E-Commerce Solutions", href: "/services#ecommerce" },
    { label: "Website Maintenance", href: "/services#maintenance" },
    { label: "Consulting & Strategy", href: "/services#consulting" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-br from-blue-500/80 via-purple-700/80 to-pink-500/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-slate-900/5"
          : "bg-gradient-to-br from-blue-500/60 via-purple-700/60 to-pink-500/60 backdrop-blur-xl border-b border-white/10 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 text-2xl font-bold transition-all duration-300"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <FaRocket className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className={`bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 ${
              isScrolled ? "drop-shadow-md" : "text-white drop-shadow-md"
            }`}>
              TriWeb Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    className={`relative font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1 bg-transparent outline-none ${
                      isScrolled
                        ? "text-white hover:text-blue-300"
                        : "text-white/90 hover:text-white"
                    }`}
                    tabIndex={0}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <svg className="w-3 h-3 mt-1 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  {showDropdown && (
                    <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-gradient-to-br from-blue-500/95 via-purple-700/95 to-pink-500/95 rounded-xl shadow-xl border border-white/20 py-2 z-50 animate-fade-in-up" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                      {servicesList.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-5 py-3 text-white font-medium hover:bg-white/10 hover:text-blue-200 transition-all duration-200 rounded-lg"
                          onClick={() => setShowDropdown(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-white hover:text-blue-300"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </Link>
              )
            )}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              <span className="flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-white hover:bg-white/10"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-blue-500/90 via-purple-700/90 to-pink-500/90 backdrop-blur-xl border-t border-white/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={item.href} className="relative">
                    <button
                      type="button"
                      className="group flex items-center gap-3 p-3 rounded-xl text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 w-full justify-between"
                      onClick={() => setShowMobileDropdown((open) => !open)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <svg className={`w-3 h-3 ml-2 transition-transform ${showMobileDropdown ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {showMobileDropdown && (
                      <div className="pl-6 pb-2 animate-fade-in-up">
                        {servicesList.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-3 py-2 text-white font-medium hover:bg-white/10 hover:text-blue-200 transition-all duration-200 rounded-lg"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setShowMobileDropdown(false);
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 p-3 rounded-xl text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              )}
              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-gradient-to-br from-blue-500/30 via-purple-700/30 to-pink-500/30 backdrop-blur-md -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}