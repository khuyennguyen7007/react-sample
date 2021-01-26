import { createSlice, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: [thunkMiddleware],
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
