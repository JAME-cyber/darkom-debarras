import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/LanguageContext';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonialsByLang: Record<Lang, Testimonial[]> = {
  fr: [
    { name: "Marie L.", location: "Annemasse", text: "Service excellent ! L'équipe a été très professionnelle et rapide. Mon garage n'a jamais été aussi rangé. Je recommande fortement.", rating: 5 },
    { name: "Philippe M.", location: "Thonon-les-Bains", text: "Après le décès de ma mère, nous avions un appartement entier à vider. Darkom a géré toute la succession avec beaucoup de tact et d'efficacité.", rating: 5 },
    { name: "Sophie B.", location: "Fillinges", text: "Intervention en moins de 48h comme promis. Équipe sérieuse et respectueuse. Le tri écologique m'a particulièrement plu.", rating: 5 },
    { name: "Jean-Luc R.", location: "Annecy", text: "Devis clair et sans surprise. L'équipe est venue avec le bon matériel et a tout évacué en une journée. Très professionnel.", rating: 5 },
    { name: "Nathalie D.", location: "Thonon-les-Bains", text: "Je recommande vivement. Ponctuels, soigneux et très humains dans un moment difficile. L'appartement a été rendu impeccable.", rating: 5 },
    { name: "Christophe B.", location: "Annemasse", text: "Rapport qualité-prix imbattable. Ils ont même récupéré des meubles valorisables et déduit leur valeur du devis final.", rating: 5 },
    { name: "Isabelle T.", location: "Évian-les-Bains", text: "Succession familiale à gérer à distance depuis Paris. Photos et vidéos à chaque étape, tout s'est fait sans que je me déplace.", rating: 5 },
    { name: "Sébastien F.", location: "Cluses", text: "Débarras de cave très rapide. Tri soigné, une partie partie en recyclerie. Exactement ce que je cherchais.", rating: 5 },
    { name: "Céline M.", location: "Annecy", text: "Après le départ de notre locataire, l'appartement était dans un état lamentable. Darkom a tout remis en état en 48h chrono.", rating: 5 },
    { name: "Ahmed K.", location: "Saint-Julien-en-Genevois", text: "Entreprise sérieuse, devis respecté au centime près. Je les ai recommandés à deux voisins déjà.", rating: 5 },
    { name: "Françoise P.", location: "Sallanches", text: "Maison entière à vider après le décès de mon époux. Ils ont pris le temps d'expliquer, rien n'a été jeté sans validation.", rating: 5 },
    { name: "David G.", location: "Annemasse", text: "Garage et grenier débarrassés en une matinée. Équipe sympa et efficace, je rappellerai pour la cave.", rating: 5 },
    { name: "Valérie H.", location: "Thonon-les-Bains", text: "Le simulateur en ligne m'a donné un ordre d'idée du prix avant même la visite. Très transparent comme façon de travailler.", rating: 4 },
    { name: "Olivier S.", location: "Annecy", text: "Débarras de bureau lors de notre déménagement. Discrétion totale, horaires respectés, zéro couac.", rating: 5 },
    { name: "Sandrine V.", location: "Fillinges", text: "Intervention le week-end pour respecter nos contraintes. Les objets de valeur ont été mis de côté pour nous.", rating: 5 },
    { name: "Michel A.", location: "Évian-les-Bains", text: "Deux bennes évacuées, maison rendue propre. Le rapport photos final est un vrai plus.", rating: 5 },
    { name: "Laurence C.", location: "Cluses", text: "Suite à un problème de santé, il fallait vider vite. Ils se sont adaptés à mon budget sans rien imposer.", rating: 5 },
    { name: "Thierry N.", location: "Annemasse", text: "Enfin une entreprise qui fait ce qu'elle annonce. Devis sous 24h, intervention sous 72h, prix ferme.", rating: 5 },
    { name: "Corinne L.", location: "Saint-Julien-en-Genevois", text: "Appartement de ma tante vidé et nettoyé en deux jours. Le gardien de l'immeuble a même complimenté le travail.", rating: 5 },
    { name: "Hugues D.", location: "Annecy", text: "Brocanteur partenaire trouvé par Darkom pour racheter le mobilier, facture finale réduite de moitié. Bravo.", rating: 5 },
    { name: "Monique F.", location: "Thonon-les-Bains", text: "Équipe adorable avec ma mère de 87 ans, très patiente. Le nettoyage final était impeccable.", rating: 5 },
    { name: "Alexandre P.", location: "Sallanches", text: "Débarras après travaux, plâtriers et gravats inclus. Devis détaillé au m³, rien à redire.", rating: 5 },
    { name: "Karine R.", location: "Annemasse", text: "Réponse à ma demande le jour même, visite gratuite le lendemain. Chantier fait la semaine d'après.", rating: 5 },
    { name: "Bruno M.", location: "Fillinges", text: "Deuxième intervention chez moi (cave puis maison). Fidèle client, ils sont au top.", rating: 5 },
    { name: "Josiane E.", location: "Évian-les-Bains", text: "Héritage compliqué, famille à l'étranger. Ils ont géré les photos, les envois de documents, tout à distance.", rating: 5 },
  ],
  en: [
    { name: "Marie L.", location: "Annemasse", text: "Excellent service! The team was very professional and quick. My garage has never been so tidy. Highly recommended.", rating: 5 },
    { name: "Philippe M.", location: "Thonon-les-Bains", text: "After my mother passed away, we had a whole flat to clear. Darkom handled the entire estate with great tact and efficiency.", rating: 5 },
    { name: "Sophie B.", location: "Fillinges", text: "Came in under 48h as promised. Serious and respectful team. I particularly liked the eco-friendly sorting.", rating: 5 },
    { name: "Jean-Luc R.", location: "Annecy", text: "Clear quote, no surprises. The team arrived with the right equipment and cleared everything in one day. Very professional.", rating: 5 },
    { name: "Nathalie D.", location: "Thonon-les-Bains", text: "I highly recommend them. Punctual, careful and very human at a difficult time. The flat was left spotless.", rating: 5 },
    { name: "Christophe B.", location: "Annemasse", text: "Unbeatable value for money. They even recovered resellable furniture and deducted its value from the final invoice.", rating: 5 },
    { name: "Isabelle T.", location: "Évian-les-Bains", text: "Family estate to manage remotely from Paris. Photos and videos at every stage — everything was done without me travelling.", rating: 5 },
    { name: "Sébastien F.", location: "Cluses", text: "Very quick cellar clearance. Careful sorting, part went to a charity shop. Exactly what I was looking for.", rating: 5 },
    { name: "Céline M.", location: "Annecy", text: "After our tenant left, the flat was in a terrible state. Darkom put everything right in 48 hours flat.", rating: 5 },
    { name: "Ahmed K.", location: "Saint-Julien-en-Genevois", text: "Reliable company, quote honoured to the cent. I have already recommended them to two neighbours.", rating: 5 },
    { name: "Françoise P.", location: "Sallanches", text: "Whole house to clear after my husband passed away. They took the time to explain; nothing was thrown away without approval.", rating: 5 },
    { name: "David G.", location: "Annemasse", text: "Garage and loft cleared in one morning. Friendly, efficient team — I'll call them back for the cellar.", rating: 5 },
    { name: "Valérie H.", location: "Thonon-les-Bains", text: "The online simulator gave me a ballpark price before the visit even happened. A very transparent way of working.", rating: 4 },
    { name: "Olivier S.", location: "Annecy", text: "Office clearance during our move. Total discretion, schedules respected, zero hiccups.", rating: 5 },
    { name: "Sandrine V.", location: "Fillinges", text: "Weekend intervention to fit our constraints. Valuable items were set aside for us.", rating: 5 },
    { name: "Michel A.", location: "Évian-les-Bains", text: "Two skips removed, house left clean. The final photo report is a real plus.", rating: 5 },
    { name: "Laurence C.", location: "Cluses", text: "Following health problems, we had to empty fast. They adapted to my budget without imposing anything.", rating: 5 },
    { name: "Thierry N.", location: "Annemasse", text: "Finally a company that does what it promises. Quote within 24h, work within 72h, firm price.", rating: 5 },
    { name: "Corinne L.", location: "Saint-Julien-en-Genevois", text: "My aunt's flat emptied and cleaned in two days. Even the building caretaker complimented the work.", rating: 5 },
    { name: "Hugues D.", location: "Annecy", text: "A second-hand dealer found by Darkom bought the furniture — the final bill was halved. Well done.", rating: 5 },
    { name: "Monique F.", location: "Thonon-les-Bains", text: "Lovely team with my 87-year-old mother, very patient. The final clean was impeccable.", rating: 5 },
    { name: "Alexandre P.", location: "Sallanches", text: "Post-renovation clearance, plaster and rubble included. Detailed quote per m³, nothing to fault.", rating: 5 },
    { name: "Karine R.", location: "Annemasse", text: "Same-day reply to my request, free visit the next day. Job done the following week.", rating: 5 },
    { name: "Bruno M.", location: "Fillinges", text: "Second job at my place (cellar then house). Loyal customer — they are top notch.", rating: 5 },
    { name: "Josiane E.", location: "Évian-les-Bains", text: "Complicated inheritance, family abroad. They handled photos, document shipments, everything remotely.", rating: 5 },
  ],
};

const labels = {
  fr: { title: 'Ce que disent nos clients', subtitle: 'La satisfaction de nos clients est notre meilleure publicité', count: 'avis clients' },
  en: { title: 'What our clients say', subtitle: "Our clients' satisfaction is our best advertising", count: 'client reviews' },
};

function Star({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const { lang } = useLang();
  const testimonials = testimonialsByLang[lang];
  const t = labels[lang];

  const average =
    testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
  const rounded = Math.round(average * 10) / 10;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent" />
            ))}
          </div>
          <p className="text-lg font-semibold text-primary">
            {rounded}/5 — {testimonials.length} {t.count}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>

              <p className="text-body mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Darkom-Debarras",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": rounded,
              "reviewCount": testimonials.length,
              "bestRating": 5,
              "worstRating": 1
            }
          })
        }}
      />
    </section>
  );
}
