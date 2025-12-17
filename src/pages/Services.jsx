import React from 'react'
import '../styles/services.css'

function Services() {
  // 这里直接把 Services Data 换成 Materials Data
  const materialsData = [
    {
      id: 1,
      icon: '🌱', // Eco-friendly
      title: 'PLA (Standard)',
      subtitle: 'The Budget-Friendly Choice',
      description: 'The most popular material for general 3D printing. It is biodegradable, easy to print, and great for models that don\'t need to withstand high heat.',
      bestFor: 'Decorative items, toys, basic prototypes, architectural models.',
      pros: ['Most affordable option', 'Huge variety of colors', 'High detail precision', 'Eco-friendly (Corn-based)'],
      cons: 'Low heat resistance (deforms at 60°C)', // 诚实告诉 customer 缺点
      difficulty: 'Low'
    },
    {
      id: 2,
      icon: '💪', // Strong
      title: 'PETG (Durable)',
      subtitle: 'Strong & Heat Resistant',
      description: 'The perfect balance between strength and ease of use. It is tougher than PLA and can withstand higher temperatures and outdoor conditions.',
      bestFor: 'Mechanical parts, outdoor usage, plant pots, functional brackets.',
      pros: ['Water & chemical resistant', 'Good impact resistance', 'Better heat resistance (75°C)', 'Food-safe grade available'],
      cons: 'Slightly stringy surface finish',
      difficulty: 'Medium'
    },
    {
      id: 3,
      icon: '🧱', // Lego block material
      title: 'ABS / ASA (Heavy Duty)',
      subtitle: 'Industrial Grade Strength',
      description: 'The same material used to make LEGO bricks. Very durable and impact resistant, suitable for functional parts that take a beating.',
      bestFor: 'Car parts, electronic enclosures, moving gears, tool handles.',
      pros: ['Excellent mechanical properties', 'Can be smoothed with Acetone', 'High heat resistance (95°C+)', 'Very durable'],
      cons: 'Prone to warping (Shrinkage)',
      difficulty: 'High'
    },
    {
      id: 4,
      icon: '👟', // Shoe/Rubber
      title: 'TPU (Flexible)',
      subtitle: 'Rubber-like Elasticity',
      description: 'A flexible material that feels like rubber. You can squeeze, bend, and twist it without breaking. Ideal for shock absorption.',
      bestFor: 'Phone cases, gaskets, seals, vibration dampeners, shoe soles.',
      pros: ['Extremely flexible', 'High abrasion resistance', 'Unbreakable on impact', 'Soft touch feel'],
      cons: 'Cannot print complex overhangs',
      difficulty: 'High'
    },
    {
      id: 5,
      icon: '💍', // Detail
      title: 'Resin (SLA/DLP)',
      subtitle: 'Ultra High Detail',
      description: 'Uses liquid resin cured by light instead of melted plastic. Produces incredibly smooth surfaces where layer lines are almost invisible.',
      bestFor: 'Miniatures, jewelry, dental models, highly detailed figurines.',
      pros: ['Smooth injection-mold like finish', 'Extreme detail precision', 'Translucent options available'],
      cons: 'Brittle (breaks easily if dropped)',
      difficulty: 'Medium'
    },
    {
      id: 6,
      icon: '🏁', // Carbon
      title: 'Carbon Fiber Infused',
      subtitle: 'Premium & Stiff',
      description: 'Plastic reinforced with chopped carbon fibers. Provides a beautiful matte black finish and increased stiffness for rigid parts.',
      bestFor: 'Drones, RC car frames, premium looking functional parts.',
      pros: ['Matte finish (hides layer lines)', 'Very lightweight', 'High stiffness', 'Looks very "Atas" (Premium)'],
      cons: 'More expensive',
      difficulty: 'Medium'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          {/* Header 改一点，更有针对性 */}
          <h1>Material Guide</h1>
          <p>Not sure what to choose? Here is a breakdown of our materials.</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-list">
            {materialsData.map((item) => (
              <div key={item.id} className="service-item fade-in">
                <div className="service-icon" style={{ fontSize: '3rem' }}>{item.icon}</div>
                <div className="service-details">
                  <h3>{item.title}</h3>
                  <span className="badge" style={{ 
                      background: 'green', 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '0.8rem', 
                      fontWeight: 'bold',
                      color: '#555',
                      marginBottom: '10px',
                      display: 'inline-block'
                    }}>
                    {item.subtitle}
                  </span>
                  
                  <p style={{ margin: '10px 0' }}>{item.description}</p>
                  
                  {/* Highlight "Best For" - Customer 最喜欢看这个 */}
                  <div style={{ marginBottom: '15px', fontStyle: 'italic', color: '#666' }}>
                    <strong>Best For:</strong> {item.bestFor}
                  </div>

                  {/* Feature List (Pros) */}
                  <ul className="service-features">
                    {item.pros.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '5px' }}>✅ {feature}</li>
                    ))}
                    {/* 既然要 Honest，就把 Cons 也放一点点，或者你可以选择不放 */}
                    <li style={{ color: '#d9534f' }}>⚠️ Note: {item.cons}</li>
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