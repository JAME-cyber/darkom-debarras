import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import logoHeader from '../assets/header.png';
import { useLang } from '../i18n/LanguageContext';
import { uiContent } from '../content/ui';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { lang, prefix } = useLang();
  const t = uiContent[lang];

  const otherLang = lang === 'fr' ? 'en' : 'fr';
  const otherPrefix = otherLang === 'en' ? '/en' : '';
  const switchHref = `${otherPrefix}${location.pathname.slice(prefix.length) || '/'}`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <Link to={prefix || '/'} className="flex items-center" aria-label={t.header.ariaHome}>
            <div className="bg-white rounded-md px-2 py-1 shadow-sm flex flex-col items-center justify-center max-w-[150px] overflow-hidden">
              <img
                src={logoHeader}
                alt="Logo Darkom Debarras"
                className="h-[35px] w-auto object-contain"
              />
              <p className="hidden md:block font-bold text-primary text-center leading-none mt-1 text-[6px] whitespace-normal w-full">
                {t.header.tagline}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {t.header.nav.map((link) => {
                const to = `${prefix}${link.to === '/' ? '/' : link.to}`;
                return (
                  <Link
                    key={link.to}
                    to={to}
                    className={`text-sm font-medium transition-colors hover:text-white/80 ${
                      location.pathname === to ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link
                to={switchHref}
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors border border-white/30 rounded-md px-2 py-1"
                aria-label={otherLang === 'en' ? 'Switch to English' : 'Passer en français'}
                hrefLang={otherLang}
              >
                {otherLang.toUpperCase()}
              </Link>
              <Button to={`${prefix}/contact`}>{t.header.cta}</Button>
            </div>

            <a
              href="tel:+336****7111"
              className="md:hidden flex items-center gap-1.5 text-accent hover:text-accent-light transition-colors"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-semibold">06 79 44 71 11</span>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            {t.header.nav.map((link) => {
              const to = `${prefix}${link.to === '/' ? '/' : link.to}`;
              return (
                <Link
                  key={link.to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === to ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to={switchHref}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-accent"
            >
              {otherLang === 'en' ? 'English' : 'Français'}
            </Link>
            <div className="mt-4">
              <Button to={`${prefix}/contact`} className="w-full">{t.header.cta}</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
