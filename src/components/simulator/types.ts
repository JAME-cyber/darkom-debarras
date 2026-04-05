export interface SimulatorData {
  typeBien: string;
  surface: string;
  etage: string;
  ascenseur: string;
  volume: string;
  accessible: string;
  objetsSpeciaux: string[];
  optionNettoyage: string;
  lieu: string;
  codePostal: string;
  codeDepartement: string;
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
  { id: 'déchets', label: 'Déchets verts/encombrants', emoji: '🗑️' },
  { id: 'autres', label: 'Autres', emoji: '📦' },
];

export const CLEANING_OPTIONS = [
  { 
    id: 'balayage', 
    label: 'Balayage ou aspiration des sols', 
    sublabel: '(gratuit, compris)',
    price: 0
  },
  { 
    id: 'nettoyage', 
    label: 'Nettoyage complet', 
    sublabel: '(aspiration, lessivage, vitres, sanitaires)',
    price: 80
  },
  { 
    id: 'insalubre', 
    label: 'Nettoyage logement insalubre + désinfection', 
    sublabel: '(traitement specialisé)',
    price: 200
  },
];

export const VOLUME_ESTIMATES: Record<string, string> = {
  'studio': '5-15 m³',
  't1-t2': '15-30 m³',
  't3-t4': '30-60 m³',
  't5+': '60-100+ m³',
  'cave': '10-25 m³',
  'grenier': '15-40 m³',
  'garage': '15-35 m³',
  'local': '30-100+ m³',
};

export const SERVICE_TYPES: Record<string, { label: string; emoji: string; description: string }> = {
  'debarras': { 
    label: 'Débarras simple', 
    emoji: '🚛',
    description: 'Vous souhaitez vider un logement, cave, garage ou grenier'
  },
  'debarras-nettoyage': { 
    label: 'Débarras + Nettoyage', 
    emoji: '✨',
    description: 'Débarras complet avec nettoyage final du logement'
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