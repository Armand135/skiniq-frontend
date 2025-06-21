import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleScan = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("https://skiniq-backend-deploy.onrender.com/analyze-skin/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Scan failed");

      const result = await response.json();
      localStorage.setItem("scanResult", JSON.stringify(result));
      navigate('/result');
    } catch (err) {
      alert("Error analyzing image.");
    }
  };

  return (
    <div className="container">
      <h2>Upload a Skin Image</h2>
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <button className="cta-button" onClick={handleScan} disabled={!image}>Analyze</button>
    </div>
  );
};

export default ScanPage;