"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "TechCorp",
      period: "2022 - Present",
      stacks: ["Go", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      description: [
        "Redesigned microservices architecture, reducing latency by 40%.",
        "Led a team of 4 engineers and enforced scalable backend standards.",
        "Integrated Redis caching, increasing throughput by 60%.",
      ],
    },
    {
      title: "Backend Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      stacks: ["Python", "Django REST Framework", "PostgreSQL", "AWS"],
      description: [
        "Developed APIs serving 2M+ active users daily.",
        "Optimized SQL queries reducing response time from 500ms to 100ms.",
        "Built CI/CD pipeline using Docker and Kubernetes for zero-downtime deploys.",
      ],
    },
    {
      title: "Front-End Developer (Internship)",
      company: "Bhalogari",
      period: "Mar 2022 - Jun 2022",
      stacks: ["JavaScript", "React", "Tailwind CSS"],
      description: [
        "Collaborated with UI team to develop modular React components.",
        "Enhanced responsiveness and accessibility across multiple devices.",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="ml-64 px-6 md:px-12 py-20 scroll-mt-20"
      aria-label="Professional Experience"
    >
      <h2 className="text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400">
        Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-br from-sky-500/30 via-blue-500/10 to-purple-500/30 overflow-hidden hover:from-sky-500/50 hover:to-purple-500/50 transition-all duration-500"
          >
            <div className="relative z-10 bg-[rgba(20,20,25,0.75)] backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(0,150,255,0.35)] transition-all duration-500">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-sky-400 tracking-wide">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>

              {/* Company */}
              <p className="text-lg text-gray-300 mb-5 font-medium tracking-wide">
                {exp.company}
              </p>

              {/* Tech Stacks */}
              <ul className="flex flex-wrap gap-2 mb-6">
                {exp.stacks.map((stack, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 text-sm font-medium text-sky-200 bg-gradient-to-r from-sky-900/40 to-indigo-900/40 border border-sky-700/30 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.1)] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
                  >
                    {stack}
                  </li>
                ))}
              </ul>

              {/* Description */}
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 flex items-start gap-3 text-base leading-relaxed"
                  >
                    <span className="text-sky-400 mt-1.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glow border effect */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-sky-500/20 to-purple-500/20 opacity-50"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
