import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/SplashScreen";
import HomePageScreen from "./screens/HomePageScreen";
import LoginPageScreen from "./screens/LoginPageScreen";
import SignupPageScreen from "./screens/SignupPageScreen";
import Dashboard from "./screens/Dashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" // splash will be shown first.
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomePageScreen} />
        <Stack.Screen name="Login" component={LoginPageScreen} />
        <Stack.Screen name="Signup" component={SignupPageScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
