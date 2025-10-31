"use client"

export default function About() {
  return (
    <section id="about" className="ml-64 px-12 py-20 bg-card/50">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-8 text-foreground text-pretty">About Me</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a backend engineer with 5+ years of experience building scalable web services and infrastructure. My
            expertise spans across cloud platforms, database design, API development, and system architecture.
          </p>
          <p>
            I started my career at a startup where I designed distributed systems that handle millions of requests
            daily. Later, I moved to a larger tech company where I led backend infrastructure improvements and mentored
            junior engineers.
          </p>
          <p>
            When I'm not coding, you'll find me reading about distributed systems, contributing to open-source projects,
            or exploring new technologies. I'm passionate about writing clean, maintainable code and building systems
            that scale.
          </p>
        </div>
      </div>
    </section>
  )
}
