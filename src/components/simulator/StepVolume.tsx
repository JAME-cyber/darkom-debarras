import type { StepProps } from './types';
import { VOLUME_ESTIMATES } from './types';
import { useLang } from '../../i18n/LanguageContext';
import { simulatorContent } from './simulatorContent';

export default function StepVolume({ data, onNext }: StepProps) {
  const { lang } = useLang();
  const t = simulatorContent[lang].volume;

  return (
    <div className="simulator-step">
      <h2>{t.title}</h2>
      <p className="simulator-subtitle">{t.subtitle}</p>

      <div className="simulator-options-grid">
        {Object.entries(t.options).map(([id, label]) => (
          <button
            key={id}
            className={`simulator-option-card ${data.volume === id ? 'selected' : ''}`}
            onClick={() => onNext({ volume: id })}
          >
            <span className="simulator-option-label">{label}</span>
            <span className="simulator-option-desc">{VOLUME_ESTIMATES[id]}</span>
          </button>
        ))}
      </div>

      <div className="simulator-help">
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{t.help}</span>
      </div>
    </div>
  );
}
