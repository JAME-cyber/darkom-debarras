import { useState } from 'react';
import type { StepProps } from './types';

export default function StepAccessibilite({ data, onNext }: StepProps) {
  const [localEtage, setLocalEtage] = useState(data.etage || '');
  const [localAscenseur, setLocalAscenseur] = useState(data.ascenseur || '');
  const [localAccessible, setLocalAccessible] = useState(data.accessible || '');

  const etageOptions = [
    { id: 'rdc', label: 'RDC', desc: 'Rez-de-chaussée' },
    { id: '1', label: '1er étage', desc: '' },
    { id: '2', label: '2e étage', desc: '' },
    { id: '3', label: '3e étage et +', desc: '' },
  ];

  const ascenseurOptions = [
    { id: 'oui', label: 'Oui', desc: 'Ascenseur disponible' },
    { id: 'non', label: 'Non', desc: 'Sans ascenseur' },
  ];

  const accessibiliteOptions = [
    { id: 'facile', label: 'Accès facile', desc: 'Portes larges, passage dégagé' },
    { id: 'difficile', label: 'Accès difficile', desc: 'Escaliers étroits, tournants' },
    { id: 'tres_difficile', label: 'Très difficile', desc: 'Spirale, hauteur, sous-sol' },
  ];

  const canContinue = localEtage !== '' && localAscenseur !== '' && localAccessible !== '';

  const handleContinue = () => {
    if (canContinue) {
      onNext({ etage: localEtage, ascenseur: localAscenseur, accessible: localAccessible });
    }
  };

  return (
    <div className="simulator-step">
      <h2>L'accessibilité du bien</h2>
      <p className="simulator-subtitle">Précisez l'étage et l'accès au logement</p>

      <div className="simulator-form-group">
        <label>Étage du bien</label>
        <div className="simulator-options-row">
          {etageOptions.map((option) => (
            <button
              key={option.id}
              className={`simulator-option-btn ${localEtage === option.id ? 'selected' : ''}`}
              onClick={() => setLocalEtage(option.id)}
            >
              {option.label}
              <span className="simulator-option-sub">{option.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="simulator-form-group">
        <label>Ascenseur disponible ?</label>
        <div className="simulator-options-row">
          {ascenseurOptions.map((option) => (
            <button
              key={option.id}
              className={`simulator-option-btn ${localAscenseur === option.id ? 'selected' : ''}`}
              onClick={() => setLocalAscenseur(option.id)}
            >
              {option.label}
              <span className="simulator-option-sub">{option.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="simulator-form-group">
        <label>Accès général</label>
        <div className="simulator-options-row">
          {accessibiliteOptions.map((option) => (
            <button
              key={option.id}
              className={`simulator-option-btn ${localAccessible === option.id ? 'selected' : ''}`}
              onClick={() => setLocalAccessible(option.id)}
            >
              {option.label}
              <span className="simulator-option-sub">{option.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <button className="simulator-continue-btn" onClick={handleContinue} disabled={!canContinue}>
        Continuer
      </button>
    </div>
  );
}