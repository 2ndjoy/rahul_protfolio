'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import Link from 'next/link'
import {
  ChatBubbleLeftIcon,
  MusicalNoteIcon,
  CodeBracketSquareIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  FilmIcon,
} from '@heroicons/react/24/outline'

import { Instagram } from 'lucide-react'
interface Planet {
  id: number
  name: string
  size: number
  distance: number
  speed: number
  angle: number
  color: string
  patternClass: string
}

const INITIAL_PLANETS: Planet[] = [
  {
    id: 1,
    name: 'Jupiter',
    size: 24,
    distance: 160,
    speed: 0.008,
    angle: 0,
    color: 'rgba(250, 204, 21, 0.8)',
    patternClass: 'bg-stripe-pattern',
  },
  {
    id: 2,
    name: 'Mars',
    size: 16,
    distance: 220,
    speed: 0.012,
    angle: Math.PI / 2,
    color: 'rgba(239, 68, 68, 0.9)',
    patternClass: 'bg-dot-pattern',
  },
  {
    id: 3,
    name: 'Moon',
    size: 14,
    distance: 100,
    speed: 0.015,
    angle: Math.PI,
    color: 'rgba(209, 213, 219, 0.9)',
    patternClass: 'bg-crater-pattern',
  },
  {
    id: 4,
    name: 'Neptune',
    size: 18,
    distance: 280,
    speed: 0.006,
    angle: (3 * Math.PI) / 2,
    color: 'rgba(96, 165, 250, 0.8)',
    patternClass: 'bg-wave-pattern',
  },
]

// -------------------- CLICK SOUND --------------------
function playClickSound() {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioCtx.createOscillator()
  const gainNode = audioCtx.createGain()

  oscillator.type = 'square'
  oscillator.frequency.setValueAtTime(600, audioCtx.currentTime)
  gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime)

  oscillator.connect(gainNode)
  gainNode.connect(audioCtx.destination)

  oscillator.start()
  oscillator.stop(audioCtx.currentTime + 0.05)
}

// -------------------- FOOTER COMPONENT --------------------
function CosmicFooter() {
const links = [
  { name: 'GitHub', href: 'https://github.com/2ndjoy', icon: <CodeBracketSquareIcon className="w-4 h-4" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rahul-chakrabarty-joy-47a95b209/', icon: <BriefcaseIcon className="w-4 h-4" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/throughmyeyes_024/', icon: <Instagram className="w-4 h-4" /> },  // <-- Changed here
  { name: 'Telegram', href: '#', icon: <ChatBubbleLeftIcon className="w-4 h-4" /> },
  { name: 'Spotify', href: 'https://open.spotify.com/playlist/12YvUYNLtI9Fo5IdVtgb52?si=aq92sY_sRbCakZNJeaTUWA', icon: <MusicalNoteIcon className="w-4 h-4" /> },
  { name: 'Cosmos', href: 'https://www.cosmos.so/joylogy', icon: <GlobeAltIcon className="w-4 h-4" /> },
  { name: 'Letterboxd', href: 'https://letterboxd.com/RahulJoy/', icon: <FilmIcon className="w-4 h-4" /> },
]


  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed bottom-0 w-full backdrop-blur-lg bg-white/5 border-t border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          {links.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
              onClick={playClickSound}
            >
              <span className="absolute -inset-2 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform pointer-events-none z-0" />
              <Link
                href={link.href}
                className="relative z-10 text-sm font-medium text-white/70 hover:text-white/90 transition-colors flex items-center gap-2"
              >
                <span className="text-white/50 group-hover:text-white/80 transition-colors">
                  {link.icon}
                </span>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
          className="mt-4 text-center text-xs text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} Rahul Chakrabarty Joy
        </motion.div>
      </div>
    </motion.footer>
  )
}

