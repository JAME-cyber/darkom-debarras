import Button from '../components/Button';
import useSEO from '../hooks/useSEO';

export default function MentionsLegales() {
  useSEO({
    title: 'Mentions légales | Darkom-Debarras',
    description: 'Mentions légales du site Darkom-Debarras, service de débarras professionnel en Haute-Savoie.',
    canonical: '/mentions-legales',
  });

  return (
    <main className="pt-16 sm:pt-20 md:pt-28">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              Mentions légales
            </h1>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg space-y-8 text-body">

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Éditeur du site</h2>
              <p className="text-muted leading-relaxed">
                <strong className="text-body">Darkom-Debarras</strong><br />
                SIRET : 895 376 424 00019<br />
                Siège social : 74250 Fillinges, Haute-Savoie, France<br />
                Téléphone : <a href="tel:+33679447111" className="text-primary-light hover:underline">06 79 44 71 11</a><br />
                Email : <a href="mailto:darkom-debarras@hotmail.com" className="text-primary-light hover:underline">darkom-debarras@hotmail.com</a><br />
                Directeur de la publication : Madame Laurie Decouvette
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. Hébergeur</h2>
              <p className="text-muted leading-relaxed">
                Le site darkom-debarras.fr est hébergé par :<br />
                <strong className="text-body">Hostinger International Ltd.</strong><br />
                61 Lord Street Vauxhall, Port Louis, République de Maurice<br />
                Site : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">www.hostinger.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Propriété intellectuelle</h2>
              <p className="text-muted leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) 
                est la propriété exclusive de Darkom-Debarras ou de ses partenaires et est protégé 
                par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                Toute reproduction, représentation, modification, publication, adaptation de tout 
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est 
                interdite sans l'autorisation écrite préalable de Darkom-Debarras.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Limitation de responsabilité</h2>
              <p className="text-muted leading-relaxed">
                Darkom-Debarras s'efforce d'assurer au mieux l'exactitude des informations 
                diffusées sur son site. Toutefois, Darkom-Debarras ne peut garantir l'exactitude, 
                la précision ou l'exhaustivité des informations mises à disposition sur le site.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                En conséquence, Darkom-Debarras décline toute responsabilité pour toute 
                inexactitude, erreur ou omission relative aux informations disponibles sur le site 
                ainsi que pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant 
                entraîné une modification des informations mises à disposition sur le site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Liens hypertextes</h2>
              <p className="text-muted leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites internet. 
                Darkom-Debarras ne dispose d'aucun moyen de contrôler le contenu de ces sites 
                tiers et n'assume aucune responsabilité à leur égard.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">6. Droit applicable</h2>
              <p className="text-muted leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">7. Crédits</h2>
              <p className="text-muted leading-relaxed">
                Conception et développement du site : [À compléter]<br />
                Photographies : [À compléter]<br />
                Dernière mise à jour : juin 2026
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
