import Button from '../components/Button';
import useSEO from '../hooks/useSEO';
import { useLang } from '../i18n/LanguageContext';

const realizations = {
  fr: [
    {
      title: "Débarras villa Fillinges",
      category: "Débarras maison",
      description: "Villa de 150m² vidée entièrement en une journée. Tri, recyclage et dons aux associations.",
      before: "Villa encombrée après départ",
      after: "Villa vide et prête à vendre",
      image: "https://images.pexels.com/photos/35493888/pexels-photo-35493888.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Vide grenier Annemasse",
      category: "Vide grenier",
      description: "Grenier de 40 ans de rangement familial. Valorisation des objets et évacuation des déchets.",
      before: "Grenier débordant d'objets",
      after: "Grenier vide et nettoyé",
      image: "https://images.pexels.com/photos/8082327/pexels-photo-8082327.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Succession Thonon",
      category: "Succession",
      description: "Appartement de 80m² après décès. Approche respectueuse et accompagnement familial.",
      before: "Appartement à vider",
      after: "Appartement remis à neuf",
      image: "https://images.pexels.com/photos/35493911/pexels-photo-35493911.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Nettoyage local commercial",
      category: "Local professionnel",
      description: "Bureau de 200m² vidé et nettoyé pour rénovation. Gestion du mobilier et équipements.",
      before: "Bureau à desservir",
      after: "Local prêt pour travaux",
      image: "https://images.pexels.com/photos/7750129/pexels-photo-7750129.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Vide cave complexe",
      category: "Vide cave",
      description: "Cave avec de nombreux objets hétéroclites. Tri minutieux et évacuation sélective.",
      before: "Cave encombrée",
      after: "Cave récupérée",
      image: "https://images.pexels.com/photos/35539075/pexels-photo-35539075.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Débarras maison de retraite",
      category: "Départ maison de retraite",
      description: "Logement familial vidé avec soin. Tri des effets personnels et valorisation.",
      before: "Maison à vider",
      after: "Maison vide et nettoyée",
      image: "https://images.pexels.com/photos/35493905/pexels-photo-35493905.jpeg?auto=fit&crop=w=600&q=80"
    }
  ],
  en: [
    {
      title: "Villa clearance, Fillinges",
      category: "House clearance",
      description: "150 m² villa fully cleared in one day. Sorting, recycling and donations to charities.",
      before: "Cluttered villa after a move-out",
      after: "Empty villa, ready to sell",
      image: "https://images.pexels.com/photos/35493888/pexels-photo-35493888.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Loft clearance, Annemasse",
      category: "Loft clearance",
      description: "Loft with 40 years of family storage. Item recovery and waste removal.",
      before: "Loft overflowing with items",
      after: "Empty, cleaned loft",
      image: "https://images.pexels.com/photos/8082327/pexels-photo-8082327.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Estate clearance, Thonon",
      category: "Estate",
      description: "80 m² flat after a bereavement. Respectful approach and family support.",
      before: "Flat to be cleared",
      after: "Flat fully restored",
      image: "https://images.pexels.com/photos/35493911/pexels-photo-35493911.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Commercial property clean-out",
      category: "Commercial",
      description: "200 m² office cleared and cleaned for renovation. Furniture and equipment handled.",
      before: "Office to be cleared",
      after: "Premises ready for works",
      image: "https://images.pexels.com/photos/7750129/pexels-photo-7750129.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Complex cellar clearance",
      category: "Cellar clearance",
      description: "Cellar full of assorted items. Meticulous sorting and selective removal.",
      before: "Cluttered cellar",
      after: "Cellar reclaimed",
      image: "https://images.pexels.com/photos/35539075/pexels-photo-35539075.jpeg?auto=fit&crop=w=600&q=80"
    },
    {
      title: "Care home move clearance",
      category: "Care home move",
      description: "Family home carefully cleared. Sorting of personal belongings and recovery.",
      before: "House to be cleared",
      after: "Empty, cleaned house",
      image: "https://images.pexels.com/photos/35493905/pexels-photo-35493905.jpeg?auto=fit&crop=w=600&q=80"
    }
  ],
};

const content = {
  fr: {
    seo: {
      title: 'Nos réalisations | Darkom-Debarras Haute-Savoie',
      description: 'Découvrez nos projets de débarras réalisés en Haute-Savoie : maisons, appartements, caves, successions. Photos avant/après.',
    },
    heroTitle: 'Nos réalisations',
    heroSubtitle: 'Découvrez quelques-uns de nos récents projets de débarras en Haute-Savoie',
    heroImageAlt: 'Réalisations de débarras professionnel',
    beforeLabel: 'Avant',
    afterLabel: 'Après',
    ctaTitle: 'Vous avez un projet de débarras ?',
    ctaText: "N'hésitez pas à nous contacter pour discuter de votre projet. Nous intervenons rapidement dans toute la Haute-Savoie.",
    cta: 'Demander un devis gratuit',
  },
  en: {
    seo: {
      title: 'Our work | Darkom-Debarras Haute-Savoie',
      description: 'Discover our house clearance projects in Haute-Savoie: houses, flats, cellars, estates. Before/after photos.',
    },
    heroTitle: 'Our work',
    heroSubtitle: 'A look at some of our recent clearance projects in Haute-Savoie',
    heroImageAlt: 'Professional house clearance projects',
    beforeLabel: 'Before',
    afterLabel: 'After',
    ctaTitle: 'Planning a clearance project?',
    ctaText: 'Get in touch to discuss your project. We respond quickly across the whole of Haute-Savoie.',
    cta: 'Request a free quote',
  },
};

export default function Realisations() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: '/realisations',
  });

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/35493911/pexels-photo-35493911.jpeg?auto=fit&crop=w=1600&q=80"
          alt={t.heroImageAlt}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realizations[lang].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted text-sm mb-4">{item.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted mb-1">{t.beforeLabel}</p>
                      <p className="font-medium text-body">{item.before}</p>
                    </div>
                    <div>
                      <p className="text-accent mb-1">{t.afterLabel}</p>
                      <p className="font-medium text-body">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {t.ctaText}
            </p>
            <Button to={`${prefix}/contact`} variant="secondary">
              {t.cta}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
