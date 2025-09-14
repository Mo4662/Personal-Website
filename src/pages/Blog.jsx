import { Link } from "react-router-dom"
import React from "react"
import "./Blog.css"

const posts = import.meta.glob("../blog/*.md", {
  query: "?raw",
  import: "default",
})

function Blog() {
  const [postList, setPostList] = React.useState([])

 

  React.useEffect(() => {
  async function loadPosts() {
    const entries = []
    for (const path in posts) {
      const slug = path.split("/").pop().replace(".md", "")
      const content = await posts[path]()

      // Extract metadata
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

      // Create excerpt + reading time
      const words = body.split(/\s+/).length
      const readingTime = Math.ceil(words / 200) // ~200 words per min
      const excerpt = body.split("\n").slice(0, 2).join(" ").slice(0, 120)

      entries.push({ slug, ...meta, excerpt, readingTime })
    }
    setPostList(entries.sort((a, b) => new Date(b.date) - new Date(a.date)))
  }
  loadPosts()
}, [])


  return (
  

    <div className="blog-list page-container card">
       {postList.map(post => (
         <div className="blog-card" key={post.slug}>
           <h2>{post.title}</h2>
          <p>{post.excerpt}...</p>
           <Link to={`/blog/${post.slug}`}>Read more →</Link>
         </div>
       ))}
     </div>
  )
}

export default Blog

