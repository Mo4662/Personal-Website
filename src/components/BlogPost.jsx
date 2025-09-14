import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import React from 'react'
import './BlogPost.css'

// Import all markdown files as raw text
const posts = import.meta.glob("../blog/*.md", {
  query: "?raw",
  import: "default",
})

function BlogPost() {
  const { slug } = useParams()
  const [content, setContent] = React.useState("Loading...")

  React.useEffect(() => {
    // Find the file path that matches the slug
    const path = `../blog/${slug}.md`
    const loadPost = posts[path]

    if (loadPost) {
      loadPost().then(setContent)
    } else {
      setContent("Post not found.")
    }
  }, [slug])

  return (
    <div className="blog-post page-container card">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default BlogPost



