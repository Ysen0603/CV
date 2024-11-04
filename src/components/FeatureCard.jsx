import React from 'react';

function FeatureCard({ title, description }) {
  return (
    <div className="bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold mb-3 text-pink-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default FeatureCard;
