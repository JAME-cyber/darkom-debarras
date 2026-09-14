import Button from '../components/Button';
import useSEO from '../hooks/useSEO';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/LanguageContext';

const icons = {
  house: (
    <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  storage: (
    <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  office: (
    <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  estate: (
    <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  care: (
    <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  alert: (
    <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
};

interface ServiceEntry {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const servicesByLang: Record<Lang, ServiceEntry[]> = {
  fr: [
    {
      icon: icons.house,
      title: 'Débarras maison/appartement',
      description: "Nous vidons entièrement votre logement, que ce soit pour un départ, une relocation ou simplement pour gagner de l'espace. Notre équipe s'occupe de tout, du tri à l'évacuation.",
      features: [
        'Gestion complète du tri',
        'Prise en charge des encombrants',
        'Nettoyage final (sur demande)',
        'Intervention dans tout le département'
      ]
    },
    {
      icon: icons.storage,
      title: 'Vide cave/grenier/garage',
      description: 'Récupérez vos espaces de rangement encombrés. Nous intervenons rapidement pour trier, valoriser et évacuer tout ce qui ne vous sert plus.',
      features: [
        'Intervention rapide 48-72h',
        'Tri sélectif et recyclage',
        'Valorisation des biens réutilisables',
        'Évacuation des déchets'
      ]
    },
    {
      icon: icons.office,
      title: 'Nettoyage local professionnel',
      description: 'Nous débarrassons vos bureaux, commerces ou entrepôts pour un environnement de travail sain et organisé.',
      features: [
        'Nettoyage complet (sur demande)',
        'Évacuation du mobilier',
        'Tri et recyclage',
        'Respect des normes'
      ]
    },
    {
      icon: icons.estate,
      title: 'Successions & héritages',
      description: "Dans les moments difficiles, nous accompagnons les familles avec tact et efficacité pour vider le logement d'un proche disparu.",
      features: [
        'Approche respectueuse',
        'Valorisation du patrimoine',
        'Accompagnement familial',
        'Gestion des objets spécifiques'
      ]
    },
    {
      icon: icons.care,
      title: 'Départ maison de retraite',
      description: "Nous aidons les familles à vider le logement familial lors d'un départ en maison de retraite, avec soin et discrétion.",
      features: [
        'Écoute et patience',
        'Tri des effets personnels',
        'Valorisation possible',
        'Nettoyage final (optionnel)'
      ]
    },
    {
      icon: icons.alert,
      title: 'Nettoyage après sinistre',
      description: 'Intervention rapide pour remettre en état votre logement après dégât des eaux, incendie ou autre sinistre.',
      features: [
        "Intervention d'urgence",
        'Nettoyage complet (sur demande)',
        'Évacuation des déchets',
        'Remise en état'
      ]
    }
  ],
  en: [
    {
      icon: icons.house,
      title: 'House & flat clearance',
      description: 'We clear your entire home — whether you are moving, relocating or simply want to reclaim space. Our team handles everything, from sorting to removal.',
      features: [
        'Full sorting service',
        'Bulky item removal',
        'Final clean (on request)',
        'Coverage across the whole department'
      ]
    },
    {
      icon: icons.storage,
      title: 'Cellar, loft & garage clearance',
      description: 'Reclaim your cluttered storage spaces. We come in quickly to sort, recover and remove everything you no longer need.',
      features: [
        'Fast response 48-72h',
        'Selective sorting & recycling',
        'Recovery of reusable items',
        'Waste removal'
      ]
    },
    {
      icon: icons.office,
      title: 'Commercial property clearance',
      description: 'We clear offices, shops and warehouses for a healthy, organised working environment.',
      features: [
        'Full clean (on request)',
        'Furniture removal',
        'Sorting & recycling',
        'Standards compliant'
      ]
    },
    {
      icon: icons.estate,
      title: 'Estates & probate clearance',
      description: 'At difficult times, we support families with tact and efficiency to clear the home of a loved one who has passed away.',
      features: [
        'Respectful approach',
        'Valuables recovery',
        'Family support',
        'Handling of special items'
      ]
    },
    {
      icon: icons.care,
      title: 'Care home move support',
      description: 'We help families clear the family home when a relative moves into a care home, with care and discretion.',
      features: [
        'Listening & patience',
        'Sorting personal belongings',
        'Possible recovery',
        'Final clean (optional)'
      ]
    },
    {
      icon: icons.alert,
      title: 'Post-disaster clean-up',
      description: 'Rapid intervention to restore your home after water damage, fire or any other disaster.',
      features: [
        'Emergency response',
        'Full clean (on request)',
        'Waste removal',
        'Restoration'
      ]
    }
  ],
};

const content = {
  fr: {
    seo: {
      title: 'Nos services de débarras | Darkom-Debarras Haute-Savoie',
      description: 'Débarras maison, appartement, cave, grenier, garage, successions, nettoyage après sinistre. Services complets en Haute-Savoie. Devis gratuit.',
    },
    heroTitle: 'Nos services',
    heroSubtitle: 'Des solutions complètes pour tous vos besoins de débarras en Haute-Savoie',
    imageAlt: 'Livreur professionnel transportant un meuble',
    cta: 'Demander un devis gratuit',
  },
  en: {
    seo: {
      title: 'Our house clearance services | Darkom-Debarras Haute-Savoie',
      description: 'House, flat, cellar, loft and garage clearance, estates, post-disaster clean-up. Complete services in Haute-Savoie. Free quote.',
    },
    heroTitle: 'Our services',
    heroSubtitle: 'Complete solutions for all your clearance needs in Haute-Savoie',
    imageAlt: 'Professional carrier transporting a piece of furniture',
    cta: 'Request a free quote',
  },
};

export default function Services() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: '/services',
  });

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6195949/pexels-photo-6195949.jpeg?auto=fit&crop=w=1600&q=80"
          alt={t.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]">
              {t.heroTitle}
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="sr-only">{t.heroTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesByLang[lang].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted mb-4">{service.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-body">
                          <svg aria-hidden="true" className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to={`${prefix}/contact`} variant="primary">
              {t.cta}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
