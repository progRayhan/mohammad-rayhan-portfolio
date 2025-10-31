"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="ml-64 px-12 py-20 bg-card/50">
      <h2 className="text-4xl font-bold mb-8 text-foreground">Let's Work Together</h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
        collaborate!
      </p>

      <div className="max-w-md">
        {submitted && (
          <div className="mb-6 p-4 bg-primary/20 border border-primary rounded-lg text-primary">
            Thanks for reaching out! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              rows={5}
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 space-y-4">
          <p className="text-sm font-semibold text-foreground">Direct Contact</p>
          <div className="space-y-2 text-muted-foreground">
            <p>📧 alex.chen@example.com</p>
            <p>💼 linkedin.com/in/alexchen</p>
            <p>🐙 github.com/alexchen</p>
          </div>
        </div>
      </div>
    </section>
  )
}
