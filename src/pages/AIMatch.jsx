import React, { useState, useRef } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AIMatch() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('cv', file);
    formData.append('job_description', jobDescription);

    try {
      const response = await axios.post('/match', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors du matching:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 to-purple-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Matcher votre CV
        </h1>
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold mb-6 text-pink-400">Téléchargez votre CV</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="cv-upload" className="block text-sm font-medium text-gray-300 mb-2">
                    Choisissez un fichier (PDF ou DOCX)
                  </label>
                  <input
                    type="file"
                    id="cv-upload"
                    ref={fileInputRef}
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 transition duration-300"
                    >
                      {file ? file.name : 'Choisir un fichier'}
                    </button>
                    {file && (
                      <button
                        type="button"
                        onClick={() => setFile(null)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 focus:outline-none"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="job-description" className="block text-sm font-medium text-gray-300 mb-2">
                    Description du poste
                  </label>
                  <textarea
                    id="job-description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Analyse en cours...' : 'Lancer l\'analyse'}
                </button>
              </form>
            </div>
            <div className="md:w-1/2 bg-purple-900 bg-opacity-50 p-8 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-6 text-pink-400">Résultats de l'analyse</h2>
              <div className="flex-grow overflow-y-auto" style={{ maxHeight: 'calc(100vh - 24rem)' }}>
                {result ? (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-300">Score de correspondance</h3>
                      <div className="text-4xl font-bold text-pink-400">{result.score}%</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-300">Recommandations</h3>
                      <p className="text-gray-300">{result.details}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-300">Téléchargez votre CV et lancez l'analyse pour voir les résultats ici.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AIMatch;
