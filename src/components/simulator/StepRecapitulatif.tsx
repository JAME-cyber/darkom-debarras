import type { StepProps } from './types';
import { SERVICE_TYPES, VOLUME_ESTIMATES, CLEANING_OPTIONS, OBJECT_OPTIONS, estimatePrice } from './types';

const BIEN_LABELS: Record<string, string> = {
  maison: 'Maison',
  appartement: 'Appartement',
  cave: 'Cave',
  grenier: 'Grenier',
  garage: 'Garage',
  local: 'Local professionnel',
};

const ETAGE_LABELS: Record<string, string> = {
  rdc: 'RDC',
  '1': '1er étage',
  '2': '2e étage',
  '3': '3e étage et +',
};

const ASCENSEUR_LABELS: Record<string, string> = {
  oui: 'Oui',
  non: 'Non',
};

const ACCESSIBLE_LABELS: Record<string, string> = {
  facile: 'Accès facile',
  difficile: 'Accès difficile',
  tres_difficile: 'Très difficile',
};

export default function StepRecapitulatif({ data, onNext }: StepProps) {
  const selectedService = SERVICE_TYPES[data.typeBien || ''];
  const selectedVolume = VOLUME_ESTIMATES[data.volume || ''];
  const selectedCleaning = CLEANING_OPTIONS.find((o) => o.id === data.optionNettoyage);
  const selectedObjects = OBJECT_OPTIONS.filter((o) => (data.objetsSpeciaux || []).includes(o.id));
  const price = estimatePrice(data);

  const recapItems = [
    { label: 'Service', value: selectedService?.label || '-' },
    { label: 'Type de bien', value: BIEN_LABELS[data.bientype || ''] || '-' },
    { label: 'Volume estimé', value: selectedVolume || '-' },
    { label: 'Étage', value: ETAGE_LABELS[data.etage || ''] || '-' },
    { label: 'Ascenseur', value: ASCENSEUR_LABELS[data.ascenseur || ''] || '-' },
    { label: 'Accès', value: ACCESSIBLE_LABELS[data.accessible || ''] || '-' },
    { label: 'Objets', value: selectedObjects.map((o) => o.label).join(', ') || '-' },
    { label: 'Nettoyage', value: selectedCleaning?.label || 'Non' },
    { label: 'Localisation', value: data.lieu ? `${data.lieu} (${data.codePostal})` : '-' },
    { label: 'Nom', value: data.nom || '-' },
    { label: 'E-mail', value: data.email || '-' },
    { label: 'Téléphone', value: data.telephone || '-' },
  ];

  return (
    <div className="simulator-step">
      <h2>Récapitulatif de votre demande</h2>
      <p className="simulator-subtitle">Vérifiez les informations avant de valider</p>

      <div className="simulator-recap-list">
        {recapItems.map((item, index) => (
          <div key={index} className="simulator-recap-item">
            <span className="simulator-recap-label">{item.label}</span>
            <span className="simulator-recap-value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="simulator-price-estimate">
        <span className="simulator-price-label">Devis estimatif</span>
        <span className="simulator-price-value">{price.min}€ - {price.max}€</span>
        <span className="simulator-price-info">Estimation indicative, prix final confirmé par téléphone</span>
      </div>

      <div className="simulator-recap-note">
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>
          En validant, vous acceptez d'être contacté par Darkom-Debarras pour un devis gratuit.
          Aucune obligation d'engagement.
        </p>
      </div>

      <button className="simulator-submit-btn" onClick={() => onNext({})}>
        Valider ma demande de devis
      </button>
    </div>
  );
}
