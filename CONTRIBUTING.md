# Contribuer à Darkom Débarras

## Setup

```bash
git clone https://github.com/JAME-cyber/darkom-debarras.git
cd darkom-debarras
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## Stack

- **Frontend**: Vite 8 + React 19 + TypeScript (strict)
- **Style**: Tailwind CSS v4.2.2
- **Déploiement**: Vercel (automatique sur push master)

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build:client` | Build client uniquement |
| `npm run lint` | Vérification ESLint |
| `npx tsc -b` | Vérification TypeScript |
| `npm run test:e2e` | Tests E2E Playwright |

## Conventions de code

### TypeScript
- Mode strict activé (pas de `as any`, pas de `@ts-ignore`)
- Toutes les erreurs de type doivent être corrigées

### CSS
- Utiliser les classes Tailwind (utility-first)
- Les resets globaux vont dans `@layer base` dans `src/index.css`
- Tokens de design dans `src/index.css` : `primary`, `accent`, `surface`, `muted`

### Composants
- Composants fonctionnels avec hooks
- Pas de class components
- Fichiers dans `src/components/`
- Pages dans `src/pages/`

### Images
- Utiliser uniquement Pexels (gratuit, sans watermark, usage commercial OK)
- Pas d'images Unsplash

### Langue
- **UI**: français
- **Code**: anglais

## Structure du projet

```
src/
  pages/          # 7 pages (Home, Services, Realisations, Tarifs, Contact, FAQ, APropos)
  components/     # Composants réutilisables (Header, Hero, Button, Footer, etc.)
  hooks/          # Hooks custom (useSEO)
  index.css       # Tokens + resets globaux
tests/            # Tests E2E Playwright
```

## Git

- Branche depuis `master`
- Messages de commit en français
- Pas de commit sans demande explicite
- Pull requests bienvenues

## Deployment

Automatique via Vercel sur push à `master`. Le build utilise `npm run build:client`.
