import { useState } from 'react';
import type { SimulatorData } from './types';
import { SERVICE_TYPES, estimatePrice } from './types';
import StepServiceType from './StepServiceType';
import StepBien from './StepBien';
import StepVolume from './StepVolume';
import StepAccessibilite from './StepAccessibilite';
import StepObjets from './StepObjets';
import StepNettoyage from './StepNettoyage';
import StepLocalisation from './StepLocalisation';
import StepContact from './StepContact';
import StepRecapitulatif from './StepRecapitulatif';
import SimulatorNavigation from './SimulatorNavigation';
import './Simulator.css';

const initialData: SimulatorData = {
  typeBien: '',
  surface: '',
  etage: '',
  ascenseur: '',
  volume: '',
  accessible: '',
  objetsSpeciaux: [],
  optionNettoyage: '',
  lieu: '',
  codePostal: '',
  codeDepartement: '',
  nom: '',
  email: '',
  telephone: '',
};

const STEPS = [
  { key: 'service', component: StepServiceType, title: 'Type de service' },
  { key: 'bien', component: StepBien, title: 'Type de bien' },
  { key: 'volume', component: StepVolume, title: 'Volume à débarrasser' },
  { key: 'accessibilite', component: StepAccessibilite, title: 'Accessibilité' },
  { key: 'objets', component: StepObjets, title: 'Objets à trier' },
  { key: 'nettoyage', component: StepNettoyage, title: 'Option nettoyage' },
  { key: 'localisation', component: StepLocalisation, title: 'Localisation' },
  { key: 'contact', component: StepContact, title: 'Vos coordonnées' },
  { key: 'recap', component: StepRecapitulatif, title: 'Récapitulatif' },
];

export default function Simulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<SimulatorData>(initialData);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (stepData: Partial<SimulatorData>) => {
    const newData = { ...data, ...stepData };
    setData(newData);

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setData(initialData);
    setIsComplete(false);
  };

  const CurrentStepComponent = STEPS[currentStep].component;
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const price = estimatePrice(data);
  const serviceName = SERVICE_TYPES[data.typeBien]?.label || '';

  return (
    <div className="simulator">
      {!isComplete ? (
        <>
          <div className="simulator-progress">
            <div className="simulator-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="simulator-step-indicator">
            <span className="simulator-step-number">Étape {currentStep + 1} / {STEPS.length}</span>
            <span className="simulator-step-title">{STEPS[currentStep].title}</span>
          </div>

          <CurrentStepComponent
            data={data}
            onNext={handleNext}
            onBack={handleBack}
          />

          <SimulatorNavigation
            currentStep={currentStep}
            totalSteps={STEPS.length}
            onBack={handleBack}
          />
        </>
      ) : (
        <div className="simulator-complete">
          <div className="simulator-complete-icon">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3>Demande envoyée avec succès !</h3>
          <p className="simulator-complete-name">Merci {data.nom},</p>
          <p>Votre demande de devis pour <strong>{serviceName}</strong> a bien été enregistrée. Nous vous recontacterons sous 24h au <strong>{data.telephone}</strong>.</p>

          <div className="simulator-price-estimate">
            <span className="simulator-price-label">Estimation indicative</span>
            <span className="simulator-price-value">{price.min}€ – {price.max}€</span>
            <span className="simulator-price-info">Prix final confirmé par téléphone</span>
          </div>

          <div className="simulator-complete-summary">
            <p><strong>Lieu :</strong> {data.lieu} ({data.codePostal})</p>
            <p><strong>E-mail :</strong> {data.email}</p>
          </div>

          <div className="simulator-complete-actions">
            <button onClick={handleReset} className="simulator-continue-btn" style={{ width: 'auto', marginTop: 0 }}>
              Nouvelle simulation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
