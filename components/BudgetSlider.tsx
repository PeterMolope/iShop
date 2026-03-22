import React from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../contexts/ThemeContext';

interface BudgetSliderProps {
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
  currency?: string;
}

export function BudgetSlider({ min, max, value, onValueChange, currency = '$' }: BudgetSliderProps) {
  const { colors } = useTheme();
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      },
      onPanResponderMove: (evt, gestureState) => {
        const { dx } = gestureState;
        const sliderWidth = 280; // Approximate slider width
        const newValue = Math.max(min, Math.min(max, min + (dx / sliderWidth) * (max - min)));
        onValueChange(Math.round(newValue));
      },
      onPanResponderRelease: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      },
    })
  ).current;

  const percentage = ((value - min) / (max - min)) * 100;
  const glowIntensity = Math.min(1, value / max);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.label, { color: colors.text }]}>Budget</Text>
        <Text style={[styles.value, { color: colors.primary }]}>
          {currency}{value}
        </Text>
      </View>
      
      <View style={styles.sliderContainer}>
        <View style={[styles.track, { backgroundColor: colors.glass }]}>
          <Animated.View
            style={[
              styles.progress,
              {
                width: `${percentage}%`,
                backgroundColor: colors.primary,
                shadowColor: colors.primary,
                shadowOpacity: glowIntensity * 0.5,
                shadowRadius: 8 + glowIntensity * 4,
              },
            ]}
          />
        </View>
        
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.thumb,
            {
              left: `${percentage}%`,
              backgroundColor: colors.primary,
              shadowColor: colors.primary,
              shadowOpacity: glowIntensity * 0.8,
              shadowRadius: 12 + glowIntensity * 8,
              transform: [{ translateX: -15 }],
            },
          ]}
        >
          <Text style={styles.thumbEmoji}>🛒</Text>
        </Animated.View>
      </View>
      
      <View style={styles.range}>
        <Text style={[styles.rangeText, { color: colors.text, opacity: 0.6 }]}>
          {currency}{min}
        </Text>
        <Text style={[styles.rangeText, { color: colors.text, opacity: 0.6 }]}>
          {currency}{max}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  sliderContainer: {
    height: 50,
    justifyContent: 'center',
    position: 'relative',
  },
  track: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 3,
  },
  thumb: {
    position: 'absolute',
    top: '50%',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -15 }],
  },
  thumbEmoji: {
    fontSize: 16,
  },
  range: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  rangeText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.5,
  },
});
