import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image, // Import Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileManagementScreen() {
  const navigation = useNavigation();

  // State variables for personal information (examples)
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [mobile, setMobile] = useState('+1 123-456-7890');
  const [address, setAddress] = useState('123 Main St, Anytown');

  // State variables for license information (examples)
  const [licenseNumber, setLicenseNumber] = useState('DL123456789');
  const [expiryDate, setExpiryDate] = useState('12/31/2025');
  const [licenseClass, setLicenseClass] = useState('Class C');

  // State variable for profile image (example)
  const [profileImage, setProfileImage] = useState(require('./assets/background.png')); // Replace with your image

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, you might clear user tokens, navigate to the login screen, etc.
    console.log('Logout pressed');
    navigation.navigate('Login'); // Example: Navigate to the login screen
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
        <Text style={styles.headerTitle}>Profile</Text>
       
      </View>

      {/* Profile Content */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.personalInfoContent}>
            {/* Profile Image */}
            <Image source={profileImage} style={styles.profileImage} />

            {/* Personal Information Details */}
            <View style={styles.personalDetails}>
              {/* Name */}
              <View style={styles.profileRow}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{name}</Text>
              </View>

              {/* Email */}
              <View style={styles.profileRow}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{email}</Text>
              </View>

              {/* Mobile */}
              <View style={styles.profileRow}>
                <Text style={styles.label}>Mobile</Text>
                <Text style={styles.value}>{mobile}</Text>
              </View>

              {/* Address */}
              <View style={styles.profileRow}>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value}>{address}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>License Information</Text>

          {/* License Number */}
          <View style={styles.profileRow}>
            <Text style={styles.label}>License Number</Text>
            <Text style={styles.value}>{licenseNumber}</Text>
          </View>

          {/* Expiry Date */}
          <View style={styles.profileRow}>
            <Text style={styles.label}>Expiry Date</Text>
            <Text style={styles.value}>{expiryDate}</Text>
          </View>

          {/* License Class */}
          <View style={styles.profileRow}>
            <Text style={styles.label}>License Class</Text>
            <Text style={styles.value}>{licenseClass}</Text>
          </View>
        </View>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
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
    right: '150',

  },
  profileButton: {
    padding: 5,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  personalInfoContent: {
    flexDirection: 'row', // Arrange image and details horizontally
  },
  profileImage: {
    width: 100, // Adjust image size as needed
    height: 100,
    borderRadius: 50, // Make it circular
    marginRight: 20, // Add spacing between image and details
  },
  personalDetails: {
    flex: 1, // Take remaining space
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#19284D',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'red', // Example button color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});