import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardHome from "../dashboard/DashboardHome"


const Tab = createBottomTabNavigator();

export default function Dashboard() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={DashboardHome} />
        </Tab.Navigator>
    );
}