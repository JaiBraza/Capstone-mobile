import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit'; // Import BarChart

export default function FuelManagementScreen() {
  const navigation = useNavigation();

  // Example data for the bar chart
  const chartData = {
    labels: ['Fuel Consumed (Litres)'],
    datasets: [
      {
        data: [26], // Example data value
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fuel Management</Text>
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

      {/* Fuel Management Content */}
      <View style={styles.fuelContent}>
        {/* Statistics Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Total Kilometers</Text>
            <Text style={styles.statValue}>244 KL</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Total Fuel Consumed</Text>
            <Text style={styles.statValue}>50L</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Fuel Efficiency</Text>
            <Text style={styles.statValue}>6.7 Km/L</Text>
          </View>
        </View>

        {/* Bar Chart Section */}
        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={350} // Adjust width as needed
            height={220} // Adjust height as needed
            yAxisLabel=""
            chartConfig={{
              backgroundColor: '#e2e2e2',
              backgroundGradientFrom: '#e2e2e2',
              backgroundGradientTo: '#e2e2e2',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Green color
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  fuelContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Changed to space-between
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    // Removed marginBottom from statItem
  },
  statLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 5, // Removed marginBottom from statLabel
    color: '#333',
    textAlign: 'center', // Center the text within the container
  },
  statValue: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center', // Center the text within the container
  },
  chartContainer: {
    alignItems: 'center',
  },
});