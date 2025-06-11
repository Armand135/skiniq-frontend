import React from 'react';

const ImageUpload = ({ image, setImage }) => {
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="mb-4">
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && (
        <div className="mt-4">
          <img src={image} alt="Skin preview" className="w-64 h-64 object-cover mx-auto rounded" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;