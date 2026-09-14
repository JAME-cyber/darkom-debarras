import useSEO from '../hooks/useSEO';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonial';
import InterventionMap from '../components/InterventionMap';
import Button from '../components/Button';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/LanguageContext';

const icons = {
  house: (
    <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  storage: (
    <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  estate: (
    <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

interface HomeService {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const servicesByLang: Record<Lang, HomeService[]> = {
  fr: [
    {
      icon: icons.house,
      title: 'Débarras maison/appartement',
      description: 'Nous vidons entièrement votre logement, du sol au plafond, en prenant soin de trier et valoriser vos biens.',
      features: ['Gestion complète du tri', 'Prise en charge des encombrants', 'Nettoyage final (sur demande)'],
    },
    {
      icon: icons.storage,
      title: 'Vide cave/grenier/garage',
      description: 'Récupérez vos espaces de rangement avec notre service rapide et efficace.',
      features: ['Intervention rapide', 'Tri et recyclage', 'Valorisation des biens'],
    },
    {
      icon: icons.estate,
      title: 'Successions & héritages',
      description: 'Nous accompagnons les familles dans le délicat processus de débarras après succession.',
      features: ['Approche respectueuse', 'Valorisation du patrimoine', 'Accompagnement complet'],
    },
  ],
  en: [
    {
      icon: icons.house,
      title: 'House & flat clearance',
      description: 'We clear your entire home from floor to ceiling, carefully sorting and recovering your belongings.',
      features: ['Full sorting service', 'Bulky item removal', 'Final clean (on request)'],
    },
    {
      icon: icons.storage,
      title: 'Cellar, loft & garage clearance',
      description: 'Reclaim your storage spaces with our fast, efficient service.',
      features: ['Fast response', 'Sorting & recycling', 'Item recovery'],
    },
    {
      icon: icons.estate,
      title: 'Estates & probate clearance',
      description: 'We support families through the delicate process of clearing a property after a bereavement or inheritance.',
      features: ['Respectful approach', 'Valuables recovery', 'Complete support'],
    },
  ],
};

const content = {
  fr: {
    seo: {
      title: 'Darkom-Debarras | Débarras professionnel en Haute-Savoie 74',
      description: 'Service de débarras professionnel en Haute-Savoie. Maison, appartement, cave, grenier, successions. Intervention rapide 48-72h. Devis gratuit et sans engagement.',
    },
    servicesTitle: 'Nos services',
    servicesSubtitle: 'Des solutions complètes pour tous vos besoins de débarras',
    allServices: 'Voir tous nos services',
    simBadge: 'Nouveau',
    simTitle: 'Estimez votre débarras en 30 secondes',
    simText: 'Utilisez notre simulateur interactif pour obtenir une estimation rapide et personnalisée de votre projet de débarras.',
    simFeatures: [
      'Répondez à quelques questions simples',
      'Obtenez une estimation instantanée',
      'Devis gratuit et sans engagement',
    ],
    simCta: 'Estimer mon débarras',
    simAlt: 'Cartons de déménagement pour estimation en ligne',
    ctaTitle: 'Prêt à libérer votre espace ?',
    ctaText: 'Obtenez votre devis gratuit sous 24h. Intervention rapide en 48-72h.',
    ctaQuote: 'Demander un devis gratuit',
    ctaPricing: 'Voir nos tarifs',
  },
  en: {
    seo: {
      title: 'Darkom-Debarras | Professional house clearance in Haute-Savoie 74',
      description: 'Professional house clearance in Haute-Savoie, near Geneva. Home, flat, cellar, loft, estates. Fast response within 48-72h. Free, no-obligation quote.',
    },
    servicesTitle: 'Our services',
    servicesSubtitle: 'Complete solutions for all your clearance needs',
    allServices: 'View all our services',
    simBadge: 'New',
    simTitle: 'Estimate your clearance in 30 seconds',
    simText: 'Use our interactive simulator to get a fast, personalised estimate for your clearance project.',
    simFeatures: [
      'Answer a few simple questions',
      'Get an instant estimate',
      'Free, no-obligation quote',
    ],
    simCta: 'Estimate my clearance',
    simAlt: 'Moving boxes for online estimation',
    ctaTitle: 'Ready to free up your space?',
    ctaText: 'Get your free quote within 24h. Fast response within 48-72h.',
    ctaQuote: 'Request a free quote',
    ctaPricing: 'View our prices',
  },
};

export default function Home() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: '/',
  });

  return (
    <main>
      <Hero />

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesByLang[lang].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to={`${prefix}/services`} variant="outline">
              {t.allServices}
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />

      <InterventionMap />

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {t.simBadge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {t.simTitle}
                </h2>
                <p className="text-muted text-lg mb-6">
                  {t.simText}
                </p>
                <ul className="space-y-3 mb-8">
                  {t.simFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-muted">
                      <svg aria-hidden="true" className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button to={`${prefix}/contact`} variant="primary">
                  {t.simCta}
                </Button>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=fit&crop=w=800&q=80"
                  alt={t.simAlt}
                  loading="lazy"
                  className="rounded-2xl shadow-xl object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to={`${prefix}/contact`} variant="secondary">
              {t.ctaQuote}
            </Button>
            <Button to={`${prefix}/tarifs`} variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary">
              {t.ctaPricing}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
