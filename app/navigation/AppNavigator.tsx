import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskDetailScreen from "../screens/TaskDetailScreen";
import BottomTabsNavigator from "./BottomTabNavigator";
import { useAppDispatch } from "../redux";
import { useEffect } from "react";
import { fetchTodos } from "../redux/slices";


export type RootStackParamList = {
  Tabs: undefined;
  TaskDetail: { title: string, completed: boolean };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const DetailNavigator = () => {
 const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={BottomTabsNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: "Task Description" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DetailNavigator;
