import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! You’ve joined the waitlist.");
    setEmail('');
  };

  return (
    <div style={{ fontFamily: 'Calibri, sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>SkinIQ</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Scan your skin in seconds with AI-powered precision.
        </p>
        <Link to="/scan">
          <button style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}>
            Try Skin Scan
          </button>
        </Link>
      </header>

      {/* How it works */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>How It Works</h2>
        <ol style={{ paddingLeft: '1rem', fontSize: '1rem', lineHeight: '1.8' }}>
          <li>Upload a clear photo of your skin</li>
          <li>AI analyzes it and detects possible conditions</li>
          <li>Get instant result + Grad-CAM explainability</li>
        </ol>
      </section>

      {/* Benefits */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Why SkinIQ?</h2>
        <ul style={{ listStyleType: '✔️', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
          <li>Works across all skin tones</li>
          <li>No data stored or shared</li>
          <li>Built with dermatologist-reviewed data</li>
          <li>Visual explanation via heatmaps</li>
        </ul>
      </section>

      {/* Waitlist Signup */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Join the Waitlist</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '0.5rem',
              width: '100%',
              maxWidth: '300px',
              marginRight: '0.5rem',
              marginTop: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button type="submit" style={{
            padding: '0.5rem 1rem',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}>
            Join
          </button>
        </form>
      </section>

      {/* Demo (placeholder) */}
      <section style={{ marginBottom: '3rem' }}>
        <h3>Try Image Upload (Demo)</h3>
        <input type="file" accept="image/*" />
        <p style={{ fontSize: '0.9rem', color: '#777' }}>(This is a demo placeholder)</p>
      </section>

      {/* Disclaimer */}
      <footer style={{ fontSize: '0.9rem', color: '#666', textAlign: 'center' }}>
        <p>🛡️ Privacy-first · 🧑‍⚕️ Dermatologist-advised · 🌍 Inclusive for all skin tones</p>
        <p style={{ marginTop: '0.5rem' }}>SkinIQ is not a diagnostic tool. Please consult a medical professional.</p>
        <p style={{ marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} SkinIQ</p>
      </footer>
    </div>
  );
};

export default HomePage;
