import React from 'react';
import { Link } from 'react-router-dom';

const result = JSON.parse(localStorage.getItem("scanResult"));

return (
  <div className="p-8 max-w-xl mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4">Scan Result</h2>
    <p className="mb-4 text-lg">🧠 {result.condition}</p>
    <p className="mb-2">Confidence: {(result.confidence * 100).toFixed(1)}%</p>
    <p className="mb-4">{result.recommendation}</p>
    <Link to="/">
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Back to Home
      </button>
    </Link>
  </div>
);

export default ResultPage;
