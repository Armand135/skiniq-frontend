import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';
import { supabase } from '../supabaseClient';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser()
      .then(({ data: { user } }) => { if (!user) navigate('/login'); });
  }, [navigate]);

  const handleScan = async () => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      console.log("🔍 Sending scan request...");
      const response = await fetch("https://skiniq-backend-ej69.onrender.com/analyze-skin", {
        method: "POST",
        body: formData,
      });
      console.log("👉 Response received:", response);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status} – ${errorText}`);
      }

      const result = await response.json();
      console.log("✅ Scan result:", result);
      localStorage.setItem("scanResult", JSON.stringify(result));
      navigate('/result');
    } catch (err) {
      console.error("❌ Scan failed:", err);
      alert(`Something went wrong: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#006E3C' }}>AI‑Powered Skin Scan</h1>
      <ImageUpload image={image} setImage={setImage} />
      <button
        onClick={handleScan}
        disabled={!image || loading}
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontSize: '1rem',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: image && !loading ? 'pointer' : 'not-allowed',
          opacity: image && !loading ? 1 : 0.6
        }}
      >
        {loading ? 'Analyzing…' : 'Analyze'}
      </button>
      <p style={{ marginTop: '2rem', color: '#777' }}>📸 Tip: good lighting = better results.</p>
    </div>
  );
};

export default ScanPage;
