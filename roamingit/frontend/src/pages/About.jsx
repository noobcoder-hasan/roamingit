import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <header className="about-header">
          <h1 id="about-title" className="about-title">About Roaming Tech</h1>
          <p className="about-lead">
            Roaming Tech is a product engineering partner focused on building reliable,
            cloud‑native platforms and customer‑centric software. We help teams ship faster
            with modern stacks, strong DX, and a pragmatic approach to security, performance,
            and observability.
          </p>
        </header>

        <section className="about-highlights" aria-labelledby="why-title">
          <h2 id="why-title" className="about-subtitle">What We Do</h2>
          <ul className="about-list" role="list">
            <li>Product engineering for web, mobile, and APIs</li>
            <li>Cloud and DevOps automation (CI/CD, IaC, observability)</li>
            <li>AI and data platforms for insights and automation</li>
            <li>Security, compliance, and performance built-in</li>
          </ul>
        </section>

        <div className="about-cta">
          <a href="/#contact" className="about-cta-link">Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;