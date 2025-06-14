import { Text, View, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>Welcome to Raymontech Cafe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})