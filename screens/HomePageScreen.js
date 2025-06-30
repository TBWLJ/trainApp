import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import cp from "../assets/cp.png"

export default function HomePageScreen( navigation ) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <View>
            <Image source={cp} style={styles.image} />
          </View>
          <View>
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
          </View>
        </View>
        <View>
          <View style={styles.titleHead}>
            <Text style={styles.title}>Simplify Your Freelance Projects with Branded Client Portals</Text>
            <Text style={styles.paragText}>Manage project updates, share files, send invoices -- all in one beautiful space.</Text>
            <View style={styles.navButtonHead}>
              <TouchableOpacity
              style={styles.navButton}
            >
              <Text style={styles.navText}>Get started for free</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bigHead}>
          <View style={styles.bigHead}>
            <Text style={styles.featureTitle}>Client Portals</Text>
            <Text style={styles.feature}>Create private, shareable pages for each client. No login needed.</Text>
          </View>
          <View style={styles.bigHead}>
            <Text style={styles.featureTitle}>File Sharing & Updates</Text>
            <Text style={styles.feature}>Upload projetc files and keep clients informed with updates.</Text>
          </View>
          <View style={styles.bigHead}>
            <Text style={styles.featureTitle}>Invoices & Payments</Text>
            <Text style={styles.feature}>Send invoices and get paid quickly with Paystack/Flutterwave</Text>
          </View>
        </View>
        {/* Footer */}
        <View>
          <Text style={styles.paragText}>2025 Panelly -- All rights reserverd</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  image: {
    width: 30,
    height: 30
  },
  titleHead: {
    display: "flex",
    marginTop: 30,
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Impact",
    lineHeight: 50,
    color: "#3DC2AA"
  },
  paragText: {
    textAlign: "center"
  },
  navButtonHead: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    margin: 12
  },
  navButton: {
    backgroundColor: "#3DC2AA",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12
  },
  navText: {
    color: "#fff",
    fontWeight: "bold"
  },
  bigHead: {
    paddingVertical: 16,
    paddingHorizontal: 10
  },
  featureTitle: {
    color: "#3DC2AA",
    fontWeight: "bold",
    fontSize: 20
  },
  feature: {
    color: "#333",
    fontSize: 16
  }
})