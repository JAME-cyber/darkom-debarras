import { Link } from 'react-router-dom';
import logoFooter from '../assets/footer.png';
import { useLang } from '../i18n/LanguageContext';
import { uiContent } from '../content/ui';

export default function Footer() {
  const { lang, prefix } = useLang();
  const t = uiContent[lang].footer;

  const link = (to: string) => `${prefix}${to === '/' ? '/' : to}`;

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to={prefix || '/'} className="inline-block mb-4" aria-label="Darkom Debarras">
              <div className="bg-white rounded-xl px-4 py-2 inline-flex flex-col items-center shadow-md overflow-hidden w-[200px]">
                <img
                  src={logoFooter}
                  alt="Logo Darkom Debarras"
                  loading="lazy"
                  className="h-[70px] w-auto object-contain"
                />
                <p className="font-bold text-primary text-center mt-1 text-[8px] whitespace-normal">
                  {uiContent[lang].header.tagline}
                </p>
              </div>
            </Link>
            <p className="text-white/70 text-sm">{t.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">{t.servicesTitle}</h3>
            <ul className="space-y-2">
              {t.services.map((s) => (
                <li key={s.label}>
                  <Link to={link(s.to)} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">{t.navTitle}</h3>
            <ul className="space-y-2">
              {t.nav.map((s) => (
                <li key={s.label}>
                  <Link to={link(s.to)} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">{t.contactTitle}</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{t.location1}</li>
              <li>{t.location2}</li>
              <li>{t.intervention}</li>
              <li className="pt-2">
                <a href="tel:+336****7111" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  06 79 44 71 11
                </a>
              </li>
              <li>
                <a href="tel:+336****8626" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  06 86 95 86 26
                </a>
              </li>
              <li>
                <a href="mailto:darkom-debarras@hotmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  darkom-debarras@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-white/40">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to={link('/mentions-legales')} className="text-white/40 hover:text-accent transition-colors">{t.legal}</Link>
            <Link to={link('/politique-de-confidentialite')} className="text-white/40 hover:text-accent transition-colors">{t.privacy}</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Darkom-Debarras. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
