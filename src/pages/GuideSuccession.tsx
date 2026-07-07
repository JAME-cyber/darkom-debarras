import { useState } from 'react';
import Button from '../components/Button';
import { sendContactEmail } from '../services/emailService';
import useSEO from '../hooks/useSEO';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(?:\+33|0)[1-9]\d{8}$/;

const CHECKLIST_SECTIONS = [
  {
    icon: '📋',
    title: 'Avant le débarras — Les démarches',
    delay: 'Semaine 1',
    items: [
      'Obtenir l\'acte de notaire autorisant la libération du logement',
      'Faire un état des lieux complet du logement (photos + vidéo)',
      'Relever tous les compteurs (eau, électricité, gaz) et résilier les abonnements',
      'Transmettre l\'attestation d\'assurance habitation au propriétaire / syndic',
      'Signaler le décès aux organismes (CAF, impôts, banque, retraite)',
    ],
  },
  {
    icon: '🗂️',
    title: 'Le tri — Que faire de chaque catégorie',
    delay: 'Semaine 1-2',
    items: [
      'Documents administratifs : conserver (factures, contrats, papiers d\'identité, livrets de famille) — à trier dans UNE boîte dédiée',
      'Objets de valeur (bijoux, montres, tableaux) : faire estimer par un professionnel avant toute décision',
      'Meubles en bon état : don aux associations (Emmaüs, Croix-Rouge) — déduction fiscale possible',
      'Vêtements : don ou recyclage textile (borne relais)',
      'Objets encombrants / électroménager : déchetterie ou service de débarras professionnel',
      'Médicaments : rapporter en pharmacie (Don de médicaments non autorisé en France)',
    ],
  },
  {
    icon: '💰',
    title: 'Estimation des meubles — Valoriser au juste prix',
    delay: 'À faire AVANT le tri',
    items: [
      'Faire venir un brocanteur / antiquaire pour les meubles anciens (estimation gratuite)',
      'Photographier chaque meuble de valeur sous plusieurs angles',
      'Vérifier les marques et labels (Ligne Roset, Roche Bobois, marques scandinaves)',
      'Conserver les factures d\'achat si disponibles — facilitent la revente',
      'Attention : ne jamais jeter un meuble avant estimation, certains valent plus qu\'ils n\'en ont l\'air',
    ],
  },
  {
    icon: '⏱️',
    title: 'Les délais à prévoir',
    delay: 'À planifier',
    items: [
      'Délai notaire pour l\'acte de succession : 2 à 6 mois selon la complexité',
      'Délai de libération du logement demandé par le propriétaire : généralement 1 à 3 mois après le décès',
      'Réservation d\'une association pour enlèvement de meubles : 2 à 4 semaines de délai',
      'Service de débarras professionnel : intervention sous 48-72h (ex: Darkom-Debarras)',
      'Ménage final après débarras : à prévoir dans le budget (200-500€ selon surface)',
    ],
  },
  {
    icon: '⚠️',
    title: 'Points de vigilance — Ne pas oublier',
    delay: 'Critique',
    items: [
      'Vérifier TOUTES les cachettes : tiroirs secrets, coffres, sous les matelas, faux plafonds',
      'Regarder dans les livres (parfois des billets ou documents glissés)',
      'Ne pas jeter d\'appareils avec données (ordinateurs, téléphones, tablettes) — récupérer les données d\'abord',
      'Conserver les photos de famille (numériser avant de distribuer aux héritiers)',
      'Faire un inventaire détaillé et le faire valider par le notaire avant de vider',
    ],
  },
  {
    icon: '📍',
    title: 'Les contacts utiles en Haute-Savoie (74)',
    delay: 'Ressources',
    items: [
      'Emmaüs Annecy — 04 50 52 13 00 (enlèvement gratuit meubles en bon état)',
      'Croix-Rouge française 74 — 04 50 88 31 31 (collecte à domicile sur rendez-vous)',
      'Déchetterie la plus proche : annuaire sur le site du SIVED (sived74.fr)',
      'Recyclage textile : bornes Relais partout dans le 74',
      'Darkom-Debarras — 06 79 44 71 11 (débarras complet 48-72h, tri et recyclage inclus)',
    ],
  },
];

