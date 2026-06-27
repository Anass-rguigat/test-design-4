import { Box } from '@mui/material';
import Header from './Header';
import { colors } from '../../theme/constants';

const PageLayout = ({ formPanel, journeyPanel, detailPanel }) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: colors.background,
    }}
  >
    <Header />
    <Box
      component="main"
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 2, lg: 2.5 },
        maxWidth: 1800,
        mx: 'auto',
        width: '100%',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, md: 3 },
      }}
    >
      {/* Left — Investor Form */}
      <Box
        sx={{
          order: { xs: 3, lg: 1 },
          width: { xs: '100%', lg: '42%' },
          flexShrink: 0,
          minWidth: 0,
        }}
        aria-label="Données saisies par l'investisseur"
      >
        {formPanel}
      </Box>

      {/* Center — Workflow Parcours */}
      <Box
        component="aside"
        sx={{
          order: { xs: 1, lg: 2 },
          width: { xs: '100%', lg: '28%' },
          flexShrink: 0,
          position: { lg: 'sticky' },
          top: { lg: 96 },
          alignSelf: { lg: 'flex-start' },
          maxHeight: { lg: 'calc(100vh - 120px)' },
          overflowY: { lg: 'auto' },
        }}
        aria-label="Parcours d'investissement"
      >
        {journeyPanel}
      </Box>

      {/* Right — Step Detail Information */}
      <Box
        sx={{
          order: { xs: 2, lg: 3 },
          width: { xs: '100%', lg: '30%' },
          flexShrink: 0,
          minWidth: 0,
          position: { lg: 'sticky' },
          top: { lg: 96 },
          alignSelf: { lg: 'flex-start' },
          maxHeight: { lg: 'calc(100vh - 120px)' },
          overflowY: { lg: 'auto' },
        }}
        aria-label="Informations de l'étape"
      >
        {detailPanel}
      </Box>
    </Box>
  </Box>
);

export default PageLayout;
