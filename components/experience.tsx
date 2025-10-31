"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "TechCorp",
      period: "2022 - Present",
      description: [
        "Led redesign of microservices architecture, reducing latency by 40%",
        "Managed team of 4 engineers and mentored on best practices",
        "Implemented Redis caching layer, improving throughput by 60%",
      ],
    },
    {
      title: "Backend Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: [
        "Built REST APIs serving 2M+ daily active users",
        "Optimized database queries reducing average response time from 500ms to 100ms",
        "Implemented CI/CD pipeline using Docker and Kubernetes",
      ],
    },
    {
      title: "Junior Backend Developer",
      company: "WebServices Inc",
      period: "2019 - 2020",
      description: [
        "Developed backend services using Node.js and Python",
        "Contributed to database migration from MySQL to PostgreSQL",
        "Implemented logging and monitoring systems",
      ],
    },
  ]

  return (
    <section id="experience" className="ml-64 px-12 py-20">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-primary pl-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-semibold text-primary">{exp.title}</h3>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-lg text-muted-foreground mb-4">{exp.company}</p>
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-muted-foreground flex gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
