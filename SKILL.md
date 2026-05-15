# Darkom Débarras — Instructions de l'agent

## Stack
- **Vite 8** + **React 19** — SPA, pas Next.js
- **Tailwind CSS v4** — `@tailwindcss/vite`, pas de `tailwind.config.ts`
- **react-router-dom v7** — routes : `/`, `/services`, `/realisations`, `/tarifs`, `/a-propos`, `/contact`, `/faq`
- **EmailJS** — formulaire de contact côté client
- **TypeScript strict**
- Déploiement **Vercel**

## Structure
```
src/
├── components/     # Header, Footer, Button, ScrollToTop
├── pages/          # Home, Services, Realisations, Tarifs, APropos, Contact, FAQ
├── App.tsx         # Routes react-router-dom
├── main.tsx        # Entry point
└── index.css       # Styles globaux Tailwind
```

## Conventions
- Composants dans `src/components/`, pages dans `src/pages/`
- Classes Tailwind : `bg-surface`, `text-primary`, `text-muted` (design tokens customs)
- Pas de chargement de police externe (police système)
- Navigation avec `react-router-dom` (`<Link>`, `<NavLink>`)
- Pas de SSR, pas d'API backend — site statique avec EmailJS pour le contact
- Thème sombre avec accents orange (#dc843a gamme)
