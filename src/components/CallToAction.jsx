import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/cta.css'

// 这里的 CallToAction 帮你改得比较 clean 一点
function CallToAction() {
  return (
    <section className="cta relative overflow-hidden">
      {/* Background 那些 shape 还是保留给你，不过结构我弄整齐一点 */}
      <div className="cta-background">
        <div className="cta-shape shape-1"></div>
        <div className="cta-shape shape-2"></div>
      </div>
      
      <div className="container cta-container text-center">
        {/* Title 要够大够响 */}
        <h2 className="cta-title">
          From Imagination to <span className="highlight-text">Reality</span>
        </h2>
        
        {/* Description 不要太长，直接讲重点 */}
        <p className="cta-desc">
          Ready to print your next masterpiece? Whether it's a prototype or a final product, we make it happen.
        </p>
        
        <div className="cta-buttons flex gap-4 justify-center">
          {/* STOP DOING THIS: <Link><button>...</button></Link> */}
          {/* DO THIS: Style the Link explicitly as a button */}
          
          <Link to="/contact?type=quote" className="btn btn-primary">
            Get A Free Quote 🚀
          </Link>
          
          <Link to="/services" className="btn btn-outline-light">
            View Our Works
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction