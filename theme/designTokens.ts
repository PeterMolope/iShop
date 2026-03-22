export const DesignTokens = {
  // Deep Space Color Palette
  colors: {
    // Backgrounds
    background: {
      deep: '#020203',
      base: '#050506',
      elevated: '#0a0a0c',
    },
    surface: {
      default: 'rgba(255,255,255,0.05)',
      hover: 'rgba(255,255,255,0.08)',
      glass: 'rgba(255,255,255,0.03)',
    },
    // Text
    foreground: {
      primary: '#EDEDEF',
      muted: '#8A8F98',
      subtle: 'rgba(255,255,255,0.60)',
    },
    // Accent
    accent: {
      primary: '#5E6AD2',
      bright: '#6872D9',
      glow: 'rgba(94,106,210,0.3)',
    },
    // Borders
    border: {
      default: 'rgba(255,255,255,0.06)',
      hover: 'rgba(255,255,255,0.10)',
      accent: 'rgba(94,106,210,0.30)',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      primary: 'Inter',
      mono: 'SF Mono, Monaco, monospace',
    },
    fontSize: {
      display: 48,
      h1: 36,
      h2: 28,
      h3: 20,
      bodyLarge: 18,
      body: 16,
      label: 12,
    },
    fontWeight: {
      semibold: '600',
      normal: '400',
    },
    letterSpacing: {
      tight: -0.5,
      normal: 0,
      wide: 1,
    },
  },

  // Spacing (4px base unit)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },

  // Radius
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
  },

  // Shadows (Multi-layer for depth)
  shadows: {
    card: [
      { shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.06, shadowRadius: 1, shadowColor: '#000000' },
      { shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.4, shadowRadius: 20, shadowColor: '#000000' },
      { shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.2, shadowRadius: 40, shadowColor: '#000000' },
    ],
    cardHover: [
      { shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 1, shadowColor: '#FFFFFF' },
      { shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.5, shadowRadius: 40, shadowColor: '#000000' },
      { shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 80, shadowColor: '#5E6AD2' },
    ],
    accent: [
      { shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 1, shadowColor: '#5E6AD2' },
      { shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 12, shadowColor: '#5E6AD2' },
      { shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 0, shadowColor: '#FFFFFF' },
    ],
  },

  // Animation
  animation: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 600,
      ambient: 8000,
    },
    easing: {
      expo: [0.16, 1, 0.3, 1], // expo-out
      ease: 'ease-out',
    },
  },

  // Touch targets (44dp minimum for accessibility)
  touch: {
    minSize: 44,
  },
};

// Helper function to create shadow styles
export const createShadowStyle = (shadowLayers: typeof DesignTokens.shadows.card) => {
  return shadowLayers.reduce((acc, layer, index) => {
    const style: any = {
      shadowColor: layer.shadowColor || '#000000',
      shadowOffset: layer.shadowOffset,
      shadowOpacity: layer.shadowOpacity,
      shadowRadius: layer.shadowRadius,
    };
    return { ...acc, ...style };
  }, {});
};
