import Button from '../components/Button';

const services = [
  {
    title: "Débarras maison/appartement",
    description: " Nous vidons entièrement votre logement, que ce soit pour un départ, une relocation ou simplement pour gagner de l'espace. Notre équipe s'occupe de tout, du tri à l'évacuation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: [
      "Gestion complète du tri",
      "Prise en charge des encombrants",
      "Nettoyage final (optionnel)",
      "Intervention dans tout le département"
    ]
  },
  {
    title: "Vide cave/grenier/garage",
    description: "Récupérez vos espaces de rangement emcombrés. Nous intervenons rapidement pour trier, valoriser et évacuer tout ce qui ne vous sert plus.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    features: [
      "Intervention rapide 48-72h",
      "Tri sélectif et recyclage",
      "Valorisation des biens réutilisables",
      "Évacuation des déchets"
    ]
  },
  {
    title: "Nettoyage local professionnel",
    description: " Nous étabilissons vos bureaux, commerces ou entrepôts pour un environnement de travail sain et organisé.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      "Nettoyage complet",
      "Évacuation du mobilier",
      "Tri et recyclage",
      "Respect des normes"
    ]
  },
  {
    title: "Successions & héritages",
    description: "Dans les moments difficiles, nous accompagnons les familles avec tact et efficacité pour vider le logement d'un proche disparu.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      "Approche respectueuse",
      "Valorisation du patrimoine",
      "Accompagnement familial",
      "Gestion des objets spécifiques"
    ]
  },
  {
    title: "Départ maison de retraite",
    description: " Nous aidés les familles à vider le logement familial lors d'un départ en maison de retraite, avec soin et discrétion.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    features: [
      "Écoute et patience",
      "Tri des effets personnels",
      "Valorisation possible",
      "Nettoyage final (optionnel)"
    ]
  },
  {
    title: "Nettoyage après sinistre",
    description: "Intervention rapide pour remettre en état votre logement après dégât des eaux, incendie ou autre sinistre.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    features: [
      "Intervention d'urgence",
      "Nettoyage complet",
      "Évacuation des déchets",
      "Remise en état"
    ]
  }
];

export default function Services() {
  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1769792494332-b835b6df932c?auto=format&fit=crop&w=1600&q=80"
          alt="Livreur professionnel transportant un meuble"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#143d24]/70 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              Nos services
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins de débarras en Haute-Savoie
            </p>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="sr-only">Nos services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#143d24] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#143d24] mb-3">{service.title}</h3>
                    <p className="text-[#5a5a5a] mb-4">{service.description}</p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                          <svg className="w-4 h-4 text-[#a0ab37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <Button to="/contact" variant="primary">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
