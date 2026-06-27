/**
 * Format a number as Moroccan Dirham currency display
 */
export const formatCurrency = (value) => {
  if (value === '' || value === null || value === undefined || Number.isNaN(Number(value))) {
    return '—';
  }
  return new Intl.NumberFormat('fr-MA', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(value));
};

/**
 * Calculate form completion percentage based on required fields
 */
export const calculateCompletion = (values, requiredFields) => {
  if (!requiredFields.length) return 0;
  const filled = requiredFields.filter((field) => {
    const val = values[field];
    if (typeof val === 'number') return val > 0;
    return val !== '' && val !== null && val !== undefined;
  });
  return Math.round((filled.length / requiredFields.length) * 100);
};

/**
 * Count enabled boolean characteristics
 */
export const countActiveCharacteristics = (values, characteristicKeys) =>
  characteristicKeys.filter((key) => values[key] === true).length;

/**
 * Get label from options array by value
 */
export const getOptionLabel = (options, value) => {
  const found = options.find((opt) => opt.value === value);
  return found ? found.label : value || '—';
};
