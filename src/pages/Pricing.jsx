import React from 'react'
// 记得把 import '../styles/pricing.css' 删掉！

function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for small projects and testing',
      price: '$99',
      period: 'per project',
      features: [
        'Up to 50 cubic cm',
        '48-hour turnaround',
        '1 material option',
        'Basic support',
        'Quality inspection'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Ideal for regular prototyping needs',
      price: '$299',
      period: 'per project',
      features: [
        'Up to 150 cubic cm',
        '24-hour turnaround',
        'All materials available',
        'Priority support',
        'Advanced inspection',
        'Free design review'
      ],
      cta: 'Choose Plan',
      popular: true // 这个我们要用来做 Highlight
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For large-scale production runs',
      price: 'Custom',
      period: 'contact for pricing',
      features: [
        'Unlimited size',
        'Custom turnaround',
        'All materials & colors',
        '24/7 dedicated support',
        'Batch discounts',
        'Custom post-processing'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ]

  const materials = [
    { name: 'PLA', description: 'Cost-effective, biodegradable', price: 'Base' },
    { name: 'ABS', description: 'Durable, impact-resistant', price: '+15%' },
    { name: 'PETG', description: 'Strong, flexible', price: '+20%' },
    { name: 'Resin', description: 'High detail, smooth finish', price: '+30%' },
    { name: 'Carbon Fiber', description: 'Lightweight, strong', price: '+40%' },
    { name: 'Nylon', description: 'Flexible, durable', price: '+35%' }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 px-5 text-center bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-slate-400 text-lg">
            No hidden fees. Pay only for what you need.
          </p>
        </div>
      </section>

      {/* 2. Pricing Plans */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                // Card 样式：如果是 Popular，我们加一点 Scale 和 Border 颜色
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 h-full
                  ${plan.popular 
                    ? 'bg-slate-800/80 border-2 border-sky-500 shadow-[0_0_30px_rgba(14,165,233,0.15)] md:-translate-y-4 md:scale-105 z-10' 
                    : 'bg-slate-800/40 border border-slate-700 hover:border-slate-600'
                  }
                `}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500 ml-2 text-sm">{plan.period}</span>
                </div>

                <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 mb-8
                  ${plan.popular 
                    ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]' 
                    : 'bg-transparent border border-slate-600 text-slate-300 hover:border-sky-400 hover:text-sky-400'
                  }
                `}>
                  {plan.cta}
                </button>

                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-300">
                      <span className="text-emerald-400 mr-3 mt-0.5 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Materials Pricing Table */}
      <section className="py-20 px-5 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Material Pricing</h2>
            <p className="text-slate-400">Base price + material surcharge</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-sky-500/50 transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">{material.name}</h4>
                  <span className={`text-sm font-mono px-2 py-1 rounded 
                    ${material.price === 'Base' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'}
                  `}>
                    {material.price}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Items */}
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="text-lg font-bold text-sky-400 mb-3">What's included in the price?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Our base price includes 3D printing, quality inspection, and standard packaging. Post-processing services are available for an additional fee.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="text-lg font-bold text-sky-400 mb-3">Do you offer discounts for volume orders?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Yes! Orders of 10+ units receive a 10% discount, 20+ units get 15%, and 50+ units get 20% off. Contact us for custom bulk pricing.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="text-lg font-bold text-sky-400 mb-3">What payment methods do you accept?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">We accept all major credit cards, bank transfers, PayPal, and can arrange invoicing for business clients.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="text-lg font-bold text-sky-400 mb-3">Do you offer rush printing?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Yes! Express printing is available for an additional 25-50% surcharge for same-day or next-day turnaround.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Pricing