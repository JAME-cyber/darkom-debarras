import { useState } from 'react';
import type { StepProps } from './types';
import { useLang } from '../../i18n/LanguageContext';
import { simulatorContent } from './simulatorContent';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(?:\+33|0)[1-9]\d{8}$/;

export default function StepContact({ data, onNext }: StepProps) {
  const { lang } = useLang();
  const t = simulatorContent[lang].contact;

  const [nom, setNom] = useState(data.nom || '');
  const [email, setEmail] = useState(data.email || '');
  const [telephone, setTelephone] = useState(data.telephone || '');

  const normalizedPhone = telephone.replace(/\s/g, '');
  const isValid =
    nom.trim().length >= 2 &&
    EMAIL_REGEX.test(email.trim()) &&
    PHONE_REGEX.test(normalizedPhone);

  const handleSubmit = () => {
    if (isValid) {
      onNext({ nom: nom.trim(), email: email.trim(), telephone: telephone.trim() });
    }
  };

  return (
    <div className="simulator-step">
      <h2>{t.title}</h2>
      <p className="simulator-subtitle">{t.subtitle}</p>

      <div className="simulator-form-fields">
        <div className="simulator-form-field">
          <label htmlFor="nom">{t.nomLabel}</label>
          <input
            type="text"
            id="nom"
            className="simulator-input"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder={t.nomPlaceholder}
          />
        </div>

        <div className="simulator-form-field">
          <label htmlFor="email">{t.emailLabel}</label>
          <input
            type="email"
            id="email"
            className="simulator-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
          />
        </div>

        <div className="simulator-form-field">
          <label htmlFor="telephone">{t.telLabel}</label>
          <input
            type="tel"
            id="telephone"
            className="simulator-input"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder={t.telPlaceholder}
            maxLength={14}
          />
        </div>
      </div>

      <div className="simulator-recap-note" style={{ marginTop: '1.5rem' }}>
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <p>{t.note}</p>
      </div>

      <button className="simulator-continue-btn" onClick={handleSubmit} disabled={!isValid}>
        {t.submit}
      </button>
    </div>
  );
}
