"use client";

import { ArrowLeftIcon } from "@/components/icons";
import Link from "next/link";
import { motion } from "framer-motion";

const SolarSystemBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Central Sun */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-20 h-20 rounded-full bg-yellow-400 shadow-2xl">
          <div className="w-full h-full rounded-full bg-yellow-200/30 animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-yellow-300/20 blur-xl scale-150" />
          <div className="absolute inset-0 rounded-full bg-orange-300/10 blur-2xl scale-200" />
        </div>
      </motion.div>

      {/* Mercury */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-32 h-32 relative">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-3 h-3 rounded-full bg-gray-400 shadow-lg" />
          </motion.div>
          <div className="absolute inset-0 rounded-full border border-white/10" />
        </div>
      </motion.div>

      {/* Venus */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-48 h-48 relative">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-4 h-4 rounded-full bg-yellow-300 shadow-lg">
              <div className="w-full h-full rounded-full bg-yellow-100/30 blur-sm" />
            </div>
          </motion.div>
          <div className="absolute inset-0 rounded-full border border-white/5" />
        </div>
      </motion.div>

      {/* Earth */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-64 h-64 relative">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-5 h-5 rounded-full bg-blue-400 shadow-lg">
              <div className="w-full h-full rounded-full bg-blue-200/40 blur-sm" />
            </div>
          </motion.div>
          <div className="absolute inset-0 rounded-full border border-white/5" />
        </div>
      </motion.div>

      {/* Mars */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-80 h-80 relative">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg">
              <div className="w-full h-full rounded-full bg-red-300/40 blur-sm" />
            </div>
          </motion.div>
          <div className="absolute inset-0 rounded-full border border-white/5" />
        </div>
      </motion.div>

      {/* Jupiter */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-96 h-96 relative">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-8 h-8 rounded-full bg-orange-400 shadow-xl">
              <div className="w-full h-full rounded-full bg-orange-200/30 blur-sm" />
              <div className="absolute inset-1 rounded-full border-t border-b border-orange-600/30" />
            </div>
          </motion.div>
          <div className="absolute inset-0 rounded-full border border-white/5" />
        </div>
      </motion.div>

      {/* Saturn */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[28rem] h-[28rem] relative">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-yellow-300 shadow-xl">
                <div className="w-full h-full rounded-full bg-yellow-100/30 blur-sm" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                <div className="absolute inset-0 rounded-full border border-white/20" />
                <div className="absolute inset-1 rounded-full border border-white/15" />
              </div>
            </div>
          </motion.div>
          <div className="absolute inset-0 rounded-full border border-white/5" />
        </div>
      </motion.div>

      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ 
            duration: 2 + Math.random() * 3, 
            repeat: Infinity, 
            delay: Math.random() * 2 
          }}
        />
      ))}
    </div>
  );
};
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Solar System Background - Reused from previous page */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors group backdrop-blur-lg bg-white/5 px-3 py-2 rounded-lg border border-white/10"
        >
          <motion.div
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ArrowLeftIcon className="h-5 w-5 group-hover:text-blue-300 transition-colors" />
          </motion.div>
          <span className="text-sm font-medium">Back to Orbit</span>
        </Link>
      </motion.div>
  <SolarSystemBackground/>

      <main className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 shadow-2xl shadow-purple-500/10">
          <div className="mb-10">
            <h1 className="text-4xl flex flex-wrap gap-4 text-zinc-50 md:text-5xl font-bold font-sans font-serif mb-2">
              Hello.
            </h1>
            <p className="text-xl text-yellow-200 font-sans font-serif mb-6">
              Looking for an elegant, professionally-built website that's completely yours to control?
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-zinc-300 to-yellow-500 rounded-full mb-8"></div>
          </div>

          <div className="space-y-6">
            <div className="group">
              <p className="text-sm text-yellow-200 mb-1">Email</p>
              <a href="mailto:legendarywaller@gmail.com" 
                 className="text-xl font-medium  font-sans text-white hover:text-blue-300 transition-colors flex items-center gap-2">
                baker0003locked@gmail.com
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            </div>

            <div>
              <p className="text-sm text-yellow-200 mb-3">Across the Digital Cosmos</p>
              <div className="flex flex-wrap gap-4 text-zinc-50">
                {[
                  { name: "LinkedIn", color: "from-white/10 to-white/20" },
                  { name: "Dribbble", color: "from-white/10 to-white/20" },
                  { name: "Twitter", color: "from-white/10 to-white/20" },
                  { name: "Github", color: "from-white/10 to-white/20" }
                ].map((social) => (

                  //bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 transition-all w-fit 

                  <a key={social.name} href="#" 
                     className={`bg-gradient-to-r ${social.color} px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform shadow-md`}>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 flex justify-between items-center">

          </div>
        </div>
      </main>
    </div>
  );
}