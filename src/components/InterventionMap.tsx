import Button from './Button';

const zones = [
  { name: 'Fillinges', x: 58, y: 55, base: true },
  { name: 'Annemasse', x: 52, y: 62, base: false },
  { name: 'Annecy', x: 42, y: 55, base: false },
  { name: 'Thonon-les-Bains', x: 50, y: 78, base: false },
  { name: 'Évian', x: 62, y: 82, base: false },
  { name: 'Sallanches', x: 35, y: 35, base: false },
  { name: 'Cluses', x: 42, y: 22, base: false },
  { name: 'Bonneville', x: 48, y: 38, base: false },
];

const otherCities = [
  'Gaillard', 'Vetriaz-sur-Arve', 'Annemasse', 'Cranves-Sales',
  'Bonne', 'Saint-Julien-en-Genevois', 'Rumilly', 'Seynod',
  'Cran-Gevrier', 'Seyssel', 'Saint-Gervais-les-Bains',
  'Chamonix', 'Passy', 'Megève', 'La Roche-sur-Foron',
  'Saint-Pierre-en-Faucigny', 'Cluses', 'Scionzier', 'Thyez',
  'Gaillard', 'Ambilly', 'Thonon-les-Bains', 'Publier',
  'Douvaux-le-Lac', 'Bons-en-Chablais'
];

export default function InterventionMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-light/10 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-light rounded-full"></span>
            Zone d'intervention
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nous intervenons dans toute la Haute-Savoie
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Basés à Fillinges, notre équipe se déplace dans tout le département 74 pour vos projets de débarras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative bg-surface rounded-2xl p-6 sm:p-8">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <svg aria-hidden="true" viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M30 15 L55 10 L70 18 L75 30 L72 45 L78 55 L70 65 L65 80 L55 90 L40 88 L30 78 L25 65 L20 50 L22 35 Z"
                  fill="#1a6530"
                  fillOpacity="0.1"
                  stroke="#1a6530"
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                />

                <text x="50" y="52" textAnchor="middle" fill="#1a6530" fontSize="3" fontWeight="bold" opacity="0.3">
                  HAUTE-SAVOIE
                </text>

                <text x="55" y="98" textAnchor="middle" fill="#5a5a5a" fontSize="2.5" opacity="0.4">
                  74
                </text>

                {zones.map((zone) => (
                  <g key={zone.name}>
                    <circle
                      cx={zone.x}
                      cy={zone.y}
                      r={zone.base ? "2.5" : "1.8"}
                      fill={zone.base ? "#a0ab37" : "#143d24"}
                      opacity="0.9"
                    />
                    {zone.base && (
                      <circle
                        cx={zone.x}
                        cy={zone.y}
                        r="4"
                        fill="none"
                        stroke="#a0ab37"
                        strokeWidth="0.4"
                        opacity="0.5"
                      />
                    )}
                    <text
                      x={zone.x}
                      y={zone.y - 3}
                      textAnchor="middle"
                      fill={zone.base ? "#a0ab37" : "#143d24"}
                      fontSize={zone.base ? "2.5" : "2.2"}
                      fontWeight={zone.base ? "bold" : "600"}
                    >
                      {zone.name}
                    </text>
                  </g>
                ))}

                <text x="45" y="96" textAnchor="middle" fill="#5a5a5a" fontSize="1.8" opacity="0.3">
                  Lac Léman
                </text>
                <path
                  d="M20 90 Q40 92 60 95 Q70 96 80 92"
                  fill="none"
                  stroke="#5a5a5a"
                  strokeWidth="0.3"
                  opacity="0.3"
                />

                <text x="8" y="65" textAnchor="start" fill="#5a5a5a" fontSize="1.5" opacity="0.3">
                  Ain (01)
                </text>
                <text x="80" y="65" textAnchor="start" fill="#5a5a5a" fontSize="1.5" opacity="0.3">
                  Suisse
                </text>
                <text x="45" y="8" textAnchor="middle" fill="#5a5a5a" fontSize="1.5" opacity="0.3">
                  Savoie (73)
                </text>
              </svg>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                Notre base
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                Zones d'intervention
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Villes principales desservies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {zones.map((zone) => (
                <span
                  key={zone.name}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    zone.base
                      ? 'bg-accent/15 text-accent/80 border border-accent/30'
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}
                >
                  {zone.base && '📍 '}{zone.name}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold text-primary mb-3">Et aussi...</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {otherCities.join(', ')} et toutes les communes de Haute-Savoie.
            </p>

            <div className="bg-surface rounded-xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary">Intervention rapide</p>
                  <p className="text-muted text-sm">Déplacement et devis gratuits dans tout le département. Intervention sous 48-72h.</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button to="/contact" variant="primary">
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
