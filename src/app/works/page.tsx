// app/projects/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FilmIcon, StarIcon, GlobeAltIcon, CubeIcon, ArrowLeftIcon } from '@/components/icons'

const projects = [
  {
    id: 1,
    title: "CIAK",
    description: "Telegram bot for finding movie theaters and showtimes",
    status: "Inactive",
    tech: "Node.js, Telegram API",
    year: "2023",
    mockupColor: "bg-blue-400",
    icon: <FilmIcon className="h-8 w-8 text-white" />
  },
  {
    id: 2,
    title: "STARGAZER",
    description: "Astronomy app for tracking celestial events",
    status: "Active",
    tech: "React Native, NASA API",
    year: "2024",
    mockupColor: "bg-indigo-400",
    icon: <StarIcon className="h-8 w-8 text-white" />
  },
  {
    id: 3,
    title: "NEBULA",
    description: "3D space visualization tool for educators",
    status: "Beta",
    tech: "Three.js, WebGL",
    year: "2023",
    mockupColor: "bg-blue-400",
    icon: <GlobeAltIcon className="h-8 w-8 text-white" />
  },
  {
    id: 4,
    title: "QUANTUM",
    description: "Physics simulation playground",
    status: "Active",
    tech: "Rust, WebAssembly",
    year: "2024",
    mockupColor: "bg-green-400",
    icon: <CubeIcon className="h-8 w-8 text-white" />
  }
]

function SolarSystemBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className="relative backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">
              {project.title}
            </h3>
            <p className="text-white/70">{project.description}</p>
            
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                project.status === "Active" ? "bg-green-400 animate-pulse" : 
                project.status === "Beta" ? "bg-yellow-400" : "bg-gray-400"
              }`} />
              <span className="text-white/70 text-sm">{project.status}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <div>
                <p className="text-white/50">Technology</p>
                <p className="text-white/80">{project.tech}</p>
              </div>
              <div>
                <p className="text-white/50">Year</p>
                <p className="text-white/80">{project.year}</p>
              </div>
            </div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link 
              href={`/projects/${project.id}`}
              className="inline-block mt-6 px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 transition-all w-fit"
            >
              View Details
            </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="relative rounded-lg border-8 border-slate-700 bg-slate-800 overflow-hidden aspect-video">
              <div className={`absolute inset-0 ${project.mockupColor}/20 flex items-center justify-center`}>
                <div className="text-center p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${project.mockupColor} flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm">Loading interface...</p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-4 bg-slate-700 mx-auto rounded-b-lg"></div>
            
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-400/10 blur-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-400/10 blur-lg"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
    </motion.div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <SolarSystemBackground />

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

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-12 relative z-10">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400  animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Journeys Through Code
        </motion.h1>

        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className='grid justify-center items-center gap-3 m-2'>
           <h2 className="font-semibold text-xl text-white animate-bounce">Got a project in mind? Let’s make it happen!</h2>
         
        <div className='flex justify-center'>
          <motion.button
                className="inline-flex items-center gap-2 px-9 py-3 text-xl bg-gradient-to-r from-blue-400 to-purple-400  rounded text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/start-a-project">
                Start a project
                </Link>
              </motion.button>
        </div>
        </div>
      </div>
    </div>
  )
}