"use client";

import { ArrowLeftIcon } from "@/components/icons";
import Link from "next/link";
import { useState } from "react";
import { motion } from 'framer-motion'
import ContactCTA from "@/components/ContactCTA";

const DESIGN_COST = 4000;
const CMS_COST = 4000;
const TOPPINGS_COSTS = {
  "2D animations": 2000,
  "3D animations": 3000,
  Ecommerce: 3000,
  "Logins & profiles": 2500,
  Mapping: 1500,
  "Realtime data": 3000,
  "Site search": 1000,
  "Performance Optimization": 2000,
  "PWA Support": 2000,
  "Accessibility Audit": 1500,
  "Security Hardening": 2000,
  "GDPR Compliance": 1500,
  "Backup System": 1000,
  "CRM Integration": 3000,
  "Multilingual Support": 2500,
  "CI/CD Pipeline": 2000,
  "UX Testing": 1500,
  "Maintenance Retainer": 1000
};

const FRONTEND_OPTIONS = [
  "Developer's choice",
  "Astro",
  "Drupal",
  "Framer theme",
  "Gatsby",
  "NextJS",
  "React",
  "Shopify theme & support",
  "Webflow theme",
  "Wordpress",
];

const PERFORMANCE_OPTIONS = [
  "Performance Optimization",
  "PWA Support",
  "Accessibility Audit"
];

const SECURITY_OPTIONS = [
  "Security Hardening",
  "GDPR Compliance",
  "Backup System"
];

const INTEGRATION_OPTIONS = [
  "CRM Integration",
  "Multilingual Support"
];

const DEVOPS_OPTIONS = [
  "CI/CD Pipeline"
];

const UX_OPTIONS = [
  "UX Testing"
];

const SUPPORT_OPTIONS = [
  "Maintenance Retainer"
];

// Exchange rates relative to USD (example rates)
const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  BDT: 110
};

