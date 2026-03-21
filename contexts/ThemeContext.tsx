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
    tabBar: string;
    tabBarBorder: string;
    tabBarActive: string;
    tabBarInactive: string;
    header: string;
    headerText: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightColors = {
  background: '#f5f5f5',
  card: '#ffffff',
  text: '#333333',
  border: '#e0e0e0',
  primary: '#2196F3',
  secondary: '#FF9800',
  tabBar: '#ffffff',
  tabBarBorder: '#e0e0e0',
  tabBarActive: '#2196F3',
  tabBarInactive: '#666666',
  header: '#FF9800',
  headerText: '#ffffff',
};

const darkColors = {
  background: '#121212',
  card: '#1e1e1e',
  text: '#ffffff',
  border: '#333333',
  primary: '#64B5F6',
  secondary: '#FFB74D',
  tabBar: '#1e1e1e',
  tabBarBorder: '#333333',
  tabBarActive: '#64B5F6',
  tabBarInactive: '#888888',
  header: '#FF9800',
  headerText: '#ffffff',
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
