import type { StepProps } from './types';
import { SERVICE_TYPES } from './types';
import { useLang } from '../../i18n/LanguageContext';
import { simulatorContent } from './simulatorContent';

export default function StepServiceType({ data, onNext }: StepProps) {
  const { lang } = useLang();
  const t = simulatorContent[lang].serviceType;

  return (
    <div className="simulator-step">
      <h2>{t.title}</h2>
      <p className="simulator-subtitle">{t.subtitle}</p>

      <div className="simulator-options-grid">
        {Object.entries(SERVICE_TYPES).map(([key, service]) => (
          <button
            key={key}
            className={`simulator-option-card ${data.typeBien === key ? 'selected' : ''}`}
            onClick={() => onNext({ typeBien: key })}
          >
            <span className="simulator-option-emoji">{service.emoji}</span>
            <span className="simulator-option-label">{t.types[key]?.label || service.label}</span>
            <span className="simulator-option-desc">{t.types[key]?.description || service.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
