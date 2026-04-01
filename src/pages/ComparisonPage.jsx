import React from 'react';
import ComparisonSection from '../components/ComparisonSection';
import { Link } from 'react-router-dom';

const ComparisonPage = () => {
  return (
    <div className="comparison-page" style={{ position: 'relative' }}>
      <Link 
        to="/" 
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          zIndex: 100,
          padding: '10px 20px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '0.9rem',
          fontWeight: '600'
        }}
      >
        ← Back Home
      </Link>
      <ComparisonSection />
    </div>
  );
};

export default ComparisonPage;
