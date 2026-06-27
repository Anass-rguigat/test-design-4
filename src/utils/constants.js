export const INVESTOR_TYPES = [
  { value: 'physique', label: 'Personne Physique' },
  { value: 'morale', label: 'Personne Morale' },
];

export const COMPANY_TYPES = [
  { value: 'sarl', label: 'SARL' },
  { value: 'sa', label: 'SA' },
  { value: 'sas', label: 'SAS' },
];

export const PROJECT_TYPES = [
  { value: 'creation', label: 'Création' },
  { value: 'extension', label: 'Extension' },
];

export const NATIONALITIES = [
  'Marocaine',
  'Française',
  'Espagnole',
  'Allemande',
  'Britannique',
  'Américaine',
  'Canadienne',
  'Belge',
  'Italienne',
  'Autre',
];

export const REGIONS = [
  'Casablanca-Settat',
  'Rabat-Salé-Kénitra',
  'Marrakech-Safi',
  'Tanger-Tétouan-Al Hoceima',
  'Fès-Meknès',
  'Oriental',
  'Souss-Massa',
  'Béni Mellal-Khénifra',
  'Drâa-Tafilalet',
  'Laâyoune-Sakia El Hamra',
  'Dakhla-Oued Ed-Dahab',
  'Guelmim-Oued Noun',
];

export const PROVINCES = {
  'Casablanca-Settat': ['Casablanca', 'Mohammedia', 'El Jadida', 'Settat', 'Berrechid'],
  'Rabat-Salé-Kénitra': ['Rabat', 'Salé', 'Kénitra', 'Témara', 'Skhirate'],
  'Marrakech-Safi': ['Marrakech', 'Safi', 'Essaouira', 'El Kelaa des Sraghna'],
  'Tanger-Tétouan-Al Hoceima': ['Tanger', 'Tétouan', 'Al Hoceima', 'Larache'],
  'Fès-Meknès': ['Fès', 'Meknès', 'Ifrane', 'Sefrou'],
  Oriental: ['Oujda', 'Nador', 'Berkane', 'Taourirt'],
  'Souss-Massa': ['Agadir', 'Inezgane', 'Taroudant', 'Tiznit'],
  'Béni Mellal-Khénifra': ['Béni Mellal', 'Khénifra', 'Khouribga'],
  'Drâa-Tafilalet': ['Errachidia', 'Ouarzazate', 'Midelt'],
  'Laâyoune-Sakia El Hamra': ['Laâyoune', 'Boujdour'],
  'Dakhla-Oued Ed-Dahab': ['Dakhla'],
  'Guelmim-Oued Noun': ['Guelmim', 'Tan-Tan'],
};

export const SECTORS = [
  'Industrie',
  'Agroalimentaire',
  'Tourisme',
  'Services',
  'Technologies',
  'Énergie renouvelable',
  'Santé',
  'Logistique',
  'BTP',
  'Commerce',
  'Automobile',
  'Textile',
];

export const WORKFLOW_STEPS = [
  {
    id: 1,
    key: 'creation',
    title: 'Création',
    icon: 'creation',
    description: 'Déclaration et saisie des données du projet',
  },
  {
    id: 2,
    key: 'immatriculation',
    title: 'Immatriculation',
    icon: 'immatriculation',
    description: 'Enregistrement officiel de l\'entreprise',
  },
  {
    id: 3,
    key: 'autorisations',
    title: 'Autorisations',
    icon: 'autorisations',
    description: 'Obtention des permis et autorisations',
  },
  {
    id: 4,
    key: 'financement',
    title: 'Financement',
    icon: 'financement',
    description: 'Montage et validation du plan de financement',
  },
  {
    id: 5,
    key: 'realisation',
    title: 'Réalisation',
    icon: 'realisation',
    description: 'Mise en œuvre et suivi du projet',
  },
  {
    id: 6,
    key: 'exploitation',
    title: 'Exploitation',
    icon: 'exploitation',
    description: 'Lancement et exploitation de l\'activité',
  },
];

export const STEP_STATUS = {
  TODO: 'todo',
  CURRENT: 'current',
  COMPLETED: 'completed',
  LOCKED: 'locked',
};

export const STATUS_LABELS = {
  todo: 'À faire',
  current: 'En cours',
  completed: 'Terminé',
  locked: 'Verrouillé',
};

export const PROJECT_CHARACTERISTICS = [
  { key: 'needLand', label: 'Besoin de terrain', icon: 'land' },
  { key: 'needConstruction', label: 'Besoin de construction', icon: 'construction' },
  { key: 'environmentalImpact', label: 'Impact environnemental', icon: 'environment' },
  { key: 'importActivity', label: 'Activité d\'importation', icon: 'import' },
  { key: 'exportActivity', label: 'Activité d\'exportation', icon: 'export' },
  { key: 'industrialZone', label: 'Zone industrielle', icon: 'industrial' },
  { key: 'tourismProject', label: 'Projet touristique', icon: 'tourism' },
  { key: 'agriculturalProject', label: 'Projet agricole', icon: 'agriculture' },
  { key: 'foodActivity', label: 'Activité alimentaire', icon: 'food' },
  { key: 'medicalActivity', label: 'Activité médicale', icon: 'medical' },
  { key: 'energyProject', label: 'Projet énergétique', icon: 'energy' },
];

export const DEFAULT_FORM_VALUES = {
  investorType: '',
  nationality: '',
  companyType: '',
  region: '',
  province: '',
  sector: '',
  projectType: '',
  budget: '',
  employeesNumber: '',
  needLand: false,
  needConstruction: false,
  environmentalImpact: false,
  importActivity: false,
  exportActivity: false,
  industrialZone: false,
  tourismProject: false,
  agriculturalProject: false,
  foodActivity: false,
  medicalActivity: false,
  energyProject: false,
};
