'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Palette, Database, Globe, Zap, Star, CheckCircle } from 'lucide-react';
 import {ArrowLeftIcon } from '@/components/icons'
import Link from 'next/link';
const services = [
  {
    title: "Full-Stack Development",
    description: "Complete end-to-end solutions from concept to deployment",
    icon: <Code className="w-8 h-8" />,
    color: "bg-blue-400"
  },
  {
    title: "UI/UX Design",
    description: "Stunning, user-friendly designs that captivate and convert",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-blue-400"
  },
  {
    title: "Backend & CMS",
    description: "Robust backends with seamless content management systems",
    icon: <Database className="w-8 h-8" />,
    color: "bg-green-400"
  },
  {
    title: "Dynamic Interactions",
    description: "Creative animations and 3D experiences with Three.js & GSAP",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-orange-400"
  }
];

const techStacks = {
  "Backend / CMS": [
    "AWS", "Cloudflare", "Contentful", "Craft CMS", "Digital Ocean", "Docker",
    "Drupal", "Firebase", "Fly.io", "Google Cloud", "I use Arch btw", "Laravel",
    "Netlify", "Payload", "Pocketbase", "Prismic", "Ruby on Rails", "Sanity",
    "Storyblok", "Supabase", "Twilio", "Vercel", "Wordpress"
  ],
  "Frontend": [
    "Astro", "Framer", "Framer Motion", "Gatsby", "GSAP", "NextJS",
    "PartyKit", "React", "Shopify", "Styled Components", "Tailwind", "ThreeJS", "Webflow"
  ],
  "Ecommerce": [
    "Lemon Squeezy", "Medusa", "Paypal", "Shopify", "Snipcart", "Stripe", "Woocommerce"
  ]
};

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

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
        <div className={`absolute inset-0 ${service.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className={`inline-flex p-4 rounded-xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-white/70 leading-relaxed">{service.description}</p>
        
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-16 translate-x-16" />
      </div>
    </motion.div>
  );
};

const TechSection = ({ title, techs, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayTechs = isExpanded ? techs : techs.slice(0, 8);
  
  const iconMap = {
    "Backend / CMS": <Database className="w-6 h-6" />,
    "Frontend": <Globe className="w-6 h-6" />,
    "Ecommerce": <Star className="w-6 h-6" />
  };

  const colorMap = {
    "Backend / CMS": "bg-green-400",
    "Frontend": "bg-blue-400",
    "Ecommerce": "bg-blue-400"
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl ${colorMap[title]}`}>
            {iconMap[title]}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          {displayTechs.map((tech, techIndex) => (
            <motion.div
              key={tech}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-200 text-center">
                {tech}
              </div>
            </motion.div>
          ))}
        </div>
        
        {techs.length > 8 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            {isExpanded ? 'Show Less' : `Show ${techs.length - 8} More`}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-4 h-4" />
            </motion.div>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden">
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

      <div className="relative z-10">
        <section className="pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-blue-400">
                  Full-Stack
                </span>
                <br />
                <span className="text-white">Developer & Designer</span>
              </h1>
              
              <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                <p>
                  As a versatile full-stack developer and designer, I offer a complete end-to-end solution for building websites. 
                  From crafting stunning, user-friendly designs to coding both the frontend and backend, I create custom websites 
                  that perfectly fit your vision.
                </p>
                
                <p>
                  Whether it's implementing a CMS like Sanity for seamless content management or adding dynamic, creative interactions 
                  using technologies like Three.js and GSAP, I handle every aspect of the process to deliver a unique and fully 
                  functional web experience tailored to your needs.
                </p>
                
                <p>
                  If you're a boutique agency looking to expand your service offerings or an independent designer seeking a reliable 
                  technical partner, I'm here to transform your designs into fully functional, cutting-edge websites.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What I Offer
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technology Stack
            </motion.h2>
            
            <div className="space-y-12">
              {Object.entries(techStacks).map(([title, techs], index) => (
                <TechSection key={title} title={title} techs={techs} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">
                Ready to Start Your Project?
              </h2>
              
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Let's collaborate to bring your vision to life with cutting-edge technology and stunning design.
              </p>
              
             
              <div className='flex justify-center items-center gap-2'>
                <motion.button
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-4 h-4" />
                Get in Touch
              </motion.button>
              
              <motion.button
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-4 h-4" />
                Start a project
              </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}