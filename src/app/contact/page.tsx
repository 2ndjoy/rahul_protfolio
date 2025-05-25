"use client";

import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@/components/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { PopupButton } from "react-calendly";
import { SolarSystemBackground } from "@/components/SolarSystem";

export default function ContactPage() {
  const [stars, setStars] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const s = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(s);
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-8 text-white bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <SolarSystemBackground />

      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-md bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-md"
        >
          <motion.div whileHover={{ x: -3 }} transition={{ stiffness: 300 }}>
            <ArrowLeftIcon className="h-5 w-5" />
          </motion.div>
          <span className="text-sm font-semibold">Back to Orbit</span>
        </Link>
      </motion.div>

      {/* Main Card */}
      <main className="relative z-10 flex flex-col items-center justify-center p-8 mt-16">
        <motion.div
          className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 shadow-[0_0_80px_-20px_rgba(0,0,255,0.3)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 animate-pulse">
            Let’s Connect
          </h1>
          <p className="text-lg text-blue-200 mb-8 text-center">
            Ready to bring your vision to life? Click below to schedule a
            30-minute chat.
          </p>

          {/* Popup Calendly Button */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="mb-10 inline-block"
            >
              <PopupButton
                url="https://calendly.com/baker0003locked/30min"
                rootElement={
                  typeof window !== "undefined" ? document.body : undefined
                }
                text="Schedule a Call"
                className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold tracking-wide text-white bg-gradient-to-r from-blue-400 to-purple-400 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 shadow-lg hover:shadow-xl"
              />
            </motion.div>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl text-yellow-300">Prefer email?</p>
            <a
              href="mailto:baker0003locked@gmail.com"
              className="inline-block text-white/90 hover:text-white font-medium transition-colors text-2xl mb-1"
            >
              baker0003locked@gmail.com
            </a>

            <h2 className="text-xl mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 animate-bounce">
              Across the Galaxy
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["LinkedIn", "Dribbble", "Twitter", "GitHub"].map((name) => (
              <motion.a
                key={name}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-inner ring-1 ring-white/10 hover:ring-white/20 transition-all"
              >
                {name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
