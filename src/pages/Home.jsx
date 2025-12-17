import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ServicesPreview from '../components/ServicesPreview'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

function Home() {
  return (
    // 关键在这里！
    // min-h-screen: 确保至少占满整个屏幕高度
    // bg-slate-900: 这里的背景色是 "Safety Net"，万一里面的 Component 有缝隙，这里会补黑
    // selection:bg-sky-500: 用户 highlight 字的时候，会有蓝色的背景，很细节！
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      
      {/* 这些 Component 记得要用我之前给你的 Tailwind 版本，
          如果在里面还 import 旧的 css，这里怎么改都没用哦！ */}
      
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      {/* <Testimonials /> */}
      <CallToAction />
      
    </div>
  )
}

export default Home