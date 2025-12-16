import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/hero.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Ideas Into <span className="highlight">Reality</span>
          </h1>
          <p className="hero-subtitle">
            Professional 3D printing services for prototypes, custom parts, and production runs. Fast, reliable, and innovative solutions for your projects.
          </p>
          <div className="hero-buttons">
            <Link to="/contact">
              <button className="btn btn-primary">Get Started Today</button>
            </Link>
            <Link to="/services">
              <button className="btn btn-outline">Explore Services</button>
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>5000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat">
              <h3>24hrs</h3>
              <p>Quick Turnaround</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="printer-illustration">
            <div className="printer-frame">
              <div className="printer-top"></div>
              <div className="printer-middle"></div>
              <div className="printer-bottom"></div>
              <div className="print-output"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
