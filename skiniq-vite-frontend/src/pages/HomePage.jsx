import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleImageUpload = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! You are now on the waitlist.');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>SkinIQ</h1>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        Scan your skin in seconds with AI-powered precision.
      </h2>

      <p>Get instant analysis of moles, rashes, acne, and more—right from your phone.</p>

      <Link to="/scan">
        <button
          style={{
            marginTop: '1.5rem',
            padding: '1rem 2rem',
            fontSize: '1rem',
            background: '#007bff',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Try Skin Scan
        </button>
      </Link>

      <form onSubmit={handleSubmit} style={{ marginTop: '3rem' }}>
        <label>
          📧 Join the Waitlist:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            style={{ display: 'block', marginTop: '0.5rem', padding: '0.5rem', width: '100%' }}
            required
          />
        </label>
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Join Now</button>
      </form>

      <div style={{ marginTop: '3rem' }}>
        <h3>📸 Try Image Upload (demo only)</h3>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <p>Uploaded: {image.name}</p>}
      </div>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#555' }}>
        <p>Privacy-first · Dermatologist-advised · Built for all skin tones</p>
        <p>&copy; 2025 SkinIQ</p>
      </footer>
    </div>
  );
};

export default HomePage;
