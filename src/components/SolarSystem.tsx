"use client";

import { motion } from 'framer-motion';
export const SolarSystemBackground = () => {
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