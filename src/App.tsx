import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Tarifs from './pages/Tarifs';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Button from './components/Button';

function NotFound() {
  return (
    <main className="pt-16 sm:pt-20 md:pt-28 flex-1 flex items-center justify-center bg-surface">
      <div className="text-center px-4 py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted mb-8">Page non trouvée</p>
        <Button to="/">Retour à l'accueil</Button>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
