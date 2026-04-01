import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob"></div>
        <div className="hero-blob"></div>
      </div>

      <nav className="nav">
        <Link to="/" className="logo">Kottankuchi.com</Link>
        <ul className="nav-links">
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
          <Link to="/comparison" className="btn-primary">Explore Soothadis 🍑</Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;
