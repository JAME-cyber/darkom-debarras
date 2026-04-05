import Button from '../components/Button';

const realizations = [
  {
    title: "Débarras villa Fillinges",
    category: "Débarras maison",
    description: "Villa de 150m² vidée entièrement en une journée. Tri, recyclage et dons aux associations.",
    before: "Villa encombrée après départ",
    after: "Villa vide et prête à vendre"
  },
  {
    title: "Vide grenier Annemasse",
    category: "Vide grenier",
    description: "Grenier de 40 ans de rangement familial. Valorisation des objets et évacuation des déchets.",
    before: "Grenier débordant d'objets",
    after: "Grenier vide et nettoyé"
  },
  {
    title: "Succession Thonon",
    category: "Succession",
    description: "Appartement de 80m² après décès. Approche respectueuse et accompagnement familial.",
    before: "Appartement à vider",
    after: "Appartement remis à neuf"
  },
  {
    title: "Nettoyage local commercial",
    category: "Local professionnel",
    description: "Bureau de 200m² vidé et nettoyé pour renovation. Gestion du mobilier et équipements.",
    before: "Bureau à désertir",
    after: "Local prêt pour travaux"
  },
  {
    title: "Vide cave complexe",
    category: "Vide cave",
    description: "Cave avec nombreux objetsheteroclites. Tri minutieux et evacuation selective.",
    before: "Cave encombrée",
    after: "Cave récupérée"
  },
  {
    title: "Débarras maison de retraite",
    category: "Départ maison de retraite",
    description: "Logement familial vidé avec soin. Tri des effets personnels et valorisation.",
    before: "Maison à vider",
    after: "Maison vide et nettoyée"
  }
];

export default function Realisations() {
  return (
    <main className="pt-32">
      <section className="py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#143d24] mb-4">
              Nos réalisations
            </h1>
            <p className="text-[#5a5a5a] text-lg max-w-2xl mx-auto">
              Découvrez quelques-uns de nos récents projets de débarras en Haute-Savoie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realizations.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-[#143d24] to-[#1a6530] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm opacity-75">Photo avant/après</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 text-[#143d24] px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#143d24] mb-2">{item.title}</h3>
                  <p className="text-[#5a5a5a] text-sm mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[#5a5a5a] mb-1">Avant</p>
                      <p className="font-medium text-[#1a1a1a]">{item.before}</p>
                    </div>
                    <div>
                      <p className="text-[#a0ab37] mb-1">Après</p>
                      <p className="font-medium text-[#1a1a1a]">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#143d24] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous avez un projet de débarras ?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter pour discuter de votre projet. Nous intervenons rapidement dans toute la Haute-Savoie.
            </p>
            <Button to="/contact" variant="secondary">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
