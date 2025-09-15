// import React from 'react'
// // src/components/ProjectCard.jsx
// import { Link } from "react-router-dom"
// import "./ProjectCard.css"

// function ProjectCard({ project }) {
//   return (
//     <div className="project-card page-container card">
//       <img src={project.image} alt={project.title} />
//       <h3>{project.title}</h3>
//       <p>{project.description}</p>
//       <Link to={`/projects/${project.id}`}>View Details</Link>
//     </div>
//   )
// }

// export default ProjectCard

import React from "react"
import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <div className="project-links">
        <Link to={`/projects/${project.id}`} className="btn">
          View Project →
        </Link>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn secondary">
            Live Demo
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="btn secondary">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

