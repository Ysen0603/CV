import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

function Features() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Fonctionnalités
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Analyse IA avancée" 
            description="Notre IA analyse en profondeur les CV et les offres d'emploi pour trouver les meilleures correspondances."
          />
          <FeatureCard 
            title="Matching précis" 
            description="Obtenez des correspondances précises entre les compétences des candidats et les exigences des postes."
          />
          <FeatureCard 
            title="Gain de temps" 
            description="Réduisez considérablement le temps de recrutement en automatisant le processus de présélection."
          />
          <FeatureCard 
            title="Analyse sémantique" 
            description="Notre IA comprend le contexte et les nuances du langage utilisé dans les CV et les offres d'emploi."
          />
          <FeatureCard 
            title="Tableau de bord intuitif" 
            description="Visualisez facilement les résultats de matching et gérez vos candidats depuis une interface conviviale."
          />
          <FeatureCard 
            title="Intégration facile" 
            description="Intégrez facilement notre solution à vos outils de recrutement existants."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Features;