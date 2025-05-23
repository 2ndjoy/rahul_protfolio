import { SolarSystemBackground } from "@/components/SolarSystem";

export const metadata = {
  title: 'About — Joy Portfolio',
  description: "Learn more about Joy's journey as a developer...",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-8 text-white bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <SolarSystemBackground/>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
            I'm Joy. A developer, creator and problem solver.
          </p>
          
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              The intersection of creativity and technology has always fascinated me. I wrote my first line of code when I was 12, and I've been passionately building ever since.
            </p>
            
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
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Want to see my work?</h3>
          <a 
            href="/projects" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            View Projects
          </a>
        </section>

        {/* Acknowledgments */}
        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Acknowledgments</h2>
          <p className="text-gray-300 mb-4">
            Most of my work is collaborative. I'm grateful to these mentors and colleagues who've shaped my journey:
          </p>
          <p className="text-gray-400">
            Alex Chen, Maria Rodriguez, James Wilson, and the entire team at DevHouse.
          </p>
        </section>
      </div>
    </main>
  );
}