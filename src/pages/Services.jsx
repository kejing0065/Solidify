import React from 'react'
import '../styles/services.css'

function Services() {
  const servicesData = [
    {
      id: 1,
      icon: '🔧',
      title: 'Rapid Prototyping',
      description: 'Transform your concepts into tangible prototypes quickly and cost-effectively. Perfect for validating designs and testing functionality before full production.',
      features: ['24-48 hour turnaround', 'Multiple iterations', 'Design feedback included', 'Quick modifications']
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'Custom Parts Manufacturing',
      description: 'Get precisely manufactured custom parts tailored to your specifications. Ideal for replacement parts, bespoke components, and specialized applications.',
      features: ['High precision ±0.1mm', 'Various materials available', 'Small to medium batches', 'Quality inspection included']
    },
    {
      id: 3,
      icon: '🏭',
      title: 'Production Runs',
      description: 'Scale your products with our production-ready manufacturing services. Efficient batch processing for commercial-grade output.',
      features: ['Volume discounts', 'Consistent quality', 'Fast production timelines', 'Packaging and labeling']
    },
    {
      id: 4,
      icon: '💡',
      title: 'Design Consulting',
      description: 'Our experts guide you through design optimization for 3D printing. Ensure manufacturability and cost-efficiency from the start.',
      features: ['Design review and feedback', 'Optimization recommendations', 'Material selection guidance', 'Cost analysis']
    },
    {
      id: 5,
      icon: '🎨',
      title: 'Post-Processing Services',
      description: 'Professional finishing services to enhance your 3D printed parts. Painting, sanding, assembly, and more.',
      features: ['Surface finishing', 'Painting and coating', 'Assembly services', 'Quality assurance']
    },
    {
      id: 6,
      icon: '📦',
      title: 'Material Selection & Testing',
      description: 'Choose the perfect material for your application with our comprehensive testing and recommendation service.',
      features: ['Material comparison', 'Durability testing', 'Cost-benefit analysis', 'Sample prints']
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive 3D printing solutions for every need</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-list">
            {servicesData.map((service) => (
              <div key={service.id} className="service-item fade-in">
                <div className="service-icon">{service.icon}</div>
                <div className="service-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
