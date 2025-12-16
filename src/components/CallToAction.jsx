import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/cta.css'

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-background">
        <div className="cta-shape shape-1"></div>
        <div className="cta-shape shape-2"></div>
      </div>
      
      <div className="container cta-container">
        <h2>Ready to Bring Your Ideas to Life?</h2>
        <p>Get started today with our 3D printing services. No project is too big or too small.</p>
        <div className="cta-buttons">
          <Link to="/contact">
            <button className="btn btn-primary">Get a Free Quote</button>
          </Link>
          <Link to="/services">
            <button className="btn btn-outline-light">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
