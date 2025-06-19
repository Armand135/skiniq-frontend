import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleScan = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("https://skiniq-backend-deploy.onrender.com/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      localStorage.setItem("scanResult", JSON.stringify(result));
      navigate('/result');
    } catch (error) {
      console.error("Scan failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Upload a Skin Image
      </h2>

      <ImageUpload image={image} setImage={setImage} />

      <button
        onClick={handleScan}
        disabled={!image}
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontSize: '1rem',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: image ? 'pointer' : 'not-allowed',
          opacity: image ? 1 : 0.6
        }}
      >
        Analyze
      </button>
    </div>
  );
};

export default ScanPage;
