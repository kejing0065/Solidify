import React from 'react'

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
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* 1. Services Hero Section */}
      {/* 对应 CSS: .services-hero -> bg-gradient, padding 5rem */}
      <section className="relative py-20 px-5 text-center bg-gradient-to-br from-sky-900/40 to-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Material Guide
          </h1>
          <p className="text-slate-400 text-xl opacity-90 max-w-2xl mx-auto">
            Not sure what to choose? Here is a breakdown of our materials.
          </p>
        </div>
      </section>

      {/* 2. Services Content */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8"> {/* .services-list -> gap: 2rem */}
            
            {materialsData.map((item) => (
              <div 
                key={item.id} 
                // 对应 CSS: .service-item
                // grid-template-columns: 120px 1fr (在 md 以上生效)
                // border-left: 4px solid ...
                // transition: transform translateX
                className="group relative bg-slate-800/50 border border-slate-700 rounded-xl p-8 
                           grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start
                           border-l-4 border-l-sky-500
                           transition-all duration-300 hover:translate-x-2 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                
                {/* Icon Section (.service-icon) */}
                <div className="text-6xl flex items-center justify-center h-full md:border-r md:border-slate-700 md:pr-8">
                  {item.icon}
                </div>

                {/* Details Section (.service-details) */}
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-6 p-4 bg-slate-900/60 rounded-lg border border-slate-700/50">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Best For</span>
                    <span className="text-sm text-slate-300 italic">{item.bestFor}</span>
                  </div>

                  {/* Features List (.service-features) */}
                  {/* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                    {item.pros.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300 font-medium">
                        <span className="text-emerald-400 mr-2 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                    <li className="flex items-start text-sm text-red-400 font-medium">
                      <span className="mr-2 mt-0.5">⚠️</span>
                      {item.cons}
                    </li>
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services