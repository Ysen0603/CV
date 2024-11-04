import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleTryFreeClick = () => {
        navigate('/ai-match');
    };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">CV Matcher IA</h1>
            <p className="text-xl mb-8 text-gray-300">Trouvez le candidat parfait en un clic grâce à l'IA</p>
            <button 
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-pink-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
              onClick={handleTryFreeClick}
            >
              Essayer gratuitement
            </button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">Nos fonctionnalités</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Analyse IA" 
                description="Notre IA analyse en profondeur les CV et les offres d'emploi"
              />
              <FeatureCard 
                title="Matching précis" 
                description="Obtenez des correspondances précises entre les compétences et les exigences"
              />
              <FeatureCard 
                title="Gain de temps" 
                description="Réduisez considérablement le temps de recrutement"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
