import Button from '../components/Button';

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Professionnalisme",
    description: "Une équipe qualifiée, ponctuelle et respectueuse de votre espace."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Écoresponsabilité",
    description: "Tri rigoureux, recyclage et dons aux associations locales."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Rapidité",
    description: "Intervention en 48-72h pour répondre à vos besoins urgents."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "proximité",
    description: "Une équipe locale attachée à la satisfaction de ses clients."
  }
];

export default function APropos() {
  return (
    <main className="pt-16 sm:pt-20 md:pt-32">
      <section className="py-10 sm:py-16 md:py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#143d24] mb-4 sm:mb-6">
                À propos de Darkom-Debarras
              </h1>
              <p className="text-[#5a5a5a] text-base sm:text-lg mb-4 sm:mb-6">
                Fondé à Fillinges en Haute-Savoie, Darkom-Debarras est votre partenaire de confiance pour tous vos projets de débarras.
              </p>
              <p className="text-[#5a5a5a] mb-6">
                Avec 3 professionnels passionnés, nous nous engageons à vous offrir un service premium tout en restant accessibles. Notre philosophie : libérer votre espace tout en respectant l'environnement.
              </p>
              <p className="text-[#5a5a5a] mb-8">
                Chaque intervention est pour nous l'occasion de créer un espace de vie plus agréable pour nos clients, tout en contribuant à une économie circulaire locale par le tri, le recyclage et les dons aux associations.
              </p>
              <Button to="/contact" variant="primary">
                Nous contacter
              </Button>
            </div>
            
            <div className="relative">
              <img
              src="https://plus.unsplash.com/premium_photo-1664300914931-76c0f99a96b8?auto=format&fit=crop&w=800&q=80"
              alt="Équipe de déménageurs professionnels portant des cartons"
                className="aspect-square object-cover rounded-3xl shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1a6530]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#143d24]">500+</p>
                  <p className="text-sm text-[#5a5a5a]">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#143d24] mb-12 text-center">
              Notre équipe
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#143d24] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-[#5a5a5a] text-lg mb-4">
                  Des professionnels à votre service — une équipe expérimentée, qualifiée et passionnée par son métier. Chaque membre met son expertise au service de votre satisfaction, avec rigueur, respect et savoir-faire.
                </p>
                <p className="text-[#5a5a5a]">
                  Du premier contact à la finalisation de l'intervention, nous vous garantissons un accompagnement humain et professionnel. Notre équipe intervient avec soin, efficacité et dans le respect total de votre espace et de vos biens.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#143d24] mb-12 text-center">
              Nos valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#1a6530]/10 rounded-xl flex items-center justify-center text-[#1a6530] mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#143d24] mb-3">{value.title}</h3>
                  <p className="text-[#5a5a5a] text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