export default function GuideSuccession() {
  useSEO({
    title: 'Guide gratuit : Checklist débarras après succession | Darkom-Debarras',
    description: 'Téléchargez notre checklist complète pour réussir un débarras après succession en Haute-Savoie. Démarches, tri, estimation, délais. Gratuit.',
    canonical: '/guide-succession',
  });

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    type: 'guide-succession',
    message: 'Demande de guide : Checklist débarras après succession',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.nom.trim()) errors.nom = 'Le nom est requis';
    if (!EMAIL_REGEX.test(formData.email)) errors.email = 'Email invalide';
    if (!PHONE_REGEX.test(formData.telephone.replace(/\s/g, ''))) errors.telephone = 'Téléphone invalide (ex: 0612345678)';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setError('');
    try {
      await sendContactEmail(formData);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Une erreur est survenue. Appelez-nous au 06 79 44 71 11.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <main className="pt-16 sm:pt-20 md:pt-28">
        {/* Hero compact de remerciement */}
        <section className="bg-primary py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Voici votre checklist complète
            </h1>
            <p className="text-white/80 text-sm sm:text-base mb-2">
              Nous vous avons aussi envoyé une copie par email.
            </p>
            <p className="text-white/60 text-sm">
              Un conseiller vous appellera sous 24h si vous avez des questions.
            </p>
          </div>
        </section>

        {/* Checklist débloquée */}
        <section className="bg-surface py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                📋 Checklist Débarras Après Succession
              </h2>
              <p className="text-muted text-sm mb-6">
                Haute-Savoie (74) · Édition 2026 · Imprimez cette page ou gardez-la sur votre téléphone.
              </p>

              {CHECKLIST_SECTIONS.map((section) => (
                <div key={section.title} className="mb-8 last:mb-0">
                  <div className="flex items-center gap-3 mb-4 pb-2 border-b border-surface-dark">
                    <span className="text-2xl">{section.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-primary">{section.title}</h3>
                      <span className="text-xs text-accent font-semibold uppercase tracking-wide">{section.delay}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-body">
                        <span className="flex-none w-6 h-6 rounded-md border-2 border-primary-light/30 mt-0.5 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 rounded-sm bg-accent opacity-0 hover:opacity-100 transition-opacity" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA secondaire */}
            <div className="bg-primary rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Besoin d'aide maintenant ?</h3>
              <p className="text-white/70 text-sm mb-6">
                On s'occupe de tout : tri, transport, recyclage, ménage. Intervention 48-72h dans toute la Haute-Savoie.
              </p>
              <a
                href="tel:+33679447111"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-accent hover:bg-accent-light rounded-lg font-semibold text-[#1a1f08] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler le 06 79 44 71 11
              </a>
            </div>

            <div className="text-center mt-8">
              <Button to="/" variant="outline">Retour à l'accueil</Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      {/* HERO — Hook pour le guide */}
      <section className="bg-primary py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block bg-accent text-[#1a1f08] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            Guide gratuit · Haute-Savoie 74
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Checklist complète :<br />
            <span className="text-accent">Réussir un débarras après succession</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
            Démarches administratives, tri, estimation des meubles, délais, contacts utiles.
            Tout ce qu'il faut savoir pour libérer un logement en Haute-Savoie, étape par étape.
          </p>

          {/* Preuves sociales compactes */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" /> 6 sections détaillées
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" /> ~10 min de lecture
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" /> Contacts locaux 74
            </span>
          </div>
        </div>
      </section>

      {/* FORMULAIRE DE CAPTURE */}
      <section className="bg-surface py-10 sm:py-14 md:py-16">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center">
              Recevoir la checklist gratuitement
            </h2>
            <p className="text-muted text-sm text-center mb-8">
              Saisissez vos coordonnées. Nous vous l'envoyons immédiatement + un conseiller peut vous aider si besoin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-body mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all"
                  placeholder="Votre nom"
                  aria-invalid={!!fieldErrors.nom}
                />
                {fieldErrors.nom && <p className="text-error text-xs mt-1">{fieldErrors.nom}</p>}
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-body mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all"
                  placeholder="06 XX XX XX XX"
                  aria-invalid={!!fieldErrors.telephone}
                />
                {fieldErrors.telephone && <p className="text-error text-xs mt-1">{fieldErrors.telephone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-body mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all"
                  placeholder="votre@email.fr"
                  aria-invalid={!!fieldErrors.email}
                />
                {fieldErrors.email && <p className="text-error text-xs mt-1">{fieldErrors.email}</p>}
              </div>

              {error && <p className="text-error text-sm text-center">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 bg-accent text-[#1a1f08] hover:bg-accent-light shadow-lg hover:shadow-xl disabled:opacity-60 cursor-pointer text-base sm:text-lg"
              >
                {sending ? 'Envoi en cours...' : '📋 Recevoir la checklist gratuite'}
              </button>
            </form>

            {/* Réassurance */}
            <div className="mt-6 pt-6 border-t border-surface-dark space-y-2.5">
              <p className="flex items-center gap-2 text-xs text-muted">
                <svg className="w-4 h-4 text-primary-light flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Vos données ne sont jamais revendues. RGPD respecté.
              </p>
              <p className="flex items-center gap-2 text-xs text-muted">
                <svg className="w-4 h-4 text-primary-light flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Aucune obligation. Appel gratuit et sans engagement.
              </p>
              <p className="flex items-center gap-2 text-xs text-muted">
                <svg className="w-4 h-4 text-primary-light flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Intervention 48-72h dans toute la Haute-Savoie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEASER — Aperçu du contenu */}
      <section className="bg-surface-dark py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center">
            Ce que contient le guide
          </h2>
          <p className="text-muted text-sm text-center mb-8">
            6 sections pratiques, directement applicables.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHECKLIST_SECTIONS.map((section) => (
              <div key={section.title} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-none">{section.icon}</span>
                  <div>
                    <h3 className="font-bold text-primary text-sm mb-1">{section.title}</h3>
                    <p className="text-muted text-xs">{section.items.length} points · {section.delay}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
