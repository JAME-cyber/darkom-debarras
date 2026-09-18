import Button from '../components/Button';
import useSEO from '../hooks/useSEO';
import { useLang } from '../i18n/LanguageContext';

const content: {
  fr: { seo: { title: string; description: string }; heroTitle: string; translationNote?: string; sections: { title: string; paragraphs: string[] }[]; backHome: string };
  en: { seo: { title: string; description: string }; heroTitle: string; translationNote?: string; sections: { title: string; paragraphs: string[] }[]; backHome: string };
} = {
  fr: {
    seo: {
      title: 'Mentions légales | Darkom-Debarras',
      description: 'Mentions légales du site Darkom-Debarras, service de débarras professionnel en Haute-Savoie.',
    },
    heroTitle: 'Mentions légales',
    sections: [
      {
        title: '1. Éditeur du site',
        paragraphs: [
          '**Darkom-Debarras**\nSIRET : 951 853 654 00014\nSiège social : 74250 Fillinges, Haute-Savoie, France\nTéléphone : 06 79 44 71 11\nEmail : darkom-debarras@hotmail.com\nDirecteur de la publication : Madame Laurie Decouvette',
        ],
      },
      {
        title: '2. Hébergeur',
        paragraphs: [
          'Le site darkom-debarras.fr est hébergé par :\n**Vercel Inc.**\n440 N Barranca Ave #4133, Covina, CA 91723, États-Unis\nSite : vercel.com',
        ],
      },
      {
        title: '3. Propriété intellectuelle',
        paragraphs: [
          "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Darkom-Debarras ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
          "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Darkom-Debarras.",
        ],
      },
      {
        title: '4. Limitation de responsabilité',
        paragraphs: [
          "Darkom-Debarras s'efforce d'assurer au mieux l'exactitude des informations diffusées sur son site. Toutefois, Darkom-Debarras ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site.",
          "En conséquence, Darkom-Debarras décline toute responsabilité pour toute inexactitude, erreur ou omission relative aux informations disponibles sur le site ainsi que pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.",
        ],
      },
      {
        title: '5. Liens hypertextes',
        paragraphs: [
          "Le site peut contenir des liens hypertextes vers d'autres sites internet. Darkom-Debarras ne dispose d'aucun moyen de contrôler le contenu de ces sites tiers et n'assume aucune responsabilité à leur égard.",
        ],
      },
      {
        title: '6. Droit applicable',
        paragraphs: [
          'Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.',
        ],
      },
      {
        title: '7. Crédits',
        paragraphs: [
          'Conception et développement du site : [À compléter]\nPhotographies : [À compléter]\nDernière mise à jour : juin 2026',
        ],
      },
    ],
    backHome: "Retour à l'accueil",
  },
  en: {
    seo: {
      title: 'Legal notice | Darkom-Debarras',
      description: 'Legal notice of the Darkom-Debarras website, professional house clearance service in Haute-Savoie, France.',
    },
    heroTitle: 'Legal notice',
    translationNote: 'This is a translation of the French legal notice provided for information purposes; the French version prevails.',
    sections: [
      {
        title: '1. Website publisher',
        paragraphs: [
          '**Darkom-Debarras**\nSIRET: 951 853 654 00014\nRegistered office: 74250 Fillinges, Haute-Savoie, France\nPhone: 06 79 44 71 11\nEmail: darkom-debarras@hotmail.com\nPublishing director: Ms Laurie Decouvette',
        ],
      },
      {
        title: '2. Hosting provider',
        paragraphs: [
          'The darkom-debarras.fr website is hosted by:\n**Vercel Inc.**\n440 N Barranca Ave #4133, Covina, CA 91723, United States\nWebsite: vercel.com',
        ],
      },
      {
        title: '3. Intellectual property',
        paragraphs: [
          'All content on this website (texts, images, graphics, logo, icons, etc.) is the exclusive property of Darkom-Debarras or its partners and is protected by French and international intellectual property laws.',
          'Any reproduction, representation, modification, publication or adaptation of all or part of the elements of the website, by any means or process, is prohibited without the prior written authorisation of Darkom-Debarras.',
        ],
      },
      {
        title: '4. Limitation of liability',
        paragraphs: [
          'Darkom-Debarras strives to ensure the accuracy of the information published on its website. However, Darkom-Debarras cannot guarantee the accuracy, precision or completeness of the information made available on the site.',
          'Consequently, Darkom-Debarras accepts no liability for any inaccuracy, error or omission relating to the information available on the site, nor for any damage resulting from a fraudulent intrusion by a third party causing a modification of the information made available on the site.',
        ],
      },
      {
        title: '5. Hypertext links',
        paragraphs: [
          "The website may contain hypertext links to other websites. Darkom-Debarras has no means of controlling the content of these third-party sites and assumes no responsibility for them.",
        ],
      },
      {
        title: '6. Governing law',
        paragraphs: [
          'These legal notices are governed by French law. In the event of a dispute, the French courts shall have sole jurisdiction.',
        ],
      },
      {
        title: '7. Credits',
        paragraphs: [
          'Website design and development: [To be completed]\nPhotographs: [To be completed]\nLast updated: June 2026',
        ],
      },
    ],
    backHome: 'Back to home',
  },
};

export default function MentionsLegales() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: '/mentions-legales',
    noindex: true,
  });

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              {t.heroTitle}
            </h1>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg space-y-8 text-body">

            {t.translationNote && (
              <p className="text-sm italic text-muted bg-surface rounded-xl p-4 border border-gray-100">
                {t.translationNote}
              </p>
            )}

            {t.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-primary mb-3">{section.title}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-muted leading-relaxed whitespace-pre-line mt-2 first:mt-0">
                    {paragraph.split('**').map((part, j) =>
                      j % 2 === 1 ? <strong key={j} className="text-body">{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
            ))}

          </div>

          <div className="text-center mt-8">
            <Button to={prefix || '/'} variant="outline">{t.backHome}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
