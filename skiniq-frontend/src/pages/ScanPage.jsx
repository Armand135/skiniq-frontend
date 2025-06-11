import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

const ScanPage = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleScan = () => {
    // Placeholder logic
    navigate('/result');
  };

  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Upload a Skin Image</h2>
      <ImageUpload image={image} setImage={setImage} />
      <button
        onClick={handleScan}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        disabled={!image}
      >
        Analyze
      </button>
    </div>
  );
};

export default ScanPage;