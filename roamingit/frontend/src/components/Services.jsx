import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: '⚡',
    title: 'AI & Cloud Solutions',
    description:
      'Leverage AI assistants, automation, and cloud-native infrastructure to scale securely and efficiently.',
  },
  {
    icon: '⚙️',
    title: 'Web Development',
    description:
      'Modern, fast, and accessible websites built with best-in-class tooling and performance in mind.',
  },
  {
    icon: '📲',
    title: 'Mobile Apps',
    description:
      'Cross-platform iOS and Android apps focused on intuitive UX and robust offline-first experiences.',
  },
  {
    icon: '✨',
    title: 'UI/UX Design',
    description:
      'Human-centered product design that balances usability, delight, and business outcomes.',
  },
  {
    icon: '🔧',
    title: 'Software Consulting',
    description:
      'Architecture reviews, roadmap planning, and hands-on guidance to accelerate delivery.',
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    description:
      'Security audits, monitoring, and privacy-by-design to keep your products and users protected.',
  },
];

const Services = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="services" className="services-section relative" aria-labelledby="services-title">
      <div className="hero-bg absolute inset-0" aria-hidden="true"></div>
      {/* <div className="hero absolute inset-0 z-0" aria-hidden="true">
        <img src={im} alt="" className="w-full h-full object-cover opacity-20" />
      </div> */}
      
      <div className="container">
        <h2 id="services-title" className="section-title">Products</h2>
        <p className="section-subtitle">
          We build and operate reliable, secure, and delightful products.
        </p>

        {/* Slide Carousel Layout (desktop/tablet) */}
        <div className="orbit-scene" aria-hidden="false">
          <div className="orbit" role="list" aria-label="Services carousel">
            <div className="slide-container">
              <div className="slide-track">
                {/* Duplicate items for seamless loop */}
                {[...servicesData, ...servicesData].map((svc, idx) => (
                  <button
                    key={idx}
                    className="orbit-item"
                    role="listitem"
                    aria-label={`${svc.title}: ${svc.description}`}
                    style={{ '--item-index': idx }}
                    onClick={scrollToContact}
                  >
                    <div className="orbit-item-inner">
                      <div className="orbit-icon" aria-hidden="true">{svc.icon}</div>
                      <div className="orbit-label">{svc.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid fallback (mobile / reduced-motion) */}
        <div className="services-grid" role="list">
          {servicesData.map((svc, idx) => (
            <article
              key={idx}
              className="service-card"
              role="listitem"
              tabIndex={0}
              aria-label={`${svc.title}: ${svc.description}`}
            >
              <div className="service-icon" aria-hidden="true">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-description">{svc.description}</p>
              <button className="service-cta" onClick={scrollToContact}>
                Contact Us
                <span className="arrow" aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;