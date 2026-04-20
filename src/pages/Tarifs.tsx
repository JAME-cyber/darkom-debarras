import Button from '../components/Button';

const pricing = [
  {
    title: "Débarras simple",
    price: "À partir de 250€",
    description: "Pour les petits espaces ou débarras ciblés",
    features: [
      "Studio ou petite surface",
      "Volume jusqu'à 10m³",
      "Tri de base",
      "Évacuation des encombrants",
      "Nettoyage sommaire"
    ]
  },
  {
    title: "Débarras standard",
    price: "À partir de 500€",
    description: "Pour les appartements et maisons de taille moyenne",
    features: [
      "Appartement ou maison T2-T3",
      "Volume jusqu'à 30m³",
      "Tri complet",
      "Valorisation des biens",
      "Nettoyage final (optionnel)",
      "Intervention 48-72h"
    ],
    featured: true
  },
  {
    title: "Débarras complet",
    price: "À partir de 1000€",
    description: "Pour les grandes surfaces et débarras complexes",
    features: [
      "Maison T4 et plus",
      "Volume important",
      "Tri minutieux",
      "Gestion des objets spéciaux",
      "Nettoyage professionnel",
      "Intervention prioritaire",
      "Accompagnement spécialisé"
    ]
  }
];

const process = [
  {
    step: 1,
    title: "Contact",
    description: "Vous nous contactez par téléphone ou via le formulaire de devis."
  },
  {
    step: 2,
    title: "Visite technique",
    description: "Nous évaluons le volume et la complexité du débarras (gratuit)."
  },
  {
    step: 3,
    title: "Devis détaillé",
    description: "Vous recevez un devis gratuit sous 24h, sans engagement."
  },
  {
    step: 4,
    title: "Intervention",
    description: "Notre équipe intervient dans les 48-72h selon vos disponibilités."
  },
  {
    step: 5,
    title: "Finalisation",
    description: "Nettoyage final (optionnel) et remise des clés. Vous êtes libéré !"
  }
];

export default function Tarifs() {
  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1663091386564-f8c07caad36e?auto=format&fit=crop&w=1600&q=80"
          alt="Nettoyage professionnel d'intérieur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#143d24]/70 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              Nos tarifs
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Des tarifs clairs et transparents. Devis gratuit et sans engagement
            </p>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="sr-only">Nos tarifs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 ${
                  plan.featured 
                    ? 'ring-2 ring-[#a0ab37] md:scale-105' 
                    : 'hover:shadow-xl border border-gray-100'
                }`}
              >
                {plan.featured && (
                  <div className="bg-[#1a6530] text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                    Plus populaire
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#143d24] mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-[#1a6530] mb-2">{plan.price}</p>
                <p className="text-[#5a5a5a] text-sm mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                      <svg className="w-4 h-4 text-[#a0ab37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  to="/contact" 
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Demander un devis
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#143d24] mb-8 text-center">
              Comment ça marche ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#1a6530] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#143d24] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5a5a5a]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#5a5a5a] mb-4">
              * Les tarifs sont donné à titre indicatif. Chaque débarras est unique et fait l'objet d'un devis gratuit et personnalisé.
            </p>
            <p className="text-[#5a5a5a] text-sm">
              Intervention dans toute la Haute-Savoie : Annecy, Annemasse, Thonon-les-Bains, Évian, Sallanches, Cluses, Bonneville, etc.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
