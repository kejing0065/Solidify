import React from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Settings, Factory, Lightbulb, ArrowRight } from 'lucide-react'

function ServicesPreview() {
  const services = [
    {
      id: 1,
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      title: 'Rapid Prototyping',
      description: 'Fail fast, succeed faster. Validate your designs overnight.',
    },
    {
      id: 2,
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: 'Custom Parts',
      description: 'One-off replacements or unique creations. If you can model it, we print it.',
    },
    {
      id: 3,
      icon: <Factory className="w-8 h-8 text-purple-600" />,
      title: 'Batch Production',
      description: 'Low-volume manufacturing without the high cost of injection molding molds.',
    },
    {
      id: 4,
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: 'Design Consulting',
      description: 'Don\'t know DfAM? No worries. We optimize your CAD for the best print results.',
    }
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">What We Do</span>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">
            Solutions for <span className="gradient-text">Every Stage</span>
          </h2>
          
          <p className="text-slate-600 text-lg">
            From napkin sketch to final product. We got you covered.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="card group border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className="mb-6 bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-slate-900">{service.title}</h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Link 
                to="/services" 
                className="inline-flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-1 transition-transform hover:text-purple-700"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all"
          >
            View Full Service Catalog
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview