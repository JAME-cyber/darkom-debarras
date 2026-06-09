import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const DEFAULT_OG_IMAGE = '/favicon.png';
const BASE_URL = 'https://darkom-debarras.fr';

export default function useSEO({ title, description, canonical, ogImage }: SEOProps) {
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
    setMeta('og:locale', 'fr_FR', true);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical ? `${BASE_URL}${canonical}` : window.location.href;
  }, [title, description, canonical, ogImage]);
}
