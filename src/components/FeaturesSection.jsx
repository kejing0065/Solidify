import React from 'react'
import { Zap, Target, Layers, DollarSign, Users, ShieldCheck } from 'lucide-react'
import '../styles/features.css'

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8 text-yellow-400" />, 
      title: 'Fast Turnaround',
      description: 'Get your prototypes in as little as 24 hours. Speed is our game.'
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: 'High Precision',
      description: 'Tolerances up to ±0.1mm. Sharp until your eyes bleed.'
    },
    {
      id: 3,
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      title: 'Multiple Materials',
      description: 'PLA, ABS, Resin, Nylon. You name it, we print it.'
    },
    {
      id: 4,
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'Competitive Pricing',
      description: 'Best bang for your buck. Volume discounts available.'
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Expert Team',
      description: 'Engineers who actually know what they are doing.'
    },
    {
      id: 6,
      icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
      title: 'Quality Guaranteed',
      description: 'Checked manually. No defects allowed out the door.'
    }
  ]

  return (
    <section className="features py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-bold tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="section-title text-4xl font-extrabold mt-2 mb-4 text-gray-900">
            Precision Meets Efficiency
          </h2>
          <p className="section-subtitle text-gray-600 text-lg font-medium">
            We don't just print stuff; we engineer solutions.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              // ✨ 这里改了: 加了 flex flex-col items-center text-center
              // items-center: 让 Icon 居中
              // text-center: 让字也居中
              className="feature-card group bg-gray-800 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-500 transform hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="feature-icon mb-6 bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection