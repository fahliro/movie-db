import { createSlice } from "@reduxjs/toolkit"
import { APP } from "../constants"
import { IInitialState } from "../interfaces/App"

const initialState: IInitialState = {
    isDetail: false
}

const appSlice = createSlice({
    name: APP,
    initialState,
    reducers: {
        onClickDetail: (state, action): void => {
            const {payload} = action
            const {isDetail} = payload

            state.isDetail = isDetail
        },
        reset: (state): void => {
            state.isDetail = false
        }
    }
})

export const { onClickDetail, reset } = appSlice.actions
export default appSlice.reducer