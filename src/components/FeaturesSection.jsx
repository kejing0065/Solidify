import React from 'react'
import { Zap, Crosshair, Package, DollarSign, Users, Trophy } from 'lucide-react'
import '../styles/features.css'

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Get prototypes in 24-48 hours. Speed without compromise on quality.'
    },
    {
      id: 2,
      icon: <Crosshair className="w-8 h-8" />,
      title: 'Precision Engineered',
      description: 'Tolerances to ±0.1mm. Every detail matters, we get it right.'
    },
    {
      id: 3,
      icon: <Package className="w-8 h-8" />,
      title: 'Any Material',
      description: 'PLA, ABS, Resin, Nylon, Flexible TPU. Choose what works best.'
    },
    {
      id: 4,
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Best Value',
      description: 'Competitive pricing with volume discounts. No hidden fees.'
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Real engineers who care about your success. Always available.'
    },
    {
      id: 6,
      icon: <Trophy className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Every print inspected manually. Zero defect guarantee.'
    }
  ]

  return (
    <section className="features py-20 md:py-32 section-light">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Why Choose <span className="gradient-text">Solidify</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We combine cutting-edge technology with expert craftsmanship to deliver exceptional 3D printing solutions for creators, engineers, and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card group hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
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