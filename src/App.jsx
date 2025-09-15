import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import BlogList from './components/BlogList'
import Navbar from './components/Navbar'  
import About from './pages/About' 
import Blog from './pages/Blog'
import Footer from './components/Footer'
import BlogPost from './components/BlogPost'
import ProjectCard from './components/ProjectCard'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

