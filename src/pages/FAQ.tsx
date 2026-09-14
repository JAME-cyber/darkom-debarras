import { useState } from 'react';
import Button from '../components/Button';
import useSEO from '../hooks/useSEO';
import { useLang } from '../i18n/LanguageContext';

const faqItems = {
  fr: [
    {
      question: 'Combien coûte un débarras ?',
      answer: "Nos tarifs commencent à partir de 250€ pour un débarras simple. Le prix exact dépend du volume à évacuer, de l'accessibilité du lieu, de l'étage et de la présence d'un ascenseur. Chaque projet fait l'objet d'un devis gratuit et personnalisé, sans engagement."
    },
    {
      question: "Quel est le délai d'intervention ?",
      answer: "Nous intervenons généralement dans les 48 à 72 heures après acceptation du devis. Pour les cas urgents (décès, expulsion, dégât des eaux), nous pouvons nous adapter et intervenir plus rapidement. Contactez-nous directement par téléphone pour les urgences."
    },
    {
      question: 'Que deviennent les objets récupérés ?',
      answer: "Nous pratiquons un tri rigoureux de tous les objets : les objets réutilisables sont donnés à des associations locales, les matériaux recyclables sont orientés vers les filières appropriées, et seuls les déchets non valorisables sont évacués en déchetterie. Notre objectif est 100% écoresponsable."
    },
    {
      question: 'Intervenez-vous en urgence ?',
      answer: "Oui, nous proposons un service d'intervention rapide pour les situations urgentes. Suite à un sinistre, un décès ou tout autre besoin immédiat, contactez-nous par téléphone et nous ferons le maximum pour intervenir dans les plus brefs délais."
    },
    {
      question: 'Faut-il être présent lors du débarras ?',
      answer: "Pas nécessairement. Si vous ne pouvez pas être présent, nous organisons la remise des clés à l'avance et nous vous tenons informé par téléphone et photos tout au long de l'intervention. Un mandat simple peut être mis en place si besoin."
    },
    {
      question: 'Quelle zone couvrez-vous ?',
      answer: "Nous intervenons dans toute la Haute-Savoie (74) : Annecy, Annemasse, Thonon-les-Bains, Évian-les-Bains, Sallanches, Cluses, Bonneville, Fillinges, et toutes les communes du département. N'hésitez pas à nous contacter même si votre commune n'est pas listée."
    },
    {
      question: 'Le nettoyage est-il inclus dans le débarras ?',
      answer: "Toutes nos options de nettoyage sont proposées sur demande et sur devis : du balayage simple au nettoyage complet (aspiration, lavage des sols, vitres, sanitaires) en passant par le nettoyage de logement insalubre avec désinfection. Nous établissons un devis adapté à votre situation."
    },
    {
      question: "Comment est calculé le prix d'un débarras ?",
      answer: "Le prix dépend de plusieurs critères : le volume total à évacuer (en m³), le type de bien (maison, appartement, cave, grenier), l'accessibilité (étage, ascenseur, difficulté d'accès), la nature des objets (électroménager, meubles, déchets spéciaux) et les options choisies (nettoyage). Utilisez notre simulateur pour obtenir une estimation rapide."
    },
    {
      question: 'Acceptez-vous les mandats pour les successions ?',
      answer: "Oui, nous sommes régulièrement mandatés pour les successions et héritages. Nous travaillons en collaboration avec les notaires, les familles et les professionnels de l'immobilier. Nous pouvons intervenir sur mandat simple ou procuration."
    },
    {
      question: 'Le devis est-il vraiment gratuit et sans engagement ?',
      answer: "Oui, absolument. La visite technique et le devis sont entièrement gratuits et ne vous engagent à rien. Nous évaluons le volume et la complexité sur place, puis nous vous envoyons un devis détaillé sous 24h. Vous êtes libre d'accepter ou de refuser."
    },
    {
      question: 'Êtes-vous assuré et garanti ?',
      answer: "Oui. Darkom-Debarras dispose d'une assurance Responsabilité Civile Professionnelle (RC Pro) qui couvre les dommages éventuels lors de l'intervention. Notre équipe est expérimentée, encadrée et nous travaillons avec un tri responsable et une traçabilité des objets évacués. Vous êtes protégé du premier contact à la remise des clés."
    }
  ],
  en: [
    {
      question: 'How much does a house clearance cost?',
      answer: 'Our prices start from €250 for a simple clearance. The exact price depends on the volume to be removed, access to the property, the floor level and whether there is a lift. Every project receives a free, personalised, no-obligation quote.'
    },
    {
      question: 'How quickly can you come?',
      answer: 'We usually carry out the work within 48 to 72 hours after the quote is accepted. For urgent situations (bereavement, eviction, water damage) we can adapt and respond faster. Call us directly for emergencies.'
    },
    {
      question: 'What happens to the items you collect?',
      answer: 'We sort every item rigorously: reusable items are donated to local charities, recyclable materials go to the appropriate recycling streams, and only non-recoverable waste is taken to the tip. Our goal is 100% eco-friendly.'
    },
    {
      question: 'Do you offer an emergency service?',
      answer: 'Yes, we offer a rapid response service for urgent situations. After a disaster, a bereavement or any other immediate need, call us and we will do our utmost to come as soon as possible.'
    },
    {
      question: 'Do I need to be present during the clearance?',
      answer: 'Not necessarily. If you cannot be there, we arrange the key handover in advance and keep you updated by phone and photos throughout the job. A simple mandate can be set up if needed.'
    },
    {
      question: 'Which areas do you cover?',
      answer: 'We cover the whole of Haute-Savoie (74): Annecy, Annemasse, Thonon-les-Bains, Évian-les-Bains, Sallanches, Cluses, Bonneville, Fillinges and every commune in the department. Feel free to contact us even if your town is not listed.'
    },
    {
      question: 'Is cleaning included in the clearance?',
      answer: 'All our cleaning options are available on request and quoted separately: from a simple sweep to a full clean (vacuuming, floor washing, windows, sanitary facilities), including deep cleaning of unsanitary homes with disinfection. We tailor the quote to your situation.'
    },
    {
      question: 'How is the price calculated?',
      answer: 'The price depends on several criteria: the total volume to be removed (in m³), the type of property (house, flat, cellar, loft), access (floor, lift, difficult access), the nature of the items (appliances, furniture, special waste) and the options chosen (cleaning). Use our simulator for a quick estimate.'
    },
    {
      question: 'Do you accept mandates for estates?',
      answer: 'Yes, we are regularly appointed for estates and inheritances. We work with notaries, families and property professionals. We can act on a simple mandate or power of attorney.'
    },
    {
      question: 'Is the quote really free and without obligation?',
      answer: 'Yes, absolutely. The on-site survey and the quote are entirely free and commit you to nothing. We assess the volume and complexity on site, then send you a detailed quote within 24h. You are free to accept or decline.'
    },
    {
      question: 'Are you insured?',
      answer: 'Yes. Darkom-Debarras holds professional public liability insurance (RC Pro) covering any damage during the job. Our team is experienced and supervised, we work with responsible sorting and full traceability of removed items. You are protected from first contact to key handover.'
    }
  ],
};

