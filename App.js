import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePageScreen from "./screens/HomePageScreen";
import LoginPageScreen from "./screens/LoginPageScreen";
import SignupPageScreen from "./screens/SignupPageScreen";
import ContactUsPageScreen from "./screens/ContactUsPageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePageScreen} />
        <Stack.Screen name="Login" component={LoginPageScreen} />
        <Stack.Screen name="Signup" component={SignupPageScreen} />
        <Stack.Screen name="Contact" component={ContactUsPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}