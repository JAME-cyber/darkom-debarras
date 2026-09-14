import type { Lang } from '../i18n/LanguageContext';

/** Common UI strings shared across pages/components. */
export interface UIContent {
  header: {
    nav: { to: string; label: string }[];
    cta: string;
    tagline: string;
    ariaHome: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    services: { to: string; label: string }[];
    navTitle: string;
    nav: { to: string; label: string }[];
    contactTitle: string;
    location1: string;
    location2: string;
    intervention: string;
    legal: string;
    privacy: string;
    rights: string;
  };
  common: {
    quoteRequest: string;
    notFound: string;
    backHome: string;
  };
}

export const uiContent: Record<Lang, UIContent> = {
  fr: {
    header: {
      nav: [
        { to: '/', label: 'Accueil' },
        { to: '/services', label: 'Services' },
        { to: '/realisations', label: 'Réalisations' },
        { to: '/tarifs', label: 'Tarifs' },
        { to: '/faq', label: 'FAQ' },
        { to: '/a-propos', label: 'À propos' },
        { to: '/contact', label: 'Contact' },
      ],
      cta: 'Devis gratuit',
      tagline: 'SOLUTIONS DE DÉBARRAS ÉCO-RESPONSABLES',
      ariaHome: 'Darkom Debarras - Accueil',
    },
    footer: {
      tagline: 'Libérez votre espace, simplifiez votre vie. Professionnels du débarras en Haute-Savoie.',
      servicesTitle: 'Services',
      services: [
        { to: '/services', label: 'Débarras maison' },
        { to: '/services', label: 'Vide cave/grenier' },
        { to: '/services', label: 'Successions' },
        { to: '/services', label: 'Nettoyage après sinistre' },
      ],
      navTitle: 'Navigation',
      nav: [
        { to: '/', label: 'Accueil' },
        { to: '/services', label: 'Services' },
        { to: '/realisations', label: 'Réalisations' },
        { to: '/tarifs', label: 'Tarifs' },
        { to: '/faq', label: 'FAQ' },
        { to: '/a-propos', label: 'À propos' },
        { to: '/contact', label: 'Contact' },
      ],
      contactTitle: 'Contact',
      location1: '74250 Fillinges',
      location2: 'Haute-Savoie',
      intervention: 'Intervention 48-72h',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      rights: 'Tous droits réservés.',
    },
    common: {
      quoteRequest: 'Demander un devis',
      notFound: 'Page non trouvée',
      backHome: "Retour à l'accueil",
    },
  },
  en: {
    header: {
      nav: [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Services' },
        { to: '/realisations', label: 'Our work' },
        { to: '/tarifs', label: 'Pricing' },
        { to: '/faq', label: 'FAQ' },
        { to: '/a-propos', label: 'About' },
        { to: '/contact', label: 'Contact' },
      ],
      cta: 'Free quote',
      tagline: 'ECO-FRIENDLY HOUSE CLEARANCE',
      ariaHome: 'Darkom Debarras - Home',
    },
    footer: {
      tagline: 'Free up your space, simplify your life. House clearance professionals in Haute-Savoie.',
      servicesTitle: 'Services',
      services: [
        { to: '/services', label: 'House clearance' },
        { to: '/services', label: 'Cellar & loft clearance' },
        { to: '/services', label: 'Estates & successions' },
        { to: '/services', label: 'Post-disaster clean-up' },
      ],
      navTitle: 'Navigation',
      nav: [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Services' },
        { to: '/realisations', label: 'Our work' },
        { to: '/tarifs', label: 'Pricing' },
        { to: '/faq', label: 'FAQ' },
        { to: '/a-propos', label: 'About' },
        { to: '/contact', label: 'Contact' },
      ],
      contactTitle: 'Contact',
      location1: '74250 Fillinges',
      location2: 'Haute-Savoie',
      intervention: 'Response within 48-72h',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      rights: 'All rights reserved.',
    },
    common: {
      quoteRequest: 'Request a quote',
      notFound: 'Page not found',
      backHome: 'Back to home',
    },
  },
};
