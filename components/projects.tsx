"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Distributed Cache Manager",
      description: "High-performance distributed caching system supporting millions of concurrent operations",
      tags: ["Go", "Redis", "Docker", "Kubernetes"],
      link: "https://github.com",
      thumbnail: "/distributed-cache-system-dashboard-architecture.jpg",
    },
    {
      title: "Real-time Analytics Pipeline",
      description: "End-to-end event processing system handling 100k events per second with sub-second latency",
      tags: ["Apache Kafka", "Python", "PostgreSQL", "Spark"],
      link: "https://github.com",
      thumbnail: "/real-time-data-analytics-pipeline-visualization.jpg",
    },
    {
      title: "Microservices Authentication Gateway",
      description: "JWT-based authentication service for microservices architecture with rate limiting",
      tags: ["Node.js", "TypeScript", "JWT", "Redis"],
      link: "https://github.com",
      thumbnail: "/microservices-authentication-security-gateway.jpg",
    },
    {
      title: "Database Migration Tool",
      description: "Automated tool for zero-downtime database migrations across multiple environments",
      tags: ["Python", "PostgreSQL", "MySQL", "AWS"],
      link: "https://github.com",
      thumbnail: "/database-migration-automation-tool-interface.jpg",
    },
  ]

  return (
    <section id="projects" className="ml-64 px-12 py-20 bg-gradient-to-b from-transparent to-primary/5">
      <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
      <p className="text-muted-foreground mb-12 text-lg">Building systems that scale</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="group glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden bg-card/50 border-b border-border">
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Project content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors flex-1">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100" />
              </div>

              <p className="text-muted-foreground mb-4 text-sm flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full font-medium group-hover:from-primary/30 group-hover:to-accent/30 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
        >
          <Github className="w-5 h-5" />
          View all projects on GitHub
        </a>
      </div>
    </section>
  )
}
