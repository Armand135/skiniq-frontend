import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! You’re on the waitlist.');
    setEmail('');
  };

  const handleInlineSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
    });
    if (error) {
      alert(`❌ Sign-up failed: ${error.message}`);
    } else {
      alert('✅ Sign-up successful! Please check your email to confirm your account.');
      setSignupEmail('');
      setSignupPassword('');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div style={{ fontFamily: 'Calibri, sans-serif', color: '#1a3c34', backgroundColor: '#f4fbf9', padding: '2rem' }}>
      {/* Header with optional logout */}
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        {session ? (
          <button onClick={handleLogout} style={{ backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px' }}>
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#005f4d' }}>
          Scan Your Skin Instantly
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          AI-powered insights for moles, acne, and more—anytime, anywhere.
        </p>
        <Link to="/scan">
          <button style={{ padding: '1rem 2rem', backgroundColor: '#29a388', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '1rem' }}>
            Try Skin Scan
          </button>
        </Link>
      </section>

      {/* How It Works */}
      <section style={{ maxWidth: '800px', margin: 'auto', marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { step: 1, title: 'Upload', desc: 'Take a photo of your skin concern using your phone.' },
            { step: 2, title: 'Scan', desc: 'Our AI analyzes your image securely and instantly.' },
            { step: 3, title: 'Results', desc: 'Get insights, confidence level, and next-step advice.' }
          ].map(({ step, title, desc }) => (
            <div key={step} style={{ flex: '1 1 30%', backgroundColor: '#e7f6f2', padding: '1rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#007a67' }}>Step {step}: {title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Why SkinIQ?</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          <li>✅ Built for all skin tones</li>
          <li>✅ Dermatologist-advised</li>
          <li>✅ Privacy-first, image never stored</li>
          <li>✅ Available on mobile & desktop</li>
        </ul>
      </section>

      {/* Trust Indicator */}
      <section style={{ backgroundColor: '#d0f0e8', padding: '2rem', borderRadius: '8px', textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.1rem' }}><strong>🔬 Clinically validated algorithms</strong></p>
        <p>Trusted by dermatologists and early adopters in over 10 countries.</p>
      </section>

      {/* Email Waitlist */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Join Our Waitlist</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '250px', marginRight: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#29a388', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Join Now
          </button>
        </form>
      </section>

      {/* Inline Sign-Up */}
      <section style={{ textAlign: 'center', marginTop: '3rem', background: '#eefaf6', padding: '2rem', borderRadius: '10px' }}>
        <h2 style={{ color: '#006E3C', marginBottom: '1rem' }}>Create a SkinIQ Account</h2>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Access your scan history, receive tailored insights, and more.</p>

        <form onSubmit={handleInlineSignup} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '0.6rem',
              marginBottom: '1rem',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '0.6rem',
              marginBottom: '1rem',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.7rem 1.5rem',
              backgroundColor: '#29a388',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Sign Up
          </button>
        </form>
      </section>

      {/* Language Switch */}
      <section style={{ textAlign: 'center', marginTop: '2rem' }}>
        <label>
          🌍 Language:
          <select style={{ marginLeft: '0.5rem', padding: '0.3rem' }}>
            <option>English</option>
            <option>العربية</option>
            <option>Français</option>
          </select>
        </label>
      </section>

      <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#555' }}>
        <p>© 2025 SkinIQ · All rights reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
