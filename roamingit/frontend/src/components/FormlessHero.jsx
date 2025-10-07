import React from 'react';
import './FormlessHero.css';
import flyingPlane from '../assets/flying plane.gif'; // Background can be subtle underlay

const FormlessHero = () => {
  return (
    <section className="formless-hero" id="home">
      {/* Background */}
      <div className="hero-bg absolute inset-0" aria-hidden="true"></div>

      {/* Hero Background Underlay (subtle) */}
      <div className="hero absolute inset-0 z-0" aria-hidden="true">
        <img src={flyingPlane} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg animate-slideInDown">
          Think IT, <span className="badge">Do IT.</span>
        </h1>
        <p className="hero-subtitle text-lg md:text-xl text-gray-200 mb-8 animate-slideInUp">
          Roaming Tech takes care of the work so teams can connect with their customers.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions flex flex-row justify-center gap-4 mb-6 animate-fadeIn delay-200">
          <a href="#contact" className="btn btn-primary hover:scale-105 transition-transform transform">
            Let's Talk
          </a>
          <a href="#services" className="btn btn-primary hover:scale-105 transition-transform transform">
            Our Projects
          </a>
          <a href="#teams" className="btn btn-primary hover:scale-105 transition-transform transform">
            Our Teams
          </a>
        </div>

      </div>

      {/* Minimal decorative elements */}
      <div className="hero-decor absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="decor-circle bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default FormlessHero;
