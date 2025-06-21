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
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Loading result...</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '2rem', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: '#006E3C' }}>Scan Result</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Here is your preliminary analysis.
      </p>

      <div style={{ backgroundColor: '#f0fff3', padding: '1rem', borderRadius: '8px', border: '1px solid #c5e7d1' }}>
        <p><strong>Condition:</strong> {result.condition}</p>
        <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
        <p><strong>Advice:</strong> {result.recommendation}</p>
      </div>

      {result.gradcam ? (
        <>
          <h3 style={{ marginTop: '2rem', color: '#444' }}>Explainability (Grad-CAM)</h3>
          <img
            src={`data:image/png;base64,${result.gradcam}`}
            alt="Grad-CAM Heatmap"
            style={{ width: '100%', maxWidth: '400px', marginTop: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </>
      ) : (
        <p style={{ color: '#999', marginTop: '2rem' }}>No Grad-CAM image available.</p>
      )}

      <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#777' }}>
        📢 Disclaimer: This tool does not provide medical advice. Always consult a dermatologist.
      </p>
    </div>
  );
};

export default ResultPage;
