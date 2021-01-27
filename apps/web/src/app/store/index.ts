import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
