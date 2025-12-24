import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaInstagram, FaEnvelope, FaClock, FaMapMarkerAlt, FaFile } from 'react-icons/fa'
import { sendContactEmail, initializeEmailJS } from '../services/emailService'

function Contact() {
  const [searchParams] = useSearchParams()
  const isQuoteRequest = searchParams.get('type') === 'quote'
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initializeEmailJS()
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'prototyping',
    requestType: isQuoteRequest ? 'quote' : 'inquiry',
    file: null
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files ? files[0] : null
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields')
      setIsLoading(false)
      return
    }

    // Send email
    sendContactEmail(formData)
      .then(() => {
        console.log('Form submitted:', formData)
        if (formData.file) {
          console.log('File attached:', formData.file.name)
        }
        setSubmitted(true)
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            subject: '',
            message: '',
            projectType: 'prototyping',
            requestType: isQuoteRequest ? 'quote' : 'inquiry',
            file: null
          })
          setSubmitted(false)
          setIsLoading(false)
        }, 3000)
      })
      .catch((err) => {
        console.error('Error sending email:', err)
        setError('Failed to send message. Please try again or contact us directly.')
        setIsLoading(false)
      })
  }

  // Input 的共用样式，不用一直重写
  const inputClass = "w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder-slate-600"
  const labelClass = "block text-sm font-semibold text-slate-400 mb-2"

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 px-5 text-center bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            {isQuoteRequest ? 'Request A Quote' : 'Get In Touch'}
          </h1>
          <p className="text-slate-400 text-lg">
            {isQuoteRequest 
              ? 'Tell us about your project and get a free quote within 24 hours.' 
              : 'Have a project in mind? Let\'s talk about how we can help.'}
          </p>
        </div>
      </section>

      {/* 2. Main Content (Grid) */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* --- Left Column: Contact Info --- */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl h-fit">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-sky-500/10 p-3 rounded-full text-sky-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <a href="mailto:solidify123d@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors">
                      solidify123d@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-sky-500/10 p-3 rounded-full text-sky-400">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Business Hours</h4>
                    <p className="text-slate-400 text-sm">Mon - Fri: 10:00 AM - 5:00 PM</p>
                    <p className="text-slate-400 text-sm">Sat - Sun: 11:00 AM - 2:00 PM</p>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start gap-4">
                  <div className="bg-sky-500/10 p-3 rounded-full text-sky-400">
                    <FaInstagram size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Follow Us</h4>
                    <a 
                      href="https://www.instagram.com/solidify_3dshop/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-pink-500 transition-colors inline-flex items-center gap-2 mt-1"
                    >
                      @solidify_3dshop
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Right Column: Form --- */}
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl">
              {submitted ? (
                <div className="h-full flex flex-col justify-center items-center text-center py-20 animate-fade-in">
                  <div className="bg-emerald-500/20 p-4 rounded-full text-emerald-400 mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+60 12-345 6789" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>Company (Optional)</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="projectType" className={labelClass}>Project Type *</label>
                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} required className={inputClass}>
                      <option value="prototyping">Rapid Prototyping</option>
                      <option value="custom-parts">Custom Parts</option>
                      <option value="production">Production Run</option>
                      <option value="consulting">Design Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>Subject *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className={`${inputClass} resize-none`} placeholder="Tell us about your project..."></textarea>
                  </div>

                  {isQuoteRequest && (
                    <div>
                      <label htmlFor="file" className={labelClass}>Upload 3D Model (Optional)</label>
                      <div className="relative">
                        <input type="file" id="file" name="file" onChange={handleChange} accept=".stl,.obj,.step,.iges,.fbx,.gltf" className="hidden" />
                        <label htmlFor="file" className={`${inputClass} flex items-center gap-3 cursor-pointer hover:border-sky-400 transition-colors`}>
                          <FaFile className="text-sky-400" />
                          <span className="text-slate-400">
                            {formData.file ? formData.file.name : 'Choose 3D model file (STL, OBJ, STEP, etc.)'}
                          </span>
                        </label>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Supported formats: STL, OBJ, STEP, IGES, FBX, GLTF</p>
                    </div>
                  )}

                  <button type="submit" className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
                    {isLoading ? 'Sending...' : isQuoteRequest ? 'Request Quote' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="py-16 px-5 bg-slate-950 border-t border-slate-800 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Get a free quote today - no obligation, no hidden fees. Just upload your file and tell us what you need.</p>
          <a href="/pricing" className="inline-block border-2 border-sky-500 text-sky-400 font-bold py-3 px-8 rounded-full hover:bg-sky-500 hover:text-white transition-all">
            Get Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact