import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const groceryItems = [
  { id: 1, name: 'Fresh Apples', category: 'Fruits', price: '$3.99', inStock: true },
  { id: 2, name: 'Organic Bananas', category: 'Fruits', price: '$2.49', inStock: true },
  { id: 3, name: 'Whole Milk', category: 'Dairy', price: '$4.29', inStock: true },
  { id: 4, name: 'Greek Yogurt', category: 'Dairy', price: '$5.99', inStock: false },
  { id: 5, name: 'Whole Wheat Bread', category: 'Bakery', price: '$2.99', inStock: true },
  { id: 6, name: 'Chicken Breast', category: 'Meat', price: '$8.99', inStock: true },
  { id: 7, name: 'Fresh Salmon', category: 'Seafood', price: '$12.99', inStock: false },
  { id: 8, name: 'Baby Spinach', category: 'Vegetables', price: '$3.49', inStock: true },
  { id: 9, name: 'Roma Tomatoes', category: 'Vegetables', price: '$2.99', inStock: true },
  { id: 10, name: 'Orange Juice', category: 'Beverages', price: '$4.49', inStock: true },
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Your Grocery List</Text>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {groceryItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCategory}>{item.category}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <View style={styles.stockStatus}>
              <Text style={[
                styles.stockText, 
                { color: item.inStock ? '#27ae60' : '#e74c3c' }
              ]}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#3498db',
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
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  itemCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  itemCategory: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  stockStatus: {
    alignItems: 'flex-end',
  },
  stockText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
