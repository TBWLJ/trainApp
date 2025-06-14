import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header/>
      </View>
      <Text style={styles.text}>Ayomide is coming! 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff', // Tailwind white
    paddingTop: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6', // Tailwind blue-600
  },
});