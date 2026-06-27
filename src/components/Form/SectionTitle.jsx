import { Box, Typography, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { colors, layout } from '../../theme/constants';

const SectionTitle = ({ icon: Icon, title, iconColor = colors.primary, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
      {Icon && (
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: `${layout.radiusSm}px`,
            background: `${iconColor}14`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          <Icon size={20} color={iconColor} />
        </Box>
      )}
      <Typography variant="h6" component="h3" sx={{ color: colors.text, fontWeight: 600 }}>
        {title}
      </Typography>
    </Box>
    <Divider sx={{ mb: 3, borderColor: colors.border }} />
  </motion.div>
);

export default SectionTitle;
