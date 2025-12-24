import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/cta.css'

function CallToAction() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 opacity-90"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Bring Your 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
              Ideas to Life?
            </span>
          </h2>
          
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-95 leading-relaxed">
            Get started today with a free quote. Our team of experts is ready to help you turn your CAD files into stunning 3D printed products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=quote" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-yellow-300 transition-all hover:scale-110 shadow-2xl inline-flex items-center justify-center gap-2 text-lg">
              🚀 Get Free Quote Now
            </Link>
            
            <Link to="/services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              Explore Services
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 text-white text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>24hr Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Free Design Review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction