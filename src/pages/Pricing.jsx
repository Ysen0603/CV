import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PricingCard({ title, price, features }) {
  return (
    <div className="bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 flex flex-col">
      <h3 className="text-2xl font-semibold mb-4 text-pink-400">{title}</h3>
      <p className="text-4xl font-bold mb-6 text-purple-300">{price}<span className="text-xl text-gray-400">/mois</span></p>
      <ul className="text-gray-300 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition duration-300">
        Choisir ce plan
      </button>
    </div>
  );
}

function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Tarifs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Starter" 
            price="49€" 
            features={[
              "Jusqu'à 50 CV analysés par mois",
              "Matching de base",
              "Support par email"
            ]}
          />
          <PricingCard 
            title="Pro" 
            price="99€" 
            features={[
              "Jusqu'à 200 CV analysés par mois",
              "Matching avancé",
              "Analyse sémantique",
              "Support prioritaire"
            ]}
          />
          <PricingCard 
            title="Enterprise" 
            price="Sur mesure" 
            features={[
              "CV illimités",
              "Fonctionnalités personnalisées",
              "Intégration API",
              "Support dédié"
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;