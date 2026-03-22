import React from 'react';
import { View, StyleSheet, Pressable, Animated } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import { useTheme } from '../contexts/ThemeContext';

interface TouchGlowProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: any;
  glowColor?: string;
}

export function TouchGlow({ children, onPress, style, glowColor }: TouchGlowProps) {
  const { colors } = useTheme();
  const scaleValue = React.useRef(new Animated.Value(1)).current;
  const glowOpacity = React.useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.98,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }),
      Animated.timing(glowOpacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }),
      Animated.timing(glowOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.glowContainer,
          {
            opacity: glowOpacity,
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        <LinearGradient
          colors={[
            glowColor || colors.glow,
            'transparent',
          ]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.glow}
        />
      </Animated.View>
      
      <Pressable
        style={styles.pressable}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        <Animated.View
          style={[
            styles.content,
            {
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          {children}
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  glowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  glow: {
    flex: 1,
    borderRadius: 16,
  },
  pressable: {
    flex: 1,
    zIndex: 2,
  },
  content: {
    flex: 1,
  },
});
