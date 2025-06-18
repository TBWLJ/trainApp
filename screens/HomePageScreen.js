import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomePageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
      <Button title="Contact Us" onPress={() => navigation.navigate('ContactUs')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