export default function StartAProjectPage() {
  const [design, setDesign] = useState("I already have a design");
  const [cms, setCms] = useState("I don't need a CMS");
  const [frontend, setFrontend] = useState(FRONTEND_OPTIONS[0]);
const [toppings, setToppings] = useState<string[]>([]);

  const [mateRate, setMateRate] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [activeCategory, setActiveCategory] = useState("all");

function toggleTopping(topping: string) {
  if (toppings.includes(topping)) {
    setToppings(toppings.filter((t) => t !== topping));
  } else {
    setToppings([...toppings, topping]);
  }
}


  // Calculate total in USD
  let total_usd = 0;
  if (design === "I need a design (+$4000)") total_usd += DESIGN_COST;
  if (cms === "I need a CMS (+$4000)") total_usd += CMS_COST;
  toppings.forEach((t) => {
    total_usd += TOPPINGS_COSTS[t] || 0;
  });
  if (mateRate) total_usd *= 0.9; // Apply 10% discount

  // Convert total to selected currency
  const total_in_currency = total_usd * EXCHANGE_RATES[currency];

  const getCurrencySymbol = () => {
    switch(currency) {
      case 'EUR': return '€';
      case 'GBP': return '£';
      case 'BDT': return '৳';
      default: return '$';
    }
  };

  // Filter toppings by category
  const getFilteredToppings = () => {
    switch(activeCategory) {
      case 'performance':
        return PERFORMANCE_OPTIONS;
      case 'security':
        return SECURITY_OPTIONS;
      case 'integrations':
        return INTEGRATION_OPTIONS;
      case 'devops':
        return DEVOPS_OPTIONS;
      case 'ux':
        return UX_OPTIONS;
      case 'support':
        return SUPPORT_OPTIONS;
      default:
        return Object.keys(TOPPINGS_COSTS);
    }
  };

  // Get description for each topping
  const getToppingDescription = (topping) => {
    const descriptions = {
      "Performance Optimization": "Lighthouse optimization, lazy loading, CDN setup",
      "PWA Support": "Offline functionality, installability, faster load times",
      "Accessibility Audit": "WCAG compliance, screen reader testing, ARIA",
      "Security Hardening": "HTTPS enforcement, CSP headers, XSS/CSRF protection",
      "GDPR Compliance": "Cookie consent, data privacy policies, user data management",
      "Backup System": "Automated backups, rollback procedures",
      "CRM Integration": "HubSpot, Salesforce, Zoho integration",
      "Multilingual Support": "i18n, dynamic language switching",
      "CI/CD Pipeline": "GitHub Actions, automated deployments",
      "UX Testing": "Usability testing, A/B testing, heatmaps",
      "Maintenance Retainer": "Bug fixes, updates, security patches"
    };
    
   return descriptions[topping] || 
      (topping === "2D animations" ? "SVG, Lottie, Framer Motion, GSAP, etc." :
      topping === "3D animations" ? "ThreeJS, React Three Fiber, etc." :
      topping === "Ecommerce" ? "Shopify /main Stripe checkout, Paypal etc." :
      topping === "Logins & profiles" ? "Logins, registrations, profiles, etc." :
      topping === "Mapping" ? "Mapping, geolocation, etc." :
      topping === "Realtime data" ? "Realtime interactions, websockets, etc." :
      topping === "Site search" ? "Algolia, MeiliSearch, etc." : "");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Solar System Background */}
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

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Central Sun */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'rotate 30s linear infinite' }}
        >
          <div className="w-20 h-20 rounded-full bg-yellow-400 shadow-2xl">
            <div className="w-full h-full rounded-full bg-yellow-200/30 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-yellow-300/20 blur-xl scale-150" />
            <div className="absolute inset-0 rounded-full bg-orange-300/10 blur-2xl scale-200" />
          </div>
        </div>

        {/* Mercury */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'rotate 15s linear infinite' }}
        >
          <div className="w-32Luca h-32 relative">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ animation: 'counter-rotate 15s linear infinite' }}
            >
              <div className="w-3 h-3 rounded-full bg-gray-400 shadow-lg" />
            </div>
            <div className="absolute inset-0 rounded-full border border-white/10" />
          </div>
        </div>

        {/* Venus */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'rotate 25s linear infinite' }}
        >
          <div className="w-48 h-48 relative">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ animation: 'counter-rotate 25s linear infinite' }}
            >
              <div className="w-4 h-4 rounded-full bg-yellow-300 shadow-lg">
                <div className="w-full h-full rounded-full bg-yellow-100/30 blur-sm" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-white/5" />
          </div>
        </div>

        {/* Earth */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'rotate 40s linear infinite' }}
        >
          <div className="w-64 h-64 relative">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ animation: 'counter-rotate 40s linear infinite' }}
            >
              <div className="w-5 h-5 rounded-full bg-blue-400 shadow-lg">
                <div className="w-full h-full rounded-full bg-blue-200/40 blur-sm" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-white/5" />
          </div>
        </div>

        {/* Mars */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'rotate 60s linear infinite' }}
        >
          <div className="w-80 h-80 relative">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ animation: 'counter-rotate 60s linear infinite' }}
            >
              <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg">
                <div className="w-full h-full rounded-full bg-red-300/40 blur-sm" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-white/5" />
          </div>
        </div>

        {/* Jupiter */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'rotate 90s linear infinite' }}
        >
          <div className="w-96 h-96 relative">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ animation: 'counter-rotate 90s linear infinite' }}
            >
              <div className="w-8 h-8 rounded-full bg-orange-400 shadow-xl">
                <div className="w-full h-full rounded-full bg-orange-200/30 blur-sm" />
                <div className="absolute inset-1 rounded-full border-t border-b border-orange-600/30" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-white/5" />
          </div>
        </div>

        {/* Saturn */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'rotate 120s linear infinite' }}
        >
          <div className="w-[28rem] h-[28rem] relative">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ animation: 'counter-rotate 120s linear infinite' }}
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
            </div>
            <div className="absolute inset-0 rounded-full border border-white/5" />
          </div>
        </div>

        {/* Floating Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes counter-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      <main className="relative z-10 max-w-6xl mx-auto p-8 text-white">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold mb-6  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
            Launch Your Vision 
          </h1>
          <p className="text-2xl text-blue-200 mb-8 font-light">
            Transform your ideas into stellar digital experiences
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Design Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-3">
                🎨 Design Magic
              </h3>
              <div className="space-y-4">
                {["I already have a design", "I need a design (+$4000)"].map((option) => (
                  <label key={option} className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="radio"
                        name="design"
                        value={option}
                        checked={design === option}
                        onChange={() => setDesign(option)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                        design === option 
                          ? 'border-blue-400 bg-blue-400 shadow-lg shadow-blue-400/50' 
                          : 'border-gray-400 group-hover:border-blue-300'
                      }`}>
                        {design === option && (
                          <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-4 text-lg group-hover:text-blue-200 transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CMS Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-3">
                ⚙️ Backend/ CMS
              </h3>
              <div className="space-y-4">
                {["I don't need a CMS", "I need a CMS (+$4000)"].map((option) => (
                  <label key={option} className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="radio"
                        name="cms"
                        value={option}
                        checked={cms === option}
                        onChange={() => setCms(option)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                        cms === option 
                          ? 'border-blue-400 bg-blue-400 shadow-lg shadow-blue-400/50' 
                          : 'border-gray-400 group-hover:border-blue-300'
                      }`}>
                        {cms === option && (
                          <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-4 text-lg group-hover:text-blue-200 transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Frontend Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-green-300 flex items-center gap-3">
                🚀 Tech Stack
              </h3>
              <select
                value={frontend}
                onChange={(e) => setFrontend(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-white text-lg focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-300"
              >
                {FRONTEND_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-800 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Toppings Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-3">
                ✨ Professional Features
              </h3>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "all"
                      ? "bg-blue-500/90 text-white"
                      : "bg-white/5 hover:bg-white/10 text-blue-200"
                  }`}
                >
                  All Features
                </button>
                <button
                  onClick={() => setActiveCategory("performance")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "performance"
                      ? "bg-blue-500/90 text-white"
                      : "bg-white/5 hover:bg-white/10 text-blue-200"
                  }`}
                >
                  Performance
                </button>
                <button
                  onClick={() => setActiveCategory("security")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "security"
                      ? "bg-green-500/90 text-white"
                      : "bg-white/5 hover:bg-white/10 text-green-200"
                  }`}
                >
                  Security
                </button>
                <button
                  onClick={() => setActiveCategory("integrations")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "integrations"
                      ? "bg-blue-500/90 text-white"
                      : "bg-white/5 hover:bg-white/10 text-blue-200"
                  }`}
                >
                  Integrations
                </button>
                <button
                  onClick={() => setActiveCategory("devops")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "devops"
                      ? "bg-yellow-500/90 text-white"
                      : "bg-white/5 hover:bg-white/10 text-yellow-200"
                  }`}
                >
                  DevOps
                </button>
                <button
                  onClick={() => setActiveCategory("ux")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "ux"
                      ? "bg-red-500/90 text-white"
                      : "bg-white/5 hover:bg-white/10 text-red-200"
                  }`}
                >
                  UX
                </button>
                <button
                  onClick={() => setActiveCategory("support")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === "support"
                      ? "bg-teal-500/90 text-white"
                      : "bg-white/5 hover:bg-white/10 text-teal-200"
                  }`}
                >
                  Support
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {getFilteredToppings().map((topping) => (
                  <label key={topping} className="flex items-start cursor-pointer group bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-blue-300/30">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={toppings.includes(topping)}
                        onChange={() => toggleTopping(topping)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 ${
                        toppings.includes(topping)
                          ? 'border-blue-400 bg-blue-400 shadow-lg shadow-blue-400/50' 
                          : 'border-gray-400 group-hover:border-blue-300'
                      }`}>
                        {toppings.includes(topping) && (
                          <svg className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-semibold group-hover:text-blue-200 transition-colors">
                        {topping} <span className="text-blue-400">(+${TOPPINGS_COSTS[topping]})</span>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {getToppingDescription(topping)}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Mate Rate Section */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-3xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500">
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={mateRate}
                    onChange={() => setMateRate(!mateRate)}
                    className="sr-only"
                  />
                  <div className={`w-8 h-8 rounded-xl border-2 transition-all duration-300 ${
                    mateRate
                      ? 'border-yellow-400 bg-yellow-400 shadow-lg shadow-yellow-400/50' 
                      : 'border-gray-400 group-hover:border-yellow-300'
                  }`}>
                    {mateRate && (
                      <svg className="w-5 h-5 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">
                    🤝 Mate Rates (-10% off)
                  </span>
                  <p className="text-yellow-200/80 text-sm mt-1">Do we know each other? Enjoy stellar savings!</p>
                </div>
              </label>
            </div>
          </div>

          {/* Quote Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Place your order
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-blue-200">Currency</span>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg p-2 text-white focus:border-blue-400 focus:outline-none"
                  >
                    <option value="USD" className="bg-slate-800">USD $</option>
                    <option value="EUR" className="bg-slate-800">EUR €</option>
                    <option value="GBP" className="bg-slate-800">GBP £</option>
                    <option value="BDT" className="bg-slate-800">BDT ৳</option>
                  </select>
                </div>
                
                {design === "I need a design (+$4000)" && (
                  <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-xl border border-blue-400/30">
                    <span className="text-blue-200">Design</span>
                    <span className="text-blue-300 font-semibold">
                      {getCurrencySymbol()}{(DESIGN_COST * EXCHANGE_RATES[currency]).toFixed(2)}
                    </span>
                  </div>
                )}
                
                {cms === "I need a CMS (+$4000)" && (
                  <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-xl border border-blue-400/30">
                    <span className="text-blue-200">CMS</span>
                    <span className="text-blue-300 font-semibold">
                      {getCurrencySymbol()}{(CMS_COST * EXCHANGE_RATES[currency]).toFixed(2)}
                    </span>
                  </div>
                )}
                
                {toppings.map((topping) => (
                  <div key={topping} className="flex justify-between items-center p-3 bg-blue-500/10 rounded-xl border border-blue-400/30">
                    <span className="text-blue-200 text-sm">{topping}</span>
                    <span className="text-blue-300 font-semibold">
                      {getCurrencySymbol()}{(TOPPINGS_COSTS[topping] * EXCHANGE_RATES[currency]).toFixed(2)}
                    </span>
                  </div>
                ))}
                
                {mateRate && (
                  <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-xl border border-yellow-400/30">
                    <span className="text-yellow-200">Mate Discount</span>
                    <span className="text-yellow-300 font-semibold">-10%</span>
                  </div>
                )}
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-2xl border border-blue-400/30 mb-8">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                  {getCurrencySymbol()}{total_in_currency.toFixed(2)}
                </div>
                <div className="text-blue-200 text-sm mt-2">Total Investment</div>
              </div>
              
              <div className="space-y-3 grid justify-center items-cente gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
              <span className="inline-block px-6 py-2 text-sm md:text-base font-semibold tracking-wide text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded shadow-inner shadow-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300">
               Email Quote
              </span>
          </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250 }}
              > <span className="inline-block px-6 py-2 text-sm md:text-base font-semibold tracking-wide text-blue-900 hover:text-white bg-white/50 hover:bg-white/10 backdrop-blur-md rounded shadow-inner shadow-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300">
                Save Quote
              </span>
              </motion.button>



                  
              </div>
            </div>
            <div className="p-4 m-5 mt-10 grid justify-center items-center gap-3">
            <h2 className="font-semibold text-xl animate-bounce">Would you like to hop on a Google Meet to explore your project together?</h2>
            <div className="flex justify-center px-6 py-3 "><ContactCTA/></div>
            </div>
               
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <p className="text-xl text-blue-200 mb-4 font-light italic animate-bounce">
                Dream it. Design it. Deploy it. I’m ready when you are.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}