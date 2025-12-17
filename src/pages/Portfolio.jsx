import React, { useState } from 'react'

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

  // Logic: 简单的 Filter 功能
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 px-5 text-center bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-slate-400 text-lg">
            Showcase of successful 3D printing projects.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs (我帮你加的功能) */}
      <section className="pt-10 px-5">
        <div className="container mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === cat 
                  ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)] transform -translate-y-1' 
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-sky-500 hover:text-sky-400'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Portfolio Grid */}
      <section className="py-16 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Image Placeholder (Emoji Box) */}
                <div className="h-48 w-full bg-slate-700/50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                  {item.image}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <button className="w-full py-2 border border-slate-600 rounded-lg text-slate-300 text-sm font-semibold hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (如果 Filter 找不到东西) */}
          {filteredItems.length === 0 && (
            <div className="text-center text-slate-500 py-20">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</h3>
              <p className="text-sky-400 text-sm uppercase tracking-widest font-semibold">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500+</h3>
              <p className="text-sky-400 text-sm uppercase tracking-widest font-semibold">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">20+</h3>
              <p className="text-sky-400 text-sm uppercase tracking-widest font-semibold">Industries Served</p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">98%</h3>
              <p className="text-sky-400 text-sm uppercase tracking-widest font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio