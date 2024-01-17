import { createSlice } from "@reduxjs/toolkit"
import { COUNTER } from "../constants"
import { IInitialState } from "../interfaces/Counter"

const initialState: IInitialState = {
    value: 0
}

const counterSlice = createSlice({
    name: COUNTER,
    initialState,
    reducers: {
        increment: (state): void => {
            const { value } = state
            state.value = value >= 0 ? value + 1 : 0  
        },
        decrement: (state): void => {
            const { value } = state
            state.value = value > 0 ? value - 1 : 0  
        },
        reset: (state): void => {
            state.value = 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer