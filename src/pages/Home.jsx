import { Link } from "react-router-dom"
import React from "react"
import projects from "../projects"
import ProjectCard from "../components/ProjectCard"
import "./Home.css"

// Import all markdown files as raw text
const posts = import.meta.glob("../blog/*.md", {
  query: "?raw",
  import: "default",
})

function Home() {
  const [latestPosts, setLatestPosts] = React.useState([])

  React.useEffect(() => {
    async function loadPosts() {
      const entries = []
      for (const path in posts) {
        const slug = path.split("/").pop().replace(".md", "")
        const content = await posts[path]()

        // Grab metadata manually (title + date)
        const match = content.match(/---([\s\S]*?)---/)
        let meta = { title: slug, date: "" }
        let body = content

        if (match) {
          const metaBlock = match[1].trim().split("\n")
          metaBlock.forEach(line => {
            const [key, ...rest] = line.split(":")
            meta[key.trim()] = rest.join(":").trim()
          })
          body = content.replace(match[0], "").trim()
        }

        // Excerpt
        const excerpt = body.split("\n").slice(0, 2).join(" ").slice(0, 120)
        entries.push({ slug, ...meta, excerpt })
      }

      // Sort by date (newest first) and keep top 2
      const sorted = entries.sort((a, b) => new Date(b.date) - new Date(a.date))
      setLatestPosts(sorted.slice(0, 2))
    }
    loadPosts()
  }, [])

  return (
    <div className="home page-container card">
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/profile.jpg" alt="Profile" className="hero-img" />
        <h1>Hi, I’m Mohamed Turay 👋</h1>
        <p>I build web apps and write about JavaScript, React, and more.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn">View Projects</Link>
          <Link to="/blog" className="btn btn-secondary">Read Blog</Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.slice(0, 2).map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <Link to="/projects" className="more-link">See all projects →</Link>
      </section>

      {/* Latest Blog */}
      <section className="featured">
        <h2>Latest Posts</h2>
        <div className="blog-grid">
          {latestPosts.map(post => (
            <div className="blog-card" key={post.slug}>
              <h3>{post.title}</h3>
              <small>{post.date}</small>
              <p>{post.excerpt}...</p>
              <Link to={`/blog/${post.slug}`}>Read more →</Link>
            </div>
          ))}
        </div>
        <Link to="/blog" className="more-link">See all posts →</Link>
      </section>
    </div>
  )
}

export default Home
