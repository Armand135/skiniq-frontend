import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="p-8 max-w-xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">SkinIQ</h1>
    <p className="text-lg mb-6">Scan your skin in seconds with AI-powered precision.</p>
    <Link to="/scan">
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Try Skin Scan
      </button>
    </Link>
  </div>
);

export default HomePage;