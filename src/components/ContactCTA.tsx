// src/components/ContactCTA.tsx
"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function ContactCTA() {
  const openCalendly = () => {
    window.open("https://calendly.com/baker0003locked", "_blank", "noopener");
  };

  return (
    <div className="text-center mb-12">
      <motion.button
        onClick={openCalendly}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="flex items-center gap-2 px-6 py-3 text-base font-semibold tracking-wide text-white bg-gradient-to-r from-blue-400 to-purple-400 rounded shadow-lg hover:shadow-xl transition-all"
      >
        <CalendarDays className="h-5 w-5" />
        Schedule a Call
      </motion.button>
    </div>
  );
}
