import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import cp from "../assets/cp.png"

export default function HomePageScreen( navigation ) {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <View style={styles.inner}>
        <View>
          <Image source={cp} style={styles.image} />
        </View>
        <View>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginButtom: 20,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    width: 20,
    height: 20
  }
})