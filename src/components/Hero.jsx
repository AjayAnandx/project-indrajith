import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob"></div>
        <div className="hero-blob"></div>
      </div>

      <nav className="nav">
        <div className="logo">Kottankuchi.com</div>
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Work</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          Enna da ithu
        </h1>
        <p className="hero-subtitle">
          Explore all the popular losses of Indrajith in FC24, WWE2k25 and much more
        </p>
        <div className="hero-cta">
          <a href="#" className="btn-primary">Explore Soothadis 🍑</a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
