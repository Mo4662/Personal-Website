// import React from 'react'

// // src/pages/Projects.jsx
// import projects from "../projects"
// import ProjectCard from "../components/ProjectCard"
// import "./Projects.css"

// function Projects() {
//   return (
//     <div className="projects page-container card">
//       <h1>My Projects</h1>
//       <div className="project-grid">
//         {projects.map(p => (
//           <ProjectCard key={p.id} project={p} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Projects
import React from "react"
import Calculator from "../components/Calculator"

function Projects() {
  return (
    <div className="projects page-container">
      <h1>My Projects</h1>
      <p>Here are a couple of things I’ve built:</p>

      <section>
        <h2>Keeper App</h2>
        <p>A React clone of Google Keep for managing notes.</p>
      </section>

      <section>
        <h2>Calculator</h2>
        <Calculator />
      </section>
    </div>
  )
}

export default Projects

