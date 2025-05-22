/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          black: '#0f172a',
          blue: '#1e293b',
          purple: '#7c3aed',
          neon: '#3b82f6',
          green: '#10b981',
          pink: '#f43f5e'
        }
      },
      backgroundImage: {
        'stripe-pattern': "repeating-linear-gradient(45deg,rgba(255,255,255,0.05) 0 2px,transparent 0 4px)",
        'dot-pattern':   "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)",
        'crater-pattern':"radial-gradient( rgba(0,0,0,0.1) 20%, transparent 20% )",
        'wave-pattern':  "repeating-linear-gradient(0deg,transparent,transparent 5px,rgba(255,255,255,0.05) 5px,rgba(255,255,255,0.05) 10px)"
      }
    },
  },
  plugins: [],
}
