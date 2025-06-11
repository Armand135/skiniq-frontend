import React from 'react';
import { Link } from 'react-router-dom';

const ResultPage = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Scan Result</h2>
    <p style={{ fontSize: '1.2rem' }}>⚠️ Moderate Risk</p>
    <p>We recommend consulting a dermatologist for further analysis.</p>
    <Link to="/">
      <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem', background: '#007bff', color: 'white', borderRadius: '5px' }}>
        Back to Home
      </button>
    </Link>
  </div>
);

export default ResultPage;