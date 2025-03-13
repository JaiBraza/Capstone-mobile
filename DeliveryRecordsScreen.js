import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function DeliveryRecordsScreen() {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()} // Open the drawer
        >
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Records</Text>
        <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('ProfileManagement')}
      >
          <Ionicons
            name="person-circle-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* Add Trips Button */}
      <TouchableOpacity style={styles.addTripsButton}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
        <Text style={styles.addTripsText}>Add Trips</Text>
      </TouchableOpacity>

      {/* Total Trip Section */}
      <View style={styles.totalTripSection}>
        <Text style={styles.totalTripTitle}>TOTAL TRIP</Text>
        <View style={styles.tripTypeLabels}>
          <Text style={styles.tripTypeLabel}>ONE WAY TRIP</Text>
          <Text style={styles.tripTypeLabel}>ROUND TRIP</Text>
          <Text style={styles.tripTypeLabel}>DOOR TO DOOR TRIP</Text>
        </View>

        {/* Data Display Section (Placeholder) */}
        <View style={styles.dataContainer}>
          {/* Example Data Rows (Replace with your actual data) */}
          <View style={styles.dataRow}>
            <Text style={styles.dataText}>Date</Text>
            <Text style={styles.dataText}>Trip Type</Text>
            <Text style={styles.dataText}>Status</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataText}>03/08/2024</Text>
            <Text style={styles.dataText}>One Way</Text>
            <Text style={styles.dataText}>Completed</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataText}>03/09/2024</Text>
            <Text style={styles.dataText}>Round Trip</Text>
            <Text style={styles.dataText}>Pending</Text>
          </View>
          {/* Add more data rows as needed */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Adjust background color as needed
    padding: 20,
    top:40,
  },
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 5,
  },
  // Add Trips Button Styles
  addTripsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  addTripsText: {
    marginLeft: 5,
  },
  // Total Trip Section Styles
  totalTripSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  totalTripTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tripTypeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tripTypeLabel: {
    fontSize: 12,
    color: '#888',
  },
  // Data Display Styles
  dataContainer: {
    // You might want to add styles for scrolling here if you have a lot of data
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1, // Add a separator line
    borderBottomColor: '#ccc',
  },
  dataText: {
    fontSize: 14,
  },
});