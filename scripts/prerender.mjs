// Script de pré-rendu statique : génère un fichier HTML par route dans dist/.
// Lancé automatiquement à la fin de `npm run build` (voir package.json).
// Lit le template dist/index.html, remplace <!--app-html--> par le rendu SSR,
// et écrit un index.html par route (et un 404.html dédié).
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');
const ssrEntryPath = path.join(distDir, 'ssr/entry-server.js');

// Routes à pré-rendre. À maintenir à jour quand on ajoute/supprime une page.
const routes = [
  '/',
  '/services',
  '/realisations',
  '/tarifs',
  '/a-propos',
  '/contact',
  '/faq',
  '/guide-succession',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/404',
  '/en',
  '/en/services',
  '/en/realisations',
  '/en/tarifs',
  '/en/a-propos',
  '/en/contact',
  '/en/faq',
  '/en/guide-succession',
  '/en/mentions-legales',
  '/en/politique-de-confidentialite',
];

const template = await readFile(templatePath, 'utf-8');
const placeholder = '<!--app-html-->';
if (!template.includes(placeholder)) {
  throw new Error(
    `Le template ${templatePath} doit contenir ${placeholder} (placeholder de pré-rendu).`
  );
}

const ssrModule = await import(pathToFileURL(ssrEntryPath).href);
const render = ssrModule.render;
if (typeof render !== 'function') {
  throw new Error(`L'entrée SSR ${ssrEntryPath} n'exporte pas de fonction render(url).`);
}

async function renderRoute(url) {
  const { appHtml, seo } = await render(url);
  let html = template.replace(placeholder, appHtml);

  // Injection des métadonnées SEO capturées pendant le rendu SSR
  // (title, description, canonical, hreflang, og:*) — sans cela toutes les
  // pages pré-rendues partagent le head générique du template et Google
  // n'a ni canonical ni description distincts par page.
  if (seo) {
    const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    const title = esc(seo.title);
    const description = esc(seo.description);

    // 1. Remplacer le title et la description génériques du template.
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    html = html.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${description}"`
    );

    // 2. Injecter canonical + hreflang + og:* juste après le title.
    const head = [];
    if (seo.canonicalUrl) {
      head.push(`<link rel="canonical" href="${esc(seo.canonicalUrl)}" />`);
    }
    for (const alt of seo.hreflang) {
      head.push(`<link rel="alternate" hreflang="${esc(alt.lang)}" href="${esc(alt.href)}" />`);
    }
    head.push(`<meta property="og:title" content="${title}" />`);
    head.push(`<meta property="og:description" content="${description}" />`);
    head.push(`<meta property="og:image" content="${esc(seo.ogImage)}" />`);
    head.push(`<meta property="og:type" content="website" />`);
    head.push(`<meta property="og:locale" content="${seo.lang === 'en' ? 'en_GB' : 'fr_FR'}" />`);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>\n    ${head.join('\n    ')}`);
  }

  let outputRelative;
  if (url === '/') {
    outputRelative = 'index.html';
  } else if (url === '/en') {
    outputRelative = 'en/index.html';
  } else if (url === '/404') {
    outputRelative = '404.html';
  } else {
    outputRelative = path.join(url.slice(1), 'index.html');
  }

  const outputPath = path.join(distDir, outputRelative);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, 'utf-8');
  console.log(`  ✔️  ${url} → ${outputRelative}`);
}

console.log('🛠  Pré-rendu des routes...');
for (const route of routes) {
  await renderRoute(route);
}
console.log('✅ Pré-rendu terminé : ' + routes.length + ' pages générées.');
