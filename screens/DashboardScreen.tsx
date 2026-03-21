import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>iShop</Text>
        <Text style={styles.subtitle}>Your Grocery Store</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          {groceryData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productCard}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productCategory}>{item.category}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
              <View style={styles.stockStatus}>
                <Text style={[
                  styles.stockText, 
                  { color: item.inStock ? '#176619' : '#F44336' }
                ]}>
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  productCard: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 4,
  },
  stockStatus: {
    alignItems: 'flex-end',
  },
  stockText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
