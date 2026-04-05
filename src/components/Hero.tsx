import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#f8f8f5] to-[#f0f0ec] pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1a6530]/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a0ab37]/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1a6530]/10 text-[#1a6530] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#a0ab37] rounded-full animate-pulse"></span>
              Intervention rapide 48-72h
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#143d24] leading-tight mb-6">
              Libérez votre espace,
              <span className="text-[#1a6530]"> simplifiez votre vie</span>
            </h1>
            
            <p className="text-lg text-[#5a5a5a] mb-8 max-w-xl">
              Votre partenaire de confiance pour le débarras de votre maison, appartement ou local professionnel en Haute-Savoie. 
              Service premium, écoresponsable et rapide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary">
                Demander un devis gratuit
              </Button>
              <Button to="/services" variant="outline">
                Voir nos services
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-10 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-[#143d24]">3</p>
                <p className="text-sm text-[#5a5a5a]">Professionnels</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#143d24]">500+</p>
                <p className="text-sm text-[#5a5a5a]">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#a0ab37]">100%</p>
                <p className="text-sm text-[#5a5a5a]">Écoresponsable</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#143d24] to-[#1a6530] rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold">Débarras rapide</p>
                  <p className="text-white/80 mt-2">et professionnel</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1a6530]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#143d24]">Tri & Recyclage</p>
                <p className="text-sm text-[#5a5a5a]">Écoresponsable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
