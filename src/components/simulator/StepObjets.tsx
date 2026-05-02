import { useState } from 'react';
import type { StepProps } from './types';
import { OBJECT_OPTIONS } from './types';

export default function StepObjets({ data, onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>(data.objetsSpeciaux || []);

  const toggleObjet = (objetId: string) => {
    setSelected((prev) =>
      prev.includes(objetId)
        ? prev.filter((id) => id !== objetId)
        : [...prev, objetId]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      onNext({ objetsSpeciaux: selected });
    }
  };

  return (
    <div className="simulator-step">
      <h2>Quels types d'objets à débarrasser ?</h2>
      <p className="simulator-subtitle">Sélectionnez les catégories présentes (plusieurs choix possibles)</p>

      <div className="simulator-checkbox-grid">
        {OBJECT_OPTIONS.map((objet) => (
          <label
            key={objet.id}
            className={`simulator-checkbox-card ${
              selected.includes(objet.id) ? 'selected' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(objet.id)}
              onChange={() => toggleObjet(objet.id)}
              className="simulator-checkbox-input"
            />
            <span className="simulator-checkbox-emoji">{objet.emoji}</span>
            <span className="simulator-checkbox-label">{objet.label}</span>
          </label>
        ))}
      </div>

      {selected.length === 0 && (
        <div className="simulator-help">
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Sélectionnez au moins une catégorie pour continuer</span>
        </div>
      )}

      <button className="simulator-continue-btn" onClick={handleContinue} disabled={selected.length === 0}>
        Continuer
      </button>
    </div>
  );
}
