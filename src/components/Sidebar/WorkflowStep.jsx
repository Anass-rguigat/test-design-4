import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  HiOutlineDocumentPlus,
  HiOutlineBuildingOffice2,
  HiOutlineShieldCheck,
  HiOutlineBanknotes,
  HiOutlineWrenchScrewdriver,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import { colors, layout, shadows } from '../../theme/constants';

const ICON_MAP = {
  creation: HiOutlineDocumentPlus,
  immatriculation: HiOutlineBuildingOffice2,
  autorisations: HiOutlineShieldCheck,
  financement: HiOutlineBanknotes,
  realisation: HiOutlineWrenchScrewdriver,
  exploitation: HiOutlineRocketLaunch,
};

const WorkflowStep = ({ step, isLast, onClick, index, isSelected }) => {
  const Icon = ICON_MAP[step.icon] || HiOutlineDocumentPlus;

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      {!isLast && (
        <Box
          sx={{
            position: 'absolute',
            left: 23,
            top: 48,
            width: 2,
            height: 'calc(100% - 12px)',
            backgroundColor: colors.border,
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}

      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.99 }}
        style={{ width: '100%' }}
      >
        <Box
          component="button"
          onClick={() => onClick?.()}
          aria-current={isSelected ? 'step' : undefined}
          aria-label={`Étape ${step.id}: ${step.title}`}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: 1.5,
            mb: 1,
            border: `1.5px solid ${isSelected ? colors.primary : colors.border}`,
            borderRadius: `${layout.radiusSm}px`,
            backgroundColor: isSelected ? colors.primaryMuted : colors.card,
            boxShadow: isSelected ? shadows.soft : 'none',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 200ms ease',
            '&:hover': {
              borderColor: colors.primaryLight,
              backgroundColor: colors.primaryMutedLight,
            },
            '&:focus-visible': {
              outline: `2px solid ${colors.primary}`,
              outlineOffset: 2,
            },
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '10px',
              background: isSelected
                ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`
                : colors.primaryMutedLight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <Icon size={20} color={isSelected ? '#fff' : colors.primary} />
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="caption"
              sx={{ color: colors.textSecondary, fontWeight: 500, fontSize: '0.6875rem' }}
            >
              Étape {step.id}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.text, fontWeight: 600, fontSize: '0.9375rem', lineHeight: 1.3 }}
            >
              {step.title}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default WorkflowStep;
