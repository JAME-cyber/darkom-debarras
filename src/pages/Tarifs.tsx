import Button from '../components/Button';
import useSEO from '../hooks/useSEO';
import { useLang } from '../i18n/LanguageContext';

const pricing = {
  fr: [
    {
      title: "Cave, grenier, garage",
      price: "275 – 825 €",
      volume: "5 à 15 m³ · 55 €/m³",
      description: "Pour les petits espaces ou débarras ciblés",
      features: [
        "Cave, grenier, garage, dépendance",
        "Volume jusqu'à 15 m³",
        "Tri de base",
        "Évacuation des encombrants",
        "Nettoyage sommaire (sur demande)"
      ]
    },
    {
      title: "Appartement T1 – T3",
      price: "1 100 – 3 300 €",
      volume: "20 à 60 m³ · 55 €/m³",
      description: "Pour les appartements et maisons de taille moyenne",
      features: [
        "Studio, T2, T3",
        "Volume jusqu'à 60 m³",
        "Tri complet",
        "Valorisation des biens déduite du devis",
        "Nettoyage final (sur demande)",
        "Intervention 48-72h"
      ],
      featured: true
    },
    {
      title: "Maison complète",
      price: "4 400 € et +",
      volume: "80 m³ et plus · 55 €/m³",
      description: "Pour les grandes surfaces et débarras complexes",
      features: [
        "Maison T4 et plus",
        "Volume important",
        "Tri minutieux",
        "Gestion des objets spéciaux",
        "Nettoyage professionnel (sur demande)",
        "Intervention prioritaire",
        "Accompagnement spécialisé"
      ]
    }
  ],
  en: [
    {
      title: "Cellar, loft, garage",
      price: "275 – 825 €",
      volume: "5 to 15 m³ · €55/m³",
      description: "For small spaces or targeted clearances",
      features: [
        "Cellar, loft, garage, outbuilding",
        "Volume up to 15 m³",
        "Basic sorting",
        "Bulky item removal",
        "Basic clean (on request)"
      ]
    },
    {
      title: "Flat 1–3 rooms",
      price: "1,100 – 3,300 €",
      volume: "20 to 60 m³ · €55/m³",
      description: "For flats and medium-sized homes",
      features: [
        "Studio, 2-room, 3-room flats",
        "Volume up to 60 m³",
        "Full sorting",
        "Resalable value deducted from the quote",
        "Final clean (on request)",
        "Response 48-72h"
      ],
      featured: true
    },
    {
      title: "Whole house",
      price: "€4,400 and up",
      volume: "80 m³ and above · €55/m³",
      description: "For large properties and complex clearances",
      features: [
        "4-bedroom houses and larger",
        "Large volume",
        "Meticulous sorting",
        "Special item handling",
        "Professional clean (on request)",
        "Priority service",
        "Dedicated support"
      ]
    }
  ]
};

const trustBadges = {
  fr: [
    { icon: '🛡️', label: 'Assuré RC Pro' },
    { icon: '📋', label: 'Devis transparent' },
    { icon: '⏱️', label: 'Intervention 48-72h' }
  ],
  en: [
    { icon: '🛡️', label: 'Fully insured' },
    { icon: '📋', label: 'Transparent quotes' },
    { icon: '⏱️', label: 'Response 48-72h' }
  ],
};

const process = {
  fr: [
    { step: 1, title: "Contact", description: "Vous nous contactez par téléphone ou via le formulaire de devis." },
    { step: 2, title: "Visite technique", description: "Nous évaluons le volume et la complexité du débarras (gratuit)." },
    { step: 3, title: "Devis détaillé", description: "Vous recevez un devis gratuit sous 24h, sans engagement." },
    { step: 4, title: "Intervention", description: "Notre équipe intervient dans les 48-72h selon vos disponibilités." },
    { step: 5, title: "Finalisation", description: "Nettoyage final (sur demande) et remise des clés. Vous êtes libéré !" }
  ],
  en: [
    { step: 1, title: "Contact", description: "Get in touch by phone or via the quote form." },
    { step: 2, title: "On-site survey", description: "We assess the volume and complexity of the clearance (free)." },
    { step: 3, title: "Detailed quote", description: "You receive a free quote within 24h, no obligation." },
    { step: 4, title: "Clearance", description: "Our team carries out the work within 48-72h, at your convenience." },
    { step: 5, title: "Completion", description: "Final clean (on request) and handover of keys. You are free!" }
  ],
};

