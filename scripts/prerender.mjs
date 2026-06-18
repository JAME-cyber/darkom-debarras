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
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/404',
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
  const { appHtml } = await render(url);
  const html = template.replace(placeholder, appHtml);

  let outputRelative;
  if (url === '/') {
    outputRelative = 'index.html';
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
