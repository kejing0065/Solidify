import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Solidify</h3>
            <p>Leading 3D printing service provider for businesses and individuals worldwide.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/solidify_3dshop/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <a href="#services">Prototyping</a>
            <a href="#services">Custom Parts</a>
            <a href="#services">Production Runs</a>
            <a href="#services">Consulting</a>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: solidify123d@gmail.com</p>
            {/* <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Innovation Ave, Tech City, TC 12345</p> */}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Solidify. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
