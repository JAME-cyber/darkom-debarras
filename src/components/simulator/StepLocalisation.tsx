import type { StepProps } from './types';
import { useState } from 'react';

export default function StepLocalisation({ data, onNext }: StepProps) {
  const [ville, setVille] = useState(data.lieu || '');
  const [codePostal, setCodePostal] = useState(data.codePostal || '');

  const handleSubmit = () => {
    if (ville && codePostal) {
      onNext({
        lieu: ville,
        codePostal,
        codeDepartement: codePostal.substring(0, 2),
      });
    }
  };

  const canContinue = ville.length >= 2 && codePostal.length >= 5;

  return (
    <div className="simulator-step">
      <h2>Où se trouve le bien ?</h2>
      <p className="simulator-subtitle">Precisez la localisation pour le devis</p>
      
      <div className="simulator-form-fields">
        <div className="simulator-form-field">
          <label htmlFor="ville">Ville *</label>
          <input
            type="text"
            id="ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            placeholder="Ex: Fillinges, Annemasse..."
            className="simulator-input"
          />
        </div>
        
        <div className="simulator-form-field">
          <label htmlFor="codePostal">Code postal *</label>
          <input
            type="text"
            id="codePostal"
            value={codePostal}
            onChange={(e) => setCodePostal(e.target.value.replace(/\D/g, '').slice(0, 5))}
            placeholder="74250"
            className="simulator-input"
            maxLength={5}
          />
        </div>
      </div>

      <div className="simulator-form-help">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Intervention en Haute-Savoie (74) et departements limitrophes</span>
      </div>

      <button
        className="simulator-continue-btn"
        onClick={handleSubmit}
        disabled={!canContinue}
      >
        Valider et continuer
      </button>
    </div>
  );
}