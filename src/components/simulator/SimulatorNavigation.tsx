interface SimulatorNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
}

export default function SimulatorNavigation({ 
  currentStep, 
  totalSteps, 
  onBack,
}: SimulatorNavigationProps) {
  return (
    <div className="simulator-nav">
      {currentStep > 0 && (
        <button className="simulator-nav-back" onClick={onBack}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour
        </button>
      )}
      
      <div className="simulator-nav-dots">
        {Array.from({ length: totalSteps }, (_, i) => (
          <span 
            key={i} 
            className={`simulator-nav-dot ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}`}
          />
        ))}
      </div>
      
      <div className="simulator-nav-spacer"></div>
    </div>
  );
}