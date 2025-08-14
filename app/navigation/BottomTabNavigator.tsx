import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/colors";
import { TodoScreen, AllTodosScreen, PendingTodosScreen, CompletedTodosScreen } from '../screens';


const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName = "list";
                    if (route.name === "Home") {
                        iconName = "home-outline";
                    } else if (route.name === "All Todos") {
                        iconName = "list";
                    } else if (route.name === "Pending") {
                        iconName = "time-outline";
                    } else if (route.name === "Completed") {
                        iconName = "checkmark-done-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.gray,
            })}
        >
            <Tab.Screen name="Home" component={TodoScreen} />
            <Tab.Screen name="All Todos" component={AllTodosScreen} />
            <Tab.Screen name="Pending" component={PendingTodosScreen} />
            <Tab.Screen name="Completed" component={CompletedTodosScreen} />

        </Tab.Navigator>
    );
}
