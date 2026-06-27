import { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { investorFormSchema } from '../utils/validationSchema';
import { DEFAULT_FORM_VALUES, PROJECT_CHARACTERISTICS } from '../utils/constants';
import { calculateCompletion, countActiveCharacteristics } from '../utils/formatters';

const REQUIRED_FIELDS = [
  'investorType',
  'nationality',
  'companyType',
  'region',
  'province',
  'sector',
  'projectType',
  'budget',
  'employeesNumber',
];

const CHARACTERISTIC_KEYS = PROJECT_CHARACTERISTICS.map((c) => c.key);

/**
 * Custom hook wrapping React Hook Form with Yup validation and summary helpers
 */
const useInvestmentForm = () => {
  const form = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(investorFormSchema),
    mode: 'onChange',
  });

  const watchedValues = useWatch({ control: form.control });

  const completionPercentage = useMemo(
    () => calculateCompletion(watchedValues, REQUIRED_FIELDS),
    [watchedValues],
  );

  const activeCharacteristicsCount = useMemo(
    () => countActiveCharacteristics(watchedValues, CHARACTERISTIC_KEYS),
    [watchedValues],
  );

  const isFormValid = form.formState.isValid;

  return {
    ...form,
    watchedValues,
    completionPercentage,
    activeCharacteristicsCount,
    isFormValid,
    requiredFields: REQUIRED_FIELDS,
    characteristicKeys: CHARACTERISTIC_KEYS,
  };
};

export default useInvestmentForm;