const content = {
  fr: {
    seo: {
      title: 'Tarifs débarras | Darkom-Debarras Haute-Savoie',
      description: 'Tarifs transparents au m³ pour le débarras en Haute-Savoie : 55 €/m³, cave dès 275 €, maison complète sur devis. Valorisation des biens déduite. Devis gratuit sous 24h.',
    },
    heroTitle: 'Nos tarifs',
    heroSubtitle: 'Des tarifs clairs et transparents. Devis gratuit et sans engagement',
    imageAlt: "Nettoyage professionnel d'intérieur",
    mostPopular: 'Plus populaire',
    quoteCta: 'Demander un devis',
    howTitle: 'Comment ça marche ?',
    valTitle: 'La valorisation réduit votre facture',
    valText: 'Meubles, objets d\u2019art, électroménager fonctionnel : les biens revendables sont estimés et leur valeur est',
    valStrong: 'déduite de votre devis',
    valTextEnd: '. Selon le contenu, votre débarras peut être fortement réduit, voire gratuit si la valorisation couvre l\u2019intervention.',
    valStats: [
      { value: '100 – 400 €', label: 'Valorisation moyenne déduite par chantier' },
      { value: '0 €', label: 'Débarras gratuit si la valorisation couvre tout' },
      { value: '100 %', label: 'Tri, don et recyclage des objets récupérables' },
    ],
    disclaimer: '* Les tarifs sont donné à titre indicatif. Chaque débarras est unique et fait l\u2019objet d\u2019un devis gratuit et personnalisé.',
    coverage: 'Intervention dans toute la Haute-Savoie : Annecy, Annemasse, Thonon-les-Bains, Évian, Sallanches, Cluses, Bonneville, etc.',
  },
  en: {
    seo: {
      title: 'House clearance pricing | Darkom-Debarras Haute-Savoie',
      description: 'Transparent per-m³ pricing for house clearance in Haute-Savoie: €55/m³, cellar from €275, whole house on quote. Resalable value deducted. Free quote within 24h.',
    },
    heroTitle: 'Our prices',
    heroSubtitle: 'Clear, transparent pricing. Free, no-obligation quote',
    imageAlt: 'Professional interior cleaning',
    mostPopular: 'Most popular',
    quoteCta: 'Request a quote',
    howTitle: 'How it works',
    valTitle: 'Resale value reduces your bill',
    valText: 'Furniture, works of art, working appliances: resalable items are valued and their worth is',
    valStrong: 'deducted from your quote',
    valTextEnd: '. Depending on the contents, your clearance can be greatly reduced — or even free if the resale value covers the whole job.',
    valStats: [
      { value: '100 – 400 €', label: 'Average value deducted per job' },
      { value: '0 €', label: 'Free clearance if resale value covers everything' },
      { value: '100 %', label: 'Sorting, donation and recycling of recoverable items' },
    ],
    disclaimer: '* Prices are indicative only. Every clearance is unique and receives a free, personalised quote.',
    coverage: 'Coverage across Haute-Savoie: Annecy, Annemasse, Thonon-les-Bains, Évian, Sallanches, Cluses, Bonneville, etc.',
  },
};

export default function Tarifs() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: '/tarifs',
  });

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=fit&crop=w=1600&q=80"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing[lang].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 ${
                  plan.featured
                    ? 'ring-2 ring-accent md:scale-105'
                    : 'hover:shadow-xl border border-gray-100'
                }`}
              >
                {plan.featured && (
                  <div className="bg-primary-light text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                    {t.mostPopular}
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-primary-light mb-1">{plan.price}</p>
                <p className="text-accent text-sm font-semibold mb-2">{plan.volume}</p>
                <p className="text-muted text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-body">
                      <svg aria-hidden="true" className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  to={`${prefix}/contact`}
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {t.quoteCta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {t.howTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process[lang].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-light text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc valorisation */}
          <div className="mt-16 bg-primary text-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              {t.valTitle}
            </h2>
            <p className="text-white/85 text-center max-w-3xl mx-auto mb-6">
              {t.valText} <strong>{t.valStrong}</strong>{t.valTextEnd}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
              {t.valStats.map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-white/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bandeau réassurance */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustBadges[lang].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-body">
                <span className="text-2xl" aria-hidden="true">{badge.icon}</span>
                <span className="font-semibold text-primary">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted mb-4">
              {t.disclaimer}
            </p>
            <p className="text-muted text-sm">
              {t.coverage}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
