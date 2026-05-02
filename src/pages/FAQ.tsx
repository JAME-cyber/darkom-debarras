import { useState } from 'react';
import Button from '../components/Button';

const faqItems = [
  {
    question: 'Combien coûte un débarras ?',
    answer: 'Nos tarifs commencent à partir de 250€ pour un débarras simple. Le prix exact dépend du volume à évacuer, de l\'accessibilité du lieu, de l\'étage et de la présence d\'un ascenseur. Chaque projet fait l\'objet d\'un devis gratuit et personnalisé, sans engagement.'
  },
  {
    question: 'Quel est le délai d\'intervention ?',
    answer: 'Nous intervenons généralement dans les 48 à 72 heures après acceptation du devis. Pour les cas urgents (décès, expulsion, dégât des eaux), nous pouvons nous adapter et intervenir plus rapidement. Contactez-nous directement par téléphone pour les urgences.'
  },
  {
    question: 'Que deviennent les objets récupérés ?',
    answer: 'Nous pratiquons un tri rigoureux de tous les objets : les objets réutilisables sont donnés à des associations locales, les matériaux recyclables sont orientés vers les filières appropriées, et seuls les déchets non valorisables sont évacués en déchetterie. Notre objectif est 100% écoresponsable.'
  },
  {
    question: 'Intervenez-vous en urgence ?',
    answer: 'Oui, nous proposons un service d\'intervention rapide pour les situations urgentes. Suite à un sinistre, un décès ou tout autre besoin immédiat, contactez-nous par téléphone et nous ferons le maximum pour intervenir dans les plus brefs délais.'
  },
  {
    question: 'Faut-il être présent lors du débarras ?',
    answer: 'Pas nécessairement. Si vous ne pouvez pas être présent, nous organisons la remise des clés à l\'avance et nous vous tenons informé par téléphone et photos tout au long de l\'intervention. Un mandat simple peut être mis en place si besoin.'
  },
  {
    question: 'Quelle zone couvrez-vous ?',
    answer: 'Nous intervenons dans toute la Haute-Savoie (74) : Annecy, Annemasse, Thonon-les-Bains, Évian-les-Bains, Sallanches, Cluses, Bonneville, Fillinges, et toutes les communes du département. N\'hésitez pas à nous contacter même si votre commune n\'est pas listée.'
  },
  {
    question: 'Le nettoyage est-il inclus dans le débarras ?',
    answer: 'Toutes nos options de nettoyage sont proposées sur demande et sur devis : du balayage simple au nettoyage complet (aspiration, lavage des sols, vitres, sanitaires) en passant par le nettoyage de logement insalubre avec désinfection. Nous établissons un devis adapté à votre situation.'
  },
  {
    question: 'Comment est calculé le prix d\'un débarras ?',
    answer: 'Le prix dépend de plusieurs critères : le volume total à évacuer (en m³), le type de bien (maison, appartement, cave, grenier), l\'accessibilité (étage, ascenseur, difficulté d\'accès), la nature des objets (électroménager, meubles, déchets spéciaux) et les options choisies (nettoyage). Utilisez notre simulateur pour obtenir une estimation rapide.'
  },
  {
    question: 'Acceptez-vous les mandats pour les successions ?',
    answer: 'Oui, nous sommes régulièrement mandatés pour les successions et héritages. Nous travaillons en collaboration avec les notaires, les familles et les professionnels de l\'immobilier. Nous pouvons intervenir sur mandat simple ou procuration.'
  },
  {
    question: 'Le devis est-il vraiment gratuit et sans engagement ?',
    answer: 'Oui, absolument. La visite technique et le devis sont entièrement gratuits et ne vous engagent à rien. Nous évaluons le volume et la complexité sur place, puis nous vous envoyons un devis détaillé sous 24h. Vous êtes libre d\'accepter ou de refuser.'
  }
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqItems[number];
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80"
          alt="Foire aux questions"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              Questions fréquentes
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées sur nos services de débarras
            </p>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
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
              Vous avez d'autres questions ?
            </h2>
            <p className="text-muted mb-6">
              N'hésitez pas à nous contacter, nous répondons sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary">
                Nous contacter
              </Button>
              <a
                href="tel:+33679447111"
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
