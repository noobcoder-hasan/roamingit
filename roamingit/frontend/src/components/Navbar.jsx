import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Smooth scroll function
  const scrollToSection = (id) => {
    if (id === 'home') {
      // Scroll to top of page for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false); // close mobile menu
  };

  return (
    <nav className={`navbar ${scroll ? 'navbar-scrolled' : ''}`}>
      <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)} aria-label="Go to home">
        <img src="/logo-roaming.svg" alt="Roaming Tech" className="navbar-logo-img" />
      </Link>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {/* HOME */}
        <li className="nav-item">
          <Link to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
        </li>
        {/* ABOUTUS */}
        <li className="nav-item">
          <Link to="/about" className="nav-btn" onClick={() => setMenuOpen(false)}>
            ABOUTUS
          </Link>
        </li>
        {/* contact */}
        <li className="nav-item">
          <button className="nav-btn nav-btn-primary" onClick={() => scrollToSection('contact')}>
            contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
