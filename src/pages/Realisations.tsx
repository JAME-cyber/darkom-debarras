import Button from '../components/Button';

const realizations = [
  {
    title: "Débarras villa Fillinges",
    category: "Débarras maison",
    description: "Villa de 150m² vidée entièrement en une journée. Tri, recyclage et dons aux associations.",
    before: "Villa encombrée après départ",
    after: "Villa vide et prête à vendre",
    image: "https://images.unsplash.com/photo-1762279938691-7effe62a77b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Vide grenier Annemasse",
    category: "Vide grenier",
    description: "Grenier de 40 ans de rangement familial. Valorisation des objets et évacuation des déchets.",
    before: "Grenier débordant d'objets",
    after: "Grenier vide et nettoyé",
    image: "https://images.unsplash.com/photo-1721825176410-eccd4943e36b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Succession Thonon",
    category: "Succession",
    description: "Appartement de 80m² après décès. Approche respectueuse et accompagnement familial.",
    before: "Appartement à vider",
    after: "Appartement remis à neuf",
    image: "https://images.unsplash.com/photo-1706545340860-1ec0acd1bfe6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Nettoyage local commercial",
    category: "Local professionnel",
    description: "Bureau de 200m² vidé et nettoyé pour renovation. Gestion du mobilier et équipements.",
    before: "Bureau à désertir",
    after: "Local prêt pour travaux",
    image: "https://images.unsplash.com/photo-1690541772642-29fefa1817c8?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Vide cave complexe",
    category: "Vide cave",
    description: "Cave avec nombreux objetsheteroclites. Tri minutieux et evacuation selective.",
    before: "Cave encombrée",
    after: "Cave récupérée",
    image: "https://images.unsplash.com/photo-1698226927995-a78c836cb42b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Débarras maison de retraite",
    category: "Départ maison de retraite",
    description: "Logement familial vidé avec soin. Tri des effets personnels et valorisation.",
    before: "Maison à vider",
    after: "Maison vide et nettoyée",
    image: "https://images.unsplash.com/photo-1774716925810-e923c8206ed5?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Realisations() {
  return (
    <main className="pt-28">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1683141043361-b927d1cb8694?auto=format&fit=crop&w=1600&q=80"
          alt="Réalisations de débarras professionnel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#143d24]/70 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos réalisations
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Découvrez quelques-uns de nos récents projets de débarras en Haute-Savoie
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realizations.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
