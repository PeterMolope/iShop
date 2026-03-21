import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(false);
  const [locationServices, setLocationServices] = useState(true);

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        { label: 'Push Notifications', value: notifications, onToggle: setNotifications },
        { label: 'Dark Mode', value: darkMode, onToggle: setDarkMode },
        { label: 'Location Services', value: locationServices, onToggle: setLocationServices },
      ]
    },
    {
      title: 'Security',
      items: [
        { label: 'Biometric Login', value: biometric, onToggle: setBiometric },
      ]
    },
    {
      title: 'Account',
      items: [
        { label: 'Edit Profile', type: 'navigation' },
        { label: 'Payment Methods', type: 'navigation' },
        { label: 'Delivery Addresses', type: 'navigation' },
        { label: 'Order History', type: 'navigation' },
      ]
    },
    {
      title: 'Support',
      items: [
        { label: 'Help Center', type: 'navigation' },
        { label: 'Contact Support', type: 'navigation' },
        { label: 'Privacy Policy', type: 'navigation' },
        { label: 'Terms of Service', type: 'navigation' },
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Manage your preferences</Text>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.settingItem}>
                <Text style={styles.settingLabel}>{item.label}</Text>
                {item.type === 'navigation' ? (
                  <Text style={styles.chevron}>›</Text>
                ) : (
                  <Switch
                    value={item.value}
                    onValueChange={item.onToggle}
                    trackColor={{ false: '#ecf0f1', true: '#3498db' }}
                    thumbColor={item.value ? '#ffffff' : '#95a5a6'}
                  />
                )}
              </View>
            ))}
          </View>
        ))}
        
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.versionText}>iShop v1.0.0</Text>
          <Text style={styles.copyrightText}>© 2026 iShop. All rights reserved.</Text>
        </View>
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
    backgroundColor: '#95a5a6',
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
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    padding: 16,
    paddingBottom: 8,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
  },
  settingLabel: {
    fontSize: 16,
    color: '#2c3e50',
  },
  chevron: {
    fontSize: 20,
    color: '#95a5a6',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  versionText: {
    fontSize: 14,
    color: '#95a5a6',
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 12,
    color: '#bdc3c7',
  },
});
