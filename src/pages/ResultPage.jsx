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
      <div style={{ textAlign: 'center', padding: '3rem', fontFamily: 'Segoe UI' }}>
        <h2 style={{ color: '#006E3C' }}>Loading scan results...</h2>
        <p>Please wait a moment while we analyze your image.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '2rem', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#006E3C' }}>🧬 Scan Result</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Here's what we found based on your photo:
      </p>

      {/* Diagnosis Summary */}
      <div style={{
        backgroundColor: '#f0fff3',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid #c5e7d1',
        fontSize: '1.05rem',
        lineHeight: '1.6'
      }}>
        <p><strong>🔍 Condition:</strong> {result.condition}</p>
        <p><strong>📊 Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
        <p><strong>🩺 Advice:</strong> {result.recommendation}</p>
      </div>

      {/* Grad-CAM Visualization */}
      {result.gradcam ? (
        <>
          <h3 style={{ marginTop: '2.5rem', color: '#444' }}>🖼 Explainability: Grad-CAM</h3>
          <img
            src={`data:image/png;base64,${result.gradcam}`}
            alt="Grad-CAM Heatmap"
            style={{
              width: '100%',
              maxWidth: '400px',
              marginTop: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
        </>
      ) : (
        <p style={{ color: '#999', marginTop: '2rem' }}>❌ No Grad-CAM heatmap available.</p>
      )}

      {/* Legal Disclaimer */}
      <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#777' }}>
        ⚠️ <strong>Disclaimer:</strong> SkinIQ is not a medical device. Please consult a certified dermatologist for any diagnosis or treatment.
      </p>
    </div>
  );
};

export default ResultPage;
