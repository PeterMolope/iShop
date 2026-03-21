import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function SplashScreen({ navigation }: any) {
  const { colors } = useTheme();
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);
  const loadingAnim = new Animated.Value(0);

  useEffect(() => {
    // Logo animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Loading bar animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(loadingAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(loadingAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Navigate to main app after delay
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={[styles.logoCircle, { backgroundColor: colors.primary }]}>
          <Text style={styles.logoText}>i</Text>
        </View>
        <Text style={[styles.appName, { color: colors.text }]}>Shop</Text>
        <Text style={[styles.tagline, { color: colors.text }]}>Your Grocery Store</Text>
      </Animated.View>
      
      <Animated.View
        style={[
          styles.loadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <View style={styles.loadingBar}>
          <Animated.View
            style={[
              styles.loadingProgress,
              {
                backgroundColor: colors.primary,
                width: loadingAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
        <Text style={[styles.loadingText, { color: colors.text }]}>
          Loading your shopping experience...
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    opacity: 0.7,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
  },
  loadingBar: {
    width: 200,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 16,
  },
  loadingProgress: {
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
  loadingText: {
    fontSize: 14,
    opacity: 0.6,
  },
});
