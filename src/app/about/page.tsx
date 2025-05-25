"use client";

import { SolarSystemBackground } from "@/components/SolarSystem";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@/components/icons";

export default function AboutClient() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-8 text-white bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <SolarSystemBackground />
      <div className="max-w-4xl mx-auto">
              {/* Back Button */}
      <motion.div className="fixed top-6 left-6 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-md bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-md">
          <motion.div whileHover={{ x: -3 }} transition={{ stiffness: 300 }}>
            <ArrowLeftIcon className="h-5 w-5" />
          </motion.div>
          <span className="text-sm font-semibold">Back to Orbit</span>
        </Link>
      </motion.div>

        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent  animate-pulse">
            About
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
            I'm Rahul Chakrabarty Joy. A developer, creator and problem solver.
          </p>

          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I began my development journey at 18, and since then, I've been committed to building solutions that go beyond the ordinary.</p>

            <p>
              Fast forward to today, I've worked with everything from basic HTML/CSS to complex React applications, Node.js backends, and cloud infrastructure. Each project, whether big or small, has been a vital stepping stone in my journey.
            </p>

            <p>
              What excites me most about development is creating solutions that have real impact. It's not just about writing code—it's about crafting experiences that solve problems and improve people's lives. Understanding user needs, building efficient solutions, and continuously iterating based on feedback is what makes great software.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-4 italic my-8 text-purple-200">
              "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler
            </blockquote>

            <p>
              This quote resonates deeply with me because I believe code is poetry. I don't just want things to work—I want them to be elegant, maintainable, and a joy to work with. Clean code that solves real problems is what drives me.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">Experience</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>BSc in Computer Science</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Full Stack Development Certification</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Professional Journey</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>5+ years experience in Web Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>3 years experience in Full Stack Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>2 years experience in Cloud Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'JavaScript/TypeScript', 'React/Next.js', 'Node.js',
              'Python', 'GraphQL', 'REST APIs', 'AWS', 'Docker',
              'CI/CD', 'Testing', 'UI/UX Principles', 'Agile Methodologies'
            ].map((skill) => (
              <div key={skill} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4 text-white animate-bounce">Want to see my work?</h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Link href="/works">
              <span className="inline-block px-6 py-2 text-sm md:text-base font-semibold tracking-wide text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-inner shadow-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300">
                View Projects
              </span>
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
