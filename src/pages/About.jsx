import React from "react"
import "./About.css"
import { FaReact, FaJs, FaNode, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa"

function About() {
  return (
    <div className="about page-container card">
      <h1>About Me</h1>

      {/* Intro */}
      <section className="about-intro">
        <img src="/images/profile.jpg" alt="Profile" className="about-img" />
        <p>
          Hi, I’m <strong>Mohamed Turay</strong>. I’m a web developer passionate about
          building clean, interactive applications with React and JavaScript.  
          I enjoy turning ideas into reality and sharing my journey through blog posts.
        </p>
      </section>

      {/* Skills */}
      <section className="about-skills">
        <h2>Skills</h2>
        <ul>
          <li>React / JavaScript / TypeScript</li>
          <li>HTML5 / CSS3 / Tailwind</li>
          <li>Node.js / Express</li>
          <li>Git / GitHub</li>
          <li>REST APIs</li>
          <li>Responsive Design</li>
          <li>Java</li>
        </ul>
      </section>

      {/* Resume button */}
      <section className="about-resume">
        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
      </section>

      {/* Tech stack icons */}
      <section className="about-tech">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <FaReact size={40} title="React" />
          <FaJs size={40} title="JavaScript" />
          <FaNode size={40} title="Node.js" />
          <FaCss3Alt size={40} title="CSS3" />
          <FaHtml5 size={40} title="HTML5" />
          <FaGitAlt size={40} title="Git" />
        </div>
      </section>

      {/* Timeline or fun facts */}
      <section className="about-extra">
        <h2>My Journey</h2>
        <p>
          Started coding in 2019 → Built my first project in 2020→  
          Currently working on personal projects and writing blogs.
        </p>
      </section>
    </div>
  )
}

export default About


