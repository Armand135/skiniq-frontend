import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>SkinIQ</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
      Scan your skin in seconds with AI-powered precision.
    </p>
    <Link to="/scan">
      <button style={{ padding: '1rem 2rem', fontSize: '1rem', background: '#007bff', color: 'white', borderRadius: '5px' }}>
        Try Skin Scan
      </button>
    </Link>
  </div>
);
export default HomePage;