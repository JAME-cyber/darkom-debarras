import { Routes, Route } from 'react-router-dom';
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
import GuideSuccession from './pages/GuideSuccession';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Button from './components/Button';
import { LanguageProvider, useLang } from './i18n/LanguageContext';
import { uiContent } from './content/ui';

function NotFound() {
  const { lang, prefix } = useLang();
  const t = uiContent[lang].common;
  return (
    <main className="pt-16 sm:pt-20 md:pt-28 flex-1 flex items-center justify-center bg-surface">
      <div className="text-center px-4 py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted mb-8">{t.notFound}</p>
        <Button to={prefix || '/'}>{t.backHome}</Button>
      </div>
    </main>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          {/* French (default) */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/guide-succession" element={<GuideSuccession />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* English */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/services" element={<Services />} />
          <Route path="/en/realisations" element={<Realisations />} />
          <Route path="/en/tarifs" element={<Tarifs />} />
          <Route path="/en/a-propos" element={<APropos />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/faq" element={<FAQ />} />
          <Route path="/en/guide-succession" element={<GuideSuccession />} />
          <Route path="/en/mentions-legales" element={<MentionsLegales />} />
          <Route path="/en/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  );
}

export default App;
