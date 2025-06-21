import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container">
    <h1 className="logo">SkinIQ</h1>
    <p className="tagline">AI-Powered Dermatology Scans</p>
    <Link to="/scan" className="cta-button">Start Scan</Link>
  </div>
);

export default HomePage;