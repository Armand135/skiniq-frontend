import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Signup successful! Check your email for confirmation.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Join SkinIQ</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.75rem', width: '100%', background: '#28a745', color: 'white', border: 'none' }}>
          Sign Up
        </button>
      </form>
      {message && <p style={{ marginTop: '1rem', color: 'red' }}>{message}</p>}
    </div>
  );
};

export default Signup;
