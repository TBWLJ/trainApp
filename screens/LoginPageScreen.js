import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert
} from 'react-native';

export default function LoginPageScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setError('');
    Alert.alert('Success', 'Logged in successfully!');
    // Add login logic or navigation here
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={60}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Login Here</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />

        {error !== '' && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3DC2AA',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3DC2AA',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
