import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for small projects',
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
      description: 'Most popular choice',
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
      cta: 'Get Started',
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For large productions',
      price: 'Custom',
      period: 'contact for pricing',
      features: [
        'Unlimited size',
        'Custom turnaround',
        'All materials & colors',
        '24/7 support',
        'Batch discounts',
        'Custom finishing'
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
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden section-light">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Simple & Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. Pay only for what you need. Get a free quote for your specific project.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`card flex flex-col transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl md:scale-105 md:-translate-y-6 ring-2 ring-purple-400' 
                    : 'bg-white border border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${plan.popular ? 'text-white/70' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <Link 
                  to="/contact?type=quote" 
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 mb-8 text-center ${
                    plan.popular 
                      ? 'bg-white text-purple-600 hover:bg-yellow-400 hover:text-purple-900' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className={`space-y-4 flex-1 ${plan.popular ? 'text-white/90' : 'text-slate-700'}`}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`mr-3 mt-1 font-bold ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`}>✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Material <span className="gradient-text">Pricing</span></h2>
            <p className="text-slate-600 text-lg">Base price + material surcharge</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="card group border-2 border-slate-200 hover:border-purple-500">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {material.name}
                  </h4>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                    material.price === 'Base' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {material.price}
                  </span>
                </div>
                <p className="text-slate-600 text-sm">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What's included in the price?",
                a: "Our base price includes 3D printing, quality inspection, and standard packaging. Post-processing services are available for an additional fee."
              },
              {
                q: "Do you offer discounts for bulk orders?",
                a: "Yes! Orders of 10+ units get 10% off, 20+ units get 15%, and 50+ units get 20% off."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, bank transfers, PayPal, and can arrange invoicing for business clients."
              },
              {
                q: "Do you offer rush printing?",
                a: "Yes! Express printing is available for a 25-50% surcharge for same-day or next-day turnaround."
              }
            ].map((item, index) => (
              <div key={index} className="card border-l-4 border-l-purple-500">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 text-lg">Get a personalized quote for your project in minutes</p>
          <Link to="/contact?type=quote" className="inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-yellow-300 transition-all hover:scale-105">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing