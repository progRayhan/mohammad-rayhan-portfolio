"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="ml-64 min-h-screen flex items-center px-12 py-20">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="flex items-start gap-12 mb-12">
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden profile-ring border-2 border-primary/30">
              <Image
                src="/profile-picture.png"
                alt="Profile picture"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Backend Engineer
            </h1>
            {/* <p className="text-xl text-muted-foreground mb-2">Building scalable systems & distributed infrastructure</p> */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dedicated Backend Engineer with a strong focus on Python and secondary expertise in Go, specializing in designing and developing scalable, high-performance backend systems. Passionate about exploring new backend technologies and continuously improving system architecture and performance. Experienced in building RESTful APIs, integrating databases, and collaborating with cross-functional teams to deliver robust, production-ready solutions. Deeply committed to continuous learning and daily engineering practice to stay ahead in modern backend development.
            </p>
          </div>
        </div>

        <div className="flex gap-4 pt-8 border-t border-border">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:shadow-xl">
            Get in Touch
          </button>
          <button className="border border-primary/50 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300">
            Download Resume
          </button>
          <button className="border border-muted text-muted-foreground px-8 py-3 rounded-lg font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300">
            View Work
          </button>
        </div>
      </div>
    </section>
  )
}
