import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import cp from '../assets/cp.png';

export default function HomePageScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header Section */}
        <View style={styles.header}>
          <Image source={cp} style={styles.image} />
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.headerButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.titleHead}>
          <Text style={styles.title}>
            Simplify Your Freelance Projects with Branded Client Portals
          </Text>
          <Text style={styles.paragText}>
            Manage project updates, share files, send invoices -- all in one beautiful space.
          </Text>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.navText}>Get started for free</Text>
          </TouchableOpacity>
        </View>

        {/* Features */}
        <View style={styles.featuresSection}>
          {[
            {
              title: 'Client Portals',
              desc: 'Create private, shareable pages for each client. No login needed.',
            },
            {
              title: 'File Sharing & Updates',
              desc: 'Upload project files and keep clients informed with updates.',
            },
            {
              title: 'Invoices & Payments',
              desc: 'Send invoices and get paid quickly with Paystack/Flutterwave',
            },
          ].map((feature, index) => (
            <View key={index} style={styles.featureBox}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.feature}>{feature.desc}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.paragText}>2025 Panelly -- All rights reserved</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3DC2AA',
  },
  headerButtonText: {
    color: '#3DC2AA',
    fontWeight: '600',
    fontSize: 16,
  },
  titleHead: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3DC2AA',
    marginBottom: 10,
  },
  paragText: {
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  navButton: {
    backgroundColor: '#3DC2AA',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  navText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  featuresSection: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  featureBox: {
    marginBottom: 20,
  },
  featureTitle: {
    color: '#3DC2AA',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  feature: {
    color: '#333',
    fontSize: 16,
  },
});
