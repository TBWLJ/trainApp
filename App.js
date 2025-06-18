import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/SplashScreen"; // <- Add this line
import HomePageScreen from "./screens/HomePageScreen";
import LoginPageScreen from "./screens/LoginPageScreen";
import SignupPageScreen from "./screens/SignupPageScreen";
import ContactUsPageScreen from "./screens/ContactUsPageScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" // <- Show Splash first
        screenOptions={{ headerShown: false }} // Hide headers
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomePageScreen} />
        <Stack.Screen name="Login" component={LoginPageScreen} />
        <Stack.Screen name="Signup" component={SignupPageScreen} />
        <Stack.Screen name="Contact" component={ContactUsPageScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
