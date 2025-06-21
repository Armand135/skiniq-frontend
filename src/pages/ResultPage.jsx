import React, { useEffect, useState } from 'react';

const ResultPage = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("scanResult");
    if (stored) setResult(JSON.parse(stored));
  }, []);

  if (!result) return <div className="container">Loading result...</div>;

  return (
    <div className="container">
      <h2>Scan Result</h2>
      <p><strong>Condition:</strong> {result.condition}</p>
      <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
      <img src={`data:image/png;base64,${result.gradcam}`} alt="Grad-CAM" className="gradcam-image" />
      <p className="recommendation">{result.recommendation}</p>
    </div>
  );
};

export default ResultPage;