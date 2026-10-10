import Button from '../components/Button';
import useSEO from '../hooks/useSEO';

interface ZoneCase {
  title: string;
  text: string;
}

interface ZoneContent {
  slug: string;
  seo: { title: string; description: string };
  h1: string;
  intro: string;
  cases: ZoneCase[];
  localTitle: string;
  localItems: string[];
  faq: { q: string; a: string }[];
}

/**
 * Pages zone SEO — une page par zone prioritaire (STRATEGIE-ZONES.md).
 * Objectif: capter "débarras [ville]" + variantes "vidage/vider" que la
 * concurrence locale possède et qui sont absentes du reste du site.
 * FR uniquement: la demande locale est francophone (les pages EN des zones
 * n'auraient aucun volume de recherche).
 */
export const ZONES: ZoneContent[] = [
  {
    slug: 'debarras-annemasse',
    seo: {
      title: 'Débarras Annemasse 74100 | Vidage maison & appartement — Devis gratuit',
      description:
        "Débarras et vidage de maison, appartement, cave ou garage à Annemasse et son agglomération (74100, 74160, 74230). Intervention 48-72h, 55 €/m³, tri et recyclage inclus. Devis gratuit sous 24h.",
    },
    h1: 'Débarras à Annemasse et son agglomération',
    intro:
      "Vous devez vider une maison, un appartement ou une cave à Annemasse, Vétraz-Monthoux, Thyez ou Saint-Julien-en-Genevois ? Darkom-Debarras intervient sous 48 à 72h dans tout le Genevois français. Basés à Fillinges, à 15 minutes d'Annemasse, nous garantissons un vidage complet : tri, valorisation des meubles, évacuation des encombrants et nettoyage sommaire.",
    cases: [
      {
        title: 'Vidage d\'appartement avant relocation',
        text: "Turnover locatif fréquent sur l'agglomération : nous vidons et nettoyons votre logement entre deux locataires, délai serré respecté.",
      },
      {
        title: 'Débarras de succession à Annemasse',
        text: "Nous coordonnons le vidage avec le notaire et les héritiers : inventaire, tri des objets de valeur, don aux associations, évacuation du reste.",
      },
      {
        title: 'Cave, grenier et garage',
        text: "Videz votre cave ou votre garage à Annemasse dès 275 € : encombrants, électroménager, archives, tout est trié et recyclé en déchetterie professionnelle.",
      },
    ],
    localTitle: 'Zone d\'intervention autour d\'Annemasse',
    localItems: [
      'Annemasse (74100), Vétraz-Monthoux, Thyez, Ambilly, Ville-la-Grand',
      'Saint-Julien-en-Genevois (74160), Séez, Viry, Valleiry',
      'Gaillard (74230), Arthaz-Pont-Notre-Dame, Reignier-Ésery',
      'Fillinges, Bogève, Saint-Cergues, Machilly',
    ],
    faq: [
      {
        q: 'Quel est le tarif d\'un débarras à Annemasse ?',
        a: "Le tarif est de 55 €/m³ : une cave ou un garage commence à 275 €, un appartement T1-T3 entre 1 100 et 3 300 €. La valorisation de vos meubles est déduite du devis. Visite technique gratuite à Annemasse et dans tout le Genevois.",
      },
      {
        q: 'Intervenez-vous vite pour un vidage urgent ?',
        a: "Oui. Nous intervenons sous 48 à 72h sur Annemasse — notre siège de Fillinges est à 15 minutes. Pour les urgences de libération de logement, contactez-nous directement au 06 79 44 71 11.",
      },
    ],
  },
  {
    slug: 'debarras-annecy',
    seo: {
      title: 'Débarras Annecy 74000 | Vidage maison, succession — 55 €/m³',
      description:
        "Débarras professionnel à Annecy et son bassin (74000, 74960, 74650) : vidage maison, appartement, cave, succession. Intervention 48-72h depuis la Haute-Savoie. Devis gratuit sous 24h.",
    },
    h1: 'Débarras à Annecy et son bassin',
    intro:
      "Marché immobilier le plus actif du 74, Annecy génère une demande constante de débarras : successions, ventes de biens, rotations locatives. Darkom-Debarras vide votre maison, appartement ou cave à Annecy, Seynod, Cran-Gevrier, Annecy-le-Vieux ou Metz-Tessy sous 48 à 72h, au tarif unique de 55 €/m³ avec tri responsable et recyclage inclus.",
    cases: [
      {
        title: 'Succession et vente de bien',
        text: "Un bien familial à vendre à Annecy ? Nous vidons l'intégralité après l'acte du notaire : estimation des meubles, don aux associations (Emmaüs Annecy, Croix-Rouge 74), évacuation complète et logement rendu propre pour la mise en vente.",
      },
      {
        title: 'Débarras d\'appartement en centre-ville',
        text: "Immeubles anciens, étages sans ascenseur : nos équipes vident les appartements du centre d'Annecy et d'Annecy-le-Vieux avec le matériel adapté, sans dégâts aux parties communes.",
      },
      {
        title: 'Villas et résidences du bassin annécien',
        text: "Vidé de villa complète avant travaux ou achat à Metz-Tessy, Seynod, Cran-Gevrier : devis sur visite, volume confirmé, valorisation déduite.",
      },
    ],
    localTitle: 'Zone d\'intervention autour d\'Annecy',
    localItems: [
      'Annecy (74000), Annecy-le-Vieux, Seynod, Cran-Gevrier',
      'Metz-Tessy (74960), Seythenex, Lathuile',
      'Sévrier, Saint-Jorioz (74650), barrage du lac',
      'Veyrier-du-Lac, Menthon-Saint-Bernard, Talloires',
    ],
    faq: [
      {
        q: 'Faites-vous les débarras de succession à Annecy ?',
        a: "Oui, c'est l'un de nos cœurs de métier. Nous travaillons régulièrement avec les notaires et agences immobilières d'Annecy : inventaire validé, tri des objets de valeur, dons aux associations locales, vidage complet. Notre guide gratuit de débarras après succession détaille chaque étape.",
      },
      {
        q: 'Le prix monte-t-il pour Annecy (distance) ?',
        a: "Non. Le tarif reste 55 €/m³ sur tout le bassin annécien, sans surcoût de distance : Annecy est à 40 minutes de notre siège de Fillinges.",
      },
    ],
  },
  {
    slug: 'debarras-thonon-evian',
    seo: {
      title: 'Débarras Thonon-les-Bains & Évian (74200, 74500) | Vidage & succession',
      description:
        "Débarras et vidage de maison à Thonon-les-Bains, Évian-les-Bains, Publier et la rive sud du Léman (74200, 74500). Successions, résidences secondaires, retraités. 55 €/m³, devis gratuit.",
    },
    h1: 'Débarras à Thonon-les-Bains et Évian — rive sud du Léman',
    intro:
      "La rive sud du Léman concentre successions, résidences secondaires à vider et transmissions familiales. Darkom-Debarras intervient à Thonon-les-Bains, Évian-les-Bains, Publier, Amphion et Margencel pour vider maisons, appartements et caves sous 48 à 72h — avec le tri, la valorisation des meubles et l'évacuation inclus dans le forfait m³.",
    cases: [
      {
        title: 'Résidences secondaires à vider',
        text: "Vente ou transmission d'une résidence secondaire du Léman ? Nous vidons la totalité, des meubles de saison aux équipements, et rendons le bien prêt pour l'agence.",
      },
      {
        title: 'Débarras après décès à Thonon et Évian',
        text: "Nous accompagnons les familles sur toute la rive sud : coordination avec le notaire, tri affectif à votre rythme, puis vidage complet et nettoyage sommaire.",
      },
      {
        title: 'Appartements et maisons de ville',
        text: "Thonon centre, Évian, Publier : vidage d'appartements et maisons de ville au tarif de 55 €/m³, devis gratuit après visite technique.",
      },
    ],
    localTitle: 'Zone d\'intervention — rive sud du Léman',
    localItems: [
      'Thonon-les-Bains (74200), Margencel, Allinges, Perrignier',
      'Évian-les-Bains (74500), Publier, Neuvecelle, Amphion-les-Bains',
      'Douvaine, Veigy-Foncenex, ballade frontalière',
      'Sciez, Excenevex, Bons-en-Chablais',
    ],
    faq: [
      {
        q: 'Intervenez-vous sur les communes entre Thonon et Évian ?',
        a: "Oui, toute la rive sud : Publier, Neuvecelle, Amphion, Margencel, Perrignier, Allinges, Douvaine et Sciez. Intervention sous 48-72h, tarif identique de 55 €/m³.",
      },
      {
        q: 'Pouvez-vous vider une résidence secondaire en votre absence ?',
        a: "Oui. Beaucoup de propriétaires de résidences secondaires du Léman habitent loin (Genève, Paris, étranger). Nous réalisons la visite technique et le vidage avec reportage photo, et vous tenons informé à chaque étape.",
      },
    ],
  },
  {
    slug: 'debarras-cluses-sallanches',
    seo: {
      title: 'Débarras Cluses & Sallanches (74300, 74700) | Vidage appartement, garage',
      description:
        "Débarras et vidage à Cluses, Sallanches, Megève et la vallée de l\'Arve (74300, 74700, 74170) : appartements denses, logements locatifs, garages. 55 €/m³, intervention 48-72h.",
    },
    h1: 'Débarras dans la vallée de l\'Arve — Cluses, Sallanches, Megève',
    intro:
      "Vallée industrielle aux logements denses et au fort turnover locatif : bailleurs et syndics de la vallée de l\'Arve font appel à Darkom-Debarras pour vider les appartements entre deux locataires, évacuer les encombrants laissés et rendre les logements décents. Nous couvrons Cluses, Sallanches, Scionzier, Marnaz, La Roche-sur-Foron et Passy.",
    cases: [
      {
        title: 'Logements locatifs à vider',
        text: "Locataire parti en laissant meubles et encombrants ? Nous vidons l'appartement sous 48-72h pour une nouvelle mise en location, avec nettoyage sommaire sur demande.",
      },
      {
        title: 'Garages et caves de résidences',
        text: "Les copropriétés de la vallée accumulent encombrants et archives dans les caves. Vidage au forfait m³, évacuation en déchetterie professionnelle.",
      },
      {
        title: 'Débarras à Megève et Combloux',
        text: "Chalets et appartements de station : vidage complet avant vente, travaux ou changement de saison, avec soin apporté aux meubles valorisables.",
      },
    ],
    localTitle: 'Zone d\'intervention — vallée de l\'Arve',
    localItems: [
      'Cluses (74300), Scionzier, Marnaz, Nancy-sur-Cluses',
      'Sallanches (74700), Combloux, Megève, Praz-sur-Arly',
      'La Roche-sur-Foron (74800), Saint-Pierre-en-Faucigny',
      'Passy (74190), Saint-Gervais-les-Bains, Servoz',
    ],
    faq: [
      {
        q: 'Travaillez-vous avec les syndics et bailleurs ?',
        a: "Oui. Nous intervenons régulièrement pour des syndics et bailleurs de la vallée de l'Arve : vidage de logements après départ de locataire, remise en état, évacuation d'encombrants en parties communes. Facturation professionnelle avec TVA.",
      },
      {
        q: 'Débarras de chalet à Megève : comment est-ce chiffré ?',
        a: "Au volume réel, 55 €/m³, avec la valorisation des meubles (souvent élevée dans les stations) déduite du devis. Visite technique gratuite sur rendez-vous — Megève est à 35 minutes de notre siège.",
      },
    ],
  },
  {
    slug: 'debarras-genevois-frontalier',
    seo: {
      title: 'Débarras Genevois frontalier | Vidage maison 74160-74540 — Darkom',
      description:
        "Débarras pour frontaliers et propriétaires du Genevois (74160, 74380, 74540) : vidage de villas, rénovations, successions transfrontalières. Basés à Fillinges. 55 €/m³, devis gratuit.",
    },
    h1: 'Débarras dans le Genevois frontalier',
    intro:
      "Propriétaires frontaliers, villas en rénovation, successions franco-suisses : le Genevois français a des besoins spécifiques. Basés à Fillinges, au cœur du Genevois, nous vidons maisons, villas, caves et greniers à Saint-Julien-en-Genevois, Saint-Cergues, Veigy-Foncenex et dans toutes les communes frontalières — avec une flexibilité horaires adaptée aux agendas de frontaliers (interventions possibles le samedi).",
    cases: [
      {
        title: 'Vidage avant travaux de rénovation',
        text: "Villa du Genevois à rénifer ? Nous vidons l'intégralité avant les travaux : meubles, cuisines, sanitaires, isolants anciens. Évacuation en conteneur ou par rotations selon l'accès.",
      },
      {
        title: 'Successions franco-suisses',
        text: "Biens en France, héritiers en Suisse : nous coordonnons le vidage à distance (visite par visio, reportage photo, inventaire partagé) pour les familles qui ne peuvent pas se déplacer.",
      },
      {
        title: 'Débarras de villas et grands volumes',
        text: "Les villas du Genevois dépassent souvent 80 m³ : forfait sur devis après visite, valorisation des biens déduite, nettoyage final possible.",
      },
    ],
    localTitle: 'Zone d\'intervention — Genevois frontalier',
    localItems: [
      'Saint-Julien-en-Genevois (74160), Séez, Viry, Valleiry, Chêne-Bougeries frontière',
      'Fillinges (74250), Bogève, Villard, Burdignin',
      'Sciez (74140), Veigy-Foncenex (74540), Margencel côté lac',
      'Saint-Cergues (74140), Machilly, Juvigny',
    ],
    faq: [
      {
        q: 'Je suis frontalier, pouvez-vous intervenir le samedi ?',
        a: "Oui. Nous proposons des créneaux le samedi (8h-19h) dans tout le Genevois pour les propriétaires qui travaillent en Suisse en semaine. La visite technique peut aussi se faire en visio.",
      },
      {
        q: 'Gérez-vous les biens dont les héritiers sont en Suisse ?',
        a: "Oui, c'est un cas fréquent dans le Genevois. Processus à distance : visite technique en visio ou avec une personne de confiance sur place, devis et inventaire par email, reportage photo du vidage, facturation sans déplacement des héritiers.",
      },
    ],
  },
];

