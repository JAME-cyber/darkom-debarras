import Button from '../components/Button';
import useSEO from '../hooks/useSEO';

export default function PolitiqueConfidentialite() {
  useSEO({
    title: 'Politique de confidentialité | Darkom-Debarras',
    description: 'Politique de confidentialité et protection des données personnelles — Darkom-Debarras, service de débarras en Haute-Savoie.',
    canonical: '/politique-de-confidentialite',
  });

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              Politique de confidentialité
            </h1>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg space-y-8 text-body">

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Responsable du traitement</h2>
              <p className="text-muted leading-relaxed">
                Le responsable du traitement des données personnelles est :<br />
                <strong className="text-body">Darkom-Debarras</strong><br />
                SIRET : 895 376 424 00019<br />
                74250 Fillinges, Haute-Savoie<br />
                Email : <a href="mailto:darkom-debarras@hotmail.com" className="text-primary-light hover:underline">darkom-debarras@hotmail.com</a><br />
                Téléphone : <a href="tel:+33679447111" className="text-primary-light hover:underline">06 79 44 71 11</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. Données collectées</h2>
              <p className="text-muted leading-relaxed mb-3">
                Dans le cadre de son activité, Darkom-Debarras est amenée à collecter les données personnelles suivantes :
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 font-semibold text-primary">Donnée</th>
                      <th className="text-left py-2 pr-4 font-semibold text-primary">Finalité</th>
                      <th className="text-left py-2 font-semibold text-primary">Base légale</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Nom, prénom</td>
                      <td className="py-2 pr-4">Identification et devis</td>
                      <td className="py-2">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Adresse email</td>
                      <td className="py-2 pr-4">Réponse aux demandes, envoi du devis</td>
                      <td className="py-2">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Numéro de téléphone</td>
                      <td className="py-2 pr-4">Contact et suivi de l'intervention</td>
                      <td className="py-2">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4">Adresse postale / code postal</td>
                      <td className="py-2 pr-4">Devis et planification d'intervention</td>
                      <td className="py-2">Exécution du contrat</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Informations du simulateur (type de bien, volume, etc.)</td>
                      <td className="py-2 pr-4">Établissement du devis personnalisé</td>
                      <td className="py-2">Intérêt légitime</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Durée de conservation</h2>
              <p className="text-muted leading-relaxed">
                Les données personnelles sont conservées pour la durée nécessaire à l'exécution 
                du contrat de débarras, puis archivées pendant un délai de <strong className="text-body">5 ans</strong> à 
                compter de la fin de la relation commerciale, conformément aux obligations légales 
                applicables en matière de conservation de documents.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                Au-delà de ce délai, les données sont supprimées ou anonymisées de manière sécurisée.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Destinataires des données</h2>
              <p className="text-muted leading-relaxed">
                Les données collectées sont destinées exclusivement à Darkom-Debarras et à son 
                personnel habilité. Elles ne sont <strong className="text-body">jamais vendues, louées ou partagées</strong> avec 
                des tiers à des fins commerciales.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                Les seuls destinataires potentiels sont :
              </p>
              <ul className="list-disc list-inside text-muted mt-1 space-y-1">
                <li>Le service d'envoi d'emails (EmailJS) pour la transmission des formulaires de contact et simulateur</li>
                <li>Les autorités compétentes, si requis par la loi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Sous-traitants</h2>
              <p className="text-muted leading-relaxed">
                Darkom-Debarras fait appel aux sous-traitants suivants pour le fonctionnement du site :
              </p>
              <div className="mt-2 space-y-2 text-muted">
                <div className="bg-surface rounded-lg p-3">
                  <p className="font-semibold text-body">EmailJS (EmailJS Inc.)</p>
                  <p className="text-sm">Finalité : envoi des emails depuis les formulaires de contact et simulateur de devis</p>
                  <p className="text-sm">Pays : États-Unis — Transfert encadré par les clauses contractuelles types (SCC)</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">6. Vos droits</h2>
              <p className="text-muted leading-relaxed mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong className="text-body">Droit d'accès</strong> — obtenir une copie de vos données personnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong className="text-body">Droit de rectification</strong> — corriger des données inexactes ou incomplètes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong className="text-body">Droit à l'effacement</strong> — demander la suppression de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong className="text-body">Droit à la limitation du traitement</strong> — restreindre l'utilisation de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong className="text-body">Droit d'opposition</strong> — vous opposer au traitement de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span><strong className="text-body">Droit à la portabilité</strong> — recevoir vos données dans un format structuré</span>
                </li>
              </ul>
              <p className="text-muted leading-relaxed mt-3">
                Pour exercer ces droits, contactez-nous à :<br />
                <a href="mailto:darkom-debarras@hotmail.com" className="text-primary-light hover:underline">darkom-debarras@hotmail.com</a><br />
                ou par courrier : Darkom-Debarras, 74250 Fillinges, Haute-Savoie.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                Vous pouvez également introduire une réclamation auprès de la CNIL :{' '}
                <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">
                  www.cnil.fr/fr/plaintes
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">7. Cookies</h2>
              <p className="text-muted leading-relaxed">
                Le site darkom-debarras.fr n'utilise actuellement <strong className="text-body">aucun cookie de suivi 
                ou d'analyse</strong>. Aucun outil d'analytics (Google Analytics, Facebook Pixel, etc.) 
                n'est actif sur le site.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                Si cette politique devait évoluer, vous en seriez informé(e) préalablement par 
                l'affichage d'un bandeau de consentement conforme à la réglementation en vigueur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">8. Sécurité</h2>
              <p className="text-muted leading-relaxed">
                Darkom-Debarras met en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">9. Modifications</h2>
              <p className="text-muted leading-relaxed">
                La présente politique de confidentialité peut être mise à jour à tout moment. La date 
                de dernière modification est indiquée ci-dessous. Nous vous invitons à la consulter 
                régulièrement.
              </p>
              <p className="text-muted mt-2">
                <strong className="text-body">Dernière mise à jour : juin 2026</strong>
              </p>
            </div>

          </div>

          <div className="text-center mt-8">
            <Button to="/" variant="outline">Retour à l'accueil</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
