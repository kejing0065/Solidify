import React from 'react'
import '../styles/pricing.css'

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
      popular: true
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
    {
      name: 'PLA',
      description: 'Cost-effective, biodegradable',
      price: 'Base'
    },
    {
      name: 'ABS',
      description: 'Durable, impact-resistant',
      price: '+15%'
    },
    {
      name: 'PETG',
      description: 'Strong, flexible',
      price: '+20%'
    },
    {
      name: 'Resin',
      description: 'High detail, smooth finish',
      price: '+30%'
    },
    {
      name: 'Carbon Fiber',
      description: 'Lightweight, strong',
      price: '+40%'
    },
    {
      name: 'Nylon',
      description: 'Flexible, durable',
      price: '+35%'
    }
  ]

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p>No hidden fees. Pay only for what you need.</p>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <div className="plans-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''} fade-in`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                  {plan.cta}
                </button>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="materials-pricing">
        <div className="container">
          <h2>Material Pricing</h2>
          <p className="section-subtitle">Base price + material surcharge</p>
          
          <div className="materials-grid">
            {materials.map((material, index) => (
              <div key={index} className="material-card fade-in">
                <h4>{material.name}</h4>
                <p>{material.description}</p>
                <div className="material-price">{material.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's included in the price?</h4>
              <p>Our base price includes 3D printing, quality inspection, and standard packaging. Post-processing services are available for an additional fee.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer discounts for volume orders?</h4>
              <p>Yes! Orders of 10+ units receive a 10% discount, 20+ units get 15%, and 50+ units get 20% off. Contact us for custom bulk pricing.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, bank transfers, PayPal, and can arrange invoicing for business clients.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer rush printing?</h4>
              <p>Yes! Express printing is available for an additional 25-50% surcharge for same-day or next-day turnaround.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
