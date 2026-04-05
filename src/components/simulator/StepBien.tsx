import type { StepProps } from './types';

const BIEN_TYPES = [
  { id: 'maison', label: 'Maison', emoji: '🏠', desc: 'Maison individuelle' },
  { id: 'appartement', label: 'Appartement', emoji: '🏢', desc: '公寓' },
  { id: 'cave', label: 'Cave', emoji: '🏚️', desc: '地下室/储藏室' },
  { id: 'grenier', label: 'Grenier', emoji: '🏰', desc: '阁楼' },
  { id: 'garage', label: 'Garage', emoji: '🚗', desc: '车库' },
  { id: 'local', label: 'Local professionnel', emoji: '🏬', desc: '商业空间' },
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