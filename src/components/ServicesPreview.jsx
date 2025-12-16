import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/services-preview.css'

function ServicesPreview() {
  const services = [
    {
      id: 1,
      title: 'Rapid Prototyping',
      description: 'Quickly iterate on your designs with fast 3D printing. Perfect for design validation and testing.',
      image: '🔧'
    },
    {
      id: 2,
      title: 'Custom Parts',
      description: 'Bespoke 3D printed components tailored to your exact specifications and requirements.',
      image: '⚙️'
    },
    {
      id: 3,
      title: 'Production Runs',
      description: 'Scale up from prototypes to production with cost-effective manufacturing solutions.',
      image: '🏭'
    },
    {
      id: 4,
      title: 'Design Consulting',
      description: 'Expert advice on design optimization for 3D printing and manufacturability analysis.',
      image: '💡'
    }
  ]

  return (
    <section className="services-preview">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive 3D printing solutions tailored to your needs
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card fade-in">
              <div className="service-image">{service.image}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services">
            <button className="btn btn-primary">Explore All Services</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
