import React from 'react';

function Footer() {
  return (
    <footer className="bg-opacity-30 bg-black backdrop-filter backdrop-blur-lg text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">CV Matcher IA</h3>
            <p className="text-sm">Révolutionnez votre processus de recrutement avec l'IA</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Liens rapides</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition duration-300">Accueil</a></li>
              <li><a href="#" className="hover:text-pink-400 transition duration-300">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-pink-400 transition duration-300">Tarifs</a></li>
              <li><a href="#" className="hover:text-pink-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Nous contacter</h3>
            <p className="text-sm">Email: contact@cvmatcher.com</p>
            <p className="text-sm">Téléphone: +33 1 23 45 67 89</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 CV Matcher IA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
