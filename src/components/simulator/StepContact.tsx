import { useState } from 'react';
import type { StepProps } from './types';

export default function StepContact({ data, onNext }: StepProps) {
  const [nom, setNom] = useState(data.nom || '');
  const [email, setEmail] = useState(data.email || '');
  const [telephone, setTelephone] = useState(data.telephone || '');

  const isValid = nom.trim().length >= 2 && email.includes('@') && telephone.length >= 8;

  const handleSubmit = () => {
    if (isValid) {
      onNext({ nom: nom.trim(), email: email.trim(), telephone: telephone.trim() });
    }
  };

  return (
    <div className="simulator-step">
      <h2>Vos coordonnées</h2>
      <p className="simulator-subtitle">Pour vous envoyer votre devis gratuit</p>

      <div className="simulator-form-fields">
        <div className="simulator-form-field">
          <label htmlFor="nom">Nom complet</label>
          <input
            type="text"
            id="nom"
            className="simulator-input"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Jean Dupont"
          />
        </div>

        <div className="simulator-form-field">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            className="simulator-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jean.dupont@email.fr"
          />
        </div>

        <div className="simulator-form-field">
          <label htmlFor="telephone">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            className="simulator-input"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="06 12 34 56 78"
            maxLength={14}
          />
        </div>
      </div>

      <div className="simulator-recap-note" style={{ marginTop: '1.5rem' }}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <p>Vos données sont protégées et ne seront utilisées que pour vous contacter concernant votre demande de devis.</p>
      </div>

      <button className="simulator-continue-btn" onClick={handleSubmit} disabled={!isValid}>
        Voir mon devis estimatif
      </button>
    </div>
  );
}
