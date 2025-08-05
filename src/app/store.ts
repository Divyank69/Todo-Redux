import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import uiReducer from "../features/ui/uiSlice"

export const store =configureStore({
    reducer: {
       todo:todoReducer,
       ui: uiReducer
    },
    
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;