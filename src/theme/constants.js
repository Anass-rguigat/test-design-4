/**
 * MICEPP-inspired palette — aligned with micepp.gov.ma green branding
 * @see https://micepp.gov.ma/
 */
export const colors = {
  primary: '#008751',
  primaryLight: '#00A86B',
  primaryDark: '#006B3F',
  primaryDarker: '#004D2E',
  primaryMuted: 'rgba(0, 135, 81, 0.06)',
  primaryMutedLight: 'rgba(0, 135, 81, 0.04)',
  primaryBorder: 'rgba(0, 135, 81, 0.15)',
  primaryBorderStrong: 'rgba(0, 135, 81, 0.25)',
  accent: '#00A86B',
  success: '#008751',
  successLight: '#E6F5EF',
  background: '#F7FAF8',
  card: '#FFFFFF',
  border: '#E2E8E4',
  text: '#1A2E24',
  textSecondary: '#5C6F65',
  locked: '#9CA3AF',
  lockedBg: '#F3F4F6',
  error: '#DC2626',
  warning: '#D97706',
  glass: 'rgba(255, 255, 255, 0.82)',
  glassBorder: 'rgba(0, 135, 81, 0.08)',
};

export const layout = {
  radius: 18,
  radiusSm: 12,
  radiusLg: 24,
  sidebarWidth: '30%',
  panelWidth: '70%',
  headerHeight: 80,
  formPadding: 40,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
};

export const shadows = {
  soft: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.05)',
  medium: '0 4px 12px rgba(0, 0, 0, 0.07), 0 8px 24px rgba(0, 0, 0, 0.05)',
  hover: '0 8px 24px rgba(0, 135, 81, 0.14), 0 4px 12px rgba(0, 0, 0, 0.05)',
  card: '0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.04)',
  glass: '0 8px 32px rgba(0, 135, 81, 0.06)',
};

export const transitions = {
  fast: '150ms ease',
  normal: '250ms ease',
  slow: '350ms ease',
};

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
};
