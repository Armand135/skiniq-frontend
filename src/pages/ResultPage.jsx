import React, { useEffect, useState } from 'react';

const ResultPage = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("scanResult");
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  if (!result) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading result...</div>;
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Scan Result</h2>
      <p><strong>Predicted Condition:</strong> {result.condition}</p>
      <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%</p>
      <p><strong>Recommendation:</strong> {result.recommendation}</p>

      <h3>Explainability: Grad-CAM</h3>
      {result.gradcam ? (
        <img
          src={`data:image/png;base64,${result.gradcam}`}
          alt="Grad-CAM Heatmap"
          style={{ maxWidth: '100%', border: '1px solid #ccc', marginTop: '1rem' }}
        />
      ) : (
        <p>No Grad-CAM image available.</p>
      )}
    </div>
  );
};

export default ResultPage;
