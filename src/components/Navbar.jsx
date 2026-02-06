import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa' 
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
    return `font-semibold transition-all duration-300 ${
      isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600' : 'text-slate-700 hover:text-slate-900'
    }`
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group shrink-0">
          <img 
            src={logoImg} 
            alt="Solidify Logo" 
            className="h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
          />
          <span className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
            Solidify
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          <Link to="/portfolio" className={getLinkClass('/portfolio')}>Portfolio</Link>
          <Link to="/product" className={getLinkClass('/product')}>Product</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          
          <Link to="/contact?type=quote" className="btn-primary">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`
          fixed top-16 left-0 w-full bg-white shadow-lg flex flex-col gap-4 px-6 py-8 transition-all duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <Link to="/" className="font-semibold text-slate-900 hover:text-purple-600" onClick={closeMenu}>Home</Link>
          <Link to="/services" className="font-semibold text-slate-900 hover:text-purple-600" onClick={closeMenu}>Services</Link>
          <Link to="/portfolio" className="font-semibold text-slate-900 hover:text-purple-600" onClick={closeMenu}>Portfolio</Link>
          <Link to="/product" className="font-semibold text-slate-900 hover:text-purple-600" onClick={closeMenu}>Product</Link>
          <Link to="/contact" className="font-semibold text-slate-900 hover:text-purple-600" onClick={closeMenu}>Contact</Link>
          <Link to="/contact?type=quote" className="btn-primary w-full text-center" onClick={closeMenu}>
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 cursor-pointer text-slate-700 hover:text-slate-900 transition-colors" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar