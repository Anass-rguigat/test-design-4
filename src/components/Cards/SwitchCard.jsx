import { Box, Typography, Switch } from '@mui/material';
import { Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
  HiOutlineMap,
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineArrowDownTray,
  HiOutlineArrowUpTray,
  HiOutlineBuildingLibrary,
  HiOutlineSun,
  HiOutlineSparkles,
  HiOutlineCake,
  HiOutlineHeart,
  HiOutlineBolt,
} from 'react-icons/hi2';
import { colors, layout, shadows } from '../../theme/constants';

const ICON_MAP = {
  land: HiOutlineMap,
  construction: HiOutlineBuildingOffice2,
  environment: HiOutlineGlobeAlt,
  import: HiOutlineArrowDownTray,
  export: HiOutlineArrowUpTray,
  industrial: HiOutlineBuildingLibrary,
  tourism: HiOutlineSun,
  agriculture: HiOutlineSparkles,
  food: HiOutlineCake,
  medical: HiOutlineHeart,
  energy: HiOutlineBolt,
};

const SwitchCard = ({ name, control, label, iconKey, index = 0 }) => {
  const Icon = ICON_MAP[iconKey] || HiOutlineSparkles;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const isActive = !!field.value;

        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            whileHover={{ y: -2, boxShadow: shadows.hover }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1.5,
                p: 2,
                borderRadius: `${layout.radiusSm}px`,
                border: `1.5px solid ${isActive ? colors.primary : colors.border}`,
                backgroundColor: isActive ? colors.primaryMutedLight : colors.card,
                boxShadow: isActive ? shadows.soft : shadows.card,
                transition: 'all 250ms ease',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: isActive ? colors.primary : colors.primaryLight,
                  boxShadow: shadows.soft,
                },
              }}
              onClick={() => field.onChange(!field.value)}
              role="switch"
              aria-checked={isActive}
              aria-label={label}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  field.onChange(!field.value);
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    background: isActive
                      ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`
                      : colors.primaryMutedLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 250ms ease',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={18} color={isActive ? '#fff' : colors.primary} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: colors.text,
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </Typography>
              </Box>
              <Switch
                checked={isActive}
                onChange={(e) => {
                  e.stopPropagation();
                  field.onChange(e.target.checked);
                }}
                onClick={(e) => e.stopPropagation()}
                inputProps={{ 'aria-label': label }}
                sx={{ flexShrink: 0 }}
              />
            </Box>
          </motion.div>
        );
      }}
    />
  );
};

export default SwitchCard;
