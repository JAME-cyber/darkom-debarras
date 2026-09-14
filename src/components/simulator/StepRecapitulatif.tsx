import type { StepProps } from './types';
import { SERVICE_TYPES, VOLUME_ESTIMATES, OBJECT_OPTIONS, estimatePrice } from './types';
import { useLang } from '../../i18n/LanguageContext';
import { simulatorContent } from './simulatorContent';

export default function StepRecapitulatif({ data, onNext }: StepProps) {
  const { lang } = useLang();
  const t = simulatorContent[lang].recap;

  const selectedService = SERVICE_TYPES[data.typeBien || ''];
  const selectedVolume = VOLUME_ESTIMATES[data.volume || ''];
  const selectedObjects = OBJECT_OPTIONS.filter((o) => (data.objetsSpeciaux || []).includes(o.id));
  const price = estimatePrice(data);
  const objetsLabels = simulatorContent[lang].objets.labels;

  const recapItems = [
    { label: t.items.service, value: selectedService?.label || '-' },
    { label: t.items.bien, value: t.bienLabels[data.bientype || ''] || '-' },
    { label: t.items.volume, value: selectedVolume || '-' },
    { label: t.items.etage, value: t.etageLabels[data.etage || ''] || '-' },
    { label: t.items.ascenseur, value: t.ascenseurLabels[data.ascenseur || ''] || '-' },
    { label: t.items.acces, value: t.accessLabels[data.accessible || ''] || '-' },
    { label: t.items.objets, value: selectedObjects.map((o) => objetsLabels[o.id] || o.label).join(', ') || '-' },
    { label: t.items.localisation, value: data.lieu ? `${data.lieu} (${data.codePostal})` : '-' },
    { label: t.items.nom, value: data.nom || '-' },
    { label: t.items.email, value: data.email || '-' },
    { label: t.items.telephone, value: data.telephone || '-' },
  ];

  return (
    <div className="simulator-step">
      <h2>{t.title}</h2>
      <p className="simulator-subtitle">{t.subtitle}</p>

      <div className="simulator-recap-list">
        {recapItems.map((item, index) => (
          <div key={index} className="simulator-recap-item">
            <span className="simulator-recap-label">{item.label}</span>
            <span className="simulator-recap-value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="simulator-price-estimate">
        <span className="simulator-price-label">{t.priceLabel}</span>
        <span className="simulator-price-value">{price.min}€ - {price.max}€</span>
        <span className="simulator-price-info">
          {price.volumeMin}-{price.volumeMax} {t.priceInfo}
          {price.supplements > 0 ? ` + ${price.supplements} € ${t.supplements}` : ''} · {t.horsValorisation}
        </span>
        <span className="simulator-price-info">{t.indicative}</span>
      </div>

      <div className="simulator-recap-note">
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>{t.note}</p>
      </div>

      <button className="simulator-submit-btn" onClick={() => onNext({})}>
        {t.submit}
      </button>
    </div>
  );
}
