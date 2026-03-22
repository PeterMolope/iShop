import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import DashboardScreen from './screens/DashboardScreen';
import CartScreen from './screens/CartScreen';
import SettingsScreen from './screens/SettingsScreen';
import SplashScreen from './screens/SplashScreen';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AmbientBackground } from './components/AmbientBackground';
import { TabIcon } from './components/TabIcon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          height: 50,
        },
        tabBarActiveTintColor: colors.tabBarActive,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            tint={colors.background === '#050506' ? 'dark' : 'light'}
            style={[styles.tabBarBlur, { borderColor: colors.glassBorder }]}
          />
        ),
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Shop', // Keep for accessibility
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Shop" />
          ),
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart', // Keep for accessibility
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Cart" />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings', // Keep for accessibility
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Settings" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppContent() {
  const { colors } = useTheme();

  return (
    <AmbientBackground>
      <SafeAreaView style={[styles.container, { backgroundColor: 'transparent' }]}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </SafeAreaView>
    </AmbientBackground>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
});
