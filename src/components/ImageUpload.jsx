import React from 'react';

const ImageUpload = ({ image, setImage }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file); // ✅ critical: this sets a real File object
    } else {
      alert("Please upload a valid image file.");
      setImage(null);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && <p>Selected: {image.name}</p>}
    </div>
  );
};

export default ImageUpload;
