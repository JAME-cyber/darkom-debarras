import { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

export type Lang = 'fr' | 'en';

interface LanguageContextValue {
  lang: Lang;
  /** Prefixed path for the current language, e.g. '' (fr) or '/en' (en) */
  prefix: string;
}

const LanguageContext = createContext<LanguageContextValue>({ lang: 'fr', prefix: '' });

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}

/**
 * Derives the language from the current route: '/en/...' => 'en', otherwise 'fr'.
 * Works both client-side (BrowserRouter) and server-side (StaticRouter).
 */
export function detectLang(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

export function langPrefix(lang: Lang): string {
  return lang === 'en' ? '/en' : '';
}

/** Component providing the language context. Must be rendered INSIDE the Router. */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const lang = detectLang(location.pathname);
  return (
    <LanguageContext.Provider value={{ lang, prefix: langPrefix(lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}
