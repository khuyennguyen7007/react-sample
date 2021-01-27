import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '@web/services/counter/slice';
import { userReducer } from '@web/services/user/slices';

export const rootReducer = combineReducers({
  user: userReducer,
  count: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;
