import Button from './Button';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center bg-gradient-to-br from-[#f8f8f5] to-[#f0f0ec] pt-20 sm:pt-24 md:pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1a6530]/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a0ab37]/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1a6530]/10 text-[#1a6530] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-[#a0ab37] rounded-full animate-pulse"></span>
              Intervention rapide 48-72h
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#143d24] leading-tight mb-4 sm:mb-6">
              Libérez votre espace,
              <span className="text-[#1a6530]"> simplifiez votre vie</span>
            </h1>
            
            <p className="text-base sm:text-lg text-[#5a5a5a] mb-6 sm:mb-8 max-w-xl">
              Votre partenaire de confiance pour le débarras de votre maison, appartement ou local professionnel en Haute-Savoie. 
              Service premium, écoresponsable et rapide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button to="/contact" variant="primary">
                Demander un devis gratuit
              </Button>
              <Button to="/services" variant="outline">
                Voir nos services
              </Button>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-10 border-t border-gray-200 flex-wrap">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#143d24]">3</p>
                <p className="text-xs sm:text-sm text-[#5a5a5a]">Professionnels</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#143d24]">100+</p>
                <p className="text-xs sm:text-sm text-[#5a5a5a]">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#a0ab37]">100%</p>
                <p className="text-xs sm:text-sm text-[#5a5a5a]">Écoresponsable</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src={heroImage}
              alt="Professionnels du débarras avec cartons de déménagement"
              className="aspect-square object-cover rounded-3xl shadow-2xl"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 flex items-center gap-3 max-w-[200px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a6530]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#143d24] text-sm">Tri & Recyclage</p>
                <p className="text-xs text-[#5a5a5a]">Écoresponsable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
