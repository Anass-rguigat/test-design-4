import * as yup from 'yup';

export const investorFormSchema = yup.object({
  investorType: yup.string().required('Le type d\'investisseur est requis'),
  nationality: yup.string().required('La nationalité est requise'),
  companyType: yup.string().required('Le type de société est requis'),
  region: yup.string().required('La région est requise'),
  province: yup.string().required('La province est requise'),
  sector: yup.string().required('Le secteur est requis'),
  projectType: yup.string().required('Le type de projet est requis'),
  budget: yup
    .number()
    .typeError('Le budget doit être un nombre valide')
    .required('Le budget est requis')
    .positive('Le budget doit être supérieur à 0'),
  employeesNumber: yup
    .number()
    .typeError('Le nombre d\'employés doit être un nombre valide')
    .required('Le nombre d\'employés est requis')
    .integer('Le nombre d\'employés doit être un entier')
    .min(1, 'Le nombre d\'employés doit être au moins 1'),
  needLand: yup.boolean(),
  needConstruction: yup.boolean(),
  environmentalImpact: yup.boolean(),
  importActivity: yup.boolean(),
  exportActivity: yup.boolean(),
  industrialZone: yup.boolean(),
  tourismProject: yup.boolean(),
  agriculturalProject: yup.boolean(),
  foodActivity: yup.boolean(),
  medicalActivity: yup.boolean(),
  energyProject: yup.boolean(),
});
