"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-border bg-card p-8 flex flex-col">
      {/* Logo/Name */}
      <div className="mb-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          Mohammad Rayhan
        </Link>
        <p className="text-sm text-muted-foreground mt-2">Backend Engineer</p>
      </div>

      {/* Navigation Links */}
      <div className="space-y-8 flex-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              setActiveSection(section.id)
              const element = document.getElementById(section.id)
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className={`block text-sm tracking-wide transition-colors ${
              activeSection === section.id
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Social Links */}
      <div className="space-y-4 border-t border-border pt-8">
        <a href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          GitHub
        </a>
        <a href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          LinkedIn
        </a>
        <a href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          Email
        </a>
      </div>

      {/* Resume Download */}
      <button className="w-full mt-8 bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
        Download Resume
      </button>
    </nav>
  )
}
