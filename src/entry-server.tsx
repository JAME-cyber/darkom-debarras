import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { SSR_SEO } from './hooks/useSEO';

// Point d'entrée SSR : appelé par scripts/prerender.mjs pour générer le HTML
// statique de chaque route. Le router est StaticRouter (sans historique navigateur).
export function render(url: string) {
  SSR_SEO.current = null; // reset entre chaque route
  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  return { appHtml, seo: SSR_SEO.current };
}
