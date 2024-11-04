import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-opacity-30 bg-black backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">CV Matcher IA</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-300 hover:text-pink-400 transition duration-300">Accueil</Link></li>
            <li><Link to="/ai-match" className="text-gray-300 hover:text-pink-400 transition duration-300">Matcher CV</Link></li>
            <li><Link to="/features" className="text-gray-300 hover:text-pink-400 transition duration-300">Fonctionnalités</Link></li>
            <li><Link to="/pricing" className="text-gray-300 hover:text-pink-400 transition duration-300">Tarifs</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-pink-400 transition duration-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
