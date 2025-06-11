import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleScan = () => {
    navigate('/result');
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