const content = {
  fr: {
    seo: {
      title: 'FAQ — Questions fréquentes | Darkom-Debarras',
      description: "Toutes les réponses à vos questions sur le débarras : tarifs, délais, zone d'intervention, nettoyage, successions. Darkom-Debarras, Haute-Savoie.",
    },
    heroTitle: 'Questions fréquentes',
    heroSubtitle: 'Retrouvez les réponses aux questions les plus posées sur nos services de débarras',
    heroImageAlt: 'Foire aux questions',
    moreTitle: "Vous avez d'autres questions ?",
    moreText: "N'hésitez pas à nous contacter, nous répondons sous 24h.",
    contactCta: 'Nous contacter',
  },
  en: {
    seo: {
      title: 'FAQ — Frequently asked questions | Darkom-Debarras',
      description: 'All the answers to your questions about house clearance: prices, timeframes, coverage area, cleaning, estates. Darkom-Debarras, Haute-Savoie.',
    },
    heroTitle: 'Frequently asked questions',
    heroSubtitle: 'Find the answers to the most common questions about our clearance services',
    heroImageAlt: 'Frequently asked questions',
    moreTitle: 'Any other questions?',
    moreText: 'Feel free to contact us — we reply within 24h.',
    contactCta: 'Contact us',
  },
};

interface FAQEntry {
  question: string;
  answer: string;
}

function FAQItem({ item, index, isOpen, onToggle }: {
  item: FAQEntry;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-primary pr-4 text-sm sm:text-base">{item.question}</span>
        <svg
          aria-hidden="true"
          className={`w-5 h-5 text-primary-light flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted text-sm sm:text-base leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: '/faq',
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=fit&crop=w=1600&q=80"
          alt={t.heroImageAlt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]">
              {t.heroTitle}
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems[lang].map((item, index) => (
              <FAQItem
                key={index}
                index={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">
              {t.moreTitle}
            </h2>
            <p className="text-muted mb-6">
              {t.moreText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to={`${prefix}/contact`} variant="primary">
                {t.contactCta}
              </Button>
              <a
                href="tel:+336****7111"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 79 44 71 11
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
