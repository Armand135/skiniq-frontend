import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate('/scan');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '5rem auto', padding: '2rem', backgroundColor: '#f4fbf9', borderRadius: '8px', fontFamily: 'Calibri, sans-serif', color: '#1a3c34' }}>
      <h2 style={{ textAlign: 'center', color: '#005f4d' }}>Login to SkinIQ</h2>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        {errorMsg && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errorMsg}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '0.75rem', backgroundColor: '#29a388', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default Login;
