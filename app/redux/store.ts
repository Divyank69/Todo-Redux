import { configureStore } from "@reduxjs/toolkit";
import { todoReducer,screenStateReducer } from "./slices";

export const store =configureStore({
    reducer: {
       todo:todoReducer,
       screenState: screenStateReducer
    },
    
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;