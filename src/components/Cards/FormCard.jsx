import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { colors, layout, shadows } from '../../theme/constants';

const FormCard = ({ icon: Icon, stepNumber, title, subtitle, children, footer }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <Box
      component="section"
      sx={{
        backgroundColor: colors.card,
        borderRadius: `${layout.radius}px`,
        border: `1px solid ${colors.border}`,
        boxShadow: shadows.soft,
        p: { xs: 3, md: `${layout.formPadding}px` },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5, mb: 4 }}>
        {Icon && (
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: `${layout.radius}px`,
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: shadows.hover,
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <Icon size={30} color="#fff" />
          </Box>
        )}
        <Box>
          <Typography
            variant="overline"
            sx={{ color: colors.textSecondary, fontWeight: 600, letterSpacing: '0.08em' }}
          >
            Étape {stepNumber}
          </Typography>
          <Typography variant="h4" component="h2" sx={{ color: colors.text, fontWeight: 700, mt: 0.5 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 0.75 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      {children}

      {footer && (
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${colors.border}`,
            position: 'sticky',
            bottom: 0,
            backgroundColor: colors.card,
            zIndex: 10,
          }}
        >
          {footer}
        </Box>
      )}
    </Box>
  </motion.div>
);

export default FormCard;
