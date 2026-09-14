import Button from '../components/Button';
import useSEO from '../hooks/useSEO';
import { useLang } from '../i18n/LanguageContext';

const content = {
  fr: {
    seo: {
      title: 'Politique de confidentialité | Darkom-Debarras',
      description: 'Politique de confidentialité et protection des données personnelles — Darkom-Debarras, service de débarras en Haute-Savoie.',
    },
    heroTitle: 'Politique de confidentialité',
    translationNote: '' as string | undefined,
    controllerTitle: '1. Responsable du traitement',
    controllerText: 'Le responsable du traitement des données personnelles est :\n**Darkom-Debarras**\nSIRET : 951 853 654 00014\n74250 Fillinges, Haute-Savoie\nEmail : darkom-debarras@hotmail.com\nTéléphone : 06 79 44 71 11',
    dataTitle: '2. Données collectées',
    dataIntro: 'Dans le cadre de son activité, Darkom-Debarras est amenée à collecter les données personnelles suivantes :',
    dataHeaders: ['Donnée', 'Finalité', 'Base légale'],
    dataRows: [
      ['Nom, prénom', 'Identification et devis', 'Exécution du contrat'],
      ['Adresse email', 'Réponse aux demandes, envoi du devis', 'Exécution du contrat'],
      ['Numéro de téléphone', "Contact et suivi de l'intervention", 'Exécution du contrat'],
      ['Adresse postale / code postal', "Devis et planification d'intervention", 'Exécution du contrat'],
      ['Informations du simulateur (type de bien, volume, etc.)', 'Établissement du devis personnalisé', 'Intérêt légitime'],
    ],
    retentionTitle: '3. Durée de conservation',
    retentionText1: 'Les données personnelles sont conservées pour la durée nécessaire à l\'exécution du contrat de débarras, puis archivées pendant un délai de **5 ans** à compter de la fin de la relation commerciale, conformément aux obligations légales applicables en matière de conservation de documents.',
    retentionText2: 'Au-delà de ce délai, les données sont supprimées ou anonymisées de manière sécurisée.',
    recipientsTitle: '4. Destinataires des données',
    recipientsText1: 'Les données collectées sont destinées exclusivement à Darkom-Debarras et à son personnel habilité. Elles ne sont **jamais vendues, louées ou partagées** avec des tiers à des fins commerciales.',
    recipientsText2: 'Les seuls destinataires potentiels sont :',
    recipientsList: [
      "Le service d'envoi d'emails (EmailJS) pour la transmission des formulaires de contact et simulateur",
      'Les autorités compétentes, si requis par la loi',
    ],
    processorsTitle: '5. Sous-traitants',
    processorsIntro: 'Darkom-Debarras fait appel aux sous-traitants suivants pour le fonctionnement du site :',
    processors: [
      { name: 'EmailJS (EmailJS Inc.)', purpose: 'envoi des emails depuis les formulaires de contact et simulateur de devis', country: 'États-Unis — Transfert encadré par les clauses contractuelles types (SCC)' },
    ],
    rightsTitle: '6. Vos droits',
    rightsIntro: 'Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :',
    rights: [
      { name: "Droit d'accès", desc: 'obtenir une copie de vos données personnelles' },
      { name: 'Droit de rectification', desc: 'corriger des données inexactes ou incomplètes' },
      { name: "Droit à l'effacement", desc: 'demander la suppression de vos données' },
      { name: 'Droit à la limitation du traitement', desc: "restreindre l'utilisation de vos données" },
      { name: "Droit d'opposition", desc: 'vous opposer au traitement de vos données' },
      { name: 'Droit à la portabilité', desc: 'recevoir vos données dans un format structuré' },
    ],
    rightsContact1: 'Pour exercer ces droits, contactez-nous à :\ndarkom-debarras@hotmail.com\nou par courrier : Darkom-Debarras, 74250 Fillinges, Haute-Savoie.',
    rightsComplaint: 'Vous pouvez également introduire une réclamation auprès de la CNIL : www.cnil.fr/fr/plaintes',
    cookiesTitle: '7. Cookies',
    cookiesText1: 'Le site darkom-debarras.fr n\'utilise actuellement **aucun cookie de suivi ou d\'analyse**. Aucun outil d\'analytics (Google Analytics, Facebook Pixel, etc.) n\'est actif sur le site.',
    cookiesText2: "Si cette politique devait évoluer, vous en seriez informé(e) préalablement par l'affichage d'un bandeau de consentement conforme à la réglementation en vigueur.",
    securityTitle: '8. Sécurité',
    securityText: 'Darkom-Debarras met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.',
    changesTitle: '9. Modifications',
    changesText: 'La présente politique de confidentialité peut être mise à jour à tout moment. La date de dernière modification est indiquée ci-dessous. Nous vous invitons à la consulter régulièrement.',
    lastUpdate: 'Dernière mise à jour : juin 2026',
    backHome: "Retour à l'accueil",
  },
  en: {
    seo: {
      title: 'Privacy policy | Darkom-Debarras',
      description: 'Privacy policy and personal data protection — Darkom-Debarras, house clearance service in Haute-Savoie, France.',
    },
    heroTitle: 'Privacy policy',
    translationNote: 'This is a translation of the French privacy policy provided for information purposes; the French version prevails.',
    controllerTitle: '1. Data controller',
    controllerText: 'The controller of personal data is:\n**Darkom-Debarras**\nSIRET: 951 853 654 00014\n74250 Fillinges, Haute-Savoie, France\nEmail: darkom-debarras@hotmail.com\nPhone: 06 79 44 71 11',
    dataTitle: '2. Data collected',
    dataIntro: 'As part of its business, Darkom-Debarras collects the following personal data:',
    dataHeaders: ['Data', 'Purpose', 'Legal basis'],
    dataRows: [
      ['First name, last name', 'Identification and quotes', 'Contract performance'],
      ['Email address', 'Replying to requests, sending quotes', 'Contract performance'],
      ['Phone number', 'Contact and job follow-up', 'Contract performance'],
      ['Postal address / postcode', 'Quoting and job scheduling', 'Contract performance'],
      ['Simulator information (property type, volume, etc.)', 'Preparing a personalised quote', 'Legitimate interest'],
    ],
    retentionTitle: '3. Retention period',
    retentionText1: "Personal data is kept for the time necessary to perform the clearance contract, then archived for a period of **5 years** from the end of the business relationship, in accordance with legal document-retention obligations.",
    retentionText2: 'Beyond this period, the data is securely deleted or anonymised.',
    recipientsTitle: '4. Data recipients',
    recipientsText1: 'The data collected is intended exclusively for Darkom-Debarras and its authorised staff. It is **never sold, rented or shared** with third parties for commercial purposes.',
    recipientsText2: 'The only potential recipients are:',
    recipientsList: [
      'The email delivery service (EmailJS) used to transmit the contact and simulator forms',
      'The competent authorities, where required by law',
    ],
    processorsTitle: '5. Processors',
    processorsIntro: 'Darkom-Debarras uses the following processors to operate the website:',
    processors: [
      { name: 'EmailJS (EmailJS Inc.)', purpose: 'sending emails from the contact form and quote simulator', country: 'United States — Transfer governed by Standard Contractual Clauses (SCC)' },
    ],
    rightsTitle: '6. Your rights',
    rightsIntro: 'In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act, you have the following rights:',
    rights: [
      { name: 'Right of access', desc: 'obtain a copy of your personal data' },
      { name: 'Right to rectification', desc: 'correct inaccurate or incomplete data' },
      { name: 'Right to erasure', desc: 'request the deletion of your data' },
      { name: 'Right to restriction of processing', desc: 'restrict the use of your data' },
      { name: 'Right to object', desc: 'object to the processing of your data' },
      { name: 'Right to portability', desc: 'receive your data in a structured format' },
    ],
    rightsContact1: 'To exercise these rights, contact us at:\ndarkom-debarras@hotmail.com\nor by post: Darkom-Debarras, 74250 Fillinges, Haute-Savoie, France.',
    rightsComplaint: 'You may also lodge a complaint with the CNIL (French data protection authority): www.cnil.fr/fr/plaintes',
    cookiesTitle: '7. Cookies',
    cookiesText1: 'The darkom-debarras.fr website currently uses **no tracking or analytics cookies**. No analytics tool (Google Analytics, Facebook Pixel, etc.) is active on the site.',
    cookiesText2: 'Should this policy change, you would be informed in advance through a consent banner compliant with applicable regulations.',
    securityTitle: '8. Security',
    securityText: 'Darkom-Debarras implements appropriate technical and organisational measures to protect your personal data against unauthorised access, modification, disclosure or destruction.',
    changesTitle: '9. Changes',
    changesText: 'This privacy policy may be updated at any time. The date of the latest update is shown below. We invite you to check it regularly.',
    lastUpdate: 'Last updated: June 2026',
    backHome: 'Back to home',
  },
};

