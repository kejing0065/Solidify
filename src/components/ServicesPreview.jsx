import React from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Settings, Factory, Lightbulb, ArrowRight } from 'lucide-react'
import '../styles/services-preview.css'

function ServicesPreview() {
  const services = [
    {
      id: 1,
      // Icon 颜色我有稍微调亮一点，在黑底比较 Pop
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      title: 'Rapid Prototyping',
      description: 'Fail fast, succeed faster. Validate your designs overnight.',
    },
    {
      id: 2,
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: 'Custom Parts',
      description: 'One-off replacements or unique creations. If you can model it, we print it.',
    },
    {
      id: 3,
      icon: <Factory className="w-8 h-8 text-gray-300" />,
      title: 'Batch Production',
      description: 'Low-volume manufacturing without the high cost of injection molding molds.',
    },
    {
      id: 4,
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Design Consulting',
      description: 'Don\'t know DfAM? No worries. We optimize your CAD for the best print results.',
    }
  ]

  return (
    // section 这里我没放 bg-color，让它直接用你原本的 background
    <section className="services-preview py-20">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-bold tracking-wider uppercase text-sm">What We Do</span>
          
          {/* Title 改成白色 */}
          <h2 className="section-title text-4xl font-extrabold mt-2 mb-4 text-gray-900">
            Solutions for Every Stage
          </h2>
          
          {/* Subtitle 改成浅灰色 */}
          <p className="section-subtitle text-gray-600 text-lg font-medium">
            From napkin sketch to final product. We got you covered.
          </p>
        </div>

        {/* Grid Section */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              // Card 背景改成深灰色 (bg-gray-800)，Border 弄一点点亮
              className="service-card group bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-500"
            >
              {/* Icon Circle 背景也调暗一点 */}
              <div className="service-icon mb-6 bg-gray-700 w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Card Title 改成白色 */}
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              
              {/* Description 改成浅灰色 */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Link 
                to="/services" 
                className="service-link inline-flex items-center text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform hover:text-blue-300"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta text-center">
          <Link 
            to="/services" 
            // Button 改成白色底，黑字，比较抢眼
            className="btn btn-primary inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-colors shadow-lg hover:shadow-xl"
          >
            View Full Service Catalog
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview