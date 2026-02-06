import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa' 
import logoImg from '../../logo.jpeg'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 pt-20 pb-8 text-slate-400 font-sans">
      <div className="container mx-auto">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <img 
                src={logoImg} 
                alt="Solidify Logo" 
                className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                Solidify
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional 3D printing services for creators, engineers, and businesses. Bringing your ideas to life with precision and passion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/solidify_3dshop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link to="/" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Home</Link>
              <Link to="/services" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Services</Link>
              <Link to="/portfolio" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Portfolio</Link>
              <Link to="/contact" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Contact</Link>
            </div>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Services
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a href="/contact?type=quote" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Get Quote</a>
              <a href="/services" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Prototyping</a>
              <a href="/services" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Custom Parts</a>
              <a href="/services" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200">Production Runs</a>
            </div>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <p>
                <span className="text-slate-400">Email:</span><br/>
                <a href="mailto:solidify123d@gmail.com" className="text-purple-400 hover:text-pink-400 transition-colors font-semibold">
                  solidify123d@gmail.com
                </a>
              </p>
              <p>
                <span className="text-slate-400">Location:</span><br/>
                <span className="text-slate-300">Penang, Malaysia</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Solidify 3D Printing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer