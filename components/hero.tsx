"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative ml-64 min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden bg-gray-900">
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_70%)] blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12"
      >
        {/* Profile Image (full round with glow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-shrink-0 group"
        >
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent shadow-[0_0_50px_rgba(56,189,248,0.25)] group-hover:shadow-[0_0_80px_rgba(56,189,248,0.5)] transition-all duration-500">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 to-purple-500 opacity-70 blur-lg animate-pulse group-hover:opacity-100"></div>

            <Image
              src="/profile-picture.png"
              alt="Profile picture"
              fill
              className="object-cover rounded-full relative z-10"
              priority
            />
          </div>

          {/* Extra soft glowing halo */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-500/30 via-blue-400/20 to-purple-500/30 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Backend Engineer
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-3xl">
            Passionate Backend Engineer with a strong focus on{" "}
            <span className="text-sky-400 font-medium">Python</span> and
            secondary expertise in{" "}
            <span className="text-sky-400 font-medium">Go</span>. Experienced in
            building high-performance RESTful APIs, database design, and system
            architecture. Focused on writing clean, scalable, and production-ready code.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-sky-800/40">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-sky-500/40 transition-all duration-300"
            >
              Get in Touch
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl border border-sky-400/50 text-sky-300 font-semibold hover:bg-sky-900/30 hover:border-sky-300 transition-all duration-300"
            >
              Download Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:border-sky-300 hover:text-sky-300 transition-all duration-300"
            >
              View Work
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
