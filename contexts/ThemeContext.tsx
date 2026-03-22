import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: {
    background: string;
    card: string;
    text: string;
    border: string;
    primary: string;
    secondary: string;
    accent: string;
    tabBar: string;
    tabBarBorder: string;
    tabBarActive: string;
    tabBarInactive: string;
    header: string;
    headerText: string;
    glass: string;
    glow: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightColors = {
  background: '#fafafa',
  card: 'rgba(255,255,255,0.8)',
  text: '#0a0a0a',
  border: 'rgba(0,0,0,0.08)',
  primary: '#5E6AD2',
  secondary: '#FF6B6B',
  accent: '#4ECDC4',
  tabBar: 'rgba(255,255,255,0.9)',
  tabBarBorder: 'rgba(0,0,0,0.05)',
  tabBarActive: '#5E6AD2',
  tabBarInactive: '#666666',
  header: '#5E6AD2',
  headerText: '#ffffff',
  glass: 'rgba(255,255,255,0.05)',
  glow: 'rgba(94,106,210,0.15)',
};

const darkColors = {
  background: '#050506',
  card: 'rgba(255,255,255,0.05)',
  text: '#ffffff',
  border: 'rgba(255,255,255,0.08)',
  primary: '#5E6AD2',
  secondary: '#FF6B6B',
  accent: '#4ECDC4',
  tabBar: 'rgba(5,5,6,0.9)',
  tabBarBorder: 'rgba(255,255,255,0.08)',
  tabBarActive: '#5E6AD2',
  tabBarInactive: '#666666',
  header: '#5E6AD2',
  headerText: '#ffffff',
  glass: 'rgba(255,255,255,0.05)',
  glow: 'rgba(94,106,210,0.25)',
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
