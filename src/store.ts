import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/Counter"
import moviesReducer from "./slices/Movies"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        movies: moviesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>