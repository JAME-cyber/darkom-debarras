import { useState } from 'react';
import Button from '../components/Button';
import Simulator from '../components/simulator/Simulator';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    type: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [useSimulator, setUseSimulator] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
    <main className="pt-32">
        <section className="py-20 bg-[#f8f8f5] min-h-[80vh] flex items-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-[#1a6530]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#143d24] mb-4">
              Message envoyé !
            </h1>
            <p className="text-[#5a5a5a] mb-8">
              Merci pour votre demande. Nous vous recontacterons sous 24h pour discuter de votre projet de débarras.
            </p>
            <Button to="/" variant="outline">
              Retour à l'accueil
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1758876017967-c023c40c0a53?auto=format&fit=crop&w=1600&q=80"
          alt="Service client professionnel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#143d24]/70 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              Parlons de votre projet
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              {useSimulator 
                ? 'Répondez à quelques questions pour obtenir une estimation personnalisée'
                : 'Décrivez votre besoin et nous vous recontacterons rapidement'}
            </p>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="sr-only">Contact</h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-md inline-flex">
              <button
                onClick={() => setUseSimulator(true)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  useSimulator 
                    ? 'bg-[#143d24] text-white' 
                    : 'text-[#5a5a5a] hover:bg-[#f8f8f5]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Simulateur rapide
                </span>
              </button>
              <button
                onClick={() => setUseSimulator(false)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  !useSimulator 
                    ? 'bg-[#143d24] text-white' 
                    : 'text-[#5a5a5a] hover:bg-[#f8f8f5]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Formulaire classique
                </span>
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {useSimulator ? (
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <Simulator />
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a6530] focus:ring-2 focus:ring-[#1a6530]/20 outline-none transition-all"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          required
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a6530] focus:ring-2 focus:ring-[#1a6530]/20 outline-none transition-all"
                          placeholder="06 XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a6530] focus:ring-2 focus:ring-[#1a6530]/20 outline-none transition-all"
                          placeholder="votre@email.fr"
                        />
                      </div>
                      <div>
                        <label htmlFor="type" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                          Type de débarras *
                        </label>
                        <select
                          id="type"
                          name="type"
                          required
                          value={formData.type}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a6530] focus:ring-2 focus:ring-[#1a6530]/20 outline-none transition-all"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="maison">Débarras maison/appartement</option>
                          <option value="cave">Vide cave/grenier/garage</option>
                          <option value="succession">Succession</option>
                          <option value="professionnel">Local professionnel</option>
                          <option value="sinistre">Nettoyage après sinistre</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a6530] focus:ring-2 focus:ring-[#1a6530]/20 outline-none transition-all resize-none"
                        placeholder="Décrivez votre projet (surface, volume approximatif, urgence, etc.)"
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full">
                      Envoyer ma demande de devis
                    </Button>
                  </form>
                </div>

                <div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                    <h3 className="text-lg font-bold text-[#143d24] mb-6">Nos coordonnées</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#1a6530]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[#143d24]">Adresse</p>
                          <p className="text-[#5a5a5a] text-sm">74250 Fillinges, Haute-Savoie</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#1a6530]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[#143d24]">Téléphone</p>
                          <a href="tel:+33612345678" className="text-[#5a5a5a] text-sm hover:text-[#1a6530]">
                            06 XX XX XX XX
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#1a6530]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#1a6530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[#143d24]">Email</p>
                          <a href="mailto:contact@darkom-debarras.fr" className="text-[#5a5a5a] text-sm hover:text-[#1a6530]">
                            contact@darkom-debarras.fr
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#a0ab37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#a0ab37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[#143d24]">Disponibilité</p>
                          <p className="text-[#5a5a5a] text-sm">Intervention 48-72h</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#143d24] rounded-2xl p-8 text-white">
                    <h3 className="text-lg font-bold mb-4">Besoin urgent ?</h3>
                    <p className="text-white/70 text-sm mb-6">
                      Nous comprenons que certains débarras ne peuvent pas attendre. Appelez-nous directement pour une intervention rapide.
                    </p>
                    <a 
                      href="tel:+33612345678" 
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#a0ab37] hover:bg-[#b4bd4a] rounded-lg font-semibold transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Appeler maintenant
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}