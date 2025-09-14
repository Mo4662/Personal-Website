import React from 'react'

// src/pages/Projects.jsx
import projects from "../projects"
import ProjectCard from "../components/ProjectCard"
import "./Projects.css"

function Projects() {
  return (
    <div className="projects page-container card">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}

export default Projects
