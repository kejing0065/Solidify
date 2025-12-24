import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

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
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden section-light">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of successful 3D printing projects across various industries.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="card group overflow-hidden hover:shadow-2xl hover:-translate-y-3 flex flex-col"
              >
                {/* Image/Emoji */}
                <div className="h-48 w-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {item.image}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <button className="w-full py-2 border-2 border-slate-200 rounded-lg text-slate-700 text-sm font-semibold hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center text-slate-500 py-20">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">5000+</div>
              <p className="text-sm uppercase tracking-widest font-semibold opacity-90">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">500+</div>
              <p className="text-sm uppercase tracking-widest font-semibold opacity-90">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">20+</div>
              <p className="text-sm uppercase tracking-widest font-semibold opacity-90">Industries Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">98%</div>
              <p className="text-sm uppercase tracking-widest font-semibold opacity-90">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to See Your Project Here?</h2>
          <p className="text-slate-600 mb-8 text-lg">Get started with a free quote today</p>
          <Link to="/contact?type=quote" className="btn-primary">
            Get Free Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Portfolio