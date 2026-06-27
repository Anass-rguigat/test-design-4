import { createTheme } from '@mui/material/styles';
import { colors, layout, shadows } from './constants';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: '#FFFFFF',
    },
    success: {
      main: colors.success,
      light: colors.successLight,
      contrastText: '#FFFFFF',
    },
    background: {
      default: colors.background,
      paper: colors.card,
    },
    text: {
      primary: colors.text,
      secondary: colors.textSecondary,
    },
    divider: colors.border,
    error: {
      main: colors.error,
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 700, fontSize: '2rem', lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.4 },
    h4: { fontWeight: 600, fontSize: '1.125rem', lineHeight: 1.4 },
    h5: { fontWeight: 600, fontSize: '1rem', lineHeight: 1.5 },
    h6: { fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.5 },
    body1: { fontSize: '0.9375rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: layout.radius,
  },
  shadows: [
    'none',
    shadows.soft,
    shadows.medium,
    shadows.card,
    ...Array(21).fill(shadows.soft),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
          color: colors.text,
        },
        '*:focus-visible': {
          outline: `2px solid ${colors.primary}`,
          outlineOffset: 2,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: layout.radiusSm,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: shadows.soft,
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.primary} 100%)`,
          },
          '&.Mui-disabled': {
            background: colors.border,
            color: colors.textSecondary,
          },
        },
        outlined: {
          borderColor: colors.border,
          color: colors.text,
          '&:hover': {
            borderColor: colors.primary,
            backgroundColor: colors.primaryMutedLight,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: layout.radiusSm,
            backgroundColor: colors.card,
            transition: `border-color ${layout.spacing ? '250ms' : '250ms'} ease, box-shadow 250ms ease`,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primaryLight,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary,
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: colors.primary,
            '& + .MuiSwitch-track': {
              backgroundColor: colors.primary,
              opacity: 0.5,
            },
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: layout.radiusSm,
          height: 8,
          backgroundColor: colors.border,
        },
        bar: {
          borderRadius: layout.radiusSm,
          background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
        },
      },
    },
  },
});

export default theme;
