import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaCube } from 'react-icons/fa' 
import logoImg from '../../logo.jpeg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation() 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getLinkClass = (path) => {
    const isActive = location.pathname === path
    return `text-lg font-medium transition-colors duration-300 ${
      isActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'
    }`
  }

  return (
    <nav className="sticky top-0 z-50 w-full h-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="container mx-auto px-5 h-full flex justify-between items-center">
        
        {/* Logo */}
        <div className="z-50">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
            {/* <FaCube className="text-3xl text-sky-500 group-hover:rotate-180 transition-transform duration-700" /> */}
            <img 
                src={logoImg} 
                alt="Solidify Logo" 
                className="h-10 w-auto object-contain" // h-10 是高度，自己调 (h-8, h-10, h-12)
            />
            <span className="text-2xl font-bold tracking-widest text-white uppercase group-hover:text-sky-400 transition-colors">
              Solidify
            </span>
          </Link>
        </div>

        {/* Menu */}
        <div className={`
          absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col justify-center items-center gap-8 text-center transition-all duration-300 ease-in-out
          md:static md:h-auto md:bg-transparent md:flex-row md:justify-end md:translate-y-0
          ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible md:visible md:opacity-100'}
        `}>
          <Link to="/" className={getLinkClass('/')} onClick={closeMenu}>Home</Link>
          <Link to="/services" className={getLinkClass('/services')} onClick={closeMenu}>Material Guide</Link>
          <Link to="/portfolio" className={getLinkClass('/portfolio')} onClick={closeMenu}>Portfolio</Link>
          <Link to="/pricing" className={getLinkClass('/pricing')} onClick={closeMenu}>Pricing</Link>
          <Link to="/contact" className={getLinkClass('/contact')} onClick={closeMenu}>Contact</Link>
          <Link to="/contact" onClick={closeMenu} className="px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-full transition-all shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:-translate-y-1">
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 cursor-pointer text-slate-200 hover:text-sky-400 transition-colors" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar