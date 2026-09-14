export interface SimulatorData {
  typeBien: string;
  bientype: string;
  etage: string;
  ascenseur: string;
  volume: string;
  accessible: string;
  objetsSpeciaux: string[];
  optionNettoyage: string;
  lieu: string;
  codePostal: string;
  codeDepartement: string;
  nom: string;
  email: string;
  telephone: string;
}

export interface StepProps {
  data: SimulatorData;
  onNext: (data: Partial<SimulatorData>) => void;
  onBack: () => void;
}

export const OBJECT_OPTIONS = [
  { id: 'electromenager', label: 'Électroménager', emoji: '🔌' },
  { id: 'meubles', label: 'Meubles', emoji: '🛋️' },
  { id: 'vetements', label: 'Vêtements', emoji: '👕' },
  { id: 'livres', label: 'Livres', emoji: '📚' },
  { id: 'outillage', label: 'Outillage', emoji: '🔧' },
  { id: 'bricolage', label: 'Matériaux/Bricolage', emoji: '🪵' },
  { id: 'dechets', label: 'Déchets verts/encombrants', emoji: '🗑️' },
  { id: 'autres', label: 'Autres', emoji: '📦' },
];

export const CLEANING_OPTIONS = [
  {
    id: 'balayage',
    label: 'Balayage ou aspiration des sols',
    sublabel: '(optionnel, sur demande)',
    price: 0,
    onDemand: true
  },
  {
    id: 'nettoyage',
    label: 'Nettoyage complet',
    sublabel: '(aspiration, lessivage, vitres, sanitaires, sur demande)',
    price: 0,
    onDemand: true
  },
  {
    id: 'insalubre',
    label: 'Nettoyage logement insalubre + désinfection',
    sublabel: '(traitement spécialisé, sur demande)',
    price: 0,
    onDemand: true
  },
];

export const VOLUME_ESTIMATES: Record<string, string> = {
  'studio': '5-15 m³',
  't1-t2': '15-30 m³',
  't3-t4': '30-60 m³',
  't5+': '60-100+ m³',
  'cave': '5-15 m³',
  'grenier': '5-15 m³',
  'garage': '5-15 m³',
  'local': '30-100+ m³',
};

/**
 * Grille tarifaire alignée sur la page /tarifs : 55 €/m³.
 * La fourchette découle directement de la bande de volume sélectionnée,
 * plus les suppléments accès/étage.
 */
export const PRIX_PAR_M3 = 55;

const VOLUME_BANDS: Record<string, [number, number]> = {
  'studio': [5, 15],
  't1-t2': [15, 30],
  't3-t4': [30, 60],
  't5+': [60, 100],
  'cave': [5, 15],
  'grenier': [5, 15],
  'garage': [5, 15],
  'local': [30, 100],
};

const ETAGE_SUPPLEMENT: Record<string, number> = {
  'rdc': 0,
  '1': 50,
  '2': 100,
  '3': 200,
};

const ACCESSIBLE_SUPPLEMENT: Record<string, number> = {
  'facile': 0,
  'difficile': 100,
  'tres_difficile': 250,
};

const round25 = (n: number): number => Math.round(n / 25) * 25;

export interface PriceEstimate {
  min: number;
  max: number;
  volumeMin: number;
  volumeMax: number;
  supplements: number;
}

export function estimatePrice(data: SimulatorData): PriceEstimate {
  const [vMin, vMax] = VOLUME_BANDS[data.volume] || [10, 30];
  const etageSupp = data.ascenseur === 'non' ? ETAGE_SUPPLEMENT[data.etage] || 0 : 0;
  const accessSupp = ACCESSIBLE_SUPPLEMENT[data.accessible] || 0;
  const supplements = etageSupp + accessSupp;
  return {
    min: round25(vMin * PRIX_PAR_M3) + supplements,
    max: round25(vMax * PRIX_PAR_M3) + supplements,
    volumeMin: vMin,
    volumeMax: vMax,
    supplements,
  };
}

export const SERVICE_TYPES: Record<string, { label: string; emoji: string; description: string }> = {
  'debarras': {
    label: 'Débarras simple',
    emoji: '🚛',
    description: 'Vous souhaitez vider un logement, cave, garage ou grenier'
  },
  'debarras-nettoyage': {
    label: 'Débarras + Nettoyage',
    emoji: '✨',
    description: 'Débarras complet avec nettoyage final (optionnel) du logement'
  },
  'succession': {
    label: 'Débarras succession',
    emoji: '🏠',
    description: 'Intervention suite à un décès ou héritage'
  },
  'demenagement': {
    label: 'Départ maison de retraite',
    emoji: '👴',
    description: 'Vidage logement lors d\'un départ en maison de retraite'
  },
  'sinistre': {
    label: 'Nettoyage après sinistre',
    emoji: '🔥',
    description: 'Remise en état après dégât des eaux, incendie...'
  },
};
