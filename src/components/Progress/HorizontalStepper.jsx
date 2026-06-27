import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { colors, layout, shadows } from '../../theme/constants';

const HorizontalStepper = ({ steps, currentStepId, onStepClick }) => (
  <Box
    sx={{
      display: { xs: 'flex', lg: 'none' },
      overflowX: 'auto',
      gap: 1,
      pb: 1,
      '&::-webkit-scrollbar': { height: 4 },
    }}
    role="tablist"
    aria-label="Étapes du parcours d'investissement"
  >
    {steps.map((step, index) => {
      const isSelected = step.id === currentStepId;

      return (
        <motion.button
          key={step.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onStepClick?.(step.id)}
          role="tab"
          aria-selected={isSelected}
          aria-label={`Étape ${step.id}: ${step.title}`}
          style={{
            flex: '0 0 auto',
            minWidth: 100,
            padding: '10px 14px',
            border: `1.5px solid ${isSelected ? colors.primary : colors.border}`,
            borderRadius: layout.radiusSm,
            background: isSelected ? colors.primaryMuted : colors.card,
            boxShadow: isSelected ? shadows.soft : 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 500, display: 'block' }}>
            Étape {step.id}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: colors.text, whiteSpace: 'nowrap' }}>
            {step.title}
          </Typography>
        </motion.button>
      );
    })}
  </Box>
);

export default HorizontalStepper;
