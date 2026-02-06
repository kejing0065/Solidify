import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import '../styles/hero.css'

function HeroSection() {
  return (
    <section className="hero relative overflow-hidden section-light">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-0 md:py-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200 mb-8">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Trusted by 1000+ Creators</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-slate-900">
              Transform Your
              <br />
              <span className="gradient-text">Ideas Into Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Professional 3D printing services for prototypes, custom parts, and production runs. Fast, precise, and affordable solutions for every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
              <Link to="/contact?type=quote" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link to="/services" className="btn-secondary inline-flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <p className="text-sm text-slate-600 mt-1">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">48hr</div>
                <p className="text-sm text-slate-600 mt-1">Average Turnaround</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">99%</div>
                <p className="text-sm text-slate-600 mt-1">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-10"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-6xl">🖨️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection