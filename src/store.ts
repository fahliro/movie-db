import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/Counter"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>