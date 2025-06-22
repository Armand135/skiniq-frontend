import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    const { error } = await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Please check your email to confirm your signup.');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '5rem auto', padding: '2rem', backgroundColor: '#f4fbf9', borderRadius: '8px', fontFamily: 'Calibri, sans-serif', color: '#1a3c34' }}>
      <h2 style={{ textAlign: 'center', color: '#005f4d' }}>Create Your SkinIQ Account</h2>

      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        {errorMsg && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green', fontSize: '0.9rem' }}>{successMsg}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '0.75rem', backgroundColor: '#29a388', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Signing up...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
