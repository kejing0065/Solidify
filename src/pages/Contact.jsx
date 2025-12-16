import React, { useState } from 'react'
import '../styles/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'prototyping'
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        projectType: 'prototyping'
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's talk about how we can help.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-section">
                <h3>📍 Office Location</h3>
                <p>123 Innovation Avenue</p>
                <p>Tech City, TC 12345</p>
                <p>United States</p>
              </div>

              <div className="info-section">
                <h3>📞 Contact Information</h3>
                <p>Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                <p>Email: <a href="mailto:info@solidify.com">info@solidify.com</a></p>
                <p>Support: <a href="mailto:support@solidify.com">support@solidify.com</a></p>
              </div>

              <div className="info-section">
                <h3>⏰ Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="info-section">
                <h3>🌐 Follow Us</h3>
                <div className="social-links">
                  <a href="#facebook">Facebook</a>
                  <a href="#twitter">Twitter</a>
                  <a href="#linkedin">LinkedIn</a>
                  <a href="#instagram">Instagram</a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              {submitted ? (
                <div className="success-message fade-in">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="prototyping">Rapid Prototyping</option>
                      <option value="custom-parts">Custom Parts</option>
                      <option value="production">Production Run</option>
                      <option value="consulting">Design Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Get a free quote today - no obligation, no hidden fees.</p>
          <button className="btn btn-outline-light">Get Free Quote</button>
        </div>
      </section>
    </div>
  )
}

export default Contact
