import type { StepProps } from './types';
import { CLEANING_OPTIONS } from './types';

export default function StepNettoyage({ data, onNext }: StepProps) {
  return (
    <div className="simulator-step">
      <h2>Souhaitez-vous un nettoyage complémentaire ?</h2>
      <p className="simulator-subtitle">Optionnel mais recommandé pour un resultat clés en main</p>
      
      <div className="simulator-radio-list">
        {CLEANING_OPTIONS.map((option) => (
          <label
            key={option.id}
            className={`simulator-radio-card ${data.optionNettoyage === option.id ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="optionNettoyage"
              value={option.id}
              checked={data.optionNettoyage === option.id}
              onChange={() => onNext({ optionNettoyage: option.id })}
              className="simulator-radio-input"
            />
            <div className="simulator-radio-content">
              <span className="simulator-radio-label">{option.label}</span>
              <span className="simulator-radio-desc">{option.sublabel}</span>
            </div>
            {option.price > 0 && (
              <span className="simulator-radio-price">+{option.price}€</span>
            )}
            {option.price === 0 && (
              <span className="simulator-radio-price included">Inclus</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}