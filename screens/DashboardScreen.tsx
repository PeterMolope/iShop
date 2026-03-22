import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../contexts/ThemeContext';
import { useAccessibleColors } from '../hooks/useAccessibleColors';
import { GlassCard, PrecisionButton, TouchGlow, BudgetSlider } from '../components';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const groceryData = [
  { id: 1, name: 'Fresh Apples', category: 'Fruits', price: '$3.99', inStock: true },
  { id: 2, name: 'Whole Milk', category: 'Dairy', price: '$2.49', inStock: true },
  { id: 3, name: 'Bread', category: 'Bakery', price: '$1.99', inStock: false },
  { id: 4, name: 'Bananas', category: 'Fruits', price: '$1.29', inStock: true },
  { id: 5, name: 'Eggs', category: 'Dairy', price: '$4.99', inStock: true },
  { id: 6, name: 'Tomatoes', category: 'Vegetables', price: '$2.99', inStock: true },
  { id: 7, name: 'Chicken Breast', category: 'Meat', price: '$8.99', inStock: false },
  { id: 8, name: 'Orange Juice', category: 'Beverages', price: '$3.49', inStock: true },
];

export default function DashboardScreen() {
  const { colors } = useTheme();
  const { primaryText, secondaryText, headerText } = useAccessibleColors();
  const scrollY = useSharedValue(0);
  const [budget, setBudget] = React.useState(50);
  
  const headerScale = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: Math.max(0.8, 1 - scrollY.value / 200) },
      ],
      opacity: Math.max(0.7, 1 - scrollY.value / 300),
    };
  });

  const handleItemPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View style={[styles.header, headerScale]}>
        <Text style={[styles.title, { color: headerText }]}>iShop</Text>
        <Text style={[styles.subtitle, { color: secondaryText }]}>Your Grocery Store</Text>
      </Animated.View>
      
      <ScrollView 
        style={styles.content}
        onScroll={(e) => {
          scrollY.value = e.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: primaryText }]}>Featured Products</Text>
          {groceryData.map((item) => (
            <TouchGlow key={item.id} onPress={handleItemPress} style={styles.productCard}>
              <GlassCard style={styles.productInner}>
                <View style={styles.productPressable}>
                  <View style={styles.productInfo}>
                    <Text style={[styles.productName, { color: primaryText, letterSpacing: -0.5 }]}>{item.name}</Text>
                    <Text style={[styles.productCategory, { color: secondaryText }]}>{item.category}</Text>
                    <Text style={[styles.productPrice, { color: colors.primary }]}>{item.price}</Text>
                  </View>
                  <View style={styles.stockStatus}>
                    <Text style={[
                      styles.stockText, 
                      { color: item.inStock ? colors.accent : colors.secondary }
                    ]}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </Text>
                  </View>
                </View>
              </GlassCard>
            </TouchGlow>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: primaryText }]}>Budget Settings</Text>
          <GlassCard style={styles.budgetCard}>
            <BudgetSlider
              min={10}
              max={200}
              value={budget}
              onValueChange={setBudget}
            />
          </GlassCard>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: primaryText }]}>Quick Actions</Text>
          <View style={styles.actionButtons}>
            <PrecisionButton 
              title="Add to Cart" 
              variant="primary"
              onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
            />
            <PrecisionButton 
              title="View Cart" 
              variant="secondary"
              onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    letterSpacing: -0.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  productCard: {
    marginBottom: 12,
  },
  productInner: {
    flex: 1,
  },
  productPressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  productCategory: {
    fontSize: 14,
    marginTop: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  stockStatus: {
    alignItems: 'flex-end',
  },
  stockText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  actionButtons: {
    gap: 12,
  },
  budgetCard: {
    padding: 20,
  },
});
