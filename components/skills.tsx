"use client"

export default function Skills() {
  const skills = {
    Languages: ["Python", "Go", "Node.js/TypeScript", "Java", "SQL"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    "Tools & Frameworks": ["Django", "FastAPI", "Express.js", "gRPC", "GraphQL"],
  }

  return (
    <section id="skills" className="ml-64 px-12 py-20">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Skills</h2>
      <div className="grid grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-foreground rounded-lg text-sm border border-primary/20 hover:border-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
