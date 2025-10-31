"use client"

import { useEffect, useState } from "react"
import { Github, GitFork, Star, Users } from "lucide-react"

interface GitHubStats {
  username: string
  name: string
  bio: string
  followers: number
  following: number
  publicRepos: number
  avatar: string
  repos: Array<{
    name: string
    description: string
    url: string
    stars: number
    language: string
    forks: number
  }>
  languages: Record<string, number>
  totalStars: number
  totalForks: number
}

export default function GitHubAnalytics() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = "YOUR_GITHUB_USERNAME" // Update this with your actual GitHub username

        // Validate username is not placeholder
        if (username === "YOUR_GITHUB_USERNAME") {
          setError("Please update the GitHub username in the component")
          setLoading(false)
          return
        }

        const res = await fetch(`https://api.github.com/users/${username}`)
        const userData = await res.json()

        if (userData.message) {
          setError(`GitHub user not found: ${userData.message}`)
          setLoading(false)
          return
        }

        // Fetch user repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=10`)
        const repos = await reposRes.json()

        if (!Array.isArray(repos)) {
          console.error("[v0] Repos response is not an array:", repos)
          setError("Failed to fetch repositories")
          setLoading(false)
          return
        }

        // Calculate stats
        const languages: Record<string, number> = {}
        let totalStars = 0
        let totalForks = 0

        for (const repo of repos) {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1
          }
          totalStars += repo.stargazers_count || 0
          totalForks += repo.forks_count || 0
        }

        const repoData = repos
          .filter((r: any) => !r.fork)
          .slice(0, 6)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description",
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || "Unknown",
            forks: repo.forks_count,
          }))

        setStats({
          username: userData.login,
          name: userData.name || userData.login,
          bio: userData.bio || "",
          followers: userData.followers,
          following: userData.following,
          publicRepos: userData.public_repos,
          avatar: userData.avatar_url,
          repos: repoData,
          languages,
          totalStars,
          totalForks,
        })
      } catch (error) {
        console.error("[v0] GitHub fetch error:", error)
        setError("Failed to fetch GitHub data")
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <section id="github" className="ml-64 px-12 py-20 bg-gradient-to-b from-transparent to-primary/5">
        <h2 className="text-4xl font-bold mb-4 text-foreground">GitHub Analytics</h2>
        <div className="h-40 glass rounded-xl animate-pulse" />
      </section>
    )
  }

  if (error) {
    return (
      <section id="github" className="ml-64 px-12 py-20 bg-gradient-to-b from-transparent to-primary/5">
        <h2 className="text-4xl font-bold mb-4 text-foreground">GitHub Analytics</h2>
        <div className="glass rounded-xl p-8 border border-red-500/30 bg-red-500/10">
          <p className="text-red-400">{error}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Update the GitHub username in components/github-analytics.tsx to display your stats
          </p>
        </div>
      </section>
    )
  }

  if (!stats) {
    return null
  }

  return (
    <section id="github" className="ml-64 px-12 py-20 bg-gradient-to-b from-transparent to-primary/5">
      <h2 className="text-4xl font-bold mb-4 text-foreground">GitHub Analytics</h2>
      <p className="text-muted-foreground mb-12 text-lg">Your GitHub presence & contributions</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Total Stars</p>
              <p className="text-3xl font-bold text-primary">{stats.totalStars}</p>
            </div>
            <Star className="w-10 h-10 text-accent opacity-20" />
          </div>
        </div>

        <div className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Followers</p>
              <p className="text-3xl font-bold text-primary">{stats.followers}</p>
            </div>
            <Users className="w-10 h-10 text-accent opacity-20" />
          </div>
        </div>

        <div className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Public Repos</p>
              <p className="text-3xl font-bold text-primary">{stats.publicRepos}</p>
            </div>
            <Github className="w-10 h-10 text-accent opacity-20" />
          </div>
        </div>

        <div className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Total Forks</p>
              <p className="text-3xl font-bold text-primary">{stats.totalForks}</p>
            </div>
            <GitFork className="w-10 h-10 text-accent opacity-20" />
          </div>
        </div>
      </div>

      {/* Languages & Top Repos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Languages */}
        <div className="glass rounded-xl p-8 border border-primary/20">
          <h3 className="text-xl font-semibold text-foreground mb-6">Top Languages</h3>
          <div className="space-y-4">
            {Object.entries(stats.languages)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 5)
              .map(([lang, count]) => (
                <div key={lang} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{lang}</span>
                    <span className="text-xs text-muted-foreground">{count} projects</span>
                  </div>
                  <div className="h-2 bg-card rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{
                        width: `${(count / Math.max(...Object.values(stats.languages))) * 100 || 0}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Top Repositories */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold text-foreground mb-6">Top Repositories</h3>
          <div className="space-y-4">
            {stats.repos.slice(0, 4).map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-4 border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">{repo.name}</h4>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{repo.description}</p>
                <span className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  {repo.language}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* View on GitHub */}
      <div className="mt-12 text-center">
        <a
          href={`https://github.com/${stats.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
        >
          <Github className="w-5 h-5" />
          View profile on GitHub
        </a>
      </div>
    </section>
  )
}
