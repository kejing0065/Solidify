import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star, Zap, Check } from 'lucide-react'

function Product() {
  const [selectedSort, setSelectedSort] = useState('popular')

  const products = [
    {
      id: 1,
      name: 'Standard Prototype Kit',
      category: 'Prototyping',
      price: '$49',
      rating: 4.8,
      reviews: 124,
      image: '🎨',
      description: 'Complete kit for creating detailed prototypes',
      features: ['24-48 hour turnaround', 'PLA material', 'Up to 5 prints', 'Technical support'],
      popular: true
    },
    {
      id: 2,
      name: 'Professional Series',
      category: 'Professional',
      price: '$149',
      rating: 4.9,
      reviews: 89,
      image: '⚙️',
      description: 'Industrial-grade printing for production',
      features: ['PETG/ABS materials', 'Precision ±0.1mm', 'Volume discounts', 'Priority support'],
      popular: true
    },
    {
      id: 3,
      name: 'Flexible Parts Pack',
      category: 'Specialized',
      price: '$89',
      rating: 4.7,
      reviews: 56,
      image: '👟',
      description: 'TPU flexible material printing',
      features: ['Elastic TPU material', 'Custom shapes', 'Durable finish', '3 designs included'],
      popular: false
    },
    {
      id: 4,
      name: 'Ultra Detail Resin',
      category: 'Premium',
      price: '$199',
      rating: 5.0,
      reviews: 42,
      image: '💎',
      description: 'High-resolution resin printing',
      features: ['Mirror-smooth finish', 'Extreme detail', 'Multiple colors', 'Post-processing included'],
      popular: true
    },
    {
      id: 5,
      name: 'Bulk Production Deal',
      category: 'Production',
      price: '$299',
      rating: 4.8,
      reviews: 78,
      image: '📦',
      description: 'Large-scale manufacturing runs',
      features: ['100+ unit runs', 'Custom color mixing', 'Quality assurance', 'Dedicated account manager'],
      popular: false
    },
    {
      id: 6,
      name: 'Student Starter Pack',
      category: 'Education',
      price: '$39',
      rating: 4.6,
      reviews: 203,
      image: '🎓',
      description: 'Affordable option for students',
      features: ['Educational discount', 'Learning materials', 'Email support', 'Documentation included'],
      popular: false
    }
  ]

  const sortedProducts = [...products].sort((a, b) => {
    if (selectedSort === 'popular') return b.reviews - a.reviews
    if (selectedSort === 'price-low') return parseInt(a.price) - parseInt(b.price)
    if (selectedSort === 'price-high') return parseInt(b.price) - parseInt(a.price)
    return b.rating - a.rating
  })

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden section-light">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect 3D printing package for your project. From prototypes to production, we have solutions for everyone.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          
          {/* Sort Controls */}
          <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-6">
            <h2 className="text-2xl font-bold text-slate-900">Browse Our Offerings</h2>
            <div className="flex items-center gap-3">
              <span className="text-slate-600 font-semibold">Sort by:</span>
              <select 
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <div 
                key={product.id} 
                className="card group flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 relative"
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Popular
                  </div>
                )}

                {/* Product Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <span className="text-sm text-purple-600 font-semibold mb-3">
                    {product.category}
                  </span>

                  <p className="text-slate-600 mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and Button */}
                  <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">
                      {product.price}
                    </span>
                    <Link 
                      to={`/contact?product=${product.id}`}
                      className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2 text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Custom Solution Needed?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? We offer custom packages tailored to your specific requirements.
            </p>
            <Link to="/contact" className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors duration-300">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
