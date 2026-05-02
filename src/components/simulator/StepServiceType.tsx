import type { StepProps } from './types';
import { SERVICE_TYPES } from './types';

export default function StepServiceType({ data, onNext }: StepProps) {
  return (
    <div className="simulator-step">
      <h2>Quel type de service recherchez-vous ?</h2>
      <p className="simulator-subtitle">Sélectionnez la prestation qui correspond à votre besoin</p>

      <div className="simulator-options-grid">
        {Object.entries(SERVICE_TYPES).map(([key, service]) => (
          <button
            key={key}
            className={`simulator-option-card ${data.typeBien === key ? 'selected' : ''}`}
            onClick={() => onNext({ typeBien: key })}
          >
            <span className="simulator-option-emoji">{service.emoji}</span>
            <span className="simulator-option-label">{service.label}</span>
            <span className="simulator-option-desc">{service.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
