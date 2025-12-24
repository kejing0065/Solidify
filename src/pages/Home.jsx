import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ServicesPreview from '../components/ServicesPreview'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans">
      
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <CallToAction />
      
    </div>
  )
}

export default Home