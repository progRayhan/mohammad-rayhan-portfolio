"use client"

export default function About() {
  return (
    <section id="about" className="ml-64 px-12 py-20 bg-card/50">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-8 text-foreground text-pretty">About Me</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a Backend Engineer with 3+ years of experience building scalable web services and robust backend infrastructure. My expertise spans across cloud platforms, database design, API development, and system architecture.
          </p>
          <p>
            I began my career at a startup, where I worked as a backend developer building distributed systems capable of handling millions of requests daily.
          </p>
          <p>
            Currently, I’m deepening my knowledge in cloud computing and system design, driven by a passion for building efficient, reliable, and scalable systems.
          </p>
        </div>
      </div>
    </section>
  )
}
