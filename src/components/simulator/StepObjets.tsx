import type { StepProps } from './types';
import { OBJECT_OPTIONS } from './types';

export default function StepObjets({ data, onNext }: StepProps) {
  const toggleObjet = (objetId: string) => {
    const current = data.objetsSpeciaux || [];
    const newObjs = current.includes(objetId)
      ? current.filter(id => id !== objetId)
      : [...current, objetId];
    onNext({ objetsSpeciaux: newObjs });
  };

  return (
    <div className="simulator-step">
      <h2>Quels types d'objets à débarasser ?</h2>
      <p className="simulator-subtitle">Sélectionnez les categories presentes (plusieurs choix possibles)</p>
      
      <div className="simulator-checkbox-grid">
        {OBJECT_OPTIONS.map((objet) => (
          <label
            key={objet.id}
            className={`simulator-checkbox-card ${
              (data.objetsSpeciaux || []).includes(objet.id) ? 'selected' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={(data.objetsSpeciaux || []).includes(objet.id)}
              onChange={() => toggleObjet(objet.id)}
              className="simulator-checkbox-input"
            />
            <span className="simulator-checkbox-emoji">{objet.emoji}</span>
            <span className="simulator-checkbox-label">{objet.label}</span>
          </label>
        ))}
      </div>
      
      {(data.objetsSpeciaux || []).length === 0 && (
        <div className="simulator-help">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Selectionnez au moins une categorie pour continuer</span>
        </div>
      )}
    </div>
  );
}