// import React from 'react'
// // src/pages/ProjectDetail.jsx
// import { useParams } from "react-router-dom"
// import projects from "../projects"
// import "./ProjectDetail.css"


// function ProjectDetail() {
//   const { id } = useParams()
//   const project = projects.find(p => p.id === id)

//   if (!project) return <h2>Project not found</h2>

//   return (
//     <div className="project-detail container card">
//       <h1>{project.title}</h1>
//       <img src={project.image} alt={project.title} />
//       <p>{project.description}</p>
//       <p>{project.description}</p>
//       <a href={project.demo} target="_blank">Live Demo</a> |{" "}
//       <a href={project.repo} target="_blank">Source Code</a>
//     </div>
//   )
// }

// // export default ProjectDetail
// import React from "react"
// import { useParams } from "react-router-dom"
// import projects from "../projects"
// import Calculator from "../components/Calculator"

// import KeeperApp from "../components/KeeperApp"





// function ProjectDetails() {
//   const { id } = useParams()
//   const project = projects.find(p => p.id === id)

//   if (!project) return <p>Project not found.</p>
//   { id === "keeper" && <KeeperApp /> }

//   return (
//     <div className="project-detail page-container card">
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>

//       {id === "calculator" && <Calculator />}
//       {/* Later you can add {id === "keeper" && <KeeperApp />} */}
//     </div>
//   )
// }

// export default ProjectDetails


// import { useParams } from "react-router-dom"
// import projects from "../projects"
// import Calculator from "../components/Calculator"
// import KeeperApp from "../components/KeeperApp"

// function ProjectDetails() {
//   const { id } = useParams()
//   const project = projects.find(p => p.id === id)

//   if (!project) return <p>Project not found.</p>

//   return (
//     <div className="project-detail page-container card">
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>

//       {id === "calculator" && <Calculator />}
//       {id === "keeper" && <KeeperApp />}
//     </div>
//   )
// }

// export default ProjectDetails

import { useParams } from "react-router-dom"
import projects from "../projects"
import Calculator from "../components/Calculator"
import KeeperApp from "../components/KeeperApp"

function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <p>Project not found.</p>

  return (
    <div className="project-detail page-container card">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {id === "calc" && <Calculator />}
      {id === "keeper" && <KeeperApp />}
      {/* Later: {id === "todo" && <TodoApp />} */}
    </div>
  )
}

export default ProjectDetails

