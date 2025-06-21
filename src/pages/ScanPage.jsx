import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleScan = async () => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("https://skiniq-backend.onrender.com/analyze-skin/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      const result = await response.json();
      localStorage.setItem("scanResult", JSON.stringify(result));
      navigate('/result');
    } catch (error) {
      console.error("Scan failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#006E3C' }}>AI-Powered Skin Scan</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#444' }}>
        Upload a skin photo to detect potential conditions like melanoma, keratosis, or acne with instant results.
      </p>

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
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#777' }}>
        📸 Tip: Ensure good lighting and close-up of the skin area.
      </p>
    </div>
  );
};

export default ScanPage;
