import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoScreen from "../screens/HomeScreen"
import TaskDetailScreen from "../screens/TaskDetailScreen";


export type RootStackParamList = {
  Todo: undefined;
  TaskDetail: { title: string, completed: boolean };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const DetailNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Todo">
        <Stack.Screen name="Todo" component={TodoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: "Task Description" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DetailNavigator;
