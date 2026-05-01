import type { StepProps } from './types';

const VOLUME_OPTIONS = [
  { id: 'studio', label: 'Studio', volume: '5-15 m³' },
  { id: 't1-t2', label: 'T1 / T2', volume: '15-30 m³' },
  { id: 't3-t4', label: 'T3 / T4', volume: '30-60 m³' },
  { id: 't5+', label: 'T5 et plus', volume: '60-100+ m³' },
  { id: 'cave', label: 'Cave', volume: '10-25 m³' },
  { id: 'grenier', label: 'Grenier', volume: '15-40 m³' },
  { id: 'garage', label: 'Garage', volume: '15-35 m³' },
  { id: 'local', label: 'Local', volume: '30-100+ m³' },
];

export default function StepVolume({ data, onNext }: StepProps) {
  return (
    <div className="simulator-step">
      <h2>Quelle est la surface ou le volume ?</h2>
      <p className="simulator-subtitle">Estimez la taille du bien à débarasser</p>
      
      <div className="simulator-options-grid">
        {VOLUME_OPTIONS.map((option) => (
          <button
            key={option.id}
            className={`simulator-option-card ${data.volume === option.id ? 'selected' : ''}`}
            onClick={() => onNext({ volume: option.id })}
          >
            <span className="simulator-option-label">{option.label}</span>
            <span className="simulator-option-desc">{option.volume}</span>
          </button>
        ))}
      </div>
      
      <div className="simulator-help">
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>1 m³ ≈ 5 cartons standards ou 1 electromenager volumineux</span>
      </div>
    </div>
  );
}