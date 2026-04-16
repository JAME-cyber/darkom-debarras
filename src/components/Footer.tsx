import { Link } from 'react-router-dom';
import logoFooter from '../assets/footer.png';

const services = [
  { to: '/services', label: 'Débarras maison' },
  { to: '/services', label: 'Vide cave/grenier' },
  { to: '/services', label: 'Successions' },
  { to: '/services', label: 'Nettoyage après sinistre' },
];

const quickLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/faq', label: 'FAQ' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#143d24] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4" aria-label="Darkom Debarras – Accueil">
                <div className="bg-white rounded-xl px-4 py-2 inline-flex flex-col items-center shadow-md overflow-hidden max-w-[200px]">
                <img
                  src={logoFooter}
                  alt="Logo Darkom Debarras"
                  style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
                />
                <p className="font-bold text-[#143d24] text-center mt-1" style={{ fontSize: '8px', whiteSpace: 'normal' }}>
                  SOLUTIONS DE DÉBARRAS ÉCO-RESPONSABLES
                </p>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Libérez votre espace, simplifiez votre vie. Professionnels du débarras en Haute-Savoie.
            </p>
            <div className="flex gap-4">
              <a href="tel:+33612345678" className="text-white/60 hover:text-[#a0ab37] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a href="mailto:contact@darkom-debarras.fr" className="text-white/60 hover:text-[#a0ab37] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/60 hover:text-[#a0ab37] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/60 hover:text-[#a0ab37] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>74250 Fillinges</li>
              <li>Haute-Savoie</li>
              <li>Intervention 48-72h</li>
              <li className="pt-2">
                <a href="tel:+33612345678" className="hover:text-[#a0ab37] transition-colors">
                  06 XX XX XX XX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Darkom-Debarras. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
