import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function SplashScreen({ navigation }: any) {
  const { colors } = useTheme();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      const timer = setTimeout(() => {
        navigation.replace('Main');
      }, 1500);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.goText}>i</Text>
        <Text style={styles.greenText}>Shop</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32', // Dark green background
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to bottom left like in image
    paddingLeft: 40,
  },
  logoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  goText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: -10,
  },
  greenText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#81C784', // Lighter green for "GREEN"
  },
});
