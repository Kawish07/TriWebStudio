import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-14 px-6 bg-gradient-to-br from-blue-500/80 via-purple-700/80 to-pink-500/80 backdrop-blur-xl mt-20 border-t border-white/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white/90">
        {/* Social & Logo */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff" opacity="0.15"/><path d="M8 13.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">TriWeb Studio</span>
          </div>
          <div className="font-semibold text-lg mb-1">Social Links</div>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-2" />
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/profile.php?id=100080653752014" className="hover:text-blue-400 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition-colors"><FaInstagram /></a>
          </div>
        </div>

        {/* Useful Links & Services */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="font-semibold text-lg mb-1">Useful Links</div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-2" />
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              
            </ul>
          </div>
          <div>
            <div className="font-semibold text-lg mb-1">Our Services</div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-2" />
            <ul className="space-y-2">
              <li>Full-Stack Development</li>
              <li>SEO & Digital Marketing</li>
              <li>Front-End Design & UI/UX</li>
              <li>E-Commerce Solutions</li>
              <li>Website Maintenance</li>
              <li>Consulting & Strategy</li>
            </ul>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="font-semibold text-lg mb-1">Contact Details</div>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-2" />
          <div className="flex items-center gap-3"><FaPhoneAlt className="text-blue-400" /> <span>+92 330 5528031</span></div>
          <div className="flex items-center gap-3"><FaEnvelope className="text-blue-400" /> <span>info.triwebstudio@gmail.com</span></div>
          <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-blue-400" />
            <span>The Mall Road, Peshawar</span>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-white/70 text-sm">
        &copy; {new Date().getFullYear()} TriWeb Studio. All rights reserved.
      </div>
    </footer>
  );
}
