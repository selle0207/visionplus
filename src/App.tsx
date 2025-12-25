import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Secteurs from './components/Secteurs';
import Services from './components/Services';
import Valeurs from './components/Valeurs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Vision Plus Communications - Agence de Communication Stratégique';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="pt-24">
        {activeSection === 'accueil' && <Accueil onNavigate={handleNavigate} />}
        {activeSection === 'apropos' && <APropos />}
        {activeSection === 'secteurs' && <Secteurs />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'valeurs' && <Valeurs />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
