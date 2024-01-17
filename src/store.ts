import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./slices/App"
import counterReducer from "./slices/Counter"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        app: appReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>