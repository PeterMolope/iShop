import React from 'react';
import { View, ViewStyle } from 'react-native';
import { ShoppingBag, ShoppingCart, Settings } from 'lucide-react-native';
import { useTheme } from '../contexts/ThemeContext';

interface TabIconProps {
  focused: boolean;
  name: 'Shop' | 'Cart' | 'Settings';
  size?: number;
  strokeWidth?: number;
}

export function TabIcon({ focused, name, size = 24, strokeWidth = 2 }: TabIconProps) {
  const { colors } = useTheme();
  
  const iconColor = focused ? colors.tabBarActive : colors.tabBarInactive;
  const accessibilityLabel = name; // Original label for screen readers

  const renderIcon = () => {
    switch (name) {
      case 'Shop':
        return (
          <ShoppingBag 
            size={size} 
            strokeWidth={strokeWidth}
            color={iconColor}
          />
        );
      case 'Cart':
        return (
          <ShoppingCart 
            size={size} 
            strokeWidth={strokeWidth}
            color={iconColor}
          />
        );
      case 'Settings':
        return (
          <Settings 
            size={size} 
            strokeWidth={strokeWidth}
            color={iconColor}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View 
      style={styles.container}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ selected: focused }}
    >
      {renderIcon()}
    </View>
  );
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  } as ViewStyle,
};
