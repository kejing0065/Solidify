import React from 'react'
import '../styles/features.css'

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Fast Turnaround',
      description: 'Get your prototypes in as little as 24 hours with our expedited printing services.'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'High Precision',
      description: 'Tolerances up to ±0.1mm with state-of-the-art printing technology.'
    },
    {
      id: 3,
      icon: '🌈',
      title: 'Multiple Materials',
      description: 'Choose from various materials including plastics, resins, and metals.'
    },
    {
      id: 4,
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Volume discounts and flexible pricing for all project sizes.'
    },
    {
      id: 5,
      icon: '👥',
      title: 'Expert Team',
      description: 'Experienced engineers ready to guide your project to success.'
    },
    {
      id: 6,
      icon: '✅',
      title: 'Quality Guaranteed',
      description: 'Every print is inspected and tested before delivery.'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Solidify?</h2>
        <p className="section-subtitle">
          We combine cutting-edge technology with expert knowledge to deliver exceptional results
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card fade-in">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
