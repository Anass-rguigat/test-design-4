import { Box, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { colors, layout, shadows } from '../../theme/constants';
import {
  INVESTOR_TYPES,
  COMPANY_TYPES,
  PROJECT_TYPES,
  PROJECT_CHARACTERISTICS,
} from '../../utils/constants';
import { formatCurrency, getOptionLabel } from '../../utils/formatters';

const SummaryRow = ({ label, value }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      py: 1,
      borderBottom: `1px solid ${colors.border}`,
      '&:last-child': { borderBottom: 'none' },
    }}
  >
    <Typography variant="body2" sx={{ color: colors.textSecondary }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ color: colors.text, fontWeight: 600, textAlign: 'right' }}>
      {value || '—'}
    </Typography>
  </Box>
);

const SummaryCard = ({ values, completionPercentage, activeCharacteristicsCount }) => {
  const activeLabels = PROJECT_CHARACTERISTICS.filter((c) => values[c.key])
    .map((c) => c.label)
    .join(', ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.2 }}
    >
      <Box
        sx={{
          backgroundColor: colors.background,
          borderRadius: `${layout.radius}px`,
          border: `1px solid ${colors.border}`,
          p: 3,
          boxShadow: shadows.card,
        }}
        aria-live="polite"
        aria-label="Résumé du formulaire"
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: `${layout.radiusSm}px`,
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-hidden="true"
          >
            <HiOutlineClipboardDocumentList size={20} color="#fff" />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: colors.text }}>
            Résumé
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <SummaryRow
            label="Type d'investisseur"
            value={getOptionLabel(INVESTOR_TYPES, values.investorType)}
          />
          <SummaryRow label="Nationalité" value={values.nationality} />
          <SummaryRow label="Type de société" value={getOptionLabel(COMPANY_TYPES, values.companyType)} />
          <SummaryRow label="Région" value={values.region} />
          <SummaryRow label="Province" value={values.province} />
          <SummaryRow label="Secteur" value={values.sector} />
          <SummaryRow label="Type de projet" value={getOptionLabel(PROJECT_TYPES, values.projectType)} />
          <SummaryRow label="Budget" value={`${formatCurrency(values.budget)} DH`} />
          <SummaryRow label="Employés" value={values.employeesNumber || '—'} />
          <SummaryRow
            label="Caractéristiques actives"
            value={`${activeCharacteristicsCount} / ${PROJECT_CHARACTERISTICS.length}`}
          />
        </Box>

        {activeLabels && (
          <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block', mb: 2 }}>
            {activeLabels}
          </Typography>
        )}

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ color: colors.textSecondary, fontWeight: 500 }}>
              Complétion du formulaire
            </Typography>
            <Typography variant="body2" sx={{ color: colors.primary, fontWeight: 700 }}>
              {completionPercentage}%
            </Typography>
          </Box>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.6 }}
          >
            <LinearProgress
              variant="determinate"
              value={completionPercentage}
              aria-label={`Progression: ${completionPercentage}%`}
              sx={{ height: 10, borderRadius: 5 }}
            />
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SummaryCard;
