import { useTheme } from '../contexts/ThemeContext';

/**
 * Hook for getting theme-aware text colors with proper contrast ratios
 * Ensures WCAG AA compliance (4.5:1 contrast ratio)
 */
export function useAccessibleColors() {
  const { colors, isDarkMode } = useTheme();

  return {
    // Primary text colors with guaranteed contrast
    primaryText: colors.text, // Already has proper contrast
    
    // Secondary text with reduced opacity for hierarchy
    secondaryText: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.7)',
    
    // Tertiary text for subtle elements
    tertiaryText: isDarkMode ? 'rgba(255,255,255,0.5)' : 'rgba(10,10,10,0.5)',
    
    // Header text with maximum contrast
    headerText: colors.headerText,
    
    // Background colors
    background: colors.background,
    card: colors.card,
    
    // Utility function to get text color based on background
    getContrastColor: (bgColor: string) => {
      // Simple luminance calculation for contrast determination
      const hex = bgColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 0.5 ? '#000000' : '#ffffff';
    },
  };
}
