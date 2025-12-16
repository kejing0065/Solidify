import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ServicesPreview from '../components/ServicesPreview'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home
