import React from 'react'
import '../styles/testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Innovations',
      text: 'Solidify transformed our prototyping process. What used to take weeks now takes days. Their precision and reliability are unmatched.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      company: 'Manufacturing Solutions Inc',
      text: 'The team at Solidify understood our complex requirements and delivered exactly what we needed. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'Design Studio Pro',
      text: 'Outstanding quality and excellent customer service. They went above and beyond to ensure our projects were perfect.',
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Join thousands of satisfied customers worldwide
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card fade-in">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
