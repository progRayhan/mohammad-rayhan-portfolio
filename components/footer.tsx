"use client"

export default function Footer() {
  return (
    <footer className="ml-64 px-12 py-8 border-t border-border bg-card/30">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2025 Alex Chen. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