export default function ZonePage({ zone }: { zone: ZoneContent }) {
  const t = zone;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const areaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Débarras et vidage de logement',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Darkom-Debarras',
      url: 'https://darkom-debarras.fr',
      telephone: '+33679447111',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fillinges',
        postalCode: '74250',
        addressRegion: 'Haute-Savoie',
        addressCountry: 'FR',
      },
    },
    areaServed: t.localItems.map((label) => ({
      '@type': 'City',
      name: label.split('(')[0].split(',')[0].trim(),
    })),
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '55',
        priceCurrency: 'EUR',
        unitText: 'm³',
      },
    },
    url: `https://darkom-debarras.fr/${t.slug}`,
  };

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: `/${t.slug}`,
    jsonLd: [faqSchema, areaSchema],
  });

  return (
    <main>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 md:pt-28 pb-16 bg-primary/85 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/favicon.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold mb-2 tracking-wide uppercase text-sm">
            Haute-Savoie · Intervention 48-72h
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            {t.h1}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl drop-shadow-sm">{t.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact" variant="secondary">
              Devis gratuit sous 24h
            </Button>
            <a
              href="tel:+33679447111"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              06 79 44 71 11
            </a>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">
            Nos interventions dans cette zone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.cases.map((c) => (
              <article
                key={c.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{c.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Communes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            {t.localTitle}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.localItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted">
                <span className="text-accent font-bold mt-0.5" aria-hidden="true">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ locale */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {t.faq.map((f) => (
              <details
                key={f.q}
                className="bg-white rounded-lg p-5 shadow-sm border border-gray-100"
              >
                <summary className="font-semibold text-primary cursor-pointer">
                  {f.q}
                </summary>
                <p className="mt-3 text-muted text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Autres zones */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted mb-4">Nous intervenons aussi :</p>
          <div className="flex flex-wrap justify-center gap-3">
            {ZONES.filter((z) => z.slug !== t.slug).map((z) => (
              <Button key={z.slug} to={`/${z.slug}`} variant="outline">
                {z.h1.split('—')[0].trim()}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
