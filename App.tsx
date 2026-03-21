import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import DashboardScreen from './screens/DashboardScreen';
import CartScreen from './screens/CartScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopWidth: 1,
              borderTopColor: '#e0e0e0',
              paddingBottom: 8,
              paddingTop: 8,
              height: 80,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
            tabBarActiveTintColor: '#2196F3',
            tabBarInactiveTintColor: '#666',
          }}
        >
          <Tab.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{
              tabBarLabel: 'Shop',
              tabBarIcon: () => null,
            }}
          />
          <Tab.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: () => null,
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: () => null,
            }}
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
