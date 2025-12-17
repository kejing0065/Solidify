import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle, Layers, Clock, Smile } from 'lucide-react' // 记得 import 这些
import '../styles/hero.css'

function HeroSection() {
  return (
    <section className="hero relative overflow-hidden bg-white">
      {/* Background Shapes - 这些保留，但是建议用 CSS Blur 弄成那种 glowing orb 的感觉 */}
      <div className="hero-background absolute inset-0 pointer-events-none">
        <div className="hero-shape shape-1 opacity-20"></div>
        <div className="hero-shape shape-2 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content: The Sales Pitch */}
        <div className="hero-content flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
            🚀 The #1 3D Printing Service in Malaysia
          </div>
          
          <h1 className="hero-title text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Materialize Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Imagination
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            From rapid prototyping to end-use parts. We turn your CAD files into physical objects with industrial-grade precision.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <Link to="/contact" className="btn btn-primary flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
              Start Printing <ArrowRight size={20} />
            </Link>
            
            <Link to="/services" className="btn btn-outline flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-800 transition-all">
              <PlayCircle size={20} /> How It Works
            </Link>
          </div>

          {/* Stats Section - 看起来比较有信服力 */}
          <div className="hero-stats grid grid-cols-3 gap-6 border-t pt-8 border-gray-100">
            <div className="stat">
              <h3 className="text-3xl font-bold text-gray-900">5k+</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Layers size={14}/> Projects
              </p>
            </div>
            <div className="stat">
              <h3 className="text-3xl font-bold text-gray-900">98%</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Smile size={14}/> Happy Clients
              </p>
            </div>
            <div className="stat">
              <h3 className="text-3xl font-bold text-gray-900">24h</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock size={14}/> Turnaround
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: The Visual */}
        <div className="hero-image flex-1 relative">
            {/* Bro, 这里的 CSS illustration 真的要换掉。
               去 Unsplash 找一张 "3d printing nozzle" 的特写，或者 "futuristic product design"。
               下面我放了一个 Placeholder image 先。
            */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                    src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=1000&auto=format&fit=crop" 
                    alt="High Tech 3D Printer" 
                    className="w-full h-auto object-cover"
                />
                
                {/* 加上一个 Glassmorphism 的 Card 看起来更 Atas */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
                            <p className="text-green-600 font-bold flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Printing Active
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Precision</p>
                            <p className="text-gray-900 font-bold">0.05 mm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection