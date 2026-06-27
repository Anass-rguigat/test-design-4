export const STEP_DETAILS = {
  creation: {
    procedureTitle: "Déclaration d'Investissement",
    estimatedDuration: '5 jours',
    estimatedCost: '0 DH',
    organism: {
      name: 'CRI / AMDIE',
      address: 'Avenue Mohammed V, Rabat',
      phone: '+212 5 37 00 00 00',
      email: 'contact@cri.ma',
      website: 'www.cri-invest.ma',
    },
    objective:
      "Enregistrement officiel du projet d'investissement auprès des autorités compétentes.",
    requiredDocuments: ['Formulaire AMDIE', 'Business plan', "Pièce d'identité"],
    generatedDocuments: ['Récépissé de déclaration'],
    subsequentUse: 'Immatriculation ICE',
  },
  immatriculation: {
    procedureTitle: 'Immatriculation au Registre de Commerce',
    estimatedDuration: '3 jours',
    estimatedCost: '350 DH',
    organism: {
      name: 'OMPIC',
      address: 'Rue Abou Bakr El Kadiri, Casablanca',
      phone: '+212 5 22 25 00 00',
      email: 'contact@ompic.ma',
      website: 'www.ompic.ma',
    },
    objective:
      "Obtenir l'Identifiant Commun de l'Entreprise (ICE) et l'inscription au registre du commerce.",
    requiredDocuments: ['Récépissé de déclaration', 'Statuts de la société', 'PV de nomination'],
    generatedDocuments: ['Certificat ICE', 'Extrait du registre de commerce'],
    subsequentUse: 'Demandes d\'autorisations administratives',
  },
  autorisations: {
    procedureTitle: "Demandes d'Autorisations Administratives",
    estimatedDuration: '15 jours',
    estimatedCost: 'Variable',
    organism: {
      name: 'Administrations sectorielles',
      address: 'Selon le secteur d\'activité',
      phone: '+212 5 37 71 00 00',
      email: 'autorisations@invest.gov.ma',
      website: 'www.invest.gov.ma',
    },
    objective:
      "Obtenir les autorisations, permis et licences nécessaires à la réalisation du projet.",
    requiredDocuments: ['ICE', 'Étude d\'impact environnemental', 'Plans architecturaux'],
    generatedDocuments: ['Permis de construire', 'Autorisation d\'exploitation'],
    subsequentUse: 'Montage du dossier de financement',
  },
  financement: {
    procedureTitle: 'Montage du Plan de Financement',
    estimatedDuration: '10 jours',
    estimatedCost: '0 DH',
    organism: {
      name: 'Banques partenaires / AMDIE',
      address: 'Place des Nations Unies, Casablanca',
      phone: '+212 5 22 41 00 00',
      email: 'financement@amdie.gov.ma',
      website: 'www.amdie.gov.ma',
    },
    objective:
      'Structurer et valider les sources de financement du projet (fonds propres, crédits, subventions).',
    requiredDocuments: ['Business plan détaillé', 'Autorisations obtenues', 'Garanties financières'],
    generatedDocuments: ['Convention de financement', 'Plan de trésorerie'],
    subsequentUse: 'Lancement de la phase de réalisation',
  },
  realisation: {
    procedureTitle: 'Mise en Œuvre du Projet',
    estimatedDuration: '6 à 24 mois',
    estimatedCost: 'Selon budget',
    organism: {
      name: 'Entreprises de travaux / CRI',
      address: 'Zone industrielle du projet',
      phone: '+212 5 22 48 00 00',
      email: 'suivi@cri.ma',
      website: 'www.cri-invest.ma',
    },
    objective:
      'Réaliser les travaux de construction, installation des équipements et mise en place des infrastructures.',
    requiredDocuments: ['Permis de construire', 'Contrats de travaux', 'Plan de financement validé'],
    generatedDocuments: ['Certificat de conformité', 'Rapport de réception des travaux'],
    subsequentUse: 'Démarrage de l\'exploitation',
  },
  exploitation: {
    procedureTitle: "Lancement de l'Exploitation",
    estimatedDuration: 'Continu',
    estimatedCost: '0 DH',
    organism: {
      name: 'Direction régionale / Ministère sectoriel',
      address: 'Siège de l\'entreprise',
      phone: '+212 5 37 76 00 00',
      email: 'exploitation@invest.gov.ma',
      website: 'www.invest.gov.ma',
    },
    objective:
      "Démarrer l'activité commerciale et industrielle en conformité avec la réglementation en vigueur.",
    requiredDocuments: ['Certificat de conformité', 'Contrats de travail', 'Assurances'],
    generatedDocuments: ['Licence d\'exploitation', 'Attestation fiscale'],
    subsequentUse: 'Suivi et accompagnement post-création',
  },
};
