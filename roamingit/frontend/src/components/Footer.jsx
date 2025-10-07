import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="/#home" className="brand-row">
            <img src="/logo-roaming.svg" alt="Roaming logo" className="footer-logo" />
            <span className="brand-name">Roaming</span>
          </a>
          <p className="brand-tag">Reliable products for modern teams.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link to="/about" className="footer-link">About Us</Link>
          <a href="/#services" className="footer-link">Services</a>
          <a href="/#contact" className="footer-link">Contact</a>
        </nav>

 

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Roaming IT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;