import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonial';
import InterventionMap from '../components/InterventionMap';
import Button from '../components/Button';

const services = [
  {
    title: "Débarras maison/appartement",
    description: "Nous vidons entièrement votre logement, du sol au plafond, en prenant soin de trier et valoriser vos biens.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ["Gestion complète du tri", "Prise en charge des encombrants", "Nettoyage final inclus"]
  },
  {
    title: "Vide cave/grenier/garage",
    description: "Récupérez vos espaces de rangement avec notre service rapide et efficace.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    features: ["Intervention rapide", "Tri et recyclage", "Valorisation des biens"]
  },
  {
    title: "Successions & héritages",
    description: "Nous accompagnons les familles dans le délicat processus de débarras après succession.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: ["Approche respectueuse", "Valorisation du patrimoine", "Accompagnement complet"]
  }
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#143d24] mb-4">
              Nos services
            </h2>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins de débarras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="outline">
              Voir tous nos services
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />

      <InterventionMap />

      <section className="py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#a0ab37]/10 text-[#a0ab37] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-[#a0ab37] rounded-full"></span>
                  Nouveau
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#143d24] mb-4">
                  Estimez votre débarras en 30 secondes
                </h2>
                <p className="text-[#5a5a5a] text-lg mb-6">
                  Utilisez notre simulateur interactif pour obtenir une estimation rapide et personnalisée de votre projet de débarras.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-[#5a5a5a]">
                    <svg className="w-5 h-5 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Répondez à quelques questions simples
                  </li>
                  <li className="flex items-center gap-3 text-[#5a5a5a]">
                    <svg className="w-5 h-5 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Obtenez une estimation instantanée
                  </li>
                  <li className="flex items-center gap-3 text-[#5a5a5a]">
                    <svg className="w-5 h-5 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Devis gratuit et sans engagement
                  </li>
                </ul>
                <Button to="/contact" variant="primary">
                  Estimer mon débarras
                </Button>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?auto=format&fit=crop&w=800&q=80"
                  alt="Cartons de déménagement pour estimation en ligne"
                  className="rounded-2xl shadow-xl object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#143d24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à libérer votre espace ?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Obtenez votre devis gratuit sous 24h. Intervention rapide en 48-72h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary">
              Demander un devis gratuit
            </Button>
            <Button to="/tarifs" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-[#143d24]">
              Voir nos tarifs
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
