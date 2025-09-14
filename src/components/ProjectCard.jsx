import React from 'react'
// src/components/ProjectCard.jsx
import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <div className="project-card page-container card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={`/projects/${project.id}`}>View Details</Link>
    </div>
  )
}

export default ProjectCard
