import type { StepProps } from './types';
import { useLang } from '../../i18n/LanguageContext';
import { simulatorContent } from './simulatorContent';

const BIEN_EMOJIS: Record<string, string> = {
  maison: '🏠', appartement: '🏢', cave: '🏚️', grenier: '🏰', garage: '🚗', local: '🏬',
};

export default function StepBien({ data, onNext }: StepProps) {
  const { lang } = useLang();
  const t = simulatorContent[lang].bien;

  return (
    <div className="simulator-step">
      <h2>{t.title}</h2>
      <p className="simulator-subtitle">{t.subtitle}</p>

      <div className="simulator-options-grid">
        {Object.entries(t.types).map(([id, bien]) => (
          <button
            key={id}
            className={`simulator-option-card ${data.bientype === id ? 'selected' : ''}`}
            onClick={() => onNext({ bientype: id })}
          >
            <span className="simulator-option-emoji">{BIEN_EMOJIS[id]}</span>
            <span className="simulator-option-label">{bien.label}</span>
            <span className="simulator-option-desc">{bien.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
