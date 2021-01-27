import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment(state, action) {
            console.log(state, action);
            return state++;
        },
        decrement(state, action) {
            console.log(state, action);
            return state--;
        },
    }
})

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;