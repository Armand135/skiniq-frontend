import React from 'react';
import { Link } from 'react-router-dom';

const ResultPage = () => (
  <div className="p-8 max-w-xl mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4">Scan Result</h2>
    <p className="mb-4 text-lg">⚠️ Moderate Risk</p>
    <p className="mb-4">We recommend consulting a dermatologist for further analysis.</p>
    <Link to="/">
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Back to Home
      </button>
    </Link>
  </div>
);

export default ResultPage;