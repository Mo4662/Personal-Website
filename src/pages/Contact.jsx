import React from "react"
import "./Contact.css"
import { Github, Linkedin, Twitter } from "lucide-react"

function Contact() {
  return (
    <div className="contact page-container card">
      <h1>Contact Me</h1>
      <p>
        I’d love to hear from you! Fill out the form below or reach me directly at{" "}
        <a href="mailto:kalaytubangsm2005@yahoo.com">
          kalaytubangsm2005@yahoo.com
        </a>.
      </p>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mnnbwrvz"
        method="POST"
        className="contact-form"
      >
        <label>
          Name
          <input type="text" name="name" required placeholder="Enter your name" />
        </label>

        <label>
          Email
          <input type="email" name="_replyto" required placeholder="Enter your email" />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <Github size={24} /> GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <Linkedin size={24} /> LinkedIn
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <Twitter size={24} /> Twitter
        </a>
      </div>
    </div>
  )
}

export default Contact

