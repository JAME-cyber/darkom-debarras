import { useState } from 'react';
import type { StepProps } from './types';
import { useLang } from '../../i18n/LanguageContext';
import { simulatorContent } from './simulatorContent';

export default function StepAccessibilite({ data, onNext }: StepProps) {
  const { lang } = useLang();
  const t = simulatorContent[lang].accessibilite;

  const [localEtage, setLocalEtage] = useState(data.etage || '');
  const [localAscenseur, setLocalAscenseur] = useState(data.ascenseur || '');
  const [localAccessible, setLocalAccessible] = useState(data.accessible || '');

  const etageOptions = Object.entries(t.etageOptions).map(([id, label]) => ({
    id,
    label,
    desc: id === 'rdc' ? t.rdcDesc : '',
  }));

  const ascenseurOptions = [
    { id: 'oui', label: t.ascenseurOui, desc: t.ascenseurOuiDesc },
    { id: 'non', label: t.ascenseurNon, desc: t.ascenseurNonDesc },
  ];

  const accessibiliteOptions = Object.entries(t.accessOptions).map(([id, label]) => ({
    id,
    label,
    desc: t.accessDesc[id],
  }));

  const canContinue = localEtage !== '' && localAscenseur !== '' && localAccessible !== '';

  const handleContinue = () => {
    if (canContinue) {
      onNext({ etage: localEtage, ascenseur: localAscenseur, accessible: localAccessible });
    }
  };

  return (
    <div className="simulator-step">
      <h2>{t.title}</h2>
      <p className="simulator-subtitle">{t.subtitle}</p>

      <div className="simulator-form-group">
        <label>{t.etageLabel}</label>
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
        <label>{t.ascenseurLabel}</label>
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
        <label>{t.accessLabel}</label>
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
        {simulatorContent[lang].nav.continue}
      </button>
    </div>
  );
}
