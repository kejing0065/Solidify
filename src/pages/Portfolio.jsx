import React from 'react'
import '../styles/portfolio.css'

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Medical Device Prototypes',
      category: 'Healthcare',
      description: 'High-precision surgical instrument holders and diagnostic equipment components.',
      image: '🏥'
    },
    {
      id: 2,
      title: 'Drone Components',
      category: 'Aerospace',
      description: 'Lightweight structural parts and custom brackets for commercial drones.',
      image: '🛸'
    },
    {
      id: 3,
      title: 'Automotive Parts',
      category: 'Automotive',
      description: 'Custom intake manifolds, dashboard components, and functional prototypes.',
      image: '🚗'
    },
    {
      id: 4,
      title: 'Consumer Electronics',
      category: 'Electronics',
      description: 'Phone stands, cable organizers, custom enclosures, and IoT device housings.',
      image: '📱'
    },
    {
      id: 5,
      title: 'Architectural Models',
      category: 'Architecture',
      description: 'Detailed scaled models of buildings and urban development projects.',
      image: '🏢'
    },
    {
      id: 6,
      title: 'Jewelry & Fashion',
      category: 'Fashion',
      description: 'Custom jewelry pieces, accessories, and fashion-forward 3D printed designs.',
      image: '💍'
    },
    {
      id: 7,
      title: 'Educational Models',
      category: 'Education',
      description: 'Anatomical models, geological specimens, and interactive learning tools.',
      image: '🧬'
    },
    {
      id: 8,
      title: 'Industrial Equipment',
      category: 'Manufacturing',
      description: 'Custom tooling, fixtures, and replacement parts for industrial applications.',
      image: '⚙️'
    }
  ]

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))]

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Showcase of successful 3D printing projects</p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-card fade-in">
                <div className="portfolio-image">{item.image}</div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="btn btn-sm">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Industries Served</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
