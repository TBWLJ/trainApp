import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  ScrollView 
} from 'react-native';

export default function LoginPageScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height"
    >
      {/* Only one direct child is passed here */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {/* Wrap everything inside ScrollView to enable scrolling when keyboard is visible */}
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Login Here</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            keyboardType="default"
          />
          <Button title="Login" onPress={() => {}} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20, // Prevents the bottom part of the content from being covered by the keyboard
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
