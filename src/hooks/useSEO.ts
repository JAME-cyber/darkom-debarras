import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  /** Path without language prefix, e.g. '/tarifs'. Hreflang pairs are derived from it. */
  canonical?: string;
  ogImage?: string;
  /** true = sort la page de l'index des moteurs (meta robots noindex). */
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE = '/favicon.png';
const BASE_URL = 'https://darkom-debarras.fr';

/**
 * Collecteur SEO pour le pré-rendu statique (SSR). `useEffect` ne s'exécute
 * pas côté serveur : on capture donc les métadonnées pendant le rendu pour
 * que scripts/prerender.mjs puisse les injecter dans le HTML de chaque page
 * (title, description, canonical, hreflang, og:*). Ignoré côté navigateur.
 */
export interface SSRSeo {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage: string;
  lang: 'fr' | 'en';
  hreflang: { lang: string; href: string }[];
  noindex?: boolean;
}
export const SSR_SEO: { current: SSRSeo | null } = { current: null };

export default function useSEO({ title, description, canonical, ogImage, noindex }: SEOProps) {
  const { lang, prefix } = useLang();

  // Capture SSR (pré-rendu) : pas de DOM disponible.
  if (typeof document === 'undefined') {
    const canonicalUrl = canonical ? `${BASE_URL}${prefix}${canonical}` : undefined;
    const hreflang: { lang: string; href: string }[] = [];
    if (canonical) {
      hreflang.push(
        { lang: 'fr', href: `${BASE_URL}${canonical === '/' ? '/' : canonical}` },
        { lang: 'en', href: `${BASE_URL}/en${canonical === '/' ? '' : canonical}` },
        { lang: 'x-default', href: `${BASE_URL}${canonical === '/' ? '/' : canonical}` }
      );
    }
    SSR_SEO.current = { title, description, canonicalUrl, ogImage: ogImage || DEFAULT_OG_IMAGE, lang, hreflang, noindex };
  }

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage || DEFAULT_OG_IMAGE, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', lang === 'en' ? 'en_GB' : 'fr_FR', true);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical ? `${BASE_URL}${prefix}${canonical}` : window.location.href;

    // Hreflang alternates (fr = root, en = /en, x-default = fr)
    const hreflangEntries: { lang: string; href: string }[] = [];
    if (canonical) {
      hreflangEntries.push(
        { lang: 'fr', href: `${BASE_URL}${canonical === '/' ? '/' : canonical}` },
        { lang: 'en', href: `${BASE_URL}/en${canonical === '/' ? '' : canonical}` },
        { lang: 'x-default', href: `${BASE_URL}${canonical === '/' ? '/' : canonical}` }
      );
    }
    // Remove stale hreflang links then add current ones
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    for (const entry of hreflangEntries) {
      const alt = document.createElement('link');
      alt.rel = 'alternate';
      alt.hreflang = entry.lang;
      alt.href = entry.href;
      document.head.appendChild(alt);
    }
  }, [title, description, canonical, ogImage, lang, prefix]);
}
