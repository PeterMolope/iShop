import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import { useTheme } from '../contexts/ThemeContext';

const { width, height } = Dimensions.get('window');

interface AmbientBackgroundProps {
  children: React.ReactNode;
}

export function AmbientBackground({ children }: AmbientBackgroundProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Primary ambient glow */}
      <LinearGradient
        colors={[
          'rgba(94,106,210,0)',
          colors.glow,
          'rgba(94,106,210,0)',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.ambientGlow,
          {
            top: height * 0.1,
            left: -width * 0.3,
          },
        ]}
      />
      
      {/* Secondary ambient glow */}
      <LinearGradient
        colors={[
          'rgba(78,205,196,0)',
          'rgba(78,205,196,0.1)',
          'rgba(78,205,196,0)',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.ambientGlow,
          {
            bottom: height * 0.2,
            right: -width * 0.2,
          },
        ]}
      />

      {/* Content overlay */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  ambientGlow: {
    position: 'absolute',
    width: width * 1.2,
    height: width * 1.2,
    borderRadius: width * 0.6,
    transform: [{ rotate: '45deg' }],
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});
