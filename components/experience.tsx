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
        "Led redesign of microservices architecture, reducing latency by 40%.",
        "Managed a team of 4 engineers and mentored on backend best practices.",
        "Implemented Redis caching layer, improving throughput by 60%.",
      ],
    },
    {
      title: "Backend Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      stacks: ["Python", "Django REST Framework", "PostgreSQL", "AWS"],
      description: [
        "Built REST APIs serving 2M+ daily active users.",
        "Optimized database queries reducing average response time from 500ms to 100ms.",
        "Implemented CI/CD pipeline using Docker and Kubernetes.",
      ],
    },
    {
      title: "Front-End Developer (Internship)",
      company: "Bhalogari",
      period: "March 2022 - June 2022",
      stacks: ["JavaScript", "React", "Tailwind CSS"],
      description: [
        "Collaborated with senior developers to build responsive React components based on project requirements.",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="ml-64 px-6 md:px-12 py-20 scroll-mt-20"
      aria-label="Professional Experience"
    >
      <h2 className="text-4xl font-bold mb-12 text-foreground">Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-[rgba(255,255,255,0.04)] dark:bg-[rgba(255,255,255,0.06)] border border-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-2xl font-semibold text-primary">{exp.title}</h3>
              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>

            {/* Company */}
            <p className="text-lg text-muted-foreground mb-4 font-medium">
              {exp.company}
            </p>

            {/* Stacks */}
            {exp.stacks && exp.stacks.length > 0 && (
              <ul className="flex flex-wrap gap-2 mb-5">
                {exp.stacks.map((stack, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            )}

            {/* Description */}
            {exp.description && (
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
