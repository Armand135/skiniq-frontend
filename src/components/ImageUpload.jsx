import React from 'react';

const ImageUpload = ({ image, setImage, setFile }) => {
  const handleChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
      setFile(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && <div style={{ marginTop: '1rem' }}><img src={image} alt="Skin" style={{ maxWidth: '100%', height: 'auto' }} /></div>}
    </div>
  );
};
export default ImageUpload;