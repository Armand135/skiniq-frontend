import React from 'react';
import { Link } from 'react-router-dom';

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("scanResult"));
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Scan Result</h2>
      {result ? (
        <>
          <p style={{ fontSize: '1.2rem' }}>🧠 {result.condition}</p>
          <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
          <p>{result.recommendation}</p>
        </>
      ) : (
        <p>No result available.</p>
      )}
      <Link to="/">
        <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem', background: '#007bff', color: 'white', borderRadius: '5px' }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
};
export default ResultPage;
