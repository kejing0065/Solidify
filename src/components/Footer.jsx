import React from 'react'
import { Link } from 'react-router-dom'
// 记得 install react-icons: npm install react-icons
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaCube } from 'react-icons/fa' 

function Footer() {
  return (
    // bg-slate-950: 比正文的 bg-slate-900 更深一点，做出层次感
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 text-slate-300 font-sans">
      <div className="container mx-auto px-5">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <FaCube className="text-2xl text-sky-500 group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-xl font-bold tracking-widest text-white uppercase group-hover:text-sky-400 transition-colors">
                Solidify
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading 3D printing service provider for businesses and individuals worldwide. Turning your digital dreams into physical reality.
            </p>
            
            {/* Social Icons with Hover Effects */}
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/solidify_3dshop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-sky-500 rounded-full"></span>
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link to="/" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Home</Link>
              <Link to="/services" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Material Guide</Link>
              <Link to="/portfolio" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Portfolio</Link>
              <Link to="/pricing" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Pricing</Link>
              <Link to="/contact" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Contact</Link>
            </div>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-sky-500 rounded-full"></span>
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a href="/contact?type=prototyping" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Prototyping</a>
              <a href="/contact?type=custom-parts" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Custom Parts</a>
              <a href="/contact?type=production" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Production Runs</a>
              <a href="/contact?type=consulting" className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 w-fit">Design Consulting</a>
            </div>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-sky-500 rounded-full"></span>
            </h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
                  📧
                </span>
                <a href="mailto:solidify123d@gmail.com" className="hover:text-sky-400 transition-colors">
                  solidify123d@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
                  📍
                </span>
                <span className="text-slate-400">
                  Penang, Malaysia
                </span>
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