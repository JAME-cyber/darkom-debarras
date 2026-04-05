import type { StepProps } from './types';

const BIEN_TYPES = [
  { id: 'maison', label: 'Maison', emoji: '🏠', desc: 'Maison individuelle' },
  { id: 'appartement', label: 'Appartement', emoji: '🏢', desc: 'Appartement individuel ou collectif' },
  { id: 'cave', label: 'Cave', emoji: '🏚️', desc: 'Sous-sol / espace de stockage' },
  { id: 'grenier', label: 'Grenier', emoji: '🏰', desc: 'Combles / grenier' },
  { id: 'garage', label: 'Garage', emoji: '🚗', desc: 'Garage individuel' },
  { id: 'local', label: 'Local professionnel', emoji: '🏬', desc: 'Espace commercial / bureaux' },
];

export default function StepBien({ data, onNext }: StepProps) {
  return (
    <div className="simulator-step">
      <h2>Quel type de bien à débarasser ?</h2>
      <p className="simulator-subtitle">Sélectionnez le type de bien</p>
      
      <div className="simulator-options-grid">
        {BIEN_TYPES.map((bien) => (
          <button
            key={bien.id}
            className={`simulator-option-card ${data.surface === bien.id ? 'selected' : ''}`}
            onClick={() => onNext({ surface: bien.id })}
          >
            <span className="simulator-option-emoji">{bien.emoji}</span>
            <span className="simulator-option-label">{bien.label}</span>
            <span className="simulator-option-desc">{bien.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}