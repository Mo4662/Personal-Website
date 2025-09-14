import React from 'react'
 // src/pages/ProjectDetail.jsx
import { useParams } from "react-router-dom"
import projects from "../projects"
//import "./ProjectDetail.css"

function BlogList() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <h2>Project not found</h2>

  return (
    <div className="blog-list page-container card">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.demo} target="_blank">Live Demo</a> |{" "}
      <a href={project.repo} target="_blank">Source Code</a>
    </div>
  )
}

export default BlogList
