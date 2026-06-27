import { Box, Typography } from '@mui/material';
import { colors, layout, shadows } from '../../theme/constants';

const LogoMark = () => (
  <Box
    sx={{
      width: 44,
      height: 44,
      borderRadius: `${layout.radiusSm}px`,
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: shadows.soft,
      flexShrink: 0,
    }}
    aria-hidden="true"
  >
    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.02em' }}>
      MICEPP
    </Typography>
  </Box>
);

const Header = () => (
  <Box
    component="header"
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 1100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: colors.glass,
      borderBottom: `1px solid ${colors.glassBorder}`,
      boxShadow: shadows.glass,
      px: { xs: 2, sm: 3, md: 4 },
      py: { xs: 1.5, md: 2 },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        maxWidth: 1800,
        mx: 'auto',
      }}
    >
      <LogoMark />
      <Box>
        <Typography
          variant="h5"
          component="h1"
          sx={{ color: colors.text, fontWeight: 700, fontSize: { xs: '1rem', md: '1.25rem' } }}
        >
          Parcours Investissement
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: colors.textSecondary, mt: 0.25, display: { xs: 'none', sm: 'block' } }}
        >
          Ministère de l&apos;Investissement —{' '}
          <Box component="span" sx={{ color: colors.primary, fontWeight: 500 }}>
            MICEPP
          </Box>
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Header;