// -------------------- MAIN PAGE --------------------
export default function SolarSystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const planetsRef = useRef<Planet[]>(INITIAL_PLANETS.map((p) => ({ ...p })))

  useEffect(() => {
    const updateCenter = () => {
      if (!containerRef.current) return
      const { width, height } = containerRef.current.getBoundingClientRect()
      setCursorPos({ x: width / 2, y: height / 2 })
    }
    updateCenter()
    window.addEventListener('resize', updateCenter)
    return () => window.removeEventListener('resize', updateCenter)
  }, [])

  useAnimationFrame(() => {
    planetsRef.current.forEach((p) => {
      p.angle += p.speed
    })
  })

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return
    const point = 'touches' in e ? e.touches[0] : (e as any)
    const rect = containerRef.current.getBoundingClientRect()
    setCursorPos({
      x: point.clientX - rect.left,
      y: point.clientY - rect.top,
    })
  }

  const stars = useMemo(
    () =>
      Array.from({ length: 100 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 2 + 0.5,
      })),
    []
  )

  const ringStyle = (distance: number) => ({
    width: distance * 2,
    height: distance * 2,
    left: cursorPos.x - distance,
    top: cursorPos.y - distance,
    position: 'absolute' as const,
    borderRadius: '50%',
    pointerEvents: 'none' as const,
    background: `conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.05), transparent)`,
    animation: 'spin 20s linear infinite',
  })

  const getPos = (p: Planet) => {
    const x = cursorPos.x + Math.cos(p.angle) * p.distance - p.size / 2
    const y = cursorPos.y + Math.sin(p.angle) * p.distance - p.size / 2
    return { x, y }
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden cursor-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Stars */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 3, delay: s.delay }}
        />
      ))}

      {/* Planet Rings */}
      {planetsRef.current.map((p, i) => (
        <div key={i} style={ringStyle(p.distance)} />
      ))}

      {/* Sun */}
      <motion.div
        className="absolute w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-[0_0_40px_15px_rgba(250,200,50,0.3)] pointer-events-none"
        style={{
          left: cursorPos.x - 24,
          top: cursorPos.y - 24,
        }}
        animate={{
          scale: isHovering ? [1, 1.1, 1] : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity },
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
        }}
      >
        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
      </motion.div>

      {/* Planets */}
      {planetsRef.current.map((p) => {
        const { x, y } = getPos(p)
        return (
          <motion.div
            key={p.id}
            className={`absolute rounded-full border border-white/10 ${p.patternClass}`}
            style={{
              left: x,
              top: y,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
            }}
            animate={{ scale: isHovering ? 1.05 : 0.95 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            {p.name === 'Jupiter' && <div className="absolute -inset-4 rounded-full border border-white/10" />}
            {p.name === 'Neptune' && <div className="absolute -inset-3 rounded-full border-t-2 border-blue-300/30" />}
          </motion.div>
        )
      })}

      {/* Intro Section */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10 px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-6">
          <motion.h1
            className="text-2xl md:text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400  tracking-tight animate-bounce"
            whileHover={{ letterSpacing: '0.02em' }}
          >
            Hi, I’m Joy
          </motion.h1>

          <motion.p
            className="text-xl md:text-xl text-white/70 max-w-xl mx-auto px-4 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I'm a passionate developer and creative thinker, available for freelance and full-time
            opportunities. Let’s build something extraordinary together.
          </motion.p>

         <motion.nav
             className="mt-10 flex flex-col items-center space-y-3"
             initial="hidden"
             animate="show"
             variants={{
               hidden: {},
               show: {
                 transition: {
                   staggerChildren: 0.1,
                 },
               },
             }}
>

  <hr />

  
  {['Start a project', 'Works', 'Services', 'Journal', 'Contact', 'About'].map((label) => (
    <motion.div
      key={label}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 250 }}
      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      onClick={playClickSound}
    >
      <Link
        href={`/${label.toLowerCase().replace(/\s/g, '-')}`}
        className="
          inline-block px-6 py-2
          text-sm md:text-base font-semibold tracking-wide
          text-white/90 hover:text-white
          bg-white/10 hover:bg-white/20
          backdrop-blur-md rounded-full
          shadow-inner shadow-white/10
          ring-1 ring-white/10 hover:ring-white/20
          transition-all duration-300
        "
      >
        {label}
      </Link>
    </motion.div>
  ))}
</motion.nav>

        </div>
      </motion.div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <CosmicFooter />
    </motion.div>
  )
}