function RichText({ text }: { text: string }) {
  return (
    <p className="text-muted leading-relaxed whitespace-pre-line mt-2 first:mt-0">
      {text.split('**').map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="text-body">{part}</strong> : part
      )}
    </p>
  );
}

export default function PolitiqueConfidentialite() {
  const { lang, prefix } = useLang();
  const t = content[lang];

  useSEO({
    title: t.seo.title,
    description: t.seo.description,
    canonical: '/politique-de-confidentialite',
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

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.controllerTitle}</h2>
              <RichText text={t.controllerText} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.dataTitle}</h2>
              <p className="text-muted leading-relaxed mb-3">{t.dataIntro}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      {t.dataHeaders.map((h) => (
                        <th key={h} className="text-left py-2 pr-4 font-semibold text-primary">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    {t.dataRows.map((row, i) => (
                      <tr key={i} className={i < t.dataRows.length - 1 ? 'border-b border-gray-100' : ''}>
                        {row.map((cell, j) => (
                          <td key={j} className={j < row.length - 1 ? 'py-2 pr-4' : 'py-2'}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.retentionTitle}</h2>
              <RichText text={t.retentionText1} />
              <p className="text-muted leading-relaxed mt-2">{t.retentionText2}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.recipientsTitle}</h2>
              <RichText text={t.recipientsText1} />
              <p className="text-muted leading-relaxed mt-2">{t.recipientsText2}</p>
              <ul className="list-disc list-inside text-muted mt-1 space-y-1">
                {t.recipientsList.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.processorsTitle}</h2>
              <p className="text-muted leading-relaxed">{t.processorsIntro}</p>
              <div className="mt-2 space-y-2 text-muted">
                {t.processors.map((p) => (
                  <div key={p.name} className="bg-surface rounded-lg p-3">
                    <p className="font-semibold text-body">{p.name}</p>
                    <p className="text-sm">Purpose: {p.purpose}</p>
                    <p className="text-sm">Country: {p.country}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.rightsTitle}</h2>
              <p className="text-muted leading-relaxed mb-3">{t.rightsIntro}</p>
              <ul className="space-y-2 text-muted">
                {t.rights.map((right) => (
                  <li key={right.name} className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span><strong className="text-body">{right.name}</strong> — {right.desc}</span>
                  </li>
                ))}
              </ul>
              <RichText text={t.rightsContact1} />
              <p className="text-muted leading-relaxed mt-2">
                {t.rightsComplaint}{' '}
                <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">
                  www.cnil.fr/fr/plaintes
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.cookiesTitle}</h2>
              <RichText text={t.cookiesText1} />
              <p className="text-muted leading-relaxed mt-2">{t.cookiesText2}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.securityTitle}</h2>
              <p className="text-muted leading-relaxed">{t.securityText}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">{t.changesTitle}</h2>
              <p className="text-muted leading-relaxed">{t.changesText}</p>
              <p className="text-muted mt-2">
                <strong className="text-body">{t.lastUpdate}</strong>
              </p>
            </div>

          </div>

          <div className="text-center mt-8">
            <Button to={prefix || '/'} variant="outline">{t.backHome}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
