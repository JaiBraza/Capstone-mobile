import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import DeliveryRecordsScreen from './DeliveryRecordsScreen';
import FuelManagementScreen from './FuelManagementScreen';
import ShipmentProgressScreen from './ShipmentProgressScreen'; // Import ShipmentProgressScreen
import ProfileManagementScreen from './ProfileManagementScreen'; // Import ProfileManagementScreen
import SettingsScreen from './SettingsScreen'; // Import SettingsScreen
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        {/* Drawer Header */}
        <View style={styles.drawerHeader}>
          <Text style={styles.drawerHeaderText}>
            SYA TRUCKING
            {'\n'}
            SERVICES
          </Text>
        </View>

        {/* Menu Items */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('DeliveryRecords')}
        >
          <Ionicons name="record-outline" size={24} color="white" />
          <Text style={styles.drawerItemText}>Delivery Records</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('FuelManagement')}
        >
          <Ionicons name="fuel-outline" size={24} color="white" />
          <Text style={styles.drawerItemText}>Fuel Management</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('ShipmentProgress')} // Navigate to ShipmentProgressScreen
        >
          <Ionicons name="ship-outline" size={24} color="white" />
          <Text style={styles.drawerItemText}>Shipment Progress</Text>
        </TouchableOpacity>

       

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Settings')} // Navigate to SettingsScreen
        >
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.drawerItemText}>Settings</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
}

// Drawer Navigator
function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="DeliveryRecords"
        component={DeliveryRecordsScreen}
        options={{ title: 'Delivery Records', headerShown: false }}
      />
      <Drawer.Screen
        name="FuelManagement"
        component={FuelManagementScreen}
        options={{ title: 'Fuel Management', headerShown: false }}
      />
      <Drawer.Screen
        name="ShipmentProgress" // Add ShipmentProgressScreen
        component={ShipmentProgressScreen}
        options={{ title: 'Shipment Progress', headerShown: false }}
      />
      <Drawer.Screen
        name="ProfileManagement" // Add ProfileManagementScreen
        component={ProfileManagementScreen}
        options={{ title: 'Profile Management', headerShown: false }}
      />
      <Drawer.Screen
        name="Settings" // Add SettingsScreen
        component={SettingsScreen}
        options={{ title: 'Settings', headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainDrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#2a364e',
    borderRadius: 10,
  },
  drawerHeader: {
    padding: 20,
    marginBottom: 20,
  },
  drawerHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: 'white',
  },
});