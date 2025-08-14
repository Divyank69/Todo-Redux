import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import AppNavigator from "./navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <Provider store={store}>
                <AppNavigator />       
              </Provider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}
