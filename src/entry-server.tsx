import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

// Point d'entrée SSR : appelé par scripts/prerender.mjs pour générer le HTML
// statique de chaque route. Le router est StaticRouter (sans historique navigateur).
export function render(url: string) {
  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  return { appHtml };
}
