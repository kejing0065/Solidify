import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  const materialsData = [
    {
      id: 1,
      icon: '🌱',
      title: 'PLA (Standard)',
      subtitle: 'The Budget-Friendly Choice',
      description: 'The most popular material for general 3D printing. It is biodegradable, easy to print, and great for models that don\'t need to withstand high heat.',
      bestFor: 'Decorative items, toys, basic prototypes, architectural models.',
      pros: ['Most affordable option', 'Huge variety of colors', 'High detail precision', 'Eco-friendly (Corn-based)'],
      cons: 'Low heat resistance (deforms at 60°C)',
      difficulty: 'Low'
    },
    {
      id: 2,
      icon: '💪',
      title: 'PETG (Durable)',
      subtitle: 'Strong & Heat Resistant',
      description: 'The perfect balance between strength and ease of use. It is tougher than PLA and can withstand higher temperatures and outdoor conditions.',
      bestFor: 'Mechanical parts, outdoor usage, plant pots, functional brackets.',
      pros: ['Water & chemical resistant', 'Good impact resistance', 'Better heat resistance (75°C)', 'Food-safe grade available'],
      cons: 'Slightly stringy surface finish',
      difficulty: 'Medium'
    },
    // {
    //   id: 3,
    //   icon: '🧱',
    //   title: 'ABS / ASA (Heavy Duty)',
    //   subtitle: 'Industrial Grade Strength',
    //   description: 'The same material used to make LEGO bricks. Very durable and impact resistant, suitable for functional parts that take a beating.',
    //   bestFor: 'Car parts, electronic enclosures, moving gears, tool handles.',
    //   pros: ['Excellent mechanical properties', 'Can be smoothed with Acetone', 'High heat resistance (95°C+)', 'Very durable'],
    //   cons: 'Prone to warping (Shrinkage)',
    //   difficulty: 'High'
    // },
    {
      id: 4,
      icon: '👟',
      title: 'TPU (Flexible)',
      subtitle: 'Rubber-like Elasticity',
      description: 'A flexible material that feels like rubber. You can squeeze, bend, and twist it without breaking. Ideal for shock absorption.',
      bestFor: 'Phone cases, gaskets, seals, vibration dampeners, shoe soles.',
      pros: ['Extremely flexible', 'High abrasion resistance', 'Unbreakable on impact', 'Soft touch feel'],
      cons: 'Cannot print complex overhangs',
      difficulty: 'High'
    },
    // {
    //   id: 5,
    //   icon: '💍',
    //   title: 'Resin (SLA/DLP)',
    //   subtitle: 'Ultra High Detail',
    //   description: 'Uses liquid resin cured by light instead of melted plastic. Produces incredibly smooth surfaces where layer lines are almost invisible.',
    //   bestFor: 'Miniatures, jewelry, dental models, highly detailed figurines.',
    //   pros: ['Smooth injection-mold like finish', 'Extreme detail precision', 'Translucent options available'],
    //   cons: 'Brittle (breaks easily if dropped)',
    //   difficulty: 'Medium'
    // },
    // {
    //   id: 6,
    //   icon: '🏁',
    //   title: 'Carbon Fiber Infused',
    //   subtitle: 'Premium & Stiff',
    //   description: 'Plastic reinforced with chopped carbon fibers. Provides a beautiful matte black finish and increased stiffness for rigid parts.',
    //   bestFor: 'Drones, RC car frames, premium looking functional parts.',
    //   pros: ['Matte finish (hides layer lines)', 'Very lightweight', 'High stiffness', 'Looks very "Atas" (Premium)'],
    //   cons: 'More expensive',
    //   difficulty: 'Medium'
    // }
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden section-light">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              Materials <span className="gradient-text">Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Not sure which material is right for your project? Here's everything you need to know about our available 3D printing materials.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Content */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {materialsData.map((item) => (
              <div 
                key={item.id} 
                className="card group bg-white border-l-4 border-l-purple-500 hover:border-l-pink-500 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-8">
                  
                  {/* Icon */}
                  <div className="text-5xl md:text-6xl flex items-center justify-center">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                      {item.description}
                    </p>

                    <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-2">Best For</span>
                      <span className="text-slate-700 font-medium">{item.bestFor}</span>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.pros.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-700">
                          <span className="text-green-500 font-bold mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-2 text-slate-700 sm:col-span-2">
                        <span className="text-orange-500 font-bold mt-1">⚠️</span>
                        <span className="text-sm">{item.cons}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white/90 mb-8 text-lg">Get a free quote and material recommendation from our experts</p>
            <Link to="/contact?type=quote" className="btn-primary">
              Get Free Quote Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services