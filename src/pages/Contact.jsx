import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Contactez-nous
        </h1>
        <div className="max-w-2xl mx-auto bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">Nom</label>
              <input type="text" id="name" className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition duration-300">
              Envoyer
            </button>
          </form>
        </div>
        <div className="mt-12 text-center text-gray-300">
          <p className="mb-2">Vous avez des questions sur notre solution de matching CV ?</p>
          <p className="mb-2">N'hésitez pas à nous contacter :</p>
          <p className="font-semibold">Email : contact@cvmatcher.com</p>
          <p className="font-semibold">Téléphone : +33 1 23 45 67 89</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;