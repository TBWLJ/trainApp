import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.locationLabel}>Home</Text>
            <Text style={styles.address}>C/6, West End Park, Thaltej..</Text>
          </View>
          <View style={styles.iconGroup}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="settings-outline" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="user" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>

        {/* Toggle Buttons */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={styles.deliveryButton}>
            <Text style={styles.deliveryText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.takeawayButton}>
            <Text style={styles.takeawayText}>Takeaway</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoTitle}>Crazy offer just for you!</Text>
          <Text style={styles.promoSubtitle}>Flat</Text>
          <Text style={styles.promoDiscount}>40% OFF!</Text>
          <View style={styles.promoImages}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/cola-1233132_1280.jpg' }}
              style={styles.promoImage}
            />
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg' }}
              style={styles.promoImage}
            />
          </View>
        </View>

        {/* Category Section */}
        <Text style={styles.categoryTitle}>CATEGORY</Text>
        <View style={styles.categories}>
          <View style={styles.categoryItem}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg' }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryLabel}>Pizza</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg' }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryLabel}>Burger</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={{ uri: 'https://i.imgur.com/zLDcLMB.jpeg' }} // Example thali image from imgur
              style={styles.categoryImage}
            />
            <Text style={styles.categoryLabel}>Thali</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationLabel: {
    fontSize: 12,
    color: '#888',
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 100,
    marginLeft: 8,
  },
  searchBar: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  deliveryButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  takeawayButton: {
    backgroundColor: '#ffe6e6',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  deliveryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  takeawayText: {
    color: '#ff3b30',
    fontWeight: 'bold',
  },
  promoBanner: {
    backgroundColor: '#ff3b30',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  promoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  promoSubtitle: {
    color: '#fff',
    fontSize: 16,
  },
  promoDiscount: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 12,
  },
  promoImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promoImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
});
