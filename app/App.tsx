import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import AppNavigator from "./navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {
    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        </GestureHandlerRootView>
    )
}
