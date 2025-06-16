import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleScan = async () => {
    if (!image) return;

    const formData = new FormData();

    // Convert image URL (object URL) to blob before sending
    const response = await fetch(image);
    const blob = await response.blob();
    formData.append("file", blob, "skin_image.jpg");

    try {
      const apiResponse = await fetch("https://skiniq-backend-deploy.onrender.com/", {
        method: "POST",
        body: formData,
      });

      const result = await apiResponse.json();

      // Save result to localStorage to show it on ResultPage
      localStorage.setItem("scanResult", JSON.stringify(result));

      navigate('/result');
    } catch (error) {
      console.error("Scan failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Upload a Skin Image</h2>
      <ImageUpload image={image} setImage={setImage} />
      <button onClick={handleScan} disabled={!image}
        style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem', background: '#28a745', color: 'white', borderRadius: '5px' }}>
        Analyze
      </button>
    </div>
  );
};

export default ScanPage;
