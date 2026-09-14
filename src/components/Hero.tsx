import Button from './Button';
import heroImage from '../assets/hero.png';
import { useLang } from '../i18n/LanguageContext';

const content = {
  fr: {
    badge: 'Intervention rapide 48-72h',
    titleA: 'Libérez votre espace,',
    titleB: ' simplifiez votre vie',
    text: 'Votre partenaire de confiance pour le débarras de votre maison, appartement ou local professionnel en Haute-Savoie. Service premium, écoresponsable et rapide.',
    ctaPrimary: 'Demander un devis gratuit',
    ctaSecondary: 'Voir nos services',
    stat1: { value: 'RC Pro', label: 'Assurée & garantit' },
    stat2: { value: '25', label: 'Clients satisfaits' },
    stat3: { value: '100%', label: 'Écoresponsable' },
    trust1: 'Équipe vérifiée',
    trust2: 'Devis transparent',
    trust3: 'Intervention 48-72h',
    imageAlt: 'Professionnels du débarras avec cartons de déménagement',
    cardTitle: 'Tri & Recyclage',
    cardText: 'Écoresponsable',
  },
  en: {
    badge: 'Fast response 48-72h',
    titleA: 'Free up your space,',
    titleB: ' simplify your life',
    text: 'Your trusted partner for house, flat or commercial property clearance in Haute-Savoie, near Geneva. Premium, eco-friendly and fast service.',
    ctaPrimary: 'Request a free quote',
    ctaSecondary: 'View our services',
    stat1: { value: 'RC Pro', label: 'Fully insured' },
    stat2: { value: '25', label: 'Happy clients' },
    stat3: { value: '100%', label: 'Eco-friendly' },
    trust1: 'Vetted team',
    trust2: 'Transparent quotes',
    trust3: 'Response 48-72h',
    imageAlt: 'Clearance professionals with moving boxes',
    cardTitle: 'Sorting & Recycling',
    cardText: 'Eco-friendly',
  },
};

export default function Hero() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center bg-gradient-to-br from-surface to-surface-dark pt-20 sm:pt-24 md:pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-light/10 text-primary-light px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              {t.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4 sm:mb-6">
              {t.titleA}
              <span className="text-primary-light">{t.titleB}</span>
            </h1>

            <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8 max-w-xl">
              {t.text}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button to={`${prefix}/contact`} variant="primary">
                {t.ctaPrimary}
              </Button>
              <Button to={`${prefix}/services`} variant="outline">
                {t.ctaSecondary}
              </Button>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-10 border-t border-gray-200">
              <div className="flex-1 min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{t.stat1.value}</p>
                <p className="text-xs sm:text-sm text-muted">{t.stat1.label}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{t.stat2.value}</p>
                <p className="text-xs sm:text-sm text-muted">{t.stat2.label}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-accent">{t.stat3.value}</p>
                <p className="text-xs sm:text-sm text-muted">{t.stat3.label}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <svg aria-hidden="true" className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {t.trust1}
              </span>
              <span className="flex items-center gap-1.5">
                <svg aria-hidden="true" className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.trust2}
              </span>
              <span className="flex items-center gap-1.5">
                <svg aria-hidden="true" className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t.trust3}
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src={heroImage}
              alt={t.imageAlt}
              className="aspect-square object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-xl p-3 sm:p-4 flex items-center gap-3 max-w-[200px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-primary text-sm">{t.cardTitle}</p>
                <p className="text-xs text-muted">{t.cardText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
