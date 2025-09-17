
"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICES = [
  "Full-Stack Development",
  "WordPress Development",
  "SEO & Digital Marketing",
  "Front-End Design & UI/UX",
  "E-Commerce Solutions",
  "Website Maintenance",
];

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Auto-hide success message after 2.5 seconds
  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.sendForm(
        "service_iizlwhd",
        "template_09ogwvj",
        form.current!,
        "uw06-ANaOcOH0Ll6_"
      );
      setSent(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-xl mx-auto">Let’s build something amazing together. Fill out the form and we’ll get back to you soon!</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-white/90 dark:bg-slate-900/90 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-slate-200 dark:border-slate-700 backdrop-blur-md">
          <div>
            <label className="block mb-1 font-semibold text-slate-700 dark:text-slate-200">Name</label>
            <input name="user_name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-slate-700 dark:text-slate-200">Email</label>
            <input name="user_email" type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-slate-700 dark:text-slate-200">Service Interested In</label>
            <select name="service" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition">
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-slate-700 dark:text-slate-200">Message</label>
            <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition" />
          </div>
          <button type="submit" disabled={loading} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-60">
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>}
          {error && <p className="text-red-600 font-semibold">{error}</p>}
        </form>
        <div className="mt-10 text-center text-slate-600 dark:text-slate-300">
          <p>TriWeb Studio, The Mall Road, Peshawar</p>
          <p>Email: info.triwebstudio@gmail.com</p>
          {/* Optionally embed Google Map here */}
        </div>
      </div>
    </section>
  );
}
